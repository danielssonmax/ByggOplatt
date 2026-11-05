import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Västerås",
  description:
    "Snickare och byggfirma i Västerås, 45 km från Eskilstuna via Kvicksund. Tillbyggnad och fönster i villor från 60-talet, innerväggar och altaner i bostadsrätt.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/vasteras",
  },
  openGraph: {
    title: "Snickare Västerås | Bygg & Plattsättning",
    description:
      "Byggfirma i Västerås med fast pris: tillbyggnader, fönsterbyten, altaner och innerväggar i villaområden som Hamre-Talltorp och i lägenheter vid Mälaren.",
    url: "https://byggoplattsattning.se/bygg-snickeri/vasteras",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriVasteras() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Västerås"
      heroTitle="Snickare i Västerås"
      heroDescription="Västerås är Sveriges sjätte största tätort, och bostäderna spänner från trähusen på Kyrkbacken till 2000-talets lägenheter på Lillåudden. Vi är snickare som kör riksväg 56 över Mälaren vid Kvicksund, drygt 40 minuter från vår bas, för tillbyggnader, fönsterbyten, altaner och innerväggar."
      introTitle="Snickeri i en stad som växte på tio år"
      introContent={[
        "Mellan 1960 och 1970 växte Västerås från 76 000 till nästan 100 000 invånare. Så många nya hem på så kort tid betyder att en stor del av villorna och radhusen i staden nu är över 50 år gamla, med fönster, fasadpanel och altaner som har gjort sitt. Det är här vi gör flest jobb: byten och tillbyggnader på hus från den stora byggvågen.",
        "Samtidigt är Västerås en stad med många bostadsrätter, både i de stora stadsdelarna som Bäckby och Råby och i de nya kvarteren vid vattnet. I en lägenhet handlar snickeri om annat än på en villa: nya innerväggar för ett extra rum, platsbyggda hyllor och garderober, en inglasad balkong eller en altan på markplan. Vi tar sådana jobb också, och vi vet att föreningens styrelse ofta ska ge sitt tillstånd först.",
        "Vi kör från Eskilstuna via riksväg 56 och bron vid Kvicksund, ungefär 45 kilometer. Det är nära nog för att vi ska kunna boka in hela arbetsdagar i följd, och vi planerar leveranser av virke och fönster så att de kommer direkt till dig. Offerten har fast pris, och Västerås stad handlägger bygglov och anmälningar om sådana behövs.",
      ]}
      features={[
        {
          title: "Tillbyggnad och ombyggnad",
          description:
            "Tillbyggnad, utbyggnad eller ombyggnad: vi ser till att det nya passar husets befintliga stil, från grund till tak.",
        },
        {
          title: "Fönster- och dörrbyten",
          description:
            "Moderna, energieffektiva fönster och dörrar som höjer både komforten och värdet på ditt hem. Professionell installation med garanti.",
        },
        {
          title: "Altaner och trädäck",
          description:
            "Vi bygger altaner, trädäck och uterum i hållbara material. Vi hjälper dig från grund till räcke.",
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
        "Vi har byggt om och byggt till hus från 1960-talets byggvåg i över 20 år och känner igen konstruktionerna: lättbetong, platta tak, kopplade fönster. Det gör att offerten blir rätt från början.",
        "Drygt 40 minuter från Kyrkogatan i Eskilstuna via Kvicksund. Vi planerar jobb i Västerås i hela dagar och tar med oss det vi behöver, så ingen dag går åt till att åka fram och tillbaka.",
        "Fast pris i skriftlig offert, och ROT-avdraget på arbetet draget på fakturan när du har rätt till det. Du ser exakt vad som ingår innan du tackar ja.",
        "En kontaktperson även när projektet behöver elektriker eller rörmokare. Vi bokar och samordnar, och du slipper hålla reda på tre olika firmor.",
      ]}
      ctaTitle="Vill du ha en offert på jobbet i Västerås?"
      ctaDescription="Skicka några rader om vad du vill göra, gärna med ett par bilder, så återkommer vi med en tid för ett kostnadsfritt platsbesök."
      heroImage="/hero-image.jpg"
      localTitle="Villa, radhus eller lägenhet i Västerås"
      localContent={[
        "Västerås är den största staden vi arbetar i, med drygt 131 000 invånare i tätorten och drygt 161 000 i kommunen. Stadsdelar som Bäckby med över 8 000 invånare, Råby och Hamre-Talltorp byggdes till stor del under 1960- och 70-talen, och i dessa områden gör vi flest fönsterbyten, altaner och tillbyggnader. Vid Mälaren, på Lillåudden och Öster Mälarstrand, är husen från 2000-talet och uppdragen gäller oftare inredningssnickeri.",
        "Resan från vår bas tar ungefär 41 minuter via riksväg 56 över Kvicksund, så vi bokar normalt hela dagar och samlar flera moment per besök. Behöver din tillbyggnad eller ditt fönsterbyte bygglov eller anmälan är det Västerås stad som handlägger ärendet, och vi tar fram de ritningar och beskrivningar som behövs för ansökan.",
      ]}
      localFaq={[
        {
          q: "Vi bor i bostadsrätt i Västerås och vill ha en ny innervägg. Vad behöver vi tänka på?",
          a: "Först föreningens regler. De flesta bostadsrättsföreningar vill godkänna ändringar som rör väggar, även innerväggar som inte är bärande, så be styrelsen om ett skriftligt ok innan vi börjar. Vi bygger väggen med regelstomme och gips, drar fram el i samarbete med elektriker om det behövs, och spacklar och målar så att den smälter in med rummet.",
        },
        {
          q: "Är det värt att byta fönster på ett 60-talshus i Västerås?",
          a: "Ofta ja. Fönster från 1960-talet är som regel kopplade tvåglasfönster med betydligt sämre isolering än dagens, och tätningslisterna har ofta gett upp. Nya fönster sänker uppvärmningskostnaden och minskar drag och buller. Vi mäter varje öppning, monterar fönstren med rätt isolering runt karmen och sätter nya foder både ute och inne.",
        },
        {
          q: "Hur lång tid tar en tillbyggnad på 15 kvadratmeter?",
          a: "Räkna med några veckors byggtid efter att bygglov eller anmälan är klar, beroende på grund, tak och hur mycket invändigt arbete som ingår. Eftersom vi kör från Eskilstuna lägger vi upp arbetet i sammanhängande dagar. Vi ger en tidplan tillsammans med offerten och säger till i god tid om något påverkar den.",
        },
      ]}
    />
  )
}
