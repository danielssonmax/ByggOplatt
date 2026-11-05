// Central business data. NAP (name, address, phone) must be identical everywhere
// on the site and in Google Business Profile for local SEO.
export const SITE = {
  name: "Bygg & Plattsättning",
  // ── FILL IN ── Legal company name and org.nr (e.g. "Bygg & Plattsättning i Eskilstuna AB",
  // "559123-4567"). Shown in the footer and sent to Google as soon as they are set.
  // Required by e-handelslagen and helps Google tell you apart from other firms with similar names.
  legalName: "Bygg & Fastighet i Eskilstuna AB" as string,
  orgNr: "556687-4300" as string,
  // ── FILL IN ── Official profile URLs: Google Business Profile, Facebook, Instagram,
  // Reco, Allabolag, etc. Sent to Google as `sameAs` (links your website to the profiles).
  profiles: [] as string[],
  url: "https://byggoplattsattning.se",
  phoneDisplay: "073 181 89 08",
  phoneHref: "tel:+46731818908",
  phoneE164: "+46731818908",
  email: "info@byggofastighet.se",
  address: {
    street: "Kyrkogatan 7C",
    postalCode: "632 20",
    city: "Eskilstuna",
    region: "Södermanlands län",
    country: "SE",
  },
  hours: [
    { label: "Måndag–fredag", value: "07:00–16:00" },
    { label: "Lördag–söndag", value: "Stängt" },
  ],
} as const

export const CITIES = [
  { name: "Eskilstuna", slug: "eskilstuna" },
  { name: "Strängnäs", slug: "strangnas" },
  { name: "Västerås", slug: "vasteras" },
  { name: "Katrineholm", slug: "katrineholm" },
  { name: "Torshälla", slug: "torshalla" },
  { name: "Köping", slug: "koping" },
  { name: "Arboga", slug: "arboga" },
] as const

export const SERVICES = [
  { name: "Badrumsrenovering", slug: "badrumsrenovering" },
  { name: "Plattsättning", slug: "plattsattning" },
  { name: "Köksrenovering", slug: "koksrenovering" },
  { name: "Bygg & Snickeri", slug: "bygg-snickeri" },
] as const

export const NAV_LINKS = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/blogg", label: "Blogg" },
  { href: "/kontakt", label: "Kontakt" },
] as const

export function serviceSlug(serviceName: string) {
  return SERVICES.find((s) => s.name === serviceName)?.slug ?? serviceName.toLowerCase()
}
