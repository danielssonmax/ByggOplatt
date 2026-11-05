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
]

/** All posts, newest first. */
export const BLOG_POSTS: BlogPost[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
