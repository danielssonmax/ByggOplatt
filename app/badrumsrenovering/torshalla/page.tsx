import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Badrumsrenovering i Torshälla",
  description:
    "Badrumsrenovering i Torshälla, tolv minuter från vår bas i Eskilstuna. Behörig våtrum, erfarenhet av gamla trähus och 60-talsvillor, fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/badrumsrenovering/torshalla",
  },
  openGraph: {
    title: "Badrumsrenovering Torshälla | Bygg & Plattsättning",
    description:
      "Nytt badrum i Torshälla med tätskikt enligt branschregler, VVS, el och plattsättning. Nio kilometer från vår bas ger snabba platsbesök.",
    url: "https://byggoplattsattning.se/badrumsrenovering/torshalla",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function BadrumsrenoveringTorshalla() {
  return (
    <ServiceCityPage
      serviceName="Badrumsrenovering"
      cityName="Torshälla"
      heroTitle="Badrumsrenovering i Torshälla"
      heroDescription="Torshälla ligger tolv minuter från vår bas, så ett badrum här får samma närvaro som ett i Eskilstuna. Vi renoverar badrum i både den gamla småstadsbebyggelsen och i villaområdena från 60- till 80-talen, med behörighet för våtrum."
      introTitle="Badrumsrenovering i Rekarnebygdens äldsta stad"
      introContent={[
        "Torshälla fick stadsprivilegier 1317 och har kvar en småstadskärna där kvarteren kring Bergströmska gården hör till det äldsta bevarade. I trähus av den åldern lutar golven, bjälklagen rör sig med årstiderna och badrummet har ofta byggts in i ett rum som aldrig var tänkt som våtrum. Det ställer krav på underlaget: vi riktar upp, förstärker där det behövs och väljer tätskiktssystem som tål rörelser.",
        "Runt den gamla staden ligger villa- och flerbostadsområden från 1960- till 1980-talen. Där är förutsättningarna andra: bjälklag av standardtyp, golvbrunnar i gjutjärn som bör bytas och tätskikt som sällan överlever en andra renovering. Vi byter brunn, lägger nytt tätskikt enligt Byggkeramikrådets branschregler och drar om VVS och el i samma entreprenad.",
        "Du har en kontaktperson hos oss från platsbesöket till färdigt badrum. Torshälla hör till Eskilstuna kommun, och vägen från Kyrkogatan tar ungefär tolv minuter längs E20, så vi kan komma förbi när en fråga behöver avgöras på plats. Offerten kostar inget, och priset i den är fast.",
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
        "Vi vet hur ett badrum i ett gammalt trähus i Torshälla skiljer sig från ett i en 70-talsvilla, och vi prissätter den skillnaden i offerten i stället för att lägga till den senare.",
        "Nio kilometer och tolv minuter från vår bas. Vi kan ha samma plattsättare på plats varje dag utan att pussla med resor, och ett oplanerat besök kostar inte en halv arbetsdag.",
        "Fast pris, tydlig tidplan och en person att ringa. Ett badrum tar normalt tre till fyra veckor, och du vet innan start vad det kommer att kosta.",
        "Behörig våtrum enligt Byggkeramikrådet och Säker Vatten. Alla våra plattsättare har utbildningen som krävs, och du får kvalitetsdokument när badrummet är klart.",
      ]}
      ctaTitle="Ett nytt badrum i Torshälla, planerat från Eskilstuna"
      ctaDescription="Berätta om ditt hus och ditt badrum, så bokar vi ett platsbesök. Vi är på plats inom en kvart från vår bas och lämnar kostnadsfri offert."
      localTitle="Tolv minuter bort: så jobbar vi i Torshälla"
      localContent={[
        "Närheten till vår bas gör Torshälla till en av de orter där vi arbetar nästan som på hemmaplan. Platsbesök bokas med kort varsel, material hämtas vid behov under dagen och arbetslaget åker inte någon annanstans mitt i veckan. För dig betyder det att tidplanen på tre till fyra veckor håller bättre än när resorna är långa.",
        "Många av Torshällas äldsta hus ligger i en kulturmiljö, men en invändig badrumsrenovering kräver normalt inte bygglov. En anmälan till Eskilstuna kommun kan behövas om bärande konstruktion, ventilation eller vatten och avlopp ändras, och i bostadsrätt gäller föreningens regler för våtrum. Vi går igenom vad som gäller för just ditt hus innan vi river.",
      ]}
      localFaq={[
        {
          q: "Går det att få ett modernt badrum i ett gammalt trähus i Torshälla?",
          a: "Ja, men underlaget avgör metoden. Lutande golv riktas upp med spackel eller nytt undergolv, och rörliga träbjälklag kräver tätskikt och skivor som tål rörelser. Vi bedömer konstruktionen på platsbesöket och skriver in eventuella förstärkningar i offerten.",
        },
        {
          q: "Hur länge pågår en badrumsrenovering i Torshälla?",
          a: "Normalt tre till fyra veckor från rivning till färdigt badrum. Eftersom vi är tolv minuter bort tappar vi inga dagar på logistik, och det är tätskiktets torktider som styr tidplanen mer än något annat.",
        },
        {
          q: "Behöver jag intyg på tätskiktet när badrummet är klart?",
          a: "Du får ett kvalitetsdokument från oss som behörigt företag enligt Byggkeramikrådets regler. Dokumentet är bra att ha för försäkringsbolaget, för en bostadsrättsförening och vid en framtida försäljning.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
