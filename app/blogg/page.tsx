import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Tag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogg | Bygg & Plattsättning i Eskilstuna",
  description:
    "Läs våra senaste artiklar och tips om badrumsrenovering, köksrenovering, plattsättning och byggprojekt. Expertråd från Bygg & Plattsättning.",
  alternates: {
    canonical: "https://byggoplattsattning.se/blogg",
  },
}

// Blog posts data - will be replaced with real content later
const blogPosts = [
  {
    id: 1,
    title: "Guide: Planera din badrumsrenovering",
    slug: "planera-badrumsrenovering",
    date: "2024-01-15",
    author: "Bygg & Plattsättning",
    readTime: "5 min",
    category: "Badrumsrenovering",
    image: "/bathroom-modern.jpeg",
    content: `
      <p>Att renovera ett badrum är ett spännande men också komplext projekt som kräver noggrann planering och förberedelse. Med över 20 års erfarenhet inom byggbranschen har vi sett hur viktigt det är att ta sig tid att planera ordentligt innan man börjar riva.</p>

      <h2>1. Fastställ din budget</h2>
      <p>Det första och viktigaste steget är att fastställa en realistisk budget för ditt projekt. En badrumsrenovering kan kosta allt från 100 000 kr till flera hundra tusen kronor beroende på omfattning och materialval.</p>

      <h3>Vad ingår i budgeten?</h3>
      <ul>
        <li>Rivning och bortforsling av befintligt badrum</li>
        <li>VVS-installation (rör, kranar, dusch, toalett)</li>
        <li>Elinstallation (belysning, el till tvättmaskin/torktumlare)</li>
        <li>Tätskikt och golvvärme</li>
        <li>Kakel och klinker</li>
        <li>Sanitetsporslin och badrumsinredning</li>
        <li>Målning av tak och övriga ytor</li>
      </ul>

      <h2>2. Planera designen och funktionaliteten</h2>
      <p>Tänk på hur du vill att ditt nya badrum ska se ut och fungera. Skapa en lista över dina önskemål och prioritera dem. Några viktiga saker att tänka på:</p>
      
      <ul>
        <li>Vill du ha badkar eller dusch, eller både och?</li>
        <li>Behöver du plats för tvättmaskin och torktumlare?</li>
        <li>Hur mycket förvaring behöver du?</li>
        <li>Vilken stil föredrar du - modernt, klassiskt, skandinaviskt?</li>
      </ul>

      <h2>3. Välj material och färger</h2>
      <p>Valet av material och färger är avgörande för slutresultatet. Besök showrooms och materialleverantörer för att se och känna på olika alternativ. Kom ihåg att välja material som är lämpliga för våtutrymmen.</p>

      <h2>4. Hitta rätt hantverkare</h2>
      <p>En badrumsrenovering kräver flera olika yrkeskategorier - plattsättare, VVS-montörer, elektriker och eventuellt målare. Det kan vara fördelaktigt att anlita ett företag som kan samordna alla dessa arbeten, vilket sparar tid och minimerar risken för missförstånd.</p>

      <h2>5. Tidplan och genomförande</h2>
      <p>En komplett badrumsrenovering tar vanligtvis 3-4 veckor att genomföra. Planera för att vara utan badrum under denna tid, exempelvis genom att använda ett gästbadrum eller duscha hos vänner.</p>

      <h3>Viktiga branschregler att följa</h3>
      <p>Se till att din hantverkare följer alla branschregler, särskilt när det gäller tätskikt och vattenisolering. Detta är avgörande för att undvika vattenskador i framtiden.</p>

      <h2>Sammanfattning</h2>
      <p>En välplanerad badrumsrenovering ger ett resultat som du kommer att vara nöjd med i många år framöver. Ta dig tid att planera noggrant, välj kvalitetsmaterial och anlita erfarna hantverkare. Kontakta oss på Bygg & Plattsättning för en kostnadsfri konsultation och offert!</p>
    `,
  },
  {
    id: 2,
    title: "Så väljer du rätt kakel till ditt badrum",
    slug: "valja-ratt-kakel",
    date: "2024-01-10",
    author: "Bygg & Plattsättning",
    readTime: "4 min",
    category: "Plattsättning",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Att välja rätt kakel till badrummet är en av de viktigaste besluten i en badrumsrenovering. Kaklet påverkar inte bara utseendet utan också funktionaliteten och underhållet av ditt badrum. Här är vår guide till att göra det rätta valet.</p>

      <h2>Olika typer av kakel</h2>
      <p>Det finns flera olika typer av kakel att välja mellan, var och en med sina egna fördelar:</p>

      <h3>Porslin och keramik</h3>
      <p>Det mest populära valet för badrum. Porslin är tätare och mer motståndskraftigt mot vatten än keramik, men båda fungerar utmärkt i badrum.</p>

      <h3>Natursten</h3>
      <p>Ger ett exklusivt och tidlöst intryck. Kräver mer underhåll med impregnering, men håller i princip för evigt.</p>

      <h3>Mosaik</h3>
      <p>Perfekt för att skapa visuella effekter och passar särskilt bra i duschhörnan eller som en dekorativ rand.</p>

      <h2>Storlek och format</h2>
      <p>Storleken på kaklet påverkar upplevelsen av rummet:</p>
      <ul>
        <li>Stora plattor (60x60 cm eller större) ger ett modernt intryck och färre fogar att underhålla</li>
        <li>Mellanstora plattor (30x60 cm) är den vanligaste storleken och fungerar i de flesta badrum</li>
        <li>Små plattor och mosaik ger en mer traditionell känsla och är bra på ojämna ytor</li>
      </ul>

      <h2>Färg och mönster</h2>
      <p>Ljusa färger får ett litet badrum att kännas större, medan mörkare toner skapar en mysig och exklusiv känsla. Tänk på att trendiga mönster kan kännas daterade om några år, medan neutrala färger har en mer tidlös design.</p>

      <h2>Praktiska överväganden</h2>
      <h3>Halkskydd</h3>
      <p>På golvet är det viktigt att välja kakel med tillräckligt halkskydd, särskilt i duschen. Kolla R-värdet - ju högre, desto bättre halkskydd.</p>

      <h3>Underhåll</h3>
      <p>Tänk på hur mycket tid du vill lägga på underhåll. Ljust kakel och ljusa fogar kräver mer städning än mörkare alternativ. Rektifierat kakel har slipade kanter vilket ger tunnare fogar och lättare rengöring.</p>

      <h2>Budget</h2>
      <p>Kakel finns i alla prisklasser. Som tumregel kan man räkna med:</p>
      <ul>
        <li>Enkelt keramiskt kakel: 200-400 kr/m²</li>
        <li>Porslinsklinker: 400-800 kr/m²</li>
        <li>Natursten: 800-2000 kr/m²</li>
      </ul>

      <p>Kom ihåg att lägga till kostnader för fogmassa, tätskikt, lim och arbete.</p>

      <h2>Våra bästa tips</h2>
      <ul>
        <li>Beställ alltid 10-15% extra kakel för spill och framtida reparationer</li>
        <li>Besök showroom för att se och känna på kaklet innan du köper</li>
        <li>Ta hem prover och testa hur de ser ut i ditt badrum i olika ljus</li>
        <li>Tänk långsiktigt - välj en design du kommer trivas med i många år</li>
      </ul>

      <p>Behöver du hjälp med att välja rätt kakel eller vill ha professionell plattsättning? Kontakta oss på Bygg & Plattsättning för expertråd!</p>
    `,
  },
  {
    id: 3,
    title: "Trenderna inom köksrenovering 2024",
    slug: "kokstrender-2024",
    date: "2024-01-05",
    author: "Bygg & Plattsättning",
    readTime: "6 min",
    category: "Köksrenovering",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Köket är hjärtat i hemmet, och 2024 fortsätter trenden med att skapa kök som är både funktionella och estetiskt tilltalande. Här är de hetaste trenderna för köksrenovering detta år.</p>

      <h2>1. Naturliga material och färger</h2>
      <p>2024 handlar mycket om att ta in naturen i hemmet. Naturliga material som trä, sten och marmor är mer populära än någonsin. Färgpaletten domineras av varma, jordnära toner som terracotta, sage green och varma beiga nyanser.</p>

      <h3>Trädetaljer</h3>
      <p>Trädetaljer i köket, som öppna hyllor i ek eller valnöt, skapar värme och karaktär. Detta kombineras ofta med släta, moderna luckor för en balanserad look.</p>

      <h2>2. Mörka kök fortsätter vara populära</h2>
      <p>Mörka köksluckor i färger som mörkgrön, marinblå och svart fortsätter att vara trendigt. Det skapar en sofistikerad och dramatisk känsla, särskilt när det kombineras med mässing eller gulddetaljer.</p>

      <h2>3. Multifunktionella köksöar</h2>
      <p>Köksön är inte längre bara en arbetsyta - den är samlingspunkten i köket. 2024 års köksöar har ofta:</p>
      <ul>
        <li>Integrerad spis eller induktionshäll</li>
        <li>Sittplatser för minst 3-4 personer</li>
        <li>Integrerade förvaringslösningar</li>
        <li>Diskbänk eller barvask</li>
        <li>Laddningsstationer för mobiler och laptops</li>
      </ul>

      <h2>4. Smart köksdesign</h2>
      <p>Teknik integreras alltmer smidigt i köket:</p>
      <ul>
        <li>Induktionshällar med touchkontroll</li>
        <li>Smarta kylskåp som kan skapa inköpslistor</li>
        <li>Röststyrda kranblandare</li>
        <li>Belysning som kan styras via app</li>
        <li>Integrerade laddningsstationer</li>
      </ul>

      <h2>5. Öppen förvaring</h2>
      <p>Öppna hyllor och glasfronter fortsätter att vara populärt. Det skapar en luftig känsla och gör köket mer personligt. Dock kombineras ofta öppen förvaring med stängda skåp för en balanserad look och praktisk förvaring av vardagliga prylar.</p>

      <h2>6. Stora formatplattor</h2>
      <p>Stora keramiska plattor (ofta 60x120 cm eller större) används både på golv och som stänkskydd. Färre fogar ger ett modernt uttryck och underlättar städning.</p>

      <h2>7. Blandning av material</h2>
      <p>Istället för att matcha allt perfekt, vågar man nu blanda olika material och färger:</p>
      <ul>
        <li>En köksö i annan färg än övriga skåp</li>
        <li>Mix av olika bänkskivmaterial</li>
        <li>Kombination av metalliska ytskikt (som mässing och rostfritt)</li>
        <li>Variation i handtag och beslag</li>
      </ul>

      <h2>8. Hållbarhet i fokus</h2>
      <p>Medvetna val blir allt viktigare:</p>
      <ul>
        <li>Återvunna eller hållbart producerade material</li>
        <li>Energieffektiva vitvaror</li>
        <li>Lokalt producerade material</li>
        <li>Tidlösa designer som håller länge</li>
        <li>Kompostering integrerat i köksdesignen</li>
      </ul>

      <h2>9. Ljussättning</h2>
      <p>Belysningen blir allt viktigare och mer genomtänkt:</p>
      <ul>
        <li>Flera ljuskällor på olika nivåer</li>
        <li>Dimbar belysning för olika stämningar</li>
        <li>LED-strip under överskåp</li>
        <li>Påkostade taklampor som statement pieces</li>
      </ul>

      <h2>10. Minimalism med personlighet</h2>
      <p>Medan minimalism fortsätter att vara populärt, ser vi nu en rörelse mot att göra köket mer personligt. Konstverk, färgglada tillbehör och personliga föremål får ta plats även i det minimalistiska köket.</p>

      <h2>Sammanfattning</h2>
      <p>2024 års köksrenovering handlar om att skapa ett kök som både är vackert och funktionellt, med fokus på hållbarhet och personlighet. Oavsett vilken stil du föredrar, kom ihåg att välja lösningar som passar just ditt hem och din livsstil.</p>

      <p>Planerar du en köksrenovering? Kontakta Bygg & Plattsättning för en kostnadsfri konsultation och låt oss hjälpa dig att skapa ditt drömkök!</p>
    `,
  },
  {
    id: 4,
    title: "Webbfix Webbyrå – Köpa hemsida i Eskilstuna",
    slug: "webbfix-webbyra-kopa-hemsida-eskilstuna",
    date: "2025-10-20",
    author: "Bygg & Plattsättning",
    readTime: "3 min",
    category: "Digitalisering",
    image: "/webbfix-logo.png",
    content: `
      <p>Har det blivit dags att <a href="https://www.webbfix.se" target="_blank" rel="dofollow">köpa hemsida för ditt företag i Eskilstuna?</a>, då har vi den perfekta lösningen för din verksamhet. Istället för att lägga en klumpsumma på flera tusen på en hemsida som kommer att vara utdaterad om sex månader så erbjuder Webbfix Webbyrå i Eskilstuna en lösning som har varit banbrytande för branschen. Hemsida som en prenumerationsbaserad tjänst där allt underhåll, uppdatering och viktigast av allt, hosting ingår! 
      
      <h2>Varför Webbfix? </h2>
      Vi valde att använda oss av Webbfix av en simpel anledning. Vi har en verksamhet att bedriva, vi har inte tid att sitta och pilla med en hemsida och dessutom har vi ingen aning om hur eller vad som behöver göras. Vi har fått otroligt bra support bra start till färdig hemsida och det har även varit extremt enkelt när vi behövt göra ändringar i innehållet. 
      
      <h2>Syns man inte, finns man inte </h2>
      Webbfix har även hjälp oss med sökmotoroptimering i Eskilstuna, där vi dyker upp bra i sökresultaten på Google och därmed ger oss en synlighet lokalt hos våra potentiella kunder. En viktigt aspekt i det hela som man själv inte riktigt har koll på i och med att man inte riktigt har tid eller möjlighet att sätta sig in i hur allting fungerar. 
      
      <h2>Vad kostar hemsidan för vårt företag i Eskilstuna? </h2>
      Vi valde att köra på en ganska simpel sida då vi inte är så krånglig verksamhet. Vi sysslar med allt inom Bygg och plattsättning punkt. Vi betalar en månadskostnad på 750kr/månad ex moms, och där har vi även ett avdrag på ”huvudvärk”. Skämt åsido så funkar det väldigt smidigt för hur vi jobbar, dom sköter vår digitala närvaro, och vi sköter jobben ute hos kund.</p>
    `,
  },
  {
    id: 5,
    title: "Elektriker i Eskilstuna – Lokal trygghet",
    slug: "elektriker-eskilstuna-lokal-trygghet",
    date: "2025-10-20",
    author: "Bygg & Plattsättning",
    readTime: "4 min",
    category: "Samarbetspartners",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Börjar det bli dags att se över elcentralen? Eller är du kanske ute efter lite snygg utebelysning till den nybyggda trallen? Det spelar egentligen ingen roll vad det gäller, Törnstrand Elteknik AB är din lokala elektriker i Eskilstuna som hjälper dig med allt som leder ström.

<h2>Vilka är Törnstrand Elteknik AB?</h2>
Det kanske inte riktigt går att definiera som nystartat företag då vår VD/Ägare Rasmus Törnstrand börjar snudda på ett decennium av erfarenhet inom elbranschen. Vi är verksamma i Eskilstuna med omnejd och har snabbt men ganska självklart fått ett gott rykte bland våra kunder. Vi jobbar till stor del som underentreprenör via samarbeten med företag i branschen och har även ett stående samarbete med den välkända Outokumpu fabriken i Torshälla.

<h2>Varför välja oss?</h2>
Vi bryr oss, kort sagt värderar vi vårat rykte och våra kunders nöjdhet över allt annat. Vi svara när ni ringer och vi är plats när vi har kommit överens om att ett jobb ska utföras. Vår vision är att ge er den upplevelse man oftast inte har med hantverkare, vi komme,r vi jobbar tills jobbet är klart.. sen tar vi rast. Skämt åsido så brinner vi för kundnöjdhet och transparens.

<h2>Vad utför ni för jobb?</h2>
Vi utför alla typ av elarbeten, industri, hem, åtgärdande av elavbrott, reparation av eluttag och strömbrytare. Ja, vi utför alla typer av olika arbeten. Med det sagt, börjar det bli dags att kanske installera en elbilsladdare? Byta ut proppskåpet? Hör av dig till oss så återkommer vi med en kostnadsfri offert.


      <p>Med det sagt, börjar det bli dags att kanske <a href="https://www.tornstrandelteknikab.se" target="_blank" rel="dofollow">installera en elbilsladdare?</a> Eller kanske <a href="https://www.tornstrandelteknikab.se" target="_blank" rel="dofollow">byta ut proppskåpet?</a> Hör av dig till oss så återkommer vi med en kostnadsfri offert.</p>
</p>
    `,
  },
  {
    id: 6,
    title: "Hyra lägenhet i Eskilstuna – Vad bör man tänka på?",
    slug: "hyra-lagenhet-eskilstuna-vad-bor-man-tanka-pa",
    date: "2025-10-21",
    author: "Bygg & Plattsättning",
    readTime: "4 min",
    category: "Bostäder",
    image: "/placeholder.svg?height=400&width=800",
    excerpt:
      "Funderar du på att hyra lägenhet i Eskilstuna? Läs vår guide om olika områden, priser och vad du bör tänka på när du söker bostad.",
    content: `
      <p>Har den charmiga Eskilstunaån som flödar igenom centrum äntligen lockat dig till att flytta till Eskilstuna. Det är fullt förståeligt då staden växer så det knakar och har gjort i många år nu. Däremot kan det ha suttit lite käppar i hjulen vad gäller att hitta en <a href="https://www.bostadscentralen.se/lediga-lagenheter/eskilstuna" target="_blank" rel="dofollow">hyreslägenhet i Eskilstuna</a>. 
      
      Det kanske inte har blivit omöjligt då det finns ett ganska brett utbud av lediga lägenheter i Eskilstuna, förutsatt att man inte är så krånglig verksamhet. 
      
      Det finns ju såklart bättre och sämre områden i Eskilstuna vad gäller hyresområden, och det blir lite det som styr priserna på bostäderna såklart. Det finns billigare områden så som, Årby, Skiftinge, Fröslunda, Bellmansplan och Nyfors. Detta är några av dom områden som ibland kan klassas som utsatta. Dessa områden är det lite billigare att bosätta sig i men det är också dessa områden som har varit med om en del skjutningar och explosioner på senare år. 
      
      Populära områden på senare är det nybyggda området på Norr, Munktellstaden och Söder har såklart alltid varit väldigt attraktivt. Allt beror ju såklart helt på vad du är ute efter, vill du nora centrum? Vill du bo lite mer avlägset? Vart kommer du jobba? Det är många faktorer som avgör men rent generellt så är dom flesta områden i Eskilstuna väldigt bra och det finns ett gott utbud av hyresrätter.</p>
    `,
  },
]

export default function Blogg() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Blogg<span className="text-orange-500">.</span>
          </h1>
          <div className="w-56 h-1 bg-orange-500 mb-8 mx-auto"></div>
          <p className="text-center text-gray-300 text-lg">
            Välkommen till vår blogg! Här delar vi med oss av expertråd, tips och inspiration för dina bygg- och
            renoveringsprojekt.
          </p>
        </div>

        {/* Blog Posts - Full Content Display */}
        <div className="max-w-4xl mx-auto space-y-24">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="bg-zinc-800 rounded-lg overflow-hidden">
              {/* Featured Image */}
              {post.image && (
                <div className="relative h-[400px] w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="p-8 md:p-12">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <Tag size={16} />
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-orange-500 transition-colors">
                  <Link href={`/blogg/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-zinc-700">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>
                      {new Date(post.date).toLocaleDateString("sv-SE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime} läsning</span>
                  </div>
                </div>

                {/* Full Post Content */}
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-orange-500
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-300 prose-p:mb-6 prose-p:leading-relaxed
                    prose-ul:text-gray-300 prose-ul:mb-6
                    prose-li:mb-2
                    prose-strong:text-white prose-strong:font-semibold
                    prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Read More Link */}
                <div className="mt-8 pt-8 border-t border-zinc-700">
                  <Link
                    href={`/blogg/${post.slug}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors font-semibold text-lg"
                  >
                    Läs hela artikeln på egen sida →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Bläddra efter kategori</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blogg?kategori=badrumsrenovering"
              className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-orange-500">Badrumsrenovering</h3>
            </Link>
            <Link
              href="/blogg?kategori=koksrenovering"
              className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-orange-500">Köksrenovering</h3>
            </Link>
            <Link
              href="/blogg?kategori=plattsattning"
              className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-orange-500">Plattsättning</h3>
            </Link>
            <Link
              href="/blogg?kategori=byggprojekt"
              className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-orange-500">Byggprojekt</h3>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-zinc-800 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prenumerera på vårt nyhetsbrev</h2>
          <p className="mb-6 text-gray-300">
            Få de senaste artiklarna, tips och erbjudanden direkt i din inkorg. Vi skickar ut nyhetsbrev en gång i
            månaden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 px-4 py-3 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-orange-500 text-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Prenumerera
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
