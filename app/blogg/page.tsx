import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-posts"
import { PostCover, formatDate } from "./post-cover"

const description =
  "Tips och guider om badrumsrenovering, val av kakel, köksrenovering och plattsättning från Bygg & Plattsättning i Eskilstuna."

export const metadata: Metadata = {
  title: "Blogg – tips om badrum & kakel",
  description,
  alternates: {
    canonical: "/blogg",
  },
  openGraph: {
    title: "Blogg – tips om badrum & kakel",
    description,
    url: "/blogg",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/hero-image.jpg", width: 2048, height: 1536 }],
  },
}

export default function Blogg() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <main className="pt-24">
      <header className="container-site pb-14 pt-12 md:pb-20 md:pt-16">
        <p className="eyebrow">Blogg</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
          Tips om badrum, kakel och renovering<span className="text-orange-500">.</span>
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-300">
          Här delar vi med oss av råd och erfarenheter från över 20 år i byggbranschen, så att du kan planera ditt
          nästa projekt med bättre koll.
        </p>
      </header>

      {featured && (
        <section aria-label="Senaste artikeln" className="container-site">
          <Link
            href={`/blogg/${featured.slug}`}
            className="surface group grid overflow-hidden transition-colors duration-300 hover:bg-ink-800 lg:grid-cols-2"
          >
            <PostCover
              post={featured}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
            />
            <div className="flex flex-col p-8 md:p-12">
              <PostMeta post={featured} />
              <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-prose leading-relaxed text-ink-300">{featured.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-10 font-medium text-glacier-300">
                Läs artikeln
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </section>
      )}

      {rest.length > 0 && (
        <section aria-labelledby="fler-artiklar" className="container-site py-20 md:py-28">
          <h2 id="fler-artiklar" className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Fler artiklar<span className="text-orange-500">.</span>
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {rest.map((post) => (
              <li key={post.slug} className="reveal">
                <Link href={`/blogg/${post.slug}`} className="group flex h-full flex-col">
                  <PostCover
                    post={post}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/9] rounded-2xl ring-1 ring-white/[0.06]"
                  />
                  <div className="mt-6 flex flex-1 flex-col">
                    <PostMeta post={post} />
                    <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white transition-colors group-hover:text-glacier-200">
                      {post.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-300">{post.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.9375rem] font-medium text-glacier-300">
                      Läs artikeln
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-400">
      <span className="font-medium text-orange-500">{post.category}</span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-ink-600" />
      <time dateTime={post.date} className="tabular-nums">
        {formatDate(post.date)}
      </time>
      <span aria-hidden className="h-1 w-1 rounded-full bg-ink-600" />
      <span>{post.readTime} läsning</span>
    </p>
  )
}
