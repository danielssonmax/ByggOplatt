import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Torshälla",
  description:
    "Snickare i Torshälla, tolv minuter från vår bas i Eskilstuna. Varsam renovering av trähus i gamla staden, fönsterbyte och altaner i 60- till 80-talsvillor.",
  alternates: {
    canonical: "https://byggoplattsattning.se/bygg-snickeri/torshalla",
  },
  openGraph: {
    title: "Snickare Torshälla | Bygg & Plattsättning",
    description:
      "Byggfirma och snickare i Torshälla. Vi renoverar trähus i den gamla stadskärnan och bygger till, byter fönster och bygger altaner i villaområdena.",
    url: "https://byggoplattsattning.se/bygg-snickeri/torshalla",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriTorshalla() {
  return (
    <ServiceCityPage
      serviceName="Bygg & Snickeri"
      cityName="Torshälla"
      heroTitle="Snickare i Torshälla"
      heroDescription="Torshälla är den äldsta staden i Rekarnebygden, med stadsprivilegier från 1317 och en småstadskärna av trähus som byggdes upp igen efter branden 1798. Vi är snickare med tolv minuters resväg hit och tar både det varsamma arbetet i gamla staden och altaner, fönsterbyten och tillbyggnader i villaområdena runt omkring."
      introTitle="Trähus som kräver varsamma händer"
      introContent={[
        "Kvarteren kring Bergströmska gården är de äldsta bevarade delarna av Torshällas småstadsbebyggelse. Husen där är byggda av trä i omgångar, ofta med stommar som har satt sig och fönster som är tillverkade för hand. Att renovera ett sådant hus handlar mindre om att byta ut och mer om att laga, komplettera och bygga vidare på det som finns, och om att välja material som husen tål.",
        "Runt den gamla kärnan ligger villa- och flerbostadsområden från 1960- till 1980-talen. Där är frågorna andra: ett uterum mot kvällssolen, en altan i rätt höjd mot gräsmattan, nya fönster som stänger vinterdraget ute. Vi gör båda sorternas jobb och vet att de kräver olika verktyg, olika material och olika sätt att räkna på tid.",
        "Oavsett om huset är från 1700-talet eller 1970-talet får du en offert med fast pris, en kontaktperson och ett bygge där vi städar efter oss varje dag. Behövs bygglov eller anmälan är det Eskilstuna kommun som handlägger, eftersom Torshälla ingår i kommunen sedan 1971, och vi vet vad ansökan behöver innehålla.",
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
        "Knappt en mil från vår bas i Eskilstuna och tolv minuter med bil. Vi kan komma förbi för ett snabbt besök mitt i ett pågående jobb, och material som saknas hämtas på en halvtimme.",
        "Erfarenhet av äldre trähus. I gamla Torshälla är inget i våg, och vi anpassar varje foder, varje list och varje fönsterbåge till huset i stället för tvärtom.",
        "Vi tar hand om helheten, från skiss och eventuell bygglovsansökan till sista strykningen. Elektriker och rörmokare bokar vi in när tillbyggnaden behöver det.",
        "Över 20 år i branschen och ett fast pris som håller. Du vet vad altanen eller tillbyggnaden kostar innan vi slår i första spiken.",
      ]}
      ctaTitle="Dags att ta tag i huset i Torshälla?"
      ctaDescription="Berätta vad du vill göra, så kommer vi förbi och tittar. Platsbesöket är kostnadsfritt, och du får en offert med fast pris inom några dagar."
      heroImage="/hero-image.jpg"
      localTitle="Från rådhuset till villakvarteren"
      localContent={[
        "Torshälla ligger vid åns första fall före Mälaren, knappt en mil norr om vår bas, och är en av de orter vi besöker oftast. Staden har drygt 9 000 invånare och en kärna som byggdes upp igen efter stadsbranden 1798; rådhuset vid Rådhustorget stod klart 1833. I de kvarteren räknar vi alltid med extra tid för anpassning, eftersom äldre virke, gamla grunder och handgjorda fönster sällan följer några standardmått.",
        "Utanför centrum, mot Nyby bruk och Mälarbaden, är husen yngre och uppdragen handlar oftare om altaner, uterum, fönsterbyten och tillbyggnader. Resan från Kyrkogatan tar tolv minuter via E20, så vi kan planera kortare arbetspass här utan att restiden äter upp dagen. Bygglov och anmälningar handläggs av Eskilstuna kommun.",
      ]}
      localFaq={[
        {
          q: "Får man byta fönster hur som helst på ett gammalt hus i Torshälla?",
          a: "Inte alltid. I äldre bebyggelse av kulturhistoriskt värde kan kommunen ställa krav på utformning, till exempel att nya fönster ska likna de gamla i indelning och material. Det är Eskilstuna kommun som avgör vad som gäller för ditt hus. Ofta är det bästa att renovera de befintliga bågarna och komplettera med energiglas.",
        },
        {
          q: "Kan ni bygga en altan på en villa från 70-talet?",
          a: "Ja, det är ett vanligt jobb i Torshällas villaområden från 1960- till 80-talen. Vi bygger altaner och trädäck i tryckimpregnerat virke eller lärk, med rätt lutning för avrinning och plintar som står stadigt i marken. En altan nära marken behöver normalt inget bygglov, men blir den hög eller får tak kan det krävas, och det kontrollerar vi åt dig.",
        },
        {
          q: "Hur hanterar ni ett hus där golven lutar och väggarna inte är raka?",
          a: "Vi mäter upp rummet innan vi bygger något och arbetar efter husets verkliga mått i stället för ritningens. Nya innerväggar, lister och inbyggda hyllor passas in mot befintliga ytor, och golv som lutar kan rätas upp med reglar eller avjämning innan nytt golv läggs. Det tar lite längre tid, och det räknar vi in i offerten från början.",
        },
      ]}
    />
  )
}
