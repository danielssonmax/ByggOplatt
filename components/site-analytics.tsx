"use client"

import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import { track } from "@vercel/analytics"

// Page views via Vercel Web Analytics (enable it under the project's Analytics tab
// in Vercel). Clicks on phone and e-mail links are sent as custom events so you can
// see which pages produce enquiries. Custom events need a Vercel plan that includes them;
// otherwise they are simply ignored.
export function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a")
      const href = a?.getAttribute("href") ?? ""
      if (href.startsWith("tel:")) track("Ring", { sida: window.location.pathname })
      else if (href.startsWith("mailto:")) track("Mejla", { sida: window.location.pathname })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return <Analytics />
}
