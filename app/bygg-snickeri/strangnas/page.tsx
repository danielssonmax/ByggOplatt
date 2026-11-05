import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Strängnäs",
  description:
    "Snickare och byggfirma i Strängnäs, en halvtimme från Eskilstuna via E20. Trähus vid Gyllenhjelmsgatan, villor efter branden 1871 och nya hem i Eldsundsviken.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/strangnas",
  },
  openGraph: {
    title: "Snickare Strängnäs | Bygg & Plattsättning",
    description:
      "Byggfirma i Strängnäs: tillbyggnad, fönster, altan och innerväggar. Vi jobbar i gamla trästaden, i villakvarteren och i Eldsundsviken.",
    url: "https://byggoplattsattning.se/bygg-snickeri/strangnas",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriStrangnas() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Strängnäs"
      heroTitle="Snickare i Strängnäs"
      heroDescription="Strängnäs har trähus längs Gyllenhjelmsgatan från 1600-talet, kvarter som byggdes upp efter branden 1871 och helt nya bostäder i Eldsundsviken. Vi är snickare och byggfirma en halvtimme bort via E20, och vi anpassar både metod och offert efter vilket av dessa hus du bor i."
      introTitle="Tre sorters hus, en byggfirma"
      introContent={[
        "Strängnäs gatunät är i stort sett detsamma som vid 1600-talets mitt, men branden 1871 tog stora delar av den nordöstra staden. Det ger en stad i lager: handbyggda trähus nära domkyrkan, stenhus och villor från decennierna efter branden, och sedan 2000-talets bostäder på det gamla militärområdet i Eldsundsviken. Vilket lager du bor i avgör hur vi planerar jobbet.",
        "Många som flyttar till Strängnäs pendlar till Stockholm med Svealandsbanan och vill ha ett hus som fungerar för familjen på vardagarna. Då handlar det ofta om att bygga till ett rum, öppna upp mellan kök och vardagsrum, byta fönster som drar eller bygga ett uterum som förlänger säsongen. Vi tar hela jobbet, inklusive samordning av el och VVS.",
        "Vi kör E20 från Eskilstuna, drygt tre mil och ungefär 26 minuter, så Strängnäs är en ort där vi gärna bokar hela arbetsdagar. Platsbesöket är kostnadsfritt, och du får en skriftlig offert med fast pris. Kräver projektet bygglov eller anmälan är det Strängnäs kommun som handlägger, och vi hjälper till med underlaget.",
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
        "Vi vet skillnaden mellan ett hus från 1600-talet och ett från 1890-talet. Virke, grunder och fönster skiljer sig åt, och det gör också sättet vi renoverar på.",
        "E20 har motorvägsstandard förbi Strängnäs sedan 2004, och från vår bas tar resan en knapp halvtimme. Vi planerar fulla dagar på plats, så bygget går framåt varje dag vi är där.",
        "Fast pris och en kontaktperson. Du ringer samma person för frågor om tidplan, material och faktura, från första mötet till slutbesiktning.",
        "Över 20 års erfarenhet av tillbyggnader, fönsterbyten och innerväggar, och ROT-avdrag på arbetskostnaden draget direkt på fakturan när du har rätt till det.",
      ]}
      ctaTitle="Ett hus i Strängnäs som behöver en snickare?"
      ctaDescription="Hör av dig med några rader om huset och vad du vill göra. Vi bokar ett kostnadsfritt platsbesök och återkommer med fast pris."
      heroImage="/hero-image.jpg"
      localTitle="Så jobbar vi i stiftsstaden"
      localContent={[
        "Strängnäs är stiftsstad vid Mälaren med drygt 15 000 invånare i tätorten och närmare 40 000 i kommunen. Vi arbetar i hela tätorten, från trähusen nedanför domkyrkan till villorna ut mot Tosterön, och i Eldsundsviken där husen är så nya att uppdragen oftare gäller altaner, förråd och extra förvaring än renovering.",
        "I den gamla trästaden kan kommunen ställa särskilda krav på fasader och fönster när ett hus har kulturhistoriskt värde, och vi tar reda på vad som gäller innan vi lämnar offert. Resan från Kyrkogatan i Eskilstuna går via E20 och tar ungefär 26 minuter, vilket gör att vi utan problem kan komma på ett extra besök om något behöver stämmas av under bygget.",
      ]}
      localFaq={[
        {
          q: "Vi har köpt ett äldre trähus i Strängnäs. Vad bör vi göra först?",
          a: "Låt oss titta på grunden, syllarna och fönstren innan ni planerar något stort. I hus från tiden före branden 1871, och även i många från decennierna efter, är det sådant som avgör vad en renovering kostar. Vi gör ett kostnadsfritt platsbesök och ger er en prioriteringslista, så att pengarna läggs där de gör mest nytta.",
        },
        {
          q: "Kan ni bygga till ett rum på en villa i Strängnäs?",
          a: "Ja. En tillbyggnad kräver normalt bygglov från Strängnäs kommun, medan en attefallstillbyggnad på upp till 15 kvadratmeter oftast räcker med en anmälan. Vi ritar, hjälper till med ansökan och bygger sedan hela tillbyggnaden inklusive tak, fasad, fönster och invändiga ytor, med el och VVS inbokade när de behövs.",
        },
        {
          q: "Hur många dagar är ni på plats när ni bygger en altan i Strängnäs?",
          a: "En altan i normal storlek tar oftast två till fyra arbetsdagar beroende på storlek, markförhållanden och om det ska vara räcke eller trappa. Eftersom vi kör från Eskilstuna bokar vi hela dagar i följd, så att ni inte har en halvfärdig altan över flera veckor.",
        },
      ]}
    />
  )
}
