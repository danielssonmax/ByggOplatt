import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Arboga",
  description:
    "Professionell köksrenovering i Arboga. Komplett renovering med VVS, el, plattsättning och montering. Skräddarsydda lösningar. Begär offert!",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/arboga",
  },
  openGraph: {
    title: "Köksrenovering Arboga | Bygg & Plattsättning",
    description:
      "Professionell köksrenovering i Arboga. Komplett renovering med VVS, el, plattsättning och montering av köksinredning.",
    url: "https://byggoplattsattning.se/koksrenovering/arboga",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringArboga() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Arboga"
      heroTitle="Köksrenovering i Arboga"
      heroDescription="Köket är hemmets hjärta – platsen där familjen samlas och vardagen tar plats. Vi hjälper dig att skapa ett modernt, funktionellt och personligt kök som passar din livsstil. Från planering till färdig installation tar vi hand om hela processen."
      introTitle="Professionell Köksrenovering i Arboga"
      introContent={[
        "Att renovera köket är en investering i både hemmet och livskvaliteten. Med rätt planering och kunniga hantverkare kan du förvandla ditt gamla kök till ett modernt, personligt och funktionellt rum som passar din stil.",
        "Vi hjälper dig genom hela processen – från inspiration och planering till färdig köksrenovering i Arboga. Tillsammans skapar vi ett kök som kombinerar smart förvaring, snygg design och hållbara material.",
        "Som totalentreprenör koordinerar vi alla hantverkare och ser till att din köksrenovering går smidigt. Du har en kontaktperson genom hela projektet och vi håller dig uppdaterad varje steg på vägen.",
      ]}
      features={[
        {
          title: "Rivning av befintligt kök",
          description:
            "Vi tar hand om rivning och bortforsling av ditt gamla kök på ett säkert och effektivt sätt.",
        },
        {
          title: "VVS- och elarbeten",
          description:
            "Certifierade VVS-tekniker och elektriker utför all installation för vatten, avlopp och el enligt gällande regler.",
        },
        {
          title: "Plattsättning av kakel",
          description:
            "Professionell plattsättning av stänkskydd och golv. Vi hjälper dig välja kakel som passar din stil.",
        },
        {
          title: "Montering av köksinredning",
          description:
            "Precision och noggrannhet vid montering av skåp, bänkskivor, vitvaror och all övrig köksinredning.",
        },
        {
          title: "Installation av vitvaror",
          description:
            "Vi installerar alla typer av vitvaror – kyl, frys, spis, ugn, diskmaskin och fläkt.",
        },
        {
          title: "Målning och tapetsering",
          description:
            "Komplett finish med målning eller tapetsering för ett helt färdigt kök som du kan börja använda direkt.",
        },
      ]}
      whyChooseUsContent={[
        "Över 20 års erfarenhet av köksrenoveringar i Arboga. Vi har hjälpt hundratals kunder skapa sina drömkök.",
        "Totalentreprenad med en kontaktperson. Du slipper koordinera olika hantverkare – vi tar hand om allt från start till mål.",
        "Skräddarsydda lösningar efter dina behov och önskemål. Vi lyssnar på dina idéer och hjälper dig förverkliga din vision.",
        "Fast pris och tydlig offert utan överraskningar. Du vet exakt vad köksrenoveringen kommer att kosta innan vi börjar.",
      ]}
      ctaTitle="Redo att renovera köket i Arboga?"
      ctaDescription="Kontakta oss idag för en kostnadsfri offert på din köksrenovering. Vi hjälper dig skapa ett kök du älskar."
      heroImage="/hero-image.jpg"
    />
  )
}
