import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Layers, Wrench } from "lucide-react"
import type { Metadata } from "next"
import { CITIES, SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Tjänster: badrum, kök & plattsättning",
  description:
    "Professionella tjänster inom badrumsrenovering, köksrenovering, plattsättning och byggarbeten i Eskilstuna. Kvalitet och expertis i varje projekt.",
  alternates: {
    canonical: "/tjanster",
  },
}

type Service = {
  slug: string
  name: string
  heading: string
  text: string
  features: string[]
  image?: { src: string; alt: string; small?: boolean }
}

const services: Service[] = [
  {
    slug: "badrumsrenovering",
    name: "Badrumsrenovering",
    heading: "Komplett badrumsrenovering",
    text: "Vi utför kompletta badrumsrenoveringar från rivning till färdig installation. Vårt team av erfarna hantverkare säkerställer att ditt nya badrum blir både funktionellt och snyggt.",
    features: [
      "Rivning och bortforsling",
      "VVS-installation",
      "Elinstallation",
      "Tätskikt enligt branschregler",
      "Plattsättning av kakel och klinker",
      "Installation av sanitetsporslin och inredning",
    ],
    image: {
      src: "/service-bathroom-1.webp",
      alt: "Renoverat badrum med storformatsplattor, dubbla handfat och fristående badkar",
    },
  },
  {
    slug: "koksrenovering",
    name: "Köksrenovering",
    heading: "Köksrenovering",
    text: "Köket är hemmets hjärta. Vi hjälper dig att skapa ett modernt och funktionellt kök som passar dina behov och din vardag. Från planering till färdig installation tar vi hand om hela processen.",
    features: [
      "Rivning av befintligt kök",
      "VVS- och elarbeten",
      "Plattsättning av kakel",
      "Montering av köksinredning",
      "Installation av vitvaror",
      "Målning och tapetsering",
    ],
  },
  {
    slug: "plattsattning",
    name: "Plattsättning",
    heading: "Professionell plattsättning",
    text: "Vi utför plattsättning för alla typer av utrymmen. Med vår erfarenhet och noggrannhet blir resultatet både vackert och hållbart.",
    features: [
      "Kakel och klinker",
      "Mosaik",
      "Natursten",
      "Tätskikt enligt branschregler",
      "Golvvärme",
      "Reparation och renovering",
    ],
    image: {
      src: "/service-bathroom-2.webp",
      alt: "Badrum med klinker i storformat, mosaik på väggen och dusch med glasvägg",
    },
  },
  {
    slug: "bygg-snickeri",
    name: "Bygg & snickeri",
    heading: "Allmänna byggarbeten",
    text: "Vi utför alla typer av byggarbeten, från mindre reparationer till större ombyggnationer. Med vår breda kompetens kan vi hjälpa dig med de flesta byggprojekt.",
    features: [
      "Ombyggnationer",
      "Tillbyggnader",
      "Snickeriarbeten",
      "Innerväggar och tak",
      "Golv och golvläggning",
      "Målning och tapetsering",
    ],
  },
]

const steps = [
  { title: "Konsultation", text: "Vi diskuterar dina behov och önskemål för att förstå projektets omfattning." },
  { title: "Planering", text: "Vi tar fram en detaljerad plan och offert baserad på dina önskemål." },
  { title: "Utförande", text: "Vi genomför projektet med fokus på kvalitet, tidplan och budget." },
]

export default function Services() {
  return (
    <main>
      {/* ───────────── Intro ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          aria-hidden
          className="tile-wall absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_70%_at_20%_20%,#000_25%,transparent_70%)]"
        />
        <div className="container-site grid gap-10 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise">Tjänster</p>
            <h1 className="mt-6 animate-rise text-[clamp(2.75rem,6.4vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
              Våra tjänster<span className="text-orange-500">.</span>
            </h1>
          </div>
          <div className="max-w-prose animate-rise space-y-4 text-[1.0625rem] leading-relaxed text-ink-300 [animation-delay:160ms] lg:col-span-5">
            <p>
              Bygg & Plattsättning erbjuder ett brett utbud av tjänster inom bygg och renovering. Med vår långa
              erfarenhet hjälper vi dig med allt från mindre renoveringar till kompletta ombyggnationer.
            </p>
            <p>
              Oavsett om du behöver renovera badrummet, uppgradera köket eller utföra andra byggprojekt levererar vi
              ett resultat som håller i många år.
            </p>
          </div>
        </div>

        {/* Jump links */}
        <nav aria-label="Tjänster på sidan" className="container-site pb-4">
          <ul className="flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
            {services.map((s, i) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                >
                  <span className="font-display tabular-nums text-orange-500">0{i + 1}</span>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* ───────────── Services (zig-zag) ───────────── */}
      <div className="container-site space-y-24 py-16 md:space-y-32 md:py-24">
        {services.map((service, i) => {
          const reversed = i % 2 === 1
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-rubrik`}
              className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              {/* Visual: real photo, or a typographic panel when no fitting photo exists */}
              <div className={reversed ? "lg:order-last" : ""}>
                {service.image ? (
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-6 top-6 rounded-md bg-ink-950/70 px-3 py-1.5 font-display text-sm font-semibold tabular-nums text-orange-500 backdrop-blur-md">
                      0{i + 1}
                    </span>
                  </div>
                ) : (
                  <div className="surface relative flex aspect-[5/4] flex-col justify-between overflow-hidden p-8 md:p-12">
                    <div aria-hidden className="tile-wall absolute inset-0 opacity-70" />
                    <span
                      aria-hidden
                      className="relative font-display text-[clamp(6rem,14vw,11rem)] font-extrabold leading-none tracking-tighter text-orange-500"
                    >
                      0{i + 1}
                    </span>
                    <p className="relative font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                      {service.name}
                      <span className="text-orange-500">.</span>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="eyebrow">{service.name}</p>
                <h2
                  id={`${service.slug}-rubrik`}
                  className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl"
                >
                  <Link href={`/${service.slug}`} className="transition-colors hover:text-glacier-200">
                    {service.heading}
                  </Link>
                  <span className="text-orange-500">.</span>
                </h2>
                <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-ink-300">{service.text}</p>

                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink-200">
                      <span aria-hidden className="mt-[0.7em] h-[2px] w-3 shrink-0 bg-orange-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Link href="/kontakt" className="btn-cta">
                    Begär offert
                    <ArrowUpRight size={18} aria-hidden />
                  </Link>
                  <Link
                    href={`/${service.slug}`}
                    className="group inline-flex items-center gap-2 font-medium text-glacier-300"
                  >
                    Läs mer om {service.name.toLowerCase()}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-sm text-ink-400">{service.name} finns i:</p>
                  <ul className="mt-3 flex flex-wrap gap-x-1 gap-y-2 text-[0.9375rem]">
                    {CITIES.map((city, ci) => (
                      <li key={city.slug} className="flex items-center gap-1">
                        <Link
                          href={`/${service.slug}/${city.slug}`}
                          className="rounded px-1 text-glacier-300 underline decoration-glacier-300/0 underline-offset-4 transition-colors hover:decoration-glacier-300"
                        >
                          {city.name}
                        </Link>
                        {ci < CITIES.length - 1 && (
                          <span aria-hidden className="text-ink-600">
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ───────────── Other services ───────────── */}
      <section aria-labelledby="ovriga-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Mer</p>
            <h2 id="ovriga-rubrik" className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Övriga tjänster<span className="text-orange-500">.</span>
            </h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-2">
            <li className="bg-ink-950">
              <Link
                href="/flytspackling"
                className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <Layers className="text-orange-500" size={24} aria-hidden />
                <h3 className="mt-5 text-xl font-semibold text-white">Flytspackling</h3>
                <p className="mt-3 leading-relaxed text-ink-300">
                  Vi jämnar ut golv med flytspackel inför klinker, parkett och golvvärme, som eget jobb eller som en del
                  av en renovering.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-glacier-300">
                  Läs mer om flytspackling
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
            <li className="bg-ink-950 p-8">
              <Wrench className="text-orange-500" size={24} aria-hidden />
              <h3 className="mt-5 text-xl font-semibold text-white">Mindre byggarbeten</h3>
              <p className="mt-3 leading-relaxed text-ink-300">
                Vi utför även mindre byggarbeten som komplement till våra plattsättningstjänster. Kontakta oss för att
                diskutera ditt projekt.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section aria-labelledby="process-rubrik" className="container-site py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Så jobbar vi</p>
            <h2
              id="process-rubrik"
              className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl"
            >
              Vår arbetsprocess<span className="text-orange-500">.</span>
            </h2>
          </div>
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent md:block"
            />
            {steps.map((step, i) => (
              <li key={step.title} className="reveal relative">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold tabular-nums text-orange-500 ring-1 ring-orange-500/50">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-300">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.08] pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-prose text-lg leading-relaxed text-ink-300">
            Redo att starta ditt projekt? Kontakta oss för att diskutera dina behov och få en kostnadsfri offert.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/kontakt" className="btn-cta">
              Kontakta oss
              <ArrowUpRight size={18} aria-hidden />
            </Link>
            <a href={SITE.phoneHref} className="btn-ghost tabular-nums">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
