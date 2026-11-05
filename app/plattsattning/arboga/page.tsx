import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Arboga",
  description:
    "Plattsättare i Arboga: kakel, klinker och mosaik i medeltidsstadens trä- och stenhus och i nyare villor. Flytspackling av sneda golv och behörigt våtrum.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/arboga",
  },
  openGraph: {
    title: "Plattsättning Arboga | Bygg & Plattsättning",
    description:
      "Plattsättare i Arboga: kakel, klinker och mosaik i medeltidsstadens trä- och stenhus och i nyare villor. Flytspackling av sneda golv och behörigt våtrum.",
    url: "https://byggoplattsattning.se/plattsattning/arboga",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningArboga() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Arboga"
      heroTitle="Plattsättning i Arboga"
      heroDescription="Arboga har kvar sin medeltida gatustruktur, och längs ån står äldre trä- och stenhus som Kungsgården vid Gamla bron. I ett sådant hus är inget golv i våg, och det är något vi är vana vid. Från Eskilstuna är det knappt 40 minuter längs E20."
      introTitle="Att sätta plattor i en stad från 1200-talet"
      introContent={[
        "Kvarteren längs Arbogaån består av trä- och stenhus som har byggts om i omgångar genom åren. Golven har satt sig, väggarna lutar och vatten- och avloppsstammarna är ofta bytta vid olika tillfällen. Det gör plattsättning till ett precisionsarbete där förarbetet avgör hur länge resultatet håller.",
        "Vi börjar alltid med att få underlaget rätt. Golv byggs upp med flytspackel tills de är plana, och i badrum lägger vi samtidigt rätt fall mot brunnen. På väggar som inte är raka väljer vi hellre mindre format eller mosaik än storformat, eftersom små plattor följer med i ojämnheter utan att det syns. Tätskiktet läggs enligt Byggkeramikrådets branschregler, och vi uppfyller kraven för behörigt våtrum från både Byggkeramikrådet och Säker Vatten.",
        "Arboga är också en industriort, och utanför den gamla kärnan finns villor och flerbostadshus av yngre datum där underlagen är enklare. Vi sätter kakel, klinker och natursten i badrum, kök och hallar, lägger golvvärme under klinker och byter spruckna plattor. Oavsett hus får du en offert med fast pris innan vi börjar.",
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
        "Arboga ligger 44 kilometer västerut från vår bas i Eskilstuna, knappt 40 minuter på E20. Vi gör platsbesök inför varje offert och lägger arbetsdagarna i följd, så att vi är på plats från morgon till kväll tills jobbet är klart.",
        "Lång erfarenhet av gamla hus. I en stad där stadskärnan är medeltida vet vi hur man får plattor att sitta kvar på golv och väggar som rör sig, och vi planerar in avjämning och förstärkning från start.",
        "Våtrumsbehörighet enligt kraven från Byggkeramikrådet och Säker Vatten. Du får dokumentation på tätskikt och utförande, vilket är värdefullt både för försäkringen och vid en framtida försäljning.",
        "Fast pris och en kontaktperson. Över 20 år i branschen betyder att vi har sett de flesta överraskningar som kan gömma sig bakom gammalt kakel, och vi prissätter så att de inte hamnar hos dig.",
      ]}
      ctaTitle="Plattsättare till Arboga?"
      ctaDescription="Berätta om huset, gärna med några bilder, så bokar vi ett besök och lämnar en offert med fast pris som gäller."
      localTitle="Så planerar vi plattsättning i Arboga"
      localContent={[
        "I de äldre husen lägger vi mest tid på att förstå bjälklaget. Vi mäter hur mycket golvet lutar och åt vilket håll, kontrollerar om det finns rötskador vid tidigare läckage och ser hur stammarna är dragna. Det styr hur tjockt golvet kan byggas upp och om golvbrunnen behöver flyttas, två saker som påverkar både pris och tidplan.",
        "Är huset nyare går besöket fortare, och vi kan ägna mer tid åt att diskutera plattor, format och fog. Efter besöket får du en skriftlig offert med fast pris där varje moment är specificerat. Vi beställer material i förväg och kör ut allt när vi börjar, så att inget arbete stannar upp i väntan på en leverans.",
      ]}
      localFaq={[
        {
          q: "Vårt hus i gamla Arboga lutar synbart. Kan man verkligen få ett plant kakelgolv?",
          a: "Ja. Vi bygger upp golvet med flytspackel i ett eller flera skikt tills det är i våg, eller jämnar ut lutningen så att den inte märks. Begränsningen är takhöjd och trösklar, som sätter gränsen för hur mycket golvet kan höjas. Vid besöket mäter vi upp och säger vad som är möjligt i just ditt rum.",
        },
        {
          q: "Finns det regler för renovering av gamla hus i Arboga?",
          a: "Invändig plattsättning kräver normalt inget bygglov, men i kulturhistoriskt värdefulla miljöer kan kommunen ha synpunkter på ändringar som påverkar byggnadens karaktär. Rör arbetet bärande delar eller fasad bör du fråga Arboga kommun först. Vi hjälper dig gärna att reda ut vad som gäller innan vi lämnar offert.",
        },
        {
          q: "Vad passar bäst på en skev vägg, mosaik eller stora plattor?",
          a: "Mosaik eller små plattor. Stora plattor kräver en plan vägg, annars sticker kanterna ut mot varandra, så kallad läppning. Mosaik följer med i små ojämnheter och kan dessutom ge ett uttryck som passar ett äldre hus bra. Vill du ändå ha storformat kan vi skiva om väggen först, men det tar mer plats och kostar mer.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
