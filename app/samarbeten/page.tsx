import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Samarbetspartners",
  description:
    "Upptäck våra värdefulla samarbetspartners som hjälper oss leverera högkvalitativa tjänster inom bygg och plattsättning i Eskilstuna.",
  alternates: {
    canonical: "/samarbeten",
  },
}

type Partner = {
  name: string
  href: string
  description: string
  logo?: string
  /** Logo has light artwork and needs a dark tile. */
  logoOnDark?: boolean
}

const partners: Partner[] = [
  {
    name: "Aluns Motor",
    href: "https://alunsmotor.se",
    logo: "/aluns-motor-logo.png",
    description:
      "Aluns Motor är specialister på motorfordon och hjälper oss att hålla vår fordonsflotta i toppskick, vilket säkerställer att vi alltid kan nå våra kunder i tid.",
  },
  {
    name: "Webbfix",
    href: "https://webbfix.se",
    logo: "/webbfix-logo.png",
    logoOnDark: true,
    description:
      "Webbfix är vår digitala partner som hjälper oss med webbdesign och online-närvaro. De säkerställer att vi kan nå ut till våra kunder på bästa sätt genom digitala kanaler.",
  },
  {
    name: "KonstruktBygg",
    href: "https://konstruktbygg.se",
    logo: "/konstruktbygg-logo.png",
    description:
      "KonstruktBygg är vår partner inom större byggprojekt. Tillsammans kan vi ta oss an mer omfattande bygguppdrag och erbjuda helhetslösningar för våra kunder.",
  },
  {
    name: "Bostadscentralen",
    href: "https://bostadscentralen.se",
    description: "Leta bland tusentals bostäder samlade på ett och samma ställe.",
  },
  {
    name: "Leasa begagnad bil",
    href: "https://leasabegagnadbil.se",
    // TODO: description copied from Bostadscentralen, needs real copy
    description: "Leta bland tusentals bostäder samlade på ett och samma ställe.",
  },
  {
    name: "Seiko Mod",
    href: "https://seiko-mod.se",
    description:
      "Seiko Mod erbjuder högkvalitativa modifieringar och anpassningar av Seiko-klockor för entusiaster och samlare.",
  },
  {
    name: "Jämför Mäklare",
    href: "https://www.jamfor-maklare.se",
    description:
      "Jämför Mäklare hjälper dig att hitta rätt mäklare för din fastighetsaffär genom att jämföra olika alternativ och priser.",
  },
  {
    name: "Bilverkstad Eskilstuna",
    href: "https://www.bilverkstadeskilstuna.se",
    description:
      "Professionell bilverkstad i Eskilstuna som erbjuder service, reparationer och underhåll av alla bilmärken med hög kvalitet.",
  },
  {
    name: "Törnstrand Elteknik AB",
    href: "https://tornstrandelteknikab.se",
    description:
      "Törnstrand Elteknik AB är specialister på elinstallationer och elektriska tjänster för både privat- och företagskunder.",
  },
  {
    name: "Dold Adress",
    href: "https://www.dold-adress.se",
    description:
      "Dold Adress erbjuder tjänster för att skydda din personliga integritet och säkerhet genom diskreta adresslösningar.",
  },
  {
    name: "Leap Marketing",
    href: "https://www.leapmarketing.se",
    description:
      "Leap Marketing är en digital marknadsföringsbyrå som hjälper företag att växa genom strategisk marknadsföring och kreativa lösningar.",
  },
  {
    name: "Fairing Sports Nutrition",
    href: "https://fairing.se",
    logo: "/fairing-logo.png",
    description:
      "Fairing är specialister på sportnäring och kosttillskott av högsta kvalitet. De erbjuder ett brett sortiment av produkter för träning, återhämtning och hälsa.",
  },
]

const benefits = [
  {
    title: "Heltäckande lösningar",
    text: "Genom våra samarbeten kan vi erbjuda mer heltäckande lösningar för dina bygg- och renoveringsprojekt, från planering till slutförande.",
  },
  {
    title: "Expertis inom flera områden",
    text: "Våra samarbetspartners bidrar med specialiserad expertis inom sina respektive områden, vilket säkerställer hög kvalitet i alla delar av ditt projekt.",
  },
  {
    title: "Effektivare processer",
    text: "Genom att samarbeta med etablerade partners kan vi effektivisera våra processer och leverera projekt snabbare utan att kompromissa med kvaliteten.",
  },
  {
    title: "Lokala samarbeten",
    text: "Vi prioriterar samarbeten med andra lokala företag för att stärka det lokala näringslivet och säkerställa snabb service för våra kunder.",
  },
]

export default function Samarbeten() {
  return (
    <main>
      {/* ───────────── Intro ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div
          aria-hidden
          className="tile-wall absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_70%_at_20%_20%,#000_25%,transparent_70%)]"
        />
        <div className="container-site grid gap-10 pb-16 pt-12 md:pb-20 md:pt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise">Samarbeten</p>
            <h1 className="mt-6 animate-rise text-[clamp(2.75rem,6.4vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white [animation-delay:80ms]">
              Våra samarbeten<span className="text-orange-500">.</span>
            </h1>
          </div>
          <div className="max-w-prose animate-rise space-y-4 text-[1.0625rem] leading-relaxed text-ink-300 [animation-delay:160ms] lg:col-span-5">
            <p>
              På Bygg & Plattsättning tror vi på starka samarbeten. Genom att arbeta tillsammans med andra företag kan
              vi erbjuda våra kunder bättre service och mer omfattande lösningar.
            </p>
            <p>Här presenterar vi de samarbetspartners som hjälper oss att leverera inom bygg och plattsättning.</p>
          </div>
        </div>
      </section>

      {/* ───────────── Partners ───────────── */}
      <section aria-labelledby="partners-rubrik" className="container-site pb-24 md:pb-32">
        <h2 id="partners-rubrik" className="sr-only">
          Samarbetspartners
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {partners.map((p) => (
            <li key={p.name} className="reveal surface flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
              <div className={`relative flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 sm:w-40 ${p.logo && !p.logoOnDark ? "bg-ink-100 ring-black/5" : "bg-ink-800 ring-white/[0.06]"}`}>
                {p.logo ? (
                  <Image src={p.logo} alt={`${p.name} logotyp`} fill sizes="160px" className="object-contain p-4" />
                ) : (
                  <span
                    aria-hidden
                    className="px-4 text-center font-display text-lg font-bold leading-tight tracking-tight text-ink-100"
                  >
                    {p.name}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-300">{p.description}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="group mt-5 inline-flex items-center gap-1.5 self-start text-[0.9375rem] font-medium text-glacier-300 underline decoration-glacier-300/0 underline-offset-4 transition-colors hover:decoration-glacier-300"
                >
                  Besök {p.name}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                  <span className="sr-only">(öppnas i ny flik)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────────── Benefits ───────────── */}
      <section aria-labelledby="fordelar-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Fördelar</p>
            <h2
              id="fordelar-rubrik"
              className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl"
            >
              Därför samarbetar vi<span className="text-orange-500">.</span>
            </h2>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-2">
            {benefits.map((b, i) => (
              <li key={b.title} className="bg-ink-950 p-8">
                <span className="font-display text-sm font-semibold tabular-nums text-orange-500">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-300">{b.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Become a partner ───────────── */}
      <section aria-labelledby="bli-partner-rubrik" className="container-site py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="bli-partner-rubrik"
              className="max-w-[20ch] text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl"
            >
              Vill ditt företag samarbeta med oss<span className="text-orange-500">?</span>
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-ink-300">
              Vi är alltid öppna för nya partnerskap som hjälper oss att erbjuda bättre tjänster till våra kunder.
            </p>
          </div>
          <Link href="/kontakt" className="btn-cta shrink-0">
            Kontakta oss
            <ArrowUpRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  )
}
