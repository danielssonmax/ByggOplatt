import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Västerås",
  description:
    "Badrumsrenovering i Västerås, i lägenheter från 60-talet och nya hus vid Mälaren. Behörig våtrum, en kontaktperson och fast pris, 40 minuter från vår bas.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/vasteras",
  },
  openGraph: {
    title: "Badrumsrenovering Västerås | Bygg & Plattsättning",
    description:
      "Nytt badrum i Västerås: tätskikt enligt Byggkeramikrådets regler, VVS, el, plattsättning och intyg till föreningen. Kostnadsfri offert med fast pris.",
    url: "https://byggoplattsattning.se/badrumsrenovering/vasteras",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringVasteras() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Västerås"
      heroTitle="Badrumsrenovering i Västerås"
      heroDescription="Västerås är den största staden vi arbetar i, och de flesta badrum vi renoverar här ligger i lägenheter från 1960- och 70-talen eller i nyare hus vid Mälaren. Vi tar hela entreprenaden med en kontaktperson och behörighet för våtrum."
      introTitle="Badrum i Sveriges sjätte största tätort"
      introContent={[
        "Mellan 1960 och 1970 växte Västerås från 76 000 till nästan 100 000 invånare. Bäckby, Råby, Vallby och Viksäng byggdes under de åren, och samtidigt förnyades större delen av centrum genom citysaneringen. Resultatet är tiotusentals badrum med betongbjälklag, gjutjärnsbrunnar och ursprungliga eller en gång renoverade tätskikt. De är nu i den ålder där stambyten och badrumsrenoveringar står på föreningarnas och villaägarnas listor.",
        "Vid vattnet har staden fått nya bostadsområden, som Lillåudden och Öster Mälarstrand. Badrummen där är byggda enligt moderna regler, och när vi renoverar handlar det oftare om nytt kakel, ny inredning eller en större dusch än om att rädda konstruktionen. Vi gör båda typerna av jobb, och offerten ser olika ut beroende på vilket hus du bor i.",
        "Vi kör till Västerås över Kvicksund på riksväg 56, ungefär 45 kilometer och drygt 40 minuter från vår bas i Eskilstuna. Arbetet planeras så att samma lag är på plats hela veckan. Du har en kontaktperson från platsbesök till färdigt badrum, tätskiktet läggs enligt Byggkeramikrådets branschregler och priset är fast.",
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
        "Vi är vana vid bostadsrätter från 1960- och 70-talen, med allt vad det innebär av föreningskrav, intyg och samordning med grannar kring vattenavstängning.",
        "Drygt 40 minuter över Kvicksund från vår bas. Vi lägger arbetsveckorna i Västerås sammanhängande, så att rivning, tätskikt och plattsättning följer på varandra utan luckor.",
        "Behörigt företag för våtrum enligt Byggkeramikrådet och Säker Vatten. Du får kvalitetsdokument att lämna till föreningen eller försäkringsbolaget.",
        "Ett fast pris i en tydlig offert, och en kontaktperson i stället för tre hantverkare att jaga.",
      ]}
      ctaTitle="Nytt badrum i Västerås med en kontaktperson"
      ctaDescription="Skicka några rader om lägenheten eller huset och vad du vill göra. Vi bokar ett platsbesök och återkommer med kostnadsfri offert och fast pris."
      localTitle="Så lägger vi upp ett badrumsjobb i Västerås"
      localContent={[
        "Eftersom resan tar drygt 40 minuter samlar vi platsbesöken i Västerås till samma dagar och lägger själva arbetet i sammanhängande veckor. Det gör att du får en tidplan där tätskiktets torktider, inte våra resor, bestämmer hur lång renoveringen blir. Material beställs och levereras till adressen innan rivningen börjar.",
        "I bostadsrätt är det föreningen som avgör vad som får göras med stammar, golvbrunn och ventilation, och många föreningar i Västerås kräver intyg från ett behörigt företag. En invändig renovering kräver normalt inte bygglov från Västerås stad, men ändringar av bärande delar, ventilation eller vatten och avlopp kan behöva anmälas. Vi hjälper dig med vad som ska in till föreningen och kommunen.",
      ]}
      localFaq={[
        {
          q: "Jobbar ni i bostadsrättsföreningar i Västerås, till exempel i Bäckby eller Viksäng?",
          a: "Ja. Lägenheterna från 1960- och 70-talen är en stor del av de badrum vi renoverar. Vi stämmer av med föreningen om stammar och vattenavstängning, lämnar de intyg som krävs och förlägger bullriga moment till tider som fungerar för grannarna.",
        },
        {
          q: "Hur påverkar resan från Eskilstuna priset på en badrumsrenovering i Västerås?",
          a: "Resorna ingår i det fasta priset, och eftersom vi planerar arbetet i hela veckor påverkar de tidplanen marginellt. Du får samma offert med rivning, tätskikt, VVS, el och plattsättning specificerat som en kund i Eskilstuna.",
        },
        {
          q: "Vårt badrum på Lillåudden är från 2000-talet. Måste tätskiktet göras om om vi bara vill byta kakel?",
          a: "Ja, i praktiken. När kaklet rivs förstörs tätskiktet under det, så ett nytt måste läggas enligt dagens branschregler. Däremot är underlaget i ett modernt hus ofta i bra skick, vilket gör jobbet kortare än i äldre hus.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
