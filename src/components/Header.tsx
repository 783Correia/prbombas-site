"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { site } from "@/data/site"

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Representantes", href: "#representantes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      {/* Gradient blur layer — do template */}
      <div className="gradient-blur">
        <div /><div /><div /><div />
      </div>

    <motion.header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0D1B3E]/80 shadow-sm shadow-black/30" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <Image
            src="/logo/logo-icon-blue.png"
            alt=""
            width={38}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="text-white font-black text-xl tracking-tight leading-none select-none">
            PR<span className="text-[#6AADCB]">BOMBAS</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburguer */}
        <div className="flex items-center gap-3">
          <a
            href={`${site.whatsappLink}?text=Olá!%20Quero%20um%20orçamento%20de%20bomba%20submersa.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#E65100] hover:bg-[#FF6D00] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Pedir Orçamento
          </a>

          {/* Hamburguer mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#0D1B3E] border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 text-base font-medium hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`${site.whatsappLink}?text=Olá!%20Quero%20um%20orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E65100] text-white text-center font-semibold py-2.5 rounded-lg mt-2"
              >
                Pedir Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  )
}
