import { BASE_CITY, CITY_LIST } from "@/lib/cities"

// Schematic map of the seven towns, drawn from their real coordinates.
// Equirectangular projection with latitude scaling; no base map, just the places.
// `current` highlights one town and draws the drive from our base to it.

// Room for the labels of the outermost towns (Arboga left, Strängnäs right).
const PAD_X = 92
const PAD_Y = 40
const SIZE = 440
const LAT_SCALE = Math.cos((59.3 * Math.PI) / 180)

const lats = CITY_LIST.map((c) => c.lat)
const lons = CITY_LIST.map((c) => c.lon)
const minLat = Math.min(...lats)
const maxLat = Math.max(...lats)
const minLon = Math.min(...lons)
const maxLon = Math.max(...lons)
const spanX = (maxLon - minLon) * LAT_SCALE
const spanY = maxLat - minLat
const scale = Math.min((SIZE - PAD_X * 2) / spanX, (SIZE - PAD_Y * 2) / spanY)
const offX = (SIZE - spanX * scale) / 2
const offY = (SIZE - spanY * scale) / 2

function project(lat: number, lon: number) {
  return {
    x: offX + (lon - minLon) * LAT_SCALE * scale,
    y: offY + (maxLat - lat) * scale,
  }
}

// Label placement per town so names don't collide (dx, dy, anchor).
const LABEL: Record<string, { dx: number; dy: number; anchor: "start" | "end" | "middle" }> = {
  eskilstuna: { dx: 0, dy: 26, anchor: "middle" },
  torshalla: { dx: 0, dy: -14, anchor: "middle" },
  strangnas: { dx: 12, dy: 5, anchor: "start" },
  vasteras: { dx: 12, dy: 5, anchor: "start" },
  katrineholm: { dx: 0, dy: 24, anchor: "middle" },
  koping: { dx: -12, dy: 5, anchor: "end" },
  arboga: { dx: -12, dy: 5, anchor: "end" },
}

export function AreaMap({ current, className = "" }: { current?: string; className?: string }) {
  const base = project(BASE_CITY.lat, BASE_CITY.lon)
  const target = current && current !== BASE_CITY.slug ? CITY_LIST.find((c) => c.slug === current) : undefined
  const t = target ? project(target.lat, target.lon) : undefined
  const title = target
    ? `Karta: ${target.name} ligger cirka ${target.distanceKm} km från vår bas i Eskilstuna`
    : "Karta över de sju orter vi arbetar i: Eskilstuna, Torshälla, Strängnäs, Västerås, Katrineholm, Köping och Arboga"

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={title}
      className={`h-auto w-full font-sans ${className}`}
    >
      <defs>
        <pattern id="map-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.07)" />
        </pattern>
      </defs>
      <rect width={SIZE} height={SIZE} fill="url(#map-dots)" />

      {/* Drive from base to the current town */}
      {t && (
        <line
          x1={base.x}
          y1={base.y}
          x2={t.x}
          y2={t.y}
          stroke="#77e7fe"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          strokeLinecap="round"
          opacity="0.9"
        />
      )}

      {/* Faint spokes from the base to every town */}
      {CITY_LIST.filter((c) => c.slug !== BASE_CITY.slug && c.slug !== current).map((c) => {
        const p = project(c.lat, c.lon)
        return (
          <line
            key={c.slug}
            x1={base.x}
            y1={base.y}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        )
      })}

      {CITY_LIST.map((c) => {
        const p = project(c.lat, c.lon)
        const isBase = c.slug === BASE_CITY.slug
        const isCurrent = c.slug === current
        const l = LABEL[c.slug] ?? { dx: 10, dy: 4, anchor: "start" as const }
        return (
          <g key={c.slug}>
            {isBase ? (
              // Our base: the logo's orange square
              <rect
                x={p.x - 6}
                y={p.y - 6}
                width="12"
                height="12"
                fill="#FF9800"
                transform={`rotate(45 ${p.x} ${p.y})`}
              />
            ) : isCurrent ? (
              <>
                <circle cx={p.x} cy={p.y} r="13" fill="rgba(119,231,254,0.14)" />
                <circle cx={p.x} cy={p.y} r="5.5" fill="#77e7fe" />
              </>
            ) : (
              <circle cx={p.x} cy={p.y} r="3.5" fill="#101215" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
            )}
            <text
              x={p.x + l.dx}
              y={p.y + l.dy}
              textAnchor={l.anchor}
              fontSize="13"
              fontWeight={isBase || isCurrent ? 600 : 400}
              fill={isCurrent ? "#ffffff" : isBase ? "#FF9800" : "rgba(255,255,255,0.6)"}
            >
              {c.name}
            </text>
          </g>
        )
      })}

      {/* Distance label on the route */}
      {t && target && (
        <text
          x={(base.x + t.x) / 2}
          y={(base.y + t.y) / 2 - 8}
          textAnchor="middle"
          fontSize="11"
          fill="#77e7fe"
          fontVariant="tabular-nums"
        >
          {target.distanceKm} km · {target.driveMin} min
        </text>
      )}
    </svg>
  )
}
