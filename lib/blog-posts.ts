export type BlogPost = {
  id: number
  title: string
  slug: string
  /** ISO date (YYYY-MM-DD) of first publication */
  date: string
  /** ISO date (YYYY-MM-DD) of last meaningful update */
  updated?: string
  author: string
  readTime: string
  category: string
  /** Optional cover image in /public. Posts without one get a typographic fallback. */
  image?: string
  /** "contain" for logos and other images that must not be cropped */
  imageFit?: "cover" | "contain"
  excerpt: string
  /** Trusted, repo-authored HTML */
  content: string
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Guide: Planera din badrumsrenovering",
    slug: "planera-badrumsrenovering",
    date: "2024-01-15",
    updated: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "8 min",
    category: "Badrumsrenovering",
    image: "/bathroom-modern.jpeg",
    excerpt:
      "Att renovera ett badrum är ett stort projekt som kräver noggrann planering. I denna guide går vi igenom de viktigaste stegen för en lyckad badrumsrenovering.",
    content: `
      <p>Att renovera ett badrum är ett spännande men också komplext projekt som kräver noggrann planering och förberedelse. Med över 20 års erfarenhet inom byggbranschen har vi sett hur viktigt det är att ta sig tid att planera ordentligt innan man börjar riva.</p>

      <h2>1. Fastställ din budget</h2>
      <p>Det första och viktigaste steget är att fastställa en realistisk budget för ditt projekt. En badrumsrenovering kan kosta allt från 100 000 kr till flera hundra tusen kronor beroende på omfattning och materialval. Vi går igenom vad som styr priset i guiden <a href="/blogg/vad-kostar-en-badrumsrenovering">Vad kostar en badrumsrenovering?</a></p>

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

      <h2>6. Tätskikt och behörighet</h2>
      <p>Det är tätskiktet under kakel och klinker som håller vattnet borta från väggar och bjälklag, inte plattorna eller fogen. För våtrum med kakel och klinker gäller Byggkeramikrådets branschregler för våtrum, BBV. Den version som gäller sedan 1 januari 2026 är BBV 26:1.</p>
      <p>Anlita ett företag som är behörigt enligt BBV. Ett behörigt företag använder godkända tätskiktssystem och kan lämna Byggkeramikrådets kvalitetsdokument när badrummet är klart. VVS-arbetet bör göras av ett VVS-företag som är auktoriserat enligt Säker Vatten. Läs mer i vår guide om <a href="/blogg/tatskikt-i-badrum">tätskikt i badrum</a>.</p>

      <h2>7. Räkna med rotavdraget</h2>
      <p>Om du äger bostaden och bor där kan du få rotavdrag för arbetskostnaden. Sedan 1 januari 2026 är avdraget 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Material ger inte rätt till avdrag, så be om en offert där arbete och material står var för sig. Vi förklarar reglerna och räknar på ett exempel i <a href="/blogg/rot-avdrag-badrumsrenovering">Rotavdrag vid badrumsrenovering</a>.</p>

      <h2>8. Tidplan moment för moment</h2>
      <p>Arbetet följer i stort sett alltid samma ordning. Varje steg behöver vara klart innan nästa kan börja, och flera av dem kräver torktid. Det är därför en badrumsrenovering tar några veckor även om själva ytan är liten.</p>
      <ul>
        <li><strong>Rivning och bortforsling.</strong> Gammalt kakel, golv, porslin och inredning tas bort. Först nu syns underlaget och eventuella fuktskador.</li>
        <li><strong>VVS och el.</strong> Rör, avlopp och elledningar dras om eller flyttas innan väggar och golv stängs.</li>
        <li><strong>Underarbete.</strong> Väggar byggs upp eller rätas, och golvet får rätt lutning mot golvbrunnen.</li>
        <li><strong>Tätskikt.</strong> Tätskiktssystemet läggs enligt tillverkarens anvisningar och får torka.</li>
        <li><strong>Plattsättning och fogning.</strong> Kakel och klinker sätts och fogas.</li>
        <li><strong>Montering.</strong> Toalett, handfat, duschvägg, blandare, belysning och möbler monteras.</li>
        <li><strong>Slutkontroll och dokumentation.</strong> Du får kvalitetsdokument och intyg för det som har utförts.</li>
      </ul>

      <h2>Checklista innan du skriver på</h2>
      <ul>
        <li>Offerten beskriver alla moment, från rivning till städning</li>
        <li>Arbete och material står var för sig, så att rotavdraget kan beräknas</li>
        <li>Det framgår att tätskiktet byggs enligt BBV och vilket tätskiktssystem som används</li>
        <li>Du vet vem som utför VVS och el, och att de har rätt behörighet eller auktorisation</li>
        <li>Det står hur oförutsedda arbeten hanteras, till exempel dolda fuktskador</li>
        <li>Du har en tidplan och vet när badrummet går att använda igen</li>
        <li>Du vet vilka dokument du får när arbetet är klart</li>
      </ul>

      <h2>Sammanfattning</h2>
      <p>En välplanerad badrumsrenovering ger ett resultat som du kommer att vara nöjd med i många år framöver. Ta dig tid att planera noggrant, välj kvalitetsmaterial och anlita erfarna hantverkare. Läs mer om hur vi arbetar med <a href="/badrumsrenovering">badrumsrenovering</a>, eller <a href="/kontakt">kontakta oss</a> för en kostnadsfri konsultation och offert.</p>
    `,
  },
  {
    id: 2,
    title: "Så väljer du rätt kakel till ditt badrum",
    slug: "valja-ratt-kakel",
    date: "2024-01-10",
    updated: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "7 min",
    category: "Plattsättning",
        excerpt:
      "Valet av kakel är en av de viktigaste besluten vid badrumsrenovering. Här delar vi med oss av våra bästa tips för att välja rätt kakel.",
    content: `
      <p>Att välja rätt kakel till badrummet är en av de viktigaste besluten i en badrumsrenovering. Kaklet påverkar inte bara utseendet utan också funktionaliteten och underhållet av ditt badrum. Här är vår guide till att göra det rätta valet.</p>

      <h2>Olika typer av kakel</h2>
      <p>Det finns flera olika typer av kakel att välja mellan, var och en med sina egna fördelar:</p>

      <h3>Porslin och keramik</h3>
      <p>Det mest populära valet för badrum. Porslinsklinker är tätare och tar upp mindre vatten än vanligt glaserat keramiskt kakel, men båda fungerar utmärkt i badrum. Klinker är det hårdare materialet och används på golv, medan kakel oftast sätts på väggar.</p>

      <h3>Natursten</h3>
      <p>Ger ett exklusivt och tidlöst intryck. Kräver mer underhåll med impregnering, men håller mycket länge om den sköts rätt.</p>

      <h3>Mosaik</h3>
      <p>Perfekt för att skapa visuella effekter och passar särskilt bra i duschhörnan eller som en dekorativ rand. De små bitarna följer också golvets lutning mot brunnen utan att behöva kapas.</p>

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
      <p>På golvet är det viktigt att välja klinker med tillräckligt halkskydd, särskilt i duschen. Det finns två vanliga klassningar att hålla koll på:</p>
      <ul>
        <li><strong>R-klass (R9–R13)</strong> enligt den tyska standarden DIN 51130. Den mäts med skor, och ju högre siffra, desto bättre grepp.</li>
        <li><strong>Barfotaklass (A, B eller C)</strong> enligt DIN 51097. Den mäts barfota på vått golv och är den som säger mest om duschen. B anges ofta som lämplig för duschar och våta gångytor, C för mycket blöta miljöer som runt pooler.</li>
      </ul>
      <p>En platta kan ha båda klassningarna, till exempel "R10 B". Fråga leverantören efter testresultatet om det inte står på förpackningen.</p>

      <h3>Underhåll</h3>
      <p>Tänk på hur mycket tid du vill lägga på underhåll. Ljust kakel och ljusa fogar kräver mer städning än mörkare alternativ. Rektifierat kakel har slipade kanter vilket ger tunnare fogar och lättare rengöring.</p>

      <h2>Fogar</h2>
      <p>Fogen påverkar både utseende och skötsel mer än många tror. En fog i samma ton som plattan ger en lugn yta, medan en kontrasterande fog framhäver mönstret. Ljusa fogar på golvet blir lättare missfärgade.</p>
      <p>Fogen är inte vattentät. Den tar upp fukt, och det är tätskiktet bakom plattorna som skyddar huset. Därför spelar valet av fog roll för skötseln men aldrig för vattentätheten. Läs mer om varför i vår guide om <a href="/blogg/tatskikt-i-badrum">tätskikt i badrum</a>.</p>

      <h2>Rektifierat kakel</h2>
      <p>Rektifierade plattor slipas efter bränningen så att alla får exakt samma mått och raka kanter. Det gör att de kan sättas med smalare fogar och ger ett stramare resultat, särskilt i stora format. Kravet på ett plant underlag blir samtidigt högre, eftersom små ojämnheter syns tydligare när fogarna är smala.</p>

      <h2>Storformat och golvlutning mot brunnen</h2>
      <p>Badrumsgolvet ska luta mot golvbrunnen så att vattnet rinner rätt. Med en vanlig golvbrunn mitt i duschen lutar golvet åt flera håll, och då behöver plattorna kapas längs lutningens brytlinjer. Ju större plattan är, desto svårare är det att följa lutningen utan att kanterna sticker upp.</p>
      <p>Vill du ha storformat på golvet finns det några vanliga lösningar:</p>
      <ul>
        <li>En linjebrunn (rännbrunn) längs en vägg, så att golvet bara behöver luta åt ett håll</li>
        <li>Storformat utanför duschen och mindre plattor eller mosaik i duschplatsen</li>
        <li>Plattorna kapas diagonalt mot brunnen, vilket kräver noggrann planering av mönstret</li>
      </ul>
      <p>Byggkeramikrådets branschregler för våtrum, BBV 26:1, gäller sedan 1 januari 2026. En av ändringarna är att den högsta tillåtna lutningen i bad- och duschplats har ökats, för att ge bättre avrinning mot golvbrunnen. Diskutera format och brunnsplacering med din plattsättare innan du beställer material. Det är svårt att ändra i efterhand.</p>

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

      <p>Behöver du hjälp med att välja rätt kakel eller vill ha professionell plattsättning? Läs mer om vår <a href="/plattsattning">plattsättning</a> eller <a href="/kontakt">kontakta oss</a> för råd och en kostnadsfri offert.</p>
    `,
  },
  {
    id: 3,
    title: "Trender inom köksrenovering som håller i längden",
    slug: "trender-koksrenovering",
    date: "2024-01-05",
    updated: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "7 min",
    category: "Köksrenovering",
        excerpt:
      "Naturliga material, mörka luckor, storformat och smart belysning. Här är trenderna inom köksrenovering som fortsätter att hålla, och vad du bör tänka på innan du följer dem.",
    content: `
      <p>Köket är hjärtat i hemmet, och trenden går mot kök som är både funktionella och vackra att vara i. Här är de trender inom köksrenovering som har hållit i sig de senaste åren, och som inte känns daterade om fem år.</p>

      <h2>1. Naturliga material och färger</h2>
      <p>Många vill ta in naturen i hemmet. Naturliga material som trä, sten och marmor är mer populära än någonsin. Färgpaletten domineras av varma, jordnära toner som terracotta, sage green och varma beiga nyanser.</p>

      <h3>Trädetaljer</h3>
      <p>Trädetaljer i köket, som öppna hyllor i ek eller valnöt, skapar värme och karaktär. Detta kombineras ofta med släta, moderna luckor för en balanserad look.</p>

      <h2>2. Mörka kök fortsätter vara populära</h2>
      <p>Mörka köksluckor i färger som mörkgrön, marinblå och svart fortsätter att vara trendigt. Det skapar en sofistikerad och dramatisk känsla, särskilt när det kombineras med mässing eller gulddetaljer.</p>

      <h2>3. Multifunktionella köksöar</h2>
      <p>Köksön är inte längre bara en arbetsyta, den är samlingspunkten i köket. Dagens köksöar har ofta:</p>
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

      <h2>Innan du följer en trend</h2>
      <p>Det som är dyrast att ändra i ett kök är det du inte ser: var vatten, avlopp och el sitter. Ska diskhon flyttas till en köksö eller hällen till en annan vägg behöver rör och ledningar dras om, och det påverkar både pris och tidplan. Ytskikt som luckor, handtag och belysning är däremot förhållandevis enkla att byta längre fram.</p>
      <ul>
        <li>Lägg pengarna på planlösning, installationer och slitstarka ytor. Byt hellre detaljer senare.</li>
        <li>Ett stänkskydd i kakel eller storformatsplattor ska sättas på ett plant och stabilt underlag. Planera det tillsammans med el för uttag och belysning.</li>
        <li>Spara offerten och ritningarna. De är bra att ha den dag du vill ändra något.</li>
      </ul>

      <h2>Sammanfattning</h2>
      <p>En lyckad köksrenovering handlar om att skapa ett kök som både är vackert och funktionellt, med fokus på hållbarhet och personlighet. Oavsett vilken stil du föredrar, kom ihåg att välja lösningar som passar just ditt hem och din livsstil.</p>

      <p>Planerar du en köksrenovering? Läs mer om hur vi arbetar med <a href="/koksrenovering">köksrenovering</a> eller <a href="/kontakt">kontakta oss</a> för en kostnadsfri konsultation.</p>
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
    imageFit: "contain",
    excerpt:
      "Vår erfarenhet av att köpa hemsida i Eskilstuna från Webbfix Webbyrå. Läs om hur vi fick en professionell hemsida med prenumerationsmodell.",
    content: `
      <p>Har det blivit dags att <a href="https://www.webbfix.se" target="_blank" rel="noopener">köpa hemsida för ditt företag i Eskilstuna</a>? Då har vi den perfekta lösningen för din verksamhet. Istället för att lägga en klumpsumma på flera tusen på en hemsida som kommer att vara utdaterad om sex månader så erbjuder Webbfix Webbyrå i Eskilstuna en lösning som har varit banbrytande för branschen. Hemsida som en prenumerationsbaserad tjänst där allt underhåll, uppdatering och viktigast av allt, hosting ingår!</p>

      <h2>Varför Webbfix?</h2>
      <p>Vi valde att använda oss av Webbfix av en simpel anledning. Vi har en verksamhet att bedriva, vi har inte tid att sitta och pilla med en hemsida och dessutom har vi ingen aning om hur eller vad som behöver göras. Vi har fått otroligt bra support från start till färdig hemsida och det har även varit extremt enkelt när vi behövt göra ändringar i innehållet.</p>

      <p>Som ett företag inom bygg och plattsättning är vår kärnverksamhet att leverera högkvalitativa renoveringar och byggprojekt. Att samtidigt behöva hantera en hemsida, SEO och digital marknadsföring skulle ta för mycket tid från det vi gör bäst. Därför blev Webbfix det självklara valet för oss.</p>

      <h2>Syns man inte, finns man inte</h2>
      <p>Webbfix har även hjälpt oss med sökmotoroptimering i Eskilstuna, där vi dyker upp bra i sökresultaten på Google och därmed ger oss en synlighet lokalt hos våra potentiella kunder. En viktig aspekt i det hela som man själv inte riktigt har koll på i och med att man inte riktigt har tid eller möjlighet att sätta sig in i hur allting fungerar.</p>

      <p>Tack vare deras arbete med SEO har vi sett en markant ökning av förfrågningar från nya kunder i Eskilstuna och närliggande orter. Vi dyker nu upp när folk söker efter "plattsättare i Eskilstuna", "badrumsrenovering Eskilstuna" och liknande söktermer.</p>

      <h2>Vad kostar hemsidan för vårt företag i Eskilstuna?</h2>
      <p>Vi valde att köra på en ganska simpel sida då vi inte är så krånglig verksamhet. Vi sysslar med allt inom bygg och plattsättning punkt. Vi betalar en månadskostnad på 750 kr/månad ex moms, och där har vi även ett avdrag på "huvudvärk". Skämt åsido så fungerar det väldigt smidigt för hur vi jobbar - dom sköter vår digitala närvaro, och vi sköter jobben ute hos kund.</p>

      <h3>Vad ingår i prenumerationen?</h3>
      <ul>
        <li>Hosting och domänhantering</li>
        <li>Regelbundna uppdateringar och säkerhetspatchar</li>
        <li>SEO-optimering och förbättringar</li>
        <li>Teknisk support när vi behöver det</li>
        <li>Innehållsuppdateringar vid behov</li>
        <li>Backup och säkerhet</li>
      </ul>

      <h2>Vår erfarenhet av Webbfix</h2>
      <p>Sedan vi började använda Webbfix har vi kunnat fokusera helt på vår kärnverksamhet. Vi får regelbundet nya kundförfrågningar via hemsidan, och den professionella närvaron online har gett oss trovärdighet hos potentiella kunder.</p>

      <p>Det bästa är att vi aldrig behöver oroa oss för tekniska problem eller att hemsidan blir hackad. Allt sköts i bakgrunden medan vi kan koncentrera oss på det vi gör bäst - leverera kvalitativa bygg- och renoveringsprojekt till våra kunder.</p>

      <h2>Rekommendation</h2>
      <p>Om du driver ett företag i Eskilstuna och behöver en hemsida som faktiskt fungerar och ger resultat, kan vi varmt rekommendera Webbfix. De förstår lokala företags behov och levererar en helhetslösning som gör att du kan fokusera på din verksamhet.</p>

      <p>En digital närvaro är idag lika viktig som att ha en skylt på dörren. Med Webbfix får du inte bara en hemsida, utan en partner som hjälper ditt företag att växa online.</p>

      <p>Vill du veta mer om hur Webbfix kan hjälpa ditt företag? Besök deras hemsida på <a href="https://www.webbfix.se" target="_blank" rel="noopener">webbfix.se</a> eller kontakta dem direkt för en kostnadsfri konsultation.</p>
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
        excerpt:
      "Behöver du en pålitlig elektriker i Eskilstuna? Läs om vår samarbetspartner Törnstrand Elteknik AB och varför vi rekommenderar dem.",
    content: `
      <p>Börjar det bli dags att se över elcentralen? Eller är du kanske ute efter lite snygg utebelysning till den nybyggda trallen? Det spelar egentligen ingen roll vad det gäller, Törnstrand Elteknik AB är din lokala elektriker i Eskilstuna som hjälper dig med allt som leder ström.</p>

      <h2>Vilka är Törnstrand Elteknik AB?</h2>
      <p>Det kanske inte riktigt går att definiera som nystartat företag då vår VD/Ägare Rasmus Törnstrand börjar snudda på ett decennium av erfarenhet inom elbranschen. Vi är verksamma i Eskilstuna med omnejd och har snabbt men ganska självklart fått ett gott rykte bland våra kunder. Vi jobbar till stor del som underentreprenör via samarbeten med företag i branschen och har även ett stående samarbete med den välkända Outokumpu fabriken i Torshälla.</p>

      <h2>Varför välja oss?</h2>
      <p>Vi bryr oss, kort sagt värderar vi vårat rykte och våra kunders nöjdhet över allt annat. Vi svara när ni ringer och vi är plats när vi har kommit överens om att ett jobb ska utföras. Vår vision är att ge er den upplevelse man oftast inte har med hantverkare, vi kommer, vi jobbar tills jobbet är klart.. sen tar vi rast. Skämt åsido så brinner vi för kundnöjdhet och transparens.</p>

      <h2>Vad utför ni för jobb?</h2>
      <p>Vi utför alla typ av elarbeten, industri, hem, åtgärdande av elavbrott, reparation av eluttag och strömbrytare. Ja, vi utför alla typer av olika arbeten. Med det sagt, börjar det bli dags att kanske <a href="https://www.tornstrandelteknikab.se" target="_blank" rel="noopener">installera en elbilsladdare?</a> Eller kanske <a href="https://www.tornstrandelteknikab.se" target="_blank" rel="noopener">byta ut proppskåpet?</a> Hör av dig till oss så återkommer vi med en kostnadsfri offert.</p>
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
    excerpt:
      "Funderar du på att hyra lägenhet i Eskilstuna? Läs vår guide om olika områden, priser och vad du bör tänka på när du söker bostad.",
    content: `
      <p>Har den charmiga Eskilstunaån som flödar igenom centrum äntligen lockat dig till att flytta till Eskilstuna. Det är fullt förståeligt då staden växer så det knakar och har gjort i många år nu. Däremot kan det ha suttit lite käppar i hjulen vad gäller att hitta en <a href="https://www.bostadscentralen.se/lediga-lagenheter/eskilstuna" target="_blank" rel="noopener">hyreslägenhet i Eskilstuna</a>.</p>

      <p>Det kanske inte har blivit omöjligt då det finns ett ganska brett utbud av lediga lägenheter i Eskilstuna, förutsatt att man inte är så krånglig verksamhet.</p>

      <p>Det finns ju såklart bättre och sämre områden i Eskilstuna vad gäller hyresområden, och det blir lite det som styr priserna på bostäderna såklart. Det finns billigare områden så som, Årby, Skiftinge, Fröslunda, Bellmansplan och Nyfors. Detta är några av dom områden som ibland kan klassas som utsatta. Dessa områden är det lite billigare att bosätta sig i men det är också dessa områden som har varit med om en del skjutningar och explosioner på senare år.</p>

      <p>Populära områden på senare är det nybyggda området på Norr, Munktellstaden och Söder har såklart alltid varit väldigt attraktivt. Allt beror ju såklart helt på vad du är ute efter, vill du nora centrum? Vill du bo lite mer avlägset? Vart kommer du jobba? Det är många faktorer som avgör men rent generellt så är dom flesta områden i Eskilstuna väldigt bra och det finns ett gott utbud av hyresrätter.</p>
    `,
  },
  {
    id: 7,
    title: "Vad kostar en badrumsrenovering?",
    slug: "vad-kostar-en-badrumsrenovering",
    date: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "7 min",
    category: "Badrumsrenovering",
    excerpt:
      "En komplett badrumsrenovering kostar sällan under 100 000 kronor. Här går vi igenom vad som styr priset, hur rotavdraget påverkar och vad en bra offert ska innehålla.",
    content: `
      <p>En komplett badrumsrenovering kostar sällan under 100 000 kronor och kan bli flera hundra tusen, beroende på badrummets storlek, hur mycket som ska flyttas och vilka material du väljer. Med rotavdraget betalar du 30 procent mindre för arbetet, men inte för materialet. Nedan går vi igenom vad som styr priset, hur du räknar med rotavdraget och vad en bra offert ska innehålla.</p>

      <h2>Vad ingår i en komplett badrumsrenovering?</h2>
      <p>När man jämför priser är det viktigt att veta vad som faktiskt ingår. En komplett renovering består oftast av de här momenten:</p>
      <ul>
        <li>Rivning av det gamla badrummet och bortforsling av materialet</li>
        <li>VVS-installation: rör, avlopp, golvbrunn, dusch och toalett</li>
        <li>Elinstallation: belysning, uttag, golvvärme och eventuell handdukstork</li>
        <li>Underarbete och tätskikt enligt branschreglerna</li>
        <li>Plattsättning av kakel och klinker</li>
        <li>Montering av porslin, duschvägg, möbler och övrig inredning</li>
      </ul>
      <p>Momenten utförs av olika yrkesgrupper. Anlitar du ett företag som tar hela entreprenaden har du en kontaktperson som samordnar plattsättare, VVS-montörer och elektriker. Anlitar du hantverkarna själv blir det du som håller ihop tidplanen och ser till att varje moment är klart innan nästa börjar.</p>

      <h2>Vad som styr priset</h2>
      <p>Två badrum med samma yta kan få helt olika slutsumma. Det är sällan kvadratmetrarna i sig som avgör, utan vad som behöver göras bakom ytskiktet.</p>

      <h3>Storlek och planlösning</h3>
      <p>Fler kvadratmeter betyder mer kakel, klinker och tätskikt, och fler timmar för plattsättning. Men många moment är ungefär desamma oavsett storlek: rivning, VVS, el, tätning runt golvbrunn och genomföringar, och montering av porslin. Därför blir ett litet badrum ofta dyrare per kvadratmeter än ett stort.</p>

      <h3>Rivning och underlag</h3>
      <p>Allt gammalt ska bort, och först när ytskiktet är rivet syns hur väggar och golv mår. Fuktskadat virke, sprickor eller ett golv med fel lutning mot brunnen måste åtgärdas innan det nya tätskiktet kan läggas. Sådant går inte alltid att se före rivningen, och därför är det viktigt att offerten beskriver hur oförutsedda arbeten hanteras.</p>

      <h3>Flytt av VVS och el</h3>
      <p>Att behålla toalett, handfat, dusch och golvbrunn på samma plats är det mest kostnadseffektiva. Ska brunnen flyttas eller toaletten byta vägg behöver rör och avlopp dras om, och golvet byggas upp med ny lutning. Samma sak gäller el: nya uttag, golvvärme, spotlights i taket eller en handdukstork kräver elarbete som ska göras av en behörig elektriker.</p>

      <h3>Tätskikt</h3>
      <p>Tätskiktet skyddar huset mot vattenskador, och det är inget du ska spara in på. Det ska byggas enligt Byggkeramikrådets branschregler för våtrum, BBV, med ett godkänt tätskiktssystem. Kostnaden för tätskiktet är liten jämfört med vad det kostar att åtgärda en vattenskada. Läs mer i vår guide om <a href="/blogg/tatskikt-i-badrum">tätskikt i badrum</a>.</p>

      <h3>Golvvärme</h3>
      <p>Golvvärme gör badrummet bekvämare och hjälper golvet att torka efter dusch. Den läggs innan tätskikt och klinker, så det är ett beslut som behöver tas tidigt i planeringen.</p>

      <h3>Kakel och klinker</h3>
      <p>Plattorna är den post där priset kan variera mest. Som en grov tumregel kan du räkna med:</p>
      <ul>
        <li>Enkelt keramiskt kakel: 200–400 kr/m²</li>
        <li>Porslinsklinker: 400–800 kr/m²</li>
        <li>Natursten: 800–2 000 kr/m²</li>
      </ul>
      <p>Till det kommer fix, fog och tätskiktsmaterial. Formatet påverkar också arbetskostnaden. Storformat kräver ett mycket plant underlag och noggrann planering kring golvbrunnen, och mosaik tar längre tid att sätta. Mer om valet av plattor finns i <a href="/blogg/valja-ratt-kakel">Så väljer du rätt kakel till ditt badrum</a>.</p>

      <h3>Inredning och porslin</h3>
      <p>Toalett, handfat, kommod, spegelskåp, duschvägg och blandare finns i alla prisklasser. Det är också här det är lättast att justera budgeten utan att kompromissa med det som är svårt att ändra senare, som tätskikt och installationer.</p>

      <h2>Hur lång tid tar det?</h2>
      <p>En komplett badrumsrenovering tar vanligtvis 3–4 veckor. Arbetet sker i en bestämd ordning, och tätskiktet behöver torka innan plattorna kan sättas. Planera för att vara utan badrum under den tiden.</p>

      <h2>Så påverkar rotavdraget</h2>
      <p>Äger du bostaden och bor där kan du få rotavdrag för arbetskostnaden. Sedan 1 januari 2026 är avdraget 30 procent av arbetskostnaden, och du kan få högst 50 000 kronor i rotavdrag per person och år. Material, resor, utrustning och administration ger inte rätt till avdrag. Företaget drar av beloppet direkt på fakturan och begär sedan utbetalning från Skatteverket.</p>

      <h3>Räkneexempel</h3>
      <p>Siffrorna nedan är ett exempel för att visa hur avdraget räknas, inte ett pris. Säg att en offert landar på 150 000 kronor, varav 90 000 kronor är arbete och 60 000 kronor är material.</p>
      <ul>
        <li>Rotavdrag: 30 % × 90 000 kr = 27 000 kr</li>
        <li>Att betala: 150 000 kr − 27 000 kr = 123 000 kr</li>
      </ul>
      <p>Avdraget beräknas bara på arbetskostnaden. Därför ska arbete och material alltid stå var för sig i offerten och på fakturan.</p>
      <p>Taket på 50 000 kronor gäller per person. Med en arbetskostnad på 200 000 kronor blir 30 procent 60 000 kronor, vilket är mer än en person kan få. Är ni två som äger och bor i bostaden kan avdraget delas mellan er, till exempel 30 000 kronor var. Mer om reglerna och vanliga misstag finns i <a href="/blogg/rot-avdrag-badrumsrenovering">Rotavdrag vid badrumsrenovering</a>.</p>

      <h2>Så jämför du offerter</h2>
      <p>Den lägsta summan är inte alltid den billigaste. Ofta skiljer sig offerter åt för att de innehåller olika saker, så jämför innehållet rad för rad. En bra offert visar tydligt:</p>
      <ul>
        <li>Vilka moment som ingår, från rivning och bortforsling till slutstädning</li>
        <li>Arbetskostnad och material var för sig, och hur stort rotavdraget beräknas bli</li>
        <li>Att tätskiktet byggs enligt BBV och vilket tätskiktssystem som används</li>
        <li>Vem som utför VVS och el, och vilken behörighet eller auktorisation de har</li>
        <li>Om priset är fast eller på löpande räkning</li>
        <li>Hur oförutsedda arbeten, som dolda fuktskador, prissätts och godkänns</li>
        <li>Tidplan och betalningsplan</li>
        <li>Vilka dokument du får när arbetet är klart, till exempel Byggkeramikrådets kvalitetsdokument och intyg om Säker Vatteninstallation för VVS-arbetet</li>
      </ul>
      <p>Saknas någon av punkterna, fråga. Är ett anbud betydligt lägre än de andra beror det ofta på att något moment inte är med.</p>

      <h2>Så håller du nere kostnaden</h2>
      <ul>
        <li>Behåll placeringen av golvbrunn, toalett och dusch om den fungerar</li>
        <li>Välj plattor och inredning innan arbetet börjar. Ändringar under arbetets gång tar tid.</li>
        <li>Beställ 10–15 procent extra plattor för spill och framtida reparationer</li>
        <li>Lägg budgeten på det som är svårt att ändra senare, som tätskikt och installationer. Spegel och belysning är lätta att byta längre fram.</li>
      </ul>

      <h2>Vill du veta vad ditt badrum kostar?</h2>
      <p>Varje badrum är olika, och ett rättvisande pris kräver att någon tittar på det på plats. Läs mer om hur vi arbetar med <a href="/badrumsrenovering">badrumsrenovering</a> och <a href="/badrumsrenovering/eskilstuna">badrumsrenovering i Eskilstuna</a>, eller <a href="/kontakt">kontakta oss</a> för en kostnadsfri offert.</p>
    `,
  },
  {
    id: 8,
    title: "Rotavdrag vid badrumsrenovering – regler och räkneexempel",
    slug: "rot-avdrag-badrumsrenovering",
    date: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "5 min",
    category: "Badrumsrenovering",
    excerpt:
      "Rotavdraget är 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Så fungerar det vid en badrumsrenovering, med räkneexempel och vanliga misstag.",
    content: `
      <p>Vid en badrumsrenovering kan du få rotavdrag med 30 procent av arbetskostnaden, högst 50 000 kronor per person och år. Det gäller om du äger bostaden och bor i den, och avdraget dras direkt på fakturan från företaget. Material ger inte rätt till avdrag. Här går vi igenom reglerna som gäller 2026, visar ett räkneexempel och tar upp de vanligaste misstagen.</p>

      <h2>Så fungerar rotavdraget</h2>
      <p>Rotavdraget är en skattereduktion för arbete med reparation, underhåll, ombyggnad och tillbyggnad av din bostad. När du anlitar ett företag med F-skatt drar företaget av rotavdraget från arbetskostnaden på fakturan. När arbetet är utfört och du har betalat ansöker företaget om utbetalning från Skatteverket. Det är betalningsdagen som avgör vilket år avdraget räknas till.</p>

      <h3>Nivåer och tak 2026</h3>
      <ul>
        <li>30 procent av arbetskostnaden</li>
        <li>Högst 50 000 kronor i rotavdrag per person och år</li>
        <li>Rot och rut har ett gemensamt tak på 75 000 kronor per person och år</li>
      </ul>
      <p>Under 2025 var rotavdraget tillfälligt höjt till 50 procent för arbeten som betalades mellan 12 maj och 31 december 2025. Sedan 1 januari 2026 gäller åter 30 procent.</p>

      <h2>Vem kan få rotavdrag?</h2>
      <ul>
        <li>Du måste äga bostaden under den period som arbetet utförs.</li>
        <li>Du måste bo i bostaden, helt eller delvis. Den ska användas som permanentbostad eller fritidsbostad.</li>
        <li>Avdraget gäller småhus, bostadsrätter och ägarlägenheter. I en bostadsrätt gäller det bara arbete som utförs inne i lägenheten. Bor du i hyresrätt kan du inte få rotavdrag.</li>
        <li>Avdraget kan inte bli större än den skatt du betalar. Hur mycket du kan få beror på din skatt och på andra skattereduktioner under året.</li>
      </ul>

      <h2>Rotavdrag i bostadsrätt</h2>
      <p>I en bostadsrätt får du rotavdrag för arbete inne i din lägenhet, och ett badrum hör dit. Innan du sätter igång är det värt att läsa föreningens stadgar. Där framgår vad som är ditt ansvar och vad som är föreningens. Ingrepp i ledningar för vatten och avlopp kräver ofta styrelsens tillstånd, så ta kontakt med styrelsen i god tid.</p>

      <h2>Betalningsdagen avgör året</h2>
      <p>Rotavdraget räknas till det år du betalar, inte det år arbetet görs. Betalar du i december hamnar avdraget på det årets utrymme, betalar du i januari på nästa års. Har du flera projekt på gång kan det därför löna sig att tänka på när fakturorna betalas, så att du inte slår i taket ett år och har utrymme kvar ett annat.</p>

      <h2>Vad räknas i ett badrum?</h2>
      <p>En badrumsrenovering är en ombyggnad av bostaden, och det är arbetet med den som ger rätt till avdrag. Det kan till exempel vara rivning, underarbete, tätskikt, plattsättning, VVS- och elarbete och montering av inredning. Det här ger inte rätt till avdrag:</p>
      <ul>
        <li>Material, som kakel, klinker, tätskiktsmaterial, porslin och blandare</li>
        <li>Resor, utrustning och administration i samband med arbetet</li>
        <li>Nybyggnation</li>
      </ul>

      <h2>Räkneexempel</h2>
      <p>Siffrorna är påhittade för att visa hur avdraget räknas. De är inte ett pris.</p>

      <h3>En ägare</h3>
      <p>Arbetskostnad 80 000 kronor och material 50 000 kronor.</p>
      <ul>
        <li>Rotavdrag: 30 % × 80 000 kr = 24 000 kr</li>
        <li>Du betalar: 80 000 kr + 50 000 kr − 24 000 kr = 106 000 kr</li>
      </ul>

      <h3>Hög arbetskostnad och två ägare</h3>
      <p>Arbetskostnad 200 000 kronor. 30 procent av det blir 60 000 kronor, vilket är mer än taket på 50 000 kronor för en person. Är ni två som äger och bor i bostaden kan avdraget delas, till exempel 30 000 kronor var, och då ryms hela avdraget.</p>

      <h2>Vanliga misstag</h2>
      <ul>
        <li><strong>Betalning med kontanter.</strong> Det krävs elektronisk betalning för att få rotavdrag, till exempel med kort, banköverföring eller Swish.</li>
        <li><strong>Arbete och material står ihop.</strong> Fakturan ska visa hur kostnaden fördelar sig på arbete, material och övriga kostnader. Annars går avdraget inte att räkna fram.</li>
        <li><strong>Utrymmet är redan använt.</strong> Har du använt rut eller rot tidigare under året finns det mindre kvar. Rot och rut delar på 75 000 kronor per person och år, och av dem får högst 50 000 kronor vara rot.</li>
        <li><strong>Avdraget begärs för fel person.</strong> Den som ska få avdraget måste både äga och bo i bostaden.</li>
        <li><strong>Skatten räcker inte.</strong> Har du betalat lite skatt under året kan avdraget bli mindre än du räknat med.</li>
        <li><strong>Företaget saknar F-skatt.</strong> Avdraget på fakturan förutsätter att du anlitar ett företag med F-skatt.</li>
      </ul>
      <p>Skatteverkets egen beskrivning av reglerna hittar du på <a href="https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete.4.2e56d4ba1202f95012080002966.html" target="_blank" rel="noopener">skatteverket.se</a>.</p>

      <h2>Räkna på ditt badrum</h2>
      <p>Vill du se vad som påverkar slutsumman läser du vidare i <a href="/blogg/vad-kostar-en-badrumsrenovering">Vad kostar en badrumsrenovering?</a> Mer om hur vi arbetar finns på sidan om <a href="/badrumsrenovering">badrumsrenovering</a>. Du kan också <a href="/kontakt">kontakta oss</a> för en kostnadsfri offert.</p>
    `,
  },
  {
    id: 9,
    title: "Tätskikt i badrum – regler, behörighet och vad du ska fråga",
    slug: "tatskikt-i-badrum",
    date: "2026-11-05",
    author: "Bygg & Plattsättning",
    readTime: "6 min",
    category: "Badrumsrenovering",
    excerpt:
      "Det är tätskiktet, inte kaklet, som skyddar huset mot vattenskador. Så fungerar branschreglerna BBV 26:1, vad behörigt företag betyder och vad du ska fråga din hantverkare.",
    content: `
      <p>Tätskiktet är det vattentäta lagret som sitter under kakel och klinker i ett badrum. Det är tätskiktet, inte plattorna eller fogen, som hindrar vatten från att tränga in i väggar och bjälklag. För att det ska fungera ska det byggas enligt Byggkeramikrådets branschregler för våtrum, BBV, med ett godkänt tätskiktssystem och av ett behörigt företag.</p>

      <h2>Varför kakel och fog inte räcker</h2>
      <p>Plattorna släpper igenom lite eller inget vatten, men fogarna mellan dem är inte täta. Fog tar upp fukt, och vatten kan ta sig in via sprickor, hörn och genomföringar. Utan ett fungerande tätskikt bakom når fukten underlaget, och skadan upptäcks ofta först när den redan har spridit sig.</p>

      <h2>Branschreglerna BBV 26:1</h2>
      <p>Byggkeramikrådet (BKR) ger ut branschregler för våtrum där kakel och klinker är ytskikt. Sedan 1 januari 2026 gäller BBV 26:1, som ersätter BBV 21:1. Några av förändringarna:</p>
      <ul>
        <li>Kraven på klinkerram har uppdaterats och presenteras tydligare</li>
        <li>Den högsta tillåtna golvlutningen i bad- och duschplats har ökats, för bättre avrinning mot golvbrunnen</li>
        <li>Kraven på tätning kring elgenomföringar i våtrum har förtydligats</li>
        <li>En ny produktgrupp har definierats för hur byggprodukter ansluts mot tätskiktet</li>
      </ul>
      <p>BBV är ett frivilligt system som måste avtalas mellan beställare och entreprenör. Anlitar du ett behörigt företag i en konsumententreprenad anses dock ett avtal om BBV alltid vara slutet. Reglerna gäller när ytskiktet är keramik. Väljer du ett annat ytskikt, till exempel mikrocement, gäller leverantörens anvisningar, och då utfärdas inget kvalitetsdokument enligt BBV.</p>

      <h2>Vad betyder behörigt företag?</h2>
      <p>Ett behörigt företag har fått utbildning i BBV och har valt att arbeta efter reglerna. Det använder godkända tätskiktssystem och kan lämna Byggkeramikrådets kvalitetsdokument, en egenkontroll som visar att våtrummet är byggt fackmässigt. För att kunna bli behörigt ska företaget arbeta med plattsättning och ha egna anställda plattsättare.</p>
      <p>Du kan kontrollera om ett företag är behörigt på BKR:s sida <a href="https://www.bkr.se/hitta-foretag" target="_blank" rel="noopener">Hitta företag</a>. Reglerna i sin helhet finns på <a href="https://www.bkr.se/regler/branschregler" target="_blank" rel="noopener">bkr.se</a>.</p>

      <h2>Säker Vatten: reglerna för VVS</h2>
      <p>Tätskiktet är bara en del av ett säkert badrum. Rör, golvbrunn och anslutningar ska också vara rätt utförda. För det finns branschreglerna Säker Vatteninstallation, som ges ut av Säker Vatten AB. Den aktuella versionen är Branschregler Säker Vatteninstallation 2026:1. Reglerna ska minska risken för vattenskador, men också för spridning av legionella, skållning och förgiftning.</p>
      <p>Säker Vatten auktoriserar VVS-företag, och auktorisationen gäller hela företaget. Montörerna har en branschlegitimation. Du kan söka efter auktoriserade företag på <a href="https://sakervatten.se" target="_blank" rel="noopener">sakervatten.se</a>. Be om intyget om Säker Vatteninstallation när VVS-arbetet är klart.</p>

      <h2>Olika typer av tätskikt</h2>
      <p>Tätskikt finns i två huvudsakliga varianter. Det ena är ett flytande tätskikt som stryks eller rollas på i flera lager och får torka mellan varje lager. Det andra är en tätskiktsmatta eller folie som klistras mot underlaget. Båda fungerar om de används rätt.</p>
      <p>Det viktiga är inte vilken typ som används, utan att hela systemet hör ihop. Primer, tätskikt, manschetter för rör och anslutningen mot golvbrunnen ska ingå i samma godkända tätskiktssystem och läggas enligt tillverkarens anvisningar. Det är också därför torktiden inte går att korta. Den är en del av anvisningen.</p>

      <h2>Tecken på att ett tätskikt inte fungerar</h2>
      <p>I ett äldre badrum kan tätskiktet vara slitet, felaktigt utfört eller helt saknas. Några varningstecken:</p>
      <ul>
        <li>Plattor som låter ihåligt eller sitter löst</li>
        <li>Sprickor i fogar eller plattor, särskilt runt brunnen och i duschhörnet</li>
        <li>Missfärgningar, mögel eller en unken lukt som inte går bort</li>
        <li>Fuktfläckar eller bubblande färg på väggen utanför badrummet eller i taket under</li>
      </ul>
      <p>Ser du något av detta, låt en fackman titta på det. En fuktskada som får fortsätta blir bara större.</p>

      <h2>De kritiska punkterna</h2>
      <p>Det är sällan den plana väggytan som läcker. Riskerna sitter i övergångarna:</p>
      <ul>
        <li>Anslutningen mellan tätskikt och golvbrunn</li>
        <li>Rörgenomföringar för blandare och toalett</li>
        <li>Elgenomföringar, till exempel för belysning och handdukstork</li>
        <li>Hörn och övergången mellan golv och vägg</li>
        <li>Golvets lutning, så att vatten rinner mot brunnen och inte blir stående</li>
      </ul>

      <h2>Frågor att ställa till din hantverkare</h2>
      <ul>
        <li>Är ni behöriga enligt Byggkeramikrådet? Kontrollera svaret på bkr.se.</li>
        <li>Bygger ni enligt BBV 26:1, och står det i offerten?</li>
        <li>Vilket tätskiktssystem använder ni?</li>
        <li>Får jag Byggkeramikrådets kvalitetsdokument när badrummet är klart?</li>
        <li>Vem gör VVS-arbetet, och är företaget auktoriserat enligt Säker Vatten?</li>
        <li>Får jag intyg om Säker Vatteninstallation?</li>
        <li>Hur dokumenterar ni tätskiktet innan det täcks av plattor?</li>
      </ul>
      <p>Spara dokumenten tillsammans med offert och faktura. De är bra att kunna visa upp den dag du säljer bostaden.</p>

      <h2>Bygg rätt från början</h2>
      <p>Ett tätskikt går inte att laga i efterhand utan att riva. Därför lönar det sig att göra rätt från början. Läs mer om vår <a href="/badrumsrenovering">badrumsrenovering</a> och <a href="/plattsattning">plattsättning</a>, se vad som påverkar priset i <a href="/blogg/vad-kostar-en-badrumsrenovering">Vad kostar en badrumsrenovering?</a> eller <a href="/kontakt">kontakta oss</a> för en kostnadsfri offert.</p>
    `,
  },
]

/** All posts, newest first. */
export const BLOG_POSTS: BlogPost[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
