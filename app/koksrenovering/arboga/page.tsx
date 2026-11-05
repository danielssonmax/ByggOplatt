import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Arboga",
  description:
    "Köksrenovering i Arboga, i den medeltida stadskärnans trä- och stenhus och i husen utanför. Sneda golv och gamla stammar är vardag för oss. Fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/arboga",
  },
  openGraph: {
    title: "Köksrenovering Arboga | Bygg & Plattsättning",
    description:
      "Köksrenovering i Arboga med rivning, VVS, el, kakel och montering. Knappt 40 minuter från vår bas i Eskilstuna längs E20, med fast pris och en kontaktperson.",
    url: "https://byggoplattsattning.se/koksrenovering/arboga",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringArboga() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Arboga"
      heroTitle="Köksrenovering i Arboga"
      heroDescription="Arboga har kvar sin medeltida gatustruktur, med trä- och stenhus längs ån som har haft kök i flera hundra år. Vi renoverar kök i gamla hus där inget är rakt och i yngre hus där installationerna hunnit bli gamla, och kommer längs E20 från vår bas i Eskilstuna på knappt 40 minuter."
      introTitle="Kök i en stadskärna med medeltida gator"
      introContent={[
        "Arboga blev stad på 1200-talet, och stadskärnan har kvar sin medeltida gatustruktur. Längs Arbogaån, till exempel i kvarteret Kungsgården vid Gamla bron, står äldre trä- och stenhus där golven lutar, väggarna buktar och takhöjden varierar från rum till rum. Ett nytt kök i ett sådant hus börjar med måttband och vattenpass, inte med en katalog.",
        "I äldre hus är vatten- och avloppsstammarna ofta bytta i omgångar, av olika ägare och i olika material. Innan vi lämnar offert vill vi därför se vad som sitter bakom skåpen och under golvet. Det tar en extra timme vid platsbesöket, men det betyder att det fasta priset täcker det kök som ska byggas, och att inga överraskningar dyker upp när rivningen är gjord.",
        "Husen utanför stadskärnan är yngre, men många kök där har kvar el och ventilation från byggåret. Där lägger vi tyngdpunkten på installationerna: en egen grupp till induktionshällen, rätt sorts fläkt för husets ventilation och nya avlopp till diskmaskinen. Rivning, VVS och el, stänkskydd, montering, vitvaror och målning ingår, med en kontaktperson.",
      ]}
      features={[
        {
          title: "Rivning av befintligt kök",
          description:
            "Vi tar hand om rivning och bortforsling av ditt gamla kök på ett säkert och effektivt sätt.",
        },
        {
          title: "VVS- och elarbeten",
          description:
            "Certifierade VVS-tekniker och elektriker utför all installation för vatten, avlopp och el enligt gällande regler.",
        },
        {
          title: "Plattsättning av kakel",
          description:
            "Professionell plattsättning av stänkskydd och golv. Vi hjälper dig välja kakel som passar din stil.",
        },
        {
          title: "Montering av köksinredning",
          description:
            "Precision och noggrannhet vid montering av skåp, bänkskivor, vitvaror och all övrig köksinredning.",
        },
        {
          title: "Installation av vitvaror",
          description:
            "Vi installerar alla typer av vitvaror – kyl, frys, spis, ugn, diskmaskin och fläkt.",
        },
        {
          title: "Målning och tapetsering",
          description:
            "Komplett finish med målning eller tapetsering för ett helt färdigt kök som du kan börja använda direkt.",
        },
      ]}
      whyChooseUsContent={[
        "Gamla hus är vår vardag. Vi flytspacklar golv som lutar, bygger ut skåpstommar mot bulliga väggar och anpassar överskåp till tak som inte är lika höga i hela rummet, så att köket ser rakt ut även när huset inte är det.",
        "Du får en kontaktperson som håller ihop rörmokare, elektriker, plattsättare och målare, och som svarar när du undrar var i tidplanen vi är.",
        "Arboga ligger vid E20, cirka 44 kilometer och knappt 40 minuter från Kyrkogatan i Eskilstuna. Vi lägger jobb här i sammanhängande dagar och planerar material så att inget väntar på en bil.",
        "Priset är fast och räknas efter platsbesök. I de äldre husen längs ån ingår det vi hittar bakom skåpen i offerten, inte i en tilläggsfaktura.",
      ]}
      ctaTitle="Nytt kök i ett gammalt hus i Arboga?"
      ctaDescription="Skicka några rader om huset och köket, gärna med en bild, så bokar vi ett platsbesök. Du får ett fast pris, och offerten kostar ingenting."
      heroImage="/hero-image.jpg"
      localTitle="Köksrenovering i Arboga, där inget hus är det andra likt"
      localContent={[
        "Arboga ligger i Västmanlands län, där E18 och E20 möts, och vägen från vår bas i Eskilstuna följer E20 hela vägen. Knappt 40 minuter är ett avstånd som fungerar bra för hela arbetsdagar, och vi samordnar leveranser av kakel, inredning och vitvaror så att de kommer när momentet börjar. Bygglov och anmälningar handläggs av Arboga kommun, och i den gamla stadskärnan kan kommunen ställa särskilda krav på ändringar som syns utifrån.",
        "Staden är känd för Arboga möte 1435 och Hjälmare kanal från 1639, men för oss är det husen som är intressanta. Trähusen och stenhusen längs ån har byggts om i omgångar under århundraden, och varje kök bär spår av de tidigare ägarnas lösningar. Vi tar reda på vad som sitter i väggarna innan rivningen, så att det nya köket får rätt förutsättningar i stället för att ärva de gamla problemen.",
      ]}
      localFaq={[
        {
          q: "Golvet i vårt kök lutar. Kan ni ändå sätta in ett nytt kök?",
          a: "Ja. Hur vi gör beror på hur mycket det lutar. Några centimeter över kökets längd löser vi med flytspackel, som ger ett plant underlag för skåp och golv. Lutar det mer, eller om bjälklaget sviktar, reglar vi upp ett nytt golv. Vi mäter vid platsbesöket, och metoden ingår i det fasta priset.",
        },
        {
          q: "Vi bor i ett gammalt hus nära Gamla bron i Arboga. Får vi ändra köket som vi vill?",
          a: "Inne i köket, ja. Begränsningarna gäller i första hand husets yttre, som fönster och fasad, där kommunen kan ha synpunkter i en äldre stadskärna. Ska ni flytta köket till ett annat rum eller ändra avlopp och ventilation kan det krävas en anmälan, och vi hjälper er att ta reda på vad som gäller för just ert hus.",
        },
        {
          q: "Hur fungerar rotavdraget om vi är två som äger huset?",
          a: "Då kan ni båda använda ert avdrag. Rotavdraget är 30 procent av arbetskostnaden, högst 50 000 kronor per person och år 2026, så ett hushåll med två ägare kan få avdrag på upp till 100 000 kronor om arbetskostnaden räcker till det. Vi delar upp fakturan efter hur ni vill fördela avdraget och sköter ansökan.",
        },
      ]}
    />
  )
}
