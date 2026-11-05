import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Torshälla",
  description:
    "Plattsättare i Torshälla, tolv minuter från vår bas i Eskilstuna. Kakel, klinker och mosaik i gamla trähus och i husen från 1960–80-talen. Behörigt våtrum.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/torshalla",
  },
  openGraph: {
    title: "Plattsättning Torshälla | Bygg & Plattsättning",
    description:
      "Plattsättare i Torshälla, tolv minuter från vår bas i Eskilstuna. Kakel, klinker och mosaik i gamla trähus och i husen från 1960–80-talen. Behörigt våtrum.",
    url: "https://byggoplattsattning.se/plattsattning/torshalla",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningTorshalla() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Torshälla"
      heroTitle="Plattsättning i Torshälla"
      heroDescription="Torshälla ligger en kort bilresa norr om vår bas, och vi är ofta här. Staden fick sina privilegier redan 1317, och i kvarteren kring Bergströmska gården sätter vi plattor i hus där inget golv är i våg och inga väggar är helt raka. Det kräver andra lösningar än i ett nybyggt badrum."
      introTitle="Plattsättning i en småstad med många årsringar"
      introContent={[
        "Torshälla har två tydliga typer av hus. Runt Rådhustorget och ån står den gamla småstadsbebyggelsen, som till stora delar byggdes upp igen efter stadsbranden 1798. Utanför den kärnan ligger villa- och flerbostadsområdena från 1960- till 1980-talen. De två miljöerna ställer helt olika krav på en plattsättare, och vi anpassar både metod och materialval efter vilket hus vi står i.",
        "I trähusen rör sig stommen med årstiderna, och golven lutar ofta mot mitten av rummet. Där väljer vi gärna mindre format eller mosaik, som följer med i små ojämnheter, och vi bygger upp golvet med flytspackel innan klinkern läggs. Tätskiktet i badrum läggs enligt Byggkeramikrådets branschregler, och vi är behöriga att bygga våtrum enligt kraven från både Byggkeramikrådet och Säker Vatten.",
        "I husen från 60-, 70- och 80-talen är underlaget oftast betong eller lättbetong, och där fungerar storformat och raka fogar bra. Många av de badrummen har nu nått en ålder där tätskiktet bör bytas, och då passar det att göra om plattsättningen samtidigt. Vi hjälper dig att välja material och lämnar en offert med fast pris.",
      ]}
      features={[
        {
          title: "Kakel och klinker",
          description:
            "Vi sätter alla typer av kakel och klinker i olika format och stilar. Från klassiskt vitt kakel till moderna storformatplattor.",
        },
        {
          title: "Mosaik",
          description:
            "Skapa unika designelement med mosaik. Vi har erfarenhet av att arbeta med alla typer av mosaikplattor för vackra detaljer.",
        },
        {
          title: "Natursten",
          description:
            "Marmor, granit, skiffer och andra naturstenar kräver specialkunskap. Vi har erfarenheten som krävs för ett perfekt resultat.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "I våtrum applicerar vi alltid tätskikt enligt Byggkeramikrådets branschregler för att säkerställa ett vattentätt resultat.",
        },
        {
          title: "Golvvärme",
          description:
            "Vi installerar golvvärme under klinker för ett behagligt inomhusklimat. Perfekt för badrum och andra utrymmen.",
        },
        {
          title: "Reparation och renovering",
          description:
            "Vi utför även reparationer och byte av enstaka plattor samt renovering av befintliga plattlagda ytor.",
        },
      ]}
      whyChooseUsContent={[
        "Från Kyrkogatan i Eskilstuna är det knappt en mil till Torshälla, ungefär tolv minuter med bil. Vi kan komma förbi för ett platsbesök samma vecka du hör av dig, och korta transporter håller nere kostnaden.",
        "Vi har arbetat i gamla trähus under många år och vet hur man sätter plattor på underlag som rör sig. Rätt förarbete betyder att fogarna håller även när huset sätter sig lite till.",
        "Behörigt våtrum. Tätskikt och plattsättning i badrum utförs enligt Byggkeramikrådets branschregler, med dokumentation som du kan visa upp för försäkringsbolaget och vid en försäljning.",
        "Fast pris i en skriftlig offert, och samma kontaktperson genom hela jobbet. Vi är ett litet företag med över 20 år i branschen, och det är vi själva som står i ditt badrum.",
      ]}
      ctaTitle="Plattsättare till huset i Torshälla?"
      ctaDescription="Berätta vilket hus det gäller och vad du vill göra, så kommer vi förbi, tittar på underlaget och lämnar en offert med fast pris."
      localTitle="Så går ett plattsättningsjobb till i Torshälla"
      localContent={[
        "Vi börjar med att titta på huset. I de äldre kvarteren kontrollerar vi vad bjälklaget består av, hur mycket golvet lutar och om det finns gamla skikt av linoleum, spånskivor eller tidigare kakel som måste bort. Det avgör hur tjockt golvet kan byggas upp utan att tröskeln till nästa rum blir för hög, vilket är en vanlig fråga i små hus med låga rum.",
        "I lägenheterna och villorna från 1960- till 1980-talen är frågorna andra. Där tittar vi på om golvbrunnen behöver bytas, om det finns golvvärme att ta hänsyn till och hur väggarna är uppbyggda bakom det gamla kaklet. När vi har svaren får du en offert där rivning, förarbete, tätskikt och plattsättning är specificerade var för sig.",
      ]}
      localFaq={[
        {
          q: "Golvet i mitt gamla hus i Torshälla lutar flera centimeter. Går det att sätta klinker ändå?",
          a: "Ja, nästan alltid. Vi bygger upp golvet med flytspackel tills det är i våg, eller så planar vi ut lutningen så att den inte syns. I badrum måste det dessutom luta rätt mot brunnen, vilket vi lägger in i samma arbetsmoment. Hur mycket som går att göra beror på takhöjd och trösklar, och det ser vi på plats.",
        },
        {
          q: "Passar storformatsplattor i ett trähus?",
          a: "Det kan fungera på väggar med stabil skivkonstruktion, men på golv som rör sig rekommenderar vi ofta mindre format. Stora plattor kräver ett plant och stumt underlag, annars riskerar de att spricka i fogarna. Mosaik eller plattor upp till 30 x 60 cm följer med i små rörelser betydligt bättre.",
        },
        {
          q: "Vi bor i ett hus från 1970-talet utanför centrum. Behöver tätskiktet bytas när vi byter kakel?",
          a: "Om badrummet har sitt ursprungliga tätskikt, eller ett som är lagt före nuvarande branschregler, bör det bytas när plattorna ändå rivs. Det gamla kaklet kan inte tas bort utan att tätskiktet skadas, så det går sällan att behålla. Vi lägger nytt enligt Byggkeramikrådets regler och dokumenterar arbetet.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
