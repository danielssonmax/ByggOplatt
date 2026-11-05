import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Strängnäs",
  description:
    "Badrumsrenovering i Strängnäs, från trähusen vid domkyrkan till lägenheterna i Eldsundsviken. Behörig våtrum, fast pris, 26 minuter från vår bas.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/strangnas",
  },
  openGraph: {
    title: "Badrumsrenovering Strängnäs | Bygg & Plattsättning",
    description:
      "Nytt badrum i Strängnäs med tätskikt enligt branschregler, VVS, el och plattsättning. Vi anpassar arbetet efter husets ålder och lämnar fast pris.",
    url: "https://byggoplattsattning.se/badrumsrenovering/strangnas",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringStrangnas() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Strängnäs"
      heroTitle="Badrumsrenovering i Strängnäs"
      heroDescription="I Strängnäs möter vi allt från trähus längs Gyllenhjelmsgatan till nybyggda lägenheter i Eldsundsviken, och badrummen i dem kräver olika lösningar. Vi renoverar badrum i hela kommunen, en halvtimme från vår bas längs E20, med behörighet för våtrum."
      introTitle="Badrum i trästaden, i husen efter branden och i de nya kvarteren"
      introContent={[
        "Strängnäs har tre tydliga lager av bostäder. Den gamla trästaden runt domkyrkan, med gator som Gyllenhjelmsgatan från 1640-talet. Husen som uppfördes efter branden 1871 i stadens nordöstra del. Och de nya områdena, som Eldsundsviken på det tidigare militärområdet. Ett badrum i vart och ett av dem byggs på olika sätt, och det första vi gör är att ta reda på vilket hus vi står i.",
        "I trähusen handlar det om att hantera golv som lutar, bjälklag som rör sig och rör som dragits om i flera omgångar. I husen från sekelskiftet och framåt är det ofta gamla gjutjärnsbrunnar och tätskikt från 1980- eller 90-talet som ska bort. I de nyare lägenheterna vill kunden oftare byta stil än laga något trasigt, och då handlar jobbet mer om plattsättning och inredning än om konstruktion.",
        "Oavsett hus tar vi hela entreprenaden med en kontaktperson: rivning, tätskikt enligt Byggkeramikrådets branschregler, VVS, el, plattsättning och montering. Resan från Kyrkogatan i Eskilstuna tar ungefär 26 minuter på E20, vilket gör att vi kan ha samma lag på plats hela veckan. Du får offerten utan kostnad, med ett pris som står fast.",
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
        "Behörighet för våtrum enligt Byggkeramikrådets och Säker Vattens krav, med kvalitetsdokument till dig och din förening när arbetet är klart.",
        "Strängnäs ligger 33 kilometer längs E20 från vår bas, ungefär en halvtimme. Det är nära nog för att vi ska kunna vara på plats varje dag under hela badrumsrenoveringen.",
        "Vi anpassar tätskikt och underarbete efter husets ålder: trästaden, sekelskiftets stenhus och Eldsundsvikens nyproduktion kräver var sin lösning, och vi är vana vid alla tre.",
        "En offert med fast pris och en person som svarar i telefon. Inga tillägg i efterhand för sådant vi borde ha sett vid platsbesöket.",
      ]}
      ctaTitle="Vill du veta vad ett nytt badrum i Strängnäs kostar?"
      ctaDescription="Vi kommer ut, mäter och tittar på husets förutsättningar. Sedan får du en kostnadsfri offert med fast pris och en tidplan att planera efter."
      localTitle="Så planerar vi ett badrum i Strängnäs"
      localContent={[
        "Första steget är ett platsbesök, som vi gärna lägger på förmiddagen så att det kan kombineras med annat arbete i Strängnäs samma dag. Vi tittar på golvbrunn, stammar, ventilation och hur badrummet är byggt, och frågar vad du vill ändra. Inom en vecka får du en offert där rivning, tätskikt, VVS, el, plattsättning och inredning är specificerade var för sig.",
        "En invändig badrumsrenovering kräver normalt inte bygglov i Strängnäs kommun, men ändringar i bärande delar, ventilation eller vatten och avlopp kan behöva anmälas. I bostadsrätt behöver du oftast föreningens godkännande innan stammar eller golvbrunn rörs, och många föreningar kräver att arbetet görs av ett behörigt företag. Vi tar fram de intyg som behövs.",
      ]}
      localFaq={[
        {
          q: "Ni finns i Eskilstuna. Hur fungerar det med resor till Strängnäs?",
          a: "Resan tar runt 26 minuter på E20 och ingår i priset. Vi planerar arbetet så att samma plattsättare är på plats varje dag, och material tas med från början så att dagarna inte går åt till transporter.",
        },
        {
          q: "Kan ni renovera badrum i ett gammalt trähus i Strängnäs?",
          a: "Ja. Vi riktar upp golv, förstärker bjälklag vid behov och väljer tätskiktssystem som klarar rörelser i trästommen. Det påverkar priset, och det är därför vi vill se huset innan vi lämnar offert.",
        },
        {
          q: "Vad ingår i offerten och vad kan tillkomma?",
          a: "Offerten anger ett fast pris för rivning, tätskikt, VVS, el, plattsättning och montering, samt vilket material som är inräknat. Det som kan tillkomma är sådant som inte går att se före rivning, till exempel fuktskador i bjälklaget, och det stämmer vi av med dig innan vi gör något.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
