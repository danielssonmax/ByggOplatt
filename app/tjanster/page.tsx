import Image from "next/image"
import Link from "next/link"
import { Hammer, Wrench, Droplet, Home, Ruler, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Våra tjänster | Badrumsrenovering, Köksrenovering & Plattsättning",
  description:
    "Professionella tjänster inom badrumsrenovering, köksrenovering, plattsättning och byggarbeten i Eskilstuna. Kvalitet och expertis i varje projekt.",
  alternates: {
    canonical: "https://byggoplattsattning.se/tjanster",
  },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Våra tjänster<span className="text-orange-500">.</span>
        </h1>

        <div className="w-56 h-1 bg-orange-500 mb-12 mx-auto"></div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="mb-4">
            Bygg & Plattsättning erbjuder ett brett utbud av tjänster inom bygg och renovering. Med vår expertis och
            långa erfarenhet kan vi hjälpa dig med allt från mindre renoveringar till kompletta ombyggnationer.
          </p>
          <p>
            Oavsett om du behöver renovera ditt badrum, uppgradera ditt kök eller utföra andra byggprojekt, står vi redo
            att leverera högkvalitativa resultat som överträffar dina förväntningar.
          </p>
        </div>

        {/* Main Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Badrumsrenovering */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/bathroom-modern.jpeg" alt="Badrumsrenovering" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Badrumsrenovering</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Droplet className="text-orange-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Komplett badrumsrenovering</h3>
              </div>
              <p className="mb-4">
                Vi utför kompletta badrumsrenoveringar från rivning till färdig installation. Vårt team av erfarna
                hantverkare säkerställer att ditt nya badrum blir både funktionellt och estetiskt tilltalande.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Rivning och bortforsling
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> VVS-installation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Elinstallation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Tätskikt enligt branschregler
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Plattsättning av kakel och klinker
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Installation av sanitetsporslin och inredning
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Kontakta oss för offert
              </Link>
            </div>
          </div>

          {/* Köksrenovering */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/placeholder.svg?height=300&width=500" alt="Köksrenovering" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Köksrenovering</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Home className="text-orange-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Köksrenovering</h3>
              </div>
              <p className="mb-4">
                Köket är hemmets hjärta. Vi hjälper dig att skapa ett modernt och funktionellt kök som passar dina behov
                och din livsstil. Från planering till färdig installation tar vi hand om hela processen.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Rivning av befintligt kök
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> VVS- och elarbeten
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Plattsättning av kakel
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Montering av köksinredning
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Installation av vitvaror
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Målning och tapetsering
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Kontakta oss för offert
              </Link>
            </div>
          </div>

          {/* Plattsättning */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/placeholder.svg?height=300&width=500" alt="Plattsättning" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Plattsättning</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Ruler className="text-orange-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Professionell plattsättning</h3>
              </div>
              <p className="mb-4">
                Vi utför professionell plattsättning för alla typer av utrymmen. Med vår expertis och noggrannhet
                säkerställer vi att resultatet blir både vackert och hållbart.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Kakel och klinker
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Mosaik
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Natursten
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Tätskikt enligt branschregler
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Golvvärme
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Reparation och renovering
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Kontakta oss för offert
              </Link>
            </div>
          </div>

          {/* Bygg */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/placeholder.svg?height=300&width=500" alt="Byggarbeten" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Byggarbeten</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Hammer className="text-orange-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Allmänna byggarbeten</h3>
              </div>
              <p className="mb-4">
                Vi utför alla typer av byggarbeten, från mindre reparationer till större ombyggnationer. Med vår breda
                kompetens kan vi hjälpa dig med de flesta byggprojekt.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Ombyggnationer
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Tillbyggnader
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Snickeriarbeten
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Innerväggar och tak
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Golv och golvläggning
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span> Målning och tapetsering
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Kontakta oss för offert
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <h2 className="text-3xl font-bold mb-8 text-center">Övriga tjänster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Truck className="text-orange-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Flyttpackning</h3>
            </div>
            <p>
              Vi erbjuder professionell flyttpackning för att göra din flytt så smidig som möjligt. Vi packar dina
              tillhörigheter säkert och effektivt.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Wrench className="text-orange-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Mindre byggarbeten</h3>
            </div>
            <p>
              Vi utför även mindre byggarbeten som komplement till våra plattsättningstjänster. Kontakta oss för att
              diskutera ditt projekt.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-zinc-800 p-8 rounded-lg max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Vår arbetsprocess</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Konsultation</h3>
              <p>Vi diskuterar dina behov och önskemål för att förstå projektets omfattning.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Planering</h3>
              <p>Vi tar fram en detaljerad plan och offert baserad på dina önskemål.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Utförande</h3>
              <p>Vi genomför projektet med fokus på kvalitet, tidplan och budget.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Redo att starta ditt projekt?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för att diskutera dina behov och få en kostnadsfri offert. Vi ser fram emot att hjälpa dig
            förverkliga dina idéer.
          </p>
          <Link
            href="/kontakt"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </main>
  )
}
