import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Köping",
  description:
    "Plattsättare i Köping: kakel och klinker i stenstaden från 1890-talet och i husen från 1960-talets utbyggnad. Behörigt våtrum, tätskikt enligt BBV, fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/koping",
  },
  openGraph: {
    title: "Plattsättning Köping | Bygg & Plattsättning",
    description:
      "Plattsättare i Köping: kakel och klinker i stenstaden från 1890-talet och i husen från 1960-talets utbyggnad. Behörigt våtrum, tätskikt enligt BBV, fast pris.",
    url: "https://byggoplattsattning.se/plattsattning/koping",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningKoping() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Köping"
      heroTitle="Plattsättning i Köping"
      heroDescription="Köping byggdes till stor del upp på nytt efter stadsbranden 1889, och sedan en gång till under 1960-talet när staden växte som mest. Båda epokerna ger tacksamma underlag för plattor. Vi kör hit från Eskilstuna på ungefär 40 minuter via E20 och väg 250."
      introTitle="Plattsättning i stenstaden vid Mälaren"
      introContent={[
        "Efter branden 1889 ritade arkitekten Theodor Dahl flera av byggnaderna i Köpings nya stenstad, och i centrum står därför många hus i tegel och sten från 1890-talet och framåt. De har tjocka väggar och ofta gjutna golv, och i dem sätter vi gärna både klassiskt kakel i stående format och moderna storformatsplattor, beroende på vilken karaktär du vill ha.",
        "Mellan 1960 och 1970 ökade folkmängden från knappt 17 000 till nästan 22 000, så 1960-talet är Köpings stora byggdecennium. Badrummen från den tiden har ofta originaltätskikt eller tätskikt från en tidigare renovering som inte motsvarar dagens krav. Vi river, lägger nytt tätskikt enligt Byggkeramikrådets branschregler och är behöriga för våtrum enligt kraven från Byggkeramikrådet och Säker Vatten.",
        "Vi arbetar i villor, radhus och lägenheter och sätter kakel, klinker, mosaik och natursten i badrum, kök, hallar och tvättstugor. Golvvärme under klinkern lägger vi där det passar, och vi reparerar också enstaka skadade plattor. Allt specificeras i en offert med fast pris innan vi börjar.",
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
        "Från Eskilstuna till Köping är det ungefär 42 kilometer, en dryg halvtimme på E20 och väg 250. Vi gör platsbesök innan offerten och arbetar sedan i hela dagar, så att resorna blir få och badrummet snabbt är i bruk igen.",
        "Vi känner till underlagen i både stenstaden och sextiotalshusen. Gamla gjutna golv och betongbjälklag är stabila, men behöver avjämnas och få rätt fall innan plattorna läggs, och det räknar vi in från början.",
        "Behörigt våtrum enligt Byggkeramikrådet och Säker Vatten, med tätskikt lagt enligt BBV och skriftlig dokumentation när arbetet är klart.",
        "Ett fast pris och en kontaktperson. Vi samordnar övriga hantverkare, håller tidplanen och säger ifrån i god tid om något oväntat dyker upp bakom det gamla kaklet.",
      ]}
      ctaTitle="Plattsättning i Köping, med fast pris"
      ctaDescription="Ring eller skriv till oss och berätta om rummet. Vi bokar ett platsbesök och lämnar en skriftlig offert utan kostnad."
      localTitle="Så arbetar vi med plattsättning i Köping"
      localContent={[
        "Vid platsbesöket tittar vi främst på golvet. I stenstadens hus ligger ofta ett gjutet golv under ytskiktet, i husen från 1960-talet ett betongbjälklag. Båda är bra att sätta plattor på, men vi kontrollerar om de är plana, om golvbrunnen är av en typ som går att ansluta till ett modernt tätskikt och var vatten- och avloppsstammarna går.",
        "Därefter bestämmer du format, färg och fog. Vi berättar vad som fungerar på just ditt underlag och vad som kräver extra förarbete. Offerten delar upp rivning, avjämning, tätskikt, plattsättning och material, så att du kan välja bort eller lägga till moment utan att hela priset blir otydligt.",
      ]}
      localFaq={[
        {
          q: "Vårt hus i centrala Köping är från 1890-talet. Är det något särskilt med att sätta kakel där?",
          a: "Underlagen är vanligtvis bra, men inte plana. Gjutna golv från den tiden kan ha både lutning och bucklor, och väggputsen kan sitta löst fläckvis. Vi kontrollerar det, avjämnar golvet med flytspackel och ser till att putsen är stabil eller sätter upp nya skivor innan kaklet kommer upp. Då håller resultatet lika länge som huset.",
        },
        {
          q: "Vi vill bara byta kaklet i badrummet, inte göra om allt. Går det?",
          a: "Det beror på hur gammalt tätskiktet är. I ett sextiotalsbadrum i Köping är det nästan alltid så att tätskiktet måste bytas när kaklet rivs, eftersom det inte går att ta bort plattorna utan att skada det. Är badrummet renoverat enligt nuvarande branschregler kan vissa delar ibland behållas, och det bedömer vi på plats.",
        },
        {
          q: "Hur lång tid tar det att kakla om ett badrum i Köping?",
          a: "Ett normalstort badrum tar vanligtvis tre till fyra veckor från rivning till färdigt, inklusive torktider för tätskikt och fog. Arbetar vi bara med torra rum, som ett stänkskydd i köket eller en hall, handlar det om en eller ett par dagar. Vi lämnar en tidplan tillsammans med offerten.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
