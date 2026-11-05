import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Katrineholm",
  description:
    "Köksrenovering i Katrineholm, i 60–80-talsområdena Sandbäcken, Nävertorp och Värmbol och i husen kring Stora torget. Fast pris och en kontaktperson.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/katrineholm",
  },
  openGraph: {
    title: "Köksrenovering Katrineholm | Bygg & Plattsättning",
    description:
      "Köksrenovering i Katrineholm med rivning, VVS, el, kakel och montering. Vi kommer från Eskilstuna via väg 230 och riksväg 56 och lämnar fast pris.",
    url: "https://byggoplattsattning.se/koksrenovering/katrineholm",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringKatrineholm() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Katrineholm"
      heroTitle="Köksrenovering i Katrineholm"
      heroDescription="Katrineholm växte fram kring järnvägen och byggdes ut på allvar mellan 1960 och 1980. Det betyder att många kök i staden är över 40 år gamla, ofta med originalel och ett vatten som sätter kalk. Vi renoverar kök från grunden med en kontaktperson, och kommer från vår bas i Eskilstuna via väg 230 och riksväg 56."
      introTitle="Kök i järnvägsstaden som byggdes ut 1960–1980"
      introContent={[
        "Katrineholm fick stadsrättigheter 1917, men den stora utbyggnaden kom senare: mellan 1960 och 1980 växte staden med områdena Sandbäcken, Nävertorp, Gersnäs, Lasstorp och Värmbol. Sedan stod folkmängden nästan stilla fram till 2010, så relativt få bostäder tillkom under de åren. Resultatet är att en stor del av stadens kök sitter i hus som är 40 till 60 år gamla.",
        "Ett kök från 70-talet som fortfarande fungerar är ofta ett kök som aldrig fått sina installationer sedda över. Elen är dragen för en spis med gjutjärnsplattor, inte för induktion, och avloppet under diskbänken har ibland kopplats om av flera ägare i rad. Vi öppnar och tittar innan vi räknar, så att offerten täcker det som faktiskt behöver göras.",
        "Dricksvattnet i Katrineholm är medelhårt, 5 till 6 tyska grader enligt Sörmland Vatten. Det syns på blandare, diskbänk och i diskmaskinen som kalkavlagringar, och det påverkar vilka ytor och vilken utrustning som är klok att välja. Vi tar hand om hela renoveringen, från rivning och nya ledningar till stänkskydd, montering, vitvaror och målning, med fast pris.",
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
        "Vi kan husen från 60-, 70- och 80-talen. Vi vet vad som brukar behöva göras bakom skåpen i ett kök från utbyggnadsåren, och planerar el, vatten och ventilation innan rivningen i stället för efter.",
        "Fast pris, räknat på plats. Katrineholm är den ort vi täcker som ligger längst från vår bas, så vi gör platsbesöket ordentligt och ser till att allt är med i offerten från början.",
        "Drygt sex mil och ungefär en timme från Kyrkogatan i Eskilstuna via väg 230 och riksväg 56. Vi planerar jobb i Katrineholm i hela dagar och i följd, så att restiden blir så liten del av jobbet som möjligt.",
        "En kontaktperson, flera yrkesgrupper. Vi samordnar rörmokare, elektriker, plattsättare och målare och håller dig uppdaterad, så att du inte behöver ringa runt.",
      ]}
      ctaTitle="Dags att göra om 70-talsköket i Katrineholm?"
      ctaDescription="Beskriv köket och vad du vill ändra, så bokar vi ett platsbesök. Offerten är kostnadsfri, priset fast, och tidplanen får du svart på vitt."
      heroImage="/hero-image.jpg"
      localTitle="Att renovera kök i Katrineholm"
      localContent={[
        "Katrineholm ligger drygt sex mil söder om vår bas, ungefär en timmes körning via väg 230 och riksväg 56, och är den ort vi täcker som ligger längst bort. Det påverkar hur vi lägger upp arbetet: vi beställer material så att allt finns på plats när momentet börjar, lägger jobbet i sammanhängande dagar och planerar platsbesöket i god tid tillsammans med dig. Bygglov och anmälningar handläggs av Katrineholms kommun.",
        "Centrum följer en rutnätsplan från 1891, med Kullbergska huset från 1902–1904 och Stora torget som fasta punkter. Här är husen äldre än i utbyggnadsområdena, och förutsättningarna för ett nytt kök skiljer sig: äldre stommar och ledningar i centrum, enklare stommar men installationer från byggåret i områdena från 1960–1980. Vattnets hårdhet gäller oavsett var i staden du bor, och vi väljer blandare, tätningar och ytor som klarar kalk.",
      ]}
      localFaq={[
        {
          q: "Vårt vatten sätter kalk överallt. Vad bör vi tänka på i det nya köket?",
          a: "Med medelhårt vatten, som i Katrineholm, lönar det sig att välja blandare med lättrengjorda ytor, en diskmaskin med inbyggd avhärdning och ett stänkskydd i material som inte tar skada av kalkfläckar. Vi går igenom alternativen vid platsbesöket, så att köket är lätt att hålla fint utan att du behöver kemikalier varje vecka.",
        },
        {
          q: "Elen i vårt hus från 70-talet, räcker den till induktionshäll?",
          a: "Sällan utan åtgärd. En induktionshäll behöver normalt en egen trefasgrupp, och många hus från utbyggnadsåren har gruppcentraler som behöver kompletteras. Vår elektriker bedömer centralen och matningen vid platsbesöket, och det som behöver göras ingår i det fasta priset.",
        },
        {
          q: "Hur lång tid tar det, och hur hanterar ni avståndet från Eskilstuna?",
          a: "Längden beror på omfattningen, och du får en tidplan i offerten. Avståndet hanterar vi genom att boka in jobbet i Katrineholm i hela, sammanhängande dagar och ha allt material på plats från start. Du märker det mest på att vi är noga med att platsbesöket blir komplett, så att inget behöver kompletteras i efterhand.",
        },
      ]}
    />
  )
}
