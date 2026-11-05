import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react"
import { CITIES, SERVICES, SITE, serviceSlug } from "@/lib/site"
import { CITY_INFO } from "@/lib/cities"
import { projectsFor } from "@/lib/projects"
import { BUSINESS_ID, JsonLd, breadcrumbSchema } from "@/components/json-ld"

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceCityPageProps {
  serviceName: string
  cityName: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introContent: string[]
  features: ServiceFeature[]
  whyChooseUsContent: string[]
  ctaTitle: string
  ctaDescription: string
  heroImage?: string
  secondaryImage?: string
}

// Descriptive alt text per image. These photos are generic examples, so the alt
// describes what is shown instead of claiming a specific local project.
const IMAGE_ALT: Record<string, string> = {
  "/hero-image.jpg": "Bygg & Plattsättnings servicebil med logotyp och märkningen Behörig våtrum",
  "/service-bathroom-1.webp": "Renoverat badrum med storformatsplattor, dubbla handfat och fristående badkar",
  "/service-bathroom-2.webp": "Badrum med klinker i storformat, mosaik på väggen och duschvägg i glas",
}

export function ServiceCityPage({
  serviceName,
  cityName,
  heroTitle,
  heroDescription,
  introTitle,
  introContent,
  features,
  whyChooseUsContent,
  ctaTitle,
  ctaDescription,
  heroImage = "/service-bathroom-1.webp",
  secondaryImage,
}: ServiceCityPageProps) {
  const slug = serviceSlug(serviceName)
  const citySlug = CITIES.find((c) => c.name === cityName)?.slug ?? cityName.toLowerCase()
  const path = `/${slug}/${citySlug}`
  const serviceLower = serviceName.toLowerCase()
  const otherServices = SERVICES.filter((s) => s.slug !== slug)
  const isWetRoom = slug === "badrumsrenovering" || slug === "plattsattning"
  const city = CITY_INFO[citySlug]
  const projects = projectsFor({ city: citySlug, service: slug })

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${serviceName} i ${cityName}`,
            serviceType: serviceName,
            description: heroDescription,
            url: `${SITE.url}${path}`,
            provider: { "@id": BUSINESS_ID },
            areaServed: { "@type": "City", name: cityName },
          },
          breadcrumbSchema([
            { name: "Hem", path: "/" },
            { name: serviceName, path: `/${slug}` },
            { name: cityName, path },
          ]),
        ]}
      />

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          aria-hidden
          className="tile-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_25%_30%,#000_25%,transparent_75%)]"
        />
        <div className="container-site grid items-center gap-14 pb-20 pt-10 md:pb-28 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <nav aria-label="Brödsmulor" className="animate-rise">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Hem
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight size={14} />
                </li>
                <li>
                  <Link href={`/${slug}`} className="transition-colors hover:text-white">
                    {serviceName}
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page" className="text-ink-200">
                  {cityName}
                </li>
              </ol>
            </nav>

            <h1 className="mt-8 animate-rise text-[clamp(2.6rem,5.6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
              {heroTitle}
              <span className="text-orange-500">.</span>
            </h1>
            <p className="mt-7 max-w-[36rem] animate-rise text-lg leading-relaxed text-ink-300 [animation-delay:160ms]">
              {heroDescription}
            </p>
            <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <Link href="/kontakt" className="btn-cta">
                Begär offert
                <ArrowUpRight size={18} aria-hidden />
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost tabular-nums">
                Ring {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="mt-12 flex animate-rise flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-6 text-sm text-ink-300 [animation-delay:320ms]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                Över 20 års erfarenhet
              </li>
              {isWetRoom && (
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                  Behörig våtrum
                </li>
              )}
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                Kostnadsfri offert
              </li>
            </ul>
          </div>

          {/* No entry animation here: the image is the LCP element. */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 lg:aspect-[4/5]">
              <Image
                src={heroImage}
                alt={IMAGE_ALT[heroImage] ?? `${serviceName} i ${cityName}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={heroImage === "/hero-image.jpg" ? "object-cover object-[62%_center]" : "object-cover"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Intro ───────────── */}
      <section aria-labelledby="intro-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid gap-10 py-24 md:py-28 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow">{cityName}</p>
            <h2 id="intro-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
              {introTitle}
              <span className="text-orange-500">.</span>
            </h2>
          </div>
          <div className="max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-ink-300">
            {introContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Local facts: unique per town ───────────── */}
      {city && (
        <section aria-labelledby="lokalt-rubrik" className="container-site pt-24 md:pt-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <div>
              <p className="eyebrow">Lokalt</p>
              <h2 id="lokalt-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
                Så jobbar vi i {cityName}
                <span className="text-orange-500">.</span>
              </h2>
            </div>
            <div>
              <div className="max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-ink-300">
                <p>{city.local}</p>
                <p>
                  Om projektet kräver bygglov eller anmälan är det {city.kommun} som handlägger ärendet. Vi hjälper dig att
                  reda ut vad som gäller innan arbetet startar.
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.06] sm:grid-cols-4">
                {(city.distanceKm === 0
                  ? [
                      { label: "Kommun", value: city.kommun },
                      { label: "Län", value: city.lan },
                      { label: "Vår bas", value: SITE.address.street },
                      { label: "Restid", value: "Inom staden" },
                    ]
                  : [
                      { label: "Kommun", value: city.kommun },
                      { label: "Län", value: city.lan },
                      { label: "Från Eskilstuna", value: `ca ${city.distanceKm} km` },
                      { label: "Restid", value: `ca ${city.driveMin} min` },
                    ]
                ).map((fact) => (
                  <div key={fact.label} className="bg-ink-850 p-5">
                    <dt className="text-sm text-ink-400">{fact.label}</dt>
                    <dd className="mt-1 font-medium tabular-nums text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* ───────────── Reference jobs in this town (renders only when there are any) ───────────── */}
      {projects.length > 0 && (
        <section aria-labelledby="projekt-rubrik" className="container-site pt-24 md:pt-32">
          <p className="eyebrow">Referensjobb</p>
          <h2 id="projekt-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
            {serviceName} vi gjort i {cityName}
            <span className="text-orange-500">.</span>
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug} className="surface overflow-hidden">
                {p.images[0] && (
                  <div className="relative aspect-[4/3]">
                    <Image src={p.images[0].src} alt={p.images[0].alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-300">{p.summary}</p>
                  {p.quote && (
                    <blockquote className="mt-5 border-l-2 border-orange-500 pl-4 text-ink-200">
                      <p>”{p.quote.text}”</p>
                      <footer className="mt-2 text-sm text-ink-400">{p.quote.name}</footer>
                    </blockquote>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ───────────── Features ───────────── */}
      <section aria-labelledby="moment-rubrik" className="container-site py-24 md:py-32">
        <div className={secondaryImage ? "grid gap-14 lg:grid-cols-12 lg:gap-16" : ""}>
          <div className={secondaryImage ? "lg:col-span-7" : ""}>
            <p className="eyebrow">Det här ingår</p>
            <h2 id="moment-rubrik" className="mt-5 max-w-2xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
              Våra tjänster inom {serviceLower}
              <span className="text-orange-500">.</span>
            </h2>
            <ol className={`mt-14 grid gap-x-10 ${secondaryImage ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {features.map((feature, index) => (
                <li key={feature.title} className="reveal border-t border-white/[0.08] py-7">
                  <span className="font-display text-sm font-semibold tabular-nums text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-300">{feature.description}</p>
                </li>
              ))}
            </ol>
          </div>
          {secondaryImage && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 lg:sticky lg:top-32">
                <Image
                  src={secondaryImage}
                  alt={IMAGE_ALT[secondaryImage] ?? `${serviceName} i ${cityName}`}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────────── Why us ───────────── */}
      <section aria-labelledby="varfor-rubrik" className="border-t border-white/[0.06]">
        <div className="container-site py-24 md:py-32">
          <h2 id="varfor-rubrik" className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
            Varför välja oss för {serviceLower} i {cityName}?
          </h2>
          <ol className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {whyChooseUsContent.map((item, index) => (
              <li key={index} className="reveal flex gap-6">
                <span className="font-display text-5xl font-extrabold leading-none tabular-nums text-orange-500/90">
                  {index + 1}
                </span>
                <p className="pt-1 leading-relaxed text-ink-200">{item}</p>
              </li>
            ))}
          </ol>

          <div className="surface reveal mt-20 grid gap-10 p-8 md:grid-cols-[auto_1fr_1fr] md:p-12">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
              <ShieldCheck size={26} aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">Behörig våtrum</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-300">
                Vi uppfyller kraven från Byggkeramikrådet och Säker Vatten för att bygga behöriga våtrum.{" "}
                <Link href="/blogg/tatskikt-i-badrum" className="link">
                  Så fungerar tätskikt och behörighet
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Över 20 år i branschen</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-300">
                Vi arbetar enligt branschens normer och föreskrifter, med en kontaktperson genom hela projektet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section aria-labelledby="cta-rubrik" className="container-site pb-24 md:pb-32">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-16 ring-1 ring-white/[0.08] md:px-16 md:py-20">
          <div aria-hidden className="tile-grid absolute inset-0 -z-10 opacity-70" />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-glacier-400/[0.12] blur-[100px]"
          />
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <h2 id="cta-rubrik" className="text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                {ctaTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">{ctaDescription}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/kontakt" className="btn-cta">
                Begär offert
                <ArrowUpRight size={18} aria-hidden />
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost tabular-nums">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Internal links ───────────── */}
      <section aria-label="Fler tjänster och orter" className="border-t border-white/[0.06]">
        <div className="container-site grid gap-14 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">Fler tjänster i {cityName}</h2>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              <li>
                <Link
                  href={`/${slug}`}
                  className="group flex items-center justify-between py-4 text-ink-200 transition-colors hover:text-white"
                >
                  Allt om {serviceLower}: pris, tid och vanliga frågor
                  <ArrowRight
                    size={18}
                    className="text-glacier-300 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/${citySlug}`}
                    className="group flex items-center justify-between py-4 text-ink-200 transition-colors hover:text-white"
                  >
                    {s.name} i {cityName}
                    <ArrowRight
                      size={18}
                      className="text-glacier-300 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">{serviceName} på fler orter</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {CITIES.map((city) => {
                const current = city.name === cityName
                return (
                  <li key={city.slug}>
                    <Link
                      href={`/${slug}/${city.slug}`}
                      aria-current={current ? "page" : undefined}
                      className={
                        current
                          ? "inline-flex rounded-lg px-4 py-2.5 text-[0.9375rem] font-medium text-orange-500 ring-1 ring-orange-500/60"
                          : "inline-flex rounded-lg bg-ink-850 px-4 py-2.5 text-[0.9375rem] text-ink-200 ring-1 ring-white/[0.06] transition-colors hover:text-glacier-300 hover:ring-glacier-300/40"
                      }
                    >
                      {city.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
