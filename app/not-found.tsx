import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden pt-24">
      <div
        aria-hidden
        className="tile-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_30%_40%,#000_25%,transparent_70%)]"
      />
      <div className="container-site grid min-h-[70dvh] items-center gap-12 py-16 md:grid-cols-[auto_1fr] md:gap-20">
        <p
          aria-hidden
          className="animate-rise font-display text-[clamp(7rem,22vw,16rem)] font-extrabold leading-none tracking-tighter text-orange-500"
        >
          404
        </p>
        <div className="max-w-xl">
          <h1 className="animate-rise text-4xl font-bold leading-[1.02] tracking-tight text-white [animation-delay:80ms] md:text-6xl">
            Sidan hittades inte<span className="text-orange-500">.</span>
          </h1>
          <p className="mt-6 animate-rise text-lg leading-relaxed text-ink-300 [animation-delay:160ms]">
            Länken kan vara felaktig eller så har sidan flyttats. Gå till startsidan eller välj något nedan.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:240ms] sm:flex-row sm:items-center sm:gap-6">
            <Link href="/" className="btn-cta">
              Till startsidan
              <ArrowUpRight size={18} aria-hidden />
            </Link>
            <Link href="/tjanster" className="group inline-flex items-center gap-2 font-medium text-glacier-300">
              Våra tjänster
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link href="/kontakt" className="group inline-flex items-center gap-2 font-medium text-glacier-300">
              Kontakt
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
