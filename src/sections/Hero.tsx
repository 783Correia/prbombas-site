"use client"

import Image from "next/image"
import Link from "next/link"
import { site, produtos } from "@/data/site"

// Fan config — rotações e posições
const fanConfig = [
  { rotate: "-rotate-12", translate: "translate-y-6"  },
  { rotate: "-rotate-6",  translate: "translate-y-3"  },
  { rotate: "-rotate-2",  translate: "translate-y-1"  },
  { rotate: "rotate-2",   translate: "-translate-y-1" },
  { rotate: "rotate-6",   translate: "translate-y-3"  },
  { rotate: "rotate-12",  translate: "translate-y-6"  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0D1B3E] overflow-hidden flex flex-col">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-0"
        style={{ background: "radial-gradient(700px 500px at 15% 20%, rgba(106,173,203,0.10), transparent 60%), radial-gradient(900px 600px at 50% 110%, rgba(0,0,0,0.3), transparent 60%)" }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 sm:pb-24">

        {/* Badge */}
        <div className="fade-in inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs text-white/60 mb-6 sm:mb-8 border-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6AADCB]" />
          Pouso Redondo, SC — Fabricando desde 1983
        </div>

        {/* Headline */}
        <h1 className="fade-in-d1 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight max-w-3xl mb-4 sm:mb-5">
          A bomba que trabalha
          <span className="block text-[#6AADCB]">enquanto você descansa.</span>
        </h1>

        <p className="fade-in-d2 text-white/45 text-sm sm:text-base max-w-xs sm:max-w-sm mb-8 sm:mb-10 leading-relaxed">
          Bombas submersas vibratórias com o menor custo de manutenção do mercado. 6 modelos, fabricados no Brasil.
        </p>

        {/* CTAs */}
        <div className="fade-in-d3 flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#produtos"
            className="group relative inline-flex h-10 items-center justify-center rounded-full px-6 sm:px-7 text-sm font-medium text-white outline outline-1 outline-white/10 transition-all hover:outline-white/20 border-glow"
            style={{ background: "linear-gradient(135deg, #162550 0%, #0D1B3E 100%)" }}
          >
            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <span className="absolute -top-10 right-2 w-16 h-16 rounded-full bg-[#6AADCB] mix-blend-lighten blur-[30px] opacity-20" />
            </span>
            <span className="relative z-10">Ver produtos</span>
          </a>
          <a
            href={`${site.whatsappLink}?text=Olá!%20Quero%20um%20orçamento%20de%20bomba%20submersa.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 sm:px-5 h-10 text-sm font-medium text-white/80 ring-1 ring-white/10 hover:bg-white/12 transition border-glow"
          >
            <span className="hidden sm:inline">Pedir orçamento</span>
            <span className="sm:hidden">Orçamento</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>

        {/* Fan de produtos */}
        <div className="fade-in-d3 relative w-full max-w-xs sm:max-w-2xl lg:max-w-3xl">

          {/* Tags flutuantes — visíveis apenas sm+ */}
          <div className="hidden sm:block absolute -top-7 left-[8%] z-20">
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6AADCB] px-3 py-1.5 text-xs font-semibold text-[#0D1B3E] shadow-lg">
                42 anos
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </span>
              <span className="absolute -bottom-1 left-5 h-2 w-2 rotate-45 bg-[#6AADCB]" />
            </div>
          </div>

          <div className="hidden sm:block absolute -top-6 right-[6%] z-20">
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                Feita no Brasil
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </span>
              <span className="absolute -bottom-1 left-5 h-2 w-2 rotate-45 bg-white/10" />
            </div>
          </div>

          {/* Mobile: grid 3x2 sem rotação */}
          <div className="sm:hidden grid grid-cols-3 gap-3">
            {produtos.map((p) => (
              <Link key={p.slug} href={`/produtos/${p.slug}/`}
                className="transition-all duration-300 hover:scale-105">
                <div className="aspect-[3/5] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 bg-white/5 flex items-end justify-center border-glow hover:ring-[#6AADCB]/30 transition-all">
                  <Image src={p.imagem} alt={p.nomeCompleto} width={100} height={160}
                    className="object-contain object-bottom w-full h-full p-2" />
                </div>
                <p className="text-center text-[9px] text-white/30 mt-1.5 font-medium">{p.nome}</p>
              </Link>
            ))}
          </div>

          {/* Tablet/Desktop: fan com rotação */}
          <div className="hidden sm:grid grid-cols-6 gap-2 sm:gap-3">
            {produtos.map((p, i) => {
              const cfg = fanConfig[i]
              return (
                <Link key={p.slug} href={`/produtos/${p.slug}/`}
                  className={`col-span-1 self-end ${cfg.rotate} ${cfg.translate} transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:rotate-0 cursor-pointer`}
                >
                  <div className="aspect-[3/5] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10 bg-white/5 flex items-end justify-center pt-2 border-glow hover:ring-[#6AADCB]/30 transition-all duration-300">
                    <Image src={p.imagem} alt={p.nomeCompleto} width={120} height={200}
                      className="object-contain object-bottom w-full h-full p-2" />
                  </div>
                  <p className="text-center text-[10px] text-white/30 mt-2 font-medium">{p.nome}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
