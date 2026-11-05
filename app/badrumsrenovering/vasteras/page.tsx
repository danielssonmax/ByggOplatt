import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Västerås",
  description:
    "Professionell badrumsrenovering i Västerås. Vi erbjuder totalentreprenad med tätskikt, plattsättning, VVS och el. Behörig våtrum. Begär offert idag!",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/vasteras",
  },
  openGraph: {
    title: "Badrumsrenovering Västerås | Bygg & Plattsättning",
    description:
      "Professionell badrumsrenovering i Västerås med totalentreprenad. Behörig våtrum, tätskikt och plattsättning.",
    url: "https://byggoplattsattning.se/badrumsrenovering/vasteras",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringVasteras() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Västerås"
      heroTitle="Badrumsrenovering i Västerås"
      heroDescription="Är det dags att renovera badrummet i Västerås? Vi erbjuder professionell badrumsrenovering med totalentreprenad där du som kund endast har en kontakt genom hela projektet. Med vårt digitala ritverktyg kan du enkelt planera och anpassa ditt nya badrum."
      introTitle="Professionell Badrumsrenovering i Västerås"
      introContent={[
        "Vi arbetar med såväl nyproduktion som renoveringar av badrum i Västerås. Vi finns med hela vägen från planering till färdigställande – oavsett om det gäller en omfattande ombyggnation eller en enklare badrumsrenovering.",
        "Vi kan tillhandahålla totalentreprenad där du som kund endast har en kontakt genom hela projektet. Vi sköter all kommunikation mellan alla olika involverade yrkesgrupper så att din badrumsrenovering i Västerås går så smidigt som möjligt.",
        "Genom våra samarbetspartners kan vi erbjuda kompletta paketlösningar där allting ingår till hela din badrumsrenovering – från kakel och klinker till badrumsinredning och sanitetsporslin.",
      ]}
      features={[
        {
          title: "Rivning och bortforsling",
          description:
            "Vi tar hand om rivning av ditt gamla badrum och ser till att allt material forslas bort på ett miljövänligt sätt.",
        },
        {
          title: "VVS-installation",
          description:
            "Våra certifierade VVS-tekniker installerar all rördragning enligt gällande normer och föreskrifter.",
        },
        {
          title: "Elinstallation",
          description:
            "Behöriga elektriker utför all elinstallation för belysning, golvvärme och övriga eluttag i badrummet.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "Vi applicerar tätskikt enligt Byggkeramikrådets branschregler för att säkerställa ett vattentätt badrum.",
        },
        {
          title: "Plattsättning av kakel och klinker",
          description:
            "Professionell plattsättning med noggrannhet och känsla för detaljer. Vi hjälper dig välja rätt kakel och klinker.",
        },
        {
          title: "Installation av inredning",
          description:
            "Montering av sanitetsporslin, duschväggar, badrumsmöbler och all övrig inredning till ditt nya badrum.",
        },
      ]}
      whyChooseUsContent={[
        "Över 20 års erfarenhet av badrumsrenoveringar i Västerås med omnejd. Vi har genomfört hundratals projekt och vet vad som krävs för ett perfekt resultat.",
        "Behörig våtrum enligt Byggkeramikrådets och Säker Vattens krav. Du kan känna dig trygg med att ditt badrum byggs enligt alla gällande normer.",
        "Totalentreprenad med en kontaktperson genom hela projektet. Du slipper koordinera olika hantverkare – vi tar hand om allt.",
        "Fast pris och tydlig offert utan dolda kostnader. Du vet exakt vad din badrumsrenovering kommer att kosta innan vi börjar.",
      ]}
      ctaTitle="Redo att renovera ditt badrum i Västerås?"
      ctaDescription="Kontakta oss idag för en kostnadsfri offert på din badrumsrenovering. Vi hjälper dig förverkliga ditt drömadrum."
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
