import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getPost } from "@/lib/blog-posts"
import { SITE } from "@/lib/site"
import { JsonLd, breadcrumbSchema, BUSINESS_ID } from "@/components/json-ld"
import { PostCover, formatDate } from "../post-cover"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return { title: "Artikeln hittades inte" }
  }

  const image = post.image ?? "/hero-image.jpg"

  // Keep the search-result title within ~60 characters: drop the " | Bygg & Plattsättning"
  // suffix from the layout template when the article title is long on its own.
  const withBrand = `${post.title} | ${SITE.name}`
  const title = withBrand.length > 60 ? { absolute: post.title } : post.title
  // Google cuts descriptions around 155–160 characters; trim on a word boundary.
  const description =
    post.excerpt.length > 158 ? `${post.excerpt.slice(0, 155).replace(/\s+\S*$/, "")}…` : post.excerpt

  return {
    title,
    description,
    alternates: {
      canonical: `/blogg/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blogg/${post.slug}`,
      siteName: SITE.name,
      locale: "sv_SE",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: image }],
    },
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  // BLOG_POSTS is sorted newest first: "previous" = older, "next" = newer.
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug)
  const newerPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null
  const olderPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null

  const sameCategory = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== slug)
  const relatedPosts = (sameCategory.length > 0 ? sameCategory : BLOG_POSTS.filter((p) => p.slug !== slug)).slice(0, 2)

  const url = `${SITE.url}/blogg/${post.slug}`
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: `${SITE.url}${post.image ?? "/hero-image.jpg"}`,
    inLanguage: "sv-SE",
    articleSection: post.category,
    author: { "@type": "Organization", "@id": BUSINESS_ID, name: SITE.name, url: SITE.url },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  return (
    <main className="pt-24">
      <JsonLd
        data={[
          blogPosting,
          breadcrumbSchema([
            { name: "Hem", path: "/" },
            { name: "Blogg", path: "/blogg" },
            { name: post.title, path: `/blogg/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="container-site pt-10 md:pt-14">
          <nav aria-label="Brödsmulor">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Hem
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/blogg" className="transition-colors hover:text-white">
                  Blogg
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="max-w-[28ch] truncate text-ink-300 sm:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-14 max-w-[44rem] md:mt-20">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white">
              {post.title}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-300 md:text-xl">{post.excerpt}</p>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/[0.08] pt-6 text-sm text-ink-400">
              <span>{post.author}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-ink-600" />
              <time dateTime={post.date} className="tabular-nums">
                {formatDate(post.date)}
              </time>
              {post.updated && (
                <>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-ink-600" />
                  <span>
                    Uppdaterad{" "}
                    <time dateTime={post.updated} className="tabular-nums">
                      {formatDate(post.updated)}
                    </time>
                  </span>
                </>
              )}
              <span aria-hidden className="h-1 w-1 rounded-full bg-ink-600" />
              <span>{post.readTime} läsning</span>
            </p>
          </div>
        </header>

        {post.image && (
          <div className="container-site mt-12 md:mt-16">
            <PostCover
              post={post}
              priority
              sizes="(min-width: 1320px) 1256px, 100vw"
              className="mx-auto aspect-[21/9] max-w-[64rem] rounded-[1.75rem] ring-1 ring-white/[0.06]"
            />
          </div>
        )}

        <div className="container-site py-14 md:py-20">
          <div
            className="article-body mx-auto max-w-[44rem] [&>*:first-child]:mt-0"
            // Content is static HTML authored in lib/blog-posts.ts.
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="surface mx-auto mt-20 flex max-w-[44rem] flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Behöver du hjälp med ditt projekt?</h2>
              <p className="mt-2 text-ink-300">Vi ger dig en kostnadsfri konsultation och offert.</p>
            </div>
            <Link href="/kontakt" className="btn-cta shrink-0">
              Begär offert
              <ArrowUpRight size={18} aria-hidden />
            </Link>
          </aside>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section aria-labelledby="relaterat" className="border-t border-white/[0.06] bg-ink-950">
          <div className="container-site py-20 md:py-24">
            <h2 id="relaterat" className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Läs vidare<span className="text-orange-500">.</span>
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blogg/${related.slug}`}
                    className="surface group grid h-full overflow-hidden transition-colors duration-300 hover:bg-ink-800 sm:grid-cols-[11rem_1fr]"
                  >
                    <PostCover post={related} sizes="(min-width: 640px) 176px, 100vw" className="aspect-[16/9] sm:aspect-auto" />
                    <div className="flex flex-col p-6">
                      <p className="text-sm text-ink-400">
                        <span className="font-medium text-orange-500">{related.category}</span> · {related.readTime}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-snug text-white transition-colors group-hover:text-glacier-200">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-ink-300">{related.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(olderPost || newerPost) && (
        <nav aria-label="Fler artiklar" className="container-site grid gap-4 py-14 md:grid-cols-2">
          {olderPost ? (
            <Link
              href={`/blogg/${olderPost.slug}`}
              className="group rounded-2xl border border-white/[0.08] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.02]"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-glacier-300">
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
                Äldre artikel
              </span>
              <span className="mt-2 block font-display text-lg font-semibold text-white">{olderPost.title}</span>
            </Link>
          ) : (
            <span className="hidden md:block" />
          )}
          {newerPost && (
            <Link
              href={`/blogg/${newerPost.slug}`}
              className="group rounded-2xl border border-white/[0.08] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.02] md:text-right"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-glacier-300">
                Nyare artikel
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="mt-2 block font-display text-lg font-semibold text-white">{newerPost.title}</span>
            </Link>
          )}
        </nav>
      )}
    </main>
  )
}
