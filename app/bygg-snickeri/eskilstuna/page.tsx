import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Eskilstuna",
  description:
    "Snickare och byggfirma i Eskilstuna med bas på Kyrkogatan. Tillbyggnad, fönsterbyte, altan och innerväggar i villor från 1940- till 70-talet. Fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/eskilstuna",
  },
  openGraph: {
    title: "Snickare Eskilstuna | Bygg & Plattsättning",
    description:
      "Byggfirma på hemmaplan i Eskilstuna: tillbyggnader, fönsterbyten, altaner och innerväggar med fast pris och kort väg till platsbesök.",
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
      heroDescription="Vi är snickare och byggfirma med bas på Kyrkogatan i Gamla staden, så Eskilstuna är den ort där vi har kortast väg till jobbet. Vi bygger till, byter fönster och dörrar, bygger altaner och sätter upp innerväggar i allt från 40-talsvillor till lägenheter i centrum, med en kontaktperson från första mötet till besiktning."
      introTitle="Byggfirman som utgår från Gamla staden"
      introContent={[
        "Eskilstuna byggdes ut på allvar efter 1907, när Nyfors samt Fors och Klosters församlingar blev en del av staden, och byggandet var som mest intensivt mellan krigen och under 1940- och 50-talen. Det märks i villaområdena runt centrum: många hus har kvar originalfönster, små kök och en planlösning som passade en annan tid. Det är sådana hus vi oftast får frågor om, och de tål att byggas om när man gör det med respekt för stommen.",
        "Det vanligaste uppdraget är att skapa mer plats. En tillbyggnad på baksidan, ett uterum mot trädgården eller en vind som blir sovrum ger ofta mer för pengarna än att flytta. Vi hjälper dig från första skissen, går igenom vad som normalt kräver bygglov och vad som kan göras som attefallsåtgärd, och tar fram en offert med fast pris innan något rivs.",
        "Som hemmaplan har Eskilstuna en praktisk fördel: vi kan komma förbi på en timme för att mäta, stämma av materialval eller lösa något oväntat under bygget utan att det kostar en hel dag. Vi tar också gärna mindre jobb här, som ett nytt staket, byte av ytterdörr eller ett par nya innerväggar, eftersom vi ändå har kort väg.",
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
        "Vår bas ligger på Kyrkogatan 7C, intill Fors kyrka. Till de flesta villaområden i Eskilstuna är det under en kvart, vilket betyder täta platsbesök, snabba beslut om material och ingen restid som läggs på din faktura.",
        "Vi känner husen från 1940- och 50-talen: timmerbjälklag, puts på trä, kopplade fönster. Vi vet vad som går att behålla och vad som måste bytas, och räknar in det i offerten i stället för som tillägg.",
        "En kontaktperson från offert till färdigt jobb. Behövs elektriker eller rörmokare för tillbyggnaden samordnar vi dem, så att du slipper jaga olika firmor.",
        "Fast pris i en tydlig offert, med ROT-avdraget på arbetskostnaden draget på fakturan när du har rätt till det. Inga överraskningar när bygget är klart.",
      ]}
      ctaTitle="Ska vi titta på huset?"
      ctaDescription="Ring eller mejla, så bokar vi ett platsbesök i Eskilstuna. Du får en offert med fast pris, utan kostnad och utan förpliktelser."
      heroImage="/hero-image.jpg"
      localTitle="Snickeri på hemmaplan"
      localContent={[
        "Eskilstuna är vår hemstad, och det är här vi gör flest jobb. Staden har drygt 70 000 invånare i tätorten och ett bostadsbestånd där mycket byggdes före 1975, eftersom folkmängden toppade 1970 och sedan sjönk när industrierna lades ned. För dig som husägare innebär det att fönster, fasadpanel och takfot ofta är inne på sin andra livslängd, och att en tillbyggnad behöver möta ett hus med egna mått och egna avvikelser.",
        "Vi jobbar i hela kommunen, från villorna runt Eskilstunaån till de nyare områdena i utkanten. Ett platsbesök tar oss normalt ett par timmar inklusive resa, och vi kan ofta komma redan samma vecka. Behöver ditt projekt bygglov eller anmälan är det Eskilstuna kommun som handlägger ärendet, och vi hjälper dig att ta fram de ritningar som behövs.",
      ]}
      localFaq={[
        {
          q: "Behöver jag bygglov för en tillbyggnad i Eskilstuna?",
          a: "Normalt ja. En tillbyggnad av ett en- eller tvåbostadshus kräver som regel bygglov, men en attefallstillbyggnad på upp till 15 kvadratmeter kan göras med en anmälan i stället. Det är Eskilstuna kommun som handlägger båda. Vi går igenom vad som gäller för just ditt hus vid platsbesöket och hjälper till med ritningarna.",
        },
        {
          q: "Kan ni byta fönster i en 40-talsvilla utan att den tappar sin karaktär?",
          a: "Ja, det är ett av våra vanligaste uppdrag i Eskilstunas äldre villaområden. Vi mäter varje fönsteröppning för sig, eftersom måtten sällan är lika i hus från den tiden, och väljer fönster med spröjs och profiler som liknar originalen men med modern isolering. Foder och smygar anpassas på plats.",
        },
        {
          q: "Hur snabbt kan ni komma på platsbesök?",
          a: "Eftersom vi utgår från Kyrkogatan i Gamla staden kan vi oftast komma inom några dagar, ibland samma vecka. Besöket är kostnadsfritt. Vi mäter, tittar på hur huset är byggt och diskuterar vad du vill uppnå, och återkommer sedan med en skriftlig offert med fast pris.",
        },
      ]}
    />
  )
}
