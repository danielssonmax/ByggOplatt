import type { Metadata } from "next"
import PropertyListingClient from "./PropertyListingClient"

export const metadata: Metadata = {
  title: "Fastighet Uthyres - Kyrkogatan 7B, Eskilstuna | BFE Fastigheter",
  description:
    "240 m² kontorslokal i centrala Eskilstuna. Fd kommunisterbostad med charmig arkitektur från 1931. Omgående tillträde. Kontakta oss på 073 181 89 08.",
  alternates: {
    canonical: "/fastighet-uthyres-eskilstuna-kyrkogatan-7",
  },
}

export default function PropertyListingPage() {
  return <PropertyListingClient />
}
