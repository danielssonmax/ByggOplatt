import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Arboga",
  description:
    "Badrumsrenovering i Arboga, i den medeltida stadskärnans trähus och i nyare villor. Behörig våtrum, fast pris, knappt 40 minuter från vår bas längs E20.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/arboga",
  },
  openGraph: {
    title: "Badrumsrenovering Arboga | Bygg & Plattsättning",
    description:
      "Nytt badrum i Arboga: förarbete i äldre hus, golvbrunn, tätskikt enligt branschregler, VVS, el och plattsättning. Kostnadsfri offert med fast pris.",
    url: "https://byggoplattsattning.se/badrumsrenovering/arboga",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringArboga() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Arboga"
      heroTitle="Badrumsrenovering i Arboga"
      heroDescription="Arbogas stadskärna har kvar sin medeltida gatustruktur, och husen längs ån har stått i flera hundra år. Att bygga ett badrum i ett sådant hus är ett annat jobb än i en villa från 1970, och vi gör båda, knappt 40 minuter från vår bas längs E20."
      introTitle="Badrum i en av Sveriges äldsta stadskärnor"
      introContent={[
        "Arboga var stad redan på 1200-talet, höll Sveriges första riksdag 1435 och har kvar en stadskärna där gatorna följer medeltidens mönster. Längs Arbogaån, till exempel i kvarteret Kungsgården vid Gamla bron, står trä- och stenhus som renoverats många gånger om. I de husen är golven sällan i våg, väggarna inte vinkelräta och rören bytta i omgångar, vilket vi tar med i beräkningen från första platsbesöket.",
        "Ett badrum i ett sådant hus kräver mer förarbete än ett i en nyare villa: golvet riktas upp, bjälklaget förstärks där det behövs och tätskiktssystemet väljs för att tåla rörelser i stommen. Själva våtrummet byggs sedan enligt Byggkeramikrådets branschregler precis som i ett nytt hus, med golvbrunn, tätskikt, plattsättning och dokumentation. Vi tar också VVS och el i samma entreprenad.",
        "Vi når Arboga västerut på E20, 44 kilometer och ungefär 37 minuter från Kyrkogatan i Eskilstuna. Arbetet planeras i sammanhängande veckor med samma lag på plats, och du har en kontaktperson från offert till slutbesiktning. Offerten är gratis, och summan i den är den du betalar.",
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
        "Knappt 40 minuter längs E20 från vår bas, i raka spåret. Vi är på plats varje arbetsdag under renoveringen.",
        "Vi är ett behörigt företag enligt Byggkeramikrådets och Säker Vattens regler, och tätskiktet dokumenteras med ett kvalitetsdokument som du behåller.",
        "Vi kan gamla hus. I Arbogas stadskärna räknar vi med sneda golv, bytta stammar och oväntade konstruktioner redan i offerten, i stället för att komma tillbaka med tillägg.",
        "Fast pris och en kontaktperson. Du får en tidplan på tre till fyra veckor och en person som svarar på frågorna längs vägen.",
      ]}
      ctaTitle="Nytt badrum i Arboga, i gammalt hus eller nytt"
      ctaDescription="Berätta vilket hus du bor i och vad du vill göra med badrummet. Vi bokar ett platsbesök och lämnar kostnadsfri offert med fast pris."
      localTitle="Så tar vi oss an badrum i Arboga"
      localContent={[
        "Platsbesöket i Arboga är viktigare än på många andra orter, eftersom husen i stadskärnan sällan ser likadana ut inuti som utanpå. Vi mäter, kontrollerar bjälklag och ventilation och tittar på hur vatten och avlopp är draget. Därefter får du en offert där förarbetet i ett äldre hus är specificerat, så att du ser vad som är badrum och vad som är hus.",
        "En invändig badrumsrenovering kräver normalt inget bygglov i Arboga kommun, men i äldre hus kan en anmälan behövas om bärande delar, ventilation eller vatten och avlopp ändras. Bor du i bostadsrätt gäller föreningens regler för våtrum. Vi arbetar i hela veckor i Arboga, med material levererat före rivning, så att tidplanen inte påverkas av resorna.",
      ]}
      localFaq={[
        {
          q: "Kan man bygga ett badrum enligt dagens regler i ett hus från 1700- eller 1800-talet i Arboga?",
          a: "Ja. Reglerna för tätskikt och golvbrunn gäller oavsett husets ålder, och de går att uppfylla även i en gammal trästomme med rätt förarbete. Skillnaden är att golvet oftast måste riktas upp och att systemet ska tåla rörelser.",
        },
        {
          q: "Hur många veckor är vi utan badrum i Arboga?",
          a: "Tre till fyra veckor är normalt. I ett äldre hus kan förarbetet lägga till några dagar, vilket vi anger i tidplanen från början. Vi är på plats alla arbetsdagar eftersom jobbet planeras som hela veckor.",
        },
        {
          q: "Ingår resorna från Eskilstuna i priset?",
          a: "Ja. Det fasta priset i offerten täcker resorna längs E20, och det ändras inte för att vi kommer från en annan ort. Rotavdraget på 30 procent av arbetskostnaden drar vi av direkt på fakturan om du är berättigad.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
