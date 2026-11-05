import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Köksrenovering i Torshälla",
  description:
    "Köksrenovering i Torshälla, tolv minuter från vår bas i Eskilstuna. Vi är vana vid trähusens sneda golv och de låga taken i den gamla stadskärnan.",
  alternates: {
    canonical: "https://byggoplattsattning.se/koksrenovering/torshalla",
  },
  openGraph: {
    title: "Köksrenovering Torshälla | Bygg & Plattsättning",
    description:
      "Köksrenovering i Torshälla, knappt en mil från vår bas i Eskilstuna. Vi tar hela jobbet från rivning till montering, med fast pris och en kontaktperson.",
    url: "https://byggoplattsattning.se/koksrenovering/torshalla",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/hero-image.jpg"],
  },
}

export default function KoksrenoveringTorshalla() {
  return (
    <ServiceCityPage
      serviceName="Köksrenovering"
      cityName="Torshälla"
      heroTitle="Köksrenovering i Torshälla"
      heroDescription="Torshälla ligger knappt en mil norr om vår bas, så vi är på plats på tolv minuter. Vi renoverar kök i allt från trähusen i den gamla stadskärnan till villorna och lägenheterna från 60-, 70- och 80-talen, och sköter rivning, installationer, kakel och montering med en kontaktperson."
      introTitle="Kök i en stad med privilegier från 1317"
      introContent={[
        "Torshälla fick sina stadsprivilegier 1317 och är den äldsta staden i Rekarnebygden. Runt Bergströmska gården ligger de äldsta bevarade kvarteren av småstadsbebyggelsen, trähus där golv och väggar sällan är i våg. Att sätta ett nytt kök i ett sådant hus är ett annat jobb än i en nybyggd lägenhet, och det är precis den sortens jobb vi är bra på.",
        "I ett gammalt trähus börjar köksrenoveringen med att mäta. Golvet kan luta flera centimeter på en kökslängd, väggarna är sällan vinkelräta och taket kan vara lägre än vad dagens standardskåp är ritade för. Vi flytspacklar golvet när det behövs, bygger ut och shimsar skåpstommarna och anpassar överskåp och fläkt till takhöjden, så att resultatet ser rakt ut även om huset inte är det.",
        "Villorna och flerbostadshusen runt stadskärnan byggdes till stor del mellan 1960 och 1980. Där är stommen rakare, men köken har ofta kvar originalel och ventilation från byggåret. Vi tar hand om hela renoveringen: rivning, VVS och el via behöriga yrkesgrupper, stänkskydd, montering, vitvaror och målning, och du får ett fast pris innan vi börjar.",
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
        "Vi kan gamla trähus. Sneda golv, bulliga väggar och bjälklag som rört sig i hundra år är vardag för oss, och vi planerar underarbetet så att skåp, bänkskiva och kakel hamnar rakt.",
        "Knappt en mil och tolv minuter från vår bas på Kyrkogatan i Eskilstuna. Det gör ett platsbesök i Torshälla enkelt att boka, och kompletteringar av material tar inte en halv dag.",
        "Samma kontaktperson från första mätningen till sista målade listen. Vi samordnar rörmokare, elektriker, plattsättare och målare, så att du slipper vara projektledare i ditt eget kök.",
        "Fast pris efter platsbesök. I äldre hus är det extra viktigt att vi har sett golv, väggar och ledningar innan vi räknar, så att offerten håller hela vägen.",
      ]}
      ctaTitle="Nytt kök i trähuset eller villan i Torshälla?"
      ctaDescription="Berätta hur köket ser ut i dag och vad du vill förändra, så bokar vi ett platsbesök. Offerten är kostnadsfri, och priset är fast."
      heroImage="/hero-image.jpg"
      localTitle="Köksrenovering i Torshälla, nära och i gammal miljö"
      localContent={[
        "Torshälla hör till Eskilstuna kommun sedan 1971 och ligger bara sju kilometer norr om centrala Eskilstuna. För oss betyder det att Torshälla i praktiken är hemmaplan: samma kommun för eventuella anmälningar, samma leverantörer av kakel och inredning, och en resväg på tolv minuter från Kyrkogatan. Vi kan vara på plats tidigt på morgonen och ändå hinna hämta det som saknas under dagen.",
        "Den gamla stadskärnan runt Rådhustorget och kyrkan från 1100-talet är en miljö där man är försiktig med husens yttre. Inne i köket har du däremot stor frihet. Vanliga önskemål är att få in en diskmaskin där det aldrig funnits någon, att dra fram vatten till en kyl med ismaskin eller att byta den gamla spisen mot induktion, vilket nästan alltid kräver ny elmatning.",
      ]}
      localFaq={[
        {
          q: "Hur lång tid tar en köksrenovering i ett äldre trähus i Torshälla?",
          a: "Längre än i en modern lägenhet, framför allt för att underarbetet tar tid. Golv som ska flytspacklas måste torka innan skåpen kan ställas, och väggar som ska kaklas behöver ofta rätas upp först. Vi ger dig en tidplan moment för moment i offerten, så att du vet när köket är ur bruk och när det är klart.",
        },
        {
          q: "Måste jag anmäla köksrenoveringen till kommunen?",
          a: "Ett kök som byts på samma plats behöver normalt ingen anmälan. Ska en bärande vägg öppnas, eller avlopp och ventilation ändras i större omfattning, kan det krävas en anmälan till Eskilstuna kommun, som Torshälla tillhör. Vi hjälper dig reda ut vad som gäller innan arbetet börjar.",
        },
        {
          q: "Kan ni montera ett kök jag redan har beställt?",
          a: "Berätta om du redan valt kök, så går vi igenom vad vi kan ta hand om: rivning, VVS och el, flytspackling, stänkskydd, montering av stommar och luckor, vitvaror och målning. Det viktiga är att vi ser ritningen innan rivningen, så att el- och vattenuttag hamnar där det nya köket vill ha dem.",
        },
      ]}
    />
  )
}
