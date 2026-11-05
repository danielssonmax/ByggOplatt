import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Arboga",
  description:
    "Snickare i Arboga, knappt 40 minuter från Eskilstuna via E20. Varsamt snickeri i medeltidsstadens trähus vid Arbogaån samt fönster, altaner och tillbyggnader.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/arboga",
  },
  openGraph: {
    title: "Snickare Arboga | Bygg & Plattsättning",
    description:
      "Byggfirma i Arboga: specialsnickeri och fönster i den gamla stadskärnan, tillbyggnader och altaner i villaområdena. Fast pris efter kostnadsfritt besök.",
    url: "https://byggoplattsattning.se/bygg-snickeri/arboga",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriArboga() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Arboga"
      heroTitle="Snickare i Arboga"
      heroDescription="Arboga har kvar sin medeltida gatustruktur, och längs Arbogaån står trä- och stenhus som i kvarteret Kungsgården vid Gamla bron. Vi är snickare knappt 40 minuter bort via E20, med erfarenhet av både sådana hus och av villorna utanför kärnan där altaner, fönster och tillbyggnader står på listan."
      introTitle="Snickeri i en av Sveriges äldsta städer"
      introContent={[
        "Arboga var stad redan på 1200-talet, och det är här Sveriges första riksdag traditionellt sägs ha hållits, vid Arboga möte 1435. Stadskärnan följer fortfarande medeltidens gator, med hus som har byggts om i århundraden. I sådana hus börjar varje jobb med att vi tar reda på vad som faktiskt finns bakom panelen, eftersom ritningar sällan stämmer och varje generation har lämnat egna lösningar efter sig.",
        "Specialsnickeri är det vi gör mest i gamla Arboga: fönster som tillverkas eller renoveras efter husets egna mått, lister och foder som profileras lika de befintliga, trappor och räcken som passas in i rum där inget är rakt. Kommunen kan ställa särskilda krav på fasader och fönster i bebyggelse med kulturhistoriskt värde, och vi tar reda på vad som gäller innan vi lämnar pris.",
        "Utanför kärnan är husen yngre och uppdragen mer vardagliga: en altan mot söder, nya fönster, en tillbyggnad för ett extra rum eller innerväggar som ger barnen varsitt. Vi kör E20 från Eskilstuna, 44 kilometer på knappt 40 minuter, och bokar hela dagar i Arboga. Offerten har fast pris, och bygglov handläggs av Arboga kommun.",
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
        "Vana vid hus där inget är i våg. I Arbogas äldre kvarter mäter vi varje öppning och varje vägg för sig och bygger efter huset, inte efter standardmått.",
        "E20 rakt västerut från vår bas, knappt 40 minuter. Vi lägger upp jobben i Arboga som hela dagar och har med oss material och verktyg för hela momentet.",
        "Över 20 år i branschen och ett fast pris som vi står för. Hittar vi något oväntat bakom en panel pratar vi med dig innan vi gör något, i stället för att skicka en extra faktura.",
        "En kontaktperson och samordning av elektriker och rörmokare när tillbyggnaden behöver det. Du slipper vara byggledare i ditt eget hem.",
      ]}
      ctaTitle="Har du ett hus i Arboga som behöver en snickare?"
      ctaDescription="Hör av dig med några rader om huset, gärna hur gammalt det är och vad du vill göra. Vi kommer på ett kostnadsfritt besök och lämnar fast pris."
      heroImage="/hero-image.jpg"
      localTitle="Mellan Gamla bron och villakvarteren"
      localContent={[
        "Arboga har knappt 11 000 invånare i tätorten och är en av de mindre orter vi arbetar i, men också en av de mest intressanta för en snickare. Längs ån ligger hus som har stått i flera hundra år, med trästommar som har rört sig och stammar som bytts i omgångar. Att bygga om i ett sådant hus kräver tid för uppmätning och ett material som rör sig med huset i stället för mot det.",
        "E18 och E20 möts i Arboga, och från Kyrkogatan i Eskilstuna tar resan 37 minuter. Vi bokar därför hela arbetsdagar och tar gärna flera moment i samma hus, som fönster och altan under samma vecka. Är huset kulturhistoriskt värdefullt kan Arboga kommun ställa krav på utformningen, och kommunen handlägger också bygglov och anmälningar.",
      ]}
      localFaq={[
        {
          q: "Kan ni renovera gamla fönster i stället för att byta dem?",
          a: "Ja, och i Arbogas äldre hus är det ofta det bästa alternativet. Vi tar ut bågarna, byter rötskadade delar, kittar om och monterar nya tätningslister, och kan komplettera med en innerbåge med energiglas. Resultatet håller tätt och behåller husets utseende, vilket kommunen ofta förespråkar i kulturhistoriskt värdefull bebyggelse.",
        },
        {
          q: "Golven lutar i vårt hus vid Arbogaån. Går det att lägga nytt golv?",
          a: "Ja, men först behöver vi avgöra varför det lutar. Har stommen satt sig färdigt för länge sedan kan golvet rätas upp med reglar eller flytspackel innan nytt golv läggs. Rör sig huset fortfarande väljer vi lösningar som tål det, som brädgolv i stället för styva skivgolv. Vi tittar på bjälklaget vid platsbesöket.",
        },
        {
          q: "Vi vill bygga altan på en villa i Arboga. Hur går det till?",
          a: "Vi mäter upp och ritar ett förslag, stämmer av om altanen behöver bygglov hos Arboga kommun, vilket normalt bara gäller om den blir hög eller får tak, och lämnar sedan fast pris. Själva bygget med plintar, bärlinor, trall och räcke tar oftast två till fyra dagar, som vi bokar i följd.",
        },
      ]}
    />
  )
}
