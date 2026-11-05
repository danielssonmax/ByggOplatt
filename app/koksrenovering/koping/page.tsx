import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Köping",
  description:
    "Köksrenovering i Köping, i stenstadens lägenheter från 1890-talet och i husen från 60-talets utbyggnad. Fast pris, en kontaktperson, 40 minuter från vår bas.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/koping",
  },
  openGraph: {
    title: "Köksrenovering Köping | Bygg & Plattsättning",
    description:
      "Köksrenovering i Köping med rivning, VVS, el, stänkskydd och montering. Vi kommer via E20 och väg 250 från Eskilstuna och lämnar fast pris efter platsbesök.",
    url: "https://byggoplattsattning.se/koksrenovering/koping",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringKoping() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Köping"
      heroTitle="Köksrenovering i Köping"
      heroDescription="Efter branden 1889 byggdes Köping upp som stenstad, och på 1960-talet växte staden så snabbt att folkmängden toppade 1970. Köken i de husen har hunnit bli gamla. Vi renoverar kök i både sekelskifteslägenheter och 60-talshus, och kommer från vår bas i Eskilstuna via E20 och väg 250 på cirka 40 minuter."
      introTitle="Kök i stenstaden från 1890-talet och husen från 60-talet"
      introContent={[
        "Stadsbranden 1889 förstörde stora delar av Köping. Staden byggdes upp igen i sten, och arkitekten Theodor Dahl ritade många av de hus som fortfarande präglar centrum. I lägenheterna från den tiden är taken höga och rummen stora, men köket är ofta litet i förhållande till övriga rum. Att öppna upp mot matrummet är ett vanligt önskemål, och då måste vi först reda ut vilka väggar som bär.",
        "Det andra stora byggdecenniet var 1960-talet, när folkmängden steg från 16 819 till 21 740 på tio år. Husen från den tiden har betongstommar och enklare planlösningar, men också kök med el från byggåret, gemensam frånluft och stammar som börjar nå slutet av sin livslängd. Vi kontrollerar vad som sitter i väggarna innan vi räknar, så att offerten håller.",
        "Oavsett om köket sitter i ett sekelskifteshus eller i ett hus från 1965 tar vi hela renoveringen: rivning och bortforsling, VVS och el genom behöriga yrkesgrupper, plattsättning av stänkskydd, montering av inredning, installation av vitvaror och målning. Du har en kontaktperson genom hela projektet och ett fast pris innan vi börjar.",
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
        "Cirka 42 kilometer och 40 minuter från vår bas i Eskilstuna via E20 och väg 250. Vi lägger jobb i Köping i sammanhängande dagar och ser till att material finns på plats från start.",
        "Fast pris efter platsbesök. I de äldre husen i centrum vill vi se stammar, el och väggar innan vi räknar, så att du slipper tilläggsfakturor för sådant som gick att förutse.",
        "Vi har erfarenhet av både hög takhöjd och låg: sekelskifteslägenheter där skåpen kan byggas upp till taket och 60-talskök där varje centimeter förvaring måste planeras.",
        "En kontaktperson från offert till slutstädning. Vi samordnar rörmokare, elektriker, plattsättare och målare och håller tidplanen, så att du vet när köket är klart.",
      ]}
      ctaTitle="Nytt kök i Köping, i sekelskifteshus eller 60-talshus?"
      ctaDescription="Berätta om köket och huset det sitter i, så bokar vi ett platsbesök. Offerten är kostnadsfri och priset du får är fast."
      heroImage="/hero-image.jpg"
      localTitle="Att renovera kök i Köping"
      localContent={[
        "Köping ligger vid Mälarens västra del, i Västmanlands län, och är den näst största tätorten i länet. Resan från Kyrkogatan i Eskilstuna tar cirka 40 minuter via E20 och väg 250. Det är ett avstånd som fungerar bra för hela dagar på plats, och vi planerar materialleveranser så att inget väntar på en bil från Eskilstuna. Bygglov och anmälningar handläggs av Köpings kommun.",
        "Staden har en lång industrihistoria, från Köpings mekaniska verkstad 1856 till Volvo och sängtillverkaren Hästens i dag, och många av de bostäder vi möter byggdes under 1960-talets expansion. Efter 1970 minskade folkmängden fram till 2000, så få kök tillkom under de decennierna. Det gör att en renovering i Köping ofta börjar med installationer som är över 50 år gamla.",
      ]}
      localFaq={[
        {
          q: "Vi bor i ett stenhus från 1890-talet i centrala Köping. Vilka väggar kan vi ta bort?",
          a: "Det avgör en konstruktionsbedömning, inte gissningar. I stenhus från den tiden bär ofta både yttervägg och en hjärtvägg mitt i huset, medan tunnare mellanväggar kan vara lätta. Är väggen bärande krävs en balk och normalt en anmälan till kommunen. Vi reder ut det innan offerten, så att priset täcker rätt lösning.",
        },
        {
          q: "Vad kostar en köksrenovering i Köping?",
          a: "Det beror på tre saker: hur mycket som ska rivas och byggas om bakom skåpen, hur mycket vatten och el som flyttas, och vilken inredning och vilka vitvaror du väljer. Därför lämnar vi inga priser per telefon, utan räknar efter ett platsbesök. Offerten är kostnadsfri, priset är fast och arbetskostnaden ger rätt till rotavdrag.",
        },
        {
          q: "Kan ni byta köket i en lägenhet från 60-talet utan att störa grannarna för mycket?",
          a: "Helt tyst blir det inte, men vi samlar de bullriga momenten, rivning och bilning, till så få dagar som möjligt och håller oss till husets tider för störande arbete. Föreningen får en kort beskrivning av arbetet i förväg, och vi skyddar trapphuset under rivning och leveranser.",
        },
      ]}
    />
  )
}
