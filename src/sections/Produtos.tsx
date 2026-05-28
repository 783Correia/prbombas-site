"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { produtos, site } from "@/data/site"
import Reveal from "@/components/Reveal"

const linhaCores = {
  blue:  { badge: "bg-blue-50 text-blue-700 border border-blue-100", barra: "bg-[#0D1B3E]", anel: "ring-[#0D1B3E]/10" },
  sky:   { badge: "bg-sky-50 text-sky-700 border border-sky-100",   barra: "bg-[#6AADCB]", anel: "ring-[#6AADCB]/10" },
  navy:  { badge: "bg-slate-100 text-slate-700 border border-slate-200", barra: "bg-gradient-to-r from-[#0D1B3E] to-[#6AADCB]", anel: "ring-slate-200/50" },
}

export default function Produtos() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-[#6AADCB] font-semibold text-sm uppercase tracking-widest mb-3">Linha Completa</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B3E] mb-4">
            Seis modelos. Uma certeza.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Cada bomba foi projetada para uma necessidade específica — da residência simples ao grande condomínio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((p, i) => {
            const cores = linhaCores[p.linhaCor as keyof typeof linhaCores]
            return (
              <Reveal key={p.slug} delay={i * 0.07}>
                <motion.div
                  className={`group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-4 ${cores.anel} hover:ring-8 flex flex-col`}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`h-1 w-full ${cores.barra}`} />

                  <div className="bg-slate-50 flex items-center justify-center py-10 px-8">
                    <Image
                      src={p.imagem}
                      alt={`Bomba Submersa ${p.nome} — PR Bombas`}
                      width={160}
                      height={280}
                      className="object-contain h-44 w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className={`self-start text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${cores.badge}`}>
                      Linha {p.linha}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0D1B3E] mb-2">
                      {p.nomeCompleto}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                      {p.descricaoCurta}
                    </p>

                    <div className="flex gap-4 mb-5 py-3 border-y border-slate-100">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Saída</p>
                        <p className="text-sm font-bold text-[#0D1B3E]">{p.saida}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Prof. máxima</p>
                        <p className="text-sm font-bold text-[#0D1B3E]">{p.profundidadeMax}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/produtos/${p.slug}/`}
                        className="flex-1 block text-center bg-[#0D1B3E] hover:bg-[#162550] text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                      >
                        Ver detalhes
                      </Link>
                      <a
                        href={`${site.whatsappLink}?text=Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(p.nomeCompleto)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
                        title="WhatsApp"
                      >
                        💬
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
