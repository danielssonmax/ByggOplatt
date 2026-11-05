import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Strängnäs",
  description:
    "Plattsättning i Strängnäs, från trähusen på Gyllenhjelmsgatan till lägenheterna i Eldsundsviken. Kakel, klinker och natursten. Behörigt våtrum, fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/strangnas",
  },
  openGraph: {
    title: "Plattsättning Strängnäs | Bygg & Plattsättning",
    description:
      "Plattsättning i Strängnäs, från trähusen på Gyllenhjelmsgatan till lägenheterna i Eldsundsviken. Kakel, klinker och natursten. Behörigt våtrum, fast pris.",
    url: "https://byggoplattsattning.se/plattsattning/strangnas",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningStrangnas() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Strängnäs"
      heroTitle="Plattsättning i Strängnäs"
      heroDescription="Strängnäs är en halvtimme österut längs E20, och vi arbetar här regelbundet. Staden har både en gammal trästad kring domkyrkan och nya bostadsområden som Eldsundsviken, och de två kräver helt olika sorts plattsättning. Vi kan båda."
      introTitle="Kakel och klinker för en stad med 700 år på nacken"
      introContent={[
        "Gatunätet i centrala Strängnäs är i stort sett detsamma som vid 1600-talets mitt, och längs Gyllenhjelmsgatan står trähusen tätt. I sådana hus är ingen vägg riktigt lodrät och inget golv riktigt i våg. En plattsättare som inte tar hänsyn till det får snart problem med fogar som spricker. Vi mäter, spacklar och väljer format utifrån hur huset faktiskt ser ut.",
        "Nordöstra delen av staden byggdes upp på nytt efter branden 1871, så husen där är yngre än de i trästaden och har ofta stabilare stommar. I de nyare områdena, som Eldsundsviken på det gamla militärområdet, är underlagen moderna och storformat i 60 x 120 cm fungerar utan problem. Oavsett hus följer vi Byggkeramikrådets branschregler i våtrum och bygger behöriga våtrum enligt kraven från Byggkeramikrådet och Säker Vatten.",
        "Vi sätter kakel, klinker, mosaik och natursten i badrum, kök, hallar och tvättstugor, lägger golvvärme under klinkern och byter enstaka skadade plattor. Priset på material varierar från omkring 200 kronor per kvadratmeter för enkel keramik till 2 000 kronor för natursten, och vi hjälper dig hitta en nivå som passar både huset och budgeten.",
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
        "Strängnäs ligger drygt tre mil från vår bas i Eskilstuna, en knapp halvtimme på E20. Vi kommer gärna förbi för ett besök innan du bestämmer dig, och under arbetet är vi på plats varje dag tills det är klart.",
        "Vi är vana vid gamla trähus. I stadskärnan kring domkyrkan vet vi vad som krävs för att plattorna ska sitta kvar när huset rör sig, och vi planerar in förarbetet från början i stället för att upptäcka det på vägen.",
        "Tätskikt enligt Byggkeramikrådets branschregler och behörigt våtrum. Du får dokumentation på utfört arbete, vilket många försäkringsbolag frågar efter vid en vattenskada.",
        "Tydlig offert med fast pris där rivning, förarbete, material och arbete är åtskilda. Samma person svarar i telefon hela vägen, från första frågan till slutbesiktningen.",
      ]}
      ctaTitle="Vill du ha en plattsättare i Strängnäs?"
      ctaDescription="Skicka några rader om huset och vad du vill ha gjort. Vi bokar ett besök och lämnar en offert med fast pris, utan kostnad."
      localTitle="Att sätta plattor i Strängnäs"
      localContent={[
        "Vi inleder med ett platsbesök där vi tittar på vad huset är byggt av och hur det har renoverats tidigare. I trähusen i centrum är den vanligaste frågan hur golvet ska jämnas ut utan att tröskeln mot hallen blir för hög, och i de hus som uppfördes efter 1871 brukar det finnas gamla cementgolv som är hårda men inte alltid plana.",
        "I lägenheter i de nyare områdena vid Mälaren går planeringen fortare. Där handlar det mer om val av format och fogfärg, om golvvärme och om hur fallet mot brunnen ska byggas. Vi återkommer med en skriftlig offert några dagar efter besöket, och i den ser du exakt vilka moment som ingår och vad varje del kostar.",
      ]}
      localFaq={[
        {
          q: "Kan man ha stora plattor i ett gammalt trähus i Strängnäs?",
          a: "På väggar med stabil skivbeklädnad går det ofta bra, men på golv i äldre trähus avråder vi i regel. Underlaget rör sig med årstiderna, och stora plattor saknar fogar som kan ta upp rörelsen. Plattor upp till 30 x 60 cm, eller mosaik, är säkrare val. Vi tittar på bjälklaget innan vi ger ett svar som gäller just ditt hus.",
        },
        {
          q: "Vad kostar plattsättning i Strängnäs jämfört med Eskilstuna?",
          a: "Arbetet kostar detsamma, eftersom vi utgår från samma offertmall och samma priser oavsett ort. Det som kan skilja är restiden, drygt 25 minuter enkel väg, som vi räknar in i offerten. Materialet köper du antingen själv eller via oss, och priset per kvadratmeter beror på vilken typ av platta du väljer.",
        },
        {
          q: "Vi ska renovera badrummet i en lägenhet i Eldsundsviken. Behöver vi tillstånd från föreningen?",
          a: "I en bostadsrätt är det vanligt att styrelsen vill godkänna arbeten som rör tätskikt, vatten och avlopp. Reglerna skiljer sig mellan föreningar, så kontrollera stadgarna eller fråga styrelsen innan vi börjar. Vi kan lämna en beskrivning av arbetet och vår våtrumsbehörighet som du kan bifoga ansökan.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
