import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Om oss – plattsättare i Eskilstuna",
  description:
    "Bygg & Plattsättning har över 20 års erfarenhet av plattsättning och badrumsrenovering i Eskilstuna. Lär känna vårt team och vår historia.",
  alternates: {
    canonical: "/om-oss",
  },
}

const values = [
  {
    title: "Kvalitet",
    text: "Vi kompromissar aldrig med kvaliteten på vårt arbete. Vi använder beprövade material och tekniker för att säkerställa hållbara resultat.",
  },
  {
    title: "Pålitlighet",
    text: "Vi håller våra löften. När vi åtar oss ett projekt kan du lita på att vi levererar enligt överenskommelse, i tid och inom budget.",
  },
  {
    title: "Kundnöjdhet",
    text: "Vår främsta prioritet är att du som kund ska vara nöjd med resultatet. Vi lyssnar på dina önskemål och arbetar hårt för att förverkliga din vision.",
  },
]

export default function About() {
  return (
    <main>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          aria-hidden
          className="tile-wall absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,#000_25%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute -right-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-orange-500/[0.07] blur-[120px]"
        />
        <div className="container-site grid items-center gap-14 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow animate-rise">Om oss</p>
            <h1 className="mt-6 animate-rise text-[clamp(2.75rem,6.4vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
              Plattsättare i Eskilstuna i över 20 år<span className="text-orange-500">.</span>
            </h1>
            <p className="mt-8 max-w-[34rem] animate-rise text-lg leading-relaxed text-ink-300 [animation-delay:160ms]">
              Vi är en etablerad aktör inom plattsättning och badrumsrenovering i Eskilstuna, och vi fortsätter att
              växa tack vare våra nöjda kunders rekommendationer.
            </p>
          </div>

          <div className="relative animate-rise [animation-delay:200ms] lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
              <Image
                src="/hero-image.jpg"
                alt="Bygg & Plattsättnings vita servicebil med logotyp och märkningen Behörig våtrum"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[62%_center]"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-[1.75rem] border border-orange-500/30"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Story ───────────── */}
      <section aria-labelledby="historia-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Historia</p>
            <h2
              id="historia-rubrik"
              className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl"
            >
              Vår historia<span className="text-orange-500">.</span>
            </h2>
          </div>
          <div className="reveal max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-ink-300">
            <p>
              Bygg & Plattsättning grundades med en vision om att leverera plattsättning av hög kvalitet i Eskilstuna
              och omgivande områden. Med många år i branschen har vi byggt upp ett rykte för pålitlighet, kvalitet och
              professionalism.
            </p>
            <p>
              Vårt team består av erfarna hantverkare som är dedikerade till att leverera ett bra resultat i varje
              projekt, oavsett storlek. Vi är stolta över vårt arbete och strävar efter att överträffa våra kunders
              förväntningar.
            </p>
            <p>
              Idag har vi varit verksamma i 20 år inom plattsättning och badrumsrenovering i Eskilstuna, och vi
              fortsätter att växa tack vare våra nöjda kunders rekommendationer.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Values ───────────── */}
      <section aria-labelledby="varderingar-rubrik" className="container-site py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Värderingar</p>
            <h2
              id="varderingar-rubrik"
              className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl"
            >
              Det vi står för<span className="text-orange-500">.</span>
            </h2>
          </div>
          <ol className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {values.map((v, i) => (
              <li key={v.title} className="reveal grid gap-4 py-8 sm:grid-cols-[5rem_12rem_1fr] sm:gap-6">
                <span className="font-display text-3xl font-bold tabular-nums text-orange-500">0{i + 1}</span>
                <h3 className="text-2xl font-semibold text-white">{v.title}</h3>
                <p className="max-w-prose leading-relaxed text-ink-300">{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Credentials ───────────── */}
      <section aria-labelledby="behorighet-rubrik" className="container-site pb-24 md:pb-32">
        <div className="surface grid gap-10 p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-14">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
            <ShieldCheck size={28} aria-hidden />
          </span>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 id="behorighet-rubrik" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Behörig våtrum<span className="text-orange-500">.</span>
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-300">
                Vi uppfyller alla de krav som Byggkeramikrådet tillsammans med Säker Vatten ställer för att få bygga
                behöriga våtrum.
              </p>
            </div>
            <div className="lg:pt-14">
              <p className="max-w-prose leading-relaxed text-ink-300">
                Vi har plattsättning som etablerad och fortlöpande verksamhet och kan därför garantera våra kunder att
                alla plattsättare har den utbildning och erfarenhet som krävs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn-cta">
                  Begär kostnadsfri offert
                  <ArrowUpRight size={18} aria-hidden />
                </Link>
                <a href={SITE.phoneHref} className="btn-ghost tabular-nums">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
