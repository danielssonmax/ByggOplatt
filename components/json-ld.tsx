import { CITIES, SITE } from "@/lib/site"

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: the data is static and authored in this repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export const BUSINESS_ID = `${SITE.url}/#organization`

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: SITE.name,
    ...(SITE.legalName ? { legalName: SITE.legalName } : {}),
    ...(SITE.orgNr
      ? { identifier: { "@type": "PropertyValue", propertyID: "Organisationsnummer", value: SITE.orgNr } }
      : {}),
    ...(SITE.profiles.length ? { sameAs: SITE.profiles } : {}),
    url: SITE.url,
    logo: `${SITE.url}/logo-main.png`,
    image: `${SITE.url}/hero-image.jpg`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    knowsAbout: ["Badrumsrenovering", "Plattsättning", "Köksrenovering", "Tätskikt", "Våtrum", "Snickeri"],
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}
