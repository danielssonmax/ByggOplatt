import Image from "next/image"
import Link from "next/link"
import { Hammer, LayoutGrid, Shovel } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bygg & Plattsättning i Eskilstuna | Badrum & Köksrenovering",
  description:
    "Din pålitliga partner för plattsättning och renovering i Eskilstuna. Expertis inom badrum, kök och byggprojekt med över 20 års erfarenhet.",
  alternates: {
    canonical: "https://byggoplattsattning.se",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Din plattsättare i{" "}
              <span className="text-white block">
                Eskilstuna<span className="text-orange-500">.</span>
              </span>
            </h1>
            <p className="mb-4">Mer information hittar du genom knappen nedan!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <p className="flex items-center">
                Kontakta oss på{" "}
                <Link href="tel:073 181 89 08" className="text-orange-500 font-bold ml-2">
                  073 181 89 08
                </Link>
                .
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/tjanster"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Våra tjänster
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/hero-image.jpg" alt="Bygg & Plattsättning arbete" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Company Van Image and Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bygg & Plattsättning i Eskilstuna</h2>
          <p className="mb-4">
            Din pålitliga partner för plattsättning i Eskilstuna. Vi erbjuder expertis inom renovering av badrum och kök
            samt specialiserade tjänster som flytspackling.
          </p>
          <p className="mb-4">
            Våra erfarna plattsättare levererar högkvalitativa lösningar för både små och stora projekt.
          </p>
          <p className="mb-4">
            Oavsett om du planerar en komplett badrumsrenovering eller vill uppgradera ditt kök med nytt kakel och
            klinker, kan du lita på oss för ett perfekt resultat.
          </p>
          <div className="mt-6">
            <Link
              href="/kontakt"
              className="bg-transparent hover:bg-orange-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-md transition-colors inline-block"
            >
              Kontakta oss idag för att diskutera ditt nästa projekt!
            </Link>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Lång erfarenhet inom byggbranschen</h2>
            <div className="w-56 h-1 bg-orange-500 mb-6 mx-auto md:mx-0"></div>
            <p>
              Med över 20 års erfarenhet i byggbranschen är Bygg & Plattsättning din pålitliga partner för alla typer av
              bygg- och renoveringsprojekt.
            </p>
            <p>
              Vi har en stark övertygelse om att varje projekt, stort som smått, kan förverkligas med rätt kompetens och
              engagemang.
            </p>
            <p>
              Vår långa erfarenhet gör att vi kan erbjuda skräddarsydda lösningar som är anpassade efter just dina behov
              och önskemål.
            </p>
            <p>
              På Bygg & Plattsättning är kunden alltid i fokus. Vi lyssnar noga på dina idéer och visioner för att
              tillsammans skapa resultat som överträffar förväntningarna.
            </p>
            <p>
              Oavsett om det gäller nybyggnation, ombyggnad, renovering eller plattsättning, strävar vi alltid efter
              högsta kvalitet i varje detalj.
            </p>
            <p>
              Vi tar hand om hela processen, från planering och projektering till slutligt utförande, och ser till att
              du som kund känner dig trygg genom hela projektets gång. Vår inställning är att inga utmaningar är för
              stora, vi tillsammans med dig som kund hittar alltid en lösning som fungerar.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/bathroom-modern.jpeg" alt="Modern badrumsrenovering" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="w-full bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Våra tjänster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Hammer size={64} className="mb-4" />
              <h3 className="text-2xl font-bold">Byggprojekt</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <LayoutGrid size={64} className="mb-4" />
              <h3 className="text-2xl font-bold">Renovering</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shovel size={64} className="mb-4" />
              <h3 className="text-2xl font-bold">Plattsättning</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Samarbetspartners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Partner 1 - Aluns Motor */}
          <Link
            href="https://alunsmotor.se"
            rel="dofollow"
            className="bg-zinc-800 p-6 rounded-lg flex items-center justify-center h-32"
          >
            <div className="relative h-20 w-full">
              <Image src="/aluns-motor-logo.png" alt="Aluns Motor" fill className="object-contain" />
            </div>
          </Link>

          {/* Partner 2 - Webbfix */}
          <Link
            href="https://webbfix.se"
            rel="dofollow"
            className="bg-zinc-800 p-6 rounded-lg flex items-center justify-center h-32"
          >
            <div className="relative h-20 w-full">
              <Image src="/webbfix-logo.png" alt="Webbfix" fill className="object-contain" />
            </div>
          </Link>

          {/* Partner 3 - KonstruktBygg */}
          <Link
            href="https://konstruktbygg.se"
            rel="dofollow"
            className="bg-zinc-800 p-6 rounded-lg flex items-center justify-center h-32"
          >
            <div className="relative h-20 w-full">
              <Image src="/konstruktbygg-logo.png" alt="KonstruktBygg" fill className="object-contain" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
