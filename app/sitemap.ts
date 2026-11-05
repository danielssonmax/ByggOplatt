import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { PROJECTS } from "@/lib/projects"
import { CITIES, SERVICES, SITE } from "@/lib/site"

// Bump this when page content actually changes. A lastModified that changes on
// every build (new Date()) teaches Google to ignore the value.
const CONTENT_UPDATED = "2026-11-05"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url

  const mainPages = [
    "",
    "/tjanster",
    "/flytspackling",
    "/om-oss",
    "/kontakt",
    "/blogg",
    "/samarbeten",
    "/fastighet-uthyres-eskilstuna-kyrkogatan-7",
    // Only listed once there are real reference jobs (the page 404s while empty).
    ...(PROJECTS.length > 0 ? ["/referenser"] : []),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: CONTENT_UPDATED,
  }))

  const serviceHubPages = SERVICES.map((service) => ({
    url: `${base}/${service.slug}`,
    lastModified: CONTENT_UPDATED,
  }))

  const serviceCityPages = SERVICES.flatMap((service) =>
    CITIES.map((city) => ({
      url: `${base}/${service.slug}/${city.slug}`,
      lastModified: CONTENT_UPDATED,
    })),
  )

  const blogPostPages = BLOG_POSTS.map((post) => ({
    url: `${base}/blogg/${post.slug}`,
    lastModified: post.updated ?? post.date,
  }))

  return [...mainPages, ...serviceHubPages, ...serviceCityPages, ...blogPostPages]
}
