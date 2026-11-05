import type { Metadata } from "next"
import { ServiceCityPage } from "@/components/service-city-page"

export const metadata: Metadata = {
  title: "Plattsättare i Eskilstuna",
  description:
    "Plattsättare med bas på Kyrkogatan i Gamla staden, Eskilstuna. Kakel, klinker och natursten i badrum, kök och hall. Behörigt våtrum och fast pris.",
  alternates: {
    canonical: "https://byggoplattsattning.se/plattsattning/eskilstuna",
  },
  openGraph: {
    title: "Plattsättning Eskilstuna | Bygg & Plattsättning",
    description:
      "Plattsättare med bas på Kyrkogatan i Gamla staden, Eskilstuna. Kakel, klinker och natursten i badrum, kök och hall. Behörigt våtrum och fast pris.",
    url: "https://byggoplattsattning.se/plattsattning/eskilstuna",
    type: "website",
    siteName: "Bygg & Plattsättning",
    locale: "sv_SE",
    images: ["/service-bathroom-1.webp"],
  },
}

export default function PlattsattningEskilstuna() {
  return (
    <ServiceCityPage
      serviceName="Plattsättning"
      cityName="Eskilstuna"
      heroTitle="Plattsättning i Eskilstuna"
      heroDescription="Vi är plattsättare med bas på Kyrkogatan i Gamla staden, ett stenkast från Fors kyrka och trähusen vid ån. Det betyder korta resvägar till hela Eskilstuna, och att vi kan komma förbi och titta på underlaget innan du bestämmer dig för format och material."
      introTitle="Plattsättning där vi själva bor och arbetar"
      introContent={[
        "Eskilstuna är vår hemstad, och det märks i hur vi jobbar. Vi vet att en stor del av stadens bostäder byggdes mellan krigen och under 1940- och 50-talen, när Eskilstuna växte som industristad. I de husen möter vi ofta betongbjälklag med gamla cementgolv, putsade väggar och badrum som redan har renoverats en gång. Varje sådant underlag kräver sin egen förberedelse innan en enda platta kan sättas.",
        "I badrum arbetar vi alltid enligt Byggkeramikrådets branschregler, och vi uppfyller kraven för att få bygga behöriga våtrum tillsammans med Säker Vatten. I torra rum, som hallen eller köket, handlar det i stället om att få golvet i våg och väggarna raka, så att storformatsplattor eller klassiskt kakel sitter utan läppning och med jämna fogar.",
        "Behöver du bara byta några spruckna plattor eller fräscha upp fogarna går det lika bra som en hel ombyggnad. Vi sätter kakel, klinker, mosaik och natursten i både villor, radhus och lägenheter, och vi lägger golvvärme under klinkern där det passar. Du får en tydlig offert med fast pris innan vi börjar.",
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
        "Vi utgår från Kyrkogatan 7C i Gamla staden och når de flesta adresser i Eskilstuna på en kvart. Det gör platsbesök enkla att boka, och vi kan stämma av på plats när frågor dyker upp under arbetet.",
        "Mer än 20 år i branschen, varav de flesta här i staden. Vi har sett hur husen från 1940- och 50-talen är byggda och vet vilka underlag som brukar behöva flytspacklas eller primas innan plattsättningen.",
        "Behörigt våtrum enligt Byggkeramikrådets och Säker Vattens krav. Tätskiktet läggs enligt BBV, och du får dokumentation på det som är gjort.",
        "En kontaktperson från första mötet till sista fogen. Vi samordnar själva rörmokare och elektriker om de behövs, så att du slipper jaga hantverkare.",
      ]}
      ctaTitle="Dags för nya plattor hemma i Eskilstuna?"
      ctaDescription="Hör av dig så bokar vi ett platsbesök. Du får en offert med fast pris på plattsättningen, utan kostnad och utan att binda dig till något."
      localTitle="Så planerar vi plattsättning i Eskilstuna"
      localContent={[
        "Första steget är nästan alltid ett besök hemma hos dig. Vi mäter upp ytan, kontrollerar om golvet lutar och knackar på väggarna för att höra om putsen sitter. I de äldre husen runt centrum och i stadsdelarna från efterkrigstiden hittar vi ofta flera lager av gamla golv ovanpå varandra, och då behöver vi veta vad som finns under innan vi kan säga vad som måste rivas.",
        "När vi vet hur underlaget ser ut kan du välja plattor med rätt förutsättningar. Stora format kräver ett plant golv, så ibland föreslår vi flytspackling först. I badrum går vi igenom fallet mot brunnen och var tätskiktet ska dras upp. Allt det här skriver vi in i offerten, så att priset gäller och inget kommer som en överraskning under arbetets gång.",
      ]}
      localFaq={[
        {
          q: "Kan ni komma och titta på underlaget innan jag köper kakel?",
          a: "Ja, det föredrar vi. Eftersom vi har vår bas i centrala Eskilstuna är ett platsbesök sällan något problem. Vi ser om golvet behöver spacklas eller om väggarna behöver rätas, och då vet du vilka format som fungerar innan du beställer plattorna. Du slipper köpa storformat till ett golv som visar sig luta två centimeter.",
        },
        {
          q: "Hur länge måste jag vänta efter flytspackling innan ni kan sätta klinker?",
          a: "Det beror på spacklets tjocklek och vilken produkt som används. Tunna skikt kan ofta plattsättas redan dagen efter, medan tjockare avjämningar behöver längre tid. Vi följer alltid tillverkarens anvisningar för torktid och planerar in väntetiden i tidplanen, så att du vet när vi är tillbaka.",
        },
        {
          q: "Sätter ni kakel i kök och hallar, eller bara i badrum?",
          a: "Vi sätter plattor i alla rum. Klinker i hallen tål grus och väta från vintrarna i Eskilstuna bättre än de flesta andra golv, och ett kakelsatt stänkskydd i köket är ett av de mindre jobb vi gör oftast. I torra rum behövs inget tätskikt, så arbetet går snabbare och kostar mindre än i ett badrum.",
        },
      ]}
      heroImage="/service-bathroom-1.webp"
      secondaryImage="/service-bathroom-2.webp"
    />
  )
}
