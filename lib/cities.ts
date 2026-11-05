// Facts per town, used to give every local landing page its own, verifiable content.
// Distances/drive times: OpenStreetMap routing (OSRM) from Kyrkogatan 7C, Eskilstuna,
// to each town centre, retrieved 2026-11-05. Rounded; actual time depends on traffic.

export type CityInfo = {
  slug: string
  name: string
  kommun: string
  lan: string
  /** Road distance from our base in km. 0 = the base town itself. */
  distanceKm: number
  /** Drive time from our base in minutes. */
  driveMin: number
  /** Main roads on the way, in order. */
  route?: string
  /** Unique paragraph about working in this town. Facts only. */
  local: string
}

export const CITY_INFO: Record<string, CityInfo> = {
  eskilstuna: {
    slug: "eskilstuna",
    name: "Eskilstuna",
    kommun: "Eskilstuna kommun",
    lan: "Södermanlands län",
    distanceKm: 0,
    driveMin: 0,
    local:
      "Eskilstuna är vår hemstad. Vi utgår från Kyrkogatan 7C i Gamla staden, intill Fors kyrka, och har kort väg till de flesta stadsdelar. Det gör det enkelt att boka in ett platsbesök och att stämma av på plats medan arbetet pågår.",
  },
  torshalla: {
    slug: "torshalla",
    name: "Torshälla",
    kommun: "Eskilstuna kommun",
    lan: "Södermanlands län",
    distanceKm: 9,
    driveMin: 12,
    local:
      "Torshälla ligger knappt en mil norr om vår bas i Eskilstuna, ungefär tolv minuter bort med bil. Torshälla tillhör Eskilstuna kommun, så det är samma kommun som handlägger eventuella bygglov och anmälningar som för våra uppdrag inne i Eskilstuna.",
  },
  strangnas: {
    slug: "strangnas",
    name: "Strängnäs",
    kommun: "Strängnäs kommun",
    lan: "Södermanlands län",
    distanceKm: 33,
    driveMin: 26,
    route: "E20",
    local:
      "Strängnäs ligger vid Mälaren, drygt tre mil öster om Eskilstuna längs E20. Resan från vår bas tar ungefär en halvtimme. Strängnäs hör till samma län som Eskilstuna, Södermanlands län, och bygglovsfrågor hanteras av Strängnäs kommun.",
  },
  vasteras: {
    slug: "vasteras",
    name: "Västerås",
    kommun: "Västerås stad",
    lan: "Västmanlands län",
    distanceKm: 45,
    driveMin: 41,
    route: "E20, riksväg 56 och E18",
    local:
      "Till Västerås kör vi norrut på riksväg 56 över Mälaren vid Kvicksund, ungefär 45 kilometer och drygt 40 minuter från vår bas i Eskilstuna. Västerås ligger i Västmanlands län, och här är det Västerås stad som handlägger bygglov och anmälningar.",
  },
  katrineholm: {
    slug: "katrineholm",
    name: "Katrineholm",
    kommun: "Katrineholms kommun",
    lan: "Södermanlands län",
    distanceKm: 62,
    driveMin: 60,
    route: "väg 230 och riksväg 56",
    local:
      "Katrineholm ligger drygt sex mil söder om Eskilstuna, ungefär en timme bort via väg 230 och riksväg 56. Det är den ort vi täcker som ligger längst från vår bas, så vi planerar platsbesök och arbetsdagar i god tid tillsammans med dig. Bygglovsfrågor hanteras av Katrineholms kommun.",
  },
  koping: {
    slug: "koping",
    name: "Köping",
    kommun: "Köpings kommun",
    lan: "Västmanlands län",
    distanceKm: 42,
    driveMin: 40,
    route: "E20 och väg 250",
    local:
      "Köping ligger vid Mälarens västra del, ungefär 42 kilometer från vår bas i Eskilstuna via E20 och väg 250. Restiden är runt 40 minuter. Köping hör till Västmanlands län och det är Köpings kommun som handlägger bygglov och anmälningar.",
  },
  arboga: {
    slug: "arboga",
    name: "Arboga",
    kommun: "Arboga kommun",
    lan: "Västmanlands län",
    distanceKm: 44,
    driveMin: 37,
    route: "E20",
    local:
      "Arboga nås enkelt västerut längs E20, ungefär 44 kilometer och knappt 40 minuter från vår bas i Eskilstuna. Arboga ligger i Västmanlands län, och bygglov och anmälningar handläggs av Arboga kommun.",
  },
}
