import type { Metadata } from "next"
import { ServiceHubPage } from "@/components/service-hub-page"

const description =
  "Flytspackling i Eskilstuna med omnejd: ett plant golv före klinker, parkett och golvvärme, som eget jobb eller som del av en renovering."

export const metadata: Metadata = {
  title: "Flytspackling i Eskilstuna",
  description,
  alternates: { canonical: "/flytspackling" },
  openGraph: {
    title: "Flytspackling i Eskilstuna | Bygg & Plattsättning",
    description,
    url: "https://byggoplattsattning.se/flytspackling",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function Flytspackling() {
  return (
    <ServiceHubPage
      slug="flytspackling"
      name="Flytspackling"
      title="Flytspackling i Eskilstuna"
      description={description}
      intro={[
        "Flytspackel är ett självutjämnande spackel som pumpas eller hälls ut över golvet och flyter ut till en plan yta. Det är grunden för ett snyggt golv: stora plattor, parkett och vinyl kräver ett underlag utan gropar och kanter.",
        "Vi flytspacklar både som ett eget uppdrag och som en del av en badrums- eller köksrenovering. Vi utgår från Eskilstuna och kör ut till Torshälla, Strängnäs, Västerås, Köping, Arboga och Katrineholm.",
      ]}
      heroFacts={[
        { label: "Erfarenhet", value: "20+ år" },
        { label: "Kontaktperson", value: "1" },
        { label: "Orter", value: "7" },
      ]}
      featuresEyebrow="När behövs det?"
      featuresTitle="Här gör flytspackel skillnad"
      features={[
        {
          title: "Före klinker och storformat",
          description:
            "Ju större plattor, desto högre krav på ett plant underlag. På ett ojämnt golv får stora plattor kanter som sticker upp och fogar som spricker.",
        },
        {
          title: "Före parkett, laminat och vinyl",
          description:
            "Svackor och kanter i undergolvet syns och känns igenom tunna golvmaterial, och kan ge glipor och knarr i flytande golv.",
        },
        {
          title: "Ingjutning av golvvärme",
          description:
            "Elektrisk golvvärme kan gjutas in i ett lager flytspackel. Då skyddas slingorna och värmen fördelas jämnt under golvet.",
        },
        {
          title: "Ojämna betonggolv",
          description:
            "Äldre betonggolv har ofta svackor, sprickor och lagningar. Flytspackel ger en jämn yta att bygga vidare på.",
        },
        {
          title: "Gamla golv vid renovering",
          description:
            "När ett gammalt golv rivs ut är underlaget sällan plant. Flytspackel är ofta det snabbaste sättet att få en ny, jämn yta.",
        },
        {
          title: "Trägolv med stabilt underlag",
          description:
            "Även trägolv kan flytspacklas om underlaget är stabilt. Då krävs ofta armering och ett spackelsystem som är anpassat för trä.",
        },
      ]}
      stepsTitle="Så går flytspacklingen till"
      steps={[
        {
          title: "Kontroll och förberedelse",
          text: "Vi mäter hur ojämnt golvet är, tar bort löst material och dammsuger. Kanter, trösklar och rörgenomföringar tätas så att spacklet inte rinner iväg.",
        },
        {
          title: "Primning",
          text: "Golvet stryks med primer. Det ger bättre vidhäftning och hindrar underlaget från att suga vatten ur spacklet, vilket annars kan ge porer och sprickor.",
        },
        {
          title: "Utläggning",
          text: "Spacklet blandas och pumpas eller hälls ut till rätt höjd. Vi fördelar det och går över med spikroller för att få bort luftbubblor.",
        },
        {
          title: "Torkning",
          text: "Torktiden beror på skikttjocklek, produkt, temperatur och ventilation. Vi följer tillverkarens anvisningar innan nästa golvlager läggs.",
        },
      ]}
      priceTitle="Vad påverkar priset?"
      price={[
        "Priset för flytspackling beror främst på golvytan och hur tjockt lager som behövs, eftersom det styr hur mycket material som går åt. Ett golv med stora nivåskillnader kräver mer spackel, och ibland mer än ett lager.",
        "Förarbetet påverkar också: om gammal matta eller klinker ska rivas, om golvet behöver slipas och om golvvärme ska gjutas in. Stora ytor läggs med pump, mindre ytor blandas och hälls för hand.",
        "Gör du flytspacklingen som del av en renovering av ditt hem kan du som privatperson göra ROT-avdrag på arbetskostnaden.",
      ]}
      priceFacts={[
        { label: "Prisunderlag", value: "yta och skikttjocklek" },
        { label: "Förarbete", value: "rivning, slipning, primer" },
        { label: "ROT-avdrag", value: "på arbetskostnaden" },
        { label: "Offert", value: "kostnadsfri" },
      ]}
      linkTowns={false}
      townsIntro="Vi utgår från Kyrkogatan i Eskilstuna och flytspacklar golv i sju orter i Sörmland och Västmanland. Restiderna är ungefärliga bilresor från vår bas."
      faqs={[
        {
          q: "Vad är flytspackel?",
          a: "Ett självutjämnande spackel, oftast cementbaserat, som blandas med vatten och flyter ut till en plan yta. Det används för att jämna ut golv innan ett nytt golvmaterial läggs.",
        },
        {
          q: "Hur länge måste flytspacklet torka?",
          a: "Det beror på skikttjocklek, produkt, temperatur och ventilation. Ofta går det att gå på golvet efter några timmar, men det kan ta betydligt längre innan nästa golvmaterial får läggas. Vi följer alltid tillverkarens anvisningar.",
        },
        {
          q: "Hur tjockt kan man flytspackla?",
          a: "Det beror på produkten. Vissa spackel är gjorda för tunna avjämningar och andra för tjockare lager. Vi väljer produkt efter hur mycket golvet behöver jämnas ut.",
        },
        {
          q: "Måste golvet flytspacklas före klinker?",
          a: "Inte alltid. Är golvet redan tillräckligt plant för plattformatet behövs det inte. Ju större plattor du väljer, desto högre krav på planhet, och då är flytspackling ofta det säkraste sättet.",
        },
        {
          q: "Kan man flytspackla över golvvärme?",
          a: "Ja. Elektrisk golvvärme gjuts ofta in i ett lager flytspackel, som skyddar slingorna och ger en jämn yta för klinker eller annat golv.",
        },
        {
          q: "Gör ni flytspackling som ett eget jobb?",
          a: "Ja. Vi flytspacklar både som ett eget uppdrag och som en del av en badrums-, köks- eller golvrenovering.",
        },
      ]}
      guides={[
        { href: "/plattsattning", label: "Plattsättning av kakel och klinker" },
        { href: "/badrumsrenovering", label: "Komplett badrumsrenovering" },
        { href: "/blogg/valja-ratt-kakel", label: "Så väljer du rätt kakel" },
      ]}
      ctaTitle="Behöver golvet bli plant?"
      ctaText="Berätta hur stor yta det gäller och vilket golv som ska läggas ovanpå, så återkommer vi med en kostnadsfri offert."
    />
  )
}
