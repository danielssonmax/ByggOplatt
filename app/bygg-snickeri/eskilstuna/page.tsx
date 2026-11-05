import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Eskilstuna",
  description:
    "Professionell snickare i Eskilstuna. Tillbyggnad, ombyggnad, fönsterbyte, altanbygge och köksrenovering. Erfarna hantverkare. Begär offert!",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/eskilstuna",
  },
  openGraph: {
    title: "Snickare Eskilstuna | Bygg & Plattsättning",
    description:
      "Professionell snickare i Eskilstuna. Tillbyggnad, ombyggnad, fönsterbyte och köksrenovering med erfarna hantverkare.",
    url: "https://byggoplattsattning.se/bygg-snickeri/eskilstuna",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriEskilstuna() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Eskilstuna"
      heroTitle="Snickare i Eskilstuna"
      heroDescription="Vi erbjuder ett komplett utbud av snickeritjänster i Eskilstuna. Med fokus på kvalitet, funktion och design hjälper vi både privatpersoner och företag med allt från små förbättringar till omfattande bygg- och renoveringsprojekt."
      introTitle="Bygg- & Snickeriarbeten i Eskilstuna"
      introContent={[
        "Vi hjälper dig med allt från mindre reparationer till kompletta renoveringsprojekt, oavsett om det gäller privatbostad eller kommersiell fastighet i Eskilstuna.",
        "Våra erfarna snickare levererar alltid ett noggrant utfört arbete med känsla för detaljer. Vi arbetar med fokus på kvalitet, noggrannhet och god kommunikation genom hela projektet.",
        "Som din byggpartner tar vi hand om hela processen – från första skiss och planering till färdig byggnation. Du har alltid en kontaktperson och vi håller dig uppdaterad varje steg på vägen.",
      ]}
      features={[
        {
          title: "Tillbyggnad och ombyggnad",
          description:
            "Drömmer du om mer plats hemma? Vi hjälper dig med tillbyggnader, utbyggnader och ombyggnationer som harmoniserar med husets befintliga stil.",
        },
        {
          title: "Fönster- och dörrbyten",
          description:
            "Moderna, energieffektiva fönster och dörrar som höjer både komforten och värdet på ditt hem. Professionell installation med garanti.",
        },
        {
          title: "Altaner och trädäck",
          description:
            "Vi bygger altaner, trädäck och uterum i hållbara material. Skapa ditt drömträdgårdsrum med professionell hjälp.",
        },
        {
          title: "Fasad- och utomhussnickeri",
          description:
            "Panelbyte, staket, carportar och fasadrenovering. Utomhussnickeri i material som tål väder och vind.",
        },
        {
          title: "Innerväggar och tak",
          description:
            "Uppsättning av innerväggar, takarbeten och annan inomhussnickeri. Vi skapar nya rum och förändrar planlösningar.",
        },
        {
          title: "Specialsnickeri",
          description:
            "Måttanpassade lösningar som hyllor, trappor, räcken och andra detaljer som ger ditt hem en personlig prägel.",
        },
      ]}
      whyChooseUsContent={[
        "Över 20 års erfarenhet av bygg- och snickeriarbeten i Eskilstuna. Vi har genomfört hundratals projekt i alla storlekar.",
        "Komplett service från planering till färdigställande. Vi koordinerar alla hantverkare och ser till att projektet flyter smidigt.",
        "Kvalitet och noggrannhet i varje detalj. Vi är stolta över vårt hantverk och det syns i resultatet.",
        "Fast pris och tydlig offert. Du vet alltid vad projektet kommer att kosta innan vi börjar arbeta.",
      ]}
      ctaTitle="Behöver du en snickare i Eskilstuna?"
      ctaDescription="Kontakta oss idag för en kostnadsfri offert på ditt byggprojekt. Vi hjälper dig förverkliga dina idéer."
      heroImage="/hero-image.jpg"
    />
  )
}
