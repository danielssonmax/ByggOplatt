import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om oss | Erfaren plattsättare i Eskilstuna sedan 20 år",
  description:
    "Bygg & Plattsättning har över 20 års erfarenhet av plattsättning och badrumsrenovering i Eskilstuna. Lär känna vårt team och vår historia.",
  alternates: {
    canonical: "https://byggoplattsattning.se/om-oss",
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Om oss<span className="text-orange-500">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/301840629_166506365957206_1162540427299190313_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sVCFLnfLy44Q7kNvwE_71bz&_nc_oc=AdmPaRbkEFEZR3nh4bEfi6B9xj0f3QaXU-YWEf6ZVtOf-vqqEzxBGO9_8Qcf7TxQVys&_nc_zt=23&_nc_ht=scontent-hel3-1.xx&_nc_gid=eAVREaM5JvqfXwNYIRTIkg&oh=00_AfFIO2lkLhULwKxwDsWcHt0REaZTxT2MY8-sluvxBrJILA&oe=67FAAE47"
              alt="Om Bygg & Plattsättning"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Vår historia</h2>
            <p className="mb-4">
              Bygg & Plattsättning grundades med en vision om att leverera högkvalitativa plattsättningstjänster i
              Eskilstuna och omgivande områden. Med år av erfarenhet i branschen har vi byggt upp ett rykte för
              pålitlighet, kvalitet och professionalism.
            </p>
            <p className="mb-4">
              Vårt team består av erfarna hantverkare som är dedikerade till att leverera exceptionella resultat för
              varje projekt, oavsett storlek. Vi tar stolthet i vårt arbete och strävar efter att överträffa våra
              kunders förväntningar.
            </p>
            <p>
              Idag är vi en etablerad aktör som varit verksamma i 20 år inom plattsättning och badrumsrenovering i
              Eskilstuna, och vi fortsätter att växa tack vare våra nöjda kunders rekommendationer.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Våra värderingar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Kvalitet</h3>
              <p>
                Vi kompromissar aldrig med kvaliteten på vårt arbete. Vi använder endast de bästa materialen och
                tillämpar beprövade tekniker för att säkerställa hållbara resultat.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Pålitlighet</h3>
              <p>
                Vi håller våra löften. När vi åtar oss ett projekt, kan du lita på att vi levererar enligt
                överenskommelse, i tid och inom budget.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Kundnöjdhet</h3>
              <p>
                Vår främsta prioritet är att du som kund ska vara helt nöjd med resultatet. Vi lyssnar på dina önskemål
                och arbetar hårt för att förverkliga din vision.
              </p>
            </div>
          </div>
        </div>

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
