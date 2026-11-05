// Reference jobs. Real projects with real photos are the strongest content you can
// add for local SEO (unique per town) and for trust. Sections that list projects only
// render when there is at least one matching entry, so nothing appears half-empty.
//
// How to add one:
//   1. Put the photos in /public/projekt/ (for example /public/projekt/badrum-vasteras-1.jpg)
//   2. Add an object below. `city` and `service` must match slugs in lib/site.ts.
//
// {
//   slug: "badrum-backby-vasteras",
//   title: "Helrenovering av badrum i Bäckby",
//   city: "vasteras",
//   service: "badrumsrenovering",
//   date: "2026-09-15",
//   summary: "Rivning, nytt tätskikt, klinker 60x60 och golvvärme i ett badrum på 5 m².",
//   images: [{ src: "/projekt/badrum-vasteras-1.jpg", alt: "Färdigt badrum med grå klinker och glasvägg" }],
//   quote: { text: "Allt höll tidplanen och de städade efter sig varje dag.", name: "Anna, Bäckby" },
// },

export type Project = {
  slug: string
  title: string
  city: string
  service: string
  date: string
  summary: string
  images: { src: string; alt: string }[]
  quote?: { text: string; name: string }
}

export const PROJECTS: Project[] = []

export function projectsFor({ city, service }: { city?: string; service?: string }) {
  return PROJECTS.filter((p) => (!city || p.city === city) && (!service || p.service === service))
}
