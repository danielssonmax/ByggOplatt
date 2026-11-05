import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Katrineholm",
  description:
    "Plattsättare i Katrineholm, en timme från Eskilstuna. Kakel och klinker i husen kring Stora torget och i 1960–80-talens områden. Behörigt våtrum, fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/katrineholm",
  },
  openGraph: {
    title: "Plattsättning Katrineholm | Bygg & Plattsättning",
    description:
      "Plattsättare i Katrineholm, en timme från Eskilstuna. Kakel och klinker i husen kring Stora torget och i 1960–80-talens områden. Behörigt våtrum, fast pris.",
    url: "https://byggoplattsattning.se/plattsattning/katrineholm",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningKatrineholm() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Katrineholm"
      heroTitle="Plattsättning i Katrineholm"
      heroDescription="Katrineholm växte fram kring järnvägsknuten, och stadens hus speglar det: sten och tegel längs rutnätsgatorna från 1890-talet, betong i områdena från 1960- till 1980-talen. Vi kör hit från Eskilstuna på ungefär en timme och planerar varje jobb så att dagarna på plats blir hela."
      introTitle="Plattsättning längs järnvägen"
      introContent={[
        "Centrala Katrineholm följer en rutnätsplan från 1891, och flera av husen kring Stora torget och Storgatan, som Kullbergska huset från 1902–1904, är från tiden kring förra sekelskiftet. I dem möter vi ofta gamla cementgolv och putsade väggar, hårda underlag som fungerar utmärkt för plattsättning men som sällan är helt plana. En avjämning med flytspackel brukar vara första steget innan klinkern kan läggas.",
        "Under 1960- till 1980-talen byggdes Sandbäcken, Nävertorp, Gersnäs, Lasstorp och Värmbol, och sedan dess har staden inte växt särskilt mycket fram till 2010-talet. Det betyder att de flesta bostäder i Katrineholm är äldre än 40 år. Vi byter tätskikt enligt Byggkeramikrådets branschregler och är behöriga att bygga våtrum enligt kraven från både Byggkeramikrådet och Säker Vatten.",
        "Dricksvattnet i Katrineholm är medelhårt, omkring 5 till 6 tyska grader enligt Sörmland Vatten. Det är en detalj som faktiskt spelar roll när du väljer plattor och fog: kalkavlagringar syns mer på mörkt kakel och i mörka fogar. Vi berättar vad som är lätt att hålla rent och hjälper dig välja format, färg och fogfärg.",
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
        "Av våra sju orter ligger Katrineholm längst bort: drygt sex mil från Kyrkogatan, via väg 230 och riksväg 56. Därför planerar vi arbetet i sammanhängande dagar med allt material på plats, och restiden ligger i offerten från början.",
        "Vana vid sekelskifteshusen i centrum och betonghusen i ytterområdena. Vi vet hur gamla cementgolv beter sig och hur ett sextiotalsbadrum behöver byggas om för att få rätt fall och ett tätskikt som håller.",
        "Behörigt våtrum enligt Byggkeramikrådets och Säker Vattens krav, med dokumentation som du kan lämna till försäkringsbolaget eller nästa ägare.",
        "Över 20 år i yrket och ett fast pris i varje offert. Du har samma kontaktperson hela vägen, och vi tar själva hand om samordningen med rörmokare och elektriker.",
      ]}
      ctaTitle="Plattsättare till Katrineholm?"
      ctaDescription="Skicka gärna mått och några bilder på rummet redan nu. Då kan vi ge en första bedömning innan vi bokar in besöket och lämnar en offert med fast pris."
      localTitle="Så förbereder vi ett jobb i Katrineholm"
      localContent={[
        "Eftersom vi har en timmes resa vill vi få så mycket som möjligt klart vid ett enda platsbesök. Vi mäter rummet, kontrollerar underlag och golvbrunn, fotograferar och tar reda på hur stammarna går. Har du redan bilder och mått kan vi ofta lämna en preliminär bedömning per telefon, så att besöket kan läggas när du har bestämt dig för inriktning.",
        "När offerten är godkänd beställer vi allt material i förväg och kör ut det samma dag som rivningen börjar. Sedan arbetar vi hela dagar tills tätskikt och plattsättning är klara, med torktider inplanerade enligt tillverkarnas anvisningar. Du får en tidplan i förväg, så att du vet vilka dagar badrummet inte går att använda.",
      ]}
      localFaq={[
        {
          q: "Blir det dyrare att anlita er i Katrineholm eftersom ni kommer från Eskilstuna?",
          a: "Timpris och material är desamma som för alla våra kunder. Restiden, ungefär en timme enkel väg, räknas in i offerten som en egen post, så du ser exakt vad den kostar. Eftersom vi jobbar hela dagar på plats i stället för att dela upp jobbet blir antalet resor få, vilket håller nere den delen.",
        },
        {
          q: "Vi har ett hus från tidigt 1900-tal i centrum. Vad bör vi tänka på inför plattsättning?",
          a: "Framför allt hur golvet ser ut under det som ligger där i dag. Gamla cementgolv är hårda och bra, men ofta ojämna, och ibland ligger det trägolv ovanpå. Vi tar reda på det vid besöket och räknar in flytspackling om det behövs. Putsade väggar ska vara stabila innan kakel sätts, annars primar eller skivar vi om dem.",
        },
        {
          q: "Spelar det hårda vattnet någon roll för val av kakel?",
          a: "Ja, lite. Katrineholms vatten är medelhårt, och kalk från duschvattnet syns tydligare på mörka plattor och mörka fogar. Vill du ha ett mörkt badrum fungerar det ändå, men räkna med att torka av glas och plattor oftare. Rektifierade plattor med smala fogar ger färre ytor där kalken fastnar.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
