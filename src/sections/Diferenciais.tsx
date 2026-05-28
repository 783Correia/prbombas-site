import Reveal from "@/components/Reveal"
import { site } from "@/data/site"

const pillars = [
  {
    num: "01",
    titulo: "Sem peças que gastam dentro d'água.",
    texto: "A tecnologia vibratória elimina o rotor mecânico em contato com o líquido. Menos peças. Menos o que dar errado. Mais anos funcionando.",
  },
  {
    num: "02",
    titulo: "Feita aqui. Para as condições daqui.",
    texto: "Fabricamos em Pouso Redondo, SC, desde 1983. Conhecemos o solo, a água e o clima do Brasil — e projetamos para isso.",
  },
  {
    num: "03",
    titulo: "Seu representante tem nome e telefone.",
    texto: "Não tem SAC. Tem o Jefferson em Curitiba, a Gisele em Porto Alegre, o Sergio em Rio do Sul. Gente real, com resposta real.",
  },
]

export default function Diferenciais() {
  return (
    <section className="bg-white noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="py-5 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400 uppercase tracking-widest">Por que PR Bombas</span>
          <a
            href={`${site.whatsappLink}?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20PR%20Bombas.`}
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:block text-xs text-slate-400 hover:text-[#0D1B3E] transition-colors"
          >
            Falar com representante →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {pillars.map((p) => (
            <Reveal key={p.num} className="px-0 lg:px-10 first:pl-0 last:pr-0 py-8 sm:py-10 lg:py-0">
              <p className="text-slate-200 text-4xl sm:text-5xl font-bold mb-5 leading-none select-none">{p.num}</p>
              <h3 className="text-[#0D1B3E] font-semibold text-base sm:text-lg leading-snug mb-3">{p.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <Reveal>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0D1B3E] leading-snug max-w-3xl">
              &ldquo;A bomba funcionou 15 horas por dia durante{" "}
              <span className="text-[#6AADCB]">5 anos</span> sem dar um problema.
              Quando precisei trocar, comprei outra PR Bombas.&rdquo;
            </blockquote>
            <p className="text-slate-400 text-sm mt-4">— João M., agricultor, Rio Grande do Sul</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
