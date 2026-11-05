import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { PROJECTS } from "@/lib/projects"
import { CITY_INFO } from "@/lib/cities"
import { SERVICES } from "@/lib/site"

// This page only exists once there are real projects in lib/projects.ts.
// An empty reference page would be thin content, so until then it returns 404
// and is left out of the sitemap and footer.

export const metadata: Metadata = {
  title: "Referenser – badrum, kök & plattsättning",
  description:
    "Ett urval av jobb vi har gjort: badrumsrenoveringar, köksrenoveringar och plattsättning i Eskilstuna med omnejd.",
  alternates: { canonical: "/referenser" },
}

export default function Referenser() {
  if (PROJECTS.length === 0) notFound()

  const sorted = [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main className="pt-24">
      <section className="container-site pb-16 pt-12 md:pt-16">
        <p className="eyebrow">Referenser</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
          Jobb vi är stolta över<span className="text-orange-500">.</span>
        </h1>
      </section>

      <section aria-label="Projekt" className="container-site pb-24 md:pb-32">
        <ul className="grid gap-6 md:grid-cols-2">
          {sorted.map((p) => {
            const city = CITY_INFO[p.city]
            const service = SERVICES.find((s) => s.slug === p.service)
            return (
              <li key={p.slug} className="surface overflow-hidden">
                {p.images[0] && (
                  <div className="relative aspect-[4/3]">
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
                  <p className="text-sm text-ink-400">
                    {service?.name} · {city?.name}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{p.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-300">{p.summary}</p>
                  {p.quote && (
                    <blockquote className="mt-5 border-l-2 border-orange-500 pl-4 text-ink-200">
                      <p>”{p.quote.text}”</p>
                      <footer className="mt-2 text-sm text-ink-400">{p.quote.name}</footer>
                    </blockquote>
                  )}
                  {service && city && (
                    <Link
                      href={`/${service.slug}/${city.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-medium text-glacier-300"
                    >
                      {service.name} i {city.name}
                      <ArrowUpRight size={16} aria-hidden />
                    </Link>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
