import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Eskilstuna",
  description:
    "Köksrenovering i Eskilstuna: rivning, VVS, el, kakel och montering med en kontaktperson. Vi utgår från Gamla staden, nära de många husen från 1940–70-talen.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/eskilstuna",
  },
  openGraph: {
    title: "Köksrenovering Eskilstuna | Bygg & Plattsättning",
    description:
      "Köksrenovering i Eskilstuna från vår bas på Kyrkogatan i Gamla staden. Rivning, VVS, el, plattsättning och montering, med fast pris och en kontaktperson.",
    url: "https://byggoplattsattning.se/koksrenovering/eskilstuna",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringEskilstuna() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Eskilstuna"
      heroTitle="Köksrenovering i Eskilstuna"
      heroDescription="Vi utgår från Kyrkogatan i Gamla staden, så ett platsbesök i Eskilstuna är aldrig långt bort. Vi tar hand om hela köksrenoveringen, från rivning och nya ledningar till kakel, montering och målning, och du har samma kontaktperson hela vägen."
      introTitle="Nytt kök i en stad byggd på 40-, 50- och 60-talen"
      introContent={[
        "Eskilstuna växte som mest mellan krigen och under 1940- och 50-talen, och folkmängden toppade 1970 med 68 596 invånare. Det betyder att en stor del av stadens kök sitter i hus som är byggda före 1975. Många av dem är inne på sin andra eller tredje renovering, och det som gjordes på 80- eller 90-talet börjar ofta bli slitet, trångt eller svårt att få reservdelar till.",
        "I äldre hus är det sällan luckorna som är problemet. Det som avgör hur jobbet blir är vad som finns bakom dem: vattenledningar som bytts i omgångar, elcentraler som inte räcker till en induktionshäll och golv som lagts ovanpå varandra genom åren. Vi tittar på allt det innan vi lämnar offert, så att priset du får verkligen täcker det kök som ska byggas.",
        "Som totalentreprenör samordnar vi rivning, VVS, el, plattsättning av stänkskydd, montering av inredning, vitvaror och målning. Du har en kontaktperson genom hela projektet, och vi planerar momenten så att du är utan kök så kort tid som möjligt. Arbetskostnaden ger rätt till rotavdrag på 30 procent, upp till 50 000 kronor per person och år.",
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
        "Eskilstuna är vår hemstad. Vi utgår från Kyrkogatan 7C i Gamla staden och har kort väg till alla stadsdelar, vilket gör platsbesök, materialleveranser och snabba avstämningar enkla att få till.",
        "Vi har arbetat i stadens hus i över 20 år och vet vad som brukar dölja sig i kök från 40-, 50- och 60-talen: gamla stammar, underdimensionerad el och golv i flera lager. Det planerar vi för i förväg.",
        "Offerten är tydlig och priset fast. Vi går igenom köket på plats innan vi räknar, så att du slipper tillägg för sådant som borde ha upptäckts från början.",
        "En kontaktperson samordnar alla yrkesgrupper, från rörmokare och elektriker till plattsättare och målare. Du behöver inte jaga någon, och vi håller dig uppdaterad om varje steg.",
      ]}
      ctaTitle="Dags för nytt kök i Eskilstuna?"
      ctaDescription="Ring oss eller skicka några rader om köket, så bokar vi ett platsbesök i Eskilstuna. Offerten är kostnadsfri och priset fast."
      heroImage="/hero-image.jpg"
      localTitle="Så renoverar vi kök i Eskilstuna"
      localContent={[
        "Från Kyrkogatan i Gamla staden, intill Fors kyrka, når vi hela Eskilstuna på kort tid. Det gör det enkelt att komma förbi och mäta, att hämta det som saknas under dagen och att stämma av materialval på plats i stället för över telefon. För dig som bor i lägenhet i centrum betyder det också att vi kan anpassa oss till husets tider för bullrande arbete.",
        "Stadens kök sitter i allt från äldre trähus vid ån till flerbostadshus från efterkrigstiden och nyare lägenheter i Munktellstaden. Varje typ har sina egna förutsättningar: i de äldre husen handlar det ofta om stammar och golvnivåer, i husen från 60-talet om ventilation och el, och i nyproduktion om att få det nya att passa ihop med befintliga installationer.",
      ]}
      localFaq={[
        {
          q: "Får jag använda rotavdraget på en köksrenovering i Eskilstuna?",
          a: "Ja, om du äger bostaden och bor där. Avdraget är 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Material och vitvaror räknas inte med. Vi drar av beloppet direkt på fakturan och sköter ansökan hos Skatteverket, så du betalar bara det som återstår.",
        },
        {
          q: "Vårt kök är från 1960-talet. Behöver elen göras om?",
          a: "Ofta, ja. En induktionshäll och en ugn på egen grupp kräver mer än vad många äldre kök är dragna för, och ibland behöver gruppcentralen kompletteras. Vår elektriker bedömer vad som krävs vid platsbesöket, så att det ingår i offerten i stället för att dyka upp mitt i jobbet.",
        },
        {
          q: "Kan ni ta bort väggen mellan kök och vardagsrum?",
          a: "Det beror på om väggen är bärande. I flerbostadshus med betongstomme är väggen mellan kök och vardagsrum ofta bärande, och då krävs en konstruktionsbedömning och ofta en anmälan till kommunen innan något rivs. Vi reder ut det före offerten, så vet du vad som gäller för just ditt hus.",
        },
      ]}
    />
  )
}
