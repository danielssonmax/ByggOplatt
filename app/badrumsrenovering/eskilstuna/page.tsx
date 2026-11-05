import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Eskilstuna",
  description:
    "Badrumsrenovering i Eskilstuna med behörig våtrum och fast pris. Vi utgår från Gamla staden och renoverar badrum från rivning till inflyttning.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/eskilstuna",
  },
  openGraph: {
    title: "Badrumsrenovering Eskilstuna | Bygg & Plattsättning",
    description:
      "Totalentreprenad på badrum i Eskilstuna: tätskikt enligt branschregler, VVS, el och plattsättning. Kort väg till platsbesök från vår bas på Kyrkogatan.",
    url: "https://byggoplattsattning.se/badrumsrenovering/eskilstuna",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringEskilstuna() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Eskilstuna"
      heroTitle="Badrumsrenovering i Eskilstuna"
      heroDescription="Vi renoverar badrum i Eskilstuna med egna plattsättare och behörighet för våtrum. Vår bas ligger på Kyrkogatan i Gamla staden, så platsbesök och avstämningar sker med kort varsel. Du har en kontaktperson från rivning till färdigt badrum."
      introTitle="Badrum i en stad som byggdes på 40- och 50-talen"
      introContent={[
        "Eskilstuna växte som mest mellan krigen och under 1940- och 50-talen, och folkmängden toppade 1970. Det syns i bostadsbeståndet: en stor del av lägenheterna och villorna i staden är byggda före 1975. Badrummen i de husen har ofta renoverats en gång tidigare, ibland med tätskikt och golvbrunnar som inte motsvarar dagens branschregler. När vi öppnar ett sådant badrum börjar vi därför med att bedöma underlaget innan vi lovar något om tidplanen.",
        "Vi tar hela entreprenaden: rivning, nytt tätskikt enligt Byggkeramikrådets branschregler, VVS, el, plattsättning och montering av inredning. Du har en kontaktperson hos oss som samordnar de yrkesgrupper som behövs, och du slipper själv ringa runt mellan rörmokare och elektriker. Ett normalt badrum tar tre till fyra veckor från rivning till inflyttning.",
        "Eftersom vi utgår från Gamla staden kan vi komma förbi för ett platsbesök utan att det behöver planeras veckor i förväg. Det gäller oavsett om du bor i ett flerbostadshus nära centrum eller i en villa i stadens ytterområden. Offerten är kostnadsfri och anger ett fast pris, så att du vet vad badrummet kostar innan vi river.",
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
        "Vår bas ligger på Kyrkogatan 7C i Gamla staden. Det betyder korta transporter, snabba platsbesök och att vi kan titta förbi om något behöver avgöras på plats medan arbetet pågår.",
        "Vi är vana vid Eskilstunas bostäder från 1940- till 70-talen, där gamla tätskikt, betongbjälklag och ändrade rördragningar är vanliga. Vi räknar med det i offerten i stället för att bli överraskade.",
        "Behörighet för våtrum enligt Byggkeramikrådet och Säker Vatten. Du får dokumentation efter avslutat arbete, vilket försäkringsbolag och en framtida köpare kan efterfråga.",
        "En kontaktperson och ett fast pris. Samma person följer ditt badrum från första mötet till slutbesiktning, och priset i offerten är det du betalar.",
      ]}
      ctaTitle="Dags att se över badrummet hemma i Eskilstuna?"
      ctaDescription="Ring oss eller skicka några rader om ditt badrum, så bokar vi ett platsbesök i veckan. Offerten är kostnadsfri och priset fast."
      localTitle="Hemmaplan: så lägger vi upp ett badrum i Eskilstuna"
      localContent={[
        "Ett badrumsjobb i Eskilstuna börjar med att vi ses hemma hos dig, mäter upp och tittar på golvbrunn, stammar och ventilation. Eftersom vi finns i staden kan det mötet ofta ske inom några dagar. Därefter får du en offert med fast pris och en tidplan där rivning, tätskikt, plattsättning och montering är inlagda i rätt ordning.",
        "Invändig renovering av ett badrum kräver normalt inget bygglov i Eskilstuna kommun, men en anmälan kan behövas om bärande delar, ventilation eller vatten och avlopp ändras. Bor du i bostadsrätt gäller föreningens regler för våtrum, och många föreningar vill ha intyg om tätskikt och om att arbetet utförts av ett behörigt företag. Vi hjälper dig med underlaget.",
      ]}
      localFaq={[
        {
          q: "Hur snabbt kan ni komma på platsbesök i Eskilstuna?",
          a: "Oftast inom några dagar. Vi utgår från Kyrkogatan i Gamla staden och har kort väg till alla stadsdelar. Efter besöket får du en skriftlig offert med fast pris, normalt inom en vecka.",
        },
        {
          q: "Mitt badrum renoverades på 1990-talet. Måste tätskiktet bytas?",
          a: "I de flesta fall ja. Tätskikt som lades före dagens branschregler går inte att komplettera, och när kakel och klinker rivs försvinner ändå det gamla skiktet. Vi lägger nytt tätskikt enligt Byggkeramikrådets regler och dokumenterar arbetet, vilket också ditt försäkringsbolag förväntar sig.",
        },
        {
          q: "Kan jag använda rotavdraget på en badrumsrenovering i Eskilstuna?",
          a: "Ja, om du äger och bor i bostaden. Avdraget är 30 procent av arbetskostnaden, högst 50 000 kronor per person och år under 2026, och gäller inte material. Vi drar av beloppet direkt på fakturan och sköter ansökan hos Skatteverket.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
