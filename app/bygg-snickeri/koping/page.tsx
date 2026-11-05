import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Köping",
  description:
    "Snickare och byggfirma i Köping, 40 minuter från Eskilstuna. Fönster, altaner och tillbyggnader i 60-talsvillor samt jobb i stenstaden från 1890-talet.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/koping",
  },
  openGraph: {
    title: "Snickare Köping | Bygg & Plattsättning",
    description:
      "Byggfirma i Köping med fast pris: tillbyggnader, fönsterbyten, altaner och innerväggar i husen från stadens byggvåg på 1960-talet.",
    url: "https://byggoplattsattning.se/bygg-snickeri/koping",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriKoping() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Köping"
      heroTitle="Snickare i Köping"
      heroDescription="Efter branden 1889 byggdes Köping upp som stenstad, och på 1960-talet växte staden med nästan 5 000 invånare på tio år. De två perioderna satte sin prägel på husen, och det är i dem vi jobbar: fönster, altaner, tillbyggnader och innerväggar, 40 minuter från vår bas via E20 och väg 250."
      introTitle="Stenstad och sextiotalsvillor"
      introContent={[
        "Köping är Västmanlands näst största tätort med drygt 18 000 invånare, en stad vid Mälaren som har haft stadsprivilegier sedan 1474. Centrum präglas av stenhusen som ritades efter branden 1889, många av dem av arkitekten Theodor Dahl. I sådana hus är snickeriet ofta invändigt: nya innerväggar i stora lägenheter, platsbyggd förvaring, renovering av gamla trägolv och trappor.",
        "Runt centrum ligger villaområdena från 1960-talet, det decennium då Köping växte som mest. Husen från den tiden börjar nu behöva nya fönster, nya altaner och ibland en tillbyggnad som ger ett extra sovrum eller ett större kök. Vi tar hela jobbet från skiss till färdig yta och bokar in elektriker och rörmokare när tillbyggnaden kräver det.",
        "Från vår bas på Kyrkogatan i Eskilstuna tar resan ungefär 40 minuter via E20 och väg 250. Vi planerar därför hela dagar i Köping och beställer virke, fönster och dörrar direkt till adressen. Du får en offert med fast pris efter ett kostnadsfritt platsbesök, och behövs bygglov är det Köpings kommun som handlägger ärendet.",
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
        "Fyrtio minuter från Eskilstuna via E20 betyder att vi kan vara hos dig till sju på morgonen och jobba hela dagen. Vi bokar sammanhängande dagar, så bygget går i ett.",
        "Vi är vana vid både 1890-talets stenhus och 1960-talets villor. Det är olika konstruktioner med olika problem, och vi räknar på rätt sätt för rätt hus.",
        "Fast pris, i en offert där arbete och material är separerade. Du ser hur ROT-avdraget slår på just ditt jobb innan du bestämmer dig.",
        "En kontaktperson hela vägen, även när det behövs el eller VVS. Vi samordnar, du behöver bara prata med oss.",
      ]}
      ctaTitle="Dags att se över huset i Köping?"
      ctaDescription="Ring eller mejla så bokar vi ett platsbesök utan kostnad. Du får en skriftlig offert med fast pris och en tidplan som håller."
      heroImage="/hero-image.jpg"
      localTitle="Så jobbar vi i Köping"
      localContent={[
        "Köping ligger vid Mälarens västra del, 42 kilometer från vår bas. Staden ligger vid E18 och har station på Mälarbanan, så många som bor här pendlar till Västerås eller Örebro och vill ha ett hus som sköter sig självt. Vi gör mycket förebyggande arbete i Köping: byte av fasadpanel på utsatta sidor, nya fönster innan de gamla har ruttnat och altaner som byggs rätt från början.",
        "Folkmängden i Köping toppade 1970 och sjönk sedan fram till 2000, vilket betyder att det byggdes få hus under flera decennier. De flesta villor är alltså från 1960-talet eller tidigare, och de har ofta renoverats i omgångar. Vi dokumenterar vad vi hittar bakom paneler och under golv och tar beslut tillsammans med dig i stället för att gissa. Köpings kommun handlägger bygglov och anmälningar.",
      ]}
      localFaq={[
        {
          q: "Vi bor i ett stenhus i centrala Köping. Gör ni snickeriarbeten inomhus?",
          a: "Ja. I stenhusen från tiden efter branden 1889 handlar det ofta om innerväggar för att dela ett stort rum, platsbyggda garderober och bokhyllor, renovering av trappor eller nya trägolv. Vi anpassar lister och foder till husets befintliga profiler, så att det nya ser ut som om det alltid har funnits där.",
        },
        {
          q: "Hur vet jag om fönstren på vår 60-talsvilla i Köping behöver bytas?",
          a: "Titta på bågarnas nederkant och på kittet. Är träet mjukt när du trycker med en kniv, eller syns imma mellan glasen i kopplade fönster, är det dags. Går bågarna fortfarande att stänga tätt kan renovering med nya tätningslister och energiglas räcka några år till. Vi bedömer fönster för fönster vid platsbesöket och ger två alternativ i offerten.",
        },
        {
          q: "Kan ni samordna el och VVS när ni bygger till?",
          a: "Ja, det ingår i vårt sätt att jobba. När tillbyggnaden i Köping behöver nya eluttag, belysning eller vatten bokar vi elektriker och rörmokare till rätt dag i bygget, så att du slipper ringa runt. Du har fortfarande en kontaktperson, och deras arbete finns med i vår offert.",
        },
      ]}
    />
  )
}
