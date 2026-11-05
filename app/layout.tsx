import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd, localBusinessSchema } from "@/components/json-ld"
import { SiteAnalytics } from "@/components/site-analytics"
import { SITE } from "@/lib/site"

// Display face with a width axis: condensed headings echo the logo lettering.
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
})

const description =
  "Plattsättning, badrumsrenovering och köksrenovering i Eskilstuna med omnejd. Behörig våtrum, över 20 års erfarenhet och en kontaktperson genom hela projektet."

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Plattsättare & badrumsrenovering i Eskilstuna | Bygg & Plattsättning",
    template: "%s | Bygg & Plattsättning",
  },
  description,
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Plattsättare & badrumsrenovering i Eskilstuna",
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/hero-image.jpg", width: 2048, height: 1536, alt: "Bygg & Plattsättnings servicebil" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#101215",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${GeistSans.variable} ${display.variable}`}>
      <body className="grain font-sans">
        <a
          href="#innehall"
          className="fixed left-4 top-4 z-skip -translate-y-24 rounded-lg bg-glacier-400 px-4 py-2 font-semibold text-ink-950 transition-transform focus:translate-y-0"
        >
          Hoppa till innehållet
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <div id="innehall">{children}</div>
        <Footer />
        <SiteAnalytics />
      </body>
    </html>
  )
}
