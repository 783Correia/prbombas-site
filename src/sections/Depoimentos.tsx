import Reveal from "@/components/Reveal"

const deps = [
  {
    texto: "Instalei a Turbo no condomínio há 3 anos. Zero manutenção. Os moradores nunca ficaram sem água.",
    autor: "Ricardo A.", cargo: "Síndico — Curitiba, PR",
  },
  {
    texto: "Vendo PR Bombas há 10 anos. É o produto que nunca me envergonhou na frente do cliente.",
    autor: "Marcos S.", cargo: "Instalador hidráulico — SC",
  },
]

export default function Depoimentos() {
  return (
    <section className="bg-[#0D1B3E] noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <div className="w-4 h-px bg-[#6AADCB]" />
          <span className="text-[#6AADCB] text-xs uppercase tracking-widest">Quem usa</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {deps.map((d, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug mb-5 sm:mb-6">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-white/20" />
                <div>
                  <p className="text-white/70 text-sm font-medium">{d.autor}</p>
                  <p className="text-white/30 text-xs">{d.cargo}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
