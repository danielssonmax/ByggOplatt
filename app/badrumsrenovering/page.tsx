import type { Metadata } from "next"
import { ServiceHubPage } from "@/components/service-hub-page"

const description =
  "Badrumsrenovering i Sörmland och Västmanland: totalentreprenad med behörig våtrum, fast pris och en kontaktperson från rivning till färdigt badrum."

export const metadata: Metadata = {
  title: "Badrumsrenovering med behörig våtrum",
  description,
  alternates: { canonical: "/badrumsrenovering" },
  openGraph: {
    title: "Badrumsrenovering med behörig våtrum | Bygg & Plattsättning",
    description,
    url: "https://byggoplattsattning.se/badrumsrenovering",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringHub() {
  return (
    <ServiceHubPage
      slug="badrumsrenovering"
      name="Badrumsrenovering"
      title="Badrumsrenovering från rivning till färdigt badrum"
      description={description}
      intro={[
        "Badrummet är det rum i hemmet som utsätts för mest vatten, och det rum där ett slarvigt lagt tätskikt kostar mest att rätta till i efterhand. Därför tar vi ansvar för hela kedjan: rivning, VVS, el, tätskikt, plattsättning och inredning.",
        "Du har en och samma kontaktperson från första platsbesöket tills badrummet är klart att använda. Vi renoverar badrum i Eskilstuna med omnejd, från Strängnäs i öster till Arboga och Köping i väster, Västerås i norr och Katrineholm i söder.",
      ]}
      heroFacts={[
        { label: "Erfarenhet", value: "20+ år" },
        { label: "Normal tid", value: "3–4 v" },
        { label: "Kontaktperson", value: "1" },
      ]}
      heroImage={{
        src: "/service-bathroom-1.webp",
        alt: "Renoverat badrum med storformatsplattor, dubbla handfat och fristående badkar",
      }}
      featuresTitle="Allt som behövs för ett nytt badrum"
      features={[
        {
          title: "Rivning och bortforsling",
          description:
            "Vi river det gamla badrummet ner till underlaget och forslar bort allt material. Då ser vi också om det finns fukt eller skador som behöver åtgärdas innan vi bygger upp igen.",
        },
        {
          title: "VVS-installation",
          description:
            "Certifierade VVS-tekniker drar om rör, flyttar avlopp vid behov och installerar golvbrunn, blandare och toalett enligt gällande normer.",
        },
        {
          title: "Elinstallation",
          description:
            "Behöriga elektriker drar el för belysning, golvvärme, handdukstork och uttag till tvättmaskin och torktumlare.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "Tätskiktet är det som skyddar huset mot vattenskador. Vi lägger det enligt Byggkeramikrådets branschregler för våtrum, med godkända material och korrekta anslutningar vid brunn och rörgenomföringar.",
        },
        {
          title: "Plattsättning av kakel och klinker",
          description:
            "Plattsättning är kärnan i vår verksamhet. Vi hjälper dig välja format och fog och sätter allt från klassiskt kakel till storformat och mosaik.",
        },
        {
          title: "Installation av inredning",
          description:
            "Sist monterar vi porslin, duschväggar, badrumsmöbler, speglar och belysning, så att badrummet är klart att använda när vi lämnar det.",
        },
      ]}
      stepsTitle="Fyra steg från idé till färdigt badrum"
      steps={[
        {
          title: "Platsbesök och offert",
          text: "Vi tittar på badrummet, mäter upp och går igenom dina önskemål. Därefter får du en tydlig offert med fast pris, utan dolda kostnader.",
        },
        {
          title: "Planering och materialval",
          text: "Vi bestämmer planlösning, kakel, klinker och inredning och lägger en tidplan. Genom våra samarbetspartners kan du få en paketlösning där allt material ingår.",
        },
        {
          title: "Rivning, VVS och el",
          text: "Det gamla badrummet rivs och forslas bort. Därefter görs rördragning och el av behöriga yrkespersoner, innan väggar och golv byggs upp igen.",
        },
        {
          title: "Tätskikt, plattor och inredning",
          text: "Tätskiktet läggs enligt branschreglerna och får torka innan kakel och klinker sätts. Sist fogar vi och monterar porslin, duschväggar och möbler.",
        },
      ]}
      priceTitle="Vad kostar en badrumsrenovering?"
      price={[
        "En badrumsrenovering kan kosta allt från runt 100 000 kronor till flera hundra tusen kronor. Det som styr priset mest är badrummets storlek, hur mycket av rör, avlopp och el som ska flyttas eller bytas, vilka material du väljer och om det döljer sig skador under det gamla ytskiktet.",
        "En komplett renovering tar normalt tre till fyra veckor. Planera för att vara utan badrum under den tiden, till exempel genom att använda ett gästbadrum.",
        "Som privatperson kan du göra ROT-avdrag på arbetskostnaden. Under 2026 är avdraget 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Avdraget gäller inte material, och det dras direkt på fakturan.",
      ]}
      priceFacts={[
        { label: "Pris", value: "från ca 100 000 kr" },
        { label: "Tid", value: "normalt 3–4 veckor" },
        { label: "ROT-avdrag", value: "30 % av arbetet" },
        { label: "Offert", value: "kostnadsfri, fast pris" },
      ]}
      townsIntro="Vi utgår från Kyrkogatan i Eskilstuna och renoverar badrum i sju orter. Restiderna nedan är ungefärliga bilresor från vår bas. Välj ort för att läsa mer om hur vi jobbar just där."
      faqs={[
        {
          q: "Måste jag anlita ett behörigt företag för att renovera badrummet?",
          a: "Det finns inget lagkrav på att just ett behörigt företag ska göra jobbet. Men många försäkringsbolag kan sänka ersättningen vid en vattenskada om våtrummet inte är byggt enligt branschreglerna. Vi uppfyller de krav som Byggkeramikrådet och Säker Vatten ställer för att bygga behöriga våtrum.",
        },
        {
          q: "Hur lång tid tar en badrumsrenovering?",
          a: "Normalt tre till fyra veckor för en komplett renovering. Tiden påverkas av badrummets storlek, hur mycket installationer som flyttas, torktider för spackel och tätskikt samt leveranstider för material och inredning.",
        },
        {
          q: "Kan jag få ROT-avdrag för badrumsrenovering?",
          a: "Ja, på arbetskostnaden. Under 2026 är ROT-avdraget 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Vi drar av beloppet direkt på fakturan och begär resten från Skatteverket. Material ger inget avdrag.",
        },
        {
          q: "Behöver jag bygglov för att renovera badrummet?",
          a: "Att renovera ett befintligt badrum kräver normalt inget bygglov. Om du flyttar eller gör större ändringar av vatten, avlopp eller ventilation kan det däremot krävas en anmälan till kommunen. Vi hjälper dig att reda ut vad som gäller för just ditt projekt.",
        },
        {
          q: "Kan ni hjälpa till med kakel, klinker och inredning?",
          a: "Ja. Genom våra samarbetspartners kan vi erbjuda kompletta paketlösningar där allt ingår, från kakel och klinker till badrumsinredning och sanitetsporslin. Du kan också köpa material själv.",
        },
        {
          q: "Måste jag koordinera rörmokare och elektriker själv?",
          a: "Nej. Vi tar hand om totalentreprenaden och sköter kontakten med alla yrkesgrupper. Du har en kontaktperson genom hela projektet.",
        },
      ]}
      guides={[
        { href: "/blogg/vad-kostar-en-badrumsrenovering", label: "Vad kostar en badrumsrenovering?" },
        { href: "/blogg/rot-avdrag-badrumsrenovering", label: "ROT-avdrag för badrumsrenovering" },
        { href: "/blogg/tatskikt-i-badrum", label: "Tätskikt i badrum: därför är det viktigast" },
        { href: "/blogg/planera-badrumsrenovering", label: "Guide: planera din badrumsrenovering" },
        { href: "/blogg/valja-ratt-kakel", label: "Så väljer du rätt kakel till badrummet" },
      ]}
      ctaTitle="Dags att renovera badrummet?"
      ctaText="Berätta vad du har tänkt dig, så bokar vi ett platsbesök och tar fram en kostnadsfri offert med fast pris."
    />
  )
}
