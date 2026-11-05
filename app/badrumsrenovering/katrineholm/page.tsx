import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Katrineholm",
  description:
    "Badrumsrenovering i Katrineholm i hus från 1960- till 80-talen. Behörig våtrum, fast pris och arbete i hela veckor, en timme från vår bas i Eskilstuna.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/katrineholm",
  },
  openGraph: {
    title: "Badrumsrenovering Katrineholm | Bygg & Plattsättning",
    description:
      "Nytt badrum i Katrineholm: golvbrunn, tätskikt enligt branschregler, VVS, el och plattsättning. Planerat i sammanhängande veckor med en kontaktperson.",
    url: "https://byggoplattsattning.se/badrumsrenovering/katrineholm",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringKatrineholm() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Katrineholm"
      heroTitle="Badrumsrenovering i Katrineholm"
      heroDescription="Katrineholm är den ort som ligger längst från vår bas, en timme via väg 230 och riksväg 56, och därför planerar vi badrumsrenoveringar här i hela veckor. Stadens bostäder från 1960- till 80-talen är i den ålder där badrummen behöver göras om från grunden."
      introTitle="Badrum i järnvägsstaden som byggdes ut på 60-, 70- och 80-talen"
      introContent={[
        "Katrineholm växte fram kring järnvägsknuten från 1860-talet, men merparten av dagens bostäder tillkom långt senare. Under 1960- till 1980-talen byggdes Sandbäcken, Nävertorp, Gersnäs, Lasstorp och Värmbol, och eftersom folkmängden sedan stod nästan stilla fram till 2010 är få hus yngre än så. Badrummen i de områdena är nu fyrtio till sextio år gamla, och det är där de flesta av våra förfrågningar från Katrineholm kommer ifrån.",
        "I ett badrum från den tiden byter vi som regel golvbrunn, lägger nytt tätskikt enligt Byggkeramikrådets branschregler, drar om VVS och el och sätter nytt kakel och klinker. Dricksvattnet i Katrineholm är medelhårt, 5 till 6 tyska grader enligt Sörmland Vatten, vilket ger mer kalk på blandare och glas än i Eskilstuna. Det är en av anledningarna till att vi gärna föreslår storformat med få fogar och ytor som är lätta att torka av.",
        "Resan från Kyrkogatan i Eskilstuna tar omkring en timme. Vi lägger därför platsbesök och arbetsdagar i Katrineholm i block, med samma plattsättare på plats hela veckan och material levererat innan rivningen börjar. Du har en kontaktperson hos oss, och offerten lämnas kostnadsfritt med fast pris.",
      ]}
      features={[
        {
          title: "Rivning och bortforsling",
          description:
            "Vi tar hand om rivning av ditt gamla badrum och ser till att allt material forslas bort på ett miljövänligt sätt.",
        },
        {
          title: "VVS-installation",
          description:
            "Våra certifierade VVS-tekniker installerar all rördragning enligt gällande normer och föreskrifter.",
        },
        {
          title: "Elinstallation",
          description:
            "Behöriga elektriker utför all elinstallation för belysning, golvvärme och övriga eluttag i badrummet.",
        },
        {
          title: "Tätskikt enligt branschregler",
          description:
            "Vi applicerar tätskikt enligt Byggkeramikrådets branschregler för att säkerställa ett vattentätt badrum.",
        },
        {
          title: "Plattsättning av kakel och klinker",
          description:
            "Professionell plattsättning med noggrannhet och känsla för detaljer. Vi hjälper dig välja rätt kakel och klinker.",
        },
        {
          title: "Installation av inredning",
          description:
            "Montering av sanitetsporslin, duschväggar, badrumsmöbler och all övrig inredning till ditt nya badrum.",
        },
      ]}
      whyChooseUsContent={[
        "Fast pris i en tydlig offert. Resorna till Katrineholm är inräknade, och du betalar inget extra för att vi kommer från Eskilstuna.",
        "Badrum från 1960- till 80-talen är det vi gör mest. Gjutjärnsbrunnar, gamla tätskikt och el utan jordfelsbrytare är rutin för oss, inte överraskningar.",
        "Vi planerar jobb i Katrineholm som sammanhängande arbetsveckor. Du får en tidplan som håller, och tätskiktets torktid går inte åt till att vi kör fram och tillbaka.",
        "Behörighet för våtrum enligt Byggkeramikrådet och Säker Vatten, med kvalitetsdokument när arbetet är avslutat.",
      ]}
      ctaTitle="Planera ett badrum i Katrineholm med oss"
      ctaDescription="Vi är i Katrineholm regelbundet och bokar gärna in ett platsbesök vid nästa tillfälle. Du får en kostnadsfri offert med fast pris och en tidplan i hela veckor."
      localTitle="En timme bort: så organiserar vi badrum i Katrineholm"
      localContent={[
        "Avståndet gör att vi arbetar annorlunda i Katrineholm än på hemmaplan. Platsbesök samlas till samma dag, och när arbetet väl startar stannar laget tills badrummet är klart. Allt material, från tätskikt till kakel och porslin, beställs i förväg och levereras till dig innan vi river. Vi ber också om tillgång till bostaden på fasta tider så att ingen dag går förlorad.",
        "En invändig badrumsrenovering kräver normalt inte bygglov från Katrineholms kommun. Anmälan kan behövas om bärande konstruktion, ventilation eller vatten och avlopp ändras, och i bostadsrätt gäller föreningens regler för våtrum. Vi reder ut vad som gäller för ditt hus på platsbesöket och tar fram det underlag som föreningen eller kommunen vill ha.",
      ]}
      localFaq={[
        {
          q: "Tar ni jobb i Katrineholm trots att ni finns i Eskilstuna?",
          a: "Ja. Katrineholm är en av de sju orter vi arbetar i. Resan tar ungefär en timme, så vi lägger arbetet i hela veckor och tar inte emot jobb som är för små för att planeras så. Ett komplett badrum passar bra.",
        },
        {
          q: "Varför får jag så mycket kalk i badrummet i Katrineholm?",
          a: "Vattnet är medelhårt, 5 till 6 tyska grader enligt Sörmland Vatten. Det ger kalkavlagringar på glas, blandare och fogar snabbare än med mjukt vatten. Storformatsplattor, få fogar och glasytor som är lätta att torka av gör badrummet enklare att hålla rent.",
        },
        {
          q: "Hur lång tid tar en badrumsrenovering i Katrineholm?",
          a: "Räkna med tre till fyra veckor från rivning till färdigt badrum. Eftersom vi arbetar i sammanhängande veckor och har materialet på plats från start är det tätskiktets torktider som avgör, inte resorna.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
