import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Köping",
  description:
    "Badrumsrenovering i Köping, i stenhusen efter branden 1889 och husen från 60-talet. Behörig våtrum, fast pris, 40 minuter från vår bas i Eskilstuna.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/koping",
  },
  openGraph: {
    title: "Badrumsrenovering Köping | Bygg & Plattsättning",
    description:
      "Nytt badrum i Köping: uppmätning, golvbrunn, tätskikt enligt branschregler, VVS, el och plattsättning. Kostnadsfri offert med fast pris.",
    url: "https://byggoplattsattning.se/badrumsrenovering/koping",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringKoping() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Köping"
      heroTitle="Badrumsrenovering i Köping"
      heroDescription="Köping byggdes om i sten efter branden 1889 och växte som mest på 1960-talet, så badrummen här sitter antingen i sekelskifteshus eller i hus från stadens stora byggdecennium. Vi renoverar båda sorterna, 40 minuter från vår bas i Eskilstuna."
      introTitle="Badrum i stenstaden och i 60-talets Köping"
      introContent={[
        "När stora delar av Köping brann 1889 byggdes centrum upp igen i sten, och många av de hus arkitekten Theodor Dahl ritade står kvar. Badrum i sådana hus är ofta inrymda i före detta garderober eller skrubbar, med tjocka väggar, ovanliga mått och stammar som bytts i flera omgångar. Det kräver noggrann uppmätning innan vi lovar hur dusch, toalett och handfat får plats.",
        "Stadens andra stora byggperiod var 1960-talet, när folkmängden ökade från knappt 17 000 till över 21 000 på tio år. Flerbostadshusen och villorna från de åren har badrum med betongbjälklag och gjutjärnsbrunnar, och där tätskiktet inte redan är bytt är det dags. Vi byter brunn, lägger tätskikt enligt Byggkeramikrådets branschregler och förnyar VVS och el i samma vända.",
        "Köping ligger 42 kilometer från Kyrkogatan i Eskilstuna via E20 och väg 250, en resa på ungefär 40 minuter. Vi lägger arbetet i sammanhängande veckor och har en kontaktperson som följer ditt badrum från platsbesök till slutbesiktning. Priset sätts fast i offerten, som du får utan kostnad.",
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
        "Vi uppfyller Byggkeramikrådets och Säker Vattens krav för behöriga våtrum, och dokumentationen du får duger till försäkringsbolag, förening och framtida köpare.",
        "Vi har erfarenhet av badrum i både sekelskiftets stenhus och 1960-talets flerbostadshus, vilket är precis de två hustyper som dominerar Köping.",
        "Fast pris som inte ändras i efterhand för sådant vi kunde ha sett vid platsbesöket, och en kontaktperson som svarar när du ringer.",
        "Fyrtio minuter via E20 och väg 250 från vår bas. Arbetsveckorna i Köping planeras sammanhängande så att torktider och leveranser faller på plats.",
      ]}
      ctaTitle="Låt oss titta på ditt badrum i Köping"
      ctaDescription="Vi kommer ut, mäter upp och går igenom husets förutsättningar. Därefter får du en kostnadsfri offert med fast pris och en tidplan att hålla."
      localTitle="Så gör vi ett badrum i Köping"
      localContent={[
        "Vi samordnar platsbesöken i Köping till samma dagar och genomför sedan renoveringen i en följd, normalt tre till fyra veckor. Material beställs efter uppmätningen och levereras till dig före rivning. Eftersom många badrum i stenstaden har ovanliga mått ritar vi upp placeringen av brunn, dusch och inredning innan vi beställer, så att allt passar första gången.",
        "Invändig renovering av ett badrum kräver normalt inte bygglov i Köpings kommun, men anmälan kan behövas vid ändringar av bärande delar, ventilation eller vatten och avlopp. I äldre stenhus är det inte ovanligt att väggar som ser oviktiga ut faktiskt är bärande, så vi kontrollerar det innan något rivs. I bostadsrätt gäller föreningens regler för våtrum.",
      ]}
      localFaq={[
        {
          q: "Kan ni få in en riktig dusch i ett litet badrum i ett gammalt stenhus i Köping?",
          a: "Oftast, men det avgörs av måtten och av var golvbrunnen kan placeras. Vi mäter upp, ritar förslag och visar vad som går att göra med de väggar som finns. Ibland är en platsbyggd dusch med glasvägg bättre än en kabin.",
        },
        {
          q: "Vad kostar det att renovera ett badrum i Köping?",
          a: "En komplett badrumsrenovering börjar runt 100 000 kronor och stiger med storlek, flytt av VVS och materialval. Resorna från Eskilstuna är inräknade i det fasta priset. Rotavdraget på 30 procent av arbetskostnaden kan dras av direkt på fakturan om du äger och bor i bostaden.",
        },
        {
          q: "Hur många dagar är ni på plats när ni renoverar i Köping?",
          a: "Alla arbetsdagar under renoveringen. Vi lägger jobb i Köping som hela veckor med samma plattsättare, så att du inte får perioder utan aktivitet mellan momenten.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
