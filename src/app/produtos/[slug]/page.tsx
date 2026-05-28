import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { produtos, site } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug)
}

export async function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProduto(slug)
  if (!p) return {}
  return {
    title: p.seoTitle,
    description: p.seoDesc,
    alternates: { canonical: `${site.url}/produtos/${p.slug}/` },
    openGraph: {
      title: p.seoTitle,
      description: p.seoDesc,
      images: [{ url: p.imagem }],
      type: "website",
    },
  }
}

const linhaConfig = {
  blue:  { accent: "#0D1B3E", light: "#EEF1F8", barColor: "#0D1B3E" },
  sky:   { accent: "#6AADCB", light: "#EAF4F9", barColor: "#6AADCB" },
  navy:  { accent: "#0D1B3E", light: "#EEF1F8", barColor: "#0D1B3E" },
}

const instSteps = [
  { titulo: "Hidráulica primeiro", desc: "Conecte a mangueira (mesma bitola da saída, parede mín. 2mm) antes de qualquer contato com a rede elétrica." },
  { titulo: "Corda de segurança", desc: "Fixe o nylon 6mm no olhal. O cabo elétrico não é suporte — nunca suspender por ele." },
  { titulo: "Desça e centralize", desc: "Mín. 40cm do fundo, máx. 20m de profundidade, perpendicular ao poço, completamente submersa." },
  { titulo: "Energia por último", desc: "Com tudo pronto, conecte na tensão correta. Nunca ligue em seco — a água é o refrigerante." },
]

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params
  const produto = getProduto(slug)
  if (!produto) notFound()

  const cfg = linhaConfig[produto.linhaCor as keyof typeof linhaConfig]
  const outros = produtos.filter((p) => p.slug !== produto.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nomeCompleto,
    description: produto.descricao,
    image: `${site.url}${produto.imagem}`,
    brand: { "@type": "Brand", name: "PR Bombas" },
    manufacturer: { "@type": "Organization", name: site.razaoSocial },
    countryOfOrigin: "BR",
    url: `${site.url}/produtos/${produto.slug}/`,
    offers: { "@type": "Offer", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: produto.faq.map((f) => ({
      "@type": "Question", name: f.p,
      acceptedAnswer: { "@type": "Answer", text: f.r },
    })),
  }

  const breadLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Produtos", item: `${site.url}/#produtos` },
      { "@type": "ListItem", position: 3, name: produto.nomeCompleto, item: `${site.url}/produtos/${produto.slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadLd) }} />

      {/* HERO */}
      <section className="bg-[#0D1B3E]">
        <div className="max-w-6xl mx-auto px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/30 text-xs pt-24 pb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#produtos" className="hover:text-white/60 transition-colors">Produtos</Link>
            <span>/</span>
            <span className="text-white/50">{produto.nome}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center pb-20">

            {/* Texto */}
            <div>
              <p className="text-[#6AADCB] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Linha {produto.linha}
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                {produto.nomeCompleto}
              </h1>
              <p className="text-white/45 text-base leading-relaxed max-w-sm mb-8">
                {produto.descricaoCurta}
              </p>

              {/* Specs */}
              <div className="flex gap-8 mb-10 pb-10 border-b border-white/8">
                {[
                  { l: "Saída", v: produto.saida },
                  { l: "Prof. máxima", v: produto.profundidadeMax },
                  { l: "Tubulação", v: produto.tubulacao },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1">{s.l}</p>
                    <p className="text-white font-semibold text-sm">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* CTAs — contidos */}
              <div className="flex items-center gap-3">
                <a
                  href={`${site.whatsappLink}?text=Olá!%20Quero%20orçamento%20da%20${encodeURIComponent(produto.nomeCompleto)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#E65100] hover:bg-[#FF6D00] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Pedir Orçamento
                </a>
                <a
                  href={`mailto:${site.email}?subject=Orçamento: ${produto.nomeCompleto}`}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  ou enviar e-mail →
                </a>
              </div>
            </div>

            {/* Imagem — produto como protagonista */}
            <div className="flex items-end justify-center relative" style={{ height: 420 }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#6AADCB]/8 blur-3xl" />
              <Image
                src={produto.imagem}
                alt={produto.nomeCompleto}
                width={280}
                height={420}
                className="object-contain object-bottom relative z-10 drop-shadow-2xl"
                style={{ maxHeight: 380 }}
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* APLICAÇÕES + SPECS — duas colunas lado a lado */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Aplicações */}
            <div>
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">Para que serve</h2>
              <div className="space-y-2">
                {produto.aplicacoes.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6AADCB] flex-shrink-0" />
                    <span className="text-[#0D1B3E] text-sm font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Especificações */}
            <div>
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">Dados técnicos</h2>
              <div className="space-y-2">
                {[
                  ["Tipo", "Bomba submersa vibratória"],
                  ["Saída (bocal)", produto.saida],
                  ["Tubulação recomendada", produto.tubulacao],
                  ["Profundidade máxima", produto.profundidadeMax],
                  ["Distância mínima do fundo", produto.distanciaFundo],
                  ["Posicionamento", "Perpendicular, sem inclinação"],
                  ["Fluido bombeado", "Água limpa, sem sólidos"],
                  ["Potência / Vazão", "Consultar equipe técnica"],
                  ["Fabricação", "Pouso Redondo, SC — Brasil"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3 border-b border-slate-100 last:border-0">
                    <span className="text-slate-400 text-sm flex-shrink-0">{k}</span>
                    <span className="text-[#0D1B3E] text-sm font-semibold text-right">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-4">
                Dados de potência e vazão constam na etiqueta do produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALAÇÃO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Como instalar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instSteps.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-black text-slate-100 mb-3 leading-none">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-semibold text-[#0D1B3E] text-sm mb-1.5">{s.titulo}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Perguntas frequentes</h2>
          <div className="divide-y divide-slate-100">
            {produto.faq.map((f, i) => (
              <div key={i} className="py-5">
                <p className="font-semibold text-[#0D1B3E] text-sm mb-2">{f.p}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{f.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1B3E]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Interessado na {produto.nome}?</p>
            <p className="text-white/40 text-sm">Respondemos em minutos — representantes em 7 estados.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`${site.whatsappLink}?text=Olá!%20Quero%20orçamento%20da%20${encodeURIComponent(produto.nomeCompleto)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a
              href={`tel:${site.telefone.replace(/\D/g, "")}`}
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              {site.telefone}
            </a>
          </div>
        </div>
      </section>

      {/* OUTROS PRODUTOS */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">Outros modelos</p>
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {outros.map((o) => (
              <Link key={o.slug} href={`/produtos/${o.slug}/`}
                className="group flex items-center gap-4 px-6 first:pl-0 last:pr-0 py-1 hover:opacity-70 transition-opacity">
                <Image src={o.imagem} alt={o.nomeCompleto} width={40} height={64}
                  className="object-contain h-12 w-auto flex-shrink-0 grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <p className="font-semibold text-[#0D1B3E] text-sm leading-tight">{o.nomeCompleto}</p>
                  <p className="text-slate-400 text-xs mt-0.5">Linha {o.linha}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
