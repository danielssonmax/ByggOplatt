"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setIsMenuOpen(false), [pathname])
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-header transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || isMenuOpen
          ? "bg-ink-900/85 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      {/* Livery stripe: the logo's three oranges along the very top edge. */}
      <div
        aria-hidden
        className="h-[3px] w-full bg-[linear-gradient(90deg,#e07b00_0_34%,#ff9800_34%_67%,#ffc470_67%)]"
      />
      <div className="container-site flex h-24 items-center justify-between gap-6">
        <Link href="/" className="relative -ml-1 flex shrink-0 items-center" aria-label={`${SITE.name}, till startsidan`}>
          <span className="relative block h-[76px] w-[76px]">
            <Image src="/logo-main.png" alt="" fill sizes="76px" className="object-contain" priority />
          </span>
        </Link>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
                isActive(link.href) ? "text-white" : "text-ink-300 hover:text-white",
              )}
            >
              {link.label}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-spring",
                  isActive(link.href) ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-[0.9375rem] font-medium tabular-nums text-ink-200 transition-colors hover:text-white lg:inline-flex"
          >
            <Phone size={16} className="text-orange-500" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <Link href="/kontakt" className="btn-cta px-5 py-2.5 text-[0.9375rem]">
            Begär offert
            <ArrowUpRight size={17} aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobilmeny"
          aria-label={isMenuOpen ? "Stäng menyn" : "Öppna menyn"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobilmeny"
        aria-label="Mobilmeny"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-spring md:hidden",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="container-site flex flex-col gap-1 pb-8 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-semibold",
                  isActive(link.href) ? "text-orange-500" : "text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/kontakt" tabIndex={isMenuOpen ? 0 : -1} className="btn-cta w-full">
                Begär offert
              </Link>
              <a href={SITE.phoneHref} tabIndex={isMenuOpen ? 0 : -1} className="btn-ghost w-full tabular-nums">
                <Phone size={17} aria-hidden />
                Ring {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
