import type { Metadata } from "next"
import { ServiceHubPage } from "@/components/service-hub-page"

const description =
  "Snickare och byggfirma för tillbyggnad, ombyggnad, innerväggar, fönsterbyten och altaner i Eskilstuna, Västerås, Strängnäs och övriga Mälardalen."

export const metadata: Metadata = {
  title: "Snickare & byggfirma i Mälardalen",
  description,
  alternates: { canonical: "/bygg-snickeri" },
  openGraph: {
    title: "Snickare & byggfirma i Mälardalen | Bygg & Plattsättning",
    description,
    url: "https://byggoplattsattning.se/bygg-snickeri",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function ByggSnickeriHub() {
  return (
    <ServiceHubPage
      slug="bygg-snickeri"
      name="Bygg & Snickeri"
      title="Bygg och snickeri, stort som smått"
      description={description}
      intro={[
        "Vi gör mer än plattor. Vi bygger om planlösningar, sätter upp innerväggar, byter fönster och dörrar, bygger altaner och tar oss an tillbyggnader. Med över 20 år i byggbranschen har vi gjort allt från nya hyllor på mått till utbyggnader av hus.",
        "Precis som i våra badrums- och köksprojekt får du en kontaktperson, en tidplan och en offert med fast pris. Vi tar uppdrag i Eskilstuna, Västerås, Strängnäs och fyra orter till i Sörmland och Västmanland.",
      ]}
      heroFacts={[
        { label: "Erfarenhet", value: "20+ år" },
        { label: "Kontaktperson", value: "1" },
        { label: "Orter", value: "7" },
      ]}
      heroImage={{
        src: "/hero-image.jpg",
        alt: "Bygg & Plattsättnings servicebil med logotyp och märkningen Behörig våtrum",
        position: "object-[62%_center]",
      }}
      featuresTitle="Snickeri inne och ute"
      features={[
        {
          title: "Tillbyggnad och ombyggnad",
          description:
            "Mer plats hemma? Vi bygger till, bygger ut och bygger om, och ser till att det nya passar ihop med husets befintliga stil.",
        },
        {
          title: "Fönster- och dörrbyten",
          description:
            "Nya fönster och dörrar ger bättre komfort och lägre värmeförluster. Vi monterar, drevar och gör snyggt runt om.",
        },
        {
          title: "Altaner och trädäck",
          description:
            "Vi bygger altaner, trädäck och uterum i material som tål svenskt väder, med rätt avvattning och ventilation under däcket.",
        },
        {
          title: "Fasad- och utomhussnickeri",
          description:
            "Panelbyte, staket, carportar och fasadrenovering, med material och behandling som håller i väder och vind.",
        },
        {
          title: "Innerväggar och tak",
          description:
            "Vi sätter upp innerväggar, bygger om tak och skapar nya rum när planlösningen behöver ändras.",
        },
        {
          title: "Specialsnickeri",
          description:
            "Hyllor, trappor, räcken och andra lösningar på mått som ger hemmet en personlig prägel.",
        },
      ]}
      stepsTitle="Så går ett byggprojekt till"
      steps={[
        {
          title: "Platsbesök och idé",
          text: "Vi ses på plats, går igenom vad du vill uppnå och ger ärliga besked om vad som är möjligt och rimligt.",
        },
        {
          title: "Bygglov och offert",
          text: "Vid tillbyggnader och fasadändringar krävs ofta bygglov eller en anmälan. Vi hjälper dig att ta reda på vad som gäller hos din kommun och lämnar en offert med fast pris.",
        },
        {
          title: "Bygget",
          text: "Vi bygger enligt tidplanen och samordnar el, VVS och andra yrkesgrupper när projektet kräver det.",
        },
        {
          title: "Finish och överlämning",
          text: "Vi gör klart detaljerna, städar och går igenom resultatet tillsammans med dig innan vi lämnar.",
        },
      ]}
      priceTitle="Vad påverkar priset?"
      price={[
        "Bygg- och snickeriprojekt varierar mycket, så vi räknar alltid på ditt projekt efter ett platsbesök. Det som påverkar priset mest är storlek och omfattning, materialval och hur mycket befintligt som behöver rivas eller förstärkas.",
        "För tillbyggnader påverkar också grundläggning, isolering och om el och VVS ska dras in. Om projektet kräver bygglov tillkommer kommunens handläggningstid i tidplanen.",
        "På arbetskostnaden vid reparation, om- och tillbyggnad av ditt hem kan du som privatperson göra ROT-avdrag. Avdraget gäller inte nybyggnation.",
      ]}
      priceFacts={[
        { label: "Prisunderlag", value: "efter platsbesök" },
        { label: "Bygglov", value: "vi hjälper dig reda ut det" },
        { label: "ROT-avdrag", value: "på arbetskostnaden" },
        { label: "Offert", value: "kostnadsfri, fast pris" },
      ]}
      townsIntro="Vi utgår från Kyrkogatan i Eskilstuna och tar bygg- och snickeriuppdrag i sju orter. Restiderna är ungefärliga bilresor från vår bas."
      faqs={[
        {
          q: "Behöver jag bygglov för en tillbyggnad?",
          a: "Oftast krävs bygglov eller i alla fall en anmälan till kommunen. En mindre tillbyggnad på ett en- eller tvåbostadshus kan ibland göras som en attefallsåtgärd med anmälan i stället för bygglov. Vi hjälper dig att ta reda på vad som gäller.",
        },
        {
          q: "Bygger ni altaner och trädäck?",
          a: "Ja. Vi bygger altaner, trädäck och uterum, och ser till att konstruktionen får rätt lutning, avvattning och ventilation så att virket håller länge.",
        },
        {
          q: "Kan ni byta fönster och dörrar?",
          a: "Ja. Vi byter fönster och ytterdörrar, drevar och tätar runt om och gör klart foder och smygar så att det blir snyggt både inne och ute.",
        },
        {
          q: "Tar ni mindre jobb också?",
          a: "Ja. Vi gör även mindre byggarbeten, till exempel en ny innervägg, ett hyllsystem på mått eller reparationer efter en vattenskada. Hör av dig och berätta vad du behöver.",
        },
        {
          q: "Kan jag få ROT-avdrag?",
          a: "Ja, på arbetskostnaden när vi reparerar, bygger om eller bygger till ditt hem. Under 2026 är avdraget 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Nybyggnation ger inget ROT-avdrag.",
        },
        {
          q: "Samordnar ni el och VVS vid en ombyggnad?",
          a: "Ja. Vi tar hand om hela projektet och samordnar de yrkesgrupper som behövs, så att du har en kontaktperson.",
        },
      ]}
      guides={[
        { href: "/blogg/rot-avdrag-badrumsrenovering", label: "Så fungerar ROT-avdraget" },
        { href: "/flytspackling", label: "Flytspackling av golv" },
        { href: "/koksrenovering", label: "Köksrenovering" },
      ]}
      ctaTitle="Har du ett byggprojekt på gång?"
      ctaText="Berätta vad du vill bygga, så bokar vi ett platsbesök och tar fram en kostnadsfri offert med fast pris."
    />
  )
}
