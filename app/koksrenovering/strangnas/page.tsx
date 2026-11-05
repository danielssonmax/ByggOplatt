import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Strängnäs",
  description:
    "Köksrenovering i Strängnäs, en halvtimme från vår bas i Eskilstuna. Från trähusen kring domkyrkan till nya lägenheter i Eldsundsviken, med fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/strangnas",
  },
  openGraph: {
    title: "Köksrenovering Strängnäs | Bygg & Plattsättning",
    description:
      "Köksrenovering i Strängnäs med en kontaktperson från rivning till färdigt kök. Vi kör E20 från Eskilstuna, cirka 26 minuter, och lämnar fast pris.",
    url: "https://byggoplattsattning.se/koksrenovering/strangnas",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringStrangnas() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Strängnäs"
      heroTitle="Köksrenovering i Strängnäs"
      heroDescription="Strängnäs ligger drygt tre mil från vår bas, en halvtimme längs E20. Vi renoverar kök i trähusen kring domkyrkan, i husen som byggdes efter branden 1871 och i de nyare lägenheterna i Eldsundsviken, och tar hela jobbet från rivning till montering med en kontaktperson."
      introTitle="Kök i trästaden under domkyrkan"
      introContent={[
        "Strängnäs har ett gatunät som i stort sett är oförändrat sedan 1600-talets mitt. Längs Gyllenhjelmsgatan, anlagd på 1640-talet, står trähus som har sett många kök komma och gå. I ett sådant hus är köksrenoveringen lika mycket snickeri som installation: golv som ska rätas, väggar som inte är vinkelräta och fönster som sitter där de sitter, oavsett var överskåpen vill vara.",
        "Branden 1871 förstörde stora delar av stadens nordöstra del, så bebyggelsen i centrum är antingen gammal trästad eller uppförd efter branden. Husen från sent 1800-tal har ofta rejäl takhöjd och stora rum, men också vatten- och avloppsstammar som bytts i omgångar. Vi kontrollerar vad som sitter i väggarna innan vi lämnar offert, inte efter rivningen.",
        "I Eldsundsviken, den nyare stadsdelen på det tidigare militärområdet, handlar jobbet oftare om att byta ut ett kök från 2000-talet mot något som passar hushållet bättre. Där är stommen rak och installationerna moderna, så fokus hamnar på planlösning, förvaring och vitvaror. Oavsett hustyp sköter vi rivning, VVS, el, stänkskydd, montering och målning, med fast pris.",
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
        "Du får ett fast pris efter platsbesök. I trähusen kring domkyrkan tittar vi särskilt på golvnivåer och stammar innan vi räknar, så att offerten inte behöver justeras när rivningen är gjord.",
        "Tre hustyper, tre sätt att jobba. Vi anpassar underarbete och montering efter om köket sitter i ett kvarter från 1600-talet, i ett hus byggt efter branden 1871 eller i en lägenhet i Eldsundsviken.",
        "En kontaktperson hela vägen. Rörmokare, elektriker, plattsättare och målare bokas och samordnas av oss, och du har ett nummer att ringa när du undrar något.",
        "En halvtimme från vår bas. E20 har motorvägsstandard förbi Strängnäs sedan 2004, så vägen från Kyrkogatan i Eskilstuna tar cirka 26 minuter, vilket gör platsbesök och leveranser enkla att planera.",
      ]}
      ctaTitle="Planerar du nytt kök i Strängnäs?"
      ctaDescription="Skicka några rader om köket och vilket hus det sitter i, så bokar vi ett platsbesök. Vi räknar på plats och lämnar ett fast pris, utan kostnad."
      heroImage="/hero-image.jpg"
      localTitle="Att renovera kök i Strängnäs"
      localContent={[
        "Strängnäs ligger i samma län som Eskilstuna, och resvägen längs E20 är en av de enklaste vi har. Det gör att vi gärna lägger platsbesök i Strängnäs tidigt på dagen och hinner tillbaka till pågående jobb, och att materialleveranser kan samordnas med våra leverantörer i Eskilstuna. Kommunen som handlägger en eventuell anmälan är Strängnäs kommun.",
        "Det kommunala dricksvattnet i Strängnäs kommer via ledning från Norsborgs vattenverk i Botkyrka. För köket spelar det mindre roll varifrån vattnet kommer än hur ledningarna i huset ser ut: i de äldre husen är stammarna ofta bytta i omgångar, och ibland sitter gamla kopplingar kvar bakom skåpen. Vi går igenom vad som finns bakom skåpen innan vi lämnar offert.",
      ]}
      localFaq={[
        {
          q: "Vi bor i ett gammalt trähus i centrala Strängnäs. Kan golvet jämnas ut?",
          a: "Ja. Vi mäter lutningen vid platsbesöket och väljer metod efter hur stor den är: flytspackling när det handlar om centimeter, uppreglat nytt golv när det handlar om mer. Skåpen ställs sedan på ett plant underlag, vilket gör att bänkskiva, diskmaskin och luckor hamnar rätt.",
        },
        {
          q: "Får vi använda rotavdraget på en köksrenovering?",
          a: "Om du äger bostaden och bor i den, ja. Avdraget är 30 procent av arbetskostnaden, högst 50 000 kronor per person och år 2026. Material, vitvaror och resor räknas inte. Vi gör avdraget på fakturan och ansöker hos Skatteverket.",
        },
        {
          q: "Hur ska vi klara oss utan kök under tiden?",
          a: "Vi lägger upp arbetet så att tiden utan kök blir så kort som möjligt, och berättar i tidplanen exakt när spis, vatten och diskmaskin är ur bruk. Många ställer en tillfällig arbetsbänk med mikro och kaffebryggare i ett annat rum, och om det går kan en provisorisk vattenpunkt ordnas.",
        },
      ]}
    />
  )
}
