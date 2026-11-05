import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://byggoplattsattning.se"

  // List of cities for service pages
  const serviceCities = ["eskilstuna", "strangnas", "vasteras", "katrineholm", "torshalla", "koping", "arboga"]

  // Services
  const services = ["badrumsrenovering", "plattsattning", "koksrenovering", "bygg-snickeri"]

  // Blog posts slugs
  const blogSlugs = [
    "planera-badrumsrenovering",
    "valja-ratt-kakel",
    "kokstrender-2024",
    "webbfix-webbyra-kopa-hemsida-eskilstuna",
    "elektriker-eskilstuna-lokal-trygghet",
    "hyra-lagenhet-eskilstuna-vad-bor-man-tanka-pa",
  ]

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/om-oss`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tjanster`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/samarbeten`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fastighet-uthyres-eskilstuna-kyrkogatan-7`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Service city pages (all combinations of services and cities)
  const serviceCityPages = services.flatMap((service) =>
    serviceCities.map((city) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  )

  // Blog post pages
  const blogPostPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogg/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...serviceCityPages, ...blogPostPages]
}
