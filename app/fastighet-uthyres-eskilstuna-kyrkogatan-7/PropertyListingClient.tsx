"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, CheckCircle2, Expand, Home, Mail, MapPin, Phone, Ruler, Banknote, X } from "lucide-react"
import { SITE } from "@/lib/site"

type Photo = { src: string; alt: string; fit?: "cover" | "contain" }

const PHOTOS = {
  exterior2: { src: "/property-exterior-2.jpg", alt: "Kyrkogatan 7B, fastighetens exteriör" },
  front: { src: "/property-front.jpg", alt: "Fastighetens framsida mot gatan" },
  garden: { src: "/property-garden.jpg", alt: "Trädgård och omgivning runt fastigheten" },
  exterior1: { src: "/property-exterior-1.jpg", alt: "Fastighetens exteriör från sidan" },
  floorPlan: { src: "/property-floor-plan.jpg", alt: "Planlösning och ritningar", fit: "contain" },
} satisfies Record<string, Photo>

const GALLERY: Photo[] = [PHOTOS.exterior2, PHOTOS.front, PHOTOS.garden, PHOTOS.exterior1]

const AMENITIES = [
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

const TECH = [
  { label: "Takhöjd", value: "3,5 m" },
  { label: "Uppvärmning", value: "Fjärrvärme" },
  { label: "Ventilation", value: "Frånluft" },
  { label: "Energiklass", value: "E" },
]

const SURROUNDINGS = [
  { label: "Omgivning/natur", value: "Å nära samt parkområde." },
  { label: "Parkering", value: "8 parkeringsplatser på gården" },
  { label: "Närservice", value: "500 m till Eskilstuna centrum" },
  { label: "Kommunikationer", value: "Centralstation och busstation närliggande." },
  { label: "Vägbeskrivning", value: "Fastighet på Kyrkogatan 7B intill Fors kyrka mitt i centrala Eskilstuna" },
]

const KEY_FACTS = [
  { icon: Ruler, value: "240 m²", label: "Yta" },
  { icon: Banknote, value: "2 200 kr/m²", label: "Hyra per år" },
  { icon: Calendar, value: "1931", label: "Byggår" },
  { icon: Home, value: "7 rum", label: "Antal rum" },
]

export default function PropertyListingClient() {
  const [lightbox, setLightbox] = useState<Photo | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)

  const open = (photo: Photo, trigger: HTMLElement) => {
    lastTrigger.current = trigger
    setLightbox(photo)
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    closeRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      lastTrigger.current?.focus()
    }
  }, [lightbox])

  return (
    <main>
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-overlay flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Stäng bild"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <div className="relative h-full max-h-[88vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate h-[72vh] min-h-[540px] overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10 grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div className="relative">
            <Image
              src={PHOTOS.exterior2.src}
              alt={PHOTOS.exterior2.alt}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative hidden md:block">
            <Image src={PHOTOS.garden.src} alt={PHOTOS.garden.alt} fill sizes="40vw" className="object-cover" />
          </div>
        </div>
        {/* Top shade keeps the transparent header legible; bottom shade carries the title. */}
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-ink-950/90 via-ink-950/50 to-transparent" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-950/70 to-ink-950/10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/70 via-ink-950/20 to-transparent" />

        <div className="container-site flex h-full flex-col justify-end pb-24 pt-28">
          <p className="eyebrow">Fastighet uthyres · även till salu</p>
          <h1 className="mt-5 text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white">
            Kyrkogatan 7B<span className="text-orange-500">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-200 md:text-xl">240 m² kontorslokal i centrala Eskilstuna</p>
        </div>
      </section>

      {/* ───────────── Key facts ───────────── */}
      <section aria-label="Nyckeltal" className="container-site relative z-10 -mt-12">
        <dl className="surface grid grid-cols-2 gap-px overflow-hidden bg-white/[0.06] md:grid-cols-4">
          {KEY_FACTS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col gap-2 bg-ink-850 p-6 md:p-8">
              <dt className="flex items-center gap-2 text-sm text-ink-400">
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </dt>
              <dd className="font-display text-2xl font-bold tabular-nums text-orange-500 md:text-3xl">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────────── Main content ───────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-20 lg:col-span-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Beskrivning<span className="text-orange-500">.</span>
              </h2>
              <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-300">
                <p className="font-semibold text-white">Fd komministerbostad tillhörande Fors kyrka.</p>
                <p>
                  Äldre fastighet anpassad för kontor, kontorshotell och coworking. Denna charmiga byggnad från 1931
                  erbjuder en unik arbetsmiljö med högt i tak och historisk karaktär, belägen intill Fors kyrka mitt i
                  centrala Eskilstuna.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Bilder<span className="text-orange-500">.</span>
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
                {GALLERY.map((photo, i) => (
                  <li key={photo.src} className={i === 0 ? "col-span-2" : ""}>
                    <GalleryButton photo={photo} onOpen={open} className={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Planlösning<span className="text-orange-500">.</span>
              </h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-300">
                5 rum på nedre botten och öppen yta på övre våning med ett separat kontorsrum.
              </p>
              <GalleryButton
                photo={PHOTOS.floorPlan}
                onOpen={open}
                className="mt-6 aspect-[753/523] max-w-2xl bg-ink-100"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Teknisk information<span className="text-orange-500">.</span>
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.06] md:grid-cols-4">
                {TECH.map((t) => (
                  <div key={t.label} className="bg-ink-900 p-5">
                    <dt className="text-sm text-ink-400">{t.label}</dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-white">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Bekvämligheter<span className="text-orange-500">.</span>
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3">
                {AMENITIES.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2.5 text-ink-200">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Omgivning & kommunikation<span className="text-orange-500">.</span>
              </h2>
              <dl className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {SURROUNDINGS.map((s) => (
                  <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                    <dt className="font-medium text-white">{s.label}</dt>
                    <dd className="text-ink-300">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* ───────────── Contact card ───────────── */}
          <aside className="lg:col-span-1">
            <div className="surface sticky top-28 p-7">
              <h2 className="text-2xl font-bold tracking-tight text-white">Kontakta oss</h2>

              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                  <div>
                    <dt className="text-sm text-ink-400">Adress</dt>
                    <dd className="text-white">Kyrkogatan 7B, Eskilstuna</dd>
                    <dd className="mt-0.5 text-sm text-ink-400">Fastighet: FORSEN 7B</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                  <div>
                    <dt className="text-sm text-ink-400">Typ av yta</dt>
                    {/* TODO: verify — the sidebar says 220 m² office space while the page headline says 240 m² total. */}
                    <dd className="text-white">Kontor: 220 m²</dd>
                    <dd className="text-white tabular-nums">2 200 kr/m²/år</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                  <div>
                    <dt className="text-sm text-ink-400">Tillträde</dt>
                    <dd className="text-white">Omgående</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 space-y-3 border-t border-white/[0.08] pt-7">
                <p className="text-sm text-ink-300">Kontakta BFE Fastigheter för mer information eller bokning av visning.</p>
                <a href={SITE.phoneHref} className="btn-cta w-full tabular-nums">
                  <Phone className="h-4 w-4" aria-hidden />
                  Ring {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="btn-ghost w-full">
                  <Mail className="h-4 w-4" aria-hidden />
                  Skicka e-post
                </a>
              </div>

              <div className="mt-7 border-t border-white/[0.08] pt-7">
                <h3 className="font-semibold text-white">Ekonomi</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-400">Kontraktslängd</dt>
                    <dd className="text-right text-ink-100">Förhandlingsbart</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-400">Kontraktstyp</dt>
                    <dd className="text-right text-ink-100">Förstahandskontrakt</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-400">I hyran ingår</dt>
                    <dd className="text-right text-ink-100">Värme, skatt, el</dd>
                  </div>
                </dl>
              </div>

              <p className="mt-7 border-t border-white/[0.08] pt-6 text-sm italic text-ink-400">
                Fastigheten uthyres (även till salu)
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="border-t border-white/[0.06] bg-ink-950">
        <div className="container-site flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Visning</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl">
              Intresserad av fastigheten<span className="text-orange-500">?</span>
            </h2>
            <p className="mt-4 max-w-prose text-lg text-ink-300">
              Kontakta oss för mer information eller för att boka en visning.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={SITE.phoneHref} className="btn-cta tabular-nums">
              <Phone className="h-5 w-5" aria-hidden />
              Ring {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-ghost">
              <Mail className="h-5 w-5" aria-hidden />
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function GalleryButton({
  photo,
  onOpen,
  className = "",
}: {
  photo: Photo
  onOpen: (photo: Photo, trigger: HTMLElement) => void
  className?: string
}) {
  return (
    <button
      type="button"
      aria-label={`Visa större: ${photo.alt}`}
      onClick={(e) => onOpen(photo, e.currentTarget)}
      className={`group relative block w-full overflow-hidden rounded-2xl ring-1 ring-white/[0.06] transition-transform duration-300 active:scale-[0.99] ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw"
        className={`transition-transform duration-700 ease-spring group-hover:scale-[1.03] ${
          photo.fit === "contain" ? "object-contain p-2" : "object-cover"
        }`}
      />
      <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand className="h-4 w-4" aria-hidden />
      </span>
    </button>
  )
}
