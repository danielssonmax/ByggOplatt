import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import type { Metadata } from "next"
import { CITIES, SITE } from "@/lib/site"
import { ContactForm } from "@/components/contact-form"
import { AreaMap } from "@/components/area-map"
import { CITY_INFO } from "@/lib/cities"

export const metadata: Metadata = {
  title: "Kontakta oss för offert",
  description:
    "Kontakta Bygg & Plattsättning för frågor eller offert på badrumsrenovering, köksrenovering eller plattsättning i Eskilstuna och närområdet.",
  alternates: {
    canonical: "/kontakt",
  },
}

const steps = [
  { title: "Ring eller mejla", text: "Berätta kort om ditt projekt och var du bor." },
  { title: "Vi bokar ett platsbesök", text: "Vi tittar på förutsättningarna och går igenom dina önskemål." },
  { title: "Du får en offert med fast pris", text: "Tydlig och utan dolda kostnader, så att du vet vad det kostar." },
]

export default function Contact() {
  return (
    <main className="relative isolate overflow-hidden pt-24">
      <div
        aria-hidden
        className="tile-wall absolute inset-x-0 top-0 -z-10 h-[720px] [mask-image:radial-gradient(ellipse_70%_60%_at_25%_20%,#000_25%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-orange-500/[0.07] blur-[120px]"
      />

      <div className="container-site pb-24 pt-12 md:pb-32 md:pt-16">
        <p className="eyebrow animate-rise">Kontakt</p>
        <h1 className="mt-6 max-w-[14ch] animate-rise text-[clamp(2.75rem,6.4vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
          Kontakta oss<span className="text-orange-500">.</span>
        </h1>
        <p className="mt-8 max-w-[34rem] animate-rise text-lg leading-relaxed text-ink-300 [animation-delay:160ms]">
          Har du frågor eller vill diskutera ett projekt? Ring oss eller skicka ett mejl, så återkommer vi så snart vi
          kan.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact details */}
          <section aria-labelledby="kontaktuppgifter" className="animate-rise [animation-delay:220ms] lg:col-span-6">
            <h2 id="kontaktuppgifter" className="sr-only">
              Kontaktuppgifter
            </h2>

            <a
              href={SITE.phoneHref}
              className="group block border-b border-white/[0.08] pb-8"
              aria-label={`Ring ${SITE.phoneDisplay}`}
            >
              <span className="flex items-center gap-2 text-sm text-ink-400">
                <Phone size={16} className="text-orange-500" aria-hidden />
                Telefon
              </span>
              <span className="mt-3 block font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-none tracking-tight tabular-nums text-white transition-colors group-hover:text-glacier-300">
                {SITE.phoneDisplay}
              </span>
            </a>

            <a href={`mailto:${SITE.email}`} className="group block border-b border-white/[0.08] py-8">
              <span className="flex items-center gap-2 text-sm text-ink-400">
                <Mail size={16} className="text-orange-500" aria-hidden />
                E-post
              </span>
              <span className="mt-3 block break-all font-display text-2xl font-semibold text-white transition-colors group-hover:text-glacier-300 md:text-3xl">
                {SITE.email}
              </span>
            </a>

            <div className="grid gap-8 py-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-normal text-ink-400">Adress</h3>
                <address className="mt-3 not-italic leading-relaxed text-ink-100">
                  {SITE.name}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block text-sm font-medium text-glacier-300 hover:underline"
                >
                  Visa på karta
                </a>
              </div>
              <div>
                <h3 className="text-sm font-normal text-ink-400">Öppettider</h3>
                <dl className="mt-3 space-y-1 text-ink-100">
                  {SITE.hours.map((h) => (
                    <div key={h.label} className="flex gap-3">
                      <dt className="w-32 text-ink-300">{h.label}</dt>
                      <dd className="tabular-nums">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* Quote request form */}
          <section
            aria-labelledby="offertforfragan"
            className="surface animate-rise self-start p-7 [animation-delay:280ms] md:p-10 lg:col-span-6"
          >
            <h2 id="offertforfragan" className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Begär offert<span className="text-orange-500">.</span>
            </h2>
            <p className="mb-8 mt-3 leading-relaxed text-ink-300">
              Berätta kort om projektet så hör vi av oss för att boka ett platsbesök. Offerten är kostnadsfri.
            </p>
            <ContactForm />
          </section>
        </div>

        {/* How it works */}
        <section aria-labelledby="sa-gar-det-till" className="mt-24">
          <h2 id="sa-gar-det-till" className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Så går det till<span className="text-orange-500">.</span>
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 border-t border-white/[0.08] pt-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums text-orange-500 ring-1 ring-orange-500/50">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-300">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Service area */}
        <section aria-labelledby="vi-jobbar-i" className="mt-20 grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-start">
          <div>
            <h2 id="vi-jobbar-i" className="text-sm font-medium text-ink-400">
              Vi jobbar i
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/badrumsrenovering/${city.slug}`}
                    className="inline-flex items-baseline gap-2 rounded-lg border border-white/10 px-4 py-2 text-[0.9375rem] font-medium text-ink-200 transition-colors hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.98]"
                  >
                    {city.name}
                    <span className="text-xs font-normal tabular-nums text-ink-500">
                      {CITY_INFO[city.slug]?.driveMin ? `${CITY_INFO[city.slug].driveMin} min` : "bas"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-400">
              Restid från vår bas på Kyrkogatan i Eskilstuna. Platsbesök bokar vi in så att resan passar in i dagen.
            </p>
          </div>
          <div className="surface p-4">
            <AreaMap />
          </div>
        </section>
      </div>
    </main>
  )
}
