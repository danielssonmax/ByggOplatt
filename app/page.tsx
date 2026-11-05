import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: "Plattsättare & badrumsrenovering i Eskilstuna | Bygg & Plattsättning",
  },
  description:
    "Plattsättning, badrumsrenovering och köksrenovering i Eskilstuna med omnejd. Behörig våtrum, över 20 års erfarenhet och en kontaktperson genom hela projektet.",
  alternates: {
    canonical: "/",
  },
}

const partners = [
  { name: "Aluns Motor", href: "https://alunsmotor.se", logo: "/aluns-motor-logo.png" },
  { name: "Webbfix", href: "https://webbfix.se", logo: "/webbfix-logo.png", onDark: true },
  { name: "KonstruktBygg", href: "https://konstruktbygg.se", logo: "/konstruktbygg-logo.png" },
]

const steps = [
  {
    title: "Konsultation",
    text: "Vi ses på plats, går igenom vad du vill uppnå och mäter upp. Du får ärliga besked om vad som går och vad det kostar.",
  },
  {
    title: "Planering & offert",
    text: "Du får en tydlig offert med fast pris. Vi planerar materialval, tidplan och vilka yrkesgrupper som behövs.",
  },
  {
    title: "Utförande",
    text: "Vi river, bygger, lägger tätskikt och sätter plattor enligt branschreglerna. Du har samma kontaktperson hela vägen.",
  },
]

export default function Home() {
  return (
    <main>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-24">
        <div aria-hidden className="tile-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_30%,#000_30%,transparent_75%)]" />
        <div
          aria-hidden
          className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-orange-500/[0.07] blur-[120px]"
        />

        <div className="container-site grid items-center gap-14 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise">Bygg & plattsättning sedan 20+ år</p>
            <h1 className="mt-6 animate-rise text-[clamp(3rem,7.4vw,6.25rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white [animation-delay:80ms]">
              Din plattsättare i <span className="whitespace-nowrap">Eskilstuna<span className="text-orange-500">.</span></span>
            </h1>
            <p className="mt-8 max-w-[34rem] animate-rise text-lg leading-relaxed text-ink-300 [animation-delay:160ms] md:text-xl">
              Badrumsrenovering, köksrenovering och plattsättning med behörighet för våtrum. Vi tar hand om hela jobbet,
              från rivning till sista fogen, och du har en kontaktperson hela vägen.
            </p>
            <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:240ms] sm:flex-row sm:items-center sm:gap-6">
              <Link href="/kontakt" className="btn-cta text-base">
                Begär kostnadsfri offert
                <ArrowUpRight size={18} aria-hidden />
              </Link>
              <a
                href={SITE.phoneHref}
                className="group inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                eller ring
                <span className="font-semibold tabular-nums text-white underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-glacier-300">
                  {SITE.phoneDisplay}
                </span>
              </a>
            </div>

            <dl className="mt-16 grid max-w-xl animate-rise grid-cols-3 gap-6 border-t border-white/[0.08] pt-8 [animation-delay:320ms]">
              <div>
                <dt className="text-sm text-ink-400">Erfarenhet</dt>
                <dd className="mt-1 font-display text-3xl font-bold tabular-nums text-white">20+ år</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-400">Orter</dt>
                <dd className="mt-1 font-display text-3xl font-bold tabular-nums text-white">7</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-400">Kontaktperson</dt>
                <dd className="mt-1 font-display text-3xl font-bold tabular-nums text-white">1</dd>
              </div>
            </dl>
          </div>

          {/* No entry animation here: the image is the LCP element. */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/hero-image.jpg"
                alt="Bygg & Plattsättnings servicebil med logotyp och märkningen Behörig våtrum"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[62%_center]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </div>
            <div className="surface absolute -bottom-8 left-4 right-4 flex items-start gap-4 p-5 backdrop-blur-xl sm:left-auto sm:right-8 sm:max-w-[19rem] lg:-left-10 lg:right-auto">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-500">
                <ShieldCheck size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">Behörig våtrum</p>
                <p className="mt-1 text-sm leading-snug text-ink-300">
                  Uppfyller kraven från Byggkeramikrådet och Säker Vatten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services bento ───────────── */}
      <section aria-labelledby="tjanster-rubrik" className="container-site py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Tjänster</p>
            <h2 id="tjanster-rubrik" className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Det här gör vi<span className="text-orange-500">.</span>
            </h2>
          </div>
          <Link href="/tjanster" className="group inline-flex items-center gap-2 font-medium text-glacier-300">
            Alla tjänster
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-[minmax(260px,auto)_minmax(260px,auto)_auto]">
          <Link
            href="/badrumsrenovering/eskilstuna"
            className="reveal group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-8 md:col-span-4 md:row-span-2 md:p-10"
          >
            <Image
              src="/service-bathroom-1.webp"
              alt="Nyrenoverat badrum med storformatsplattor och fristående badkar"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="-z-10 object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03]"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/0" />
            <span className="font-display text-sm font-semibold tabular-nums text-orange-500">01</span>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">Badrumsrenovering</h3>
            <p className="mt-4 max-w-md text-ink-200">
              Totalentreprenad från rivning till färdigt badrum: VVS, el, tätskikt, plattsättning och inredning.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-medium text-glacier-300">
              Badrumsrenovering i Eskilstuna
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>

          <ServiceTile
            index="02"
            href="/plattsattning/eskilstuna"
            title="Plattsättning"
            text="Kakel, klinker, mosaik och natursten. Golv, väggar och storformat med raka fogar."
            linkLabel="Plattsättning i Eskilstuna"
            className="md:col-span-2"
          />
          <ServiceTile
            index="03"
            href="/koksrenovering/eskilstuna"
            title="Köksrenovering"
            text="Rivning, VVS och el, stänkskydd och montering av köksinredning."
            linkLabel="Köksrenovering i Eskilstuna"
            className="md:col-span-2"
          />
          <ServiceTile
            index="04"
            href="/bygg-snickeri/eskilstuna"
            title="Bygg & snickeri"
            text="Ombyggnad, tillbyggnad, innerväggar, golv och fönsterbyten."
            linkLabel="Snickare i Eskilstuna"
            className="md:col-span-2"
          />

          <div className="reveal surface relative flex flex-col justify-between gap-8 overflow-hidden p-8 md:col-span-4 md:flex-row md:items-center md:p-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">En kontakt. Hela jobbet.</h3>
              <p className="mt-3 text-ink-300">
                Vi samordnar plattsättare, VVS-montörer och elektriker så att du slipper jaga hantverkare.
              </p>
            </div>
            <Link href="/kontakt" className="btn-cta shrink-0">
              Begär offert
              <ArrowUpRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Experience (zig-zag) ───────────── */}
      <section aria-labelledby="erfarenhet-rubrik" className="border-y border-white/[0.06] bg-ink-950">
        <div className="container-site grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative order-last lg:order-first">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
              <Image
                src="/service-bathroom-2.webp"
                alt="Badrum med klinker i storformat, mosaik i duschen och glasvägg"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div aria-hidden className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[1.75rem] border border-orange-500/30" />
          </div>

          <div>
            <p className="eyebrow">Om oss</p>
            <h2 id="erfarenhet-rubrik" className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl">
              Lång erfarenhet inom byggbranschen<span className="text-orange-500">.</span>
            </h2>
            <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-ink-300">
              <p>
                Med över 20 år i byggbranschen är Bygg & Plattsättning din partner för bygg- och renoveringsprojekt i
                Eskilstuna med omnejd, oavsett om det gäller nybyggnation, ombyggnad, renovering eller plattsättning.
              </p>
              <p>
                Vi lyssnar på dina idéer och tar fram lösningar som passar just ditt hem och din budget. Vi tar hand om
                hela processen, från planering och projektering till slutligt utförande, så att du känner dig trygg
                genom hela projektet.
              </p>
              <p>
                Vi erbjuder även specialtjänster som{" "}
                <Link href="/flytspackling" className="link">
                  flytspackling
                </Link>
                , och genom våra samarbetspartners kan vi leverera
                kompletta paketlösningar med kakel, klinker och badrumsinredning.
              </p>
            </div>
            <Link href="/om-oss" className="mt-10 inline-flex items-center gap-2 font-medium text-glacier-300 group">
              Mer om oss
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section aria-labelledby="process-rubrik" className="container-site py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Så jobbar vi</p>
            <h2 id="process-rubrik" className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl">
              Tre steg till ett färdigt rum<span className="text-orange-500">.</span>
            </h2>
          </div>
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            <span aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent md:block" />
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
      </section>

      {/* ───────────── Partners ───────────── */}
      <section aria-labelledby="partners-rubrik" className="border-t border-white/[0.06]">
        <div className="container-site flex flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between">
          <h2 id="partners-rubrik" className="shrink-0 text-sm font-medium text-ink-400 md:max-w-[12rem]">
            Samarbetspartners vi jobbar med
          </h2>
          <ul className="grid flex-1 grid-cols-3 items-center gap-6 md:max-w-3xl md:gap-12">
            {partners.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className={`group block rounded-xl p-3 opacity-80 ${p.onDark ? "bg-ink-800 ring-1 ring-white/[0.08]" : "bg-ink-100"} transition-[opacity,transform] duration-300 ease-spring hover:-translate-y-0.5 hover:opacity-100`}
                >
                  <span className="relative block h-12">
                    <Image src={p.logo} alt={p.name} fill sizes="200px" className="object-contain" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link href="/samarbeten" className="shrink-0 text-sm font-medium text-glacier-300 hover:underline">
            Alla samarbeten
          </Link>
        </div>
      </section>
    </main>
  )
}

function ServiceTile({
  index,
  href,
  title,
  text,
  linkLabel,
  className = "",
}: {
  index: string
  href: string
  title: string
  text: string
  linkLabel: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`reveal surface group relative flex flex-col p-8 transition-colors duration-300 hover:bg-ink-800 ${className}`}
    >
      <span className="font-display text-sm font-semibold tabular-nums text-orange-500">{index}</span>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-300">{text}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.9375rem] font-medium text-glacier-300">
        {linkLabel}
        <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  )
}
