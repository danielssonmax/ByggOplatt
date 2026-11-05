import type { Metadata } from "next"
import { ServiceHubPage } from "@/components/service-hub-page"

const description =
  "Plattsättning av kakel, klinker, mosaik och natursten i badrum, kök och hall. Tätskikt enligt branschregler och golvvärme. Eskilstuna, Västerås och Mälardalen."

export const metadata: Metadata = {
  title: "Plattsättning av kakel och klinker",
  description,
  alternates: { canonical: "/plattsattning" },
  openGraph: {
    title: "Plattsättning av kakel och klinker | Bygg & Plattsättning",
    description,
    url: "https://byggoplattsattning.se/plattsattning",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-2.webp"],
  },
}

export default function PlattsattningHub() {
  return (
    <ServiceHubPage
      slug="plattsattning"
      name="Plattsättning"
      title="Plattsättning av kakel, klinker och natursten"
      description={description}
      intro={[
        "Plattsättning är kärnan i vår verksamhet, det står i vårt namn. Vi sätter kakel och klinker i badrum, kök, hallar och tvättstugor, från klassiskt vitt väggkakel till storformatsplattor där varje millimeter i underlaget syns.",
        "Ett snyggt resultat börjar under plattorna: ett plant underlag, rätt fix för plattan och en fogbredd som passar formatet. I våtrum lägger vi alltid tätskikt enligt Byggkeramikrådets branschregler.",
      ]}
      heroFacts={[
        { label: "Erfarenhet", value: "20+ år" },
        { label: "Behörighet", value: "Våtrum" },
        { label: "Orter", value: "7" },
      ]}
      heroImage={{
        src: "/service-bathroom-2.webp",
        alt: "Badrum med klinker i storformat, mosaik på väggen och dusch med glasvägg",
      }}
      featuresTitle="Plattor i alla format och material"
      features={[
        {
          title: "Kakel och klinker",
          description:
            "Vi sätter alla typer av kakel och klinker i olika format och stilar, från klassiskt vitt kakel till moderna storformatsplattor på golv och vägg.",
        },
        {
          title: "Mosaik",
          description:
            "Mosaik ger detaljer som syns, till exempel i en duschnisch eller som ett band på väggen. Den kräver tålamod och raka linjer, och det har vi.",
        },
        {
          title: "Natursten",
          description:
            "Marmor, granit, skiffer och andra naturstenar kräver rätt fix, rätt fog och ofta impregnering. Vi har erfarenheten som krävs för ett hållbart resultat.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "I våtrum lägger vi alltid tätskikt enligt Byggkeramikrådets branschregler, så att resultatet blir vattentätt och håller för försäkringsbolagens krav.",
        },
        {
          title: "Golvvärme",
          description:
            "Vi lägger golvvärme under klinkern för ett behagligt golv i badrum, hall och kök. Ofta gjuts värmen in i ett lager flytspackel först.",
        },
        {
          title: "Reparation och renovering",
          description:
            "Vi byter enstaka trasiga plattor, fogar om och renoverar befintliga plattsatta ytor när en helrenovering inte behövs.",
        },
      ]}
      stepsTitle="Så går en plattsättning till"
      steps={[
        {
          title: "Kontroll av underlaget",
          text: "Vi kontrollerar att golv och väggar är plana och stabila nog för det format du valt. Behövs det jämnar vi ut golvet med flytspackel innan vi börjar.",
        },
        {
          title: "Planering av mönster och fogar",
          text: "Vi lägger ut plattorna så att kapen hamnar där de syns minst och bestämmer fogbredd och fogfärg tillsammans med dig.",
        },
        {
          title: "Tätskikt och plattsättning",
          text: "I våtrum läggs tätskikt enligt branschreglerna innan plattorna sätts. Plattorna sätts i fix som är anpassad för underlaget och plattans storlek.",
        },
        {
          title: "Fogning och finish",
          text: "När fixen har härdat fogar vi, lägger fogmassa i hörn och anslutningar där det behövs och rengör ytorna innan vi lämnar.",
        },
      ]}
      priceTitle="Vad påverkar priset?"
      price={[
        "Priset för plattsättning beror främst på ytans storlek, plattformatet och underlagets skick. Storformat och mosaik tar längre tid per kvadratmeter än standardformat, och mönster som fiskben eller diagonal läggning kräver mer kapning.",
        "Om underlaget behöver flytspacklas, eller om det behövs tätskikt och golvvärme, tillkommer det arbetet. Hur lång tid jobbet tar styrs till stor del av torktider för spackel, tätskikt och fix.",
        "Som riktmärke för materialet kostar enkelt keramiskt kakel ofta 200–400 kr per kvadratmeter, porslinsklinker 400–800 kr och natursten 800–2 000 kr. På arbetskostnaden kan du som privatperson göra ROT-avdrag.",
      ]}
      priceFacts={[
        { label: "Prisunderlag", value: "yta, format, underlag" },
        { label: "Våtrum", value: "tätskikt enligt branschregler" },
        { label: "ROT-avdrag", value: "på arbetskostnaden" },
        { label: "Offert", value: "kostnadsfri" },
      ]}
      townsIntro="Vi utgår från Kyrkogatan i Eskilstuna och sätter plattor i sju orter i Sörmland och Västmanland. Restiderna är ungefärliga bilresor från vår bas."
      faqs={[
        {
          q: "Kan man sätta nytt kakel på gammalt kakel?",
          a: "På väggar i torra utrymmen går det ibland, om det gamla kaklet sitter stadigt och ytan är plan. I våtrum är det sällan en bra idé, eftersom tätskiktets skick bakom det gamla kaklet inte går att kontrollera. Vi bedömer på plats vad som är rimligt.",
        },
        {
          q: "Vilka plattor är svårast att sätta?",
          a: "Storformat och mosaik. Stora plattor kräver ett mycket plant underlag för att inte få kanter som sticker upp, och mosaik tar längre tid per kvadratmeter. Båda går utmärkt, men de ställer högre krav på förarbetet.",
        },
        {
          q: "Hur bred ska fogen vara?",
          a: "Det beror på plattan. Rektifierade plattor, med slipade kanter, kan sättas med smal fog. Plattor med större måttavvikelser behöver bredare fog för att linjerna ska bli raka.",
        },
        {
          q: "Kan ni lägga golvvärme under klinkern?",
          a: "Ja. Vi lägger golvvärme under klinker i badrum, hall och kök. Ofta gjuts värmen in i ett lager flytspackel innan plattorna sätts.",
        },
        {
          q: "Byter ni enstaka trasiga plattor?",
          a: "Ja, vi gör även reparationer och byter enstaka plattor. Det underlättar om du har sparat några extra plattor från ursprungsjobbet. Därför rekommenderar vi alltid att beställa 10–15 procent extra när du köper kakel.",
        },
        {
          q: "Sätter ni plattor utanför badrummet också?",
          a: "Ja. Vi sätter stänkskydd i kök och klinker i hallar, tvättstugor och andra utrymmen, inte bara i badrum.",
        },
      ]}
      guides={[
        { href: "/blogg/valja-ratt-kakel", label: "Så väljer du rätt kakel till badrummet" },
        { href: "/blogg/tatskikt-i-badrum", label: "Tätskikt i badrum: därför är det viktigast" },
        { href: "/flytspackling", label: "Flytspackling: ett plant golv före plattorna" },
        { href: "/badrumsrenovering", label: "Komplett badrumsrenovering" },
      ]}
      ctaTitle="Ska du sätta nytt kakel eller klinker?"
      ctaText="Berätta om ytan och vilka plattor du har tänkt dig, så återkommer vi med en kostnadsfri offert."
    />
  )
}
