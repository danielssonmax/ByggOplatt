import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Västerås",
  description:
    "Plattsättare i Västerås: badrum i Bäckby, Råby och Vallby, kök på Kyrkbacken och nya lägenheter på Lillåudden. Behörigt våtrum, storformat och fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/vasteras",
  },
  openGraph: {
    title: "Plattsättning Västerås | Bygg & Plattsättning",
    description:
      "Plattsättare i Västerås: badrum i Bäckby, Råby och Vallby, kök på Kyrkbacken och nya lägenheter på Lillåudden. Behörigt våtrum, storformat och fast pris.",
    url: "https://byggoplattsattning.se/plattsattning/vasteras",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningVasteras() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Västerås"
      heroTitle="Plattsättning i Västerås"
      heroDescription="Västerås är Sveriges sjätte största tätort, och en stor del av husen här byggdes under 1960-talet när staden växte med över 20 000 invånare på tio år. Vi kör hit på drygt 40 minuter från Eskilstuna och sätter kakel och klinker i allt från lägenheterna i Bäckby till de nya husen vid Mälaren."
      introTitle="Plattsättning i en stad som byggdes på 1960-talet"
      introContent={[
        "Mellan 1960 och 1970 ökade Västerås folkmängd från 76 000 till nästan 100 000, och under samma år byggdes Bäckby, Råby, Vallby och Viksäng. Samtidigt förnyades centrum i den stora citysaneringen. Resultatet är att en mycket stor del av stadens badrum och kök sitter i hus med betongbjälklag från den tiden, där det ursprungliga kaklet och tätskiktet ofta har passerat sin tekniska livslängd.",
        "Betongunderlag är tacksamma för en plattsättare. De är stumma och plana, och storformatsplattor i 60 x 60 eller 60 x 120 cm kan läggas med tunna fogar. Men badrummen från den här tiden har ofta gjutna golv utan fall och golvbrunnar som behöver bytas. Vi bygger upp nytt fall mot brunnen, lägger tätskikt enligt Byggkeramikrådets branschregler och är behöriga för våtrum enligt kraven från Byggkeramikrådet och Säker Vatten.",
        "I de nya bostadsområdena vid vattnet, som Lillåudden och Öster Mälarstrand, är förutsättningarna moderna, men också där vill många byta till en annan stil än den som byggaren valde. Och i Kyrkbackens trähus nedanför domkyrkan gäller samma regler som i andra gamla hus: små format, noggrann spackling och respekt för att stommen rör sig.",
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
        "Vi kör till Västerås via riksväg 56 över Mälaren vid Kvicksund, ungefär 45 kilometer från vår bas. Det är ett avstånd vi är vana vid, och vi planerar arbetsdagarna så att vi är på plats hela dagar i stället för att åka fram och tillbaka.",
        "Erfarenhet av badrum från 1960- och 70-talen. Vi vet hur de gjutna golven är uppbyggda, var stammarna brukar gå och hur man får ett riktigt fall mot brunnen i ett rum som aldrig hade något.",
        "Vi är behöriga för våtrum enligt Byggkeramikrådets och Säker Vattens krav. I en bostadsrättsförening är det ofta ett krav för att få renovera badrummet, och vi lämnar dokumentation som styrelsen kan arkivera.",
        "En kontaktperson och ett fast pris. Vi samordnar rörmokare och elektriker när det behövs, och du får veta totalkostnaden innan vi river det första kaklet.",
      ]}
      ctaTitle="Nytt kakel i Västerås?"
      ctaDescription="Beskriv huset och rummet, så återkommer vi med ett förslag på tid för platsbesök och därefter en offert med fast pris."
      localTitle="Så lägger vi upp ett plattsättningsjobb i Västerås"
      localContent={[
        "Det första vi vill veta är vilket hus du bor i. Ett badrum i ett sextiotalshus i Råby planeras annorlunda än ett på Lillåudden från 2000-talet, och ett kök i ett trähus på Kyrkbacken är en tredje sak. Vid platsbesöket mäter vi upp, kontrollerar golvets fall och ser om det finns ett befintligt tätskikt som måste bort tillsammans med det gamla kaklet.",
        "Bor du i bostadsrätt tar vi också reda på vad föreningen kräver. Många föreningar vill ha en anmälan och intyg på våtrumsbehörighet innan arbetet börjar. När det är klart får du en offert där varje moment har sitt eget pris, och vi bokar in dagarna i ett sammanhängande block så att badrummet är ur bruk så kort tid som möjligt.",
      ]}
      localFaq={[
        {
          q: "Bostadsrättsföreningen i Västerås kräver behörig våtrumsfirma. Uppfyller ni det?",
          a: "Ja. Vi uppfyller kraven från Byggkeramikrådet och Säker Vatten för att bygga behöriga våtrum, och vi lämnar den dokumentation som föreningar brukar be om. Be gärna styrelsen precisera vad de vill ha, så skickar vi det innan arbetet börjar. Det brukar göra godkännandet snabbare.",
        },
        {
          q: "Går det att lägga 60 x 120-plattor på golvet i en lägenhet från 1960-talet?",
          a: "Oftast, ja. Betongbjälklagen i husen från den tiden är stabila, och det är just stumma underlag som storformat behöver. Det som krävs är att golvet först avjämnas så att det är helt plant och, i badrum, har rätt fall mot brunnen. Det räknar vi in i offerten.",
        },
        {
          q: "Hur hanterar ni resan från Eskilstuna om något behöver kompletteras?",
          a: "Vi planerar jobbet i Västerås som hela arbetsdagar och ser till att material och verktyg finns på plats från start. Små kompletteringar, som en extra låda kakel, hämtar vi på vägen. Restiden på drygt 40 minuter är inräknad i offerten, så den påverkar inte priset i efterhand.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
