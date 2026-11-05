import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bygg & Plattsättning i Eskilstuna | Badrum & Köksrenovering",
    template: "%s | Bygg & Plattsättning",
  },
  description:
    "Din pålitliga partner för plattsättning och renovering i Eskilstuna. Expertis inom badrum, kök och byggprojekt med över 20 års erfarenhet.",
  metadataBase: new URL("https://byggoplattsattning.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bygg & Plattsättning i Eskilstuna | Badrum & Köksrenovering",
    description:
      "Din pålitliga partner för plattsättning och renovering i Eskilstuna. Expertis inom badrum, kök och byggprojekt med över 20 års erfarenhet.",
    url: "https://byggoplattsattning.se",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-zinc-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="relative h-24 w-60 mb-4">
                  <Image src="/logo-main.png" alt="Bygg & Plattsättning Logo" fill className="object-contain" />
                </div>
                <p>Din pålitliga partner för plattsättning i Eskilstuna.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                <p>
                  Telefon:{" "}
                  <Link href="tel:073 181 89 08" className="hover:text-orange-500 transition-colors">
                    073 181 89 08
                  </Link>
                </p>
                <p>
                  Email:{" "}
                  <Link href="mailto:info@byggofastighet.se" className="hover:text-orange-500 transition-colors">
                    info@byggofastighet.se
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Snabblänkar</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/om-oss" className="hover:text-orange-500 transition-colors">
                      Om oss
                    </Link>
                  </li>
                  <li>
                    <Link href="/tjanster" className="hover:text-orange-500 transition-colors">
                      Tjänster
                    </Link>
                  </li>
                  <li>
                    <Link href="/samarbeten" className="hover:text-orange-500 transition-colors">
                      Samarbeten
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogg" className="hover:text-orange-500 transition-colors">
                      Blogg
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="hover:text-orange-500 transition-colors">
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fastighet-uthyres-eskilstuna-kyrkogatan-7"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Fastigheter
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Öppettider</h3>
                <p>Måndag-Fredag: 07:00 - 16:00</p>
                <p>Lördag-Söndag: Stängt</p>
              </div>
            </div>

            {/* Service City Links Section */}
            <div className="mt-12 pt-8 border-t border-zinc-700">
              <h3 className="text-xl font-bold mb-6 text-center">Tjänster per stad</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold text-orange-500 mb-3">Badrumsrenovering</h4>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li><Link href="/badrumsrenovering/eskilstuna" className="hover:text-orange-500 transition-colors">Badrumsrenovering Eskilstuna</Link></li>
                    <li><Link href="/badrumsrenovering/strangnas" className="hover:text-orange-500 transition-colors">Badrumsrenovering Strängnäs</Link></li>
                    <li><Link href="/badrumsrenovering/vasteras" className="hover:text-orange-500 transition-colors">Badrumsrenovering Västerås</Link></li>
                    <li><Link href="/badrumsrenovering/katrineholm" className="hover:text-orange-500 transition-colors">Badrumsrenovering Katrineholm</Link></li>
                    <li><Link href="/badrumsrenovering/torshalla" className="hover:text-orange-500 transition-colors">Badrumsrenovering Torshälla</Link></li>
                    <li><Link href="/badrumsrenovering/koping" className="hover:text-orange-500 transition-colors">Badrumsrenovering Köping</Link></li>
                    <li><Link href="/badrumsrenovering/arboga" className="hover:text-orange-500 transition-colors">Badrumsrenovering Arboga</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-3">Plattsättning</h4>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li><Link href="/plattsattning/eskilstuna" className="hover:text-orange-500 transition-colors">Plattsättning Eskilstuna</Link></li>
                    <li><Link href="/plattsattning/strangnas" className="hover:text-orange-500 transition-colors">Plattsättning Strängnäs</Link></li>
                    <li><Link href="/plattsattning/vasteras" className="hover:text-orange-500 transition-colors">Plattsättning Västerås</Link></li>
                    <li><Link href="/plattsattning/katrineholm" className="hover:text-orange-500 transition-colors">Plattsättning Katrineholm</Link></li>
                    <li><Link href="/plattsattning/torshalla" className="hover:text-orange-500 transition-colors">Plattsättning Torshälla</Link></li>
                    <li><Link href="/plattsattning/koping" className="hover:text-orange-500 transition-colors">Plattsättning Köping</Link></li>
                    <li><Link href="/plattsattning/arboga" className="hover:text-orange-500 transition-colors">Plattsättning Arboga</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-3">Köksrenovering</h4>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li><Link href="/koksrenovering/eskilstuna" className="hover:text-orange-500 transition-colors">Köksrenovering Eskilstuna</Link></li>
                    <li><Link href="/koksrenovering/strangnas" className="hover:text-orange-500 transition-colors">Köksrenovering Strängnäs</Link></li>
                    <li><Link href="/koksrenovering/vasteras" className="hover:text-orange-500 transition-colors">Köksrenovering Västerås</Link></li>
                    <li><Link href="/koksrenovering/katrineholm" className="hover:text-orange-500 transition-colors">Köksrenovering Katrineholm</Link></li>
                    <li><Link href="/koksrenovering/torshalla" className="hover:text-orange-500 transition-colors">Köksrenovering Torshälla</Link></li>
                    <li><Link href="/koksrenovering/koping" className="hover:text-orange-500 transition-colors">Köksrenovering Köping</Link></li>
                    <li><Link href="/koksrenovering/arboga" className="hover:text-orange-500 transition-colors">Köksrenovering Arboga</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-3">Bygg & Snickeri</h4>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li><Link href="/bygg-snickeri/eskilstuna" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Eskilstuna</Link></li>
                    <li><Link href="/bygg-snickeri/strangnas" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Strängnäs</Link></li>
                    <li><Link href="/bygg-snickeri/vasteras" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Västerås</Link></li>
                    <li><Link href="/bygg-snickeri/katrineholm" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Katrineholm</Link></li>
                    <li><Link href="/bygg-snickeri/torshalla" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Torshälla</Link></li>
                    <li><Link href="/bygg-snickeri/koping" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Köping</Link></li>
                    <li><Link href="/bygg-snickeri/arboga" className="hover:text-orange-500 transition-colors">Bygg & Snickeri Arboga</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
              <p>&copy; {new Date().getFullYear()} Bygg & Plattsättning. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
