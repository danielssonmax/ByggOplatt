import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Katrineholm",
  description:
    "Snickare i Katrineholm med fast pris. Uterum, altan, fönsterbyte och tillbyggnad i villaområden från 1960- till 80-talet som Nävertorp och Sandbäcken.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/katrineholm",
  },
  openGraph: {
    title: "Snickare Katrineholm | Bygg & Plattsättning",
    description:
      "Byggfirma i Katrineholm: vi planerar hela arbetsdagar från Eskilstuna och bygger altaner, uterum och tillbyggnader i villor från 60- till 80-talet.",
    url: "https://byggoplattsattning.se/bygg-snickeri/katrineholm",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriKatrineholm() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Katrineholm"
      heroTitle="Snickare i Katrineholm"
      heroDescription="Katrineholm byggdes ut kraftigt under 1960- till 1980-talen, och i villaområden som Sandbäcken, Nävertorp och Värmbol är husen nu i den ålder då fönster, altaner och fasader behöver ses över. Vi är snickare en timme bort, och vi planerar arbetet i hela dagar så att resan aldrig blir ditt problem."
      introTitle="Byggfirma för hus från den stora utbyggnaden"
      introContent={[
        "Katrineholm växte fram som järnvägsknut när Västra stambanan öppnade 1862 och Östra stambanan anslöt fyra år senare, men staden som de flesta bor i i dag byggdes mycket senare. Under 1960- till 1980-talen tillkom Sandbäcken, Nävertorp, Gersnäs, Lasstorp och Värmbol, och eftersom folkmängden sedan låg stilla i trettio år byggdes inte särskilt mycket nytt förrän efter 2010.",
        "Det betyder att en typisk villa i Katrineholm är 40 till 60 år gammal. Altanen är ofta den första som ger upp, sedan fönstren och till sist fasadpanelen på väderutsatta sidor. Många vill också ha ett uterum eller en tillbyggnad, eftersom husen från den tiden ofta har små entréer och kök. Vi gör alla dessa jobb, och vi börjar alltid med att titta på hur huset mår innan vi lämnar pris.",
        "Katrineholm är den ort vi täcker som ligger längst från vår bas, drygt sex mil via väg 230 och riksväg 56. Därför bokar vi sammanhängande arbetsdagar, beställer allt material till dig i förväg och ser till att de yrkesgrupper som behövs, som elektriker, kommer samma dagar som vi. Du får en offert med fast pris, och Katrineholms kommun handlägger bygglov om det behövs.",
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
        "Vi planerar Katrineholm i hela dagar. En timmes resa enkel väg är bara vettig om vi får mycket gjort på plats, så vi kommer med allt material och ett tydligt schema.",
        "Vi kan husen från 1960- till 80-talen. Lättbetongväggar, bjälklag med spånskivor, kopplade fönster och platta tak kräver sina egna lösningar, och vi har gjort dem i över 20 år.",
        "Fast pris i skriftlig offert, med arbete och material specificerade var för sig. Det gör det enkelt att se hur ROT-avdraget påverkar vad du betalar.",
        "En kontaktperson från första samtalet. Du behöver inte samordna rörmokare, elektriker och snickare själv; det gör vi, och vi håller tidplanen vi har lovat.",
      ]}
      ctaTitle="Planerar du altan, uterum eller tillbyggnad i Katrineholm?"
      ctaDescription="Berätta om huset så bokar vi ett platsbesök. Vi kommer gärna förbi när vi ändå har jobb i området, och offerten med fast pris är kostnadsfri."
      heroImage="/hero-image.jpg"
      localTitle="Sex mil bort, men hela dagen hos dig"
      localContent={[
        "Katrineholm har knappt 24 000 invånare i tätorten och är den sydligaste av våra sju orter. Resan från Kyrkogatan i Eskilstuna tar ungefär en timme, vilket påverkar hur vi lägger upp arbetet men inte vad det kostar: restiden ingår i det fasta priset, och vi tar betalt för jobbet, inte per dag. Vi tar hellre ett större jobb eller flera moment i följd här, som altan och fönsterbyte i samma vecka.",
        "Staden är byggd på en rutnätsplan från 1891, och i centrum finns stenhus som Kullbergska huset från början av 1900-talet. De flesta av våra kunder bor dock i villaområdena utanför centrum, där husen är från efterkrigstiden. Behöver projektet bygglov eller anmälan är det Katrineholms kommun som handlägger, och vi förbereder ritningar och beskrivning.",
      ]}
      localFaq={[
        {
          q: "Kostar det extra att ni kör från Eskilstuna till Katrineholm?",
          a: "Nej, inte som en separat post. Vi lämnar fast pris på jobbet, och i det ingår vår planering av resorna. Däremot lägger vi upp arbetet i hela dagar och gärna flera i följd, så att vi får mycket gjort per besök. För små jobb, som ett enstaka fönster, föreslår vi ibland att vi samordnar med andra uppdrag i Katrineholm.",
        },
        {
          q: "Vår altan från 80-talet är rutten. Byta allt eller bara trallen?",
          a: "Det beror på bärlinorna och plintarna. Är de friska kan vi byta trall och räcke och behålla stommen, vilket sparar både tid och pengar. Är reglarna mjuka eller plintarna skeva är det bättre att bygga nytt från marken, eftersom en ny trall på en dålig stomme bara skjuter problemet några år framåt. Vi avgör det vid platsbesöket.",
        },
        {
          q: "Behövs bygglov för ett uterum i Katrineholm?",
          a: "Ett uterum räknas normalt som en tillbyggnad och kräver då bygglov, men är det högst 15 kvadratmeter kan det ofta göras som en attefallstillbyggnad med en anmälan till Katrineholms kommun i stället. Vi hjälper dig med ritningar och ansökan och börjar bygga när beslutet är klart.",
        },
      ]}
    />
  )
}
