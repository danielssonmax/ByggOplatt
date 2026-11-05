import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Köping",
  description:
    "Professionell plattsättning i Köping. Kakel, klinker, mosaik och natursten. Tätskikt enligt branschregler. Erfarna plattsättare. Begär offert!",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/koping",
  },
  openGraph: {
    title: "Plattsättning Köping | Bygg & Plattsättning",
    description:
      "Professionell plattsättning i Köping. Kakel, klinker, mosaik och natursten med tätskikt enligt branschregler.",
    url: "https://byggoplattsattning.se/plattsattning/koping",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningKoping() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Köping"
      heroTitle="Plattsättning i Köping"
      heroDescription="Letar du efter en erfaren plattsättare i Köping? Vi utför professionell plattsättning av kakel, klinker, mosaik och natursten för alla typer av utrymmen. Med vår expertis och noggrannhet säkerställer vi att resultatet blir både vackert och hållbart."
      introTitle="Professionell Plattsättning i Köping"
      introContent={[
        "Vi är specialister på plattsättning i Köping och utför arbeten i både våtrum och torra utrymmen. Oavsett om det gäller ett badrum, kök, hall eller utomhusyta kan du lita på oss för ett professionellt resultat.",
        "Våra plattsättare har lång erfarenhet och arbetar alltid enligt Byggkeramikrådets branschregler. Vi är behöriga för våtrumsarbeten och kan därför garantera att tätskikt och plattsättning utförs korrekt.",
        "Vi hjälper dig genom hela processen – från val av kakel och klinker till färdig installation. Med vårt öga för detaljer och känsla för design skapar vi resultat som både ser fantastiskt ut och håller i många år.",
      ]}
      features={[
        {
          title: "Kakel och klinker",
          description:
            "Vi sätter alla typer av kakel och klinker i olika format och stilar. Från klassiskt vitt kakel till moderna storformatplattor.",
        },
        {
          title: "Mosaik",
          description:
            "Skapa unika designelement med mosaik. Vi har erfarenhet av att arbeta med alla typer av mosaikplattor för vackra detaljer.",
        },
        {
          title: "Natursten",
          description:
            "Marmor, granit, skiffer och andra naturstenar kräver specialkunskap. Vi har erfarenheten som krävs för ett perfekt resultat.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "I våtrum applicerar vi alltid tätskikt enligt Byggkeramikrådets branschregler för att säkerställa ett vattentätt resultat.",
        },
        {
          title: "Golvvärme",
          description:
            "Vi installerar golvvärme under klinker för ett behagligt inomhusklimat. Perfekt för badrum och andra utrymmen.",
        },
        {
          title: "Reparation och renovering",
          description:
            "Vi utför även reparationer och byte av enstaka plattor samt renovering av befintliga plattlagda ytor.",
        },
      ]}
      whyChooseUsContent={[
        "Över 20 års erfarenhet av plattsättning i Köping. Vi har utfört hundratals projekt och levererar alltid högsta kvalitet.",
        "Behöriga för våtrumsarbeten enligt Byggkeramikrådets och Säker Vattens krav. Du kan känna dig trygg med att arbetet utförs korrekt.",
        "Noggrannhet och känsla för detaljer i varje projekt. Vi är stolta över vårt hantverk och det syns i resultatet.",
        "Konkurrenspristiga priser och tydliga offerter. Du vet alltid vad plattsättningen kommer att kosta innan vi börjar.",
      ]}
      ctaTitle="Behöver du en plattsättare i Köping?"
      ctaDescription="Kontakta oss idag för en kostnadsfri offert på din plattsättning. Vi hjälper dig skapa vackra och hållbara ytor."
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
