"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { faq } from "@/data/site"
import Reveal from "@/components/Reveal"

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-[#6AADCB] font-semibold text-sm uppercase tracking-widest mb-3">Perguntas frequentes</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B3E] mb-4">
            Dúvidas comuns.
          </h2>
          <p className="text-slate-500 text-lg">
            Respondemos as que mais aparecem. Qualquer outra, é só chamar no WhatsApp.
          </p>
        </Reveal>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-[#0D1B3E] text-[15px] leading-snug">
                    {item.pergunta}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0D1B3E]/8 flex items-center justify-center text-[#0D1B3E] font-bold text-lg leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {item.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
