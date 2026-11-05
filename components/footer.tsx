import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CITIES, SERVICES, SITE } from "@/lib/site"
import { PROJECTS } from "@/lib/projects"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950 text-ink-300">
      {/* Closing call to action, with the van's three stripes on the right edge of the band */}
      <div className="livery livery-edge relative border-b border-white/[0.06]">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:items-end md:py-20">
        <div>
          <p className="eyebrow">Kostnadsfri offert</p>
          <p className="mt-5 max-w-[18ch] font-display text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl">
            Berätta om ditt projekt<span className="text-orange-500">.</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
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

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        {/* Company + NAP */}
        <div className="space-y-6">
          <Link href="/" className="relative block h-24 w-24" aria-label={`${SITE.name}, till startsidan`}>
            <Image src="/logo-main.png" alt="" fill sizes="96px" className="object-contain" />
          </Link>
          <address className="space-y-1 text-[0.9375rem] not-italic leading-relaxed">
            <p className="font-semibold text-white">{SITE.name}</p>
            <p>{SITE.address.street}</p>
            <p>
              {SITE.address.postalCode} {SITE.address.city}
            </p>
            <p className="pt-3">
              <a href={SITE.phoneHref} className="tabular-nums transition-colors hover:text-glacier-300">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-glacier-300">
                {SITE.email}
              </a>
            </p>
          </address>
          <dl className="space-y-1 text-sm">
            {SITE.hours.map((h) => (
              <div key={h.label} className="flex gap-3">
                <dt className="w-32 text-ink-400">{h.label}</dt>
                <dd className="tabular-nums">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Services per city: internal links to every local landing page */}
        <div>
          <p className="mb-6 text-sm font-medium text-white">Tjänster per ort</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="mb-3 block font-display text-[0.9375rem] font-semibold text-orange-500 transition-colors hover:text-orange-400"
                >
                  {service.name}
                </Link>
                <ul className="space-y-2 text-sm">
                  {CITIES.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/${service.slug}/${city.slug}`}
                        className="transition-colors hover:text-glacier-300"
                      >
                        {service.name} {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-white/[0.06] py-8 text-sm text-ink-400 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {SITE.legalName || SITE.name}
          {SITE.orgNr && <span className="tabular-nums"> · Org.nr {SITE.orgNr}</span>}
        </p>
        <nav aria-label="Sidfot" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/flytspackling" className="transition-colors hover:text-white">
            Flytspackling
          </Link>
          {PROJECTS.length > 0 && (
            <Link href="/referenser" className="transition-colors hover:text-white">
              Referenser
            </Link>
          )}
          <Link href="/om-oss" className="transition-colors hover:text-white">
            Om oss
          </Link>
          <Link href="/samarbeten" className="transition-colors hover:text-white">
            Samarbeten
          </Link>
          <Link href="/blogg" className="transition-colors hover:text-white">
            Blogg
          </Link>
          <Link href="/fastighet-uthyres-eskilstuna-kyrkogatan-7" className="transition-colors hover:text-white">
            Lokal uthyres
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-white">
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  )
}
