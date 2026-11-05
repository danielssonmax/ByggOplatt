import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Västerås",
  description:
    "Köksrenovering i Västerås, från 60-talslägenheter i Bäckby, Råby och Vallby till nya hem på Lillåudden. Totalentreprenad med en kontaktperson och fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/vasteras",
  },
  openGraph: {
    title: "Köksrenovering Västerås | Bygg & Plattsättning",
    description:
      "Köksrenovering i Västerås med rivning, VVS, el, kakel och montering. Vi kör riksväg 56 över Mälaren från Eskilstuna och lämnar fast pris efter platsbesök.",
    url: "https://byggoplattsattning.se/koksrenovering/vasteras",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringVasteras() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Västerås"
      heroTitle="Köksrenovering i Västerås"
      heroDescription="Västerås är Sveriges sjätte största tätort, och en stor del av stadens kök sitter i lägenheter byggda under 1960-talets snabba tillväxt. Vi renoverar kök i bostadsrätter, villor och de nya husen vid Mälaren, kör riksväg 56 över Kvicksund från vår bas i Eskilstuna och tar hela jobbet med en kontaktperson."
      introTitle="Kök i staden som växte med 23 000 invånare på tio år"
      introContent={[
        "Mellan 1960 och 1970 växte Västerås från 76 196 till 99 343 invånare. Under de åren byggdes stadsdelar som Bäckby, Råby, Vallby och Viksäng, och där sitter i dag mängder av kök som antingen är original eller fick sin senaste renovering på 90-talet. Bäckby är fortfarande stadens största stadsdel med över 8 000 invånare, och många av köken där står på tur.",
        "I en bostadsrätt är köket ditt, men huset är föreningens. Ventilation, avloppsstammar och ibland även elmatningen är sådant som styrelsen vill ha koll på, och i många föreningar krävs ett godkännande innan vatten eller avlopp flyttas. Vi hjälper dig med underlaget till styrelsen och planerar arbetet efter husets regler för bullrande arbete, så att grannarna slipper överraskningar.",
        "Vid vattnet har Västerås fått nya bostadsområden som Lillåudden och Öster Mälarstrand, med lägenheter från 2000-talet. Där handlar köksrenoveringen sällan om stammar och el, utan om att byta en standardinredning mot något som passar den som bor där. Oavsett om huset är från 1965 eller 2015 sköter vi rivning, VVS, el, stänkskydd, montering, vitvaror och målning med fast pris.",
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
        "Kontakten med föreningen tar vi på allvar. En kontaktperson hos oss håller ihop rörmokare, elektriker, plattsättare och målare, och ser till att styrelsen får de uppgifter den behöver innan vi börjar.",
        "Lägenheterna från 60-talet i Bäckby, Råby och Vallby har det flerbostadshus från den tiden brukar ha: gemensam frånluft som köksfläkten måste anpassas till, och elmatning som sällan räcker till induktionshäll utan åtgärd. Det planerar vi för.",
        "Cirka 45 kilometer från vår bas i Eskilstuna, via riksväg 56 över Mälaren vid Kvicksund. Vi planerar jobb i Västerås i sammanhängande dagar, så att restiden blir en så liten del av jobbet som möjligt.",
        "Fast pris efter platsbesök, även i bostadsrätt. Vi räknar på det kök som ska byggas, inklusive det föreningen kräver, så att offerten står sig från styrelsebeslut till färdigt kök.",
      ]}
      ctaTitle="Nytt kök i Västerås, i bostadsrätt eller villa?"
      ctaDescription="Skicka några rader om köket, huset och vad du vill ändra, så återkommer vi med tid för ett platsbesök. Det kostar inget att få en offert, och priset i den gäller."
      heroImage="/hero-image.jpg"
      localTitle="Köksrenovering i Västerås, från Bäckby till Lillåudden"
      localContent={[
        "Västerås ligger i Västmanlands län, på andra sidan länsgränsen från vår bas, och resan tar drygt 40 minuter via E20, riksväg 56 och E18. Det är tillräckligt nära för att vi ska kunna vara på plats klockan sju och tillräckligt långt för att vi ska planera noga: material beställs så att det finns på plats när momentet börjar, och vi undviker att åka fram och tillbaka för småsaker. Bygglov och anmälningar handläggs av Västerås stad.",
        "Staden är gammal, med handel sedan sent 900-tal, men bostadsbeståndet är till stor del ungt eller medelålders. Citysaneringen på 1950- och 60-talen förnyade större delen av centrum, stadsdelarna från 60-talet kom strax efter, och de senaste tjugo åren har Lillåudden och Öster Mälarstrand vuxit fram vid vattnet. För oss betyder det tre tydliga typer av kök, med tre olika sätt att planera jobbet.",
      ]}
      localFaq={[
        {
          q: "Vad behöver bostadsrättsföreningen godkänna när jag renoverar köket?",
          a: "Det varierar mellan föreningar, men vanligast är att ändringar som rör vatten, avlopp och ventilation kräver styrelsens tillstånd, medan byte av skåp och vitvaror på samma plats sällan gör det. Vi tar fram en kort beskrivning av arbetet som du kan lämna till styrelsen, och anpassar oss till husets tider för bullrande moment.",
        },
        {
          q: "Kan vi få en frånluftsfläkt i köket i vår lägenhet i Västerås?",
          a: "Oftast inte om huset har gemensam frånluft, vilket många flerbostadshus från 60-talet har. Då kan en vanlig motorfläkt störa ventilationen i andra lägenheter, och föreningen säger nej. Lösningen blir normalt en kolfilterfläkt eller en spiskåpa anpassad till husets system. Vi kontrollerar vilken typ huset har innan vi beställer.",
        },
        {
          q: "Vi bor nära vattnet i ett hus från 2010-talet. Lönar det sig att byta kök redan nu?",
          a: "Om planlösningen eller förvaringen inte fungerar för er, ja. I nyare hus är installationerna i gott skick, så kostnaden hamnar nästan helt på inredning, bänkskiva och vitvaror, och arbetet går snabbare än i äldre hus. Vi återanvänder gärna det som fungerar, till exempel belysning eller vitvaror, om det passar den nya planen.",
        },
      ]}
    />
  )
}
