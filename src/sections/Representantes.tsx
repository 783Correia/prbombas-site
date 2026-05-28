import Reveal from "@/components/Reveal"
import { representantes } from "@/data/site"

export default function Representantes() {
  return (
    <section id="representantes" className="py-24 bg-[#0D1B3E] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#6AADCB]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-[#6AADCB] font-semibold text-sm uppercase tracking-widest mb-3">Cobertura Nacional</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Representante perto de você.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Suporte regional com nome e número direto — não com 0800 de central.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {representantes.map((r, i) => (
            <Reveal key={`${r.estado}-${r.cidade}`} delay={i * 0.04}>
              <a
                href={`https://wa.me/${r.wa}?text=Olá%20${r.nome}!%20Vi%20o%20site%20da%20PR%20Bombas%20e%20gostaria%20de%20mais%20informações.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#6AADCB]/30 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-[#6AADCB] uppercase tracking-widest border border-[#6AADCB]/30 px-2 py-0.5 rounded-full">
                    {r.estado}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" className="opacity-60 group-hover:opacity-100 transition-opacity">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <p className="text-white font-bold text-base leading-tight">{r.cidade}</p>
                <p className="text-white/50 text-xs mt-1">{r.nome} · {r.empresa}</p>
                <p className="text-[#6AADCB] text-sm font-semibold mt-2">{r.tel}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
