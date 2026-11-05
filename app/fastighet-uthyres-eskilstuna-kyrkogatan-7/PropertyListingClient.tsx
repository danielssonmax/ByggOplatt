"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Calendar, Home, Ruler, Banknote, CheckCircle2, X } from "lucide-react"
import { useState } from "react"

export default function PropertyListingClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const amenities = [
    "Besöksparkering",
    "Dusch",
    "Fiberanslutning",
    "Kök/pentry",
    "Konferens",
    "Kundparkering",
    "Mötesrum",
    "Omklädningsrum",
    "Parkering",
    "Reception",
    "Terrass",
    "WC",
  ]

  return (
    <main className="min-h-screen">
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Fastighet i fullskärm"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Hero Section with Images */}
      <section className="relative h-[60vh] bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-full cursor-pointer" onClick={() => setLightboxImage("/property-exterior-2.jpg")}>
            <Image
              src="/property-exterior-2.jpg"
              alt="Fastighet Kyrkogatan 7B exteriör"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-full cursor-pointer" onClick={() => setLightboxImage("/property-garden.jpg")}>
            <Image src="/property-garden.jpg" alt="Trädgård och omgivning" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kyrkogatan 7B</h1>
            <p className="text-xl md:text-2xl mb-2">240 m² Kontorslokal i Centrala Eskilstuna</p>
            <p className="text-lg text-orange-500 font-semibold">Fastighet Uthyres</p>
          </div>
        </div>
      </section>

      {/* Key Info Bar */}
      <section className="bg-orange-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <Ruler className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">240 m²</p>
              <p className="text-sm">Yta</p>
            </div>
            <div>
              <Banknote className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">2 200 kr/m²</p>
              <p className="text-sm">Hyra per år</p>
            </div>
            <div>
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">1931</p>
              <p className="text-sm">Byggår</p>
            </div>
            <div>
              <Home className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">7 rum</p>
              <p className="text-sm">Antal rum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Beskrivning</h2>
                <div className="prose max-w-none">
                  <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                    <strong>Fd Kommunisterbostad tillhörande Fors kyrka.</strong>
                  </p>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    Äldre fastighet anpassad för kontor, kontorshotell och coworking. Denna charmiga byggnad från 1931
                    erbjuder en unik arbetsmiljö med högt i tak och historisk karaktär, belägen intill Fors kyrka mitt i
                    centrala Eskilstuna.
                  </p>
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Bilder</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="relative h-64 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage("/property-exterior-2.jpg")}
                  >
                    <Image
                      src="/property-exterior-2.jpg"
                      alt="Fastighetens framsida"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className="relative h-64 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage("/property-front.jpg")}
                  >
                    <Image
                      src="/property-front.jpg"
                      alt="Fastighetens framsida"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className="relative h-64 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage("/property-garden.jpg")}
                  >
                    <Image
                      src="/property-garden.jpg"
                      alt="Trädgård och omgivning"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className="relative h-64 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage("/property-exterior-1.jpg")}
                  >
                    <Image
                      src="/property-exterior-1.jpg"
                      alt="Fastighetens exteriör"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className="relative h-64 md:col-span-2 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxImage("/property-floor-plan.jpg")}
                  >
                    <Image
                      src="/property-floor-plan.jpg"
                      alt="Planlösning och ritningar"
                      fill
                      className="object-contain rounded-lg bg-zinc-100"
                    />
                  </div>
                </div>
              </div>

              {/* Planlösning */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Planlösning</h2>
                <p className="text-lg text-zinc-600">
                  5 rum på nedre botten och öppen yta på övre våning med ett separat kontorsrum.
                </p>
              </div>

              {/* Teknisk Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Teknisk Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Takhöjd</p>
                    <p className="text-zinc-600">3,5 m</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Uppvärmning</p>
                    <p className="text-zinc-600">Fjärrvärme</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Ventilation</p>
                    <p className="text-zinc-600">Frånluft</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Energiklass</p>
                    <p className="text-zinc-600">E</p>
                  </div>
                </div>
              </div>

              {/* Bekvämligheter */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Bekvämligheter</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-zinc-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Omgivning */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Omgivning & Kommunikation</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Omgivning/natur</p>
                    <p className="text-zinc-600">Å nära samt parkområde.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Parkering</p>
                    <p className="text-zinc-600">8 parkeringsplatser på gården</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Närservice</p>
                    <p className="text-zinc-600">500 m till Eskilstuna centrum</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Kommunikationer</p>
                    <p className="text-zinc-600">Centralstation och busstation närliggande.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-semibold text-zinc-800">Vägbeskrivning</p>
                    <p className="text-zinc-600">
                      Fastighet på Kyrkogatan 7B intill Fors kyrka mitt i centrala Eskilstuna
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 bg-zinc-50 rounded-lg p-6 shadow-lg border border-zinc-200">
                <h3 className="text-2xl font-bold mb-6 text-zinc-800">Kontakta oss</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-800">Adress</p>
                      <p className="text-zinc-600">Kyrkogatan 7B</p>
                      <p className="text-zinc-600">Eskilstuna</p>
                      <p className="text-sm text-zinc-500 mt-1">Fastighet: FORSEN 7B</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-800">Typ av yta</p>
                      <p className="text-zinc-600">Kontor: 220 m²</p>
                      <p className="text-zinc-600">2 200 kr/m²/år</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-800">Tillträde</p>
                      <p className="text-zinc-600">Omgående</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-300 pt-6 space-y-3">
                  <p className="text-sm text-zinc-600 mb-4">
                    Kontakta BFE Fastigheter för mer information eller bokning av visning.
                  </p>

                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="tel:0731818908">
                      <Phone className="h-4 w-4 mr-2" />
                      Ring 073 181 89 08
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    <Link href="mailto:info@byggofastighet.se">
                      <Mail className="h-4 w-4 mr-2" />
                      Skicka e-post
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-300">
                  <h4 className="font-semibold text-zinc-800 mb-2">Ekonomi</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Kontraktlängd:</span>
                      <span className="text-zinc-800">Förhandlingsbart</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Kontrakttyp:</span>
                      <span className="text-zinc-800">Förstahandskontrakt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">I hyran ingår:</span>
                      <span className="text-zinc-800">Värme, skatt, el</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-300">
                  <p className="text-sm text-zinc-600 italic">Fastighet UTHYRES (även till salu)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Intresserad av fastigheten?</h2>
          <p className="text-xl mb-8">Kontakta oss idag för mer information eller för att boka en visning</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-zinc-100">
              <Link href="tel:0731818908">
                <Phone className="h-5 w-5 mr-2" />
                Ring 073 181 89 08
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-600 bg-transparent"
            >
              <Link href="mailto:info@byggofastighet.se">
                <Mail className="h-5 w-5 mr-2" />
                info@byggofastighet.se
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
