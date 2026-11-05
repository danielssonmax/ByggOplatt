/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve resized AVIF/WebP per screen size instead of the original files
    // (the hero JPEG alone was 615 KB on mobile).
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The kitchen trends post became evergreen and lost the year in its slug.
      { source: "/blogg/kokstrender-2024", destination: "/blogg/trender-koksrenovering", permanent: true },
    ]
  },
}

export default nextConfig
