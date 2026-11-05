import Image from "next/image"
import type { BlogPost } from "@/lib/blog-posts"
import { cn } from "@/lib/utils"

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })
}

/**
 * Cover image for a post. Posts without an image get a typographic panel
 * (tile grid + category) instead of a grey placeholder.
 */
export function PostCover({
  post,
  sizes,
  priority = false,
  className,
}: {
  post: BlogPost
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (post.image) {
    const contain = post.imageFit === "contain"
    return (
      <div className={cn("relative overflow-hidden bg-ink-850", className)}>
        <Image
          src={post.image}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "transition-transform duration-700 ease-spring group-hover:scale-[1.03]",
            contain ? "object-contain p-[12%]" : "object-cover",
          )}
        />
      </div>
    )
  }

  return (
    <div aria-hidden className={cn("relative isolate overflow-hidden bg-ink-850", className)}>
      <div className="tile-wall absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_80%_at_70%_20%,#000_20%,transparent_75%)]" />
      <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="flex h-full flex-col justify-end p-6 md:p-8">
        <span className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-none tracking-tight text-white/[0.09] transition-colors duration-500 group-hover:text-white/[0.14]">
          {post.category}
        </span>
      </div>
    </div>
  )
}
