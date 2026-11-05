// Facts per town, used to give every local landing page its own, verifiable content.
//
// Sources (retrieved 2026-11-05):
//  - Population: SCB via Swedish Wikipedia (tätort 2023, kommun 2026 Q2).
//  - History, landmarks, urban development: Swedish Wikipedia articles for each town.
//  - Distances/drive times: OpenStreetMap routing (OSRM) from Kyrkogatan 7C, Eskilstuna,
//    to each town centre. Rounded; actual time depends on traffic.
//  - Coordinates: OpenStreetMap (Nominatim), town centre.
//  - Photos: Wikimedia Commons, Creative Commons licences; author and licence are shown
//    under each photo on the site (required by the licences).
//
// Nothing here is a claim about our own jobs in the town. Reference jobs live in lib/projects.ts.

export type CityPhoto = {
  src: string
  alt: string
  /** Short caption shown under the image. */
  caption: string
  author: string
  license: string
  licenseUrl: string
  /** Commons file page (where the original and full credits live). */
  sourceUrl: string
  /** Focal point for object-position, e.g. "50% 60%". */
  position?: string
}

export type CityInfo = {
  slug: string
  name: string
  kommun: string
  lan: string
  /** Landskap (Södermanland / Västmanland). */
  landskap: string
  /** Road distance from our base in km. 0 = the base town itself. */
  distanceKm: number
  /** Drive time from our base in minutes. */
  driveMin: number
  /** Main roads on the way, in order. */
  route?: string
  lat: number
  lon: number
  /** Tätort population (SCB 2023). */
  population: number
  /** Kommun population (SCB 2026). */
  kommunPopulation: number
  /** Year the place got town rights / was founded, with a short label. `display` overrides the year in the UI (e.g. "1200-talet"). */
  founded: { year: number; label: string; display?: string }
  /** Verified facts about the town. Writers may use any of these; nothing else. */
  facts: string[]
  /** Verified notes on the housing stock and urban growth. The most useful hook for a renovation firm. */
  housing: string[]
  /** Well-known places, for colour and image captions. */
  landmarks: string[]
  /** Short general paragraph about working in this town, shown on every service page for the town. */
  local: string
  photo: CityPhoto
}

export const CITY_INFO: Record<string, CityInfo> = {
  eskilstuna: {
    slug: "eskilstuna",
    name: "Eskilstuna",
    kommun: "Eskilstuna kommun",
    lan: "Södermanlands län",
    landskap: "Södermanland",
    distanceKm: 0,
    driveMin: 0,
    lat: 59.3717,
    lon: 16.5051,
    population: 70646,
    kommunPopulation: 106627,
    founded: { year: 1659, label: "Karl Gustavs stad bröts ut ur Fors socken" },
    facts: [
      "Eskilstuna tätort har 70 646 invånare (SCB 2023) och kommunen 106 627 (2026).",
      "Namnet Eskilstuna finns i ett brev från 1285; staden Karl Gustavs stad grundades 1659.",
      "Rademachersmedjorna från 1600-talet är platsen där stadens industrihistoria började.",
      "Industristad med Munktells verkstäder (senare Bolinder-Munktell, Volvo BM och i dag Volvo CE) och Assa.",
      "Fors kyrka är stadens äldsta byggnad, troligen från 1100-talet. Klosters kyrka byggdes 1929.",
      "Eskilstunaån rinner genom centrum, och Mälardalens universitet har campus i staden.",
      "Svealandsbanan i slutet av 1990-talet vände en lång befolkningsminskning.",
    ],
    housing: [
      "Bostadsbyggandet tog fart efter 1907, när Nyfors samt Fors och Klosters församlingar införlivades, och var som mest intensivt mellan krigen och under 1940- och 50-talen.",
      "Folkmängden toppade på 68 596 år 1970 och sjönk under 1970-talet när industrier lades ned. Många bostäder i staden är därför byggda före 1975, med badrum och kök som nu är inne på sin andra eller tredje renovering.",
      "Munktellstaden, det gamla verkstadsområdet vid ån, har byggts om till ett område med konstmuseum, arena och bostäder.",
    ],
    landmarks: ["Rademachersmedjorna", "Fors kyrka", "Klosters kyrka", "Munktellstaden", "Eskilstunaån", "Parken Zoo"],
    local:
      "Eskilstuna är vår hemstad. Vi utgår från Kyrkogatan 7C i Gamla staden, intill Fors kyrka, och har kort väg till de flesta stadsdelar. Det gör det enkelt att boka in ett platsbesök och att stämma av på plats medan arbetet pågår.",
    photo: {
      src: "/orter/eskilstuna.jpg",
      alt: "Röda och gröna trähus speglar sig i Eskilstunaån en sommardag",
      caption: "Trähusen vid Eskilstunaån, ett stenkast från vår bas på Kyrkogatan.",
      author: "Edmond Audran",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Eskiltuna.jpg",
      position: "50% 62%",
    },
  },
  torshalla: {
    slug: "torshalla",
    name: "Torshälla",
    kommun: "Eskilstuna kommun",
    lan: "Södermanlands län",
    landskap: "Södermanland",
    distanceKm: 9,
    driveMin: 12,
    route: "E20",
    lat: 59.4192,
    lon: 16.4749,
    population: 9167,
    kommunPopulation: 106627,
    founded: { year: 1317, label: "Stadsprivilegier av kung Birger Magnusson" },
    facts: [
      "Torshälla har 9 167 invånare (SCB 2023) och ligger cirka 7 km norr om centrala Eskilstuna, i Eskilstuna kommun sedan 1971.",
      "Stadsprivilegierna är daterade 24 februari 1317, vilket gör Torshälla till den äldsta staden i Rekarnebygden.",
      "Torshälla kyrka har delar från 1100-talet och takmålningar från 1400-talet av Albertus Pictor.",
      "Stadsbranden 1798 förstörde stora delar av staden; rådhuset vid Rådhustorget byggdes 1833.",
      "Nyby bruk grundades 1829 och är i dag Outokumpus anläggning för rostfritt stål.",
      "Holmberget blev stadspark 1897. Vid Mälaren ligger Mälarbaden, och i staden finns Ebelingmuseet.",
    ],
    housing: [
      "Bergströmska gården och kvarteren runt den är de äldsta bevarade delarna av småstadsbebyggelsen, med trähus där golv och väggar sällan är i våg.",
      "Villa- och flerbostadsområdena runt den gamla stadskärnan byggdes till stor del under 1960- till 1980-talen.",
    ],
    landmarks: ["Torshälla kyrka", "Rådhustorget", "Torshällaån", "Holmberget", "Mälarbaden", "Ebelingmuseet"],
    local:
      "Torshälla ligger knappt en mil norr om vår bas i Eskilstuna, ungefär tolv minuter bort med bil. Orten tillhör Eskilstuna kommun.",
    photo: {
      src: "/orter/torshalla.jpg",
      alt: "Vy över Torshälla centrum med kyrktornet och husen längs ån",
      caption: "Torshälla sett över ån, med kyrkan från 1100-talet i fonden.",
      author: "Udo Schröter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Torsh%C3%A4lla_vy_mot_centrum.jpg",
      position: "55% 50%",
    },
  },
  strangnas: {
    slug: "strangnas",
    name: "Strängnäs",
    kommun: "Strängnäs kommun",
    lan: "Södermanlands län",
    landskap: "Södermanland",
    distanceKm: 33,
    driveMin: 26,
    route: "E20",
    lat: 59.3763,
    lon: 17.0268,
    population: 15369,
    kommunPopulation: 39541,
    founded: { year: 1336, label: "Stadsrättigheter" },
    facts: [
      "Strängnäs tätort har 15 369 invånare (SCB 2023) och kommunen 39 541 (2026).",
      "Stiftsstad vid Mälaren; den första stenkyrkan på Kyrkberget stod klar på 1280-talet och domkyrkan dominerar stadsbilden än i dag.",
      "Gustav Vasa valdes till kung vid domkyrkans norra mur den 6 juni 1523, dagen som blev Sveriges nationaldag.",
      "Gymnasiet grundades 1626 och fick Roggeborgen av Gustav II Adolf.",
      "Gyllenhjelmsgatan anlades på 1640-talet och leder upp mot domkyrkan genom den gamla trästaden.",
      "Svealandsbanan (klar 1997) ger direkttåg till Stockholm, och E20 har motorvägsstandard förbi staden sedan 2004.",
      "Det kommunala dricksvattnet kommer via ledning från Norsborgs vattenverk i Botkyrka.",
    ],
    housing: [
      "Gatunätet är i huvudsak oförändrat sedan 1600-talets mitt, men branden 1871 förstörde stora delar av stadens nordöstra del. Mycket av bebyggelsen i centrum är alltså antingen gammal trästad eller uppförd efter 1871.",
      "Eldsundsviken är en nyare stadsdel på det tidigare militärområdet, med bostäder från 2000-talet.",
    ],
    landmarks: ["Strängnäs domkyrka", "Gyllenhjelmsgatan", "Roggeborgen", "Tosterön", "Mälaren"],
    local:
      "Strängnäs ligger vid Mälaren, drygt tre mil öster om Eskilstuna längs E20. Resan från vår bas tar ungefär en halvtimme, och Strängnäs hör till samma län som Eskilstuna.",
    photo: {
      src: "/orter/strangnas.jpg",
      alt: "Gyllenhjelmsgatan i Strängnäs med röda trähus och domkyrkans torn i fonden",
      caption: "Gyllenhjelmsgatan, anlagd på 1640-talet, med domkyrkan i fonden.",
      author: "I99pema",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gyllenhjelmgatan,_Str%C3%A4ngn%C3%A4s_02.jpg",
      position: "50% 45%",
    },
  },
  vasteras: {
    slug: "vasteras",
    name: "Västerås",
    kommun: "Västerås stad",
    lan: "Västmanlands län",
    landskap: "Västmanland",
    distanceKm: 45,
    driveMin: 41,
    route: "E20, riksväg 56 och E18",
    lat: 59.6111,
    lon: 16.5464,
    population: 131643,
    kommunPopulation: 161629,
    founded: { year: 990, label: "Handelsplats sedan sent 900-tal", display: "900-talet" },
    facts: [
      "Västerås är Sveriges sjätte största tätort med 131 643 invånare (SCB 2023); kommunen har drygt 161 000 (2026).",
      "En av Sveriges äldsta städer, med handel sedan sent 900-tal; staden firade 1000 år 1990.",
      "ASEA bildades 1890 och är i dag ABB, stadens största industriarbetsgivare med omkring 4 500 anställda.",
      "Domkyrkans torn är 92 meter högt; Kyrkbacken intill är ett äldre kvarter med trähus. Västerås slott byggdes som försvarsanläggning på 1200-talet.",
      "Skrapan är 81 meter hög, och hamnen är Nordens största insjöhamn.",
      "Mälardalens universitet har omkring 13 000 studerande.",
    ],
    housing: [
      "Folkmängden växte från 76 196 (1960) till 99 343 (1970); under samma tid byggdes stora bostadsområden som Bäckby, Råby, Vallby och Viksäng, och citysaneringen på 1950- och 60-talen förnyade större delen av centrum.",
      "Bäckby är stadens största stadsdel med 8 172 invånare (2014), följt av Råby (6 462), Hamre-Talltorp (5 817) och Vallby (5 245).",
      "Vid vattnet har nya bostadsområden vuxit fram, som Lillåudden och Öster Mälarstrand, med lägenheter från 2000-talet.",
    ],
    landmarks: ["Västerås domkyrka", "Kyrkbacken", "Västerås slott", "Skrapan", "Lillåudden", "Öster Mälarstrand"],
    local:
      "Till Västerås kör vi norrut på riksväg 56 över Mälaren vid Kvicksund, ungefär 45 kilometer och drygt 40 minuter från vår bas i Eskilstuna. Västerås ligger på andra sidan länsgränsen, i Västmanlands län.",
    photo: {
      src: "/orter/vasteras.jpg",
      alt: "Moderna flerbostadshus vid vattnet på Lillåudden i Västerås med en båt i förgrunden",
      caption: "Lillåudden, ett av de nya bostadsområdena vid Mälaren i Västerås.",
      author: "Brorsson",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%C3%96ster_M%C3%A4larstrand,_V%C3%A4ster%C3%A5s.jpg",
      position: "50% 55%",
    },
  },
  katrineholm: {
    slug: "katrineholm",
    name: "Katrineholm",
    kommun: "Katrineholms kommun",
    lan: "Södermanlands län",
    landskap: "Södermanland",
    distanceKm: 62,
    driveMin: 60,
    route: "väg 230 och riksväg 56",
    lat: 58.9959,
    lon: 16.2062,
    population: 23953,
    kommunPopulation: 33901,
    founded: { year: 1917, label: "Stadsrättigheter 1 januari 1917" },
    facts: [
      "Katrineholm tätort har 23 953 invånare (SCB 2023) och kommunen 33 901 (2026).",
      "Staden växte fram kring järnvägen: Västra stambanan öppnade 1862 och Östra stambanan anslöt 1866, vilket gjorde Katrineholm till en järnvägsknut.",
      "Municipalsamhälle 1883 och stadsrättigheter 1 januari 1917. Centrum följer en rutnätsplan från 1891.",
      "Kullbergska huset byggdes 1902–1904. Stora torget och Stadsparken med friluftsscen ligger i centrum.",
      "Sjöarna Djulösjön, Duveholmssjön och Näsnaren ligger runt staden.",
      "Dricksvattnet är medelhårt, 5–6 tyska grader enligt Sörmland Vatten (SVT 2016).",
    ],
    housing: [
      "Under 1960- till 1980-talen byggdes staden ut med områdena Sandbäcken, Nävertorp, Gersnäs, Lasstorp och Värmbol.",
      "Folkmängden låg nästan stilla från 1980 (21 876) till 2010 (21 993) och har sedan vuxit till 24 483 (2020), vilket betyder att de flesta bostäder är äldre än 40 år.",
    ],
    landmarks: ["Stora torget", "Kullbergska huset", "Gamla vattentornet", "Stadsparken", "Djulö", "Duveholmssjön"],
    local:
      "Katrineholm ligger drygt sex mil söder om Eskilstuna, ungefär en timme bort via väg 230 och riksväg 56. Det är den ort vi täcker som ligger längst från vår bas, så vi planerar platsbesök och arbetsdagar i god tid tillsammans med dig.",
    photo: {
      src: "/orter/katrineholm.jpg",
      alt: "Storgatan i Katrineholm med tegelhus och det gamla vattentornet i fonden",
      caption: "Storgatan västerut med Katrineholms gamla vattentorn i fonden.",
      author: "Holger Ellgaard",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Katrineholms_vattentorn,_sept_2020f.jpg",
      position: "50% 40%",
    },
  },
  koping: {
    slug: "koping",
    name: "Köping",
    kommun: "Köpings kommun",
    lan: "Västmanlands län",
    landskap: "Västmanland",
    distanceKm: 42,
    driveMin: 40,
    route: "E20 och väg 250",
    lat: 59.5137,
    lon: 15.997,
    population: 18605,
    kommunPopulation: 25626,
    founded: { year: 1349, label: "Känd som stad från 1349; privilegiebrev 1474" },
    facts: [
      "Köping tätort har 18 605 invånare (SCB 2023) och kommunen 25 626 (2026). Det är den näst största tätorten i Västmanlands län.",
      "Omnämnd första gången 1257, känd som stad från 1349 och med stadsprivilegier från 19 januari 1474.",
      "Köpings kyrka har ett torn ritat av Nicodemus Tessin d.ä., och Carl Milles staty av apotekaren Carl Wilhelm Scheele står i staden.",
      "Hamnen vid Mälaren är Sveriges näst största insjöhamn. Köpings mekaniska verkstad grundades 1856 och köptes av Volvo 1942.",
      "Sängtillverkaren Hästens har sin tillverkning i Köping.",
      "Staden ligger vid E18 och har station på Mälarbanan mellan Stockholm och Örebro.",
    ],
    housing: [
      "Stadsbranden 1889 förstörde stora delar av staden. Därefter byggdes en stenstad där arkitekten Theodor Dahl ritade många av de mer kända byggnaderna, så centrum består till stor del av hus från 1890-talet och framåt.",
      "Folkmängden ökade från 16 819 (1960) till en topp på 21 740 (1970), vilket gör 1960-talet till stadens stora byggdecennium, och minskade sedan till 17 296 år 2000.",
    ],
    landmarks: ["Köpings kyrka", "Köpingsån", "Stora torget", "Scheelestatyn", "Köpings hamn"],
    local:
      "Köping ligger vid Mälarens västra del, ungefär 42 kilometer från vår bas i Eskilstuna via E20 och väg 250. Restiden är runt 40 minuter. Köping hör till Västmanlands län.",
    photo: {
      src: "/orter/koping.jpg",
      alt: "Gatuvy i centrala Köping med stenhus och kyrktornet i fonden",
      caption: "Centrala Köping med stenstaden från tiden efter branden 1889 och kyrktornet i fonden.",
      author: "Håkan Skogsjö",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:K%C3%B6ping_2013-08-23_image07.jpg",
      position: "50% 45%",
    },
  },
  arboga: {
    slug: "arboga",
    name: "Arboga",
    kommun: "Arboga kommun",
    lan: "Västmanlands län",
    landskap: "Västmanland",
    distanceKm: 44,
    driveMin: 37,
    route: "E20",
    lat: 59.3942,
    lon: 15.8397,
    population: 10906,
    kommunPopulation: 13873,
    founded: { year: 1293, label: "Stad på 1200-talet; äldsta privilegiebrevet från 1480", display: "1200-talet" },
    facts: [
      "Arboga tätort har 10 906 invånare (SCB 2023) och kommunen 13 873 (2026).",
      "Bebyggelse sedan 900-talet och stad på 1200-talet; det äldsta kända sigillet är från 1330 och privilegiebrevet från 1480.",
      "Arboga möte 1435 räknas traditionellt som Sveriges första riksdag, där Engelbrekt utsågs till rikshövitsman.",
      "Franciskanerna grundade ett konvent 1285; Heliga Trefaldighets kyrka var deras klosterkyrka.",
      "Hjälmare kanal öppnade 1639 och är Sveriges äldsta byggda vattenväg som fortfarande används.",
      "E18 och E20 möts i Arboga, och Svealandsbanan börjar här.",
      "Industriort med tekniskt profil: Saab och Försvarsmakten är stora arbetsgivare, och Arboga bryggeri är känt för sitt öl.",
    ],
    housing: [
      "Stadskärnan har kvar sin medeltida gatustruktur, med äldre trä- och stenhus längs Arbogaån, till exempel kvarteret Kungsgården vid Gamla bron.",
      "I äldre hus som dessa är golv och väggar sällan raka, och vatten- och avloppsstammar är ofta bytta i omgångar, vilket påverkar hur en renovering planeras.",
    ],
    landmarks: ["Heliga Trefaldighets kyrka", "Gamla bron", "Arbogaån", "Stora torget", "Hjälmare kanal"],
    local:
      "Arboga nås enkelt västerut längs E20, ungefär 44 kilometer och knappt 40 minuter från vår bas i Eskilstuna. Arboga ligger i Västmanlands län.",
    photo: {
      src: "/orter/arboga.jpg",
      alt: "Arbogaån med det gula stenhuset och röda trähusen i kvarteret Kungsgården, sedda från Gamla bron",
      caption: "Kvarteret Kungsgården vid Arbogaån, sett från Gamla bron.",
      author: "Jssfrk",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Arboga_1.jpg",
      position: "50% 55%",
    },
  },
}

export const CITY_LIST = Object.values(CITY_INFO)

/** Our base, used by the map and distance texts. */
export const BASE_CITY = CITY_INFO.eskilstuna
