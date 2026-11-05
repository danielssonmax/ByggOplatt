import type { Metadata } from "next"
import { ServiceHubPage } from "@/components/service-hub-page"

const description =
  "Köksrenovering i Sörmland och Västmanland. Rivning, VVS, el, stänkskydd och montering av kök och vitvaror, med en kontaktperson och fast pris."

export const metadata: Metadata = {
  title: "Köksrenovering med en kontaktperson",
  description,
  alternates: { canonical: "/koksrenovering" },
  openGraph: {
    title: "Köksrenovering med en kontaktperson | Bygg & Plattsättning",
    description,
    url: "https://byggoplattsattning.se/koksrenovering",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringHub() {
  return (
    <ServiceHubPage
      slug="koksrenovering"
      name="Köksrenovering"
      title="Köksrenovering från planering till färdigt kök"
      description={description}
      intro={[
        "Ett kök är ett pussel av yrkesgrupper. Någon ska riva, någon ska dra om vatten och avlopp, en elektriker ska flytta uttag och belysning, och sedan ska stommar, bänkskivor, stänkskydd och vitvaror monteras i rätt ordning.",
        "Vi samordnar hela kedjan, så att du har en kontaktperson och en tidplan i stället för fem hantverkare att jaga. Vi renoverar kök i Eskilstuna, Västerås, Strängnäs och övriga orter i Sörmland och Västmanland.",
      ]}
      heroFacts={[
        { label: "Erfarenhet", value: "20+ år" },
        { label: "Kontaktperson", value: "1" },
        { label: "Orter", value: "7" },
      ]}
      featuresTitle="Hela köket, från rivning till vitvaror"
      features={[
        {
          title: "Rivning av befintligt kök",
          description:
            "Vi river det gamla köket på ett säkert sätt och forslar bort allt, så att nästa steg kan börja direkt.",
        },
        {
          title: "VVS- och elarbeten",
          description:
            "Certifierade VVS-tekniker och elektriker flyttar diskbänk, avlopp, uttag och belysning enligt gällande regler.",
        },
        {
          title: "Plattsättning av kakel",
          description:
            "Stänkskydd och golv är vårt hantverk. Vi hjälper dig att välja kakel och format som passar köket.",
        },
        {
          title: "Montering av köksinredning",
          description:
            "Stommar, luckor, lådor, bänkskivor och handtag monteras med noggrannhet, så att linjerna blir raka och luckorna går rätt.",
        },
        {
          title: "Installation av vitvaror",
          description:
            "Vi installerar kyl, frys, spis, ugn, diskmaskin och fläkt, så att allt fungerar när köket är klart.",
        },
        {
          title: "Målning och tapetsering",
          description:
            "Vi avslutar med målning eller tapetsering, så att du får ett helt färdigt kök som du kan börja använda direkt.",
        },
      ]}
      stepsTitle="Så går en köksrenovering till"
      steps={[
        {
          title: "Platsbesök",
          text: "Vi går igenom köket, mäter upp och lyssnar på hur du använder det i vardagen. Vad fungerar i dag och vad vill du ändra?",
        },
        {
          title: "Planering och offert",
          text: "Vi går igenom planlösningen och ser vad som behöver flyttas av vatten, avlopp och el. Du får en tydlig offert med fast pris.",
        },
        {
          title: "Rivning och installationer",
          text: "Det gamla köket rivs, och VVS och el dras om innan väggar och golv förbereds för det nya köket.",
        },
        {
          title: "Montering och finish",
          text: "Stommar, bänkskivor, stänkskydd och vitvaror monteras. Sist målar eller tapetserar vi och städar upp efter oss.",
        },
      ]}
      priceTitle="Vad påverkar priset på en köksrenovering?"
      price={[
        "Den största posten är oftast själva köket: stommar, luckor och bänkskiva. En bänkskiva i sten kostar mer än en i laminat, och specialmåttade lösningar kostar mer än standardmoduler.",
        "Nästa stora fråga är om diskbänk, spis eller fläkt ska flyttas. Då behöver vatten, avlopp och el dras om, vilket påverkar både pris och tid. Vitvaror, stänkskydd och golv är också med i kalkylen.",
        "Tiden styrs av hur mycket som byggs om och av leveranstider. Bänkskivor i sten mäts ofta in först när stommarna står på plats, och det ska vi räkna med i tidplanen. På arbetskostnaden kan du som privatperson göra ROT-avdrag.",
      ]}
      priceFacts={[
        { label: "Största posten", value: "stommar och bänkskiva" },
        { label: "Påverkar mest", value: "flytt av VVS och el" },
        { label: "ROT-avdrag", value: "på arbetskostnaden" },
        { label: "Offert", value: "kostnadsfri, fast pris" },
      ]}
      townsIntro="Vi utgår från Kyrkogatan i Eskilstuna och renoverar kök i sju orter. Restiderna är ungefärliga bilresor från vår bas. Välj ort för att läsa mer."
      faqs={[
        {
          q: "Kan jag köpa köket själv och låta er montera det?",
          a: "Ja. Många väljer kök hos en köksleverantör och låter oss sköta rivning, installationer och montering. Hör av dig så går vi igenom vad som ingår i just ditt projekt.",
        },
        {
          q: "Hur lång tid tar en köksrenovering?",
          a: "Det beror på omfattningen och på leveranstider för kök, bänkskivor och vitvaror. Ett byte av luckor och bänkskiva går fortare än ett kök där diskbänk och spis flyttas. Du får en tidplan tillsammans med offerten.",
        },
        {
          q: "Får jag ROT-avdrag för köksrenovering?",
          a: "Ja, på arbetskostnaden. Under 2026 är ROT-avdraget 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Själva köket och övrigt material ger inget avdrag.",
        },
        {
          q: "Kan ni flytta diskbänk och spis?",
          a: "Ja. Våra certifierade VVS-tekniker och elektriker flyttar vatten, avlopp och el enligt gällande regler, så att du kan få den planlösning du vill ha.",
        },
        {
          q: "Sätter ni kakel som stänkskydd?",
          a: "Ja, plattsättning är vårt hantverk. Vi sätter stänkskydd i kakel, mosaik eller storformat och kan även lägga klinker på köksgolvet.",
        },
        {
          q: "Kan vi bo kvar under renoveringen?",
          a: "Ja, de flesta gör det. Räkna med en period utan fungerande kök, och ställ gärna i ordning ett provisoriskt kök med mikro och vattenkokare i ett annat rum.",
        },
      ]}
      guides={[
        { href: "/blogg/trender-koksrenovering", label: "Trender inom köksrenovering" },
        { href: "/blogg/valja-ratt-kakel", label: "Så väljer du rätt kakel" },
        { href: "/plattsattning", label: "Plattsättning av kakel och klinker" },
      ]}
      ctaTitle="Dags för ett nytt kök?"
      ctaText="Berätta vad du vill ändra, så bokar vi ett platsbesök och tar fram en kostnadsfri offert med fast pris."
    />
  )
}
