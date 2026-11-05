import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, Plus } from "lucide-react"
import { BUSINESS_ID, JsonLd, breadcrumbSchema } from "@/components/json-ld"
import { CITY_INFO } from "@/lib/cities"
import { projectsFor } from "@/lib/projects"
import { SITE } from "@/lib/site"

export type HubFeature = { title: string; description: string }
export type HubStep = { title: string; text: string }
export type HubFaq = { q: string; a: string }
export type HubFact = { label: string; value: string }
export type HubLink = { href: string; label: string; note?: string }

export interface ServiceHubPageProps {
  /** URL slug, e.g. "badrumsrenovering". Also used for /{slug}/{city} links. */
  slug: string
  /** Service name as used in breadcrumbs and schema. */
  name: string
  title: string
  description: string
  intro: string[]
  heroFacts: HubFact[]
  heroImage?: { src: string; alt: string; position?: string }
  /** Eyebrow above the features section. Default "Det här ingår". */
  featuresEyebrow?: string
  featuresTitle: string
  features: HubFeature[]
  stepsTitle: string
  steps: HubStep[]
  priceTitle: string
  price: string[]
  priceFacts: HubFact[]
  faqs: HubFaq[]
  guides: HubLink[]
  /** Link each town to /{slug}/{city}. False for services without local pages. */
  linkTowns?: boolean
  townsIntro: string
  ctaTitle: string
  ctaText: string
}

export function ServiceHubPage(props: ServiceHubPageProps) {
  const {
    slug,
    name,
    title,
    description,
    intro,
    heroFacts,
    heroImage,
    featuresEyebrow = "Det här ingår",
    featuresTitle,
    features,
    stepsTitle,
    steps,
    priceTitle,
    price,
    priceFacts,
    faqs,
    guides,
    linkTowns = true,
    townsIntro,
    ctaTitle,
    ctaText,
  } = props

  const towns = Object.values(CITY_INFO).sort((a, b) => a.driveMin - b.driveMin)
  const projects = projectsFor({ service: slug })

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name,
            serviceType: name,
            description,
            url: `${SITE.url}/${slug}`,
            provider: { "@id": BUSINESS_ID },
            areaServed: towns.map((t) => ({ "@type": "City", name: t.name })),
          },
          breadcrumbSchema([
            { name: "Hem", path: "/" },
            { name, path: `/${slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          aria-hidden
          className="tile-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_25%_30%,#000_25%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="absolute -left-40 top-10 -z-10 h-[480px] w-[480px] rounded-full bg-orange-500/[0.06] blur-[120px]"
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
                <li aria-current="page" className="text-ink-200">
                  {name}
                </li>
              </ol>
            </nav>

            <h1 className="mt-8 animate-rise text-[clamp(2.6rem,5.6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
              {title}
              <span className="text-orange-500">.</span>
            </h1>
            <div className="mt-7 max-w-[36rem] animate-rise space-y-4 text-lg leading-relaxed text-ink-300 [animation-delay:160ms]">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <Link href="/kontakt" className="btn-cta">
                Begär kostnadsfri offert
                <ArrowUpRight size={18} aria-hidden />
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost tabular-nums">
                Ring {SITE.phoneDisplay}
              </a>
            </div>
            <dl className="mt-14 grid max-w-xl animate-rise grid-cols-3 gap-6 border-t border-white/[0.08] pt-8 [animation-delay:320ms]">
              {heroFacts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-ink-400">{f.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold tabular-nums text-white md:text-3xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* No entry animation here: the image is the LCP element. */}
          <div className="relative lg:col-span-5">
            {heroImage ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 lg:aspect-[4/5]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`object-cover ${heroImage.position ?? ""}`}
                />
              </div>
            ) : (
              <div className="surface relative overflow-hidden p-8 md:p-10">
                <div aria-hidden className="tile-grid absolute inset-0 opacity-60" />
                <p className="relative text-sm font-medium text-ink-400">{featuresEyebrow}</p>
                <ul className="relative mt-6 divide-y divide-white/[0.06]">
                  {features.map((f, i) => (
                    <li key={f.title} className="flex items-baseline gap-4 py-3.5">
                      <span className="font-display text-sm font-semibold tabular-nums text-orange-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink-100">{f.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────────── Included ───────────── */}
      <section aria-labelledby="ingar-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site py-24 md:py-28">
          <p className="eyebrow">{featuresEyebrow}</p>
          <h2 id="ingar-rubrik" className="mt-5 max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
            {featuresTitle}
            <span className="text-orange-500">.</span>
          </h2>
          <ol className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <li key={f.title} className="reveal border-t border-white/[0.08] py-7">
                <span className="font-display text-sm font-semibold tabular-nums text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-300">{f.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section aria-labelledby="process-rubrik" className="container-site py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Så går det till</p>
            <h2 id="process-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
              {stepsTitle}
              <span className="text-orange-500">.</span>
            </h2>
          </div>
          <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold tabular-nums text-orange-500 ring-1 ring-orange-500/50">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-300">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Price & time ───────────── */}
      <section aria-labelledby="pris-rubrik" className="container-site pb-24 md:pb-32">
        <div className="surface grid gap-12 p-8 md:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Pris och tid</p>
            <h2 id="pris-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl">
              {priceTitle}
              <span className="text-orange-500">.</span>
            </h2>
            <div className="mt-7 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-ink-300">
              {price.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <dl className="divide-y divide-white/[0.06] self-start border-y border-white/[0.06]">
            {priceFacts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-ink-400">{f.label}</dt>
                <dd className="text-right font-semibold tabular-nums text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── Towns ───────────── */}
      <section aria-labelledby="orter-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid gap-12 py-24 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="eyebrow">Här jobbar vi</p>
            <h2 id="orter-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
              Sju orter i Sörmland och Västmanland<span className="text-orange-500">.</span>
            </h2>
            <p className="mt-6 max-w-prose leading-relaxed text-ink-300">{townsIntro}</p>
          </div>
          <ul className="divide-y divide-white/[0.06] self-start border-y border-white/[0.06]">
            {towns.map((t) => {
              const row = (
                <>
                  <span className="font-display text-lg font-semibold text-white">{t.name}</span>
                  <span className="hidden text-sm text-ink-400 sm:block">{t.kommun}</span>
                  <span className="ml-auto text-sm tabular-nums text-ink-300">
                    {t.driveMin === 0 ? "Vår bas" : `ca ${t.driveMin} min`}
                  </span>
                </>
              )
              return (
                <li key={t.slug}>
                  {linkTowns ? (
                    <Link
                      href={`/${slug}/${t.slug}`}
                      className="group flex items-center gap-6 py-4 transition-colors hover:bg-white/[0.02]"
                    >
                      {row}
                      <ArrowRight
                        size={18}
                        className="text-glacier-300 transition-transform duration-300 group-hover:translate-x-1"
                        aria-label={`${name} i ${t.name}`}
                      />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-6 py-4">{row}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ───────────── Projects (only when there are real ones) ───────────── */}
      {projects.length > 0 && (
        <section aria-labelledby="projekt-rubrik" className="container-site pt-24 md:pt-32">
          <p className="eyebrow">Utförda jobb</p>
          <h2 id="projekt-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
            {name} vi har gjort<span className="text-orange-500">.</span>
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug} className="surface reveal overflow-hidden">
                {p.images[0] && (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.images[0].src}
                      alt={p.images[0].alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-7">
                  <p className="text-sm text-orange-500">{CITY_INFO[p.city]?.name ?? p.city}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-300">{p.summary}</p>
                  {p.quote && (
                    <blockquote className="mt-5 border-l-2 border-orange-500/60 pl-4 text-ink-200">
                      <p>”{p.quote.text}”</p>
                      <footer className="mt-1 text-sm text-ink-400">{p.quote.name}</footer>
                    </blockquote>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ───────────── FAQ ───────────── */}
      <section aria-labelledby="faq-rubrik" className="container-site py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="eyebrow">Vanliga frågor</p>
            <h2 id="faq-rubrik" className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
              Frågor om {name.toLowerCase()}
              <span className="text-orange-500">.</span>
            </h2>
            {guides.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-medium text-ink-400">Läs mer</p>
                <ul className="mt-4 space-y-3">
                  {guides.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href} className="group inline-flex items-start gap-2 text-glacier-300">
                        <ArrowRight
                          size={17}
                          className="mt-[0.2rem] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                        <span className="underline decoration-glacier-300/0 underline-offset-4 transition-colors group-hover:decoration-glacier-300">
                          {g.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold text-white transition-colors hover:text-glacier-200 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={20}
                    aria-hidden
                    className="mt-1 shrink-0 text-orange-500 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-prose pb-6 leading-relaxed text-ink-300">{f.a}</p>
              </details>
            ))}
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
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">{ctaText}</p>
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
    </main>
  )
}
