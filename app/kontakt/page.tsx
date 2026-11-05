import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakta oss | Bygg & Plattsättning i Eskilstuna",
  description:
    "Kontakta Bygg & Plattsättning för frågor eller offert på badrumsrenovering, köksrenovering eller plattsättning i Eskilstuna och närområdet.",
  alternates: {
    canonical: "https://byggoplattsattning.se/kontakt",
  },
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Kontakta oss<span className="text-orange-500">.</span>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Kontaktinformation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Telefon</h3>
                    <Link href="tel:073 181 89 08" className="hover:text-orange-500 transition-colors">
                      073 181 89 08
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">E-post</h3>
                    <Link href="mailto:info@byggofastighet.se" className="hover:text-orange-500 transition-colors">
                      info@byggofastighet.se
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Adress</h3>
                    <p>Eskilstuna, Sverige</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Öppettider</h3>
                    <p>Måndag-Fredag: 07:00 - 16:00</p>
                    <p>Lördag-Söndag: Stängt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-zinc-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Skicka oss ett meddelande</h2>
            <p className="mb-8">
              Har du frågor eller vill diskutera ett projekt? Skicka oss ett e-postmeddelande så återkommer vi så snart
              som möjligt.
            </p>
            <Link
              href="mailto:info@byggofastighet.se"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors inline-flex items-center"
            >
              <Mail className="mr-2" size={20} />
              Skicka e-post
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
