import Image from "next/image"
import Link from "next/link"
import { Handshake, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Våra samarbeten | Bygg & Plattsättning i Eskilstuna",
  description:
    "Upptäck våra värdefulla samarbetspartners som hjälper oss leverera högkvalitativa tjänster inom bygg och plattsättning i Eskilstuna.",
  alternates: {
    canonical: "https://byggoplattsattning.se/samarbeten",
  },
}

export default function Samarbeten() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Våra samarbeten<span className="text-orange-500">.</span>
        </h1>

        <div className="w-56 h-1 bg-orange-500 mb-12 mx-auto"></div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="mb-4">
            På Bygg & Plattsättning tror vi på kraften i starka samarbeten. Genom att arbeta tillsammans med andra
            företag kan vi erbjuda våra kunder bättre service och mer omfattande lösningar.
          </p>
          <p>
            Här presenterar vi våra värdefulla samarbetspartners som hjälper oss att leverera högkvalitativa tjänster
            inom bygg och plattsättning.
          </p>
        </div>

        {/* Partners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Partner 1 - Aluns Motor */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/aluns-motor-logo.png" alt="Aluns Motor" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Aluns Motor</h2>
              <p className="text-center mb-6">
                Aluns Motor är specialister på motorfordon och hjälper oss att hålla vår fordonsflotta i toppskick,
                vilket säkerställer att vi alltid kan nå våra kunder i tid.
              </p>
              <Link
                href="https://alunsmotor.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 2 - Webbfix */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/webbfix-logo.png" alt="Webbfix" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Webbfix</h2>
              <p className="text-center mb-6">
                Webbfix är vår digitala partner som hjälper oss med webbdesign och online-närvaro. De säkerställer att
                vi kan nå ut till våra kunder på bästa sätt genom digitala kanaler.
              </p>
              <Link
                href="https://webbfix.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 3 - KonstruktBygg */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/konstruktbygg-logo.png" alt="KonstruktBygg" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">KonstruktBygg</h2>
              <p className="text-center mb-6">
                KonstruktBygg är vår partner inom större byggprojekt. Tillsammans kan vi ta oss an mer omfattande
                bygguppdrag och erbjuda helhetslösningar för våra kunder.
              </p>
              <Link
                href="https://konstruktbygg.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 4 - BC */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/placeholder.svg" alt="Bostadscentralen" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Bostadscentralen</h2>
              <p className="text-center mb-6">Leta bland tusentals bostäder samlade på ett och samma ställe.</p>
              <Link
                href="https://bostadscentralen.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 4 - BC */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image
                  src="https://leasabegagnadbil.se/lovable-uploads/5854ff22-ab54-4b63-80be-4e65ed092c94.png"
                  alt="Leasa begagnad bil"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Leasa begagnad bil</h2>
              <p className="text-center mb-6">Leta bland tusentals bostäder samlade på ett och samma ställe.</p>
              <Link
                href="https://leasabegagnadbil.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 6 - Seiko Mod */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/placeholder.svg?height=100&width=200" alt="Seiko Mod" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Seiko Mod</h2>
              <p className="text-center mb-6">
                Seiko Mod erbjuder högkvalitativa modifieringar och anpassningar av Seiko-klockor för entusiaster och
                samlare.
              </p>
              <Link
                href="https://seiko-mod.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 7 - Jämför Mäklare */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Jämför Mäklare"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Jämför Mäklare</h2>
              <p className="text-center mb-6">
                Jämför Mäklare hjälper dig att hitta rätt mäklare för din fastighetsaffär genom att jämföra olika
                alternativ och priser.
              </p>
              <Link
                href="https://www.jamfor-maklare.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 8 - Bilverkstad Eskilstuna */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Bilverkstad Eskilstuna"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Bilverkstad Eskilstuna</h2>
              <p className="text-center mb-6">
                Professionell bilverkstad i Eskilstuna som erbjuder service, reparationer och underhåll av alla
                bilmärken med hög kvalitet.
              </p>
              <Link
                href="https://www.bilverkstadeskilstuna.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 9 - Törnstrand Elteknik AB */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Törnstrand Elteknik AB"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Törnstrand Elteknik AB</h2>
              <p className="text-center mb-6">
                Törnstrand Elteknik AB är specialister på elinstallationer och elektriska tjänster för både privat- och
                företagskunder.
              </p>
              <Link
                href="https://tornstrandelteknikab.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 10 - Dold Adress */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/placeholder.svg?height=100&width=200" alt="Dold Adress" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Dold Adress</h2>
              <p className="text-center mb-6">
                Dold Adress erbjuder tjänster för att skydda din personliga integritet och säkerhet genom diskreta
                adresslösningar.
              </p>
              <Link
                href="https://www.dold-adress.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 11 - Leap Marketing */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Leap Marketing"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Leap Marketing</h2>
              <p className="text-center mb-6">
                Leap Marketing är en digital marknadsföringsbyrå som hjälper företag att växa genom strategisk
                marknadsföring och kreativa lösningar.
              </p>
              <Link
                href="https://www.leapmarketing.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Partner 12 - Fairing */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <div className="relative h-32 w-full mb-6">
                <Image src="/fairing-logo.png" alt="Fairing Sports Nutrition" fill className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Fairing Sports Nutrition</h2>
              <p className="text-center mb-6">
                Fairing är specialister på sportnäring och kosttillskott av högsta kvalitet. De erbjuder ett brett
                sortiment av produkter för träning, återhämtning och hälsa.
              </p>
              <Link
                href="https://fairing.se"
                rel="dofollow"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                target="_blank"
              >
                Besök deras hemsida <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Collaboration Benefits */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Fördelar med våra samarbeten</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Handshake className="text-orange-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Heltäckande lösningar</h3>
              </div>
              <p>
                Genom våra samarbeten kan vi erbjuda mer heltäckande lösningar för dina bygg- och renoveringsprojekt,
                från planering till slutförande.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Handshake className="text-orange-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Expertis inom flera områden</h3>
              </div>
              <p>
                Våra samarbetspartners bidrar med specialiserad expertis inom sina respektive områden, vilket
                säkerställer högsta kvalitet i alla aspekter av ditt projekt.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Handshake className="text-orange-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Effektivare processer</h3>
              </div>
              <p>
                Genom att samarbeta med etablerade partners kan vi effektivisera våra processer och leverera projekt
                snabbare utan att kompromissa med kvaliteten.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Handshake className="text-orange-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Lokala samarbeten</h3>
              </div>
              <p>
                Vi prioriterar samarbeten med andra lokala företag för att stärka det lokala näringslivet och
                säkerställa snabb service för våra kunder.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Intresserad av att samarbeta med oss?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Är du ett företag som vill inleda ett samarbete med Bygg & Plattsättning? Vi är alltid öppna för nya
            partnerskap som kan hjälpa oss att erbjuda bättre tjänster till våra kunder.
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
