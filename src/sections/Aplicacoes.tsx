"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Reveal from "@/components/Reveal"

const aplicacoes = [
  {
    titulo: "Residencial",
    badge: "Mais instalado",
    desc: "Poços, cisternas e reservatórios domésticos. Instalação simples, sem técnico especializado.",
    modelos: ["PR 500", "PR 650"],
    img: "/aplicacoes/residencial.jpg",
    imgAlt: "Casa residencial com jardim",
    colSpan: "sm:col-span-2",
    barra: "bg-[#6AADCB]",
    badgeCls: "bg-sky-50 text-sky-700",
    pillCls: "bg-sky-50 text-sky-700",
    large: true,
  },
  {
    titulo: "Rural e Irrigação",
    badge: null,
    desc: "Sítios, fazendas e plantações de pequeno a médio porte.",
    modelos: ["PR 650", "Termo 850", "Termo 950"],
    img: "/aplicacoes/rural.jpg",
    imgAlt: "Plantação irrigada",
    colSpan: "",
    barra: "bg-emerald-400",
    badgeCls: "",
    pillCls: "bg-emerald-50 text-emerald-700",
    large: false,
  },
  {
    titulo: "Condomínios",
    badge: "Alta demanda",
    desc: "Alta vazão para abastecimento coletivo residencial e comercial.",
    modelos: ["Turbo 3/4", "Turbo 1"],
    img: "/aplicacoes/condominios.jpg",
    imgAlt: "Prédio residencial",
    colSpan: "",
    barra: "bg-indigo-400",
    badgeCls: "bg-indigo-50 text-indigo-600",
    pillCls: "bg-indigo-50 text-indigo-700",
    large: false,
  },
  {
    titulo: "Uso Intensivo",
    badge: "Para profissionais",
    desc: "Temperatura elevada ou operação contínua prolongada. Desenvolvida para não parar.",
    modelos: ["Termo 850", "Termo 950"],
    img: "/aplicacoes/intensivo.jpg",
    imgAlt: "Operação agrícola em larga escala",
    colSpan: "sm:col-span-2",
    barra: "bg-[#E65100]",
    badgeCls: "bg-orange-50 text-orange-600",
    pillCls: "bg-orange-50 text-orange-700",
    large: true,
  },
]

export default function Aplicacoes() {
  return (
    <section id="aplicacoes" className="bg-slate-50 noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-px bg-[#6AADCB]" />
            <span className="text-[#6AADCB] text-xs uppercase tracking-widest">Aplicações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B3E] mb-3">
            Para cada uso, o modelo certo.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mb-12">
            Da residência rural ao grande condomínio — temos a bomba certa para a sua necessidade.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aplicacoes.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 0.08} className={a.colSpan}>
              <motion.div
                className="group h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`h-1 ${a.barra}`} />

                {/* Cards pequenos: imagem no topo */}
                {!a.large && (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={a.img}
                      alt={a.imgAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                <div className={`flex flex-1 ${a.large ? "flex-col sm:flex-row" : "flex-col"}`}>
                  {/* Conteúdo */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#0D1B3E]">{a.titulo}</h3>
                      {a.badge && (
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ml-3 ${a.badgeCls}`}>
                          {a.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{a.desc}</p>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2.5">
                        Modelos indicados
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {a.modelos.map(m => (
                          <span key={m} className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${a.pillCls}`}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cards grandes: imagem no painel lateral */}
                  {a.large && (
                    <div className="hidden sm:block relative min-w-[220px] overflow-hidden">
                      <Image
                        src={a.img}
                        alt={a.imgAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="220px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
