import type { Metadata } from "next"
import PropertyListingClient from "./PropertyListingClient"

const description =
  "240 m² kontorslokal i centrala Eskilstuna. Fd komministerbostad med charmig arkitektur från 1931, intill Fors kyrka. Omgående tillträde. Ring 073 181 89 08."

export const metadata: Metadata = {
  title: {
    absolute: "Lokal uthyres – Kyrkogatan 7B, Eskilstuna (240 m²) | BFE Fastigheter",
  },
  description,
  alternates: {
    canonical: "/fastighet-uthyres-eskilstuna-kyrkogatan-7",
  },
  openGraph: {
    title: "Lokal uthyres – Kyrkogatan 7B, Eskilstuna (240 m²)",
    description,
    url: "/fastighet-uthyres-eskilstuna-kyrkogatan-7",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/property-exterior-2.jpg", width: 1220, height: 915, alt: "Kyrkogatan 7B, fastighetens exteriör" }],
  },
}

export default function PropertyListingPage() {
  return <PropertyListingClient />
}
