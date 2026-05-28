import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { site } from "@/data/site"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} | Bombas Submersas Feitas no Brasil desde 1983`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  keywords: ["bomba submersa", "bomba submersa vibratória", "fabricante bomba submersa brasil", "bomba para poço", "PR Bombas", "Pouso Redondo"],
  icons: {
    icon: "/logo/logo-icon-blue.png",
    apple: "/logo/logo-icon-blue.png",
    shortcut: "/logo/logo-icon-blue.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: `${site.nome} | Bombas Submersas Feitas no Brasil desde 1983`,
    description: site.descricao,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PR Bombas — Bombas Submersas Feitas no Brasil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} | Bombas Submersas Feitas no Brasil desde 1983`,
    description: site.descricao,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.nome,
    legalName: site.razaoSocial,
    url: site.url,
    foundingDate: site.fundacao,
    description: site.descricao,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Estrada Geral André Venturi, s/n, Bairro Saltinho",
      addressLocality: "Pouso Redondo",
      addressRegion: "SC",
      postalCode: "89172-000",
      addressCountry: "BR",
    },
    telephone: site.telefone,
    email: site.email,
    sameAs: [site.instagram, site.facebook],
  }

  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
