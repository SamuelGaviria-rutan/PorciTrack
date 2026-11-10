import {
  FormEvent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import porcitrackLogo from "./assets/porcitrack-logo.svg"

type IconName = "home" | "sow" | "boar" | "piglet" | "pigFace" | "growth" | "crown" | "sprout" | "box" | "table" | "chart" | "calendar" | "settings" | "mic" | "plus" | "edit" | "pin" | "alert" | "pig" | "trend" | "chevron" | "logout" | "menu" | "x" | "check" | "trash" | "arrow" | "dots" | "list" | "grid" | "weight" | "clock" | "info" | "syringe" | "bell" | "download" | "search" | "heart" | "baby" | "droplet" | "filter" | "sort" | "star" | "building" | "clipboard" | "document" | "userPlus" | "profile"

function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
}: {
  name: IconName
  size?: number
  strokeWidth?: number
}) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    sow: (
      <>
        <path d="M5 11c0-3 3-5 7-5s7 2 7 5v3c0 3-3 5-7 5s-7-2-7-5Z" />
        <path d="M5 12H2v-2M8 18v3m8-3v3M9 10h.01M15 10h.01" />
      </>
    ),
    boar: (
      <>
        <path d="M4 10c1-4 5-6 10-5l5 3v8l-4 3H7l-3-3Z" />
        <path d="m16 8 3-3 1 5M8 19v2m7-2v2M7 11h.01" />
      </>
    ),
    piglet: (
      <>
        <path d="M6.5 10 4 7v5M17.5 10 20 7v5" />
        <path d="M6 10c0-3 2.7-5 6-5s6 2 6 5v5c0 3-2.7 5-6 5s-6-2-6-5Z" />
        <path d="M9.5 11h.01M14.5 11h.01" />
        <path d="M9 15c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 2-3 2-3-.9-3-2Z" />
      </>
    ),
    pigFace: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 9-2-1v3m9-2 2-1v3" />
        <path d="M8 11c0-2.2 1.8-4 4-4s4 1.8 4 4v3c0 2.2-1.8 4-4 4s-4-1.8-4-4Z" />
        <path d="M10 11h.01M14 11h.01M10 15h4" />
      </>
    ),
    growth: (
      <>
        <path d="M4 18V9m6 9V5m6 13v-7m4 7V3" />
        <path d="M2 21h20" />
      </>
    ),
    crown: (
      <>
        <path d="m3 7 4.5 4L12 4l4.5 7L21 7l-2 10H5Z" />
        <path d="M5 20h14" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 14c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Z" />
        <path d="M12 11c0-4.5 2.5-7 7-7 0 4.5-2.5 7-7 7Z" />
      </>
    ),
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4Z" />
        <path d="M4 7v10l8 4 8-4V7M12 11v10" />
      </>
    ),
    table: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M9 4v16m6-16v16" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
        <path d="m3 6 5-4 5 4 6-5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    mic: (
      <>
        <rect x="8" y="2" width="8" height="13" rx="4" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    edit: (
      <>
        <path d="m4 16-1 5 5-1L19 9l-4-4Z" />
        <path d="m13 7 4 4M3 21h18" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    alert: (
      <>
        <path d="M10.3 3.6 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4m0 4h.01" />
      </>
    ),
    pig: (
      <>
        <path d="M4 11c0-3 3-5 8-5 3 0 6 1 7 3l3 1-1 5-3 1c-1 2-3 3-6 3H7l-2 2v-4c-1-1-1-3-1-6Z" />
        <path d="M8 19v2m8-3v3M8 10h.01" />
      </>
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    logout: (
      <>
        <path d="M10 17l5-5-5-5m5 5H3" />
        <path d="M14 3h6v18h-6" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3m3 0-1 14H7L6 7m4 4v6m4-6v6" />
      </>
    ),
    arrow: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    dots: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    list: (
      <>
        <path d="M9 6h11M9 12h11M9 18h11" />
        <path d="M4 6h.01M4 12h.01M4 18h.01" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    weight: (
      <>
        <path d="M5 9h14l2 12H3Z" />
        <path d="M9 9a3 3 0 0 1 6 0M12 12v3l2 1" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5m0-8h.01" />
      </>
    ),
    syringe: (
      <>
        <path d="m18 2 4 4M17 7l2-2M5 19l-2 2m4-4-2 2M14 4l6 6-9 9-6-6Z" />
        <path d="m8 10 6 6M3 11l2-2 10 10-2 2Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
        <path d="M10 21h4" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M4 19h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    baby: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10h.01M15 10h.01M9 15c1.5 1 4.5 1 6 0M12 4c0-2 3-2 3 0" />
      </>
    ),
    droplet: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />,
    filter: <path d="M3 5h18l-7 8v6l-4 2v-8Z" />,
    sort: (
      <>
        <path d="M8 6h12M8 12h9M8 18h6" />
        <path d="m3 8 2-2 2 2M5 6v12" />
      </>
    ),
    star: (
      <path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1 6.2-5.6-2.9L6.4 20l1-6.2-4.5-4.4 6.3-.9Z" />
    ),
    building: (
      <>
        <path d="M4 21V7l8-4 8 4v14M2 21h20" />
        <path d="M8 9h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2M9 9h6m-6 4h6m-6 4h4" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6Z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    userPlus: (
      <>
        <circle cx="9" cy="8" r="4" />
        <path d="M2 21a7 7 0 0 1 14 0m3-10v6m-3-3h6" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const cycleOrder = [
  "Plantel reproductivo",
  "Reproductor",
  "Precebo",
  "Levante",
] as const
type Cycle = typeof cycleOrder[number]
const homeCycleIcons: Record<Cycle, IconName> = {
  "Plantel reproductivo": "pigFace",
  Reproductor: "crown",
  Precebo: "sprout",
  Levante: "trend",
}
type Farm = {
  id: number
  name: string
  municipality: string
  cycles: Cycle[]
  alerts: number
  urgent: string
  lots: number
  animals: number
  mortality: string
  goal: string
}

type HomeFarmAlert = {
  id: string
  title: string
  detail: string
  urgency: number
  module: "Plantel reproductivo" | "Reproductor" | "Inventario" | "Sanidad del lote" | "PorciTabla" | "Carpeta ICA"
  destination: string
}

const initialFarms: Farm[] = [
  {
    id: 1,
    name: "Granja La Esperanza",
    municipality: "Santa Rosa de Osos",
    cycles: ["Plantel reproductivo", "Reproductor", "Precebo", "Levante"],
    alerts: 3,
    urgent: "Vacuna Circovirus por vencer",
    lots: 8,
    animals: 1248,
    mortality: "1,8 %",
    goal: "≤ 2,0 %",
  },
  {
    id: 2,
    name: "Granja El Porvenir",
    municipality: "Donmatías",
    cycles: ["Reproductor", "Precebo"],
    alerts: 0,
    urgent: "Todo está al día",
    lots: 4,
    animals: 620,
    mortality: "1,2 %",
    goal: "≤ 1,8 %",
  },
  {
    id: 3,
    name: "Granja San José",
    municipality: "Yarumal",
    cycles: ["Plantel reproductivo", "Reproductor", "Levante"],
    alerts: 1,
    urgent: "Revisar inventario",
    lots: 6,
    animals: 894,
    mortality: "2,1 %",
    goal: "≤ 2,2 %",
  },
]

type ProductionCycle = "Precebo" | "Levante"
type LotStatus = "Activo" | "Finalizado"
type MortalityRecord = {
  id: number
  date: string
  quantity: number
  sex: "Hembra" | "Macho"
  cause: string
  responsible: string
  annulled?: boolean
  annulReason?: string
}
type LotMovement = {
  id: number
  date: string
  party: string
  females: number
  males: number
  totalWeight: number
  purchaseType?: "Animales" | "Alimento" | "Otro insumo"
  concept?: string
  quantity?: number
  unit?: "kg" | "bultos" | "unidades"
  value?: number
  invoice?: string
  responsible?: string
  annulled?: boolean
  annulReason?: string
}
type LotConsumption = {
  id: number
  date: string
  feed: string
  quantity: number
  responsible: string
  notes?: string
}
type LotTransfer = {
  id: number
  date: string
  direction: "Salida" | "Entrada"
  kind?: "Migración" | "Traslado"
  otherLot: string
  animals: number
  females: number
  males: number
  averageWeight: number
  totalWeight: number
  responsible: string
  reason?: string
  notes?: string
}
type Lot = {
  id: number
  farmId: number
  cycle: ProductionCycle
  code: string
  status: LotStatus
  day: number
  females: number
  males: number
  initialAnimals: number
  averageWeight: number
  mortalityGoal: number
  gpd: number
  mortalityRecords: MortalityRecord[]
  purchaseRecords: LotMovement[]
  saleRecords: LotMovement[]
  consumptionRecords?: LotConsumption[]
  transferRecords?: LotTransfer[]
  closedDate?: string
  entryDate?: string
  initialTotalWeight?: number
  targetWeight?: number
  feedBrand?: string
  origin?: string
  notes?: string
  responsible?: string
}

const makeMortalityRecords = (
  lotId: number,
  quantities: number[],
): MortalityRecord[] =>
  quantities.map((quantity, index) => ({
    id: lotId * 100 + index,
    date: index === 0 ? "12/03/2026" : "08/03/2026",
    quantity,
    sex: index % 2 === 0 ? "Macho" : "Hembra",
    cause: index % 2 === 0 ? "Aplastamiento" : "Bajo consumo",
    responsible: index % 2 === 0 ? "Carlos Ríos" : "Andrés Mejía",
  }))

const makeAnimalMovement = (
  id: number,
  date: string,
  party: string,
  females: number,
  males: number,
  totalWeight: number,
  purchase = false,
): LotMovement => ({
  id,
  date,
  party,
  females,
  males,
  totalWeight,
  purchaseType: purchase ? "Animales" : undefined,
  concept: purchase ? "Compra de animales" : undefined,
  value: totalWeight * 8500,
})

const initialLots: Lot[] = [
  {
    id: 101,
    farmId: 1,
    cycle: "Precebo",
    code: "PR-2026-11",
    status: "Activo",
    day: 24,
    females: 62,
    males: 58,
    initialAnimals: 120,
    averageWeight: 18.4,
    mortalityGoal: 2.5,
    gpd: 468,
    mortalityRecords: makeMortalityRecords(101, [1, 1]),
    purchaseRecords: [],
    saleRecords: [],
  },
  {
    id: 102,
    farmId: 1,
    cycle: "Precebo",
    code: "PC-2025-017",
    status: "Activo",
    day: 38,
    females: 55,
    males: 57,
    initialAnimals: 112,
    averageWeight: 27.8,
    mortalityGoal: 2.5,
    gpd: 492,
    mortalityRecords: makeMortalityRecords(102, [1, 2]),
    purchaseRecords: [],
    saleRecords: [],
  },
  {
    id: 103,
    farmId: 1,
    cycle: "Precebo",
    code: "PC-2025-015",
    status: "Finalizado",
    day: 49,
    females: 60,
    males: 60,
    initialAnimals: 120,
    averageWeight: 32.6,
    mortalityGoal: 2.5,
    gpd: 505,
    mortalityRecords: makeMortalityRecords(103, [1, 2]),
    purchaseRecords: [],
    saleRecords: [
      makeAnimalMovement(
        10301,
        "14/03/2026",
        "Comercializadora del Norte",
        58,
        59,
        3814.2,
      ),
    ],
  },
  {
    id: 201,
    farmId: 1,
    cycle: "Levante",
    code: "LV-2026-08",
    status: "Activo",
    day: 31,
    females: 48,
    males: 51,
    initialAnimals: 100,
    averageWeight: 54.8,
    mortalityGoal: 2,
    gpd: 714,
    mortalityRecords: makeMortalityRecords(201, [1]),
    purchaseRecords: [],
    saleRecords: [],
  },
  {
    id: 202,
    farmId: 1,
    cycle: "Levante",
    code: "LV-2025-009",
    status: "Activo",
    day: 58,
    females: 57,
    males: 59,
    initialAnimals: 118,
    averageWeight: 78.3,
    mortalityGoal: 2,
    gpd: 758,
    mortalityRecords: makeMortalityRecords(202, [1, 1]),
    purchaseRecords: [],
    saleRecords: [],
  },
  {
    id: 203,
    farmId: 1,
    cycle: "Levante",
    code: "LV-2025-004",
    status: "Finalizado",
    day: 92,
    females: 52,
    males: 54,
    initialAnimals: 108,
    averageWeight: 112.4,
    mortalityGoal: 2,
    gpd: 801,
    mortalityRecords: makeMortalityRecords(203, [1, 1]),
    purchaseRecords: [],
    saleRecords: [
      makeAnimalMovement(
        20301,
        "15/03/2026",
        "Porcícola Antioquia",
        51,
        55,
        11914.4,
      ),
    ],
  },
  {
    id: 301,
    farmId: 2,
    cycle: "Precebo",
    code: "PV-PC-06",
    status: "Activo",
    day: 19,
    females: 42,
    males: 44,
    initialAnimals: 86,
    averageWeight: 16.2,
    mortalityGoal: 2.5,
    gpd: 452,
    mortalityRecords: makeMortalityRecords(301, [1]),
    purchaseRecords: [],
    saleRecords: [],
  },
  {
    id: 401,
    farmId: 3,
    cycle: "Levante",
    code: "SJ-LV-12",
    status: "Activo",
    day: 47,
    females: 51,
    males: 49,
    initialAnimals: 100,
    averageWeight: 69.5,
    mortalityGoal: 2,
    gpd: 731,
    mortalityRecords: makeMortalityRecords(401, [1, 2]),
    purchaseRecords: [],
    saleRecords: [],
  },
]

type NavigationItem = {
  label: string
  icon: IconName
}

const navigation: NavigationItem[] = [
  { label: "Inicio", icon: "home" },
  { label: "Resumen", icon: "chart" },
  { label: "Plantel reproductivo", icon: "sow" },
  { label: "Reproductor", icon: "boar" },
  { label: "Precebo", icon: "piglet" },
  { label: "Levante", icon: "growth" },
  { label: "Inventario", icon: "box" },
  { label: "PorciTabla", icon: "table" },
  { label: "Tableros", icon: "chart" },
  { label: "Calendario", icon: "calendar" },
  { label: "Configuración", icon: "settings" },
]

const toolItems: NavigationItem[] = [
  { label: "Inventario", icon: "box" },
  { label: "PorciTabla", icon: "table" },
  { label: "Tableros", icon: "chart" },
  { label: "Reportes", icon: "document" },
  { label: "Calendario", icon: "calendar" },
]

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand">
      <img className="brand-logo" src={porcitrackLogo} alt="" />
      {!compact && (
        <strong className="brand-wordmark">
          <span>Porci</span>
          <span>Track</span>
        </strong>
      )}
    </div>
  )
}

function Sidebar({
  farms,
  selectedFarm,
  farmContext,
  accountOpen,
  setAccountOpen,
  active,
  onNavigate,
  onSelectFarm,
  onLogout,
  alertCounts,
  collapsed,
  setCollapsed,
  onInvite,
}: {
  farms: Farm[]
  selectedFarm: Farm
  farmContext: boolean
  accountOpen: boolean
  setAccountOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
  onSelectFarm: (farm: Farm) => void
  onLogout: () => void
  alertCounts: Record<string, number>
  collapsed: boolean
  setCollapsed: (value: boolean) => void
  onInvite: () => void
}) {
  const [farmMenuOpen, setFarmMenuOpen] = useState(false)
  const accountRef = useDismissibleMenu(accountOpen, () =>
    setAccountOpen(false),
  )
  const cycles = cycleOrder
    .filter((cycle) => selectedFarm.cycles.includes(cycle))
    .map(
      (cycle) =>
        navigation.find((item) => item.label === cycle) as NavigationItem,
    )
  const openFromAccount = (action: () => void) => {
    setAccountOpen(false)
    action()
  }
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="brand-button"
        aria-label="Ir a Inicio"
        onClick={() => {
          setFarmMenuOpen(false)
          onNavigate("Inicio")
        }}
        title={collapsed ? "PorciTrack" : undefined}
      >
        <Logo compact={collapsed} />
      </button>
      <div className="sidebar-scroll">
        {farmContext && (
          <button
            className="all-farms-link"
            onClick={() => {
              setFarmMenuOpen(false)
              onNavigate("Inicio")
            }}
          >
            <Icon name="arrow" size={20} />
            <span>Todas las granjas</span>
          </button>
        )}
        <div className="farm-selector-wrap">
          <button
            className={`farm-selector ${farmContext ? "compact" : "choose"}`}
            onClick={() => {
              if (collapsed) setCollapsed(false)
              else if (farms.length > 1) setFarmMenuOpen(!farmMenuOpen)
            }}
            aria-expanded={farmMenuOpen}
            title={collapsed ? "Elegir granja" : undefined}
          >
            <span className="farm-selector-icon">
              <Icon name="building" size={20} />
            </span>
            <span className="farm-selector-copy">
              <small className="farm-selector-label">Granja</small>
              <strong title={farmContext ? selectedFarm.name : undefined}>
                {farmContext ? selectedFarm.name : "Elige una granja"}
              </strong>
              {farmContext && <small>{selectedFarm.municipality}</small>}
            </span>
            {farms.length > 1 && <Icon name="chevron" size={16} />}
          </button>
          {farmMenuOpen && (
            <div className="farm-switcher-menu">
              {farms.map((farm) => (
                <button
                  className={
                    farmContext && farm.id === selectedFarm.id ? "selected" : ""
                  }
                  key={farm.id}
                  onClick={() => {
                    onSelectFarm(farm)
                    setFarmMenuOpen(false)
                  }}
                >
                  <span>
                    <strong>{farm.name}</strong>
                    <small>{farm.municipality}</small>
                  </span>
                  {farmContext && farm.id === selectedFarm.id && (
                    <Icon name="check" size={16} />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="sidebar-divider" />
        {!farmContext ? (
          <nav className="context-navigation" aria-label="Navegación principal">
            <div className="sidebar-nav-group">
              <span className="sidebar-group-label">General</span>
              <button
                className={`nav-item ${active === "Inicio" ? "active" : ""}`}
                onClick={() => onNavigate("Inicio")}
                title={collapsed ? "Inicio" : undefined}
              >
                <Icon name="home" size={20} />
                <span>Inicio</span>
              </button>
            </div>
          </nav>
        ) : (
          <nav className="context-navigation" aria-label="Navegación principal">
            <div className="sidebar-nav-group">
              <span className="sidebar-group-label">Granja</span>
              <button
                className={`nav-item ${active === "Resumen" ? "active" : ""}`}
                onClick={() => onNavigate("Resumen")}
                title={collapsed ? "Resumen" : undefined}
              >
                <Icon name="chart" size={20} />
                <span>Resumen</span>
              </button>
            </div>
            <div className="sidebar-nav-group">
              <span className="sidebar-group-label">Ciclos</span>
              {cycles.map((item) => (
                <button
                  className={`nav-item ${
                    item.label === active ? "active" : ""
                  }`}
                  key={item.label}
                  onClick={() => onNavigate(item.label)}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                  {(alertCounts[item.label] ?? 0) > 0 && (
                    <b className="nav-alert-count">{alertCounts[item.label]}</b>
                  )}
                </button>
              ))}
            </div>
            <div className="sidebar-nav-group">
              <span className="sidebar-group-label">Herramientas</span>
              {toolItems.map((item) => (
                <button
                  className={`nav-item ${
                    item.label === active ? "active" : ""
                  }`}
                  key={item.label}
                  onClick={() => onNavigate(item.label)}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                  {(alertCounts[item.label] ?? 0) > 0 && (
                    <b className="nav-alert-count">{alertCounts[item.label]}</b>
                  )}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-icons">
          <div className="account-wrap" ref={accountRef}>
            {accountOpen && (
              <div className="account-menu">
                <div className="account-menu-profile">
                  <span className="avatar">AM</span>
                  <div>
                    <strong>Andrés Mejía</strong>
                    <small>andres.mejia@granja.co</small>
                    <small>Rol: Operario de granja</small>
                  </div>
                </div>
                <div className="menu-divider" />
                <button
                  className={active === "Historial" ? "active" : ""}
                  onClick={() => openFromAccount(() => onNavigate("Historial"))}
                >
                  <Icon name="clipboard" size={18} /> Historial
                </button>
                <button
                  className={active === "Configuración" ? "active" : ""}
                  onClick={() =>
                    openFromAccount(() => onNavigate("Configuración"))
                  }
                >
                  <Icon name="settings" size={18} /> Configuración
                </button>
                <button onClick={() => openFromAccount(onInvite)}>
                  <Icon name="userPlus" size={18} /> Invitar usuario
                </button>
                <div className="menu-divider" />
                <button onClick={() => openFromAccount(onLogout)}>
                  <Icon name="logout" size={18} /> Cerrar sesión
                </button>
              </div>
            )}
            <button
              className={`account ${
                active === "Historial" || active === "Configuración"
                  ? "active"
                  : ""
              }`}
              onClick={() => setAccountOpen(!accountOpen)}
              aria-expanded={accountOpen}
              aria-label="Abrir menú de cuenta"
              title="Cuenta"
            >
              <span className="avatar">AM</span>
            </button>
          </div>
          <button
            className="sidebar-footer-button"
            onClick={() => onNavigate("Inicio")}
            aria-label="Inicio"
            title="Inicio"
          >
            <Icon name="home" size={21} />
          </button>
          <button
            className="sidebar-footer-button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
            title={collapsed ? "Expandir menú" : "Contraer menú"}
          >
            <Icon name={collapsed ? "menu" : "chevron"} size={21} />
          </button>
        </div>
      </div>
    </aside>
  )
}

function MobileNavigation({
  farms,
  selectedFarm,
  farmContext,
  open,
  setOpen,
  active,
  onNavigate,
  onSelectFarm,
  onLogout,
  alertCounts,
  onInvite,
}: {
  farms: Farm[]
  selectedFarm: Farm
  farmContext: boolean
  open: boolean
  setOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
  onSelectFarm: (farm: Farm) => void
  onLogout: () => void
  alertCounts: Record<string, number>
  onInvite: () => void
}) {
  const [farmMenuOpen, setFarmMenuOpen] = useState(false)
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false)
  const cycles = cycleOrder
    .filter((cycle) => selectedFarm.cycles.includes(cycle))
    .map(
      (cycle) =>
        navigation.find((item) => item.label === cycle) as NavigationItem,
    )
  const summaryItem = navigation.find(
    (item) => item.label === "Resumen",
  ) as NavigationItem
  const mobileItems = (
    farmContext ? [summaryItem, ...cycles, ...toolItems] : [navigation[0]]
  ).slice(0, 4)
  const closeDrawer = () => {
    setMobileAccountOpen(false)
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-top">
        <button
          className="brand-button"
          aria-label="Ir a Inicio"
          onClick={() => {
            onNavigate("Inicio")
            setOpen(false)
          }}
        >
          <Logo />
        </button>
        <button
          className="icon-button menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
      {open && (
        <div className="mobile-drawer">
          <button
            className={`mobile-all-farms ${
              active === "Inicio" ? "active" : ""
            }`}
            onClick={() => {
              onNavigate("Inicio")
              closeDrawer()
            }}
          >
            <Icon name="home" size={18} />
            Todas las granjas
          </button>
          <div className="mobile-farm-block">
            <button
              className={`farm-selector ${farmContext ? "" : "choose"}`}
              onClick={() => farms.length > 1 && setFarmMenuOpen(!farmMenuOpen)}
              aria-expanded={farmMenuOpen}
            >
              <span className="farm-selector-icon">
                <Icon name="building" size={20} />
              </span>
              <span className="farm-selector-copy">
                <small className="farm-selector-label">Granja</small>
                <strong>
                  {farmContext ? selectedFarm.name : "Elige una granja"}
                </strong>
                {farmContext && <small>{selectedFarm.municipality}</small>}
              </span>
              {farms.length > 1 && <Icon name="chevron" size={16} />}
            </button>
            {farmMenuOpen && (
              <div className="mobile-farm-list">
                {farms.map((farm) => (
                  <button
                    key={farm.id}
                    onClick={() => {
                      onSelectFarm(farm)
                      setFarmMenuOpen(false)
                      closeDrawer()
                    }}
                  >
                    <span>
                      <strong>{farm.name}</strong>
                      <small>{farm.municipality}</small>
                    </span>
                    {farmContext && farm.id === selectedFarm.id && (
                      <Icon name="check" size={16} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          {farmContext && (
            <nav aria-label="Menú móvil">
              <span className="sidebar-group-label">Granja</span>
              <button
                className={active === "Resumen" ? "active" : ""}
                onClick={() => {
                  onNavigate("Resumen")
                  closeDrawer()
                }}
              >
                <Icon name="chart" size={19} />
                Resumen
              </button>
              <span className="sidebar-group-label">Ciclos</span>
              {cycles.map((item) => (
                <button
                  className={item.label === active ? "active" : ""}
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.label)
                    closeDrawer()
                  }}
                >
                  <Icon name={item.icon} size={19} />
                  {item.label}
                  {(alertCounts[item.label] ?? 0) > 0 && (
                    <b className="nav-alert-count">{alertCounts[item.label]}</b>
                  )}
                </button>
              ))}
              <span className="sidebar-group-label">Herramientas</span>
              {toolItems.map((item) => (
                <button
                  className={item.label === active ? "active" : ""}
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.label)
                    closeDrawer()
                  }}
                >
                  <Icon name={item.icon} size={19} />
                  {item.label}
                  {(alertCounts[item.label] ?? 0) > 0 && (
                    <b className="nav-alert-count">{alertCounts[item.label]}</b>
                  )}
                </button>
              ))}
            </nav>
          )}
          <button
            className="mobile-user"
            onClick={() => setMobileAccountOpen(!mobileAccountOpen)}
            aria-expanded={mobileAccountOpen}
          >
            <span className="avatar">AM</span>
            <span>
              <strong>Andrés Mejía</strong>
              <small>Operario de granja</small>
            </span>
          </button>
          {mobileAccountOpen && (
            <div className="mobile-account-menu">
              <small>andres.mejia@granja.co</small>
              <div className="menu-divider" />
              <button
                className={active === "Historial" ? "active" : ""}
                onClick={() => {
                  onNavigate("Historial")
                  closeDrawer()
                }}
              >
                <Icon name="clipboard" size={18} />
                Historial
              </button>
              <button
                className={active === "Configuración" ? "active" : ""}
                onClick={() => {
                  onNavigate("Configuración")
                  closeDrawer()
                }}
              >
                <Icon name="settings" size={18} />
                Configuración
              </button>
              <button
                onClick={() => {
                  onInvite()
                  closeDrawer()
                }}
              >
                <Icon name="userPlus" size={18} />
                Invitar usuario
              </button>
              <div className="menu-divider" />
              <button
                onClick={() => {
                  closeDrawer()
                  onLogout()
                }}
              >
                <Icon name="logout" size={18} />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      )}
      <nav className="bottom-nav" aria-label="Navegación móvil">
        {mobileItems.map((item) => (
          <button
            className={item.label === active ? "active" : ""}
            key={item.label}
            onClick={() => onNavigate(item.label)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </button>
        ))}
        <button onClick={() => setOpen(true)}>
          <Icon name="menu" size={20} />
          <span>Más</span>
        </button>
      </nav>
    </>
  )
}

type HeaderProps = {
  page: "home" | "cycle"
  cycle: ProductionCycle
  farmName: string
  farmQuery: string
  onAdd: () => void
  onConsolidated: () => void
  onCreateLot: () => void
  onFarmQueryChange: (query: string) => void
  onVoice: () => void
}

function Header({
  page,
  cycle,
  farmName,
  farmQuery,
  onAdd,
  onConsolidated,
  onCreateLot,
  onFarmQueryChange,
  onVoice,
}: HeaderProps) {
  return (
    <header
      className={`page-header ${page === "home" ? "home-page-header" : ""}`}
    >
      <div className="page-header-copy">
        <div className="breadcrumbs">
          <span>Inicio</span>
          {page === "cycle" && (
            <>
              <Icon name="chevron" size={14} />
              <span>{farmName}</span>
              <Icon name="chevron" size={14} />
              <strong>{cycle}</strong>
            </>
          )}
        </div>
        <h1>{page === "home" ? "Inicio" : `${cycle} · ${farmName}`}</h1>
        {page === "home" && <p>Resumen de tus granjas y operaciones</p>}
      </div>
      {page === "home" && (
        <label className="search-field home-farm-search">
          <Icon name="search" size={18} />
          <input
            type="search"
            value={farmQuery}
            onChange={(event) => onFarmQueryChange(event.target.value)}
            placeholder="Buscar granja por nombre"
            aria-label="Buscar granja por nombre"
          />
        </label>
      )}
      {page === "home" && (
        <div className="header-actions home-header-actions">
          <button className="button secondary voice" onClick={onVoice}>
            <Icon name="mic" size={19} />
            Registro por voz
          </button>
          <button className="button secondary" onClick={onConsolidated}>
            <Icon name="chart" size={19} />
            Ver tableros consolidados
          </button>
          <button className="button primary" onClick={onAdd}>
            <Icon name="plus" size={19} />
            Agregar granja
          </button>
        </div>
      )}
      {page === "cycle" && (
        <div className="header-actions">
          <button className="button primary" onClick={onCreateLot}>
            <Icon name="plus" size={19} />
            Crear lote
          </button>
        </div>
      )}
    </header>
  )
}

function VoiceRegistrationModal({
  onClose,
  onStart,
}: {
  onClose: () => void
  onStart: () => void
}) {
  return (
    <DialogShell title="Registro por voz" onClose={onClose}>
      <div className="voice-modal-content">
        <span className="voice-modal-icon">
          <Icon name="mic" size={27} />
        </span>
        <h3>Cuéntanos qué pasó en la granja</h3>
        <p>
          Puedes registrar movimientos, mortalidad, pesos, tratamientos, compras
          y ventas usando una frase completa.
        </p>
        <div className="voice-examples">
          <span>Ejemplos</span>
          <q>Registrar 2 bajas en el lote DP-202604</q>
          <q>Aplicar vacuna de Circovirus a la cerda #1305</q>
          <q>Registrar compra de 420,5 kg de concentrado</q>
        </div>
        <div className="voice-tip">
          <Icon name="info" size={17} />
          Incluye el número del animal o el código del lote cuando aplique.
        </div>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cerrar
        </button>
        <button className="button primary" onClick={onStart}>
          <Icon name="mic" size={18} />
          Comenzar a hablar
        </button>
      </div>
    </DialogShell>
  )
}

function StatusBadge({
  alerts,
  open,
  onClick,
}: {
  alerts: number
  open?: boolean
  onClick?: () => void
}) {
  return alerts > 0 ? (
    <button
      className="status warning farm-alert-button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={`${alerts} ${alerts === 1 ? "alerta" : "alertas"}`}
    >
      <Icon name="alert" size={14} />
      {alerts} {alerts === 1 ? "alerta" : "alertas"}
    </button>
  ) : (
    <span className="status positive">
      <Icon name="check" size={14} />
      Al día
    </span>
  )
}

function FarmCard({
  farm,
  alerts,
  favorite,
  onEdit,
  onFavorite,
  onSummary,
  onCycle,
  onTool,
  onResolveAlert,
}: {
  farm: Farm
  alerts: HomeFarmAlert[]
  favorite: boolean
  onEdit: () => void
  onFavorite: () => void
  onSummary: () => void
  onCycle: (cycle: Cycle) => void
  onTool: (tool: string) => void
  onResolveAlert: (module: string) => void
}) {
  const [alertsOpen, setAlertsOpen] = useState(false)
  const alertWrapRef = useDismissibleMenu(alertsOpen, () =>
    setAlertsOpen(false),
  )
  const cardCycles = cycleOrder.filter((cycle) => farm.cycles.includes(cycle))
  return (
    <article
      className={`farm-card clickable ${alertsOpen ? "alerts-open" : ""}`}
      onClick={(event) => {
        if ((event.target as Element).closest("button, .alerts-popover")) return
        onSummary()
      }}
    >
      <div className="farm-heading">
        <div>
          <div className="farm-name-line">
            <h2>{farm.name}</h2>
            <button
              className="edit-button"
              onClick={onEdit}
              aria-label={`Editar ${farm.name}`}
            >
              <Icon name="edit" size={17} />
            </button>
          </div>
          <p>
            <Icon name="pin" size={15} />
            {farm.municipality}
          </p>
          <button className="farm-summary-link" onClick={onSummary}>
            Ver resumen
            <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="farm-heading-actions">
          <button
            className={`favorite-button ${favorite ? "active" : ""}`}
            onClick={onFavorite}
            aria-pressed={favorite}
            aria-label={
              favorite
                ? `Quitar ${farm.name} de favoritos`
                : `Marcar ${farm.name} como favorita`
            }
            title={favorite ? "Quitar de favoritos" : "Marcar como favorita"}
          >
            <Icon name="star" size={19} />
          </button>
          <div className="farm-alert-wrap" ref={alertWrapRef}>
            <StatusBadge
              alerts={alerts.length}
              open={alertsOpen}
              onClick={() => setAlertsOpen(!alertsOpen)}
            />
            {alertsOpen && (
              <div className="alerts-popover farm-alerts-popover">
                <div className="popover-heading">
                  <strong>Alertas</strong>
                  <span>Ordenadas por urgencia</span>
                </div>
                {alerts
                  .slice()
                  .sort((a, b) => a.urgency - b.urgency)
                  .map((alert) => (
                    <div className="popover-alert" key={alert.id}>
                      <span className={`alert-dot urgency-${alert.urgency}`} />
                      <div>
                        <strong>{alert.title}</strong>
                        <p>{alert.detail}</p>
                        <button
                          onClick={() => {
                            setAlertsOpen(false)
                            onResolveAlert(alert.destination)
                          }}
                        >
                          Resolver ahora
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="farm-section cycles-section">
        <span className="section-label">Ciclos activos</span>
        <div className="cycle-list">
          {cardCycles.map((cycle) => (
            <button
              key={cycle}
              onClick={() => onCycle(cycle)}
              aria-label={`Abrir ${cycle}`}
            >
              <span className="cycle-icon">
                <Icon name={homeCycleIcons[cycle]} size={12} strokeWidth={2} />
              </span>
              <span className="cycle-label">{cycle}</span>
              <span className="cycle-arrow" aria-hidden="true">
                <Icon name="arrow" size={10} strokeWidth={2.2} />
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="farm-section tools-section">
        <div className="tool-list">
          {toolItems.map((item) => (
            <button key={item.label} onClick={() => onTool(item.label)}>
              <Icon name={item.icon} size={22} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="empty-state">
      <div className="empty-art" aria-hidden="true">
        <svg viewBox="0 0 180 120" fill="none">
          <path
            d="M25 94h130"
            stroke="#D8D0C8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M45 93V54l45-25 45 25v39"
            fill="#F9E4D7"
            stroke="#243119"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M75 93V68h30v25M90 29V16h22v25"
            stroke="#243119"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M49 45c-12-3-22 3-25 16 11 1 20-3 25-12" fill="#629460" />
          <path
            d="M48 47c-4 7-5 14-4 22"
            stroke="#243119"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="133" cy="29" r="9" fill="#DCE8D9" />
        </svg>
      </div>
      <h2>Aún no tienes granjas</h2>
      <p>
        Agrega tu primera granja para comenzar a gestionar los ciclos y
        animales.
      </p>
      <button className="button primary" onClick={onAdd}>
        <Icon name="plus" size={19} />
        Agregar granja
      </button>
    </div>
  )
}

type FarmDraft = {
  name: string
  municipality: string
  cycles: Cycle[]
}

function CycleSelector({
  selected,
  onChange,
}: {
  selected: Cycle[]
  onChange: (cycles: Cycle[]) => void
}) {
  const toggle = (cycle: Cycle) =>
    onChange(
      selected.includes(cycle)
        ? selected.filter((item) => item !== cycle)
        : [...selected, cycle],
    )
  return (
    <fieldset className="cycle-selector">
      <legend>Ciclos de producción</legend>
      <p>Selecciona uno o varios ciclos para esta granja.</p>
      <div>
        {cycleOrder.map((cycle) => (
          <label key={cycle}>
            <input
              type="checkbox"
              checked={selected.includes(cycle)}
              onChange={() => toggle(cycle)}
            />
            <span className="custom-checkbox">
              {selected.includes(cycle) && (
                <Icon name="check" size={15} strokeWidth={2.5} />
              )}
            </span>
            <span>{cycle}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function DialogShell({
  title,
  children,
  onClose,
  size = "normal",
}: {
  title: ReactNode
  children: ReactNode
  onClose: () => void
  size?: "normal" | "small" | "wide" | "full"
}) {
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className={`modal ${
          size === "small"
            ? "small"
            : size === "wide"
              ? "wide"
              : size === "full"
                ? "full"
                : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-heading">
          <h2 id="modal-title">{title}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar">
            <Icon name="x" size={20} />
          </button>
        </div>
        {children}
      </section>
    </div>
  )
}

function DiscardChangesDialog({
  onDiscard,
  onKeepEditing,
}: {
  onDiscard: () => void
  onKeepEditing: () => void
}) {
  return (
    <DialogShell
      title="¿Salir sin guardar?"
      onClose={onKeepEditing}
      size="small"
    >
      <div className="confirm-content">
        <p>Perderás lo que escribiste.</p>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onDiscard}>
          Salir sin guardar
        </button>
        <button className="button primary" onClick={onKeepEditing}>
          Seguir editando
        </button>
      </div>
    </DialogShell>
  )
}

function FarmModal({
  farm,
  onClose,
  onSave,
  onDelete,
}: {
  farm?: Farm
  onClose: () => void
  onSave: (draft: FarmDraft) => void
  onDelete: (farm: Farm) => void
}) {
  const [draft, setDraft] = useState<FarmDraft>({
    name: farm?.name ?? "",
    municipality: farm?.municipality ?? "",
    cycles: farm?.cycles ?? [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = farm
    ? draft.name !== farm.name ||
      draft.municipality !== farm.municipality ||
      draft.cycles.join("|") !== farm.cycles.join("|")
    : Boolean(draft.name || draft.municipality || draft.cycles.length)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!draft.name.trim()) return
    onSave({
      ...draft,
      name: draft.name.trim(),
      municipality: draft.municipality.trim(),
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={farm ? "Editar granja" : "Agregar granja"}
      onClose={attemptClose}
    >
      <form onSubmit={submit}>
        <div className="form-content">
          <label
            className={`field ${
              submitted && !draft.name.trim() ? "has-error" : ""
            }`}
          >
            <span>
              Nombre de la granja <em>* obligatorio</em>
            </span>
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="Ej. Granja La Primavera"
              aria-invalid={submitted && !draft.name.trim()}
            />
            {submitted && !draft.name.trim() && (
              <small>
                <Icon name="alert" size={14} />
                Escribe el nombre de la granja
              </small>
            )}
          </label>
          <label className="field">
            <span>Municipio</span>
            <input
              value={draft.municipality}
              onChange={(e) =>
                setDraft({ ...draft, municipality: e.target.value })
              }
              placeholder="Ej. Santa Rosa de Osos"
            />
          </label>
          <CycleSelector
            selected={draft.cycles}
            onChange={(cycles) => setDraft({ ...draft, cycles })}
          />
          {farm && (
            <div className="danger-zone">
              <div>
                <h3>Zona de peligro</h3>
                <p>Esta acción elimina la granja y todos sus registros.</p>
              </div>
              <button
                type="button"
                className="button danger-outline"
                onClick={() => onDelete(farm)}
              >
                <Icon name="trash" size={18} />
                Eliminar granja
              </button>
            </div>
          )}
        </div>
        <div className="modal-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            {farm ? "Guardar cambios" : "Guardar granja"}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function DeleteDialog({
  farm,
  onClose,
  onConfirm,
}: {
  farm: Farm
  onClose: () => void
  onConfirm: () => void
}) {
  const [value, setValue] = useState("")
  const enabled = value === farm.name
  return (
    <DialogShell title="Eliminar granja" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se eliminarán permanentemente la granja, sus ciclos, lotes, animales y
          registros asociados. Esta acción no se puede deshacer.
        </p>
        <label className="field">
          <span>
            Escribe <strong>{farm.name}</strong> para confirmar
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={farm.name}
          />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button danger"
          disabled={!enabled}
          onClick={onConfirm}
        >
          Eliminar definitivamente
        </button>
      </div>
    </DialogShell>
  )
}

const countLabel = (count: number, singular: string, plural: string) =>
  `${count} ${count === 1 ? singular : plural}`

const formatDecimal = (value: number, decimals = 1) =>
  value.toLocaleString("es-CO", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

const TODAY_ISO = "2026-03-16"
const CONNECTED_USER = "Andrés Mejía"
// Tablet widths start with the icon-only sidebar so content keeps enough room.
const compactSidebarQuery = "(min-width: 761px) and (max-width: 900px)"

const focusFirstError = (form: HTMLFormElement) => {
  window.setTimeout(() => {
    const field = form.querySelector<HTMLElement>(
      ".has-error input, .has-error select, .has-error textarea, .has-error button",
    )
    field?.scrollIntoView({ behavior: "smooth", block: "center" })
    field?.focus()
  })
}

const parseColombianNumber = (value: string) => {
  const clean = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[^\d,.]/g, "")
  const hasComma = clean.includes(",")
  const dots = clean.match(/\./g)?.length ?? 0
  const decimalDigits =
    dots === 1 ? (clean.split(".")[1]?.replace(/\D/g, "").length ?? 0) : 0
  const normalized = hasComma
    ? clean.replace(/\./g, "").replace(",", ".")
    : dots === 1 && decimalDigits >= 1 && decimalDigits <= 2
      ? clean
      : clean.replace(/\./g, "")
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

const sanitizeColombianNumber = (value: string, integer = false) => {
  if (integer) return value.replace(/\D/g, "")
  const clean = value.replace(/[^\d,.]/g, "")
  const decimalSeparator = clean.lastIndexOf(",")
  if (decimalSeparator >= 0) {
    const whole = clean.slice(0, decimalSeparator).replace(/,/g, "")
    const decimal = clean.slice(decimalSeparator + 1).replace(/\D/g, "")
    return `${whole},${decimal.slice(0, 2)}`
  }
  return clean
}

function ColombianNumberInput({
  value,
  onChange,
  integer = false,
  placeholder,
  ariaInvalid,
}: {
  value: string
  onChange: (value: string) => void
  integer?: boolean
  placeholder?: string
  ariaInvalid?: boolean
}) {
  return (
    <input
      inputMode={integer ? "numeric" : "decimal"}
      value={value}
      onChange={(event) =>
        onChange(sanitizeColombianNumber(event.target.value, integer))
      }
      onBlur={() => {
        if (!value) return
        const parsed = parseColombianNumber(value)
        onChange(
          integer
            ? Math.max(0, Math.trunc(parsed)).toLocaleString("es-CO", {
                maximumFractionDigits: 0,
              })
            : parsed.toLocaleString("es-CO", {
                maximumFractionDigits: 2,
              }),
        )
      }}
      placeholder={placeholder}
      aria-invalid={ariaInvalid}
    />
  )
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

const toIsoDate = (value: string) => {
  const [day, month, year] = value.split("/")
  return year && month && day ? `${year}-${month}-${day}` : value
}

function RecordActionsMenu({
  onEdit,
  onAnnul,
}: {
  onEdit: () => void
  onAnnul: () => void
}) {
  return (
    <div className="lot-menu record-menu">
      <button onClick={onEdit}>
        <Icon name="edit" size={16} />
        Editar
      </button>
      <button className="delete-item" onClick={onAnnul}>
        <Icon name="x" size={16} />
        Anular
      </button>
    </div>
  )
}

function AnnulRecordDialog({
  onClose,
  onConfirm,
}: {
  onClose: () => void
  onConfirm: (reason: string) => void
}) {
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)
  return (
    <DialogShell title="Anular registro" onClose={onClose} size="small">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (!reason.trim()) {
            focusFirstError(event.currentTarget)
            return
          }
          onConfirm(reason.trim())
        }}
      >
        <div className="form-content compact-form">
          <label
            className={`field ${
              submitted && !reason.trim() ? "has-error" : ""
            }`}
          >
            <span>
              Motivo de anulación <em>* obligatorio</em>
            </span>
            <textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder="Explica por qué se anula este registro"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button danger-outline">Anular registro</button>
        </div>
      </form>
    </DialogShell>
  )
}

function DatePicker({
  value,
  onChange,
  min,
  max,
  label = "Seleccionar fecha",
}: {
  value: string
  onChange: (value: string) => void
  min?: string
  max?: string
  label?: string
}) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const selectedDate = value ? new Date(`${value}T12:00:00`) : null
  const [open, setOpen] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState({
    top: 0,
    left: 0,
    width: 286,
  })
  const [visibleMonth, setVisibleMonth] = useState(
    () => selectedDate ?? new Date(2026, 2, 1, 12),
  )
  useEffect(() => {
    const closeOtherPicker = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== label) setOpen(false)
    }
    window.addEventListener("porci-date-picker-open", closeOtherPicker)
    return () =>
      window.removeEventListener("porci-date-picker-open", closeOtherPicker)
  }, [label])
  useLayoutEffect(() => {
    if (!open) return

    const positionPopover = () => {
      const trigger = triggerRef.current
      if (!trigger) return

      const viewportMargin = 12
      const gap = 6
      const rect = trigger.getBoundingClientRect()
      const width = Math.min(286, window.innerWidth - viewportMargin * 2)
      const height = popoverRef.current?.getBoundingClientRect().height ?? 330
      const left = Math.min(
        Math.max(rect.left, viewportMargin),
        window.innerWidth - width - viewportMargin,
      )
      const fitsBelow =
        window.innerHeight - rect.bottom >= height + gap + viewportMargin
      const top = fitsBelow
        ? rect.bottom + gap
        : Math.max(viewportMargin, rect.top - height - gap)

      setPopoverPosition({ top, left, width })
    }

    positionPopover()
    const animationFrame = window.requestAnimationFrame(positionPopover)
    const settledTimer = window.setTimeout(positionPopover, 250)
    window.addEventListener("resize", positionPopover)
    window.addEventListener("scroll", positionPopover, true)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(settledTimer)
      window.removeEventListener("resize", positionPopover)
      window.removeEventListener("scroll", positionPopover, true)
    }
  }, [open, visibleMonth])
  const year = visibleMonth.getFullYear()
  const month = visibleMonth.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const toIso = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0",
    )}`
  return (
    <div className="date-picker">
      <button
        ref={triggerRef}
        type="button"
        className={`date-picker-trigger ${value ? "" : "placeholder"}`}
        onClick={() => {
          if (!open) {
            window.dispatchEvent(
              new CustomEvent("porci-date-picker-open", { detail: label }),
            )
          }
          setOpen(!open)
        }}
        aria-label={label}
        aria-expanded={open}
      >
        <span>{selectedDate ? formatDate(selectedDate) : "dd/mm/aaaa"}</span>
        <Icon name="calendar" size={18} />
      </button>
      {open &&
        createPortal(
          <div
            className="date-picker-popover"
            ref={popoverRef}
            style={popoverPosition}
          >
            <div className="date-picker-heading">
              <button
                type="button"
                className="icon-button"
                aria-label="Mes anterior"
                onClick={() =>
                  setVisibleMonth(new Date(year, month - 1, 1, 12))
                }
              >
                <Icon name="chevron" size={17} />
              </button>
              <strong>
                {visibleMonth.toLocaleDateString("es-CO", {
                  month: "long",
                  year: "numeric",
                })}
              </strong>
              <button
                type="button"
                className="icon-button"
                aria-label="Mes siguiente"
                onClick={() =>
                  setVisibleMonth(new Date(year, month + 1, 1, 12))
                }
              >
                <Icon name="chevron" size={17} />
              </button>
            </div>
            <div className="date-picker-weekdays">
              {["D", "L", "M", "M", "J", "V", "S"].map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
            <div className="date-picker-grid">
              {Array.from({ length: firstWeekday }, (_, index) => (
                <span key={`empty-${index}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1
                const iso = toIso(day)
                const disabled = Boolean(
                  (min && iso < min) || (max && iso > max),
                )
                return (
                  <button
                    type="button"
                    className={`${value === iso ? "selected" : ""} ${
                      iso === TODAY_ISO ? "today" : ""
                    }`}
                    disabled={disabled}
                    onClick={() => {
                      onChange(iso)
                      setOpen(false)
                    }}
                    key={iso}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}

const calculateLotFigures = (lot: Lot) => {
  const initialAnimals = Math.max(0, lot.initialAnimals)
  const purchasedAnimals = lot.purchaseRecords
    .filter((record) => record.purchaseType === "Animales" && !record.annulled)
    .reduce((total, record) => total + record.females + record.males, 0)
  const enteredAnimals = initialAnimals + purchasedAnimals
  const soldAnimals = lot.saleRecords.reduce(
    (total, record) =>
      record.annulled ? total : total + record.females + record.males,
    0,
  )
  const mortalityAnimals = lot.mortalityRecords.reduce(
    (total, record) => (record.annulled ? total : total + record.quantity),
    0,
  )
  const transferredAnimals = (lot.transferRecords ?? [])
    .filter((record) => record.direction === "Salida")
    .reduce((total, record) => total + record.animals, 0)
  const transferredFemales = (lot.transferRecords ?? [])
    .filter((record) => record.direction === "Salida")
    .reduce((total, record) => total + record.females, 0)
  const transferredMales = (lot.transferRecords ?? [])
    .filter((record) => record.direction === "Salida")
    .reduce((total, record) => total + record.males, 0)
  const purchasedFemales = lot.purchaseRecords
    .filter((record) => record.purchaseType === "Animales" && !record.annulled)
    .reduce((total, record) => total + record.females, 0)
  const purchasedMales = lot.purchaseRecords
    .filter((record) => record.purchaseType === "Animales" && !record.annulled)
    .reduce((total, record) => total + record.males, 0)
  const soldFemales = lot.saleRecords
    .filter((record) => !record.annulled)
    .reduce((total, record) => total + record.females, 0)
  const soldMales = lot.saleRecords
    .filter((record) => !record.annulled)
    .reduce((total, record) => total + record.males, 0)
  const deadFemales = lot.mortalityRecords
    .filter((record) => !record.annulled && record.sex === "Hembra")
    .reduce((total, record) => total + record.quantity, 0)
  const deadMales = lot.mortalityRecords
    .filter((record) => !record.annulled && record.sex === "Macho")
    .reduce((total, record) => total + record.quantity, 0)
  const currentFemales = Math.max(
    0,
    lot.females +
      purchasedFemales -
      soldFemales -
      deadFemales -
      transferredFemales,
  )
  const currentMales = Math.max(
    0,
    lot.males + purchasedMales - soldMales - deadMales - transferredMales,
  )
  const currentAnimals = Math.max(
    0,
    enteredAnimals - mortalityAnimals - soldAnimals - transferredAnimals,
  )
  const day = Math.max(0, lot.day)
  const mortality =
    enteredAnimals > 0 ? (mortalityAnimals / enteredAnimals) * 100 : 0
  const mortalityTone =
    mortality > lot.mortalityGoal
      ? "high"
      : mortality >= lot.mortalityGoal * 0.8
        ? "near"
        : "ok"
  return {
    initialAnimals,
    enteredAnimals,
    currentAnimals,
    purchasedAnimals,
    soldAnimals,
    mortalityAnimals,
    transferredAnimals,
    currentFemales,
    currentMales,
    day,
    mortality,
    mortalityTone,
  }
}

function LotMenu({
  lot,
  onClose,
  onAction,
}: {
  lot: Lot
  onClose: () => void
  onAction: (action: "view" | "edit" | "finish" | "delete", lot: Lot) => void
}) {
  return (
    <div className="lot-menu" role="menu">
      <button onClick={() => onAction("view", lot)} role="menuitem">
        <Icon name="arrow" size={16} />
        Ver
      </button>
      <button onClick={() => onAction("edit", lot)} role="menuitem">
        <Icon name="edit" size={16} />
        Editar
      </button>
      {lot.status === "Activo" && (
        <button onClick={() => onAction("finish", lot)} role="menuitem">
          <Icon name="check" size={16} />
          Finalizar lote
        </button>
      )}
      <div className="menu-divider" />
      <button
        className="delete-item"
        onClick={() => onAction("delete", lot)}
        role="menuitem"
      >
        <Icon name="trash" size={16} />
        Eliminar lote
      </button>
      <button className="sr-only" onClick={onClose}>
        Cerrar menú
      </button>
    </div>
  )
}

function useDismissibleMenu(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) onClose()
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  return ref
}

function LotCard({
  lot,
  menuOpen,
  onMenu,
  onAction,
  onMigrate,
}: {
  lot: Lot
  menuOpen: boolean
  onMenu: () => void
  onAction: (action: "view" | "edit" | "finish" | "delete", lot: Lot) => void
  onMigrate: (lot: Lot) => void
}) {
  const metrics = calculateLotFigures(lot)
  const menuRef = useDismissibleMenu(menuOpen, onMenu)
  return (
    <article
      className="lot-card interactive"
      role="link"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return
        onAction("view", lot)
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") onAction("view", lot)
      }}
    >
      <div className="lot-card-top">
        <div>
          <span className="lot-label">Código del lote</span>
          <h3>{lot.code}</h3>
        </div>
        <div className="lot-card-actions" ref={menuRef}>
          <span
            className={`status ${
              lot.status === "Activo" ? "positive" : "neutral"
            }`}
          >
            <Icon
              name={lot.status === "Activo" ? "check" : "clock"}
              size={14}
            />
            {lot.status}
          </span>
          <button
            className="dots-button"
            onClick={onMenu}
            aria-label={`Opciones de ${lot.code}`}
            aria-expanded={menuOpen}
          >
            <Icon name="dots" size={20} />
          </button>
          {menuOpen && (
            <LotMenu lot={lot} onClose={onMenu} onAction={onAction} />
          )}
        </div>
      </div>
      <div className="lot-day">
        <Icon name="clock" size={15} />
        Día {metrics.day} del ciclo
      </div>
      <div className="lot-stats">
        <div>
          <span>Animales</span>
          <strong>
            {metrics.currentAnimals} / {metrics.enteredAnimals}{" "}
            <em>animales</em>
          </strong>
          <small>actuales / ingresados</small>
        </div>
        <div>
          <span>Peso promedio</span>
          <strong>{formatDecimal(lot.averageWeight)} kg</strong>
          <small>por animal</small>
        </div>
        <div className={`mortality-${metrics.mortalityTone}`}>
          <span>Mortalidad</span>
          <strong>
            {formatDecimal(metrics.mortality)} %{" "}
            <em>· meta {formatDecimal(lot.mortalityGoal)} %</em>
          </strong>
        </div>
      </div>
      {lot.cycle === "Precebo" && lot.status === "Activo" && (
        <button
          className="lot-card-link lot-card-migrate"
          onClick={(event) => {
            event.stopPropagation()
            onMigrate(lot)
          }}
        >
          Migrar a Levante
          <Icon name="arrow" size={16} />
        </button>
      )}
    </article>
  )
}

function LotsTable({
  lots,
  onOpenLot,
}: {
  lots: Lot[]
  onOpenLot: (lot: Lot) => void
}) {
  return (
    <div className="table-wrap lots-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Estado</th>
            <th>Día</th>
            <th>H / M</th>
            <th>Animales</th>
            <th>Peso prom. (kg)</th>
            <th>Ganancia (g/día)</th>
            <th>Mortalidad</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => {
            const metrics = calculateLotFigures(lot)
            return (
              <tr
                className="interactive-row"
                key={lot.id}
                tabIndex={0}
                onClick={() => onOpenLot(lot)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") onOpenLot(lot)
                }}
              >
                <td className="sticky-lot-code">
                  <strong>{lot.code}</strong>
                </td>
                <td>
                  <span
                    className={`status ${
                      lot.status === "Activo" ? "positive" : "neutral"
                    }`}
                  >
                    {lot.status}
                  </span>
                </td>
                <td>{countLabel(metrics.day, "día", "días")}</td>
                <td>
                  {metrics.currentFemales} / {metrics.currentMales}
                </td>
                <td>
                  {metrics.currentAnimals} / {metrics.enteredAnimals} animales
                </td>
                <td>{formatDecimal(lot.averageWeight)} kg</td>
                <td>{lot.gpd.toLocaleString("es-CO")}</td>
                <td
                  className={
                    metrics.mortalityTone === "high"
                      ? "mortality-high"
                      : metrics.mortalityTone === "near"
                        ? "mortality-near"
                        : "mortality-ok"
                  }
                >
                  {formatDecimal(metrics.mortality)} % · meta{" "}
                  {formatDecimal(lot.mortalityGoal)} %
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function LotsEmpty({
  cycle,
  onCreate,
}: {
  cycle: ProductionCycle
  onCreate: () => void
}) {
  return (
    <div className="lots-empty">
      <div className="empty-lot-art">
        <Icon name="piglet" size={38} />
      </div>
      <h2>Aún no hay lotes en {cycle}</h2>
      <p>
        Crea el primer lote para comenzar a registrar animales, pesos y
        mortalidad.
      </p>
      <button className="button primary" onClick={onCreate}>
        <Icon name="plus" size={18} />
        Crear lote
      </button>
    </div>
  )
}

function LotsList({
  cycle,
  lots,
  onCreate,
  onUpdate,
  onDelete,
  onNotice,
  onOpenLot,
  onMigrate,
}: {
  cycle: ProductionCycle
  lots: Lot[]
  onCreate: () => void
  onUpdate: (lot: Lot) => void
  onDelete: (lot: Lot) => void
  onNotice: (text: string) => void
  onOpenLot: (lot: Lot) => void
  onMigrate: (lot: Lot, draft: MigrationDraft) => void
}) {
  const [view, setView] = useState<"cards" | "table">("cards")
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editingLot, setEditingLot] = useState<Lot | null>(null)
  const [deletingLot, setDeletingLot] = useState<Lot | null>(null)
  const [finishingLot, setFinishingLot] = useState<Lot | null>(null)
  const [undoFinishedLot, setUndoFinishedLot] = useState<Lot | null>(null)
  const [migratingLot, setMigratingLot] = useState<Lot | null>(null)
  useEffect(() => {
    if (!undoFinishedLot) return
    const timer = window.setTimeout(() => setUndoFinishedLot(null), 5000)
    return () => window.clearTimeout(timer)
  }, [undoFinishedLot])
  const cycleLots = lots.filter((lot) => lot.cycle === cycle)
  const activeLots = cycleLots.filter((lot) => lot.status === "Activo")
  const finishedLots = cycleLots.filter((lot) => lot.status === "Finalizado")
  const action = (kind: "view" | "edit" | "finish" | "delete", lot: Lot) => {
    setMenuOpen(null)
    if (kind === "finish") {
      setFinishingLot(lot)
    } else if (kind === "delete") {
      setDeletingLot(lot)
    } else if (kind === "edit") {
      setEditingLot(lot)
    } else {
      onOpenLot(lot)
    }
  }
  if (!cycleLots.length) return <LotsEmpty cycle={cycle} onCreate={onCreate} />
  return (
    <>
      <div className="lots-content">
        <div className="list-toolbar">
          <p>
            <strong>{cycleLots.length}</strong>{" "}
            {cycleLots.length === 1 ? "lote registrado" : "lotes registrados"}{" "}
            en {cycle}
          </p>
          <div className="view-toggle" aria-label="Cambiar vista">
            <button
              className={view === "cards" ? "active" : ""}
              onClick={() => setView("cards")}
            >
              <Icon name="grid" size={17} />
              Tarjetas
            </button>
            <button
              className={view === "table" ? "active" : ""}
              onClick={() => setView("table")}
            >
              <Icon name="list" size={17} />
              Ver en tabla
            </button>
          </div>
        </div>
        {view === "table" ? (
          <LotsTable lots={cycleLots} onOpenLot={onOpenLot} />
        ) : (
          <>
            <section className="lot-section">
              <div className="lot-section-heading">
                <div>
                  <h2>
                    Lotes activos <span>· {activeLots.length}</span>
                  </h2>
                  <p>En seguimiento dentro del ciclo</p>
                </div>
              </div>
              <div className="lots-grid">
                {activeLots.map((lot) => (
                  <LotCard
                    key={lot.id}
                    lot={lot}
                    menuOpen={menuOpen === lot.id}
                    onMenu={() =>
                      setMenuOpen(menuOpen === lot.id ? null : lot.id)
                    }
                    onAction={action}
                    onMigrate={setMigratingLot}
                  />
                ))}
              </div>
            </section>
            <section className="lot-section finished-section">
              <div className="lot-section-heading">
                <div>
                  <h2>
                    Lotes finalizados <span>· {finishedLots.length}</span>
                  </h2>
                  <p>Historial de lotes cerrados</p>
                </div>
              </div>
              <div className="lots-grid">
                {finishedLots.map((lot) => (
                  <LotCard
                    key={lot.id}
                    lot={lot}
                    menuOpen={menuOpen === lot.id}
                    onMenu={() =>
                      setMenuOpen(menuOpen === lot.id ? null : lot.id)
                    }
                    onAction={action}
                    onMigrate={setMigratingLot}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
      {deletingLot && (
        <DeleteLotDialog
          lot={deletingLot}
          onClose={() => setDeletingLot(null)}
          onConfirm={() => {
            onDelete(deletingLot)
            setDeletingLot(null)
            onNotice("Lote eliminado")
          }}
        />
      )}
      {editingLot && (
        <CreateLotModal
          cycle={editingLot.cycle}
          lot={editingLot}
          existingCodes={lots.map((lot) => lot.code)}
          onClose={() => setEditingLot(null)}
          onSave={(draft) => {
            onUpdate(updateLotFromDraft(editingLot, draft))
            setEditingLot(null)
            onNotice("Lote actualizado")
          }}
        />
      )}
      {finishingLot && (
        <FinishLotDialog
          lot={finishingLot}
          onClose={() => setFinishingLot(null)}
          onConfirm={(closedDate) => {
            setUndoFinishedLot(finishingLot)
            onUpdate({
              ...finishingLot,
              status: "Finalizado",
              closedDate,
            })
            setFinishingLot(null)
          }}
        />
      )}
      {undoFinishedLot && (
        <div className="toast undo-toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          Lote finalizado
          <button
            onClick={() => {
              onUpdate(undoFinishedLot)
              setUndoFinishedLot(null)
            }}
          >
            Deshacer
          </button>
        </div>
      )}
      {migratingLot && (
        <MigrateLotDialog
          lot={migratingLot}
          destinationLots={lots.filter(
            (lot) => lot.cycle === "Levante" && lot.status === "Activo",
          )}
          existingLotCodes={lots.map((lot) => lot.code)}
          onClose={() => setMigratingLot(null)}
          onConfirm={(draft) => {
            onMigrate(migratingLot, draft)
            setMigratingLot(null)
          }}
        />
      )}
    </>
  )
}

type LotDraft = {
  code: string
  entryDate: string
  females: string
  males: string
  totalWeight: string
  targetWeight: string
  feedBrand: string
  origin: string
  notes: string
  responsible: string
}

function updateLotFromDraft(lot: Lot, draft: LotDraft): Lot {
  const females = parseColombianNumber(draft.females)
  const males = parseColombianNumber(draft.males)
  const initialAnimals = females + males
  const initialTotalWeight = parseColombianNumber(draft.totalWeight)

  return {
    ...lot,
    code: draft.code.trim(),
    entryDate: draft.entryDate,
    females,
    males,
    initialAnimals,
    initialTotalWeight,
    averageWeight: initialAnimals > 0 ? initialTotalWeight / initialAnimals : 0,
    targetWeight: parseColombianNumber(draft.targetWeight),
    feedBrand: draft.feedBrand.trim(),
    origin: draft.origin.trim(),
    notes: draft.notes.trim(),
    responsible: draft.responsible.trim(),
  }
}

function CreateLotModal({
  cycle,
  lot,
  existingCodes,
  onClose,
  onSave,
}: {
  cycle: ProductionCycle
  lot?: Lot
  existingCodes: string[]
  onClose: () => void
  onSave: (draft: LotDraft) => void
}) {
  const initialDraft: LotDraft = {
    code: lot?.code ?? "",
    entryDate: lot?.entryDate ?? TODAY_ISO,
    females: lot ? String(lot.females) : "",
    males: lot ? String(lot.males) : "",
    totalWeight: lot
      ? formatDecimal(
          lot.initialTotalWeight ?? lot.averageWeight * lot.initialAnimals,
        )
      : "",
    targetWeight: lot?.targetWeight ? formatDecimal(lot.targetWeight) : "",
    feedBrand: lot?.feedBrand ?? "",
    origin: lot?.origin ?? "",
    notes: lot?.notes ?? "",
    responsible: lot?.responsible ?? CONNECTED_USER,
  }
  const [draft, setDraft] = useState<LotDraft>(initialDraft)
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const females = parseColombianNumber(draft.females)
  const males = parseColombianNumber(draft.males)
  const animals = females + males
  const weight = parseColombianNumber(draft.totalWeight)
  const average = animals > 0 && weight > 0 ? weight / animals : 0
  const unusual =
    average > 0 &&
    (cycle === "Precebo"
      ? average > 40 || average < 3
      : average > 160 || average < 20)
  const dirty = Object.keys(draft).some(
    (key) =>
      draft[(key as keyof LotDraft)] !== initialDraft[(key as keyof LotDraft)],
  )
  const codeExists = existingCodes.some(
    (code) =>
      code.toLocaleLowerCase() === draft.code.trim().toLocaleLowerCase() &&
      code.toLocaleLowerCase() !== lot?.code.toLocaleLowerCase(),
  )
  const farmGoal = cycle === "Precebo" ? "29 kg" : null
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !draft.code.trim() ||
      codeExists ||
      !draft.entryDate ||
      !draft.responsible.trim() ||
      animals === 0
    ) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    if (lot) onSave(draft)
    else setConfirming(true)
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={
        confirming
          ? "Confirma los datos del lote"
          : lot
            ? "Editar lote"
            : `Crear lote de ${cycle}`
      }
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="lot-form">
          {confirming ? (
            <div className="lot-confirmation">
              <div className="confirmation-intro">
                <span className="confirmation-icon">
                  <Icon name="check" size={22} />
                </span>
                <div>
                  <h3>Revisa antes de crear el lote</h3>
                  <p>Confirma que la información esté correcta.</p>
                </div>
              </div>
              <div className="confirmation-grid">
                <div>
                  <span>Código del lote</span>
                  <strong>{draft.code}</strong>
                </div>
                <div>
                  <span>Fecha de ingreso</span>
                  <strong>
                    {formatDate(new Date(`${draft.entryDate}T12:00:00`))}
                  </strong>
                </div>
                <div>
                  <span>Animales iniciales</span>
                  <strong>{animals} animales</strong>
                  <small>
                    {females} hembras + {males} machos
                  </small>
                </div>
                <div>
                  <span>Peso inicial total</span>
                  <strong>
                    {weight ? `${formatDecimal(weight)} kg` : "Sin registrar"}
                  </strong>
                  <small>
                    {average
                      ? `${formatDecimal(average)} kg por animal`
                      : "Sin promedio calculado"}
                  </small>
                </div>
                <div>
                  <span>Peso objetivo final</span>
                  <strong>
                    {draft.targetWeight
                      ? `${draft.targetWeight} kg`
                      : "Sin registrar"}
                  </strong>
                  {farmGoal && <small>Meta de la granja: {farmGoal}</small>}
                </div>
                <div>
                  <span>Ciclo</span>
                  <strong>{cycle}</strong>
                </div>
              </div>
              {unusual && (
                <div className="weight-warning">
                  <Icon name="alert" size={18} />
                  <span>
                    El peso promedio es inusual para {cycle.toLowerCase()}.
                    Puedes crear el lote, pero te recomendamos revisarlo.
                  </span>
                </div>
              )}
            </div>
          ) : (
            <>
              <section className="form-section">
                <div className="form-section-heading">
                  <span>1</span>
                  <div>
                    <h3>Datos del lote</h3>
                    <p>Identificación y fecha de inicio</p>
                  </div>
                </div>
                <div className="form-grid">
                  <label
                    className={`field ${
                      submitted && (!draft.code.trim() || codeExists)
                        ? "has-error"
                        : ""
                    }`}
                  >
                    <span>
                      Código del lote <em>* obligatorio</em>
                    </span>
                    <input
                      value={draft.code}
                      onChange={(e) =>
                        setDraft({ ...draft, code: e.target.value })
                      }
                      placeholder={
                        cycle === "Precebo"
                          ? "Ej. PC-2025-019"
                          : "Ej. LV-2025-012"
                      }
                      aria-invalid={
                        submitted && (!draft.code.trim() || codeExists)
                      }
                    />
                    {submitted && !draft.code.trim() && (
                      <small>
                        <Icon name="alert" size={14} />
                        Escribe el código del lote
                      </small>
                    )}
                    {submitted && draft.code.trim() && codeExists && (
                      <small>
                        <Icon name="alert" size={14} />
                        Ya existe un lote con este código
                      </small>
                    )}
                  </label>
                  <label
                    className={`field ${
                      submitted && !draft.entryDate ? "has-error" : ""
                    }`}
                  >
                    <span>
                      Fecha de ingreso <em>* obligatorio</em>
                    </span>
                    <DatePicker
                      value={draft.entryDate}
                      onChange={(value) =>
                        setDraft({ ...draft, entryDate: value })
                      }
                      max={TODAY_ISO}
                      label="Seleccionar fecha de ingreso"
                    />
                    {submitted && !draft.entryDate && (
                      <small>
                        <Icon name="alert" size={14} />
                        Selecciona la fecha de ingreso
                      </small>
                    )}
                  </label>
                  <label
                    className={`field ${
                      submitted && !draft.responsible.trim() ? "has-error" : ""
                    }`}
                  >
                    <span>
                      Responsable <em>* obligatorio</em>
                    </span>
                    <input
                      value={draft.responsible}
                      onChange={(event) =>
                        setDraft({ ...draft, responsible: event.target.value })
                      }
                    />
                    {submitted && !draft.responsible.trim() && (
                      <small>
                        <Icon name="alert" size={14} />
                        Escribe el responsable
                      </small>
                    )}
                  </label>
                </div>
              </section>
              <section className="form-section">
                <div className="form-section-heading">
                  <span>2</span>
                  <div>
                    <h3>Animales</h3>
                    <p>Distribución al ingreso</p>
                  </div>
                </div>
                <div className="form-grid numeric-grid">
                  <label
                    className={`field ${
                      submitted && animals === 0 ? "has-error" : ""
                    }`}
                  >
                    <span>Hembras iniciales</span>
                    <ColombianNumberInput
                      integer
                      value={draft.females}
                      onChange={(value) =>
                        setDraft({ ...draft, females: value })
                      }
                      placeholder="Ej. 62"
                      ariaInvalid={submitted && animals === 0}
                    />
                  </label>
                  <label
                    className={`field ${
                      submitted && animals === 0 ? "has-error" : ""
                    }`}
                  >
                    <span>Machos iniciales</span>
                    <ColombianNumberInput
                      integer
                      value={draft.males}
                      onChange={(value) => setDraft({ ...draft, males: value })}
                      placeholder="Ej. 58"
                      ariaInvalid={submitted && animals === 0}
                    />
                  </label>
                </div>
                {submitted && animals === 0 && (
                  <div className="form-inline-error">
                    <Icon name="alert" size={17} />
                    Registra al menos una hembra o un macho.
                  </div>
                )}
                <div className="calculated-value">
                  <div>
                    <span>Animales iniciales</span>
                    <small>Se calcula automáticamente</small>
                  </div>
                  <strong>
                    {females || males ? (
                      <>
                        {females} hembras + {males} machos ={" "}
                        <b>{animals} animales</b>
                      </>
                    ) : (
                      "—"
                    )}
                  </strong>
                </div>
              </section>
              <section className="form-section">
                <div className="form-section-heading">
                  <span>3</span>
                  <div>
                    <h3>Pesos</h3>
                    <p>Peso inicial y meta del ciclo</p>
                  </div>
                </div>
                <div className="form-grid numeric-grid">
                  <label className="field">
                    <span>Peso inicial total (kg)</span>
                    <ColombianNumberInput
                      value={draft.totalWeight}
                      onChange={(value) =>
                        setDraft({ ...draft, totalWeight: value })
                      }
                      placeholder="Ej. 780,5"
                    />
                  </label>
                  <label className="field suggested-field">
                    <span>Peso objetivo final (kg)</span>
                    <ColombianNumberInput
                      value={draft.targetWeight}
                      onChange={(value) =>
                        setDraft({ ...draft, targetWeight: value })
                      }
                      placeholder="Déjalo vacío o escribe la meta"
                    />
                    <small className="field-help">
                      <Icon name="info" size={13} />
                      {farmGoal
                        ? `Meta de la granja: ${farmGoal}`
                        : "La granja no tiene una meta configurada"}
                    </small>
                  </label>
                </div>
                <div className="average-value">
                  <span>Peso promedio por animal</span>
                  <strong>
                    {average ? `${formatDecimal(average)} kg` : "—"}
                  </strong>
                </div>
                {unusual && (
                  <div className="weight-warning">
                    <Icon name="alert" size={18} />
                    <span>
                      Revisa el peso:{" "}
                      {formatDecimal(average, average % 1 === 0 ? 0 : 1)} kg por
                      animal es inusual en {cycle.toLowerCase()}.
                    </span>
                  </div>
                )}
              </section>
              <details className="optional-section">
                <summary>
                  <div>
                    <strong>Trazabilidad (opcional)</strong>
                    <span>Concentrado, origen y observaciones</span>
                  </div>
                  <Icon name="chevron" size={18} />
                </summary>
                <div className="optional-fields">
                  <div className="form-grid">
                    <label className="field">
                      <span>Marca de concentrado</span>
                      <input
                        value={draft.feedBrand}
                        onChange={(e) =>
                          setDraft({ ...draft, feedBrand: e.target.value })
                        }
                        placeholder="Ej. NutriCerdo"
                      />
                    </label>
                    <label className="field">
                      <span>Origen</span>
                      <input
                        value={draft.origin}
                        onChange={(e) =>
                          setDraft({ ...draft, origin: e.target.value })
                        }
                        placeholder="Ej. Plantel reproductivo"
                      />
                    </label>
                  </div>
                  <label className="field">
                    <span>Observaciones</span>
                    <textarea
                      value={draft.notes}
                      onChange={(e) =>
                        setDraft({ ...draft, notes: e.target.value })
                      }
                      placeholder="Escribe información relevante del lote"
                    />
                  </label>
                </div>
              </details>
            </>
          )}
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={confirming ? () => setConfirming(false) : attemptClose}
          >
            {confirming ? "Volver a editar" : "Cancelar"}
          </button>
          <button
            className="button primary"
            type={confirming ? "button" : "submit"}
            onClick={confirming ? () => onSave(draft) : undefined}
          >
            {confirming
              ? "Confirmar y crear"
              : lot
                ? "Guardar cambios"
                : "Crear lote"}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type LotTab = "Resumen" | "Mortalidad" | "Sanidad" | "Consumo" | "Compras" | "Ventas" | "Movimientos"
type TabAction = {
  label: string
  run: () => void
}

const lotTabs: LotTab[] = [
  "Resumen",
  "Mortalidad",
  "Sanidad",
  "Consumo",
  "Compras",
  "Ventas",
  "Movimientos",
]

function LotDetailHeader({
  lot,
  farmName,
  menuOpen,
  onMenu,
  onBack,
  onEdit,
  onFinish,
  onDelete,
  primaryAction,
  actionDisabled,
  disabledReason,
}: {
  lot: Lot
  farmName: string
  menuOpen: boolean
  onMenu: () => void
  onBack: () => void
  onEdit: () => void
  onFinish: () => void
  onDelete: () => void
  primaryAction?: TabAction
  actionDisabled: boolean
  disabledReason: string
}) {
  const metrics = calculateLotFigures(lot)
  const menuRef = useDismissibleMenu(menuOpen, onMenu)
  return (
    <header className="lot-detail-header">
      <div className="breadcrumbs">
        <button
          onClick={() => {
            onBack()
          }}
        >
          Inicio
        </button>
        <Icon name="chevron" size={14} />
        <span>{farmName}</span>
        <Icon name="chevron" size={14} />
        <button onClick={onBack}>{lot.cycle}</button>
        <Icon name="chevron" size={14} />
        <strong>{lot.code}</strong>
      </div>
      <div className="lot-title-row">
        <div>
          <span className="eyebrow">Detalle del lote</span>
          <div className="lot-title">
            <h1>{lot.code}</h1>
            <span
              className={`status ${
                lot.status === "Activo" ? "positive" : "neutral"
              }`}
            >
              <Icon
                name={lot.status === "Activo" ? "check" : "clock"}
                size={14}
              />
              {lot.status}
            </span>
          </div>
          <p>
            {metrics.currentAnimals} / {metrics.enteredAnimals} animales
            actuales / ingresados · Día {metrics.day} de {lot.cycle} ·{" "}
            <span className={`mortality-${metrics.mortalityTone}`}>
              Mortalidad {formatDecimal(metrics.mortality)} % · meta{" "}
              {formatDecimal(lot.mortalityGoal)} %
            </span>
          </p>
        </div>
        <div className="lot-detail-actions">
          {primaryAction && (
            <div className="tab-action">
              {actionDisabled && <span>{disabledReason}</span>}
              <button
                className="button primary"
                onClick={primaryAction.run}
                disabled={actionDisabled}
              >
                <Icon name="plus" size={18} />
                {primaryAction.label}
              </button>
            </div>
          )}
          <div className="detail-menu-wrap" ref={menuRef}>
            <button
              className="detail-menu-button"
              onClick={onMenu}
              aria-label="Opciones del lote"
              aria-expanded={menuOpen}
            >
              <Icon name="dots" size={23} />
            </button>
            {menuOpen && (
              <div className="lot-menu detail-menu" role="menu">
                <button role="menuitem" onClick={onEdit}>
                  <Icon name="edit" size={16} />
                  Editar
                </button>
                {lot.status === "Activo" && (
                  <button role="menuitem" onClick={onFinish}>
                    <Icon name="check" size={16} />
                    Finalizar lote
                  </button>
                )}
                <div className="menu-divider" />
                <button
                  className="delete-item"
                  role="menuitem"
                  onClick={onDelete}
                >
                  <Icon name="trash" size={16} />
                  Eliminar lote
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

type SummaryTabProps = {
  lot: Lot
  onEdit: () => void
}

function SummaryTab({ lot, onEdit }: SummaryTabProps) {
  const metrics = calculateLotFigures(lot)
  const mortalityTone =
    metrics.mortalityTone === "high"
      ? "metric-danger"
      : metrics.mortalityTone === "near"
        ? "metric-warning"
        : "metric-success"
  const target = lot.cycle === "Precebo" ? 32 : 110
  return (
    <div className="tab-panel">
      <div className="detail-metrics">
        <div>
          <span>Animales</span>
          <strong>
            {metrics.currentAnimals} <small>/ {metrics.enteredAnimals}</small>
          </strong>
          <p>actuales / ingresados</p>
        </div>
        <div>
          <span>Día del ciclo</span>
          <strong>{metrics.day}</strong>
          <p>de {lot.cycle.toLowerCase()}</p>
        </div>
        <div>
          <span>Peso promedio</span>
          <strong>
            {formatDecimal(lot.averageWeight)} <small>kg</small>
          </strong>
          <p>objetivo {formatDecimal(target)} kg</p>
        </div>
        <div className={mortalityTone}>
          <span>Mortalidad</span>
          <strong>
            {formatDecimal(metrics.mortality)} <small>%</small>
          </strong>
          <p>· meta {formatDecimal(lot.mortalityGoal)} %</p>
        </div>
        <div>
          <span>Conversión alimenticia</span>
          <strong>{lot.cycle === "Precebo" ? "1,54" : "2,31"}</strong>
          <p>kg alimento / kg ganado</p>
        </div>
      </div>
      <div className="summary-columns">
        <section className="detail-section-card">
          <div className="card-section-title">
            <div>
              <h2>Próximos tratamientos sanitarios</h2>
              <p>Programados para este lote</p>
            </div>
            <span className="status warning">
              <Icon name="clock" size={14} />2 próximos
            </span>
          </div>
          {metrics.currentAnimals > 0 ? (
            <div className="upcoming-list">
              <div>
                <span className="treatment-date">
                  <b>18</b>MAR
                </span>
                <div>
                  <strong>Refuerzo vacuna Circovirus</strong>
                  <p>
                    Para {metrics.currentAnimals} animales · Vía intramuscular
                  </p>
                </div>
              </div>
              <div>
                <span className="treatment-date">
                  <b>25</b>MAR
                </span>
                <div>
                  <strong>Desparasitación interna</strong>
                  <p>Para {metrics.currentAnimals} animales · Vía oral</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="inline-empty">
              No hay tratamientos programados porque el lote no tiene animales.
            </div>
          )}
        </section>
        <section className="detail-section-card">
          <div className="card-section-title">
            <div>
              <h2>Últimos registros</h2>
              <p>Actividad reciente del lote</p>
            </div>
          </div>
          <div className="activity-list">
            <div>
              <span className="activity-icon">
                <Icon name="weight" size={17} />
              </span>
              <div>
                <strong>Pesaje registrado</strong>
                <p>{formatDecimal(lot.averageWeight)} kg promedio</p>
              </div>
              <time>Hoy</time>
            </div>
            <div>
              <span className="activity-icon">
                <Icon name="check" size={17} />
              </span>
              <div>
                <strong>Tratamiento aplicado</strong>
                <p>Vacuna Mycoplasma</p>
              </div>
              <time>10 mar</time>
            </div>
            <div>
              <span className="activity-icon">
                <Icon name="box" size={17} />
              </span>
              <div>
                <strong>Compra registrada</strong>
                <p>420,0 kg de concentrado</p>
              </div>
              <time>8 mar</time>
            </div>
          </div>
        </section>
      </div>
      <section className="detail-section-card lot-data-card">
        <div className="card-section-title">
          <div>
            <h2>Datos del lote</h2>
            <p>Identificación, ingreso y trazabilidad</p>
          </div>
          <button className="button secondary" onClick={onEdit}>
            <Icon name="edit" size={17} />
            Editar datos
          </button>
        </div>
        <div className="lot-data-grid">
          <div>
            <span>Código</span>
            <strong>{lot.code}</strong>
          </div>
          <div>
            <span>Fecha de ingreso</span>
            <strong>
              {lot.entryDate
                ? formatDate(new Date(`${lot.entryDate}T12:00:00`))
                : "Sin registrar"}
            </strong>
          </div>
          <div>
            <span>Animales iniciales</span>
            <strong>{lot.initialAnimals}</strong>
          </div>
          <div>
            <span>Peso inicial</span>
            <strong>
              {formatDecimal(
                lot.initialTotalWeight ??
                  lot.averageWeight * lot.initialAnimals,
              )}{" "}
              kg
            </strong>
          </div>
          <div>
            <span>Peso objetivo</span>
            <strong>
              {lot.targetWeight
                ? `${formatDecimal(lot.targetWeight)} kg`
                : "Sin registrar"}
            </strong>
          </div>
          <div>
            <span>Trazabilidad</span>
            <strong>
              {[lot.feedBrand, lot.origin, lot.notes]
                .filter(Boolean)
                .join(" · ") || "Sin registrar"}
            </strong>
          </div>
        </div>
      </section>
    </div>
  )
}

function MortalityTab({
  lot,
  records,
  onChange,
}: {
  lot: Lot
  records: MortalityRecord[]
  onChange: (records: MortalityRecord[]) => void
}) {
  const metrics = calculateLotFigures(lot)
  const deaths = metrics.mortalityAnimals
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editing, setEditing] = useState<MortalityRecord | null>(null)
  const [annulling, setAnnulling] = useState<MortalityRecord | null>(null)
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Mortalidad acumulada</span>
          <strong>{deaths}</strong>
          <p>animales</p>
        </div>
        <div>
          <span>Tasa del lote</span>
          <strong className={`mortality-${metrics.mortalityTone}`}>
            {formatDecimal(metrics.mortality)} %
          </strong>
          <p>· meta {formatDecimal(lot.mortalityGoal)} %</p>
        </div>
        <div>
          <span>Último registro</span>
          <strong>{records[0]?.date ?? "Sin registros"}</strong>
          <p>{records.length ? "registro más reciente" : "sin mortalidad"}</p>
        </div>
      </div>
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Historial de mortalidad</h2>
            <p>
              {countLabel(records.length, "registro", "registros")} en este lote
            </p>
          </div>
        </div>
        <div className="table-wrap borderless">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Sexo</th>
                <th>Causa</th>
                <th>Responsable</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr
                  className={record.annulled ? "record-annulled" : ""}
                  key={record.id}
                >
                  <td>{record.date}</td>
                  <td>
                    <strong>{record.quantity}</strong>
                  </td>
                  <td>{record.sex}</td>
                  <td>{record.cause}</td>
                  <td>
                    {record.responsible}{" "}
                    {record.annulled && (
                      <span className="status neutral">Anulado</span>
                    )}
                  </td>
                  <td className="record-actions-cell">
                    <button
                      className="dots-button"
                      aria-label="Acciones del registro"
                      onClick={() =>
                        setMenuOpen(menuOpen === record.id ? null : record.id)
                      }
                    >
                      <Icon name="dots" size={19} />
                    </button>
                    {menuOpen === record.id && (
                      <RecordActionsMenu
                        onEdit={() => {
                          setEditing(record)
                          setMenuOpen(null)
                        }}
                        onAnnul={() => {
                          setAnnulling(record)
                          setMenuOpen(null)
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {editing && (
        <MortalityModal
          available={metrics.currentAnimals + editing.quantity}
          record={editing}
          onClose={() => setEditing(null)}
          onSave={(updated) => {
            onChange(
              records.map((item) => (item.id === updated.id ? updated : item)),
            )
            setEditing(null)
          }}
        />
      )}
      {annulling && (
        <AnnulRecordDialog
          onClose={() => setAnnulling(null)}
          onConfirm={(annulReason) => {
            onChange(
              records.map((item) =>
                item.id === annulling.id
                  ? { ...item, annulled: true, annulReason }
                  : item,
              ),
            )
            setAnnulling(null)
          }}
        />
      )}
    </div>
  )
}

function MortalityModal({
  available,
  record,
  onClose,
  onSave,
}: {
  available: number
  record?: MortalityRecord
  onClose: () => void
  onSave: (record: MortalityRecord) => void
}) {
  const [form, setForm] = useState({
    date: record ? toIsoDate(record.date) : TODAY_ISO,
    quantity: record ? String(record.quantity) : "",
    sex: record?.sex ?? "",
    cause: record?.cause ?? "",
    responsible: record?.responsible ?? CONNECTED_USER,
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = record
    ? form.date !== toIsoDate(record.date) ||
      parseColombianNumber(form.quantity) !== record.quantity ||
      form.sex !== record.sex ||
      form.cause !== record.cause ||
      form.responsible !== record.responsible ||
      Boolean(form.notes)
    : Object.entries(form).some(
        ([key, value]) =>
          value &&
          !(
            (key === "date" && value === TODAY_ISO) ||
            (key === "responsible" && value === CONNECTED_USER)
          ),
      )
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const quantity = parseColombianNumber(form.quantity)
  const quantityTooHigh = quantity > available
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      quantity <= 0 ||
      quantityTooHigh ||
      !form.sex ||
      !form.cause ||
      !form.responsible
    ) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    onSave({
      id: record?.id ?? Date.now(),
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      quantity,
      sex: form.sex as "Hembra" | "Macho",
      cause: form.cause,
      responsible: form.responsible,
      annulled: record?.annulled,
      annulReason: record?.annulReason,
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={record ? "Editar mortalidad" : "Registrar mortalidad"}
      onClose={attemptClose}
    >
      <form onSubmit={submit}>
        <div className="form-content mortality-form">
          <div className="available-banner">
            <Icon name="pig" size={20} />
            <span>Disponibles en el lote</span>
            <strong>{available} animales</strong>
          </div>
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                onChange={(value) => setForm({ ...form, date: value })}
                max={TODAY_ISO}
                label="Seleccionar fecha de mortalidad"
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona una fecha
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && (!form.quantity || quantityTooHigh)
                  ? "has-error"
                  : ""
              }`}
            >
              <span>
                Cantidad <em>* obligatorio</em>
              </span>
              <ColombianNumberInput
                integer
                value={form.quantity}
                onChange={(value) => setForm({ ...form, quantity: value })}
                placeholder="Ej. 1"
              />
              {submitted && !form.quantity && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe la cantidad
                </small>
              )}
              {submitted && form.quantity && quantityTooHigh && (
                <small>
                  <Icon name="alert" size={14} />
                  La cantidad supera los animales disponibles
                </small>
              )}
            </label>
            <label
              className={`field ${submitted && !form.sex ? "has-error" : ""}`}
            >
              <span>
                Sexo <em>* obligatorio</em>
              </span>
              <select
                value={form.sex}
                onChange={(e) => setForm({ ...form, sex: e.target.value })}
              >
                <option value="">Selecciona</option>
                <option>Hembra</option>
                <option>Macho</option>
              </select>
              {submitted && !form.sex && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona el sexo
                </small>
              )}
            </label>
            <label
              className={`field ${submitted && !form.cause ? "has-error" : ""}`}
            >
              <span>
                Causa <em>* obligatorio</em>
              </span>
              <select
                value={form.cause}
                onChange={(e) => setForm({ ...form, cause: e.target.value })}
              >
                <option value="">Selecciona</option>
                <option>Aplastamiento</option>
                <option>Bajo consumo</option>
                <option>Enfermedad respiratoria</option>
                <option>Otra</option>
              </select>
              {submitted && !form.cause && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la causa
                </small>
              )}
            </label>
          </div>
          <label
            className={`field ${
              submitted && !form.responsible ? "has-error" : ""
            }`}
          >
            <span>
              Responsable <em>* obligatorio</em>
            </span>
            <input
              value={form.responsible}
              onChange={(e) =>
                setForm({ ...form, responsible: e.target.value })
              }
              placeholder="Nombre de quien registra"
            />
            {submitted && !form.responsible && (
              <small>
                <Icon name="alert" size={14} />
                Escribe el responsable
              </small>
            )}
          </label>
          <label className="field">
            <span>Observaciones</span>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Información adicional del registro"
            />
          </label>
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            {record ? "Guardar cambios" : "Registrar mortalidad"}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type Treatment = {
  id: number
  name: string
  date: string
  method: string
  overdue: boolean
  status: "Programado" | "Aplicado" | "Omitido"
  recordedAt?: string
  responsible?: string
  product?: string
  omissionReason?: string
}

function HealthTab({
  lot,
  treatments,
  setTreatments,
  readOnly,
  onNotice,
}: {
  lot: Lot
  treatments: Treatment[]
  setTreatments: (items: Treatment[]) => void
  readOnly: boolean
  onNotice: (text: string) => void
}) {
  const [selected, setSelected] = useState<number[]>([])
  const [applying, setApplying] = useState<Treatment[]>([])
  const [omitting, setOmitting] = useState<Treatment | null>(null)
  const metrics = calculateLotFigures(lot)
  const pending = treatments.filter((item) => item.status === "Programado")
  const history = treatments.filter((item) => item.status !== "Programado")
  const updateStatus = (
    ids: number[],
    status: Treatment["status"],
    notice: string,
    details?: Partial<Treatment>,
  ) => {
    setTreatments(
      treatments.map((item) =>
        ids.includes(item.id)
          ? {
              ...item,
              status,
              recordedAt:
                status === "Programado"
                  ? undefined
                  : (details?.recordedAt ??
                    formatDate(new Date(`${TODAY_ISO}T12:00:00`))),
              responsible:
                status === "Programado" ? undefined : details?.responsible,
              product: status === "Programado" ? undefined : details?.product,
              omissionReason:
                status === "Programado" ? undefined : details?.omissionReason,
            }
          : item,
      ),
    )
    setSelected([])
    onNotice(notice)
  }
  return (
    <div className="tab-panel">
      <div className="health-intro">
        <div>
          <h2>Calendario sanitario</h2>
          <p>
            Calculado para los {metrics.currentAnimals} animales reales del lote
          </p>
        </div>
        <button
          className="button secondary apply-selected"
          disabled={!selected.length || readOnly}
          onClick={() =>
            setApplying(pending.filter((item) => selected.includes(item.id)))
          }
        >
          <Icon name="check" size={17} />
          Aplicar seleccionados ({selected.length})
        </button>
      </div>
      {metrics.currentAnimals === 0 ? (
        <div className="inline-empty health-empty">
          No hay vacunas programadas porque este lote no tiene animales.
        </div>
      ) : (
        <div className="treatments-list">
          {pending.map((item) => (
            <article className="treatment-row" key={item.id}>
              <label className="treatment-check">
                <input
                  type="checkbox"
                  disabled={readOnly}
                  checked={selected.includes(item.id)}
                  onChange={() =>
                    setSelected(
                      selected.includes(item.id)
                        ? selected.filter((id) => id !== item.id)
                        : [...selected, item.id],
                    )
                  }
                />
                <span className="custom-checkbox">
                  {selected.includes(item.id) && (
                    <Icon name="check" size={15} strokeWidth={2.5} />
                  )}
                </span>
              </label>
              <span className="treatment-date large">
                <b>{item.date.split("/")[0]}</b>
                {new Date(
                  `${item.date.split("/").reverse().join("-")}T12:00:00`,
                )
                  .toLocaleDateString("es-CO", { month: "short" })
                  .replace(".", "")
                  .toUpperCase()}
              </span>
              <div className="treatment-copy">
                <div>
                  <h3>{item.name}</h3>
                  {item.overdue && (
                    <span className="status critical">Vencido</span>
                  )}
                </div>
                <p>
                  {item.method} · Para {metrics.currentAnimals} animales
                </p>
              </div>
              {!readOnly && (
                <div className="treatment-actions">
                  <button
                    className="text-button"
                    onClick={() => setOmitting(item)}
                  >
                    Omitir
                  </button>
                  <button
                    className="button secondary"
                    onClick={() => setApplying([item])}
                  >
                    Aplicar
                  </button>
                </div>
              )}
            </article>
          ))}
          {!pending.length && (
            <div className="inline-empty">
              No hay tratamientos sanitarios pendientes.
            </div>
          )}
        </div>
      )}
      {history.length > 0 && (
        <section className="health-history records-card">
          <div className="records-heading">
            <div>
              <h2>Historial sanitario</h2>
              <p>
                {countLabel(
                  history.length,
                  "registro aplicado u omitido",
                  "registros aplicados u omitidos",
                )}
              </p>
            </div>
          </div>
          <div className="health-history-list">
            {history.map((item) => (
              <article key={item.id}>
                <span
                  className={`status ${
                    item.status === "Aplicado" ? "positive" : "neutral"
                  }`}
                >
                  {item.status}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    {item.recordedAt ?? item.date} ·{" "}
                    {item.responsible ?? "Sin responsable"}
                    {item.omissionReason ? ` · ${item.omissionReason}` : ""}
                  </p>
                </div>
                {!readOnly && (
                  <button
                    className="text-button"
                    onClick={() =>
                      updateStatus(
                        [item.id],
                        "Programado",
                        "Acción sanitaria deshecha",
                      )
                    }
                  >
                    Deshacer
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
      {applying.length > 0 && (
        <ApplyTreatmentDialog
          treatments={applying}
          onClose={() => setApplying([])}
          onConfirm={(details) => {
            updateStatus(
              applying.map((item) => item.id),
              "Aplicado",
              applying.length > 1
                ? "Tratamientos aplicados"
                : "Tratamiento aplicado",
              details,
            )
            setApplying([])
          }}
        />
      )}
      {omitting && (
        <OmitTreatmentDialog
          treatment={omitting}
          onClose={() => setOmitting(null)}
          onConfirm={(omissionReason) => {
            updateStatus([omitting.id], "Omitido", "Tratamiento omitido", {
              responsible: CONNECTED_USER,
              omissionReason,
            })
            setOmitting(null)
          }}
        />
      )}
    </div>
  )
}

function ApplyTreatmentDialog({
  treatments,
  onClose,
  onConfirm,
}: {
  treatments: Treatment[]
  onClose: () => void
  onConfirm: (details: Partial<Treatment>) => void
}) {
  const [date, setDate] = useState(TODAY_ISO)
  const [responsible, setResponsible] = useState(CONNECTED_USER)
  const [product, setProduct] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const scheduled = treatments[0]?.date
  const [day, month, year] = scheduled?.split("/") ?? []
  const scheduledIso = year && month && day ? `${year}-${month}-${day}` : ""
  const warningDate = new Date(`${TODAY_ISO}T12:00:00`)
  warningDate.setDate(warningDate.getDate() + 3)
  const farAhead =
    scheduledIso >
    `${warningDate.getFullYear()}-${String(warningDate.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(warningDate.getDate()).padStart(2, "0")}`
  return (
    <DialogShell title="Confirmar aplicación" onClose={onClose} size="small">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (!date || !responsible.trim()) {
            focusFirstError(event.currentTarget)
            return
          }
          onConfirm({
            recordedAt: formatDate(new Date(`${date}T12:00:00`)),
            responsible: responsible.trim(),
            product: product.trim(),
          })
        }}
      >
        <div className="form-content compact-form">
          {farAhead && (
            <div className="weight-warning">
              <Icon name="alert" size={18} />
              Esta vacuna está programada para el {day}/{month}. ¿Aplicarla hoy?
            </div>
          )}
          <label className={`field ${submitted && !date ? "has-error" : ""}`}>
            <span>
              Fecha de aplicación <em>* obligatorio</em>
            </span>
            <DatePicker
              value={date}
              onChange={setDate}
              max={TODAY_ISO}
              label="Seleccionar fecha de aplicación"
            />
          </label>
          <label
            className={`field ${
              submitted && !responsible.trim() ? "has-error" : ""
            }`}
          >
            <span>
              Responsable <em>* obligatorio</em>
            </span>
            <input
              value={responsible}
              onChange={(event) => setResponsible(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Producto</span>
            <input
              value={product}
              onChange={(event) => setProduct(event.target.value)}
              placeholder="Nombre comercial"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary">Confirmar aplicación</button>
        </div>
      </form>
    </DialogShell>
  )
}

function OmitTreatmentDialog({
  treatment,
  onClose,
  onConfirm,
}: {
  treatment: Treatment
  onClose: () => void
  onConfirm: (reason: string) => void
}) {
  const [reason, setReason] = useState("")
  const [other, setOther] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const invalid = !reason || (reason === "Otro" && !other.trim())
  return (
    <DialogShell
      title={`Omitir ${treatment.name}`}
      onClose={onClose}
      size="small"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (invalid) {
            focusFirstError(event.currentTarget)
            return
          }
          onConfirm(reason === "Otro" ? other.trim() : reason)
        }}
      >
        <div className="form-content compact-form">
          <label className={`field ${submitted && !reason ? "has-error" : ""}`}>
            <span>
              Motivo <em>* obligatorio</em>
            </span>
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value)}
            >
              <option value="">Selecciona un motivo</option>
              <option>Animales enfermos</option>
              <option>Sin producto</option>
              <option>Reprogramada</option>
              <option>Otro</option>
            </select>
            {submitted && !reason && <small>Selecciona un motivo</small>}
          </label>
          {reason === "Otro" && (
            <label
              className={`field ${
                submitted && !other.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Especifica el motivo <em>* obligatorio</em>
              </span>
              <textarea
                value={other}
                onChange={(event) => setOther(event.target.value)}
              />
            </label>
          )}
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button danger-outline">Omitir vacuna</button>
        </div>
      </form>
    </DialogShell>
  )
}

function TreatmentModal({
  lot,
  onClose,
  onSave,
}: {
  lot: Lot
  onClose: () => void
  onSave: (treatment: Treatment) => void
}) {
  const metrics = calculateLotFigures(lot)
  const [form, setForm] = useState({
    treatment: "",
    date: TODAY_ISO,
    product: "",
    method: "Intramuscular",
    dose: "",
    responsible: CONNECTED_USER,
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Object.values(form).some(
    (value) =>
      value &&
      value !== "Intramuscular" &&
      value !== TODAY_ISO &&
      value !== CONNECTED_USER,
  )
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title="Registrar tratamiento"
      onClose={attemptClose}
      size="wide"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (
            !form.treatment.trim() ||
            !form.date ||
            !form.responsible.trim()
          ) {
            focusFirstError(event.currentTarget)
            return
          }
          onSave({
            id: Date.now(),
            name: form.treatment.trim(),
            date: formatDate(new Date(`${form.date}T12:00:00`)),
            method: form.method,
            overdue: false,
            status: "Programado",
          })
        }}
      >
        <div className="form-content treatment-form">
          <div className="treatment-lot-note">
            <Icon name="info" size={18} />
            La dosis se calculará para {metrics.currentAnimals} animales.
          </div>
          <div className="form-grid">
            <label
              className={`field ${
                submitted && !form.treatment.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Tratamiento <em>* obligatorio</em>
              </span>
              <input
                value={form.treatment}
                onChange={(event) =>
                  setForm({ ...form, treatment: event.target.value })
                }
                placeholder="Ej. Vacuna Circovirus"
              />
              {submitted && !form.treatment.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el tratamiento
                </small>
              )}
            </label>
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                onChange={(value) => setForm({ ...form, date: value })}
                max={TODAY_ISO}
                label="Seleccionar fecha del tratamiento"
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la fecha
                </small>
              )}
            </label>
            <label className="field">
              <span>Producto</span>
              <input
                value={form.product}
                onChange={(event) =>
                  setForm({ ...form, product: event.target.value })
                }
                placeholder="Nombre comercial"
              />
            </label>
            <label className="field">
              <span>Vía de aplicación</span>
              <select
                value={form.method}
                onChange={(event) =>
                  setForm({ ...form, method: event.target.value })
                }
              >
                <option>Intramuscular</option>
                <option>Oral</option>
                <option>Subcutánea</option>
              </select>
            </label>
            <label className="field">
              <span>Dosis por animal</span>
              <ColombianNumberInput
                value={form.dose}
                onChange={(value) => setForm({ ...form, dose: value })}
                placeholder="Ej. 2,0"
              />
            </label>
            <label
              className={`field ${
                submitted && !form.responsible.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
                placeholder="Nombre del responsable"
              />
              {submitted && !form.responsible.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el responsable
                </small>
              )}
            </label>
          </div>
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar tratamiento
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function LotMovementModal({
  kind,
  available,
  movement,
  onClose,
  onSave,
}: {
  kind: "Compra" | "Venta"
  available: number
  movement?: LotMovement
  onClose: () => void
  onSave: (movement: LotMovement) => void
}) {
  const [form, setForm] = useState({
    date: movement ? toIsoDate(movement.date) : TODAY_ISO,
    party: movement?.party ?? "",
    females: movement ? String(movement.females) : "",
    males: movement ? String(movement.males) : "",
    totalWeight: movement ? formatDecimal(movement.totalWeight) : "",
    value: movement?.value ? String(movement.value) : "",
    concept: movement?.concept ?? "",
    quantity: movement?.quantity ? formatDecimal(movement.quantity) : "",
    unit: (movement?.unit ?? "kg") as "kg" | "bultos" | "unidades",
    responsible: movement?.responsible ?? CONNECTED_USER,
  })
  const [purchaseType, setPurchaseType] =
    useState<"Animales" | "Alimento" | "Otro insumo">(
      movement?.purchaseType ?? "Animales",
    )
  const [invoice, setInvoice] = useState(movement?.invoice ?? "")
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const females = parseColombianNumber(form.females)
  const males = parseColombianNumber(form.males)
  const animals = females + males
  const isAnimalMovement = kind === "Venta" || purchaseType === "Animales"
  const exceedsAvailable = kind === "Venta" && animals > available
  const dirty = movement
    ? form.date !== toIsoDate(movement.date) ||
      form.party !== movement.party ||
      females !== movement.females ||
      males !== movement.males ||
      parseColombianNumber(form.totalWeight) !== movement.totalWeight ||
      parseColombianNumber(form.value) !== (movement.value ?? 0) ||
      form.concept !== (movement.concept ?? "") ||
      parseColombianNumber(form.quantity) !== (movement.quantity ?? 0) ||
      form.unit !== (movement.unit ?? "kg") ||
      form.responsible !== (movement.responsible ?? CONNECTED_USER) ||
      invoice !== (movement.invoice ?? "") ||
      purchaseType !== (movement.purchaseType ?? "Animales")
    : Object.entries(form).some(
        ([key, value]) =>
          value &&
          !(
            (key === "date" && value === TODAY_ISO) ||
            (key === "responsible" && value === CONNECTED_USER) ||
            (key === "unit" && value === "kg")
          ),
      ) || Boolean(invoice)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      !form.party.trim() ||
      !form.responsible.trim() ||
      (isAnimalMovement && animals === 0) ||
      (isAnimalMovement && !form.totalWeight) ||
      (!isAnimalMovement && !form.concept.trim()) ||
      (!isAnimalMovement && !form.quantity) ||
      exceedsAvailable ||
      !form.value
    ) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    onSave({
      id: movement?.id ?? Date.now(),
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      party: form.party.trim(),
      females,
      males,
      totalWeight: isAnimalMovement
        ? parseColombianNumber(form.totalWeight)
        : purchaseType === "Alimento"
          ? parseColombianNumber(form.quantity)
          : 0,
      purchaseType: kind === "Compra" ? purchaseType : undefined,
      concept:
        kind === "Compra"
          ? isAnimalMovement
            ? "Compra de animales"
            : form.concept.trim()
          : undefined,
      quantity: !isAnimalMovement
        ? parseColombianNumber(form.quantity)
        : undefined,
      unit: !isAnimalMovement ? form.unit : undefined,
      value: parseColombianNumber(form.value),
      invoice: kind === "Compra" ? invoice : undefined,
      responsible: form.responsible.trim(),
      annulled: movement?.annulled,
      annulReason: movement?.annulReason,
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={`${movement ? "Editar" : "Registrar"} ${kind.toLowerCase()}`}
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="form-content lot-movement-form">
          {kind === "Venta" && (
            <div className="available-banner">
              <Icon name="pig" size={20} />
              <span>Animales disponibles</span>
              <strong>{available} animales</strong>
            </div>
          )}
          {kind === "Compra" && (
            <fieldset className="purchase-type-selector">
              <legend>
                Tipo de compra <em>* obligatorio</em>
              </legend>
              <div>
                {(["Animales", "Alimento", "Otro insumo"] as const).map(
                  (type) => (
                    <button
                      type="button"
                      className={purchaseType === type ? "active" : ""}
                      onClick={() => setPurchaseType(type)}
                      key={type}
                    >
                      <Icon
                        name={
                          type === "Animales"
                            ? "pig"
                            : type === "Alimento"
                              ? "box"
                              : "syringe"
                        }
                        size={18}
                      />
                      {type}
                    </button>
                  ),
                )}
              </div>
            </fieldset>
          )}
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                onChange={(value) => setForm({ ...form, date: value })}
                label={`Seleccionar fecha de ${kind.toLowerCase()}`}
                max={TODAY_ISO}
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la fecha
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && !form.responsible.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
              />
              {submitted && !form.responsible.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el responsable
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && !form.party.trim() ? "has-error" : ""
              }`}
            >
              <span>
                {kind === "Compra" ? "Proveedor" : "Comprador"}{" "}
                <em>* obligatorio</em>
              </span>
              <input
                value={form.party}
                onChange={(event) =>
                  setForm({ ...form, party: event.target.value })
                }
                placeholder={
                  kind === "Compra"
                    ? "Nombre del proveedor"
                    : "Nombre del comprador"
                }
              />
              {submitted && !form.party.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el {kind === "Compra" ? "proveedor" : "comprador"}
                </small>
              )}
            </label>
            {isAnimalMovement ? (
              <>
                <label className="field">
                  <span>Hembras</span>
                  <ColombianNumberInput
                    integer
                    value={form.females}
                    onChange={(value) => setForm({ ...form, females: value })}
                    placeholder="Ej. 20"
                  />
                </label>
                <label className="field">
                  <span>Machos</span>
                  <ColombianNumberInput
                    integer
                    value={form.males}
                    onChange={(value) => setForm({ ...form, males: value })}
                    placeholder="Ej. 20"
                  />
                </label>
                <label
                  className={`field ${
                    submitted && !form.totalWeight ? "has-error" : ""
                  }`}
                >
                  <span>
                    Peso total (kg) <em>* obligatorio</em>
                  </span>
                  <ColombianNumberInput
                    value={form.totalWeight}
                    onChange={(value) =>
                      setForm({ ...form, totalWeight: value })
                    }
                    placeholder="Ej. 1.250,0"
                  />
                  {submitted && !form.totalWeight && (
                    <small>
                      <Icon name="alert" size={14} />
                      Escribe el peso total
                    </small>
                  )}
                </label>
              </>
            ) : (
              <>
                <label
                  className={`field ${
                    submitted && !form.concept.trim() ? "has-error" : ""
                  }`}
                >
                  <span>
                    Concepto <em>* obligatorio</em>
                  </span>
                  <input
                    value={form.concept}
                    onChange={(event) =>
                      setForm({ ...form, concept: event.target.value })
                    }
                    placeholder={
                      purchaseType === "Alimento"
                        ? "Ej. Concentrado iniciador"
                        : "Ej. Desinfectante"
                    }
                  />
                  {submitted && !form.concept.trim() && (
                    <small>
                      <Icon name="alert" size={14} />
                      Escribe el concepto
                    </small>
                  )}
                </label>
                <label
                  className={`field ${
                    submitted && !form.quantity ? "has-error" : ""
                  }`}
                >
                  <span>
                    Cantidad <em>* obligatorio</em>
                  </span>
                  <div className="quantity-with-unit">
                    <ColombianNumberInput
                      value={form.quantity}
                      onChange={(value) =>
                        setForm({ ...form, quantity: value })
                      }
                      placeholder="Ej. 420,5"
                    />
                    <select
                      value={form.unit}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          unit: event.target.value as typeof form.unit,
                        })
                      }
                      aria-label="Unidad de la compra"
                    >
                      <option value="kg">kg</option>
                      <option value="bultos">bultos</option>
                      <option value="unidades">unidades</option>
                    </select>
                  </div>
                  {submitted && !form.quantity && (
                    <small>
                      <Icon name="alert" size={14} />
                      Escribe la cantidad
                    </small>
                  )}
                </label>
              </>
            )}
            <label
              className={`field ${submitted && !form.value ? "has-error" : ""}`}
            >
              <span>
                Valor total <em>* obligatorio</em>
              </span>
              <ColombianNumberInput
                integer
                value={form.value}
                onChange={(value) => setForm({ ...form, value })}
                placeholder="Ej. 1.365.000"
              />
              {submitted && !form.value && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el valor total
                </small>
              )}
            </label>
            {kind === "Compra" && (
              <label className="field invoice-upload">
                <span>Foto de la factura</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(event) =>
                    setInvoice(event.target.files?.[0]?.name ?? "")
                  }
                />
                <span className="upload-control">
                  <Icon name="download" size={18} />
                  {invoice || "Seleccionar archivo"}
                </span>
              </label>
            )}
          </div>
          {isAnimalMovement && (
            <div
              className={`calculated-value ${
                exceedsAvailable ? "calculated-error" : ""
              }`}
            >
              <div>
                <span>Total de animales</span>
                <small>Hembras más machos</small>
              </div>
              <strong>
                {females} hembras + {males} machos = <b>{animals} animales</b>
              </strong>
            </div>
          )}
          {exceedsAvailable && (
            <div className="form-inline-error">
              <Icon name="alert" size={17} />
              El total no puede superar los {available} animales disponibles.
            </div>
          )}
          {submitted && isAnimalMovement && animals === 0 && (
            <div className="form-inline-error">
              <Icon name="alert" size={17} />
              Registra al menos una hembra o un macho.
            </div>
          )}
        </div>
        <div className="modal-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            {movement ? "Guardar cambios" : `Registrar ${kind.toLowerCase()}`}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function PurchasesTab({
  records,
  onChange,
}: {
  records: LotMovement[]
  onChange: (records: LotMovement[]) => void
}) {
  const activeRecords = records.filter((record) => !record.annulled)
  const total = activeRecords.reduce(
    (sum, record) => sum + (record.value ?? 0),
    0,
  )
  const food = activeRecords.filter(
    (record) => record.purchaseType === "Alimento",
  )
  const foodQuantity = food.reduce(
    (sum, record) => sum + (record.quantity ?? 0),
    0,
  )
  const other = activeRecords.filter(
    (record) => record.purchaseType === "Otro insumo",
  )
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editing, setEditing] = useState<LotMovement | null>(null)
  const [annulling, setAnnulling] = useState<LotMovement | null>(null)
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Total comprado</span>
          <strong>$ {total.toLocaleString("es-CO")}</strong>
          <p>{countLabel(records.length, "compra", "compras")} en este lote</p>
        </div>
        <div>
          <span>Concentrado</span>
          <strong>{formatDecimal(foodQuantity)} kg</strong>
          <p>{countLabel(food.length, "compra", "compras")}</p>
        </div>
        <div>
          <span>Otros insumos</span>
          <strong>
            ${" "}
            {other
              .reduce((sum, record) => sum + (record.value ?? 0), 0)
              .toLocaleString("es-CO")}
          </strong>
          <p>{countLabel(other.length, "compra", "compras")}</p>
        </div>
      </div>
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Historial de compras</h2>
            <p>Costos asociados únicamente a este lote</p>
          </div>
        </div>
        <div className="table-wrap borderless">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Proveedor</th>
                <th>Cantidad</th>
                <th>Factura / valor total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr
                  className={record.annulled ? "record-annulled" : ""}
                  key={record.id}
                >
                  <td>{record.date}</td>
                  <td>{record.concept ?? "Compra de animales"}</td>
                  <td>{record.party}</td>
                  <td>
                    {record.purchaseType === "Animales" ? (
                      <>
                        {countLabel(
                          record.females + record.males,
                          "animal",
                          "animales",
                        )}{" "}
                        · {formatDecimal(record.totalWeight)} kg
                      </>
                    ) : (
                      <>
                        {formatDecimal(record.quantity ?? 0)}{" "}
                        {record.unit ?? "unidades"}
                      </>
                    )}
                  </td>
                  <td>
                    $ {(record.value ?? 0).toLocaleString("es-CO")}
                    {record.invoice ? ` · ${record.invoice}` : ""}
                    {record.annulled && (
                      <span className="status neutral">Anulado</span>
                    )}
                  </td>
                  <td className="record-actions-cell">
                    <button
                      className="dots-button"
                      aria-label="Acciones del registro"
                      onClick={() =>
                        setMenuOpen(menuOpen === record.id ? null : record.id)
                      }
                    >
                      <Icon name="dots" size={19} />
                    </button>
                    {menuOpen === record.id && (
                      <RecordActionsMenu
                        onEdit={() => {
                          setEditing(record)
                          setMenuOpen(null)
                        }}
                        onAnnul={() => {
                          setAnnulling(record)
                          setMenuOpen(null)
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
              {!records.length && (
                <tr>
                  <td colSpan={6}>Aún no hay compras registradas.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {editing && (
        <LotMovementModal
          kind="Compra"
          available={0}
          movement={editing}
          onClose={() => setEditing(null)}
          onSave={(updated) => {
            onChange(
              records.map((item) => (item.id === updated.id ? updated : item)),
            )
            setEditing(null)
          }}
        />
      )}
      {annulling && (
        <AnnulRecordDialog
          onClose={() => setAnnulling(null)}
          onConfirm={(annulReason) => {
            onChange(
              records.map((item) =>
                item.id === annulling.id
                  ? { ...item, annulled: true, annulReason }
                  : item,
              ),
            )
            setAnnulling(null)
          }}
        />
      )}
    </div>
  )
}

function SalesTab({
  records,
  available,
  onChange,
}: {
  records: LotMovement[]
  available: number
  onChange: (records: LotMovement[]) => void
}) {
  const activeRecords = records.filter((record) => !record.annulled)
  const animals = activeRecords.reduce(
    (total, record) => total + record.females + record.males,
    0,
  )
  const totalWeight = activeRecords.reduce(
    (total, record) => total + record.totalWeight,
    0,
  )
  const totalValue = activeRecords.reduce(
    (total, record) => total + (record.value ?? 0),
    0,
  )
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editing, setEditing] = useState<LotMovement | null>(null)
  const [annulling, setAnnulling] = useState<LotMovement | null>(null)
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Animales vendidos</span>
          <strong>{animals} animales</strong>
          <p>animales vendidos</p>
        </div>
        <div>
          <span>Peso vendido</span>
          <strong>{formatDecimal(totalWeight)} kg</strong>
          <p>peso total</p>
        </div>
        <div>
          <span>Total ventas</span>
          <strong>$ {totalValue.toLocaleString("es-CO")}</strong>
          <p>ingresos del lote</p>
        </div>
      </div>
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Historial de ventas</h2>
            <p>Movimientos comerciales del lote</p>
          </div>
        </div>
        <div className="table-wrap borderless">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Comprador</th>
                <th>Animales</th>
                <th>Peso total (kg)</th>
                <th>Valor/kg</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr
                  className={record.annulled ? "record-annulled" : ""}
                  key={record.id}
                >
                  <td>{record.date}</td>
                  <td>{record.party}</td>
                  <td>
                    {countLabel(
                      record.females + record.males,
                      "animal",
                      "animales",
                    )}
                  </td>
                  <td>{formatDecimal(record.totalWeight)} kg</td>
                  <td>
                    {record.value
                      ? `$ ${Math.round(
                          record.value / record.totalWeight,
                        ).toLocaleString("es-CO")}/kg`
                      : "Sin registrar"}
                  </td>
                  <td>
                    {record.value
                      ? `$ ${record.value.toLocaleString("es-CO")}`
                      : "Sin registrar"}
                    {record.annulled && (
                      <span className="status neutral">Anulado</span>
                    )}
                  </td>
                  <td className="record-actions-cell">
                    <button
                      className="dots-button"
                      aria-label="Acciones del registro"
                      onClick={() =>
                        setMenuOpen(menuOpen === record.id ? null : record.id)
                      }
                    >
                      <Icon name="dots" size={19} />
                    </button>
                    {menuOpen === record.id && (
                      <RecordActionsMenu
                        onEdit={() => {
                          setEditing(record)
                          setMenuOpen(null)
                        }}
                        onAnnul={() => {
                          setAnnulling(record)
                          setMenuOpen(null)
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
              {!records.length && (
                <tr>
                  <td colSpan={7}>Aún no hay ventas registradas.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-section-card liquidation-card">
        <div className="card-section-title">
          <div>
            <h2>Liquidación del lote</h2>
            <p>Disponible cuando finalices el lote</p>
          </div>
        </div>
      </section>
      {editing && (
        <LotMovementModal
          kind="Venta"
          available={available + editing.females + editing.males}
          movement={editing}
          onClose={() => setEditing(null)}
          onSave={(updated) => {
            onChange(
              records.map((item) => (item.id === updated.id ? updated : item)),
            )
            setEditing(null)
          }}
        />
      )}
      {annulling && (
        <AnnulRecordDialog
          onClose={() => setAnnulling(null)}
          onConfirm={(annulReason) => {
            onChange(
              records.map((item) =>
                item.id === annulling.id
                  ? { ...item, annulled: true, annulReason }
                  : item,
              ),
            )
            setAnnulling(null)
          }}
        />
      )}
    </div>
  )
}

function ConsumptionTab({ records }: { records: LotConsumption[] }) {
  const total = records.reduce((sum, record) => sum + record.quantity, 0)
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Consumo acumulado</span>
          <strong>{formatDecimal(total)} kg</strong>
          <p>alimento registrado</p>
        </div>
        <div>
          <span>Registros</span>
          <strong>{records.length}</strong>
          <p>en este lote</p>
        </div>
        <div>
          <span>Último registro</span>
          <strong>{records[0]?.date ?? "Sin registros"}</strong>
          <p>{records[0]?.feed ?? "Aún no hay consumo"}</p>
        </div>
      </div>
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Historial de consumo</h2>
            <p>Alimento suministrado al lote</p>
          </div>
        </div>
        {records.length ? (
          <div className="table-wrap borderless">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Alimento</th>
                  <th>Cantidad</th>
                  <th>Responsable</th>
                  <th>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>
                      <strong>{record.feed}</strong>
                    </td>
                    <td>{formatDecimal(record.quantity)} kg</td>
                    <td>{record.responsible}</td>
                    <td>{record.notes || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="inline-empty records-empty">
            Aún no hay registros de consumo para este lote.
          </div>
        )}
      </section>
    </div>
  )
}

function ConsumptionModal({
  onClose,
  onSave,
}: {
  onClose: () => void
  onSave: (record: LotConsumption) => void
}) {
  const [form, setForm] = useState({
    date: TODAY_ISO,
    feed: "",
    quantity: "",
    responsible: CONNECTED_USER,
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const quantity = parseColombianNumber(form.quantity)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      !form.feed.trim() ||
      quantity <= 0 ||
      !form.responsible.trim()
    ) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    onSave({
      id: Date.now(),
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      feed: form.feed.trim(),
      quantity,
      responsible: form.responsible.trim(),
      notes: form.notes.trim(),
    })
  }
  return (
    <DialogShell title="Registrar consumo" onClose={onClose}>
      <form onSubmit={submit}>
        <div className="form-content">
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                max={TODAY_ISO}
                onChange={(date) => setForm({ ...form, date })}
                label="Seleccionar fecha de consumo"
              />
            </label>
            <label
              className={`field ${
                submitted && !form.feed.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Alimento <em>* obligatorio</em>
              </span>
              <input
                value={form.feed}
                onChange={(event) =>
                  setForm({ ...form, feed: event.target.value })
                }
                placeholder="Ej. Concentrado iniciación"
              />
            </label>
            <label
              className={`field ${
                submitted && quantity <= 0 ? "has-error" : ""
              }`}
            >
              <span>
                Cantidad (kg) <em>* obligatorio</em>
              </span>
              <ColombianNumberInput
                value={form.quantity}
                onChange={(quantityValue) =>
                  setForm({ ...form, quantity: quantityValue })
                }
                placeholder="Ej. 250"
                ariaInvalid={submitted && quantity <= 0}
              />
            </label>
            <label
              className={`field ${
                submitted && !form.responsible.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
              />
            </label>
          </div>
          <label className="field">
            <span>Observaciones</span>
            <textarea
              value={form.notes}
              onChange={(event) =>
                setForm({ ...form, notes: event.target.value })
              }
              placeholder="Información adicional"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar consumo
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function MovementsTab({ records }: { records: LotTransfer[] }) {
  return (
    <div className="tab-panel">
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Movimientos del lote</h2>
            <p>Traslados y migraciones registrados como entradas y salidas</p>
          </div>
        </div>
        {records.length ? (
          <div className="table-wrap borderless">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Movimiento</th>
                  <th>Lote relacionado</th>
                  <th>Animales</th>
                  <th>H / M</th>
                  <th>Motivo</th>
                  <th>Peso promedio</th>
                  <th>Peso total</th>
                  <th>Responsable</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>
                      <span
                        className={`status ${
                          record.direction === "Entrada"
                            ? "positive"
                            : "neutral"
                        }`}
                      >
                        {record.kind ?? "Migración"} · {record.direction}
                      </span>
                    </td>
                    <td>
                      <strong>{record.otherLot}</strong>
                    </td>
                    <td>{record.animals}</td>
                    <td>
                      {record.females} / {record.males}
                    </td>
                    <td>{record.reason || record.notes || "—"}</td>
                    <td>{formatDecimal(record.averageWeight)} kg</td>
                    <td>{formatDecimal(record.totalWeight)} kg</td>
                    <td>{record.responsible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="inline-empty records-empty">
            Este lote todavía no tiene movimientos registrados.
          </div>
        )}
      </section>
    </div>
  )
}

type LotTransferDraft = {
  destinationLotId: number
  date: string
  females: number
  males: number
  reason: string
}

function TransferLotDialog({
  lot,
  destinationLots,
  onClose,
  onConfirm,
}: {
  lot: Lot
  destinationLots: Lot[]
  onClose: () => void
  onConfirm: (draft: LotTransferDraft) => void
}) {
  const figures = calculateLotFigures(lot)
  const [destinationLotId, setDestinationLotId] = useState(
    String(destinationLots[0]?.id ?? ""),
  )
  const [date, setDate] = useState(TODAY_ISO)
  const [females, setFemales] = useState("")
  const [males, setMales] = useState("")
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const femaleCount = Math.floor(parseColombianNumber(females))
  const maleCount = Math.floor(parseColombianNumber(males))
  const animals = femaleCount + maleCount
  const exceedsAvailable =
    femaleCount > figures.currentFemales ||
    maleCount > figures.currentMales ||
    animals > figures.currentAnimals
  const invalid =
    !destinationLotId ||
    !date ||
    femaleCount < 0 ||
    maleCount < 0 ||
    animals <= 0 ||
    exceedsAvailable ||
    !reason.trim()

  return (
    <DialogShell title="Registrar traslado" onClose={onClose}>
      <form
        className="migration-form"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (invalid) return
          onConfirm({
            destinationLotId: Number(destinationLotId),
            date,
            females: femaleCount,
            males: maleCount,
            reason: reason.trim(),
          })
        }}
      >
        <div className="migration-form-body">
          <div className="migration-available">
            <span>Disponibles en {lot.code}</span>
            <strong>{figures.currentAnimals} animales</strong>
            <small>
              {figures.currentFemales} hembras · {figures.currentMales} machos
            </small>
          </div>
          <label
            className={`field ${
              submitted && !destinationLotId ? "has-error" : ""
            }`}
          >
            <span>
              Lote destino <em>* obligatorio</em>
            </span>
            <select
              value={destinationLotId}
              onChange={(event) => setDestinationLotId(event.target.value)}
            >
              {destinationLots.map((destination) => (
                <option value={destination.id} key={destination.id}>
                  {destination.code} ·{" "}
                  {calculateLotFigures(destination).currentAnimals} animales
                </option>
              ))}
            </select>
            <small>Mismo ciclo: {lot.cycle}</small>
          </label>
          <div className="migration-grid">
            <label className={`field ${submitted && !date ? "has-error" : ""}`}>
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={date}
                max={TODAY_ISO}
                onChange={setDate}
                label="Seleccionar fecha del traslado"
              />
            </label>
            <div />
            <label
              className={`field ${
                submitted &&
                (femaleCount < 0 || femaleCount > figures.currentFemales)
                  ? "has-error"
                  : ""
              }`}
            >
              <span>
                Hembras <em>* obligatorio</em>
              </span>
              <input
                inputMode="numeric"
                min="0"
                value={females}
                onChange={(event) => setFemales(event.target.value)}
                placeholder="0"
              />
            </label>
            <label
              className={`field ${
                submitted && (maleCount < 0 || maleCount > figures.currentMales)
                  ? "has-error"
                  : ""
              }`}
            >
              <span>
                Machos <em>* obligatorio</em>
              </span>
              <input
                inputMode="numeric"
                min="0"
                value={males}
                onChange={(event) => setMales(event.target.value)}
                placeholder="0"
              />
            </label>
          </div>
          {submitted && (animals <= 0 || exceedsAvailable) && (
            <small className="migration-error">
              <Icon name="alert" size={14} />
              Indica al menos un animal sin superar las hembras o machos
              disponibles.
            </small>
          )}
          <label
            className={`field ${
              submitted && !reason.trim() ? "has-error" : ""
            }`}
          >
            <span>
              Motivo <em>* obligatorio</em>
            </span>
            <textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder="Ej. Redistribución por capacidad del corral"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="button primary">
            Registrar traslado
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type MigrationDraft = {
  date: string
  females: number
  males: number
  averageWeight: number
  totalWeight: number
  destination: "existing" | "new"
  destinationLotId?: number
  newLotCode?: string
  targetWeight?: number
  notes: string
}

function MigrateLotDialog({
  lot,
  destinationLots,
  existingLotCodes,
  onClose,
  onConfirm,
}: {
  lot: Lot
  destinationLots: Lot[]
  existingLotCodes: string[]
  onClose: () => void
  onConfirm: (draft: MigrationDraft) => void
}) {
  const [date, setDate] = useState(TODAY_ISO)
  const [females, setFemales] = useState("")
  const [males, setMales] = useState("")
  const [averageWeight, setAverageWeight] = useState(
    formatDecimal(lot.averageWeight),
  )
  const [totalWeight, setTotalWeight] = useState("")
  const [destination, setDestination] = useState<"existing" | "new">(
    destinationLots.length ? "existing" : "new",
  )
  const [destinationLotId, setDestinationLotId] = useState(
    destinationLots[0]?.id ? String(destinationLots[0].id) : "",
  )
  const [newLotCode, setNewLotCode] = useState("")
  const [targetWeight, setTargetWeight] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const figures = calculateLotFigures(lot)
  const femaleCount = Math.floor(parseColombianNumber(females))
  const maleCount = Math.floor(parseColombianNumber(males))
  const animals = femaleCount + maleCount
  const average = parseColombianNumber(averageWeight)
  const total = parseColombianNumber(totalWeight)
  const tooMany =
    animals > figures.currentAnimals ||
    femaleCount > figures.currentFemales ||
    maleCount > figures.currentMales
  const duplicateCode = existingLotCodes.some(
    (code) =>
      code.toLocaleLowerCase() === newLotCode.trim().toLocaleLowerCase(),
  )
  const invalid =
    !date ||
    !females ||
    !males ||
    femaleCount < 0 ||
    maleCount < 0 ||
    animals <= 0 ||
    tooMany ||
    average <= 0 ||
    total <= 0 ||
    (destination === "existing" && !destinationLotId) ||
    (destination === "new" &&
      (!newLotCode.trim() ||
        duplicateCode ||
        parseColombianNumber(targetWeight) <= 0))
  const updateAnimals = (nextFemales: string, nextMales: string) => {
    const nextAnimals =
      Math.floor(parseColombianNumber(nextFemales)) +
      Math.floor(parseColombianNumber(nextMales))
    setFemales(nextFemales)
    setMales(nextMales)
    if (average > 0 && nextAnimals > 0) {
      setTotalWeight(formatDecimal(average * nextAnimals))
    }
  }
  return (
    <DialogShell title="Migrar a Levante" onClose={onClose}>
      <form
        className="migration-form"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (invalid) return
          onConfirm({
            date,
            females: femaleCount,
            males: maleCount,
            averageWeight: average,
            totalWeight: total,
            destination,
            destinationLotId:
              destination === "existing" ? Number(destinationLotId) : undefined,
            newLotCode: destination === "new" ? newLotCode.trim() : undefined,
            targetWeight:
              destination === "new"
                ? parseColombianNumber(targetWeight)
                : undefined,
            notes: notes.trim(),
          })
        }}
      >
        <div className="migration-form-body">
          <div className="migration-available">
            <span>Disponibles en {lot.code}</span>
            <strong>{figures.currentAnimals} animales</strong>
            <small>
              {figures.currentFemales} hembras · {figures.currentMales} machos
            </small>
          </div>
          <div className="migration-grid">
            <label className="field">
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={date}
                max={TODAY_ISO}
                onChange={setDate}
                label="Seleccionar fecha de migración"
              />
            </label>
            <div />
            <label
              className={`field ${
                submitted && (!females || femaleCount > figures.currentFemales)
                  ? "has-error"
                  : ""
              }`}
            >
              <span>
                Hembras <em>* obligatorio</em>
              </span>
              <input
                inputMode="numeric"
                value={females}
                onChange={(event) => updateAnimals(event.target.value, males)}
                placeholder="0"
              />
            </label>
            <label
              className={`field ${
                submitted && (!males || maleCount > figures.currentMales)
                  ? "has-error"
                  : ""
              }`}
            >
              <span>
                Machos <em>* obligatorio</em>
              </span>
              <input
                inputMode="numeric"
                value={males}
                onChange={(event) => updateAnimals(females, event.target.value)}
                placeholder="0"
              />
            </label>
          </div>
          {submitted &&
            (animals <= 0 || femaleCount < 0 || maleCount < 0 || tooMany) && (
              <small className="migration-error">
                <Icon name="alert" size={14} />
                La suma debe ser mayor que 0 y no puede superar los animales
                disponibles.
              </small>
            )}
          <div className="migration-grid">
            <label className="field">
              <span>Peso promedio (kg)</span>
              <input
                inputMode="decimal"
                value={averageWeight}
                onChange={(event) => {
                  const value = event.target.value
                  setAverageWeight(value)
                  const nextAverage = parseColombianNumber(value)
                  if (nextAverage > 0 && animals > 0) {
                    setTotalWeight(formatDecimal(nextAverage * animals))
                  }
                }}
              />
            </label>
            <label className="field">
              <span>Peso total (kg)</span>
              <input
                inputMode="decimal"
                value={totalWeight}
                onChange={(event) => {
                  const value = event.target.value
                  setTotalWeight(value)
                  const nextTotal = parseColombianNumber(value)
                  if (nextTotal > 0 && animals > 0) {
                    setAverageWeight(formatDecimal(nextTotal / animals))
                  }
                }}
                placeholder="0"
              />
            </label>
          </div>
          <fieldset className="migration-destination">
            <legend>Destino</legend>
            <div className="migration-destination-options">
              <label>
                <input
                  type="radio"
                  checked={destination === "existing"}
                  disabled={!destinationLots.length}
                  onChange={() => setDestination("existing")}
                />
                Lote existente
              </label>
              <label>
                <input
                  type="radio"
                  checked={destination === "new"}
                  onChange={() => setDestination("new")}
                />
                Nuevo lote en Levante
              </label>
            </div>
            {destination === "existing" ? (
              <label className="field">
                <span>Lote de Levante</span>
                <select
                  value={destinationLotId}
                  onChange={(event) => setDestinationLotId(event.target.value)}
                >
                  {destinationLots.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.code} · {calculateLotFigures(item).currentAnimals}{" "}
                      animales
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <div className="migration-grid">
                <label
                  className={`field ${
                    submitted && (!newLotCode.trim() || duplicateCode)
                      ? "has-error"
                      : ""
                  }`}
                >
                  <span>Nombre del lote</span>
                  <input
                    value={newLotCode}
                    onChange={(event) => setNewLotCode(event.target.value)}
                    placeholder="Ej. LV-2026-09"
                  />
                  {submitted && duplicateCode && (
                    <small>Ya existe un lote con este nombre.</small>
                  )}
                </label>
                <label
                  className={`field ${
                    submitted && parseColombianNumber(targetWeight) <= 0
                      ? "has-error"
                      : ""
                  }`}
                >
                  <span>Peso objetivo (kg)</span>
                  <input
                    inputMode="decimal"
                    value={targetWeight}
                    onChange={(event) => setTargetWeight(event.target.value)}
                    placeholder="110"
                  />
                </label>
              </div>
            )}
          </fieldset>
          <label className="field">
            <span>Notas</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Información adicional de la migración"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Confirmar migración
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function FinishLotDialog({
  lot,
  onClose,
  onConfirm,
}: {
  lot: Lot
  onClose: () => void
  onConfirm: (date: string) => void
}) {
  const [date, setDate] = useState(TODAY_ISO)
  const [submitted, setSubmitted] = useState(false)
  const figures = calculateLotFigures(lot)
  return (
    <DialogShell title="Finalizar lote" onClose={onClose} size="small">
      <div className="finish-lot-content">
        <span className="finish-lot-icon">
          <Icon name="check" size={22} />
        </span>
        <div>
          <h3>Finalizar {lot.code}</h3>
          <p>
            El lote quedará en modo de consulta. No podrás registrar nuevos
            eventos, pero conservarás todo su historial.
          </p>
        </div>
        <div className="finish-summary">
          <div>
            <span>Animales actuales</span>
            <strong>{figures.currentAnimals}</strong>
          </div>
          <div>
            <span>Vendidos</span>
            <strong>{figures.soldAnimals}</strong>
          </div>
          <div>
            <span>Mortalidad final</span>
            <strong>{figures.mortalityAnimals}</strong>
          </div>
        </div>
        <label className={`field ${submitted && !date ? "has-error" : ""}`}>
          <span>
            Fecha de finalización <em>* obligatorio</em>
          </span>
          <DatePicker
            value={date}
            onChange={setDate}
            max={TODAY_ISO}
            label="Seleccionar fecha de finalización"
          />
          {submitted && !date && (
            <small>
              <Icon name="alert" size={14} />
              Selecciona la fecha de finalización
            </small>
          )}
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button primary"
          onClick={() => {
            setSubmitted(true)
            if (date) onConfirm(date)
          }}
        >
          Finalizar lote
        </button>
      </div>
    </DialogShell>
  )
}

function DeleteLotDialog({
  lot,
  onClose,
  onConfirm,
}: {
  lot: Lot
  onClose: () => void
  onConfirm: () => void
}) {
  const [code, setCode] = useState("")
  return (
    <DialogShell title="Eliminar lote" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se eliminarán permanentemente el lote, todos sus registros
          productivos, sanitarios, compras, ventas y su liquidación. Esta acción
          no se puede deshacer.
        </p>
        <label className="field">
          <span>
            Escribe <strong>{lot.code}</strong> para confirmar
          </span>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={lot.code}
          />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button danger"
          disabled={code !== lot.code}
          onClick={onConfirm}
        >
          Eliminar lote
        </button>
      </div>
    </DialogShell>
  )
}

function LotDetail({
  lot,
  farmName,
  destinationLots,
  onBack,
  onUpdate,
  onTransfer,
  onDelete,
  onNotice,
  existingCodes,
}: {
  lot: Lot
  farmName: string
  destinationLots: Lot[]
  onBack: () => void
  onUpdate: (lot: Lot) => void
  onTransfer: (source: Lot, draft: LotTransferDraft) => void
  onDelete: () => void
  onNotice: (text: string) => void
  existingCodes: string[]
}) {
  const [tab, setTab] = useState<LotTab>("Resumen")
  const [menuOpen, setMenuOpen] = useState(false)
  const [mortalityModal, setMortalityModal] = useState(false)
  const [treatmentModal, setTreatmentModal] = useState(false)
  const [consumptionModal, setConsumptionModal] = useState(false)
  const [purchaseModal, setPurchaseModal] = useState(false)
  const [saleModal, setSaleModal] = useState(false)
  const [transferModal, setTransferModal] = useState(false)
  const [finishOpen, setFinishOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [undoFinishedLot, setUndoFinishedLot] = useState<Lot | null>(null)
  useEffect(() => {
    if (!undoFinishedLot) return
    const timer = window.setTimeout(() => setUndoFinishedLot(null), 5000)
    return () => window.clearTimeout(timer)
  }, [undoFinishedLot])
  const metrics = calculateLotFigures(lot)
  const [treatments, setTreatments] = useState<Treatment[]>([
    {
      id: 1,
      name: "Vacuna Mycoplasma",
      date: "10/03/2026",
      method: "Intramuscular",
      overdue: true,
      status: "Programado",
    },
    {
      id: 2,
      name: "Refuerzo vacuna Circovirus",
      date: "14/03/2026",
      method: "Intramuscular",
      overdue: true,
      status: "Programado",
    },
    {
      id: 3,
      name: "Desparasitación interna",
      date: "16/03/2026",
      method: "Oral",
      overdue: false,
      status: "Programado",
    },
  ])
  const action: Partial<Record<LotTab, TabAction>> = {
    Mortalidad: {
      label: "Registrar mortalidad",
      run: () => setMortalityModal(true),
    },
    Sanidad: {
      label: "Registrar tratamiento",
      run: () => setTreatmentModal(true),
    },
    Consumo: {
      label: "Registrar consumo",
      run: () => setConsumptionModal(true),
    },
    Compras: {
      label: "Registrar compra",
      run: () => setPurchaseModal(true),
    },
    Ventas: {
      label: "Registrar venta",
      run: () => setSaleModal(true),
    },
    Movimientos: {
      label: "Registrar traslado",
      run: () => setTransferModal(true),
    },
  }
  const currentAction = action[tab]
  const actionDisabled =
    lot.status === "Finalizado" ||
    (tab === "Movimientos" &&
      (metrics.currentAnimals === 0 || destinationLots.length === 0)) ||
    ((tab === "Mortalidad" || tab === "Sanidad") &&
      metrics.currentAnimals === 0)
  const disabledReason =
    lot.status === "Finalizado"
      ? "Este lote está finalizado y es solo de consulta"
      : tab === "Movimientos" && destinationLots.length === 0
        ? `No hay otro lote activo de ${lot.cycle} disponible`
        : metrics.currentAnimals === 0
          ? "Este lote no tiene animales disponibles"
          : ""
  return (
    <>
      <LotDetailHeader
        lot={lot}
        farmName={farmName}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen(!menuOpen)}
        onBack={onBack}
        onEdit={() => {
          setMenuOpen(false)
          setEditOpen(true)
        }}
        onFinish={() => {
          setMenuOpen(false)
          setFinishOpen(true)
        }}
        onDelete={() => {
          setMenuOpen(false)
          setDeleteOpen(true)
        }}
        primaryAction={currentAction}
        actionDisabled={actionDisabled}
        disabledReason={disabledReason}
      />
      <div className="lot-tabs-wrap">
        <nav className="lot-tabs" aria-label="Secciones del lote">
          {lotTabs.map((item) => (
            <button
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      {tab !== "Resumen" && (
        <div className="tab-action-row">
          <div>
            <h2>{tab}</h2>
            <p>Registros del lote {lot.code}</p>
          </div>
        </div>
      )}
      {tab === "Resumen" && (
        <SummaryTab lot={lot} onEdit={() => setEditOpen(true)} />
      )}
      {tab === "Mortalidad" && (
        <MortalityTab
          lot={lot}
          records={lot.mortalityRecords}
          onChange={(mortalityRecords) =>
            onUpdate({ ...lot, mortalityRecords })
          }
        />
      )}
      {tab === "Sanidad" && (
        <HealthTab
          lot={lot}
          treatments={treatments}
          setTreatments={setTreatments}
          readOnly={lot.status === "Finalizado"}
          onNotice={onNotice}
        />
      )}
      {tab === "Consumo" && (
        <ConsumptionTab records={lot.consumptionRecords ?? []} />
      )}
      {tab === "Compras" && (
        <PurchasesTab
          records={lot.purchaseRecords}
          onChange={(purchaseRecords) => onUpdate({ ...lot, purchaseRecords })}
        />
      )}
      {tab === "Ventas" && (
        <SalesTab
          records={lot.saleRecords}
          available={metrics.currentAnimals}
          onChange={(saleRecords) => onUpdate({ ...lot, saleRecords })}
        />
      )}
      {tab === "Movimientos" && (
        <MovementsTab records={lot.transferRecords ?? []} />
      )}
      {mortalityModal && (
        <MortalityModal
          available={metrics.currentAnimals}
          onClose={() => setMortalityModal(false)}
          onSave={(record) => {
            onUpdate({
              ...lot,
              mortalityRecords: [record, ...lot.mortalityRecords],
            })
            setMortalityModal(false)
            onNotice("Mortalidad registrada")
          }}
        />
      )}
      {treatmentModal && (
        <TreatmentModal
          lot={lot}
          onClose={() => setTreatmentModal(false)}
          onSave={(treatment) => {
            setTreatments([treatment, ...treatments])
            setTreatmentModal(false)
            onNotice("Tratamiento registrado")
          }}
        />
      )}
      {consumptionModal && (
        <ConsumptionModal
          onClose={() => setConsumptionModal(false)}
          onSave={(record) => {
            onUpdate({
              ...lot,
              consumptionRecords: [record, ...(lot.consumptionRecords ?? [])],
            })
            setConsumptionModal(false)
            onNotice("Consumo registrado")
          }}
        />
      )}
      {purchaseModal && (
        <LotMovementModal
          kind="Compra"
          available={metrics.currentAnimals}
          onClose={() => setPurchaseModal(false)}
          onSave={(movement) => {
            onUpdate({
              ...lot,
              purchaseRecords: [movement, ...lot.purchaseRecords],
            })
            setPurchaseModal(false)
            onNotice("Compra registrada")
          }}
        />
      )}
      {saleModal && (
        <LotMovementModal
          kind="Venta"
          available={metrics.currentAnimals}
          onClose={() => setSaleModal(false)}
          onSave={(movement) => {
            onUpdate({
              ...lot,
              saleRecords: [movement, ...lot.saleRecords],
            })
            setSaleModal(false)
            onNotice("Venta registrada")
          }}
        />
      )}
      {transferModal && (
        <TransferLotDialog
          lot={lot}
          destinationLots={destinationLots}
          onClose={() => setTransferModal(false)}
          onConfirm={(draft) => {
            onTransfer(lot, draft)
            setTransferModal(false)
          }}
        />
      )}
      {deleteOpen && (
        <DeleteLotDialog
          lot={lot}
          onClose={() => setDeleteOpen(false)}
          onConfirm={onDelete}
        />
      )}
      {finishOpen && (
        <FinishLotDialog
          lot={lot}
          onClose={() => setFinishOpen(false)}
          onConfirm={(closedDate) => {
            setUndoFinishedLot(lot)
            onUpdate({ ...lot, status: "Finalizado", closedDate })
            setFinishOpen(false)
          }}
        />
      )}
      {editOpen && (
        <CreateLotModal
          cycle={lot.cycle}
          lot={lot}
          existingCodes={existingCodes}
          onClose={() => setEditOpen(false)}
          onSave={(draft) => {
            onUpdate(updateLotFromDraft(lot, draft))
            setEditOpen(false)
            onNotice("Lote actualizado")
          }}
        />
      )}
      {undoFinishedLot && (
        <div className="toast undo-toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          Lote finalizado
          <button
            onClick={() => {
              onUpdate(undoFinishedLot)
              setUndoFinishedLot(null)
            }}
          >
            Deshacer
          </button>
        </div>
      )}
    </>
  )
}

type SowStage = "Gestación" | "Lactancia" | "Vacía" | "Reemplazo"
type SowRecordStatus = "Activas" | "Pendiente de venta" | "Fallecidas" | "Descartadas" | "Transferidas" | "Eliminadas"
type Sow = {
  id: number
  number: string
  stage: SowStage
  recordStatus: SowRecordStatus
  band: number
  daysInStatus: number
  probableFarrowing?: string
  piglets?: number
  weightKg?: number
  parity: number
  attention?: "overdue" | "vaccine"
  withdrawalDate?: string
  withdrawalReason?: string
  withdrawalBy?: string
}

type BreedingEventType = "Servicio y celo" | "Gestación" | "Parto y lactancia" | "Destete" | "Peso y condición corporal"

type SowEvent = {
  id: number
  sowId: number
  type: BreedingEventType
  date: string
  responsible: string
  detail: string
}

type SowVaccine = {
  id: number
  name: string
  date: string
  overdue: boolean
}

type SowHealthChange = {
  id: number
  sowId: number
  vaccineId: number
  vaccineName: string
  action: "Omitida" | "Aplazada"
  previousDate: string
  date: string
  reason?: string
}

const initialSowVaccines: SowVaccine[] = [
  { id: 1, name: "Parvovirus", date: "16/03/2026", overdue: true },
  { id: 2, name: "Leptospira", date: "14/03/2026", overdue: true },
  { id: 3, name: "Erisipela", date: "12/03/2026", overdue: true },
]

const sowStages: SowStage[] = ["Gestación", "Lactancia", "Vacía", "Reemplazo"]
const sowRecordStatuses: SowRecordStatus[] = [
  "Activas",
  "Pendiente de venta",
  "Fallecidas",
  "Descartadas",
  "Transferidas",
  "Eliminadas",
]

const initialSows: Sow[] = Array.from({ length: 26 }, (_, index) => {
  const stage: SowStage =
    index < 10
      ? "Gestación"
      : index < 17
        ? "Lactancia"
        : index < 22
          ? "Vacía"
          : "Reemplazo"
  return {
    id: 1304 + index,
    number: `#${1304 + index}`,
    stage,
    recordStatus: "Activas",
    band: 37 + (index % 4),
    daysInStatus:
      stage === "Gestación"
        ? 94 + index * 2
        : stage === "Lactancia"
          ? 4 + (index % 7)
          : stage === "Vacía"
            ? 3 + (index % 8)
            : 210 + (index - 22) * 7,
    probableFarrowing:
      stage === "Gestación"
        ? index === 0
          ? "14/03/2026"
          : `${String(15 - (index % 9)).padStart(2, "0")}/03/2026`
        : undefined,
    piglets: stage === "Lactancia" ? 10 + (index % 4) : undefined,
    weightKg: stage === "Reemplazo" ? 135 + (index - 22) * 4 : undefined,
    parity: 1 + (index % 6),
    attention: index === 0 ? "overdue" : index === 1 ? "vaccine" : undefined,
  }
})

const initialInactiveSows: Sow[] = [
  {
    ...initialSows[4],
    id: 1401,
    number: "#1289",
    recordStatus: "Fallecidas",
    withdrawalDate: "2026-03-12",
    withdrawalReason: "Mortalidad",
    withdrawalBy: "Andrés Mejía",
    attention: undefined,
  },
  {
    ...initialSows[12],
    id: 1402,
    number: "#1264",
    recordStatus: "Descartadas",
    withdrawalDate: "2026-03-10",
    withdrawalReason: "Descarte productivo",
    withdrawalBy: "Laura Gómez",
    attention: undefined,
  },
  {
    ...initialSows[19],
    id: 1403,
    number: "#1247",
    recordStatus: "Pendiente de venta",
    withdrawalDate: "2026-03-14",
    withdrawalReason: "Marcada para descarte",
    withdrawalBy: "Andrés Mejía",
    attention: undefined,
  },
  {
    ...initialSows[22],
    id: 1404,
    number: "#1218",
    recordStatus: "Transferidas",
    withdrawalDate: "2026-03-08",
    withdrawalReason: "Transferencia a otra granja",
    withdrawalBy: "Laura Gómez",
    attention: undefined,
  },
  {
    ...initialSows[18],
    id: 1405,
    number: "#1196",
    recordStatus: "Eliminadas",
    withdrawalDate: "2026-03-05",
    withdrawalReason: "Registro duplicado",
    withdrawalBy: "Andrés Mejía",
    attention: undefined,
  },
]

type BreedingAlert = {
  id: number
  sowNumber: string
  type: "parto" | "vacuna" | "servicio"
  title: string
  detail: string
  urgency: number
}

const initialBreedingAlerts: BreedingAlert[] = [
  {
    id: 1,
    sowNumber: "#1304",
    type: "parto",
    title: "Parto atrasado",
    detail: "Fecha probable de parto: 14/03/2026 · 2 días de atraso",
    urgency: 1,
  },
  {
    id: 2,
    sowNumber: "#1305",
    type: "vacuna",
    title: "Vacuna vencida",
    detail: "Refuerzo de parvovirus vencido ayer",
    urgency: 2,
  },
  {
    id: 3,
    sowNumber: "#1322",
    type: "servicio",
    title: "Servicio pendiente",
    detail: "Celo detectado · atender antes de las 16:00",
    urgency: 3,
  },
]

function TermInfo({
  abbreviation,
  meaning,
}: {
  abbreviation: string
  meaning: string
}) {
  const label = `${abbreviation}: ${meaning}`
  return (
    <span className="term-info">
      <span>{abbreviation}</span>
      <button
        type="button"
        className="term-info-button"
        aria-label={label}
        data-tooltip={label}
        onClick={(event) => event.stopPropagation()}
      >
        <Icon name="info" size={14} />
      </button>
    </span>
  )
}

type RegisterOption = {
  label: string
  icon: IconName
  action?: () => void
}

function RegisterMenu({
  sow,
  onClose,
  onEvent,
  onHealth,
  onNotice,
}: {
  sow: Sow | null
  onClose: () => void
  onEvent: (event: BreedingEventType) => void
  onHealth: () => void
  onNotice: (text: string) => void
}) {
  const options: RegisterOption[] = [
    {
      label: "Servicio y celo",
      icon: "heart",
      action: () => onEvent("Servicio y celo"),
    },
    {
      label: "Gestación",
      icon: "calendar",
      action: () => onEvent("Gestación"),
    },
    {
      label: "Parto y lactancia",
      icon: "baby",
      action: () => onEvent("Parto y lactancia"),
    },
    {
      label: "Destete",
      icon: "piglet",
      action: () => onEvent("Destete"),
    },
    { label: "Sanidad", icon: "syringe", action: onHealth },
    {
      label: "Peso y condición corporal",
      icon: "weight",
      action: () => onEvent("Peso y condición corporal"),
    },
  ]
  return (
    <div className="register-menu">
      <div className="register-menu-heading">
        <strong>Registrar evento</strong>
        <span>
          {sow ? `Cerda ${sow.number} seleccionada` : "Selecciona el momento"}
        </span>
      </div>
      <div className="register-options">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => {
              if (option.action) option.action()
              else onNotice(`${option.label}${sow ? ` · ${sow.number}` : ""}`)
              onClose()
            }}
          >
            <span>
              <Icon name={option.icon} size={19} />
            </span>
            {option.label}
            <Icon name="chevron" size={15} />
          </button>
        ))}
      </div>
    </div>
  )
}

function BreedingHeader({
  farmName,
  sowCount,
  alerts,
  bellOpen,
  setBellOpen,
  registerOpen,
  setRegisterOpen,
  registerMenu,
  onResolve,
}: {
  farmName: string
  sowCount: number
  alerts: BreedingAlert[]
  bellOpen: boolean
  setBellOpen: (value: boolean) => void
  registerOpen: boolean
  setRegisterOpen: (value: boolean) => void
  registerMenu: ReactNode
  onResolve: (alert: BreedingAlert) => void
}) {
  const bellRef = useDismissibleMenu(bellOpen, () => setBellOpen(false))
  const registerRef = useDismissibleMenu(registerOpen, () =>
    setRegisterOpen(false),
  )
  return (
    <header className="page-header breeding-header">
      <div>
        <div className="breadcrumbs">
          <span>Inicio</span>
          <Icon name="chevron" size={14} />
          <span>{farmName}</span>
          <Icon name="chevron" size={14} />
          <strong>Plantel reproductivo</strong>
        </div>
        <h1>Plantel reproductivo · {farmName}</h1>
        <p>
          {sowCount} cerdas activas ·{" "}
          {farmName === "Granja El Porvenir"
            ? "Bandas 41 a 43"
            : farmName === "Granja San José"
              ? "Bandas 45 a 47"
              : "Bandas 37 a 40"}
        </p>
      </div>
      <div className="header-actions breeding-actions">
        <div className="bell-wrap" ref={bellRef}>
          <button
            className="icon-button alert-bell"
            aria-label="Alertas del plantel"
            onClick={() => {
              setRegisterOpen(false)
              setBellOpen(!bellOpen)
            }}
          >
            <Icon name="bell" size={20} />
            {alerts.length > 0 && <span>{alerts.length}</span>}
          </button>
          {bellOpen && (
            <div className="alerts-popover">
              <div className="popover-heading">
                <strong>Alertas</strong>
                <span>Ordenadas por urgencia</span>
              </div>
              {alerts.length ? (
                alerts
                  .slice()
                  .sort((a, b) => a.urgency - b.urgency)
                  .map((alert) => (
                    <div className="popover-alert" key={alert.id}>
                      <span className={`alert-dot urgency-${alert.urgency}`} />
                      <div>
                        <strong>
                          {alert.sowNumber} · {alert.title}
                        </strong>
                        <p>{alert.detail}</p>
                        <button onClick={() => onResolve(alert)}>
                          Resolver ahora
                        </button>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="popover-empty">
                  No tienes alertas pendientes.
                </div>
              )}
            </div>
          )}
        </div>
        <div className="register-wrap" ref={registerRef}>
          <button
            className="button primary"
            onClick={() => {
              setBellOpen(false)
              setRegisterOpen(!registerOpen)
            }}
          >
            <Icon name="plus" size={18} />
            Registrar
          </button>
          {registerMenu}
        </div>
      </div>
    </header>
  )
}

function AttendToday({
  alerts,
  onAction,
}: {
  alerts: BreedingAlert[]
  onAction: (alert: BreedingAlert) => void
}) {
  if (!alerts.length) return null
  return (
    <section className="attend-today">
      <div className="attend-heading">
        <div>
          <span className="attend-icon">
            <Icon name="alert" size={18} />
          </span>
          <div>
            <h2>Atender hoy</h2>
            <p>
              {alerts.length === 1
                ? "1 acción requiere tu atención"
                : `${alerts.length} acciones requieren tu atención`}
            </p>
          </div>
        </div>
        <span className="status warning">Prioridad del día</span>
      </div>
      <div className="attend-list">
        {alerts
          .slice()
          .sort((a, b) => a.urgency - b.urgency)
          .map((alert) => (
            <div className="attend-row" key={alert.id}>
              <span className={`alert-dot urgency-${alert.urgency}`} />
              <strong>{alert.sowNumber}</strong>
              <div>
                <b>{alert.title}</b>
                <span>{alert.detail}</span>
              </div>
              <button
                className="button secondary"
                onClick={() => onAction(alert)}
              >
                {alert.type === "parto"
                  ? "Registrar parto"
                  : alert.type === "vacuna"
                    ? "Aplicar vacuna"
                    : "Registrar servicio"}
              </button>
            </div>
          ))}
      </div>
    </section>
  )
}

function SowMenu({
  onView,
  onHealth,
  onDiscard,
  onWithdrawal,
  onDelete,
}: {
  onView: () => void
  onHealth: () => void
  onDiscard: () => void
  onWithdrawal: () => void
  onDelete: () => void
}) {
  return (
    <div className="lot-menu sow-menu" role="menu">
      <button onClick={onView}>
        <Icon name="arrow" size={16} />
        Ver ficha
      </button>
      <div className="menu-divider" />
      <button onClick={onDiscard}>
        <Icon name="alert" size={16} />
        Marcar para descarte
      </button>
      <button onClick={onWithdrawal}>
        <Icon name="logout" size={16} />
        Registrar baja
      </button>
      <div className="menu-divider" />
      <button className="danger-menu-item" onClick={onDelete}>
        <Icon name="trash" size={16} />
        Eliminar
      </button>
    </div>
  )
}

function SowCard({
  sow,
  menuOpen,
  onMenu,
  onRegister,
  onHealth,
  onView,
  onDiscard,
  onWithdrawal,
  onDelete,
  alert,
}: {
  sow: Sow
  menuOpen: boolean
  onMenu: () => void
  onRegister: () => void
  onHealth: () => void
  onView: () => void
  onDiscard: () => void
  onWithdrawal: () => void
  onDelete: () => void
  alert?: BreedingAlert
}) {
  const delayed = sow.attention === "overdue"
  // Each segment stays on one line; the row wraps between segments when space is tight.
  const keyData =
    sow.stage === "Gestación" ? (
      <>
        <span>{countLabel(sow.daysInStatus, "día", "días")} ·</span>{" "}
        <span>
          <TermInfo abbreviation="FPP" meaning="fecha probable de parto" />{" "}
          <span className={delayed ? "overdue-date" : ""}>
            {sow.probableFarrowing}
          </span>
        </span>
      </>
    ) : sow.stage === "Lactancia" ? (
      <>
        <span>{countLabel(sow.daysInStatus, "día", "días")} ·</span>{" "}
        <span>{sow.piglets ?? 0} lechones</span>
      </>
    ) : sow.stage === "Vacía" ? (
      <span>{countLabel(sow.daysInStatus, "día", "días")} vacía</span>
    ) : (
      <>
        <span>{countLabel(sow.daysInStatus, "día", "días")} ·</span>{" "}
        <span>{sow.weightKg ?? 0} kg</span>
      </>
    )
  return (
    <article
      className="sow-card compact"
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as Element).closest("button, .sow-menu")) return
        onView()
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onView()
        }
      }}
    >
      <div className="sow-card-row sow-card-primary">
        <div className="sow-card-identity">
          <strong>{sow.number}</strong>
          <span>Banda {sow.band}</span>
        </div>
        <div className="sow-card-menu">
          {alert && (
            <span className={`sow-urgent sow-urgent-${alert.type}`}>
              {alert.title}
            </span>
          )}
          <button
            className="dots-button"
            aria-label={`Opciones de la cerda ${sow.number}`}
            aria-expanded={menuOpen}
            onClick={onMenu}
          >
            <Icon name="dots" size={20} />
          </button>
          {menuOpen && (
            <SowMenu
              onView={onView}
              onHealth={onHealth}
              onDiscard={onDiscard}
              onWithdrawal={onWithdrawal}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>
      <div className="sow-card-row sow-card-secondary">
        <span className="sow-key-data">{keyData}</span>
        <button className="sow-register-button" onClick={onRegister}>
          <Icon name="plus" size={15} />
          Registrar evento
        </button>
      </div>
    </article>
  )
}

function SowTable({
  sows,
  onView,
  inactive = false,
}: {
  sows: Sow[]
  onView: (sow: Sow) => void
  inactive?: boolean
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Número</th>
            {!inactive && <th>Etapa</th>}
            <th>Banda</th>
            {inactive ? (
              <>
                <th>Fecha de baja</th>
                <th>Motivo de baja</th>
                <th>Registró</th>
              </>
            ) : (
              <>
                <th>Días en etapa</th>
                <th>
                  <TermInfo
                    abbreviation="FPP"
                    meaning="fecha probable de parto"
                  />
                </th>
              </>
            )}
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {sows.map((sow) => (
            <tr key={sow.id}>
              <td>
                <strong>{sow.number}</strong>
              </td>
              {!inactive && (
                <td>
                  <span
                    className={`status ${
                      sow.attention === "overdue"
                        ? "critical"
                        : sow.attention === "vaccine"
                          ? "warning"
                          : "neutral"
                    }`}
                  >
                    {sow.stage}
                  </span>
                </td>
              )}
              <td>{sow.band}</td>
              {inactive ? (
                <>
                  <td>
                    {sow.withdrawalDate
                      ? formatDate(new Date(`${sow.withdrawalDate}T12:00:00`))
                      : "No aplica"}
                  </td>
                  <td>{sow.withdrawalReason ?? "No aplica"}</td>
                  <td>{sow.withdrawalBy ?? "No disponible"}</td>
                </>
              ) : (
                <>
                  <td>{sow.daysInStatus}</td>
                  <td>{sow.probableFarrowing ?? "No aplica"}</td>
                </>
              )}
              <td>
                <button className="text-button" onClick={() => onView(sow)}>
                  Ver ficha
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const findSowByNumber = (sows: Sow[], value: string) => {
  const normalized = value.trim()
  const number =
    normalized && !normalized.startsWith("#") ? `#${normalized}` : normalized
  return sows.find((sow) => sow.number.toLowerCase() === number.toLowerCase())
}

function SowSearchField({
  sows,
  value,
  onChange,
  submitted,
  listId,
}: {
  sows: Sow[]
  value: string
  onChange: (value: string) => void
  submitted: boolean
  listId: string
}) {
  const validSow = findSowByNumber(sows, value)
  return (
    <label
      className={`field sow-search-field ${
        submitted && !validSow ? "has-error" : ""
      }`}
    >
      <span>
        Cerda <em>* obligatorio</em>
      </span>
      <div className="sow-search-input">
        <Icon name="search" size={18} />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar por número, ej. #1305"
          list={listId}
          autoFocus
          autoComplete="off"
          aria-invalid={submitted && !validSow}
        />
        <datalist id={listId}>
          {sows.map((sow) => (
            <option key={sow.id} value={sow.number}>
              {sow.stage} · Banda {sow.band}
            </option>
          ))}
        </datalist>
      </div>
      {submitted && !validSow && (
        <small>
          <Icon name="alert" size={14} />
          Busca y selecciona una cerda
        </small>
      )}
    </label>
  )
}

function BirthModal({
  sow,
  sows,
  onClose,
  onSave,
}: {
  sow: Sow | null
  sows: Sow[]
  onClose: () => void
  onSave: (event: SowEvent) => void
}) {
  const [sowNumber, setSowNumber] = useState(sow?.number ?? "")
  const [form, setForm] = useState({
    date: TODAY_ISO,
    alive: "",
    dead: "",
    mummified: "",
    bodyCondition: "",
    responsible: CONNECTED_USER,
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const selectedSow = sow ?? findSowByNumber(sows, sowNumber)
  const dirty =
    (!sow && Boolean(sowNumber)) ||
    form.date !== TODAY_ISO ||
    form.responsible !== CONNECTED_USER ||
    [
      form.alive,
      form.dead,
      form.mummified,
      form.bodyCondition,
      form.notes,
    ].some(Boolean)
  const alive = Number(form.alive) || 0
  const dead = Number(form.dead) || 0
  const mummified = Number(form.mummified) || 0
  const total = alive + dead + mummified
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !selectedSow ||
      !form.date ||
      !form.alive ||
      !form.bodyCondition ||
      !form.responsible.trim()
    )
      return
    onSave({
      id: Date.now(),
      sowId: selectedSow.id,
      type: "Parto y lactancia",
      date: form.date,
      responsible: form.responsible.trim(),
      detail: `${total} nacidos · ${alive} vivos · CC ${form.bodyCondition}`,
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={`Registrar parto${selectedSow ? ` · ${selectedSow.number}` : ""}`}
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="form-content birth-form">
          {!sow && (
            <SowSearchField
              sows={sows}
              value={sowNumber}
              onChange={setSowNumber}
              submitted={submitted}
              listId="birth-sow-options"
            />
          )}
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha del parto <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                max={TODAY_ISO}
                onChange={(value) => setForm({ ...form, date: value })}
                label="Seleccionar fecha del parto"
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la fecha del parto
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && !form.responsible.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(e) =>
                  setForm({ ...form, responsible: e.target.value })
                }
                placeholder="Nombre del responsable"
              />
              {submitted && !form.responsible.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el responsable
                </small>
              )}
            </label>
          </div>
          <div className="birth-counts">
            <label
              className={`field ${submitted && !form.alive ? "has-error" : ""}`}
            >
              <span>
                <TermInfo abbreviation="NV" meaning="nacidos vivos" />{" "}
                <em>* obligatorio</em>
              </span>
              <input
                inputMode="numeric"
                value={form.alive}
                onChange={(e) =>
                  setForm({
                    ...form,
                    alive: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="Ej. 12"
              />
              {submitted && !form.alive && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe los nacidos vivos
                </small>
              )}
            </label>
            <label className="field">
              <span>
                <TermInfo abbreviation="NAT" meaning="nacidos muertos" />
              </span>
              <input
                inputMode="numeric"
                value={form.dead}
                onChange={(e) =>
                  setForm({
                    ...form,
                    dead: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="Ej. 1"
              />
            </label>
            <label className="field">
              <span>
                <TermInfo abbreviation="MOM" meaning="momificados" />
              </span>
              <input
                inputMode="numeric"
                value={form.mummified}
                onChange={(e) =>
                  setForm({
                    ...form,
                    mummified: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="Ej. 0"
              />
            </label>
          </div>
          <div className="calculated-value birth-total">
            <div>
              <span>Total de nacidos</span>
              <small>Suma automática</small>
            </div>
            <strong>
              {alive} vivos + {dead} muertos + {mummified} momificados ={" "}
              <b>{total}</b>
            </strong>
          </div>
          <div className="form-grid">
            <label
              className={`field ${
                submitted && !form.bodyCondition ? "has-error" : ""
              }`}
            >
              <span>
                Condición corporal <em>* obligatorio</em>
              </span>
              <select
                value={form.bodyCondition}
                onChange={(e) =>
                  setForm({ ...form, bodyCondition: e.target.value })
                }
              >
                <option value="">Selecciona de 1 a 5</option>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
              {submitted && !form.bodyCondition && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la condición corporal
                </small>
              )}
            </label>
            <label className="field">
              <span>Observaciones</span>
              <input
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Información adicional"
              />
            </label>
          </div>
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar parto
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function BreedingEventModal({
  sow,
  sows,
  eventType,
  onClose,
  onSave,
}: {
  sow: Sow | null
  sows: Sow[]
  eventType: Exclude<BreedingEventType, "Parto y lactancia">
  onClose: () => void
  onSave: (event: SowEvent) => void
}) {
  const [sowNumber, setSowNumber] = useState(sow?.number ?? "")
  const [form, setForm] = useState({
    date: TODAY_ISO,
    serviceType: "",
    method: "",
    reproducer: "",
    result: "",
    weanedPiglets: "",
    litterWeight: "",
    weight: "",
    bodyCondition: "",
    responsible: CONNECTED_USER,
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const selectedSow = sow ?? findSowByNumber(sows, sowNumber)
  const activeReproducers = initialReproducers.filter(
    (reproducer) =>
      reproducer.status === "Activo" &&
      (!form.method || reproducer.method === form.method),
  )
  const dirty =
    (!sow && Boolean(sowNumber)) ||
    form.date !== TODAY_ISO ||
    form.responsible !== CONNECTED_USER ||
    Object.entries(form).some(
      ([key, value]) =>
        key !== "date" && key !== "responsible" && Boolean(value),
    )
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const requiredMissing =
    !selectedSow ||
    !form.date ||
    !form.responsible.trim() ||
    (eventType === "Servicio y celo" &&
      (!form.serviceType || !form.method || !form.reproducer)) ||
    (eventType === "Gestación" && !form.result) ||
    (eventType === "Destete" && (!form.weanedPiglets || !form.litterWeight)) ||
    (eventType === "Peso y condición corporal" &&
      (!form.weight || !form.bodyCondition))

  const submit = (submitEvent: FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault()
    setSubmitted(true)
    if (requiredMissing) {
      focusFirstError(submitEvent.currentTarget)
      return
    }
    const detail =
      eventType === "Servicio y celo"
        ? `${form.serviceType} · ${form.method} · ${form.reproducer}`
        : eventType === "Gestación"
          ? `Diagnóstico: ${form.result}`
          : eventType === "Destete"
            ? `${form.weanedPiglets} lechones · ${form.litterWeight} kg`
            : `${form.weight} kg · Condición corporal ${form.bodyCondition}`
    onSave({
      id: Date.now(),
      sowId: selectedSow.id,
      type: eventType,
      date: form.date,
      responsible: form.responsible.trim(),
      detail,
    })
  }

  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }

  const error = (missing: boolean) => (submitted && missing ? "has-error" : "")

  return (
    <DialogShell
      title={`Registrar ${eventType.toLowerCase()}${
        selectedSow ? ` · ${selectedSow.number}` : ""
      }`}
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="form-content birth-form breeding-event-form">
          {!sow && (
            <SowSearchField
              sows={sows}
              value={sowNumber}
              onChange={setSowNumber}
              submitted={submitted}
              listId={`event-sow-options-${eventType.replace(/\s/g, "-")}`}
            />
          )}
          <div className="form-grid">
            <label className={`field ${error(!form.date)}`}>
              <span>
                {eventType === "Gestación" ? "Fecha del diagnóstico" : "Fecha"}{" "}
                <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                max={TODAY_ISO}
                onChange={(date) => setForm({ ...form, date })}
                label={`Seleccionar fecha de ${eventType.toLowerCase()}`}
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la fecha
                </small>
              )}
            </label>
            <label className={`field ${error(!form.responsible.trim())}`}>
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
                placeholder="Nombre del responsable"
              />
              {submitted && !form.responsible.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el responsable
                </small>
              )}
            </label>
          </div>

          {eventType === "Servicio y celo" && (
            <div className="form-grid">
              <label className={`field ${error(!form.serviceType)}`}>
                <span>
                  Tipo <em>* obligatorio</em>
                </span>
                <select
                  value={form.serviceType}
                  onChange={(event) =>
                    setForm({ ...form, serviceType: event.target.value })
                  }
                >
                  <option value="">Selecciona</option>
                  <option>Celo detectado</option>
                  <option>Servicio</option>
                </select>
              </label>
              <label className={`field ${error(!form.method)}`}>
                <span>
                  Método <em>* obligatorio</em>
                </span>
                <select
                  value={form.method}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      method: event.target.value,
                      reproducer: "",
                    })
                  }
                >
                  <option value="">Selecciona</option>
                  <option>Monta natural</option>
                  <option>Inseminación</option>
                </select>
              </label>
              <label className={`field ${error(!form.reproducer)}`}>
                <span>
                  Reproductor <em>* obligatorio</em>
                </span>
                <select
                  value={form.reproducer}
                  onChange={(event) =>
                    setForm({ ...form, reproducer: event.target.value })
                  }
                >
                  <option value="">Selecciona un reproductor activo</option>
                  {activeReproducers.map((reproducer) => (
                    <option key={reproducer.id} value={reproducer.name}>
                      {reproducer.name} · {reproducer.method}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {eventType === "Gestación" && (
            <div className="form-grid">
              <label className={`field ${error(!form.result)}`}>
                <span>
                  Resultado <em>* obligatorio</em>
                </span>
                <select
                  value={form.result}
                  onChange={(event) =>
                    setForm({ ...form, result: event.target.value })
                  }
                >
                  <option value="">Selecciona</option>
                  <option>Preñada</option>
                  <option>Vacía</option>
                </select>
              </label>
            </div>
          )}

          {eventType === "Destete" && (
            <div className="form-grid">
              <label className={`field ${error(!form.weanedPiglets)}`}>
                <span>
                  Lechones destetados <em>* obligatorio</em>
                </span>
                <ColombianNumberInput
                  integer
                  value={form.weanedPiglets}
                  onChange={(weanedPiglets) =>
                    setForm({ ...form, weanedPiglets })
                  }
                  placeholder="Ej. 11"
                  ariaInvalid={submitted && !form.weanedPiglets}
                />
              </label>
              <label className={`field ${error(!form.litterWeight)}`}>
                <span>
                  Peso total de la camada (kg) <em>* obligatorio</em>
                </span>
                <ColombianNumberInput
                  value={form.litterWeight}
                  onChange={(litterWeight) =>
                    setForm({ ...form, litterWeight })
                  }
                  placeholder="Ej. 72,5"
                  ariaInvalid={submitted && !form.litterWeight}
                />
              </label>
            </div>
          )}

          {eventType === "Peso y condición corporal" && (
            <div className="form-grid">
              <label className={`field ${error(!form.weight)}`}>
                <span>
                  Peso (kg) <em>* obligatorio</em>
                </span>
                <ColombianNumberInput
                  value={form.weight}
                  onChange={(weight) => setForm({ ...form, weight })}
                  placeholder="Ej. 185,5"
                  ariaInvalid={submitted && !form.weight}
                />
              </label>
              <label className={`field ${error(!form.bodyCondition)}`}>
                <span>
                  Condición corporal (1 a 5) <em>* obligatorio</em>
                </span>
                <select
                  value={form.bodyCondition}
                  onChange={(event) =>
                    setForm({ ...form, bodyCondition: event.target.value })
                  }
                >
                  <option value="">Selecciona de 1 a 5</option>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          <label className="field">
            <span>Observaciones</span>
            <textarea
              value={form.notes}
              onChange={(event) =>
                setForm({ ...form, notes: event.target.value })
              }
              placeholder="Información adicional"
            />
          </label>
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar {eventType.toLowerCase()}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function SowHealthModal({
  sow,
  sows,
  changes,
  onAddChange,
  onUndoChange,
  onClose,
  onNotice,
}: {
  sow: Sow | null
  sows: Sow[]
  changes: SowHealthChange[]
  onAddChange: (change: SowHealthChange) => void
  onUndoChange: (id: number) => void
  onClose: () => void
  onNotice: (text: string) => void
}) {
  const [sowNumber, setSowNumber] = useState(sow?.number ?? "")
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<number[]>([])
  const [applied, setApplied] = useState<number[]>([])
  const [omitting, setOmitting] = useState<SowVaccine | null>(null)
  const [postponing, setPostponing] = useState<SowVaccine | null>(null)
  const [undoNotice, setUndoNotice] = useState<{
    changeId: number
    text: string
  } | null>(null)
  const selectedSow = sow ?? findSowByNumber(sows, sowNumber)
  const sowChanges = selectedSow
    ? changes.filter((change) => change.sowId === selectedSow.id)
    : []
  const vaccines = initialSowVaccines
    .filter(
      (vaccine) =>
        !applied.includes(vaccine.id) &&
        !sowChanges.some(
          (change) =>
            change.vaccineId === vaccine.id && change.action === "Omitida",
        ),
    )
    .map((vaccine) => {
      const postponements = sowChanges.filter(
        (change) =>
          change.vaccineId === vaccine.id && change.action === "Aplazada",
      )
      const latest = postponements[postponements.length - 1]
      return latest
        ? { ...vaccine, date: latest.date, overdue: false }
        : vaccine
    })
  const apply = (ids: number[]) => {
    setSubmitted(true)
    if (!selectedSow) return
    setApplied([...applied, ...ids])
    setSelected([])
    onNotice(ids.length > 1 ? "Vacunas aplicadas" : "Vacuna aplicada")
  }
  const requireSow = (action: () => void) => {
    setSubmitted(true)
    if (selectedSow) action()
  }
  const addChange = (
    vaccine: SowVaccine,
    action: SowHealthChange["action"],
    date: string,
    reason?: string,
  ) => {
    if (!selectedSow) return
    const change: SowHealthChange = {
      id: Date.now(),
      sowId: selectedSow.id,
      vaccineId: vaccine.id,
      vaccineName: vaccine.name,
      action,
      previousDate: vaccine.date,
      date,
      reason,
    }
    onAddChange(change)
    setSelected((current) => current.filter((id) => id !== vaccine.id))
    setUndoNotice({
      changeId: change.id,
      text: action === "Omitida" ? "Vacuna omitida" : "Vacuna aplazada",
    })
  }
  return (
    <>
      <DialogShell
        title={
          <span className="modal-title-icon">
            <Icon name="syringe" size={21} />
            Sanidad{selectedSow ? ` · ${selectedSow.number}` : ""}
          </span>
        }
        onClose={onClose}
        size="wide"
      >
        <div className="sow-health-content">
          {!sow && (
            <SowSearchField
              sows={sows}
              value={sowNumber}
              onChange={setSowNumber}
              submitted={submitted}
              listId="health-sow-options"
            />
          )}
          <div className="health-intro">
            <div>
              <h3>Calendario sanitario</h3>
              <p>Selecciona una o varias vacunas para aplicarlas.</p>
            </div>
            <button
              className="button secondary"
              disabled={!selected.length}
              onClick={() => apply(selected)}
            >
              Aplicar seleccionadas ({selected.length})
            </button>
          </div>
          <div className="treatments-list">
            {vaccines.map((vaccine) => (
              <article className="treatment-row" key={vaccine.id}>
                <label className="treatment-check">
                  <input
                    type="checkbox"
                    checked={selected.includes(vaccine.id)}
                    onChange={() =>
                      setSelected(
                        selected.includes(vaccine.id)
                          ? selected.filter((id) => id !== vaccine.id)
                          : [...selected, vaccine.id],
                      )
                    }
                  />
                  <span className="custom-checkbox">
                    {selected.includes(vaccine.id) && (
                      <Icon name="check" size={15} />
                    )}
                  </span>
                </label>
                <span className="activity-icon">
                  <Icon name="syringe" size={18} />
                </span>
                <div className="treatment-copy">
                  <div>
                    <h3>{vaccine.name}</h3>
                    {vaccine.overdue && (
                      <span className="status critical">Vencida</span>
                    )}
                  </div>
                  <p>Programada para {vaccine.date}</p>
                </div>
                <div className="treatment-actions">
                  <button
                    className="text-button"
                    onClick={() => requireSow(() => setOmitting(vaccine))}
                  >
                    Omitir
                  </button>
                  <button
                    className="text-button"
                    onClick={() => requireSow(() => setPostponing(vaccine))}
                  >
                    Aplazar
                  </button>
                  <button
                    className="button secondary"
                    onClick={() => apply([vaccine.id])}
                  >
                    Aplicar
                  </button>
                </div>
              </article>
            ))}
            {!vaccines.length && (
              <div className="inline-empty">
                No hay vacunas sanitarias pendientes.
              </div>
            )}
          </div>
        </div>
      </DialogShell>
      {omitting && (
        <OmitTreatmentDialog
          treatment={{
            ...omitting,
            method: "Vacuna",
            status: "Programado",
          }}
          onClose={() => setOmitting(null)}
          onConfirm={(reason) => {
            addChange(omitting, "Omitida", omitting.date, reason)
            setOmitting(null)
          }}
        />
      )}
      {postponing && (
        <PostponeSowVaccineDialog
          vaccine={postponing}
          onClose={() => setPostponing(null)}
          onConfirm={(date) => {
            addChange(
              postponing,
              "Aplazada",
              formatDate(new Date(`${date}T12:00:00`)),
            )
            setPostponing(null)
          }}
        />
      )}
      {undoNotice && (
        <div className="toast undo-toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          {undoNotice.text}
          <button
            onClick={() => {
              onUndoChange(undoNotice.changeId)
              setUndoNotice(null)
            }}
          >
            Deshacer
          </button>
        </div>
      )}
    </>
  )
}

function PostponeSowVaccineDialog({
  vaccine,
  onClose,
  onConfirm,
}: {
  vaccine: SowVaccine
  onClose: () => void
  onConfirm: (date: string) => void
}) {
  const [date, setDate] = useState("")
  const [submitted, setSubmitted] = useState(false)
  return (
    <DialogShell
      title={`Aplazar ${vaccine.name}`}
      onClose={onClose}
      size="small"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (!date || date < TODAY_ISO) {
            focusFirstError(event.currentTarget)
            return
          }
          onConfirm(date)
        }}
      >
        <div className="form-content compact-form">
          <label
            className={`field ${
              submitted && (!date || date < TODAY_ISO) ? "has-error" : ""
            }`}
          >
            <span>
              Nueva fecha <em>* obligatorio</em>
            </span>
            <DatePicker
              value={date}
              min={TODAY_ISO}
              onChange={setDate}
              label={`Seleccionar nueva fecha para ${vaccine.name}`}
            />
            {submitted && !date && <small>Selecciona una nueva fecha</small>}
            {submitted && date && date < TODAY_ISO && (
              <small>La fecha no puede ser anterior a hoy</small>
            )}
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary">Aplazar vacuna</button>
        </div>
      </form>
    </DialogShell>
  )
}

function SowPanel({
  sow,
  events,
  healthChanges,
  onClose,
  onRegister,
  onHealth,
}: {
  sow: Sow
  events: SowEvent[]
  healthChanges: SowHealthChange[]
  onClose: () => void
  onRegister: () => void
  onHealth: () => void
}) {
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <aside className="sow-panel" role="dialog" aria-modal="true">
        <div className="panel-heading">
          <div>
            <span>Ficha de la cerda</span>
            <h2>{sow.number}</h2>
          </div>
          <button className="icon-button" aria-label="Cerrar" onClick={onClose}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <div className="panel-body">
          <div className="panel-status">
            <span
              className={`status ${
                sow.attention === "overdue"
                  ? "critical"
                  : sow.attention === "vaccine"
                    ? "warning"
                    : "neutral"
              }`}
            >
              {sow.stage}
            </span>
            <span>
              Banda {sow.band} · {countLabel(sow.daysInStatus, "día", "días")}
            </span>
          </div>
          <div className="panel-kpis">
            <div>
              <TermInfo abbreviation="PHA" meaning="partos por hembra al año" />
              <strong>2,35</strong>
            </div>
            <div>
              <TermInfo
                abbreviation="DHA"
                meaning="destetados por hembra al año"
              />
              <strong>25,8</strong>
            </div>
          </div>
          {events.length > 0 && (
            <section className="sow-event-history">
              <div>
                <h3>Historial de eventos</h3>
                <span>Más reciente primero</span>
              </div>
              {events
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((event) => (
                  <article key={event.id}>
                    <span className="activity-icon">
                      <Icon
                        name={
                          event.type === "Servicio y celo"
                            ? "heart"
                            : event.type === "Gestación"
                              ? "calendar"
                              : event.type === "Parto y lactancia"
                                ? "baby"
                                : event.type === "Destete"
                                  ? "piglet"
                                  : "weight"
                        }
                        size={17}
                      />
                    </span>
                    <div>
                      <strong>{event.type}</strong>
                      <p>{event.detail}</p>
                      <small>
                        {formatDate(new Date(`${event.date}T12:00:00`))} ·{" "}
                        {event.responsible}
                      </small>
                    </div>
                  </article>
                ))}
            </section>
          )}
          {healthChanges.some((change) => change.action === "Omitida") && (
            <section className="sow-event-history">
              <div>
                <h3>Historial sanitario</h3>
                <span>Vacunas omitidas</span>
              </div>
              {healthChanges
                .filter((change) => change.action === "Omitida")
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((change) => (
                  <article key={change.id}>
                    <span className="activity-icon">
                      <Icon name="syringe" size={17} />
                    </span>
                    <div>
                      <strong>{change.vaccineName}</strong>
                      <p>Omitida · {change.reason}</p>
                      <small>Programada para {change.date}</small>
                    </div>
                  </article>
                ))}
            </section>
          )}
          <section className="cycle-history">
            <div>
              <h3>Historial de ciclos</h3>
              <span>Más reciente primero</span>
            </div>
            {[sow.parity, sow.parity - 1, sow.parity - 2]
              .filter((cycle) => cycle > 0)
              .map((cycle, index) => (
                <article key={cycle}>
                  <div>
                    <strong>Ciclo {cycle}</strong>
                    {index === 0 && (
                      <span className="status positive">Más reciente</span>
                    )}
                  </div>
                  <p>
                    Parto: {12 - index}/11/2025 · Destete: {4 - index}/12/2025
                  </p>
                  <div className="cycle-results">
                    <span title="Nacidos vivos">
                      Nacidos vivos: {12 - index}
                    </span>
                    <span title="Nacidos muertos">
                      Nacidos muertos: {index}
                    </span>
                    <span title="Momificados">Momificados: 0</span>
                  </div>
                </article>
              ))}
          </section>
        </div>
        <div className="panel-actions">
          <button className="button secondary" onClick={onHealth}>
            <Icon name="syringe" size={17} />
            Sanidad
          </button>
          <button className="button primary" onClick={onRegister}>
            <Icon name="plus" size={17} />
            Registrar evento
          </button>
        </div>
      </aside>
    </div>
  )
}

function WithdrawalSowDialog({
  sow,
  onClose,
  onConfirm,
}: {
  sow: Sow
  onClose: () => void
  onConfirm: (date: string, reason: string) => void
}) {
  const [date, setDate] = useState(TODAY_ISO)
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)
  return (
    <DialogShell title="Registrar baja" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="logout" size={22} />
        </div>
        <p>
          {sow.number} saldrá del plantel activo, pero su ficha y todo el
          historial permanecerán disponibles en el filtro de estado
          correspondiente.
        </p>
        <div className="form-grid withdrawal-fields">
          <label className={`field ${submitted && !date ? "has-error" : ""}`}>
            <span>
              Fecha de baja <em>* obligatorio</em>
            </span>
            <DatePicker
              value={date}
              max={TODAY_ISO}
              onChange={setDate}
              label="Seleccionar fecha de baja"
            />
          </label>
          <label className={`field ${submitted && !reason ? "has-error" : ""}`}>
            <span>
              Motivo <em>* obligatorio</em>
            </span>
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value)}
            >
              <option value="">Selecciona</option>
              <option>Descarte productivo</option>
              <option>Problema reproductivo</option>
              <option>Enfermedad</option>
              <option>Mortalidad</option>
              <option>Venta</option>
              <option>Transferencia</option>
              <option>Eliminación de registro</option>
              <option>Otro</option>
            </select>
          </label>
        </div>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button danger"
          onClick={() => {
            setSubmitted(true)
            if (date && reason) onConfirm(date, reason)
          }}
        >
          Registrar baja
        </button>
      </div>
    </DialogShell>
  )
}

const withdrawalStatusForReason = (reason: string): SowRecordStatus => {
  if (reason === "Mortalidad" || reason === "Enfermedad") return "Fallecidas"
  if (reason === "Descarte productivo" || reason === "Problema reproductivo") {
    return "Descartadas"
  }
  if (reason === "Venta" || reason === "Transferencia") return "Transferidas"
  return "Eliminadas"
}

function BreedingPage({
  farmName,
  onNotice,
  onAlertCountChange,
}: {
  farmName: string
  onNotice: (text: string) => void
  onAlertCountChange: (count: number) => void
}) {
  const [sows, setSows] = useState(() => {
    if (farmName === "Granja La Esperanza") {
      return [...initialSows, ...initialInactiveSows]
    }
    const isElPorvenir = farmName === "Granja El Porvenir"
    const idOffset = isElPorvenir ? 200 : 400
    const numberStart = isElPorvenir ? 1501 : 1701
    const bandStart = isElPorvenir ? 41 : 45
    const activeSows = initialSows
      .slice(0, isElPorvenir ? 12 : 18)
      .map((sow, index) => ({
        ...sow,
        id: sow.id + idOffset,
        number: `#${numberStart + index}`,
        band: bandStart + (index % 3),
      }))
    const inactiveSows = initialInactiveSows.map((sow, index) => ({
      ...sow,
      id: sow.id + idOffset,
      number: `#${numberStart - 20 - index}`,
      band: bandStart + (index % 3),
    }))
    return [...activeSows, ...inactiveSows]
  })
  const [stage, setStage] = useState<SowStage>("Gestación")
  const [recordStatus, setRecordStatus] = useState<SowRecordStatus>("Activas")
  const [band, setBand] = useState("Todas")
  const [query, setQuery] = useState("")
  const [tableView, setTableView] = useState(false)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [registerSow, setRegisterSow] = useState<Sow | null>(null)
  const [bellOpen, setBellOpen] = useState(false)
  const [alerts, setAlerts] = useState(() =>
    initialBreedingAlerts.map((alert, index) => ({
      ...alert,
      sowNumber: sows[index]?.number ?? alert.sowNumber,
    })),
  )
  const [panelSow, setPanelSow] = useState<Sow | null>(null)
  const [birthModal, setBirthModal] = useState<{ sow: Sow | null } | null>(null)
  const [eventModal, setEventModal] = useState<{
    sow: Sow | null
    type: Exclude<BreedingEventType, "Parto y lactancia">
  } | null>(null)
  const [sowEvents, setSowEvents] = useState<SowEvent[]>([])
  const [sowHealthChanges, setSowHealthChanges] = useState<SowHealthChange[]>(
    [],
  )
  const [healthModal, setHealthModal] = useState<{
    sow: Sow | null
  } | null>(null)
  const [withdrawingSow, setWithdrawingSow] = useState<Sow | null>(null)

  const activeAlerts = alerts.filter((alert) =>
    sows.some(
      (sow) => sow.number === alert.sowNumber && sow.recordStatus === "Activas",
    ),
  )
  useEffect(() => {
    onAlertCountChange(activeAlerts.length)
  }, [activeAlerts.length, onAlertCountChange])

  const filtered = sows.filter(
    (sow) =>
      sow.recordStatus === recordStatus &&
      (recordStatus !== "Activas" || sow.stage === stage) &&
      (band === "Todas" || sow.band === Number(band)) &&
      sow.number.includes(query.trim()),
  )
  const openRegister = (sow: Sow | null) => {
    setRegisterSow(sow)
    setRegisterOpen(true)
    setMenuOpen(null)
  }
  const resolveAlert = (alert: BreedingAlert) => {
    const sow = sows.find((item) => item.number === alert.sowNumber) ?? null
    setBellOpen(false)
    if (alert.type === "parto" && sow) setBirthModal({ sow })
    else if (alert.type === "vacuna" && sow) setHealthModal({ sow })
    else openRegister(sow)
    setAlerts(alerts.filter((item) => item.id !== alert.id))
  }
  const moveSowToStatus = (
    sow: Sow,
    nextStatus: SowRecordStatus,
    reason: string,
    date = TODAY_ISO,
  ) => {
    setSows((current) =>
      current.map((item) =>
        item.id === sow.id
          ? {
              ...item,
              recordStatus: nextStatus,
              withdrawalDate: date,
              withdrawalReason: reason,
              withdrawalBy: "Andrés Mejía",
              attention: undefined,
            }
          : item,
      ),
    )
    setAlerts((current) =>
      current.filter((alert) => alert.sowNumber !== sow.number),
    )
  }
  return (
    <>
      <div className="breeding-page">
        <BreedingHeader
          farmName={farmName}
          sowCount={sows.filter((sow) => sow.recordStatus === "Activas").length}
          alerts={activeAlerts}
          bellOpen={bellOpen}
          setBellOpen={setBellOpen}
          registerOpen={registerOpen}
          setRegisterOpen={(value) => {
            setRegisterSow(null)
            setRegisterOpen(value)
          }}
          registerMenu={
            registerOpen ? (
              <RegisterMenu
                sow={registerSow}
                onClose={() => setRegisterOpen(false)}
                onEvent={(type) => {
                  if (type === "Parto y lactancia") {
                    setBirthModal({ sow: registerSow })
                  } else {
                    setEventModal({ sow: registerSow, type })
                  }
                }}
                onHealth={() => setHealthModal({ sow: registerSow })}
                onNotice={onNotice}
              />
            ) : null
          }
          onResolve={resolveAlert}
        />
        <AttendToday alerts={activeAlerts} onAction={resolveAlert} />
        <section className="sow-directory">
          <div className="sow-toolbar">
            {recordStatus === "Activas" ? (
              <div className="sow-tabs">
                {sowStages.map((item) => (
                  <button
                    className={stage === item ? "active" : ""}
                    onClick={() => setStage(item)}
                    key={item}
                  >
                    {item}
                    <span>
                      {
                        sows.filter(
                          (sow) =>
                            sow.recordStatus === "Activas" &&
                            sow.stage === item,
                        ).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div />
            )}
            <div className="sow-view-actions">
              <button
                className="button secondary"
                onClick={() =>
                  onNotice(
                    `Descarga preparada · ${filtered.length} cerdas ${recordStatus.toLowerCase()}`,
                  )
                }
              >
                <Icon name="download" size={17} />
                Descargar
              </button>
              {recordStatus === "Activas" && (
                <button
                  className="button secondary"
                  onClick={() => setTableView(!tableView)}
                >
                  <Icon name={tableView ? "grid" : "table"} size={17} />
                  {tableView ? "Ver tarjetas" : "Ver en tabla"}
                </button>
              )}
            </div>
          </div>
          <div className="sow-filters">
            <label className="search-field">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por número"
              />
            </label>
            <label className="band-filter sow-status-filter">
              <span>Estado</span>
              <select
                value={recordStatus}
                onChange={(event) => {
                  setRecordStatus(event.target.value as SowRecordStatus)
                  setBand("Todas")
                }}
              >
                {sowRecordStatuses.map((item) => (
                  <option value={item} key={item}>
                    {item} (
                    {sows.filter((sow) => sow.recordStatus === item).length})
                  </option>
                ))}
              </select>
            </label>
            <label className="band-filter">
              <span>Banda</span>
              <select value={band} onChange={(e) => setBand(e.target.value)}>
                <option>Todas</option>
                {[
                  ...new Set(
                    sows
                      .filter((sow) => sow.recordStatus === recordStatus)
                      .map((sow) => sow.band),
                  ),
                ]
                  .sort((a, b) => a - b)
                  .map((value) => (
                    <option key={value}>{value}</option>
                  ))}
              </select>
            </label>
          </div>
          {recordStatus !== "Activas" && (
            <div className="inactive-sows-notice">
              <span>
                Mostrando cerdas <strong>{recordStatus.toLowerCase()}</strong>
              </span>
              <button
                onClick={() => {
                  setRecordStatus("Activas")
                  setBand("Todas")
                }}
              >
                Volver a activas
              </button>
            </div>
          )}
          {recordStatus !== "Activas" ? (
            <SowTable sows={filtered} onView={setPanelSow} inactive />
          ) : tableView ? (
            <SowTable sows={filtered} onView={setPanelSow} />
          ) : (
            <div className="sow-grid">
              {filtered.map((sow) => (
                <SowCard
                  key={sow.id}
                  sow={sow}
                  alert={activeAlerts.find(
                    (alert) => alert.sowNumber === sow.number,
                  )}
                  menuOpen={menuOpen === sow.id}
                  onMenu={() =>
                    setMenuOpen(menuOpen === sow.id ? null : sow.id)
                  }
                  onRegister={() => openRegister(sow)}
                  onHealth={() => {
                    setMenuOpen(null)
                    setHealthModal({ sow })
                  }}
                  onView={() => {
                    setMenuOpen(null)
                    setPanelSow(sow)
                  }}
                  onDiscard={() => {
                    setMenuOpen(null)
                    moveSowToStatus(
                      sow,
                      "Pendiente de venta",
                      "Marcada para descarte",
                    )
                    onNotice(`${sow.number} marcada para descarte`)
                  }}
                  onWithdrawal={() => {
                    setMenuOpen(null)
                    setWithdrawingSow(sow)
                  }}
                  onDelete={() => {
                    setMenuOpen(null)
                    moveSowToStatus(
                      sow,
                      "Eliminadas",
                      "Eliminación manual del registro",
                    )
                    onNotice(`${sow.number} eliminada`)
                  }}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      {birthModal && (
        <BirthModal
          sow={birthModal.sow}
          sows={sows}
          onClose={() => setBirthModal(null)}
          onSave={(event) => {
            setSowEvents((current) => [event, ...current])
            setBirthModal(null)
            onNotice("Parto registrado")
          }}
        />
      )}
      {eventModal && (
        <BreedingEventModal
          sow={eventModal.sow}
          sows={sows}
          eventType={eventModal.type}
          onClose={() => setEventModal(null)}
          onSave={(event) => {
            setSowEvents((current) => [event, ...current])
            setEventModal(null)
            onNotice(`${event.type} registrado`)
          }}
        />
      )}
      {healthModal && (
        <SowHealthModal
          sow={healthModal.sow}
          sows={sows}
          changes={sowHealthChanges}
          onAddChange={(change) =>
            setSowHealthChanges((current) => [...current, change])
          }
          onUndoChange={(id) =>
            setSowHealthChanges((current) =>
              current.filter((change) => change.id !== id),
            )
          }
          onClose={() => setHealthModal(null)}
          onNotice={onNotice}
        />
      )}
      {panelSow && (
        <SowPanel
          sow={panelSow}
          events={sowEvents.filter((event) => event.sowId === panelSow.id)}
          healthChanges={sowHealthChanges.filter(
            (change) => change.sowId === panelSow.id,
          )}
          onClose={() => setPanelSow(null)}
          onRegister={() => {
            setPanelSow(null)
            openRegister(panelSow)
          }}
          onHealth={() => {
            setHealthModal({ sow: panelSow })
            setPanelSow(null)
          }}
        />
      )}
      {withdrawingSow && (
        <WithdrawalSowDialog
          sow={withdrawingSow}
          onClose={() => setWithdrawingSow(null)}
          onConfirm={(withdrawalDate, withdrawalReason) => {
            moveSowToStatus(
              withdrawingSow,
              withdrawalStatusForReason(withdrawalReason),
              withdrawalReason,
              withdrawalDate,
            )
            setWithdrawingSow(null)
            onNotice("Baja registrada")
          }}
        />
      )}
    </>
  )
}

type ReproducerKind = "Macho" | "Semen"
type ReproducerStatus = "Activo" | "Fallecido" | "Descartado" | "Eliminado"
type Reproducer = {
  id: number
  name: string
  kind: ReproducerKind
  method: "Monta natural" | "Inseminación"
  status: ReproducerStatus
  servicesThisMonth: number
  lastService: string
  breed: string
  lot?: string
  entryDate?: string
  birthDate?: string
  secondaryId?: string
  code?: string
  purchaseDate?: string
  purchaseValue?: string
  purchaseWeight?: string
  supplier?: string
  observations?: string
}

const initialReproducers: Reproducer[] = [
  {
    id: 1,
    name: "Macho Demo Duroc",
    kind: "Macho",
    method: "Monta natural",
    status: "Activo",
    servicesThisMonth: 18,
    lastService: "14/03/2026",
    breed: "Duroc",
    lot: "M-2025",
    entryDate: "15 jul 2025",
    birthDate: "04 ago 2024",
    secondaryId: "DU-018",
    code: "REP-001",
    purchaseDate: "12 jul 2025",
    purchaseValue: "$ 4.800.000",
    purchaseWeight: "152 kg",
    supplier: "Genética del Norte",
    observations: "Macho activo para monta natural.",
  },
  {
    id: 2,
    name: "Semen Genética Externa",
    kind: "Semen",
    method: "Inseminación",
    status: "Activo",
    servicesThisMonth: 0,
    lastService: "15/03/2026",
    breed: "Pietrain",
    lot: "S-2026-014",
    entryDate: "02 mar 2026",
    secondaryId: "PIE-EXT",
    code: "SEM-014",
    purchaseDate: "02 mar 2026",
    purchaseValue: "$ 1.280.000",
    supplier: "Porcigen Colombia",
    observations: "Lote de semen de genética externa.",
  },
]

type ReproducerTab = "Resumen" | "Servicios" | "Sanidad" | "Consumo" | "Desempeño"

const reproducerTabs: ReproducerTab[] = [
  "Resumen",
  "Servicios",
  "Sanidad",
  "Consumo",
  "Desempeño",
]

function ReproducerHeader({
  farmName,
  alerts,
  moreOpen,
  setMoreOpen,
  alertsOpen,
  setAlertsOpen,
  onAdd,
  onNotice,
}: {
  farmName: string
  alerts: HomeFarmAlert[]
  moreOpen: boolean
  setMoreOpen: (value: boolean) => void
  alertsOpen: boolean
  setAlertsOpen: (value: boolean) => void
  onAdd: () => void
  onNotice: (text: string) => void
}) {
  return (
    <header className="page-header reproducer-header">
      <div>
        <div className="breadcrumbs">
          <span>Inicio</span>
          <Icon name="chevron" size={14} />
          <span>{farmName}</span>
          <Icon name="chevron" size={14} />
          <strong>Reproductor</strong>
        </div>
        <h1>Reproductor · {farmName}</h1>
        <p>Gestiona machos reproductores y semen disponible</p>
      </div>
      <div className="header-actions">
        <div className="more-wrap">
          <button
            className="icon-button reproducer-alert-button"
            aria-label="Alertas sanitarias de reproductores"
            onClick={() => setAlertsOpen(!alertsOpen)}
          >
            <Icon name="bell" size={19} />
            {alerts.length > 0 && <b>{alerts.length}</b>}
          </button>
          {alertsOpen && (
            <div className="alerts-popover reproducer-alerts-popover">
              <div className="popover-heading">
                <strong>Alertas sanitarias</strong>
                <span>{alerts.length} requieren seguimiento</span>
              </div>
              {alerts.map((alert) => (
                <div className="popover-alert" key={alert.id}>
                  <span className={`alert-dot urgency-${alert.urgency}`} />
                  <div>
                    <strong>{alert.title}</strong>
                    <p>{alert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="more-wrap">
          <button
            className="button secondary"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            <Icon name="dots" size={18} />
            Más
          </button>
          {moreOpen && (
            <div className="more-menu">
              <button
                onClick={() => {
                  onNotice("Campos personalizados de semen")
                  setMoreOpen(false)
                }}
              >
                <Icon name="settings" size={17} />
                Campos personalizados de semen
              </button>
              <button
                onClick={() => {
                  onNotice("Histórico de facturas")
                  setMoreOpen(false)
                }}
              >
                <Icon name="table" size={17} />
                Histórico de facturas
              </button>
            </div>
          )}
        </div>
        <button
          className="button primary"
          onClick={() => {
            setMoreOpen(false)
            onAdd()
          }}
        >
          <Icon name="plus" size={18} />
          Registrar reproductor
        </button>
      </div>
    </header>
  )
}

function ReproducerCard({
  reproducer,
  onView,
}: {
  reproducer: Reproducer
  onView: () => void
}) {
  return (
    <article className="reproducer-card">
      <div className="reproducer-card-heading">
        <span
          className={`reproducer-kind ${
            reproducer.kind === "Macho" ? "male" : "semen"
          }`}
        >
          <Icon
            name={reproducer.kind === "Macho" ? "boar" : "droplet"}
            size={20}
          />
        </span>
        <div>
          <h2>{reproducer.name}</h2>
          <p>
            {reproducer.method} · {reproducer.breed}
          </p>
        </div>
        <span
          className={`status ${
            reproducer.status === "Activo" ? "positive" : "neutral"
          }`}
        >
          {reproducer.status}
        </span>
      </div>
      <div className="reproducer-stats">
        <div>
          <span>Servicios del mes</span>
          <strong>{reproducer.servicesThisMonth}</strong>
        </div>
        <div>
          <span>Último servicio</span>
          <strong>{reproducer.lastService}</strong>
        </div>
      </div>
      <button className="reproducer-view" onClick={onView}>
        Ver detalle
        <Icon name="arrow" size={16} />
      </button>
    </article>
  )
}

function AddReproducerModal({
  reproducer,
  presetKind,
  onClose,
  onSave,
}: {
  reproducer?: Reproducer
  presetKind?: ReproducerKind
  onClose: () => void
  onSave: (reproducer: Reproducer) => void
}) {
  const [form, setForm] = useState({
    name: reproducer?.name ?? "",
    kind: reproducer?.kind ?? presetKind ?? "",
    breed: reproducer?.breed ?? "",
    lot: reproducer?.lot ?? "",
    supplier: reproducer?.supplier ?? "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = reproducer
    ? form.name !== reproducer.name ||
      form.kind !== reproducer.kind ||
      form.breed !== reproducer.breed ||
      form.lot !== (reproducer.lot ?? "") ||
      form.supplier !== (reproducer.supplier ?? "")
    : Object.values(form).some(Boolean)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!form.name || !form.kind) return
    const kind = form.kind as ReproducerKind
    onSave({
      id: reproducer?.id ?? Date.now(),
      name: form.name,
      kind,
      method: kind === "Macho" ? "Monta natural" : "Inseminación",
      status: reproducer?.status ?? "Activo",
      servicesThisMonth: reproducer?.servicesThisMonth ?? 0,
      lastService: reproducer?.lastService ?? "Sin registros",
      breed: form.breed || "Sin especificar",
      lot: form.lot || (kind === "Macho" ? "M-2025" : "S-2026"),
      entryDate:
        reproducer?.entryDate ?? formatDate(new Date(`${TODAY_ISO}T12:00:00`)),
      birthDate: reproducer?.birthDate,
      secondaryId: reproducer?.secondaryId ?? "Sin registrar",
      code: reproducer?.code ?? `REP-${String(Date.now()).slice(-3)}`,
      purchaseDate: reproducer?.purchaseDate ?? "Sin registrar",
      purchaseValue: reproducer?.purchaseValue ?? "Sin registrar",
      purchaseWeight: reproducer?.purchaseWeight ?? "Sin registrar",
      supplier: form.supplier || "Sin registrar",
      observations: reproducer?.observations ?? "",
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell
      title={reproducer ? "Editar reproductor" : "Registrar reproductor"}
      onClose={attemptClose}
    >
      <form onSubmit={submit}>
        <div className="form-content">
          <label
            className={`field ${submitted && !form.name ? "has-error" : ""}`}
          >
            <span>
              Nombre <em>* obligatorio</em>
            </span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ej. Macho Duroc 02"
            />
            {submitted && !form.name && (
              <small>
                <Icon name="alert" size={14} />
                Escribe el nombre
              </small>
            )}
          </label>
          <label
            className={`field ${submitted && !form.kind ? "has-error" : ""}`}
          >
            <span>
              Tipo <em>* obligatorio</em>
            </span>
            <select
              value={form.kind}
              onChange={(e) => setForm({ ...form, kind: e.target.value })}
            >
              <option value="">Selecciona</option>
              <option>Macho</option>
              <option>Semen</option>
            </select>
            {submitted && !form.kind && (
              <small>
                <Icon name="alert" size={14} />
                Selecciona el tipo
              </small>
            )}
          </label>
          <label className="field">
            <span>Raza o línea genética</span>
            <input
              value={form.breed}
              onChange={(e) => setForm({ ...form, breed: e.target.value })}
              placeholder="Ej. Duroc"
            />
          </label>
          <label className="field">
            <span>Lote</span>
            <input
              value={form.lot}
              onChange={(e) => setForm({ ...form, lot: e.target.value })}
              placeholder={
                form.kind === "Semen" ? "Ej. S-2026-014" : "Ej. M-2025"
              }
            />
          </label>
          <label className="field">
            <span>Proveedor</span>
            <input
              value={form.supplier}
              onChange={(e) => setForm({ ...form, supplier: e.target.value })}
              placeholder="Nombre del proveedor"
            />
          </label>
          {form.kind === "Semen" && (
            <label className="field invoice-upload">
              <span>Foto de la factura</span>
              <input type="file" accept="image/*" />
              <span className="upload-control">
                <Icon name="download" size={17} />
                Subir foto de la factura
              </span>
            </label>
          )}
        </div>
        <div className="modal-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            {reproducer ? "Guardar cambios" : "Registrar reproductor"}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function RegisterServiceModal({
  reproducer,
  onClose,
  onSave,
}: {
  reproducer: Reproducer
  onClose: () => void
  onSave: () => void
}) {
  const [date, setDate] = useState("")
  const [sow, setSow] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Boolean(date || sow || notes)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!date || !sow) return
    onSave()
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell title="Registrar servicio" onClose={attemptClose}>
      <form onSubmit={submit}>
        <div className="form-content">
          <div className="service-reproducer">
            <Icon
              name={reproducer.kind === "Macho" ? "boar" : "droplet"}
              size={19}
            />
            <div>
              <strong>{reproducer.name}</strong>
              <span>{reproducer.method}</span>
            </div>
          </div>
          <div className="form-grid">
            <label className={`field ${submitted && !date ? "has-error" : ""}`}>
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={date}
                max={TODAY_ISO}
                onChange={setDate}
                label="Seleccionar fecha del servicio"
              />
            </label>
            <label className={`field ${submitted && !sow ? "has-error" : ""}`}>
              <span>
                Cerda <em>* obligatorio</em>
              </span>
              <input
                value={sow}
                onChange={(e) => setSow(e.target.value)}
                placeholder="Ej. #1304"
              />
            </label>
          </div>
          <label className="field">
            <span>Observaciones</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Información adicional del servicio"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar servicio
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function DeleteReproducerDialog({
  reproducer,
  onClose,
  onConfirm,
}: {
  reproducer: Reproducer
  onClose: () => void
  onConfirm: () => void
}) {
  const [value, setValue] = useState("")
  return (
    <DialogShell title="Eliminar reproductor" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se eliminarán el reproductor y todos sus servicios, registros
          sanitarios y datos de desempeño. Esta acción no se puede deshacer.
        </p>
        <label className="field">
          <span>
            Escribe <strong>{reproducer.name}</strong> para confirmar
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={reproducer.name}
          />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button danger"
          disabled={value !== reproducer.name}
          onClick={onConfirm}
        >
          Eliminar reproductor
        </button>
      </div>
    </DialogShell>
  )
}

function ReproducerDetail({
  reproducer,
  onBack,
  onUpdate,
  onDelete,
  onNotice,
}: {
  reproducer: Reproducer
  onBack: () => void
  onUpdate: (reproducer: Reproducer) => void
  onDelete: () => void
  onNotice: (text: string) => void
}) {
  const [tab, setTab] = useState<ReproducerTab>("Resumen")
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  return (
    <>
      <header className="reproducer-detail-header">
        <div className="breadcrumbs">
          <span>Inicio</span>
          <Icon name="chevron" size={14} />
          <button onClick={onBack}>Reproductor</button>
          <Icon name="chevron" size={14} />
          <strong>{reproducer.name}</strong>
        </div>
        <div className="reproducer-detail-title">
          <div>
            <div>
              <h1>{reproducer.name}</h1>
              <span
                className={`status ${
                  reproducer.status === "Activo" ? "positive" : "neutral"
                }`}
              >
                {reproducer.status}
              </span>
            </div>
            <p>
              {reproducer.method} · {reproducer.breed}
            </p>
          </div>
          <div className="header-actions">
            <button
              className="button secondary"
              onClick={() => setEditOpen(true)}
            >
              <Icon name="edit" size={17} />
              Editar
            </button>
            <button
              className="button secondary"
              onClick={() => setServiceOpen(true)}
              disabled={reproducer.status !== "Activo"}
            >
              <Icon name="plus" size={17} />
              Registrar servicio
            </button>
            <div className="detail-menu-wrap">
              <button
                className="detail-menu-button"
                aria-label="Más opciones"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name="dots" size={21} />
              </button>
              {menuOpen && (
                <div className="lot-menu detail-menu">
                  <button onClick={() => onNotice("Histórico exportado")}>
                    <Icon name="download" size={16} />
                    Descargar histórico
                  </button>
                  <div className="menu-divider" />
                  <button
                    className="delete-item"
                    onClick={() => {
                      setMenuOpen(false)
                      setDeleteOpen(true)
                    }}
                  >
                    <Icon name="trash" size={16} />
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="lot-tabs-wrap reproducer-tabs">
        <nav className="lot-tabs">
          {reproducerTabs.map((item) => (
            <button
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="reproducer-tab-content">
        {tab === "Resumen" && (
          <div className="reproducer-summary">
            <div className="detail-metrics">
              <div>
                <span>Servicios del mes</span>
                <strong>{reproducer.servicesThisMonth}</strong>
                <p>{reproducer.method}</p>
              </div>
              <div>
                <span>Último servicio</span>
                <strong className="date-kpi">{reproducer.lastService}</strong>
                <p>Registro más reciente</p>
              </div>
              <div>
                <span>Estado</span>
                <strong className="text-kpi">{reproducer.status}</strong>
                <p>Disponible para servicios</p>
              </div>
            </div>
            {reproducer.kind === "Semen" && (
              <div className="applicable-notice">
                <Icon name="info" size={18} />
                Quedan 12 dosis disponibles de este lote de semen.
              </div>
            )}
            <section className="records-card">
              <div className="records-heading">
                <div>
                  <h2>Actividad reciente</h2>
                  <p>Últimos movimientos del reproductor</p>
                </div>
              </div>
              <div className="activity-list">
                <div>
                  <span className="activity-icon">
                    <Icon name="heart" size={17} />
                  </span>
                  <div>
                    <strong>Servicio registrado</strong>
                    <p>Cerda #1304 · {reproducer.method}</p>
                  </div>
                  <time>14 mar</time>
                </div>
              </div>
            </section>
          </div>
        )}
        {tab === "Servicios" && (
          <section className="records-card">
            <div className="records-heading">
              <div>
                <h2>Historial de servicios</h2>
                <p>{reproducer.servicesThisMonth} servicios este mes</p>
              </div>
            </div>
            <div className="table-wrap borderless">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Cerda</th>
                    <th>Método</th>
                    <th>Responsable</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14/03/2026</td>
                    <td>#1304</td>
                    <td>{reproducer.method}</td>
                    <td>Andrés Mejía</td>
                    <td>
                      <span className="status positive">Confirmado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>11/03/2026</td>
                    <td>#1311</td>
                    <td>{reproducer.method}</td>
                    <td>Carlos Ríos</td>
                    <td>
                      <span className="status neutral">Pendiente</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
        {tab === "Sanidad" && (
          <div className="detail-empty">
            <div className="empty-lot-art">
              <Icon name="syringe" size={34} />
            </div>
            <h2>Sanidad</h2>
            <p>Vacunas y tratamientos asociados a {reproducer.name}.</p>
          </div>
        )}
        {tab === "Consumo" && (
          <section className="records-card">
            <div className="records-heading">
              <div>
                <h2>
                  {reproducer.kind === "Macho"
                    ? "Consumo de alimento"
                    : "Consumo de dosis"}
                </h2>
                <p>Registros del mes actual</p>
              </div>
            </div>
            <div className="table-wrap borderless">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Cantidad</th>
                    <th>Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/03/2026</td>
                    <td>
                      {reproducer.kind === "Macho"
                        ? "Concentrado reproductor"
                        : "Dosis utilizada"}
                    </td>
                    <td>
                      {reproducer.kind === "Macho" ? "3,2 kg" : "1 dosis"}
                    </td>
                    <td>Andrés Mejía</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
        {tab === "Desempeño" && (
          <div className="performance-tab">
            <div className="performance-kpis">
              <div>
                <span>Tasa de concepción</span>
                <strong>
                  {reproducer.kind === "Macho" ? "88,9 %" : "92,3 %"}
                </strong>
                <p>Meta 88,0 %</p>
              </div>
              <div>
                <span>Lechones por servicio</span>
                <strong>{reproducer.kind === "Macho" ? "11,8" : "12,4"}</strong>
                <p>Promedio confirmado</p>
              </div>
              <div>
                <span>Servicios del mes</span>
                <strong>{reproducer.servicesThisMonth}</strong>
                <p>Marzo de 2026</p>
              </div>
            </div>
            <section className="records-card">
              <div className="records-heading">
                <div>
                  <h2>Indicadores complementarios</h2>
                  <p>Seguimiento del desempeño reproductivo</p>
                </div>
              </div>
              <div className="table-wrap borderless">
                <table>
                  <thead>
                    <tr>
                      <th>Indicador</th>
                      <th>Período actual</th>
                      <th>Período anterior</th>
                      <th>Variación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Repeticiones</td>
                      <td>2</td>
                      <td>3</td>
                      <td className="mortality-ok">−1</td>
                    </tr>
                    <tr>
                      <td>Partos confirmados</td>
                      <td>16</td>
                      <td>14</td>
                      <td className="mortality-ok">+2</td>
                    </tr>
                    <tr>
                      <td>Promedio de intervalo</td>
                      <td>5,2 días</td>
                      <td>5,6 días</td>
                      <td className="mortality-ok">−0,4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </div>
      {serviceOpen && (
        <RegisterServiceModal
          reproducer={reproducer}
          onClose={() => setServiceOpen(false)}
          onSave={() => {
            onUpdate({
              ...reproducer,
              servicesThisMonth: reproducer.servicesThisMonth + 1,
              lastService: formatDate(new Date(`${TODAY_ISO}T12:00:00`)),
            })
            setServiceOpen(false)
            onNotice("Servicio registrado")
          }}
        />
      )}
      {editOpen && (
        <AddReproducerModal
          reproducer={reproducer}
          onClose={() => setEditOpen(false)}
          onSave={(updated) => {
            onUpdate(updated)
            setEditOpen(false)
            onNotice("Cambios guardados")
          }}
        />
      )}
      {deleteOpen && (
        <DeleteReproducerDialog
          reproducer={reproducer}
          onClose={() => setDeleteOpen(false)}
          onConfirm={onDelete}
        />
      )}
    </>
  )
}

function ReproducerTypeDialog({
  onClose,
  onSelect,
}: {
  onClose: () => void
  onSelect: (kind: ReproducerKind) => void
}) {
  return (
    <DialogShell title="Registrar reproductor" onClose={onClose}>
      <div className="reproducer-type-choice">
        <p>Selecciona el tipo de reproductor que vas a registrar.</p>
        <button onClick={() => onSelect("Macho")}>
          <span>
            <Icon name="boar" size={24} />
          </span>
          <div>
            <strong>Macho reproductor</strong>
            <small>Reproductor físico en el plantel</small>
          </div>
          <Icon name="arrow" size={18} />
        </button>
        <button onClick={() => onSelect("Semen")}>
          <span>
            <Icon name="droplet" size={24} />
          </span>
          <div>
            <strong>Semen</strong>
            <small>Genética externa</small>
          </div>
          <Icon name="arrow" size={18} />
        </button>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </DialogShell>
  )
}

function ReproducerStatusDialog({
  reproducer,
  status,
  onClose,
  onConfirm,
}: {
  reproducer: Reproducer
  status: "Descartado" | "Fallecido"
  onClose: () => void
  onConfirm: (date: string, reason: string) => void
}) {
  const [date, setDate] = useState("")
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)
  return (
    <DialogShell
      title={
        status === "Descartado" ? "Pasar a descarte" : "Marcar como fallecido"
      }
      onClose={onClose}
      size="small"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
          if (!date || !reason.trim()) return
          onConfirm(date, reason)
        }}
      >
        <div className="form-content">
          <p>
            Registra la novedad para <strong>{reproducer.name}</strong>.
          </p>
          <label className={`field ${submitted && !date ? "has-error" : ""}`}>
            <span>
              Fecha <em>* obligatorio</em>
            </span>
            <DatePicker
              value={date}
              max={TODAY_ISO}
              onChange={setDate}
              label="Fecha de la novedad"
            />
          </label>
          <label
            className={`field ${
              submitted && !reason.trim() ? "has-error" : ""
            }`}
          >
            <span>
              Motivo <em>* obligatorio</em>
            </span>
            <textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder="Describe el motivo"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Confirmar
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function ReproducerRecordDialog({
  title,
  onClose,
  onSave,
}: {
  title: string
  onClose: () => void
  onSave: () => void
}) {
  const [date, setDate] = useState("")
  const [responsible, setResponsible] = useState("")
  return (
    <DialogShell title={title} onClose={onClose} size="small">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (!date || !responsible.trim()) return
          onSave()
        }}
      >
        <div className="form-content">
          <label className="field">
            <span>
              Fecha <em>* obligatorio</em>
            </span>
            <DatePicker
              value={date}
              max={TODAY_ISO}
              onChange={setDate}
              label="Fecha del registro"
            />
          </label>
          <label className="field">
            <span>
              Responsable <em>* obligatorio</em>
            </span>
            <input
              value={responsible}
              onChange={(event) => setResponsible(event.target.value)}
              placeholder="Nombre del responsable"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Guardar registro
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function ReproducerSheetPanel({
  reproducer,
  onClose,
}: {
  reproducer: Reproducer
  onClose: () => void
}) {
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <aside
        className="sow-panel reproducer-sheet-panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-heading">
          <div>
            <span>Ficha imprimible</span>
            <h2>{reproducer.name}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar">
            <Icon name="x" size={20} />
          </button>
        </div>
        <div className="panel-body">
          <div className="reproducer-sheet-mark">
            <Icon
              name={reproducer.kind === "Macho" ? "boar" : "droplet"}
              size={34}
            />
            <strong>{reproducer.code}</strong>
            <span className="status positive">{reproducer.status}</span>
          </div>
          <div className="movement-detail-list">
            {[
              ["Tipo", reproducer.kind],
              ["Lote", reproducer.lot ?? "Sin registrar"],
              ["Raza / genética", reproducer.breed],
              ["Proveedor", reproducer.supplier ?? "Sin registrar"],
              ["Ingreso", reproducer.entryDate ?? "Sin registrar"],
              ["Servicios", String(reproducer.servicesThisMonth)],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="panel-actions">
          <button className="button secondary" onClick={() => window.print()}>
            <Icon name="download" size={17} /> Imprimir
          </button>
        </div>
      </aside>
    </div>
  )
}

function ReproducerListCard({
  reproducer,
  menuOpen,
  onMenu,
  onView,
  onEdit,
  onStatus,
  onDelete,
}: {
  reproducer: Reproducer
  menuOpen: boolean
  onMenu: () => void
  onView: () => void
  onEdit: () => void
  onStatus: (status: "Descartado" | "Fallecido") => void
  onDelete: () => void
}) {
  return (
    <article
      className="reproducer-card reproducer-list-card"
      onClick={(event) => {
        if ((event.target as Element).closest("button, .lot-menu")) return
        onView()
      }}
    >
      <div className="reproducer-card-heading">
        <span
          className={`reproducer-kind ${
            reproducer.kind === "Macho" ? "male" : "semen"
          }`}
        >
          <Icon
            name={reproducer.kind === "Macho" ? "boar" : "droplet"}
            size={21}
          />
        </span>
        <div>
          <h2>{reproducer.name}</h2>
          <p>Lote: {reproducer.lot ?? "Sin registrar"}</p>
          <div className="reproducer-card-badges">
            <span
              className={`status ${
                reproducer.status === "Activo" ? "positive" : "neutral"
              }`}
            >
              {reproducer.status}
            </span>
            {reproducer.servicesThisMonth === 0 && (
              <span className="status warning">Sin uso</span>
            )}
          </div>
        </div>
        <div className="reproducer-card-menu">
          <button
            className="dots-button"
            aria-label="Opciones del reproductor"
            aria-expanded={menuOpen}
            onClick={onMenu}
          >
            <Icon name="dots" size={19} />
          </button>
          {menuOpen && (
            <div className="lot-menu">
              <button onClick={onView}>
                <Icon name="arrow" size={16} />
                Ver detalle
              </button>
              <button onClick={onEdit}>
                <Icon name="edit" size={16} />
                Editar
              </button>
              <button onClick={() => onStatus("Descartado")}>
                Pasar a descarte
              </button>
              <button onClick={() => onStatus("Fallecido")}>
                Marcar como fallecido
              </button>
              <div className="menu-divider" />
              <button className="delete-item" onClick={onDelete}>
                <Icon name="trash" size={16} />
                Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="reproducer-list-stats">
        <div>
          <span>Ingreso</span>
          <strong>{reproducer.entryDate ?? "15 jul 2025"}</strong>
        </div>
        <div>
          <span>Edad</span>
          <strong>
            {reproducer.kind === "Macho" ? "1 a 11 m" : "Lote externo"}
          </strong>
        </div>
        <div>
          <span>Servicios</span>
          <strong>{reproducer.servicesThisMonth}</strong>
        </div>
      </div>
    </article>
  )
}

type ReproducerDetailTab = "Identificación" | "Gestión semen" | "Sanidad" | "Consumo" | "Desempeño"

function ReproducerDetailV2({
  reproducer,
  onBack,
  onUpdate,
  onDelete,
  onNotice,
}: {
  reproducer: Reproducer
  onBack: () => void
  onUpdate: (reproducer: Reproducer) => void
  onDelete: () => void
  onNotice: (text: string) => void
}) {
  const [tab, setTab] = useState<ReproducerDetailTab>("Identificación")
  const [menuOpen, setMenuOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [recordOpen, setRecordOpen] = useState("")
  const [serviceOpen, setServiceOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [healthView, setHealthView] = useState("Calendario sanitario")
  const [notes, setNotes] = useState(reproducer.observations ?? "")
  const tabs: ReproducerDetailTab[] = [
    "Identificación",
    ...(reproducer.kind === "Macho"
      ? ["Gestión semen"] as ReproducerDetailTab[]
      : []),
    "Sanidad",
    "Consumo",
    "Desempeño",
  ]
  const primaryAction =
    tab === "Identificación"
      ? "Editar"
      : tab === "Gestión semen"
        ? "Registrar extracción"
        : tab === "Sanidad"
          ? "Registrar tratamiento"
          : tab === "Desempeño"
            ? "Registrar servicio"
            : ""
  const runPrimary = () => {
    if (tab === "Identificación") setEditOpen(true)
    else if (tab === "Desempeño") setServiceOpen(true)
    else setRecordOpen(primaryAction)
  }
  return (
    <>
      <header className="reproducer-detail-header">
        <div className="breadcrumbs">
          <span>Inicio</span>
          <Icon name="chevron" size={14} />
          <button onClick={onBack}>Reproductor</button>
          <Icon name="chevron" size={14} />
          <strong>{reproducer.name}</strong>
        </div>
        <div className="reproducer-detail-title">
          <div>
            <div>
              <h1>{reproducer.name}</h1>
              <span
                className={`status ${
                  reproducer.status === "Activo" ? "positive" : "neutral"
                }`}
              >
                {reproducer.status}
              </span>
            </div>
            <p>
              {reproducer.method} · {reproducer.breed} · Lote {reproducer.lot}
            </p>
          </div>
          <div className="header-actions">
            {primaryAction && (
              <button className="button primary" onClick={runPrimary}>
                <Icon
                  name={tab === "Identificación" ? "edit" : "plus"}
                  size={17}
                />
                {primaryAction}
              </button>
            )}
            <button
              className="button secondary"
              onClick={() => setSheetOpen(true)}
            >
              <Icon name="clipboard" size={17} />
              Ver ficha
            </button>
            <div className="detail-menu-wrap">
              <button
                className="detail-menu-button"
                aria-label="Más opciones"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name="dots" size={21} />
              </button>
              {menuOpen && (
                <div className="lot-menu detail-menu">
                  <button onClick={() => onNotice("Histórico descargado")}>
                    <Icon name="download" size={16} />
                    Descargar histórico
                  </button>
                  <div className="menu-divider" />
                  <button
                    className="delete-item"
                    onClick={() => setDeleteOpen(true)}
                  >
                    <Icon name="trash" size={16} />
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {reproducer.kind === "Macho" && (
          <div className="reproducer-warning">
            <Icon name="alert" size={17} />
            Este macho no tiene extracciones de semen registradas
          </div>
        )}
      </header>
      <div className="lot-tabs-wrap reproducer-tabs">
        <nav className="lot-tabs">
          {tabs.map((item) => (
            <button
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="reproducer-tab-content">
        {tab === "Identificación" && (
          <div className="reproducer-identification">
            <section className="records-card">
              <div className="records-heading">
                <div>
                  <h2>Datos del reproductor</h2>
                  <p>Identificación, origen y compra</p>
                </div>
              </div>
              <div className="reproducer-data-grid">
                {[
                  ["ID primaria", reproducer.name],
                  ["ID secundaria", reproducer.secondaryId ?? "Sin registrar"],
                  ["Código", reproducer.code ?? "Sin registrar"],
                  ["Lote", reproducer.lot ?? "Sin registrar"],
                  ["Fecha de ingreso", reproducer.entryDate ?? "Sin registrar"],
                  [
                    "Fecha de nacimiento",
                    reproducer.birthDate ?? "Sin registrar",
                  ],
                  ["Edad", "1 año 11 meses"],
                  ["Raza / línea genética", reproducer.breed],
                  ["Tipo de reproductor", reproducer.kind],
                  ["Total de servicios", String(reproducer.servicesThisMonth)],
                  [
                    "Fecha de compra",
                    reproducer.purchaseDate ?? "Sin registrar",
                  ],
                  [
                    "Valor de compra",
                    reproducer.purchaseValue ?? "Sin registrar",
                  ],
                  [
                    "Peso en compra",
                    reproducer.purchaseWeight ?? "Sin registrar",
                  ],
                  ["Proveedor", reproducer.supplier ?? "Sin registrar"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </section>
            <section className="records-card reproducer-observations">
              <div className="records-heading">
                <div>
                  <h2>Observaciones</h2>
                </div>
              </div>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Escribe una observación"
              />
              <button
                className="button secondary"
                onClick={() => {
                  onUpdate({ ...reproducer, observations: notes })
                  onNotice("Observación agregada")
                }}
              >
                Agregar
              </button>
            </section>
            <div className="reproducer-history-grid">
              {["Condición corporal", "Peso"].map((title, index) => (
                <section className="records-card" key={title}>
                  <div className="records-heading">
                    <div>
                      <h2>{title}</h2>
                      <p>Historial de registros</p>
                    </div>
                    <button
                      className="button secondary"
                      onClick={() =>
                        setRecordOpen(`Registrar ${title.toLowerCase()}`)
                      }
                    >
                      Registrar
                    </button>
                  </div>
                  <div className="simple-history-row">
                    <span>15/03/2026</span>
                    <strong>{index === 0 ? "3,0 / 5" : "184 kg"}</strong>
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}
        {tab === "Gestión semen" && (
          <section className="records-card">
            <div className="records-heading">
              <div>
                <h2>Extracciones de semen</h2>
                <p>Volumen, concentración y dosis</p>
              </div>
            </div>
            <div className="table-wrap borderless">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Volumen ml</th>
                    <th>Concentración</th>
                    <th>Dosis</th>
                    <th>Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="reproducer-empty-cell" colSpan={5}>
                      Sin extracciones registradas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
        {tab === "Sanidad" && (
          <section className="records-card">
            <div className="records-heading reproducer-health-heading">
              <div className="view-toggle">
                {["Calendario sanitario", "Plantilla"].map((item) => (
                  <button
                    className={healthView === item ? "active" : ""}
                    onClick={() => setHealthView(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                className="button secondary"
                onClick={() => setRecordOpen("Registrar evento sanitario")}
              >
                Registrar
              </button>
            </div>
            <div className="reproducer-empty-inline">
              Sin eventos registrados
            </div>
          </section>
        )}
        {tab === "Consumo" && (
          <section className="records-card">
            <div className="records-heading">
              <div>
                <h2>Programa de alimentación</h2>
              </div>
            </div>
            {reproducer.kind === "Macho" ? (
              <div className="feed-program-card">
                <Icon name="box" size={21} />
                <div>
                  <strong>Concentrado Reproductor Premium</strong>
                  <span>3,2 kg por día</span>
                </div>
              </div>
            ) : (
              <div className="applicable-notice">
                <Icon name="info" size={18} />
                Programa de alimentación no asignado · Ve a Configuración ›
                Programa de alimentación para crear uno
              </div>
            )}
          </section>
        )}
        {tab === "Desempeño" && (
          <div className="performance-tab">
            <div className="performance-kpis">
              <div>
                <span>Total servicios</span>
                <strong>{reproducer.servicesThisMonth}</strong>
                <p>Acumulado</p>
              </div>
              <div>
                <span>Tasa de preñez</span>
                <strong>88,9 %</strong>
                <p>Servicios confirmados</p>
              </div>
              <div>
                <span>Prom. nacidos vivos por parto</span>
                <strong>11,8</strong>
                <p>Promedio histórico</p>
              </div>
            </div>
            <section className="records-card">
              <div className="records-heading">
                <div>
                  <h2>Indicadores complementarios</h2>
                </div>
              </div>
              <div className="reproducer-complementary">
                {[
                  "Partos",
                  "Repeticiones",
                  "Pajillas utilizadas",
                  "Nacidos vivos",
                  "Mortinatos",
                  "Momificados",
                  "Nacidos totales",
                ].map((label, index) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{[16, 2, 18, 189, 5, 2, 196][index]}</strong>
                  </div>
                ))}
              </div>
            </section>
            <section className="records-card">
              <div className="records-heading">
                <div>
                  <h2>Historial de servicios</h2>
                </div>
                <div className="export-buttons">
                  <button className="button secondary">CSV</button>
                  <button className="button secondary">Excel</button>
                </div>
              </div>
              <div className="table-wrap borderless reproducer-services-table">
                <table>
                  <thead>
                    <tr>
                      {[
                        "Fecha",
                        "Madre",
                        "Ciclo",
                        "Tipo",
                        "Pajillas",
                        "Días gest.",
                        "Fecha parto",
                        "NV",
                        "Mortinatos",
                        "Momificados",
                        "Observaciones",
                      ].map((label) => (
                        <th key={label}>{label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14/03/2026</td>
                      <td>#1304</td>
                      <td>2</td>
                      <td>{reproducer.method}</td>
                      <td>1</td>
                      <td>114</td>
                      <td>16/03/2026</td>
                      <td>12</td>
                      <td>0</td>
                      <td>0</td>
                      <td>Confirmado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </div>
      {editOpen && (
        <AddReproducerModal
          reproducer={reproducer}
          onClose={() => setEditOpen(false)}
          onSave={(updated) => {
            onUpdate(updated)
            setEditOpen(false)
            onNotice("Cambios guardados")
          }}
        />
      )}
      {serviceOpen && (
        <RegisterServiceModal
          reproducer={reproducer}
          onClose={() => setServiceOpen(false)}
          onSave={() => {
            onUpdate({
              ...reproducer,
              servicesThisMonth: reproducer.servicesThisMonth + 1,
            })
            setServiceOpen(false)
            onNotice("Servicio registrado")
          }}
        />
      )}
      {recordOpen && (
        <ReproducerRecordDialog
          title={recordOpen}
          onClose={() => setRecordOpen("")}
          onSave={() => {
            setRecordOpen("")
            onNotice("Registro guardado")
          }}
        />
      )}
      {sheetOpen && (
        <ReproducerSheetPanel
          reproducer={reproducer}
          onClose={() => setSheetOpen(false)}
        />
      )}
      {deleteOpen && (
        <DeleteReproducerDialog
          reproducer={reproducer}
          onClose={() => setDeleteOpen(false)}
          onConfirm={onDelete}
        />
      )}
    </>
  )
}

function ReproducerPage({
  farmName,
  alerts,
  onNotice,
}: {
  farmName: string
  alerts: HomeFarmAlert[]
  onNotice: (text: string) => void
}) {
  const [reproducers, setReproducers] = useState(() =>
    farmName === "Granja La Esperanza"
      ? initialReproducers
      : farmName === "Granja El Porvenir"
        ? [
            {
              ...initialReproducers[0],
              id: 21,
              name: "Macho Landrace 02",
              breed: "Landrace",
              servicesThisMonth: 12,
            },
            {
              ...initialReproducers[1],
              id: 22,
              name: "Semen Duroc Norte",
              breed: "Duroc",
              servicesThisMonth: 0,
              lot: "S-PV-026",
            },
          ]
        : [
            {
              ...initialReproducers[0],
              id: 31,
              name: "Macho Pietrain 03",
              breed: "Pietrain",
              servicesThisMonth: 9,
            },
            {
              ...initialReproducers[1],
              id: 32,
              name: "Semen Yorkshire Externo",
              breed: "Yorkshire",
              lot: "S-SJ-032",
            },
          ],
  )
  const [kind, setKind] = useState<"Todos" | ReproducerKind>("Todos")
  const [status, setStatus] = useState<ReproducerStatus>("Activo")
  const [query, setQuery] = useState("")
  const [moreOpen, setMoreOpen] = useState(false)
  const [alertsOpen, setAlertsOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)
  const [addKind, setAddKind] = useState<ReproducerKind | null>(null)
  const [selected, setSelected] = useState<Reproducer | null>(null)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editing, setEditing] = useState<Reproducer | null>(null)
  const [statusChange, setStatusChange] = useState<{
    reproducer: Reproducer
    status: "Descartado" | "Fallecido"
  } | null>(null)
  const [undo, setUndo] = useState<Reproducer | null>(null)
  const [undoMessage, setUndoMessage] = useState("Estado actualizado")
  useEffect(() => {
    if (!undo) return
    const timer = window.setTimeout(() => setUndo(null), 5000)
    return () => window.clearTimeout(timer)
  }, [undo])
  const filtered = reproducers.filter(
    (reproducer) =>
      (kind === "Todos" || reproducer.kind === kind) &&
      reproducer.status === status &&
      `${reproducer.name} ${reproducer.lot} ${reproducer.supplier}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  )
  if (selected) {
    return (
      <ReproducerDetailV2
        reproducer={selected}
        onBack={() => setSelected(null)}
        onUpdate={(updated) => {
          setSelected(updated)
          setReproducers(
            reproducers.map((item) =>
              item.id === updated.id ? updated : item,
            ),
          )
        }}
        onDelete={() => {
          setReproducers(reproducers.filter((item) => item.id !== selected.id))
          setSelected(null)
          onNotice("Reproductor eliminado")
        }}
        onNotice={onNotice}
      />
    )
  }
  return (
    <>
      <div className="reproducer-page">
        <ReproducerHeader
          farmName={farmName}
          alerts={alerts}
          moreOpen={moreOpen}
          setMoreOpen={setMoreOpen}
          alertsOpen={alertsOpen}
          setAlertsOpen={setAlertsOpen}
          onAdd={() => setTypeOpen(true)}
          onNotice={onNotice}
        />
        <div className="reproducer-filters">
          <div className="filter-group">
            <span>Tipo</span>
            <div className="view-toggle">
              {(["Todos", "Macho", "Semen"] as const).map((item) => (
                <button
                  className={kind === item ? "active" : ""}
                  onClick={() => setKind(item)}
                  key={item}
                >
                  {item === "Macho" ? "Machos" : item}
                </button>
              ))}
            </div>
          </div>
          <label className="search-field reproducer-search">
            <Icon name="search" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por identificación, lote o proveedor"
            />
          </label>
          <div className="filter-group">
            <span>Estado</span>
            <div className="view-toggle">
              {([
                "Activo",
                "Fallecido",
                "Descartado",
                "Eliminado",
              ] as const).map((item) => (
                <button
                  className={status === item ? "active" : ""}
                  onClick={() => setStatus(item)}
                  key={item}
                >
                  {item === "Activo" ? "Activos" : `${item}s`}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lot-section-heading reproducer-section-heading">
          <div>
            <h2>
              Reproductores de la granja <span>· {filtered.length}</span>
            </h2>
          </div>
        </div>
        <div className="reproducer-grid">
          {filtered.map((reproducer) => (
            <ReproducerListCard
              key={reproducer.id}
              reproducer={reproducer}
              menuOpen={menuOpen === reproducer.id}
              onMenu={() =>
                setMenuOpen(menuOpen === reproducer.id ? null : reproducer.id)
              }
              onView={() => setSelected(reproducer)}
              onEdit={() => {
                setEditing(reproducer)
                setMenuOpen(null)
              }}
              onStatus={(nextStatus) => {
                setStatusChange({ reproducer, status: nextStatus })
                setMenuOpen(null)
              }}
              onDelete={() => {
                setUndo(reproducer)
                setUndoMessage("Reproductor eliminado")
                setReproducers(
                  reproducers.map((item) =>
                    item.id === reproducer.id
                      ? { ...item, status: "Eliminado" }
                      : item,
                  ),
                )
                setMenuOpen(null)
              }}
            />
          ))}
        </div>
      </div>
      {typeOpen && (
        <ReproducerTypeDialog
          onClose={() => setTypeOpen(false)}
          onSelect={(selectedKind) => {
            setTypeOpen(false)
            setAddKind(selectedKind)
          }}
        />
      )}
      {addKind && (
        <AddReproducerModal
          presetKind={addKind}
          onClose={() => setAddKind(null)}
          onSave={(reproducer) => {
            setReproducers([...reproducers, reproducer])
            setAddKind(null)
            onNotice("Reproductor registrado")
          }}
        />
      )}
      {editing && (
        <AddReproducerModal
          reproducer={editing}
          onClose={() => setEditing(null)}
          onSave={(updated) => {
            setReproducers(
              reproducers.map((item) =>
                item.id === updated.id ? updated : item,
              ),
            )
            setEditing(null)
            onNotice("Cambios guardados")
          }}
        />
      )}
      {statusChange && (
        <ReproducerStatusDialog
          reproducer={statusChange.reproducer}
          status={statusChange.status}
          onClose={() => setStatusChange(null)}
          onConfirm={() => {
            const previous = statusChange.reproducer
            setUndo(previous)
            setUndoMessage(
              statusChange.status === "Descartado"
                ? "Reproductor pasado a descarte"
                : "Reproductor marcado como fallecido",
            )
            setReproducers(
              reproducers.map((item) =>
                item.id === previous.id
                  ? { ...item, status: statusChange.status }
                  : item,
              ),
            )
            setStatusChange(null)
          }}
        />
      )}
      {undo && (
        <div className="toast undo-toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          {undoMessage}
          <button
            onClick={() => {
              setReproducers(
                reproducers.map((item) => (item.id === undo.id ? undo : item)),
              )
              setUndo(null)
            }}
          >
            Deshacer
          </button>
        </div>
      )}
    </>
  )
}

type InventoryCategory = "Alimentos" | "Medicamentos"
type InventoryView = "Inventario" | "Historial" | "Conteo físico"

type FoodItem = {
  id: number
  name: string
  stock: number
  minimum: number
  unit: string
  lot: string
  lastPurchase: string
}

type MedicineItem = {
  id: number
  name: string
  stock: number
  minimum: number
  sealed: number
  open: number
  openLevel: number
  empty: number
  expiry: string
}

const initialFoodItems: FoodItem[] = [
  {
    id: 1,
    name: "Concentrado precebo",
    stock: 1260,
    minimum: 600,
    unit: "kg",
    lot: "ALI-2503",
    lastPurchase: "08/03/2026",
  },
  {
    id: 2,
    name: "Concentrado levante",
    stock: 480,
    minimum: 700,
    unit: "kg",
    lot: "ALI-2488",
    lastPurchase: "02/03/2026",
  },
  {
    id: 3,
    name: "Concentrado gestación",
    stock: 920,
    minimum: 500,
    unit: "kg",
    lot: "ALI-2510",
    lastPurchase: "10/03/2026",
  },
]

const initialMedicineItems: MedicineItem[] = [
  {
    id: 1,
    name: "Vacuna Circovirus",
    stock: 4,
    minimum: 3,
    sealed: 3,
    open: 1,
    openLevel: 40,
    empty: 2,
    expiry: "15/03/2026",
  },
  {
    id: 2,
    name: "Oxitocina 10 unidades internacionales",
    stock: 2,
    minimum: 4,
    sealed: 2,
    open: 0,
    openLevel: 0,
    empty: 1,
    expiry: "14/03/2026",
  },
  {
    id: 3,
    name: "Hierro dextrano",
    stock: 7,
    minimum: 3,
    sealed: 6,
    open: 1,
    openLevel: 75,
    empty: 0,
    expiry: "16/03/2026",
  },
]

type InventoryAttention = {
  id: number
  category: InventoryCategory
  product: string
  title: string
  detail: string
  action: "Dar de baja" | "Registrar compra"
  critical: boolean
}

const initialInventoryAttention: InventoryAttention[] = [
  {
    id: 1,
    category: "Medicamentos",
    product: "Vacuna Circovirus",
    title: "Medicamento por vencer",
    detail: "Venció el 15/03/2026 · quedan 4 ítems",
    action: "Dar de baja",
    critical: true,
  },
  {
    id: 2,
    category: "Medicamentos",
    product: "Oxitocina 10 unidades internacionales",
    title: "Stock bajo",
    detail: "2 ítems disponibles · mínimo 4",
    action: "Registrar compra",
    critical: false,
  },
  {
    id: 3,
    category: "Alimentos",
    product: "Concentrado levante",
    title: "Stock bajo",
    detail: "480 kg disponibles · mínimo 700 kg",
    action: "Registrar compra",
    critical: false,
  },
]

function InventoryHeader({
  farmName,
  onPurchase,
}: {
  farmName: string
  onPurchase: () => void
}) {
  return (
    <header className="page-header inventory-header">
      <div>
        <div className="breadcrumbs">
          <span>Inicio</span>
          <Icon name="chevron" size={14} />
          <span>{farmName}</span>
          <Icon name="chevron" size={14} />
          <strong>Inventario</strong>
        </div>
        <h1>Inventario · {farmName}</h1>
        <p>Alimentos, medicamentos y movimientos de la granja</p>
      </div>
      <div className="header-actions">
        <button className="button primary" onClick={onPurchase}>
          <Icon name="plus" size={18} />
          Registrar compra
        </button>
      </div>
    </header>
  )
}

function InventoryAttentionSection({
  items,
  onAction,
}: {
  items: InventoryAttention[]
  onAction: (item: InventoryAttention) => void
}) {
  if (!items.length) return null
  return (
    <section className="inventory-attention">
      <div className="inventory-section-heading">
        <div>
          <span className="attend-icon">
            <Icon name="alert" size={18} />
          </span>
          <div>
            <h2>Requiere atención</h2>
            <p>
              {items.length === 1
                ? "1 producto necesita una acción"
                : `${items.length} productos necesitan una acción`}
            </p>
          </div>
        </div>
      </div>
      <div className="inventory-attention-list">
        {items.map((item) => (
          <div className="inventory-attention-row" key={item.id}>
            <span
              className={`alert-dot ${
                item.critical ? "urgency-1" : "urgency-2"
              }`}
            />
            <div>
              <strong>{item.product}</strong>
              <span>
                {item.title} · {item.detail}
              </span>
            </div>
            <button
              className={
                item.action === "Dar de baja"
                  ? "button danger-outline"
                  : "button secondary"
              }
              onClick={() => onAction(item)}
            >
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function RemoveInventoryDialog({
  product,
  onClose,
  onConfirm,
}: {
  product: string
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <DialogShell
      title="Dar de baja del inventario"
      onClose={onClose}
      size="small"
    >
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se retirará <strong>{product}</strong> del inventario. Confirma para
          continuar.
        </p>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button className="button danger" onClick={onConfirm}>
          Confirmar baja
        </button>
      </div>
    </DialogShell>
  )
}

function InventoryRowMenu({
  anchor,
  onClose,
  onHistory,
  onEdit,
  onCount,
  onRemove,
}: {
  anchor: HTMLButtonElement
  onClose: () => void
  onHistory: () => void
  onEdit: () => void
  onCount: () => void
  onRemove: () => void
}) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useLayoutEffect(() => {
    const positionMenu = () => {
      const menu = menuRef.current
      if (!menu) return

      const viewportMargin = 12
      const gap = 6
      const anchorRect = anchor.getBoundingClientRect()
      const menuRect = menu.getBoundingClientRect()
      const left = Math.min(
        Math.max(anchorRect.right - menuRect.width, viewportMargin),
        window.innerWidth - menuRect.width - viewportMargin,
      )
      const fitsBelow =
        window.innerHeight - anchorRect.bottom >=
        menuRect.height + gap + viewportMargin
      const top = fitsBelow
        ? anchorRect.bottom + gap
        : Math.max(viewportMargin, anchorRect.top - menuRect.height - gap)

      setPosition({ top, left })
    }
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!menuRef.current?.contains(target) && !anchor.contains(target)) {
        onClose()
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    positionMenu()
    window.addEventListener("resize", positionMenu)
    window.addEventListener("scroll", positionMenu, true)
    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("resize", positionMenu)
      window.removeEventListener("scroll", positionMenu, true)
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [anchor, onClose])

  return createPortal(
    <div className="lot-menu inventory-row-menu" ref={menuRef} style={position}>
      <button onClick={onHistory}>
        <Icon name="clock" size={16} />
        Ver historial
      </button>
      <button onClick={onEdit}>
        <Icon name="edit" size={16} />
        Editar
      </button>
      <button onClick={onCount}>
        <Icon name="check" size={16} />
        Contar
      </button>
      <div className="menu-divider" />
      <button className="delete-item" onClick={onRemove}>
        <Icon name="trash" size={16} />
        Dar de baja
      </button>
    </div>,
    document.body,
  )
}

function FoodInventoryTable({
  items,
  menuOpen,
  setMenuOpen,
  onView,
  onNotice,
  onRemove,
}: {
  items: FoodItem[]
  menuOpen: string | null
  setMenuOpen: (value: string | null) => void
  onView: (view: InventoryView) => void
  onNotice: (text: string) => void
  onRemove: (item: FoodItem) => void
}) {
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null)
  const closeMenu = () => {
    setMenuOpen(null)
    setMenuAnchor(null)
  }
  return (
    <div className="table-wrap inventory-table food-table">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Lote</th>
            <th>Stock actual</th>
            <th>Stock mínimo</th>
            <th>Última compra</th>
            <th>Estado</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const low = item.stock < item.minimum
            const key = `food-${item.id}`
            return (
              <tr key={item.id}>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>{item.lot}</td>
                <td>
                  {formatDecimal(item.stock)} {item.unit}
                </td>
                <td>
                  {formatDecimal(item.minimum)} {item.unit}
                </td>
                <td>{item.lastPurchase}</td>
                <td>
                  <span className={`status ${low ? "warning" : "positive"}`}>
                    {low ? "Stock bajo" : "Disponible"}
                  </span>
                </td>
                <td className="row-actions-cell">
                  <button
                    className="dots-button"
                    aria-label={`Acciones de ${item.name}`}
                    onClick={(event) => {
                      if (menuOpen === key) {
                        closeMenu()
                      } else {
                        setMenuAnchor(event.currentTarget)
                        setMenuOpen(key)
                      }
                    }}
                  >
                    <Icon name="dots" size={20} />
                  </button>
                  {menuOpen === key && menuAnchor && (
                    <InventoryRowMenu
                      anchor={menuAnchor}
                      onClose={closeMenu}
                      onHistory={() => {
                        closeMenu()
                        onView("Historial")
                      }}
                      onEdit={() => {
                        closeMenu()
                        onNotice(`Edición de ${item.name}`)
                      }}
                      onCount={() => {
                        closeMenu()
                        onView("Conteo físico")
                      }}
                      onRemove={() => {
                        closeMenu()
                        onRemove(item)
                      }}
                    />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function MedicineInventoryTable({
  items,
  menuOpen,
  setMenuOpen,
  onView,
  onNotice,
  onRemove,
}: {
  items: MedicineItem[]
  menuOpen: string | null
  setMenuOpen: (value: string | null) => void
  onView: (view: InventoryView) => void
  onNotice: (text: string) => void
  onRemove: (item: MedicineItem) => void
}) {
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null)
  const closeMenu = () => {
    setMenuOpen(null)
    setMenuAnchor(null)
  }
  return (
    <div className="table-wrap inventory-table medicine-table">
      <table>
        <thead>
          <tr>
            <th>Medicamento</th>
            <th>Presentaciones</th>
            <th>Stock</th>
            <th>Vencimiento</th>
            <th>Estado</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const low = item.stock < item.minimum
            const key = `medicine-${item.id}`
            return (
              <tr key={item.id}>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td>
                  <div className="container-summary">
                    <span>
                      {item.sealed} {item.sealed === 1 ? "sellado" : "sellados"}{" "}
                      · {item.open} {item.open === 1 ? "abierto" : "abiertos"}
                      {item.open ? ` (${item.openLevel} % restante)` : ""} ·{" "}
                      {item.empty} {item.empty === 1 ? "vacío" : "vacíos"}
                    </span>
                    {item.open > 0 && (
                      <div className="bottle-level">
                        <span style={{ width: `${item.openLevel}%` }} />
                      </div>
                    )}
                  </div>
                </td>
                <td>{countLabel(item.stock, "ítem", "ítems")}</td>
                <td>
                  <span
                    className={
                      item.id === 1 ? "expiry-date urgent" : "expiry-date"
                    }
                  >
                    {item.expiry}
                  </span>
                </td>
                <td>
                  <span
                    className={`status ${
                      item.id === 1 ? "critical" : low ? "warning" : "positive"
                    }`}
                  >
                    {item.id === 1
                      ? "Por vencer"
                      : low
                        ? "Stock bajo"
                        : "Disponible"}
                  </span>
                </td>
                <td className="row-actions-cell">
                  <button
                    className="dots-button"
                    aria-label={`Acciones de ${item.name}`}
                    onClick={(event) => {
                      if (menuOpen === key) {
                        closeMenu()
                      } else {
                        setMenuAnchor(event.currentTarget)
                        setMenuOpen(key)
                      }
                    }}
                  >
                    <Icon name="dots" size={20} />
                  </button>
                  {menuOpen === key && menuAnchor && (
                    <InventoryRowMenu
                      anchor={menuAnchor}
                      onClose={closeMenu}
                      onHistory={() => {
                        closeMenu()
                        onView("Historial")
                      }}
                      onEdit={() => {
                        closeMenu()
                        onNotice(`Edición de ${item.name}`)
                      }}
                      onCount={() => {
                        closeMenu()
                        onView("Conteo físico")
                      }}
                      onRemove={() => {
                        closeMenu()
                        onRemove(item)
                      }}
                    />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function InventoryHistory({ category }: { category: InventoryCategory }) {
  return (
    <div className="table-wrap inventory-table">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Movimiento</th>
            <th>Cantidad</th>
            <th>Responsable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15/03/2026</td>
            <td>
              {category === "Alimentos"
                ? "Concentrado precebo"
                : "Vacuna Circovirus"}
            </td>
            <td>
              <span className="status positive">Compra</span>
            </td>
            <td>{category === "Alimentos" ? "420,0 kg" : "4 ítems"}</td>
            <td>Andrés Mejía</td>
          </tr>
          <tr>
            <td>13/03/2026</td>
            <td>
              {category === "Alimentos"
                ? "Concentrado levante"
                : "Hierro dextrano"}
            </td>
            <td>
              <span className="status neutral">Consumo</span>
            </td>
            <td>{category === "Alimentos" ? "85,5 kg" : "1 ítem"}</td>
            <td>Carlos Ríos</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

type CountItem = {
  id: number
  name: string
  system: number
  unit: string
}

function PhysicalCount({
  category,
  foods,
  medicines,
  onSave,
}: {
  category: InventoryCategory
  foods: FoodItem[]
  medicines: MedicineItem[]
  onSave: () => void
}) {
  const items: CountItem[] =
    category === "Alimentos"
      ? foods.map((item) => ({
          id: item.id,
          name: item.name,
          system: item.stock,
          unit: item.unit,
        }))
      : medicines.map((item) => ({
          id: item.id,
          name: item.name,
          system: item.stock,
          unit: "ítems",
        }))
  const [counts, setCounts] = useState<Record<number, string>>({})
  return (
    <div className="physical-count">
      <div className="count-heading">
        <div>
          <h2>Conteo físico</h2>
          <p>
            Escribe lo que encuentras. La diferencia se calcula automáticamente.
          </p>
        </div>
        <button className="button secondary" onClick={onSave}>
          Guardar conteo
        </button>
      </div>
      <div className="count-list">
        {items.map((item) => {
          const value = counts[item.id] ?? ""
          const parsed = value ? Number(value.replace(",", ".")) : null
          const difference = parsed === null ? null : parsed - item.system
          return (
            <div className="count-row" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <span>
                  Sistema: {formatDecimal(item.system)} {item.unit}
                </span>
              </div>
              <label className="field count-field">
                <span>Conteo real</span>
                <input
                  inputMode="decimal"
                  value={value}
                  onChange={(e) =>
                    setCounts({
                      ...counts,
                      [item.id]: e.target.value.replace(/[^\d,.]/g, ""),
                    })
                  }
                  placeholder="Vacío"
                />
              </label>
              <div
                className={`count-difference ${
                  difference === null
                    ? ""
                    : difference === 0
                      ? "match"
                      : "different"
                }`}
              >
                <span>Diferencia</span>
                <strong>
                  {difference === null
                    ? "—"
                    : difference < 0
                      ? `Faltan ${formatDecimal(Math.abs(difference))} ${
                          item.unit
                        }`
                      : difference > 0
                        ? `Sobran ${formatDecimal(difference)} ${item.unit}`
                        : `Sin diferencia · ${formatDecimal(0)} ${item.unit}`}
                </strong>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type PurchaseDraft = {
  category: InventoryCategory
  product: string
  quantity: number
}

function PurchaseModal({
  category,
  product,
  onClose,
  onSave,
}: {
  category: InventoryCategory
  product?: string
  onClose: () => void
  onSave: (purchase: PurchaseDraft) => void
}) {
  const [form, setForm] = useState({
    category,
    product: product ?? "",
    quantity: "",
    date: TODAY_ISO,
    supplier: "",
  })
  const [invoice, setInvoice] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty =
    form.category !== category ||
    form.product !== (product ?? "") ||
    form.date !== TODAY_ISO ||
    Boolean(form.quantity || form.supplier || invoice)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!form.product || !form.quantity || !form.date) return
    onSave({
      category: form.category,
      product: form.product,
      quantity: Number(form.quantity.replace(",", ".")),
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <DialogShell title="Registrar compra" onClose={attemptClose} size="wide">
      <form onSubmit={submit}>
        <div className="form-content purchase-form">
          <div className="form-grid">
            <label className="field">
              <span>Tipo de inventario</span>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as InventoryCategory,
                    product: "",
                  })
                }
              >
                <option>Alimentos</option>
                <option>Medicamentos</option>
              </select>
            </label>
            <label
              className={`field ${
                submitted && !form.product ? "has-error" : ""
              }`}
            >
              <span>
                Producto <em>* obligatorio</em>
              </span>
              <input
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                placeholder="Escribe o selecciona el producto"
              />
              {submitted && !form.product && (
                <small>
                  <Icon name="alert" size={14} />
                  Elige un producto
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && !form.quantity ? "has-error" : ""
              }`}
            >
              <span>
                Cantidad <em>* obligatorio</em>
              </span>
              <input
                inputMode="decimal"
                value={form.quantity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    quantity: e.target.value.replace(/[^\d,.]/g, ""),
                  })
                }
                placeholder={
                  form.category === "Alimentos" ? "Ej. 420,5 kg" : "Ej. 6 ítems"
                }
              />
              {submitted && !form.quantity && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe la cantidad comprada
                </small>
              )}
            </label>
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha de compra <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                max={TODAY_ISO}
                onChange={(value) => setForm({ ...form, date: value })}
                label="Seleccionar fecha de compra"
              />
              {submitted && !form.date && (
                <small>
                  <Icon name="alert" size={14} />
                  Selecciona la fecha de compra
                </small>
              )}
            </label>
            <label className="field">
              <span>Proveedor</span>
              <input
                value={form.supplier}
                onChange={(e) => setForm({ ...form, supplier: e.target.value })}
                placeholder="Nombre del proveedor"
              />
            </label>
            <label className="field invoice-upload">
              <span>Foto de la factura</span>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setInvoice(e.target.files?.[0]?.name ?? "")}
              />
              <span className="upload-control">
                <Icon name="download" size={18} />
                {invoice || "Seleccionar archivo"}
              </span>
            </label>
          </div>
        </div>
        <div className="modal-actions large-actions">
          <button
            type="button"
            className="button secondary"
            onClick={attemptClose}
          >
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Registrar compra
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function InventoryPage({
  farmName,
  attention,
  setAttention,
  onNotice,
}: {
  farmName: string
  attention: InventoryAttention[]
  setAttention: (items: InventoryAttention[]) => void
  onNotice: (text: string) => void
}) {
  const [category, setCategory] = useState<InventoryCategory>("Alimentos")
  const [view, setView] = useState<InventoryView>("Inventario")
  const [foods, setFoods] = useState(() =>
    farmName === "Granja La Esperanza"
      ? initialFoodItems
      : initialFoodItems.map((item, index) => ({
          ...item,
          id: item.id + (farmName === "Granja El Porvenir" ? 20 : 40),
          stock:
            farmName === "Granja El Porvenir"
              ? item.stock * 0.65
              : item.stock * 0.82,
          lot: `${
            farmName === "Granja El Porvenir" ? "PV" : "SJ"
          }-${250 + index}`,
        })),
  )
  const [medicines, setMedicines] = useState(() =>
    farmName === "Granja La Esperanza"
      ? initialMedicineItems
      : initialMedicineItems.map((item) => ({
          ...item,
          id: item.id + (farmName === "Granja El Porvenir" ? 20 : 40),
          stock:
            farmName === "Granja El Porvenir"
              ? Math.max(1, item.stock - 1)
              : item.stock + 2,
        })),
  )
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todos")
  const [menuOpen, setMenuOpen] = useState<string | null>(null)
  const [purchase, setPurchase] = useState<{
    category: InventoryCategory
    product?: string
  } | null>(null)
  const [pendingRemoval, setPendingRemoval] = useState<{
    category: InventoryCategory
    product: string
  } | null>(null)

  const filteredFoods = foods.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (statusFilter === "Todos" ||
        (statusFilter === "Stock bajo"
          ? item.stock < item.minimum
          : item.stock >= item.minimum)),
  )
  const filteredMedicines = medicines.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (statusFilter === "Todos" ||
        (statusFilter === "Stock bajo"
          ? item.stock < item.minimum
          : item.stock >= item.minimum)),
  )
  const foodTotal = foods.reduce((sum, item) => sum + item.stock, 0)
  const medicineTotal = medicines.reduce((sum, item) => sum + item.stock, 0)

  return (
    <>
      <div className="inventory-page">
        <InventoryHeader
          farmName={farmName}
          onPurchase={() => setPurchase({ category })}
        />
        <InventoryAttentionSection
          items={attention}
          onAction={(item) => {
            if (item.action === "Registrar compra") {
              setPurchase({
                category: item.category,
                product: item.product,
              })
            } else {
              setPendingRemoval({
                category: item.category,
                product: item.product,
              })
            }
          }}
        />
        <div className="inventory-kpis">
          <div>
            <span className="inventory-kpi-icon food">
              <Icon name="box" size={22} />
            </span>
            <div>
              <span>Alimento disponible</span>
              <strong>{formatDecimal(foodTotal)} kg</strong>
            </div>
          </div>
          <div>
            <span className="inventory-kpi-icon medicine">
              <Icon name="syringe" size={22} />
            </span>
            <div>
              <span>Medicamentos</span>
              <strong>{medicineTotal} ítems</strong>
            </div>
          </div>
        </div>
        <section className="inventory-workspace">
          <div className="inventory-main-tabs">
            {(["Alimentos", "Medicamentos"] as const).map((item) => (
              <button
                className={category === item ? "active" : ""}
                onClick={() => {
                  setCategory(item)
                  setQuery("")
                  setStatusFilter("Todos")
                }}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="inventory-view-bar">
            <div className="inventory-views">
              {(["Inventario", "Historial", "Conteo físico"] as const).map(
                (item) => (
                  <button
                    className={view === item ? "active" : ""}
                    onClick={() => setView(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            {view === "Inventario" && (
              <div className="inventory-filters">
                <label className="search-field">
                  <Icon name="search" size={17} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Buscar en ${category.toLowerCase()}`}
                  />
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Todos</option>
                  <option>Disponible</option>
                  <option>Stock bajo</option>
                </select>
              </div>
            )}
          </div>
          <div className="inventory-view-content">
            {view === "Inventario" &&
              (category === "Alimentos" ? (
                <FoodInventoryTable
                  items={filteredFoods}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  onView={setView}
                  onNotice={onNotice}
                  onRemove={(item) => {
                    setPendingRemoval({
                      category: "Alimentos",
                      product: item.name,
                    })
                  }}
                />
              ) : (
                <MedicineInventoryTable
                  items={filteredMedicines}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  onView={setView}
                  onNotice={onNotice}
                  onRemove={(item) => {
                    setPendingRemoval({
                      category: "Medicamentos",
                      product: item.name,
                    })
                  }}
                />
              ))}
            {view === "Historial" && <InventoryHistory category={category} />}
            {view === "Conteo físico" && (
              <PhysicalCount
                key={category}
                category={category}
                foods={foods}
                medicines={medicines}
                onSave={() => onNotice("Conteo físico guardado")}
              />
            )}
          </div>
        </section>
      </div>
      {purchase && (
        <PurchaseModal
          category={purchase.category}
          product={purchase.product}
          onClose={() => setPurchase(null)}
          onSave={(draft) => {
            if (draft.category === "Alimentos") {
              const existing = foods.find(
                (item) =>
                  item.name.toLowerCase() === draft.product.toLowerCase(),
              )
              setFoods(
                existing
                  ? foods.map((item) =>
                      item.id === existing.id
                        ? { ...item, stock: item.stock + draft.quantity }
                        : item,
                    )
                  : [
                      ...foods,
                      {
                        id: Date.now(),
                        name: draft.product,
                        stock: draft.quantity,
                        minimum: 0,
                        unit: "kg",
                        lot: "Sin lote",
                        lastPurchase: formatDate(
                          new Date(`${TODAY_ISO}T12:00:00`),
                        ),
                      },
                    ],
              )
            } else {
              const existing = medicines.find(
                (item) =>
                  item.name.toLowerCase() === draft.product.toLowerCase(),
              )
              setMedicines(
                existing
                  ? medicines.map((item) =>
                      item.id === existing.id
                        ? { ...item, stock: item.stock + draft.quantity }
                        : item,
                    )
                  : [
                      ...medicines,
                      {
                        id: Date.now(),
                        name: draft.product,
                        stock: draft.quantity,
                        minimum: 0,
                        sealed: draft.quantity,
                        open: 0,
                        openLevel: 0,
                        empty: 0,
                        expiry: "Sin registrar",
                      },
                    ],
              )
            }
            setAttention(
              attention.filter(
                (item) =>
                  item.product.toLowerCase() !== draft.product.toLowerCase(),
              ),
            )
            setPurchase(null)
            onNotice("Compra registrada")
          }}
        />
      )}
      {pendingRemoval && (
        <RemoveInventoryDialog
          product={pendingRemoval.product}
          onClose={() => setPendingRemoval(null)}
          onConfirm={() => {
            if (pendingRemoval.category === "Alimentos") {
              setFoods(
                foods.filter((item) => item.name !== pendingRemoval.product),
              )
            } else {
              setMedicines(
                medicines.filter(
                  (item) => item.name !== pendingRemoval.product,
                ),
              )
            }
            setAttention(
              attention.filter(
                (item) => item.product !== pendingRemoval.product,
              ),
            )
            onNotice(`${pendingRemoval.product} dado de baja`)
            setPendingRemoval(null)
          }}
        />
      )}
    </>
  )
}

type PediluvioStatus = "Hecho" | "Pendiente"
type PediluvioRecord = {
  id: number
  date: string
  area: string
  product: string
  productQuantity: string
  waterQuantity: string
  time: string
  responsible: string
  status: PediluvioStatus
}

const initialPediluvioRecords: PediluvioRecord[] = [
  {
    id: 1,
    date: "16/03/2026",
    area: "Precebo 1",
    product: "Amonio cuaternario",
    productQuantity: "120",
    waterQuantity: "20",
    time: "06:30",
    responsible: "Carlos Ríos",
    status: "Hecho",
  },
  {
    id: 2,
    date: "16/03/2026",
    area: "Levante 2",
    product: "Glutaraldehído",
    productQuantity: "100",
    waterQuantity: "20",
    time: "06:45",
    responsible: "Lina Gómez",
    status: "Hecho",
  },
  {
    id: 3,
    date: "16/03/2026",
    area: "Gestación",
    product: "Amonio cuaternario",
    productQuantity: "150",
    waterQuantity: "25",
    time: "07:00",
    responsible: "Andrés Mejía",
    status: "Hecho",
  },
  {
    id: 4,
    date: "16/03/2026",
    area: "Maternidad",
    product: "Peróxido",
    productQuantity: "80",
    waterQuantity: "15",
    time: "07:15",
    responsible: "Sara Pérez",
    status: "Pendiente",
  },
  {
    id: 5,
    date: "15/03/2026",
    area: "Precebo 2",
    product: "Amonio cuaternario",
    productQuantity: "120",
    waterQuantity: "20",
    time: "06:35",
    responsible: "Carlos Ríos",
    status: "Hecho",
  },
  {
    id: 6,
    date: "15/03/2026",
    area: "Levante 1",
    product: "Glutaraldehído",
    productQuantity: "100",
    waterQuantity: "20",
    time: "06:50",
    responsible: "Lina Gómez",
    status: "Hecho",
  },
  {
    id: 7,
    date: "15/03/2026",
    area: "Reemplazos",
    product: "Peróxido",
    productQuantity: "90",
    waterQuantity: "18",
    time: "07:05",
    responsible: "Andrés Mejía",
    status: "Hecho",
  },
  {
    id: 8,
    date: "15/03/2026",
    area: "Cuarentena",
    product: "Amonio cuaternario",
    productQuantity: "110",
    waterQuantity: "20",
    time: "07:20",
    responsible: "Sara Pérez",
    status: "Pendiente",
  },
]

function EditableTableCell({
  value,
  onSave,
  className = "",
  suffix = "",
}: {
  value: string
  onSave: (value: string) => void
  className?: string
  suffix?: string
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const save = () => {
    onSave(draft.trim() || value)
    setEditing(false)
  }
  return (
    <td
      className={`editable-cell ${className}`}
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={save}
          onKeyDown={(event) => {
            if (event.key === "Enter") save()
            if (event.key === "Escape") {
              setDraft(value)
              setEditing(false)
            }
          }}
        />
      ) : (
        <>
          <span>
            {value}
            {suffix}
          </span>
          <Icon name="edit" size={14} />
        </>
      )}
    </td>
  )
}

type PediluvioDraft = Omit<PediluvioRecord, "id" | "status">

function NewPediluvioPanel({
  onClose,
  onSave,
}: {
  onClose: () => void
  onSave: (record: PediluvioRecord) => void
}) {
  const [form, setForm] = useState<PediluvioDraft>({
    date: TODAY_ISO,
    area: "",
    product: "",
    productQuantity: "",
    waterQuantity: "",
    time: "",
    responsible: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty =
    form.date !== TODAY_ISO ||
    Object.entries(form).some(
      ([key, value]) => key !== "date" && Boolean(value),
    )
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      !form.area.trim() ||
      !form.product.trim() ||
      !form.responsible.trim()
    ) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    onSave({
      id: Date.now(),
      ...form,
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      status: "Hecho",
    })
  }
  if (confirmExit) {
    return (
      <DiscardChangesDialog
        onDiscard={onClose}
        onKeepEditing={() => setConfirmExit(false)}
      />
    )
  }
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(event) =>
        event.target === event.currentTarget && attemptClose()
      }
    >
      <aside
        className="sow-panel porci-form-panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-heading">
          <div>
            <span>Control de pediluvios</span>
            <h2>Nuevo registro</h2>
          </div>
          <button
            className="icon-button"
            aria-label="Cerrar"
            onClick={attemptClose}
          >
            <Icon name="x" size={20} />
          </button>
        </div>
        <form onSubmit={submit} className="panel-form">
          <div className="panel-body">
            <div className="form-grid">
              <label
                className={`field ${
                  submitted && !form.date ? "has-error" : ""
                }`}
              >
                <span>
                  Fecha <em>* obligatorio</em>
                </span>
                <DatePicker
                  value={form.date}
                  max={TODAY_ISO}
                  onChange={(value) => setForm({ ...form, date: value })}
                  label="Seleccionar fecha del registro"
                />
                {submitted && !form.date && (
                  <small>
                    <Icon name="alert" size={14} />
                    Selecciona la fecha
                  </small>
                )}
              </label>
              <label className="field">
                <span>Hora</span>
                <input
                  type="time"
                  value={form.time}
                  onChange={(event) =>
                    setForm({ ...form, time: event.target.value })
                  }
                />
              </label>
            </div>
            <label
              className={`field ${
                submitted && !form.area.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Área <em>* obligatorio</em>
              </span>
              <input
                value={form.area}
                onChange={(event) =>
                  setForm({ ...form, area: event.target.value })
                }
                placeholder="Ej. Precebo 1"
                aria-invalid={submitted && !form.area.trim()}
              />
              {submitted && !form.area.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el área
                </small>
              )}
            </label>
            <label
              className={`field ${
                submitted && !form.product.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Producto <em>* obligatorio</em>
              </span>
              <input
                value={form.product}
                onChange={(event) =>
                  setForm({ ...form, product: event.target.value })
                }
                placeholder="Nombre del desinfectante"
                aria-invalid={submitted && !form.product.trim()}
              />
              {submitted && !form.product.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el producto
                </small>
              )}
            </label>
            <div className="form-grid">
              <label className="field">
                <span>Cantidad de producto (ml)</span>
                <input
                  inputMode="decimal"
                  value={form.productQuantity}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      productQuantity: event.target.value.replace(
                        /[^\d,.]/g,
                        "",
                      ),
                    })
                  }
                  placeholder="Ej. 120"
                />
              </label>
              <label className="field">
                <span>Cantidad de agua (L)</span>
                <input
                  inputMode="decimal"
                  value={form.waterQuantity}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      waterQuantity: event.target.value.replace(/[^\d,.]/g, ""),
                    })
                  }
                  placeholder="Ej. 20"
                />
              </label>
            </div>
            <label
              className={`field ${
                submitted && !form.responsible.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Responsable <em>* obligatorio</em>
              </span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
                placeholder="Nombre de quien realizó el control"
                aria-invalid={submitted && !form.responsible.trim()}
              />
              {submitted && !form.responsible.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el responsable
                </small>
              )}
            </label>
          </div>
          <div className="panel-actions">
            <button
              type="button"
              className="button secondary"
              onClick={attemptClose}
            >
              Cancelar
            </button>
            <button className="button primary" type="submit">
              Guardar registro
            </button>
          </div>
        </form>
      </aside>
    </div>
  )
}

type PorciColumnType = "Texto" | "Número" | "Fecha" | "Hora" | "Lista de opciones" | "Estado Hecho/Pendiente"

type PorciColumn = {
  id: string
  name: string
  type: PorciColumnType
  required: boolean
  locked?: boolean
}

type PorciTableDefinition = {
  id: string
  name: string
  icon: IconName
  columns: PorciColumn[]
}

type PorciDynamicRecord = {
  id: number
  values: Record<string, string>
}

const porciIconOptions: IconName[] = [
  "table",
  "droplet",
  "check",
  "trend",
  "box",
  "calendar",
]

const porciColumnTypes: PorciColumnType[] = [
  "Texto",
  "Número",
  "Fecha",
  "Hora",
  "Lista de opciones",
  "Estado Hecho/Pendiente",
]

const initialPorciTables: PorciTableDefinition[] = [
  {
    id: "pediluvios",
    name: "Control de pediluvios",
    icon: "droplet",
    columns: [
      {
        id: "date",
        name: "Fecha",
        type: "Fecha",
        required: true,
        locked: true,
      },
      {
        id: "area",
        name: "Área",
        type: "Texto",
        required: true,
        locked: true,
      },
      { id: "product", name: "Producto", type: "Texto", required: true },
      {
        id: "productQuantity",
        name: "Cantidad de producto (ml)",
        type: "Número",
        required: false,
      },
      {
        id: "waterQuantity",
        name: "Cantidad de agua (L)",
        type: "Número",
        required: false,
      },
      { id: "time", name: "Hora", type: "Hora", required: false },
      {
        id: "responsible",
        name: "Responsable",
        type: "Texto",
        required: true,
      },
      {
        id: "status",
        name: "Estado",
        type: "Estado Hecho/Pendiente",
        required: true,
      },
    ],
  },
  {
    id: "corrales",
    name: "Limpieza de corrales",
    icon: "check",
    columns: [
      {
        id: "date",
        name: "Fecha",
        type: "Fecha",
        required: true,
        locked: true,
      },
      {
        id: "area",
        name: "Área",
        type: "Texto",
        required: true,
        locked: true,
      },
      {
        id: "responsible",
        name: "Responsable",
        type: "Texto",
        required: false,
      },
      {
        id: "status",
        name: "Estado",
        type: "Estado Hecho/Pendiente",
        required: true,
      },
    ],
  },
  {
    id: "temperaturas",
    name: "Temperatura de salas",
    icon: "trend",
    columns: [
      {
        id: "date",
        name: "Fecha",
        type: "Fecha",
        required: true,
        locked: true,
      },
      {
        id: "area",
        name: "Área",
        type: "Texto",
        required: true,
        locked: true,
      },
      {
        id: "temperature",
        name: "Temperatura",
        type: "Número",
        required: true,
      },
      { id: "time", name: "Hora", type: "Hora", required: false },
    ],
  },
]

const initialPorciRecords: Record<string, PorciDynamicRecord[]> = {
  pediluvios: initialPediluvioRecords.map((record) => ({
    id: record.id,
    values: {
      date: record.date,
      area: record.area,
      product: record.product,
      productQuantity: record.productQuantity,
      waterQuantity: record.waterQuantity,
      time: record.time,
      responsible: record.responsible,
      status: record.status,
    },
  })),
  corrales: [],
  temperaturas: [],
}

function PorciTableListItem({
  table,
  selected,
  menuOpen,
  onSelect,
  onMenu,
  onCloseMenu,
  onEdit,
  onDuplicate,
  onDelete,
}: {
  table: PorciTableDefinition
  selected: boolean
  menuOpen: boolean
  onSelect: () => void
  onMenu: () => void
  onCloseMenu: () => void
  onEdit: () => void
  onDuplicate: () => void
  onDelete: () => void
}) {
  const menuRef = useDismissibleMenu(menuOpen, onCloseMenu)
  return (
    <div
      className={`porci-table-list-item ${selected ? "active" : ""}`}
      ref={menuRef}
    >
      <button className="porci-table-select" onClick={onSelect}>
        <Icon name={table.icon} size={18} />
        <span>{table.name}</span>
      </button>
      <button
        className="porci-table-menu-button"
        aria-label={`Opciones de ${table.name}`}
        aria-expanded={menuOpen}
        onClick={onMenu}
      >
        <Icon name="dots" size={18} />
      </button>
      {menuOpen && (
        <div className="lot-menu porci-table-menu">
          <button onClick={onEdit}>
            <Icon name="edit" size={16} />
            Editar tabla
          </button>
          <button onClick={onDuplicate}>
            <Icon name="list" size={16} />
            Duplicar
          </button>
          <div className="menu-divider" />
          <button className="delete-item" onClick={onDelete}>
            <Icon name="trash" size={16} />
            Eliminar tabla
          </button>
        </div>
      )}
    </div>
  )
}

function TableDesignerPanel({
  table,
  onClose,
  onSave,
}: {
  table?: PorciTableDefinition
  onClose: () => void
  onSave: (table: PorciTableDefinition) => void
}) {
  const defaultColumns: PorciColumn[] = [
    {
      id: "date",
      name: "Fecha",
      type: "Fecha",
      required: true,
      locked: true,
    },
    {
      id: "area",
      name: "Área",
      type: "Texto",
      required: true,
      locked: true,
    },
  ]
  const [name, setName] = useState(table?.name ?? "")
  const [icon, setIcon] = useState<IconName>(table?.icon ?? "table")
  const [columns, setColumns] = useState<PorciColumn[]>(
    table?.columns.map((column) => ({ ...column })) ?? defaultColumns,
  )
  const [submitted, setSubmitted] = useState(false)
  const moveColumn = (index: number, direction: -1 | 1) => {
    const destination = index + direction
    if (destination < 0 || destination >= columns.length) return
    const next = [...columns]
    ;[next[index], next[destination]] = [next[destination], next[index]]
    setColumns(next)
  }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    if (!name.trim() || columns.some((column) => !column.name.trim())) {
      focusFirstError(event.currentTarget)
      return
    }
    onSave({
      id: table?.id ?? `table-${Date.now()}`,
      name: name.trim(),
      icon,
      columns: columns.map((column) => ({
        ...column,
        name: column.name.trim(),
      })),
    })
  }
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <aside
        className="sow-panel porci-form-panel table-designer-panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-heading">
          <div>
            <span>PorciTabla</span>
            <h2>{table ? "Editar tabla" : "Nueva tabla"}</h2>
          </div>
          <button className="icon-button" aria-label="Cerrar" onClick={onClose}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <form className="panel-form" onSubmit={submit}>
          <div className="panel-body">
            <label
              className={`field ${
                submitted && !name.trim() ? "has-error" : ""
              }`}
            >
              <span>
                Nombre <em>* obligatorio</em>
              </span>
              <input
                autoFocus
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ej. Control de visitantes"
                aria-invalid={submitted && !name.trim()}
              />
              {submitted && !name.trim() && (
                <small>
                  <Icon name="alert" size={14} />
                  Escribe el nombre de la tabla
                </small>
              )}
            </label>
            <fieldset className="porci-icon-picker">
              <legend>Ícono</legend>
              <div>
                {porciIconOptions.map((option) => (
                  <button
                    type="button"
                    className={icon === option ? "selected" : ""}
                    aria-label={`Usar ícono ${option}`}
                    aria-pressed={icon === option}
                    onClick={() => setIcon(option)}
                    key={option}
                  >
                    <Icon name={option} size={20} />
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="column-builder-heading">
              <div>
                <strong>Columnas</strong>
                <p>Fecha y Área siempre están incluidas.</p>
              </div>
              <button
                type="button"
                className="button secondary"
                onClick={() =>
                  setColumns([
                    ...columns,
                    {
                      id: `column-${Date.now()}`,
                      name: "",
                      type: "Texto",
                      required: false,
                    },
                  ])
                }
              >
                <Icon name="plus" size={16} />
                Agregar columna
              </button>
            </div>
            <div className="column-builder-list">
              {columns.map((column, index) => (
                <div className="column-builder-row" key={column.id}>
                  <div className="column-order-actions">
                    <button
                      type="button"
                      aria-label={`Subir ${column.name || "columna"}`}
                      disabled={index === 0}
                      onClick={() => moveColumn(index, -1)}
                    >
                      <Icon name="chevron" size={15} />
                    </button>
                    <button
                      type="button"
                      aria-label={`Bajar ${column.name || "columna"}`}
                      disabled={index === columns.length - 1}
                      onClick={() => moveColumn(index, 1)}
                    >
                      <Icon name="chevron" size={15} />
                    </button>
                  </div>
                  <label
                    className={`field ${
                      submitted && !column.name.trim() ? "has-error" : ""
                    }`}
                  >
                    <span>Nombre</span>
                    <input
                      value={column.name}
                      onChange={(event) =>
                        setColumns(
                          columns.map((item) =>
                            item.id === column.id
                              ? { ...item, name: event.target.value }
                              : item,
                          ),
                        )
                      }
                      aria-invalid={submitted && !column.name.trim()}
                    />
                  </label>
                  <label className="field">
                    <span>Tipo</span>
                    <select
                      value={column.type}
                      onChange={(event) =>
                        setColumns(
                          columns.map((item) =>
                            item.id === column.id
                              ? {
                                  ...item,
                                  type: event.target.value as PorciColumnType,
                                }
                              : item,
                          ),
                        )
                      }
                    >
                      {porciColumnTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                  <label className="column-required">
                    <input
                      type="checkbox"
                      checked={column.required}
                      onChange={(event) =>
                        setColumns(
                          columns.map((item) =>
                            item.id === column.id
                              ? { ...item, required: event.target.checked }
                              : item,
                          ),
                        )
                      }
                    />
                    Obligatorio
                  </label>
                  <button
                    type="button"
                    className="column-delete"
                    aria-label={`Eliminar ${column.name || "columna"}`}
                    disabled={column.locked}
                    onClick={() =>
                      setColumns(
                        columns.filter((item) => item.id !== column.id),
                      )
                    }
                  >
                    <Icon name="trash" size={17} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-actions">
            <button
              type="button"
              className="button secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button className="button primary" type="submit">
              {table ? "Guardar cambios" : "Crear tabla"}
            </button>
          </div>
        </form>
      </aside>
    </div>
  )
}

function DynamicRecordPanel({
  table,
  onClose,
  onSave,
}: {
  table: PorciTableDefinition
  onClose: () => void
  onSave: (record: PorciDynamicRecord) => void
}) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      table.columns
        .filter((column) => column.type === "Estado Hecho/Pendiente")
        .map((column) => [column.id, "Pendiente"]),
    ),
  )
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      table.columns.some(
        (column) => column.required && !(values[column.id] ?? "").trim(),
      )
    ) {
      focusFirstError(event.currentTarget)
      return
    }
    const formattedValues = { ...values }
    table.columns.forEach((column) => {
      if (column.type === "Fecha" && values[column.id]) {
        formattedValues[column.id] = formatDate(
          new Date(`${values[column.id]}T12:00:00`),
        )
      }
      if (
        column.type === "Estado Hecho/Pendiente" &&
        !formattedValues[column.id]
      ) {
        formattedValues[column.id] = "Pendiente"
      }
    })
    onSave({ id: Date.now(), values: formattedValues })
  }
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <aside
        className="sow-panel porci-form-panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-heading">
          <div>
            <span>{table.name}</span>
            <h2>Nuevo registro</h2>
          </div>
          <button className="icon-button" aria-label="Cerrar" onClick={onClose}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <form className="panel-form" onSubmit={submit}>
          <div className="panel-body">
            {table.columns.map((column) => {
              const value = values[column.id] ?? ""
              const hasError = submitted && column.required && !value.trim()
              return (
                <label
                  className={`field ${hasError ? "has-error" : ""}`}
                  key={column.id}
                >
                  <span>
                    {column.name}
                    {column.required && <em>* obligatorio</em>}
                  </span>
                  {column.type === "Fecha" ? (
                    <DatePicker
                      value={value}
                      max={TODAY_ISO}
                      onChange={(next) =>
                        setValues({ ...values, [column.id]: next })
                      }
                      label={`Seleccionar ${column.name.toLowerCase()}`}
                    />
                  ) : column.type === "Estado Hecho/Pendiente" ? (
                    <select
                      value={value || "Pendiente"}
                      onChange={(event) =>
                        setValues({
                          ...values,
                          [column.id]: event.target.value,
                        })
                      }
                    >
                      <option>Pendiente</option>
                      <option>Hecho</option>
                    </select>
                  ) : (
                    <input
                      type={column.type === "Hora" ? "time" : "text"}
                      inputMode={
                        column.type === "Número" ? "decimal" : undefined
                      }
                      value={value}
                      onChange={(event) =>
                        setValues({
                          ...values,
                          [column.id]:
                            column.type === "Número"
                              ? event.target.value.replace(/[^\d,.]/g, "")
                              : event.target.value,
                        })
                      }
                      aria-invalid={hasError}
                    />
                  )}
                  {hasError && (
                    <small>
                      <Icon name="alert" size={14} />
                      Completa este campo
                    </small>
                  )}
                </label>
              )
            })}
          </div>
          <div className="panel-actions">
            <button
              type="button"
              className="button secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button className="button primary" type="submit">
              Guardar registro
            </button>
          </div>
        </form>
      </aside>
    </div>
  )
}

function DeletePorciTableDialog({
  table,
  onClose,
  onConfirm,
}: {
  table: PorciTableDefinition
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <DialogShell title="Eliminar tabla" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se eliminará <strong>{table.name}</strong> y todos sus registros. Esta
          acción no se puede deshacer.
        </p>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button className="button danger" onClick={onConfirm}>
          Eliminar tabla
        </button>
      </div>
    </DialogShell>
  )
}

function ExportPorciTableDialog({
  table,
  onClose,
  onExport,
}: {
  table: PorciTableDefinition
  onClose: () => void
  onExport: () => void
}) {
  const [format, setFormat] = useState("Excel .xlsx")
  const [scope, setScope] = useState(
    "Registros visibles con los filtros actuales",
  )
  const [startDate, setStartDate] = useState("2026-02-15")
  const [endDate, setEndDate] = useState(TODAY_ISO)
  return (
    <DialogShell title={`Exportar · ${table.name}`} onClose={onClose}>
      <div className="form-content export-table-form">
        <fieldset>
          <legend>Formato</legend>
          {["Excel .xlsx", "CSV", "PDF"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="export-format"
                checked={format === option}
                onChange={() => setFormat(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Alcance</legend>
          {[
            "Registros visibles con los filtros actuales",
            "Todos los registros",
          ].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="export-scope"
                checked={scope === option}
                onChange={() => setScope(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
        <div>
          <strong>Rango de fechas</strong>
          <div className="form-grid">
            <label className="field">
              <span>Desde</span>
              <DatePicker
                value={startDate}
                max={endDate}
                onChange={setStartDate}
                label="Fecha inicial de exportación"
              />
            </label>
            <label className="field">
              <span>Hasta</span>
              <DatePicker
                value={endDate}
                min={startDate}
                max={TODAY_ISO}
                onChange={setEndDate}
                label="Fecha final de exportación"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button className="button primary" onClick={onExport}>
          <Icon name="download" size={17} />
          Exportar
        </button>
      </div>
    </DialogShell>
  )
}

function PorciTablePage({
  farmName,
  onNotice,
  tables,
  setTables,
}: {
  farmName: string
  onNotice: (text: string) => void
  tables: PorciTableDefinition[]
  setTables: (tables: PorciTableDefinition[]) => void
}) {
  const [selectedTableId, setSelectedTableId] = useState("pediluvios")
  const tableScrollRef = useRef<HTMLDivElement>(null)
  const [recordsByTable, setRecordsByTable] =
    useState<Record<string, PorciDynamicRecord[]>>(initialPorciRecords)
  const [areaFilter, setAreaFilter] = useState("Todas")
  const [statusFilter, setStatusFilter] = useState("Todos")
  const [dateFilter, setDateFilter] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(true)
  const [sortAscending, setSortAscending] = useState(false)
  const [recordPanelOpen, setRecordPanelOpen] = useState(false)
  const [designerOpen, setDesignerOpen] = useState(false)
  const [editingTable, setEditingTable] = useState<PorciTableDefinition | null>(
    null,
  )
  const [deletingTable, setDeletingTable] =
    useState<PorciTableDefinition | null>(null)
  const [tableMenuOpen, setTableMenuOpen] = useState<string | null>(null)
  const [exportOpen, setExportOpen] = useState(false)
  const selectedTable =
    tables.find((table) => table.id === selectedTableId) ?? tables[0]
  const records = recordsByTable[selectedTable.id] ?? []
  useEffect(() => {
    if (tableScrollRef.current) {
      tableScrollRef.current.scrollLeft = 0
    }
  }, [selectedTableId])
  const updateRecord = (id: number, field: string, value: string) => {
    setRecordsByTable({
      ...recordsByTable,
      [selectedTable.id]: records.map((record) =>
        record.id === id
          ? { ...record, values: { ...record.values, [field]: value } }
          : record,
      ),
    })
  }
  const filtered = records.filter(
    (record) =>
      (areaFilter === "Todas" || record.values.area === areaFilter) &&
      (statusFilter === "Todos" || record.values.status === statusFilter) &&
      (!dateFilter ||
        record.values.date?.split("/").reverse().join("-") === dateFilter),
  )
  const visibleRecords = filtered.slice().sort((a, b) => {
    const dateDifference =
      new Date(a.values.date?.split("/").reverse().join("-") ?? 0).getTime() -
      new Date(b.values.date?.split("/").reverse().join("-") ?? 0).getTime()
    return sortAscending ? dateDifference : -dateDifference
  })
  const createOrUpdateTable = (definition: PorciTableDefinition) => {
    const exists = tables.some((table) => table.id === definition.id)
    setTables(
      exists
        ? tables.map((table) =>
            table.id === definition.id ? definition : table,
          )
        : [...tables, definition],
    )
    if (!exists) {
      setRecordsByTable({ ...recordsByTable, [definition.id]: [] })
    }
    setSelectedTableId(definition.id)
    setDesignerOpen(false)
    setEditingTable(null)
  }
  return (
    <>
      <div className="connected-tool-page porci-table-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <span>{farmName}</span>
              <Icon name="chevron" size={14} />
              <strong>PorciTabla</strong>
            </div>
            <h1>PorciTabla · {farmName}</h1>
            <p>Registros operativos de la granja</p>
          </div>
          <div className="header-actions">
            <button
              className="button primary"
              onClick={() => setRecordPanelOpen(true)}
            >
              <Icon name="plus" size={18} />
              Nuevo registro
            </button>
          </div>
        </header>
        <div className="porci-workspace">
          <aside className="porci-table-list">
            <span>Tablas</span>
            {tables.map((table) => (
              <PorciTableListItem
                table={table}
                selected={selectedTable.id === table.id}
                menuOpen={tableMenuOpen === table.id}
                onSelect={() => setSelectedTableId(table.id)}
                onMenu={() =>
                  setTableMenuOpen(tableMenuOpen === table.id ? null : table.id)
                }
                onCloseMenu={() => setTableMenuOpen(null)}
                onEdit={() => {
                  setTableMenuOpen(null)
                  setEditingTable(table)
                  setDesignerOpen(true)
                }}
                onDuplicate={() => {
                  const duplicate = {
                    ...table,
                    id: `table-${Date.now()}`,
                    name: `${table.name} (copia)`,
                    columns: table.columns.map((column) => ({ ...column })),
                  }
                  setTables([...tables, duplicate])
                  setRecordsByTable({
                    ...recordsByTable,
                    [duplicate.id]: [],
                  })
                  setSelectedTableId(duplicate.id)
                  setTableMenuOpen(null)
                }}
                onDelete={() => {
                  setTableMenuOpen(null)
                  setDeletingTable(table)
                }}
                key={table.id}
              />
            ))}
            <button
              className="button secondary new-porci-table"
              onClick={() => {
                setEditingTable(null)
                setDesignerOpen(true)
              }}
            >
              <Icon name="plus" size={16} />
              Nueva tabla
            </button>
          </aside>
          <section className="porci-table-content">
            <div className="porci-table-title">
              <div>
                <h2>{selectedTable.name}</h2>
                <p>
                  {countLabel(
                    filtered.length,
                    "registro visible",
                    "registros visibles",
                  )}
                </p>
              </div>
              <div className="porci-table-tools">
                {selectedTable.id === "pediluvios" && (
                  <>
                    <button
                      className={`icon-button ${filtersOpen ? "active" : ""}`}
                      aria-label="Filtros"
                      onClick={() => setFiltersOpen(!filtersOpen)}
                    >
                      <Icon name="filter" size={24} />
                    </button>
                    <button
                      className="icon-button"
                      aria-label={
                        sortAscending
                          ? "Ordenar de más reciente a más antiguo"
                          : "Ordenar de más antiguo a más reciente"
                      }
                      onClick={() => setSortAscending(!sortAscending)}
                    >
                      <Icon name="sort" size={24} />
                    </button>
                  </>
                )}
                <button
                  className="button secondary"
                  onClick={() => setExportOpen(true)}
                >
                  <Icon name="download" size={17} />
                  Exportar
                </button>
              </div>
            </div>
            {selectedTable.id === "pediluvios" && filtersOpen && (
              <div className="porci-filters">
                <span>Filtros</span>
                <label>
                  <b>Área</b>
                  <select
                    value={areaFilter}
                    onChange={(event) => setAreaFilter(event.target.value)}
                  >
                    <option>Todas</option>
                    {[
                      ...new Set(records.map((record) => record.values.area)),
                    ].map((area) => (
                      <option key={area}>{area}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <b>Estado</b>
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                  >
                    <option>Todos</option>
                    <option>Hecho</option>
                    <option>Pendiente</option>
                  </select>
                </label>
                <label>
                  <b>Fecha</b>
                  <DatePicker
                    value={dateFilter}
                    onChange={setDateFilter}
                    label="Filtrar por fecha"
                  />
                </label>
                <button
                  className="text-button"
                  onClick={() => {
                    setAreaFilter("Todas")
                    setStatusFilter("Todos")
                    setDateFilter("")
                  }}
                >
                  Limpiar
                </button>
              </div>
            )}
            {visibleRecords.length ? (
              <div className="porci-scroll-table" ref={tableScrollRef}>
                <table
                  style={{
                    minWidth: Math.max(700, selectedTable.columns.length * 155),
                  }}
                >
                  <thead>
                    <tr>
                      {selectedTable.columns.map((column, index) => (
                        <th
                          className={
                            index === 0
                              ? "sticky-date"
                              : index === 1
                                ? "sticky-area"
                                : ""
                          }
                          key={column.id}
                        >
                          {column.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRecords.map((record) => (
                      <tr key={record.id}>
                        {selectedTable.columns.map((column, index) =>
                          column.type === "Estado Hecho/Pendiente" ? (
                            <td key={column.id}>
                              <button
                                className={`status ${
                                  record.values[column.id] === "Hecho"
                                    ? "positive"
                                    : "warning"
                                }`}
                                onClick={() =>
                                  updateRecord(
                                    record.id,
                                    column.id,
                                    record.values[column.id] === "Hecho"
                                      ? "Pendiente"
                                      : "Hecho",
                                  )
                                }
                              >
                                {record.values[column.id] === "Hecho" && (
                                  <Icon name="check" size={14} />
                                )}
                                {record.values[column.id] || "Pendiente"}
                              </button>
                            </td>
                          ) : (
                            <EditableTableCell
                              className={
                                index === 0
                                  ? "sticky-date"
                                  : index === 1
                                    ? "sticky-area"
                                    : ""
                              }
                              value={record.values[column.id] ?? "—"}
                              onSave={(value) =>
                                updateRecord(record.id, column.id, value)
                              }
                              key={column.id}
                            />
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="porci-empty-table">
                <Icon name={selectedTable.icon} size={32} />
                <h3>Aún no hay registros</h3>
                <p>Agrega el primer registro de {selectedTable.name}.</p>
                <button
                  className="button primary"
                  onClick={() => setRecordPanelOpen(true)}
                >
                  <Icon name="plus" size={17} />
                  Nuevo registro
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      {recordPanelOpen && (
        <DynamicRecordPanel
          table={selectedTable}
          onClose={() => setRecordPanelOpen(false)}
          onSave={(record) => {
            setRecordsByTable({
              ...recordsByTable,
              [selectedTable.id]: [record, ...records],
            })
            setRecordPanelOpen(false)
          }}
        />
      )}
      {designerOpen && (
        <TableDesignerPanel
          table={editingTable ?? undefined}
          onClose={() => {
            setDesignerOpen(false)
            setEditingTable(null)
          }}
          onSave={createOrUpdateTable}
        />
      )}
      {deletingTable && (
        <DeletePorciTableDialog
          table={deletingTable}
          onClose={() => setDeletingTable(null)}
          onConfirm={() => {
            const remaining = tables.filter(
              (table) => table.id !== deletingTable.id,
            )
            setTables(remaining)
            if (selectedTableId === deletingTable.id) {
              setSelectedTableId(remaining[0].id)
            }
            setDeletingTable(null)
          }}
        />
      )}
      {exportOpen && (
        <ExportPorciTableDialog
          table={selectedTable}
          onClose={() => setExportOpen(false)}
          onExport={() => {
            setExportOpen(false)
            onNotice("Archivo descargado")
          }}
        />
      )}
    </>
  )
}

function FarmSummaryPage({
  farm,
  lots,
  alerts,
  onNavigate,
  onCycle,
}: {
  farm: Farm
  lots: Lot[]
  alerts: HomeFarmAlert[]
  onNavigate: (label: string) => void
  onCycle: (cycle: Cycle) => void
}) {
  const activeLots = lots.filter(
    (lot) => lot.farmId === farm.id && lot.status === "Activo",
  )
  return (
    <div className="connected-tool-page farm-summary-page">
      <header className="page-header connected-page-header">
        <div>
          <div className="breadcrumbs">
            <span>Inicio</span>
            <Icon name="chevron" size={14} />
            <span>{farm.name}</span>
            <Icon name="chevron" size={14} />
            <strong>Resumen</strong>
          </div>
          <h1>Resumen · {farm.name}</h1>
          <p>{farm.municipality} · estado actual de la operación</p>
        </div>
      </header>
      <div className="farm-summary-kpis">
        <div>
          <span>Alertas pendientes</span>
          <strong>{alerts.length}</strong>
          <p>Ordenadas por urgencia</p>
        </div>
        <div>
          <span>Lotes activos</span>
          <strong>{activeLots.length}</strong>
          <p>En Precebo y Levante</p>
        </div>
        <div
          className={
            Number(farm.mortality.replace(",", ".").replace(" %", "")) >
            Number(farm.goal.replace(/[^\d,]/g, "").replace(",", "."))
              ? "kpi-danger"
              : "kpi-positive"
          }
        >
          <span>Mortalidad del mes</span>
          <strong>{farm.mortality}</strong>
          <p>Meta {farm.goal}</p>
        </div>
      </div>
      <div className="farm-summary-grid">
        <section className="records-card summary-alerts-card">
          <div className="records-heading">
            <div>
              <h2>Alertas de la granja</h2>
              <p>Primero aparecen las que requieren atención inmediata.</p>
            </div>
          </div>
          {alerts.length ? (
            <div className="summary-alert-list">
              {alerts.map((alert) => (
                <button
                  key={alert.id}
                  onClick={() => onNavigate(alert.destination)}
                >
                  <span className={`alert-dot urgency-${alert.urgency}`} />
                  <span>
                    <strong>{alert.title}</strong>
                    <small>{alert.detail}</small>
                  </span>
                  <Icon name="arrow" size={17} />
                </button>
              ))}
            </div>
          ) : (
            <div className="summary-empty">
              <Icon name="check" size={24} />
              <strong>Todo está al día</strong>
              <p>No hay alertas pendientes para esta granja.</p>
            </div>
          )}
        </section>
        <section className="records-card summary-lots-card">
          <div className="records-heading">
            <div>
              <h2>Lotes activos por ciclo</h2>
              <p>Animales actualmente en producción.</p>
            </div>
          </div>
          <div className="summary-cycle-lots">
            {(["Precebo", "Levante"] as const).map((cycle) => {
              const cycleLots = activeLots.filter((lot) => lot.cycle === cycle)
              return (
                <button
                  key={cycle}
                  disabled={!farm.cycles.includes(cycle)}
                  onClick={() => onCycle(cycle)}
                >
                  <span>
                    <Icon
                      name={cycle === "Precebo" ? "piglet" : "growth"}
                      size={20}
                    />
                    {cycle}
                  </span>
                  <strong>
                    {countLabel(cycleLots.length, "lote", "lotes")}
                  </strong>
                  <small>
                    {cycleLots
                      .reduce(
                        (sum, lot) =>
                          sum + calculateLotFigures(lot).currentAnimals,
                        0,
                      )
                      .toLocaleString("es-CO")}{" "}
                    animales
                  </small>
                </button>
              )
            })}
          </div>
        </section>
      </div>
      <section className="summary-cycle-access">
        <div>
          <h2>Accesos a los ciclos</h2>
          <p>Entra directamente al ciclo que necesitas gestionar.</p>
        </div>
        <div>
          {cycleOrder
            .filter((cycle) => farm.cycles.includes(cycle))
            .map((cycle) => (
              <button
                className="button secondary"
                key={cycle}
                onClick={() => onCycle(cycle)}
              >
                <Icon
                  name={
                    navigation.find((item) => item.label === cycle)?.icon ??
                    "arrow"
                  }
                  size={18}
                />
                {cycle}
              </button>
            ))}
        </div>
      </section>
    </div>
  )
}

type CalendarEventType = "Vacuna" | "Parto probable" | "Pediluvio" | "Documento ICA"
type FarmCalendarEvent = {
  id: number
  farmId: number
  date: string
  type: CalendarEventType
  title: string
  detail: string
  action: string
}

const farmCalendarEvents: FarmCalendarEvent[] = initialFarms.flatMap(
  (farm, index) => [
    {
      id: farm.id * 10 + 1,
      farmId: farm.id,
      date: `2026-03-${String(10 + index).padStart(2, "0")}`,
      type: "Vacuna",
      title: "Refuerzo de parvovirus",
      detail: `Aplicación programada para el plantel de ${farm.name}.`,
      action: "Aplicar vacuna",
    },
    {
      id: farm.id * 10 + 2,
      farmId: farm.id,
      date: `2026-03-${String(12 + index).padStart(2, "0")}`,
      type: "Parto probable",
      title: `Parto probable · Cerda #${1304 + index}`,
      detail: "Revisar signos de parto y preparar el área de maternidad.",
      action: "Registrar parto",
    },
    {
      id: farm.id * 10 + 3,
      farmId: farm.id,
      date: `2026-03-${String(14 + index).padStart(2, "0")}`,
      type: "Pediluvio",
      title: "Control de pediluvio",
      detail: "Renovar solución desinfectante del acceso principal.",
      action: "Marcar como hecho",
    },
    {
      id: farm.id * 10 + 4,
      farmId: farm.id,
      date: "2026-03-16",
      type: "Documento ICA",
      title: "Documento ICA vencido · 4.2",
      detail: "La evidencia de vigencia de productos requiere actualización.",
      action: "Marcar como revisado",
    },
  ],
)

function CalendarPage({
  farm,
  onNotice,
}: {
  farm: Farm
  onNotice: (text: string) => void
}) {
  const [visibleMonth, setVisibleMonth] = useState(new Date(2026, 2, 1, 12))
  const [filter, setFilter] = useState<"Todos" | CalendarEventType>("Todos")
  const [selectedEvent, setSelectedEvent] = useState<FarmCalendarEvent | null>(
    null,
  )
  const [completedEvents, setCompletedEvents] = useState<number[]>([])
  const events = farmCalendarEvents.filter(
    (event) =>
      event.farmId === farm.id && (filter === "Todos" || event.type === filter),
  )
  const year = visibleMonth.getFullYear()
  const month = visibleMonth.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return (
    <>
      <div className="connected-tool-page calendar-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <span>{farm.name}</span>
              <Icon name="chevron" size={14} />
              <strong>Calendario</strong>
            </div>
            <h1>Calendario · {farm.name}</h1>
            <p>Vacunas, partos probables y controles operativos.</p>
          </div>
        </header>
        <div className="calendar-toolbar">
          <div className="calendar-month-control">
            <button
              className="icon-button"
              aria-label="Mes anterior"
              onClick={() => setVisibleMonth(new Date(year, month - 1, 1, 12))}
            >
              <Icon name="chevron" size={19} />
            </button>
            <strong>
              {visibleMonth.toLocaleDateString("es-CO", {
                month: "long",
                year: "numeric",
              })}
            </strong>
            <button
              className="icon-button"
              aria-label="Mes siguiente"
              onClick={() => setVisibleMonth(new Date(year, month + 1, 1, 12))}
            >
              <Icon name="chevron" size={19} />
            </button>
          </div>
          <div className="calendar-filters" aria-label="Filtrar eventos">
            {([
              "Todos",
              "Vacuna",
              "Parto probable",
              "Pediluvio",
              "Documento ICA",
            ] as const).map((item) => (
              <button
                className={`${filter === item ? "active" : ""} ${
                  item === "Todos"
                    ? ""
                    : `event-${item.toLowerCase().replace(" ", "-")}`
                }`}
                onClick={() => setFilter(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="month-calendar">
          <div className="month-weekdays">
            {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="month-grid">
            {Array.from({ length: firstWeekday }, (_, index) => (
              <div className="outside" key={`empty-${index}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, index) => {
              const day = index + 1
              const iso = `${year}-${String(month + 1).padStart(
                2,
                "0",
              )}-${String(day).padStart(2, "0")}`
              const dayEvents = events.filter((event) => event.date === iso)
              return (
                <div className="month-day" key={iso}>
                  <span>{day}</span>
                  {dayEvents.map((event) => (
                    <button
                      className={`calendar-event event-${event.type
                        .toLowerCase()
                        .replace(" ", "-")} ${
                        completedEvents.includes(event.id) ? "completed" : ""
                      }`}
                      onClick={() => setSelectedEvent(event)}
                      key={event.id}
                    >
                      <b>{event.type}</b>
                      <small>
                        {event.title}
                        {completedEvents.includes(event.id) ? " · Hecho" : ""}
                      </small>
                    </button>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {selectedEvent && (
        <DialogShell
          title={selectedEvent.title}
          onClose={() => setSelectedEvent(null)}
          size="small"
        >
          <div className="calendar-event-detail">
            <span
              className={`calendar-event-type event-${selectedEvent.type
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {selectedEvent.type}
            </span>
            <strong>
              {formatDate(new Date(`${selectedEvent.date}T12:00:00`))}
            </strong>
            <p>{selectedEvent.detail}</p>
          </div>
          <div className="modal-actions">
            <button
              className="button secondary"
              onClick={() => setSelectedEvent(null)}
            >
              Cerrar
            </button>
            <button
              className="button primary"
              disabled={completedEvents.includes(selectedEvent.id)}
              onClick={() => {
                setCompletedEvents([...completedEvents, selectedEvent.id])
                onNotice(`${selectedEvent.action} · hecho`)
                setSelectedEvent(null)
              }}
            >
              {completedEvents.includes(selectedEvent.id)
                ? "Evento completado"
                : selectedEvent.action}
            </button>
          </div>
        </DialogShell>
      )}
    </>
  )
}

type MovementTone = "in" | "out" | "scheduled"
type MovementRecord = {
  id: number
  date: string
  user: string
  module: string
  action: string
  tone: MovementTone
  record: string
  responsible: string
  quantity: string
  lot: string
  farm: string
}

const movementModules = [
  "Movimientos",
  "Mortalidad",
  "Sanidad",
  "Compras",
  "Ventas",
  "Inventario",
  "PorciTabla",
  "Plantel reproductivo",
  "Reproductor",
]

const movementSeeds = [
  {
    module: "Mortalidad",
    action: "− Baja registrada",
    tone: "out" as MovementTone,
    record: "Levante — Lote LV-2025-009",
    quantity: "1 animal",
    lot: "LV-2025-009",
  },
  {
    module: "Sanidad",
    action: "Programado",
    tone: "scheduled" as MovementTone,
    record: "Vacuna Circovirus",
    quantity: "6 ml",
    lot: "PC-2025-017",
  },
  {
    module: "Compras",
    action: "+ Entrada",
    tone: "in" as MovementTone,
    record: "Concentrado de Precebo",
    quantity: "420 kg",
    lot: "FC-026",
  },
  {
    module: "Ventas",
    action: "− Salida",
    tone: "out" as MovementTone,
    record: "Venta de animales — LV-2025-004",
    quantity: "106 animales",
    lot: "LV-2025-004",
  },
  {
    module: "Inventario",
    action: "− Consumo",
    tone: "out" as MovementTone,
    record: "Oxitocina",
    quantity: "4 ítems",
    lot: "MED-118",
  },
  {
    module: "PorciTabla",
    action: "+ Registro",
    tone: "in" as MovementTone,
    record: "Control de pediluvios — Gestación",
    quantity: "120 ml",
    lot: "—",
  },
  {
    module: "Plantel reproductivo",
    action: "+ Parto",
    tone: "in" as MovementTone,
    record: "Cerda #1304 — Parto y lactancia",
    quantity: "12 lechones",
    lot: "Banda 37",
  },
  {
    module: "Reproductor",
    action: "Programado",
    tone: "scheduled" as MovementTone,
    record: "Macho Duroc 01 — Servicio",
    quantity: "1 servicio",
    lot: "—",
  },
]

const movementUsers = [
  "Andrés Mejía",
  "Carlos Ríos",
  "Lina Gómez",
  "Sara Pérez",
]

const initialMovements: MovementRecord[] = Array.from(
  { length: 112 },
  (_, index) => {
    const seed = movementSeeds[index % movementSeeds.length]
    const dayOffset = index % 30
    const date = new Date(2026, 2, 16 - dayOffset, 12)
    return {
      id: index + 1,
      date: date.toISOString().slice(0, 10),
      user: movementUsers[index % movementUsers.length],
      module: seed.module,
      action: seed.action,
      tone: seed.tone,
      record: seed.record,
      responsible: `Responsable: ${movementUsers[(index + 1) % movementUsers.length]}`,
      quantity: seed.quantity,
      lot: seed.lot,
      farm: initialFarms[index % initialFarms.length].name,
    }
  },
)

const initialsFor = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")

const formatShortDate = (value: string) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })

const shortMonthNames = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
]

// "8 oct – 7 nov 2026"; the start year is shown only when it differs.
const formatDateRange = (start: string, end: string) => {
  const [startYear, startMonth, startDay] = start.split("-").map(Number)
  const [endYear, endMonth, endDay] = end.split("-").map(Number)
  const startLabel = `${startDay} ${shortMonthNames[startMonth - 1]}`
  return `${startLabel}${
    startYear === endYear ? "" : ` ${startYear}`
  } – ${endDay} ${shortMonthNames[endMonth - 1]} ${endYear}`
}

function MovementDetailPanel({
  movement,
  onClose,
}: {
  movement: MovementRecord
  onClose: () => void
}) {
  return (
    <div
      className="side-panel-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <aside
        className="sow-panel movement-panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-heading">
          <div>
            <span>{movement.module}</span>
            <h2>Detalle del movimiento</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar">
            <Icon name="x" size={20} />
          </button>
        </div>
        <div className="panel-body movement-detail-list">
          {[
            [
              "Fecha del evento",
              formatDate(new Date(`${movement.date}T12:00:00`)),
            ],
            ["Granja", movement.farm],
            ["Módulo", movement.module],
            ["Acción", movement.action],
            ["Registro", movement.record],
            ["Cantidad", movement.quantity],
            ["Lote", movement.lot],
            ["Responsable", movement.responsible.replace("Responsable: ", "")],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p>
            Registrado el {formatDate(new Date(`${movement.date}T12:00:00`))}{" "}
            por {movement.user}
          </p>
        </div>
        <div className="panel-actions">
          <button className="button secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </aside>
    </div>
  )
}

function HistoryPage({
  farms,
  movements,
}: {
  farms: Farm[]
  movements: MovementRecord[]
}) {
  const [query, setQuery] = useState("")
  const [farm, setFarm] = useState("Todas las granjas")
  const [startDate, setStartDate] = useState("2026-02-15")
  const [endDate, setEndDate] = useState(TODAY_ISO)
  const [module, setModule] = useState("Todos")
  const [action, setAction] = useState("Todas")
  const [user, setUser] = useState("Todos")
  const [moreFilters, setMoreFilters] = useState(false)
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<MovementRecord | null>(null)

  // Any filter change returns to the first page so results are never hidden.
  const updateFilter =
    <T,>(setter: (value: T) => void) =>
    (value: T) => {
      setter(value)
      setPage(1)
    }
  const clearFilters = () => {
    setQuery("")
    setFarm("Todas las granjas")
    setStartDate("2026-02-15")
    setEndDate(TODAY_ISO)
    setModule("Todos")
    setAction("Todas")
    setUser("Todos")
    setPage(1)
  }
  const filtered = movements.filter(
    (movement) =>
      movement.date >= startDate &&
      movement.date <= endDate &&
      (farm === "Todas las granjas" || movement.farm === farm) &&
      (module === "Todos" || movement.module === module) &&
      (action === "Todas" || movement.tone === action) &&
      (user === "Todos" || movement.user === user) &&
      `${movement.record} ${movement.lot} ${movement.user}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  )
  const pageCount = Math.max(1, Math.ceil(filtered.length / 50))
  const visible = filtered.slice((page - 1) * 50, page * 50)
  return (
    <>
      <div className="connected-tool-page history-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <strong>Historial</strong>
            </div>
            <h1>Historial de movimientos</h1>
            <p>Todas las granjas ({farms.length})</p>
          </div>
        </header>
        <section className="history-filters">
          <label className="search-field history-search">
            <Icon name="search" size={18} />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPage(1)
              }}
              placeholder="Buscar registro, lote o usuario"
            />
          </label>
          <label>
            <span>Granja</span>
            <select
              value={farm}
              onChange={(event) => updateFilter(setFarm)(event.target.value)}
            >
              <option>Todas las granjas</option>
              {farms.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Desde</span>
            <DatePicker
              value={startDate}
              max={endDate}
              onChange={updateFilter(setStartDate)}
              label="Fecha inicial"
            />
          </label>
          <label>
            <span>Hasta</span>
            <DatePicker
              value={endDate}
              min={startDate}
              onChange={updateFilter(setEndDate)}
              label="Fecha final"
            />
          </label>
          <label>
            <span>Módulo</span>
            <select
              value={module}
              onChange={(event) => updateFilter(setModule)(event.target.value)}
            >
              <option>Todos</option>
              {movementModules.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <div className="history-filter-actions">
            <button
              className={`button secondary ${moreFilters ? "active" : ""}`}
              onClick={() => setMoreFilters(!moreFilters)}
            >
              <Icon name="filter" size={17} />
              Más filtros
            </button>
            <button className="text-button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
          {moreFilters && (
            <div className="history-more-filters">
              <label>
                <span>Acción</span>
                <select
                  value={action}
                  onChange={(event) =>
                    updateFilter(setAction)(event.target.value)
                  }
                >
                  <option value="Todas">Todas</option>
                  <option value="in">Entradas</option>
                  <option value="out">Salidas y bajas</option>
                  <option value="scheduled">Programadas</option>
                </select>
              </label>
              <label>
                <span>Usuario</span>
                <select
                  value={user}
                  onChange={(event) =>
                    updateFilter(setUser)(event.target.value)
                  }
                >
                  <option>Todos</option>
                  {movementUsers.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </section>
        <div className="history-table-heading">
          <strong>
            {filtered.length} {filtered.length === 1 ? "registro" : "registros"}{" "}
            · {formatDateRange(startDate, endDate)}
          </strong>
          <div>
            <button
              aria-label="Página anterior"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ‹
            </button>
            <span>
              {page} de {pageCount}
            </span>
            <button
              aria-label="Página siguiente"
              disabled={page === pageCount}
              onClick={() => setPage(page + 1)}
            >
              ›
            </button>
          </div>
        </div>
        {visible.length ? (
          <div className="table-wrap history-table">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th>Módulo</th>
                  <th>Acción</th>
                  <th>Registro</th>
                  <th>Cantidad</th>
                  <th>Lote</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {visible.map((movement) => (
                  <tr key={movement.id}>
                    <td>{formatShortDate(movement.date)}</td>
                    <td>
                      <span className="history-user">
                        <i>{initialsFor(movement.user)}</i>
                        {movement.user}
                      </span>
                    </td>
                    <td>
                      <span className="history-module">
                        <Icon name="clipboard" size={16} />
                        {movement.module}
                      </span>
                    </td>
                    <td>
                      <span className={`movement-action ${movement.tone}`}>
                        {movement.action}
                      </span>
                    </td>
                    <td>
                      <strong>{movement.record}</strong>
                      <small>{movement.responsible}</small>
                    </td>
                    <td>{movement.quantity}</td>
                    <td>{movement.lot}</td>
                    <td>
                      <button
                        className="text-button"
                        onClick={() => setSelected(movement)}
                      >
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="history-empty">
            <Icon name="search" size={28} />
            <h2>No hay movimientos con estos filtros</h2>
            <button className="button secondary" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
      {selected && (
        <MovementDetailPanel
          movement={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}

type UserRole = "Administrador" | "Supervisor" | "Visualizador"
type UserAccess = {
  id: number
  name: string
  email: string
  role: UserRole
  farms: string[]
  status: "Invitado" | "Activo"
}

type SettingsSection = "Granjas y ciclos" | "Programa de alimentación y unidades" | "Sanitario" | "Bandas" | "Reproductiva" | "Mano de obra" | "Metas" | "Responsables y lugares" | "Reportes" | "Usuarios"

const settingsSections: { name: SettingsSection icon: IconName }[] = [
  { name: "Granjas y ciclos", icon: "pig" },
  { name: "Programa de alimentación y unidades", icon: "box" },
  { name: "Sanitario", icon: "syringe" },
  { name: "Bandas", icon: "list" },
  { name: "Reproductiva", icon: "heart" },
  { name: "Mano de obra", icon: "profile" },
  { name: "Metas", icon: "trend" },
  { name: "Responsables y lugares", icon: "pin" },
  { name: "Reportes", icon: "chart" },
  { name: "Usuarios", icon: "userPlus" },
]

function SettingsPage({
  farms,
  selectedFarm,
  initialSection,
  users,
  onInvite,
  onDirtyChange,
  onNotice,
}: {
  farms: Farm[]
  selectedFarm: Farm
  initialSection: SettingsSection
  users: UserAccess[]
  onInvite: () => void
  onDirtyChange: (dirty: boolean) => void
  onNotice: (text: string) => void
}) {
  const [section, setSection] = useState<SettingsSection>(initialSection)
  const [pendingSection, setPendingSection] = useState<SettingsSection | null>(
    null,
  )
  const [dirty, setDirty] = useState(false)
  const [feedUnit, setFeedUnit] = useState("kg")
  const [medicineUnit, setMedicineUnit] = useState("ítems")
  const [farmName, setFarmName] = useState(selectedFarm.name)
  const [bandMode, setBandMode] = useState("Predeterminada")
  const [userMenu, setUserMenu] = useState<number | null>(null)
  useEffect(() => {
    onDirtyChange(dirty)
  }, [dirty, onDirtyChange])
  const markDirty = () => setDirty(true)
  const chooseSection = (next: SettingsSection) => {
    if (next === section) return
    if (dirty) setPendingSection(next)
    else setSection(next)
  }
  const save = () => {
    setDirty(false)
    onNotice("Cambios guardados")
  }
  const sectionHeading = (
    title: string,
    description: string,
    icon: IconName,
  ) => (
    <div className="settings-card-heading">
      <span>
        <Icon name={icon} size={21} />
      </span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
  const saveActions = (
    <div className="settings-save-actions">
      <button className="button primary" onClick={save}>
        Guardar cambios
      </button>
    </div>
  )

  let content: ReactNode
  if (section === "Granjas y ciclos") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Granjas y ciclos",
          "Consulta las granjas y sus ciclos activos.",
          "pig",
        )}
        <div className="settings-farm-list">
          {farms.map((farm) => (
            <div key={farm.id}>
              <div>
                <strong>{farm.name}</strong>
                <span>{farm.municipality}</span>
              </div>
              <div>
                {farm.cycles.map((cycle) => (
                  <span className="settings-cycle" key={cycle}>
                    {cycle}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Programa de alimentación y unidades") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          section,
          "Define cómo se registran las salidas del inventario.",
          "box",
        )}
        <div className="settings-form-grid">
          <label className="field">
            <span>Granja</span>
            <input value={farmName} readOnly />
          </label>
          <label className="field">
            <span>Unidad para alimento</span>
            <select
              value={feedUnit}
              onChange={(event) => {
                setFeedUnit(event.target.value)
                markDirty()
              }}
            >
              <option>kg</option>
              <option>toneladas</option>
              <option>bultos</option>
            </select>
          </label>
          <label className="field">
            <span>Unidad para medicamentos</span>
            <select
              value={medicineUnit}
              onChange={(event) => {
                setMedicineUnit(event.target.value)
                markDirty()
              }}
            >
              <option>ítems</option>
              <option>frascos</option>
              <option>ml</option>
            </select>
          </label>
          {["Consumo esperado en Precebo", "Consumo esperado en Levante"].map(
            (label, index) => (
              <label className="field" key={label}>
                <span>{label}</span>
                <input
                  defaultValue={
                    index === 0
                      ? "1,4 kg por animal/día"
                      : "2,6 kg por animal/día"
                  }
                  onChange={markDirty}
                />
              </label>
            ),
          )}
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Sanitario") {
    const categories = [
      "Reproductivo",
      "Macho reproductor",
      "Lechones",
      "Precebo",
      "Levante – Finalización",
    ]
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Plantillas sanitarias",
          "Configura planes reutilizables por categoría productiva.",
          "syringe",
        )}
        <div className="health-template-groups">
          {categories.map((category, index) => (
            <article key={category}>
              <div className="template-group-heading">
                <div>
                  <h3>{category}</h3>
                  <span>{index < 3 ? "1 plantilla" : "0 plantillas"}</span>
                </div>
                <button className="button secondary" onClick={markDirty}>
                  <Icon name="plus" size={16} />
                  Crear plantilla
                </button>
              </div>
              {index < 3 ? (
                <div className="health-template-card">
                  <div>
                    <strong>Plan sanitario base · {category}</strong>
                    <span className="status neutral">Vacunación</span>
                  </div>
                  <div className="health-template-item">
                    <span>Vacunación</span>
                    <strong>Vacuna Circovirus</strong>
                    <span>Día +90</span>
                    <span>2 ml</span>
                    <small>Referencia: Fecha de servicio</small>
                  </div>
                  <div className="template-actions">
                    <button onClick={markDirty}>Editar</button>
                    <button onClick={markDirty}>Duplicar</button>
                    <button className="danger-text" onClick={markDirty}>
                      Eliminar
                    </button>
                    <button onClick={markDirty}>+ Agregar ítem</button>
                  </div>
                </div>
              ) : (
                <p className="settings-inline-empty">Sin ítems configurados</p>
              )}
            </article>
          ))}
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Bandas") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Configuración de bandas",
          "Define la forma de organizar las bandas reproductivas.",
          "list",
        )}
        <div className="settings-choice-cards">
          {["Predeterminada", "Manual / Con reinicios"].map((mode) => (
            <label key={mode}>
              <input
                type="radio"
                name="band-mode"
                checked={bandMode === mode}
                onChange={() => {
                  setBandMode(mode)
                  markDirty()
                }}
              />
              <strong>{mode}</strong>
              <small>
                {mode === "Predeterminada"
                  ? "Bandas lineales con capacidad definida."
                  : "Configura bandas y reinicios manualmente."}
              </small>
            </label>
          ))}
        </div>
        {bandMode === "Predeterminada" && (
          <div className="settings-form-grid compact">
            <label className="field">
              <span>Total de cerdas</span>
              <input defaultValue="120" onChange={markDirty} />
            </label>
            <label className="field">
              <span>Capacidad de parideras</span>
              <input defaultValue="24" onChange={markDirty} />
            </label>
          </div>
        )}
        {saveActions}
      </section>
    )
  } else if (section === "Reproductiva") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Configuración reproductiva",
          "Selecciona genéticas y parámetros operativos.",
          "heart",
        )}
        <fieldset className="settings-check-grid">
          <legend>Genéticas utilizadas</legend>
          {[
            "Camborough",
            "DanBred",
            "Duroc",
            "Híbrido comercial",
            "Landrace",
            "PIC",
            "Topigs Norsvin",
            "Yorkshire",
          ].map((genetic, index) => (
            <label key={genetic}>
              <input
                type="checkbox"
                defaultChecked={index < 3}
                onChange={markDirty}
              />
              {genetic}
            </label>
          ))}
        </fieldset>
        <div className="settings-form-grid compact">
          {["Duración de gestación (días)", "Lactancia objetivo (días)"].map(
            (label, index) => (
              <label className="field" key={label}>
                <span>{label}</span>
                <input
                  defaultValue={index === 0 ? "114" : "21"}
                  onChange={markDirty}
                />
              </label>
            ),
          )}
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Mano de obra") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Mano de obra",
          "Distribuye el costo mensual por ciclo.",
          "profile",
        )}
        <div className="labor-table">
          {[
            ["Operario de granja", "2.400.000"],
            ["Supervisor", "3.200.000"],
          ].map(([role, cost]) => (
            <div key={role}>
              <strong>{role}</strong>
              {[
                "Plantel reproductivo",
                "Precebo",
                "Levante – Finalización",
                "Reproductor",
              ].map((cycle) => (
                <label key={cycle}>
                  <span>{cycle}</span>
                  <input defaultValue={cost} onChange={markDirty} />
                </label>
              ))}
            </div>
          ))}
        </div>
        <div className="labor-summary">
          <span>
            Total mensual <strong>$ 11.200.000</strong>
          </span>
          <span>
            Total anual <strong>$ 134.400.000</strong>
          </span>
          <button className="button secondary" onClick={markDirty}>
            Crear cargo
          </button>
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Metas") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Metas productivas",
          "Un campo vacío se mostrará como “Sin meta”.",
          "trend",
        )}
        <div className="goal-groups">
          {[
            ["Plantel reproductivo", "Tasa de parición (%)", "90,0"],
            ["Precebo", "Mortalidad máxima (%)", "2,5"],
            ["Levante – Finalización", "Conversión alimenticia", "2,3"],
            ["Reproductor", "Servicios por mes", ""],
          ].map(([group, label, value]) => (
            <div key={group}>
              <h3>{group}</h3>
              <label className="field">
                <span>{label}</span>
                <input
                  defaultValue={value}
                  placeholder="Sin meta"
                  onChange={markDirty}
                />
              </label>
            </div>
          ))}
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Responsables y lugares") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          section,
          "Administra responsables y ubicaciones disponibles.",
          "pin",
        )}
        <div className="settings-two-columns">
          <div>
            <h3>Responsables</h3>
            {movementUsers.map((name) => (
              <div className="simple-settings-row" key={name}>
                <span className="avatar">{initialsFor(name)}</span>
                <strong>{name}</strong>
              </div>
            ))}
            <button className="button secondary" onClick={markDirty}>
              Agregar responsable
            </button>
          </div>
          <div>
            <h3>Lugares y galpones</h3>
            {["Gestación", "Maternidad", "Precebo 1", "Levante 2"].map(
              (place) => (
                <div className="simple-settings-row" key={place}>
                  <Icon name="building" size={18} />
                  <strong>{place}</strong>
                </div>
              ),
            )}
            <button className="button secondary" onClick={markDirty}>
              Agregar lugar
            </button>
          </div>
        </div>
        {saveActions}
      </section>
    )
  } else if (section === "Reportes") {
    content = (
      <section className="settings-card">
        {sectionHeading(
          "Encabezado de reportes",
          "Personaliza la identidad de los informes exportados.",
          "chart",
        )}
        <div className="settings-form-grid compact">
          <label className="field">
            <span>Nombre de la empresa</span>
            <input
              defaultValue=""
              placeholder="Escribe el nombre de la empresa"
              onChange={markDirty}
            />
          </label>
          <label className="field invoice-upload">
            <span>Logo de la empresa</span>
            <input type="file" accept="image/*" onChange={markDirty} />
            <span className="upload-control">
              <Icon name="download" size={17} />
              Subir imagen
            </span>
          </label>
        </div>
        {saveActions}
      </section>
    )
  } else {
    content = (
      <section className="settings-card">
        <div className="settings-card-heading with-action">
          <span>
            <Icon name="userPlus" size={21} />
          </span>
          <div>
            <h2>Usuarios y accesos</h2>
            <p>Gestiona roles y granjas asignadas.</p>
          </div>
          <button className="button primary" onClick={onInvite}>
            <Icon name="userPlus" size={17} />
            Invitar usuario
          </button>
        </div>
        {users.length ? (
          <div className="table-wrap users-table">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Granjas</th>
                  <th>Estado</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.farms.join(", ") || "Todas las granjas"}</td>
                    <td>
                      <span className="status neutral">{item.status}</span>
                    </td>
                    <td className="record-actions-cell">
                      <button
                        className="dots-button"
                        aria-label={`Opciones de ${item.name}`}
                        onClick={() =>
                          setUserMenu(userMenu === item.id ? null : item.id)
                        }
                      >
                        <Icon name="dots" size={18} />
                      </button>
                      {userMenu === item.id && (
                        <div className="lot-menu user-access-menu">
                          <button onClick={() => setUserMenu(null)}>
                            Editar rol
                          </button>
                          <button onClick={() => setUserMenu(null)}>
                            Reenviar invitación
                          </button>
                          <div className="menu-divider" />
                          <button
                            className="delete-item"
                            onClick={() => setUserMenu(null)}
                          >
                            Quitar acceso
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="settings-empty-users">
            <Icon name="userPlus" size={30} />
            <h3>Aún no has invitado a nadie</h3>
            <button className="button primary" onClick={onInvite}>
              Invitar usuario
            </button>
          </div>
        )}
        {saveActions}
      </section>
    )
  }

  return (
    <>
      <div className="connected-tool-page settings-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <strong>Configuración</strong>
            </div>
            <h1>Configuración</h1>
            <p>Configuración general de la cuenta</p>
          </div>
        </header>
        <div className="settings-scope">
          <label>
            <span>Granja a configurar</span>
            <select
              value={farmName}
              onChange={(event) => {
                setFarmName(event.target.value)
                markDirty()
              }}
            >
              {farms.map((farm) => (
                <option key={farm.id}>{farm.name}</option>
              ))}
            </select>
          </label>
          <button className="button secondary" onClick={markDirty}>
            Aplicar a todas las granjas
          </button>
        </div>
        <div className="settings-workspace">
          <nav className="settings-navigation" aria-label="Configuración">
            {settingsSections.map((item) => (
              <button
                className={section === item.name ? "active" : ""}
                key={item.name}
                onClick={() => chooseSection(item.name)}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
          <div className="settings-content">{content}</div>
        </div>
      </div>
      {pendingSection && (
        <DiscardChangesDialog
          onDiscard={() => {
            setDirty(false)
            setSection(pendingSection)
            setPendingSection(null)
          }}
          onKeepEditing={() => setPendingSection(null)}
        />
      )}
    </>
  )
}

function InviteUserModal({
  farms,
  onClose,
  onGoUsers,
  onInvite,
}: {
  farms: Farm[]
  onClose: () => void
  onGoUsers: () => void
  onInvite: (user: UserAccess) => void
}) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<UserRole>("Supervisor")
  const [assignedFarms, setAssignedFarms] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!validEmail || (role !== "Administrador" && !assignedFarms.length)) {
      focusFirstError(event.currentTarget as HTMLFormElement)
      return
    }
    const name = email
      .split("@")[0]
      .split(/[._-]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
    onInvite({
      id: Date.now(),
      name: name || "Usuario invitado",
      email,
      role,
      farms: role === "Administrador" ? [] : assignedFarms,
      status: "Invitado",
    })
  }
  return (
    <DialogShell title="Invitar usuario" onClose={onClose} size="wide">
      <form className="invite-user-form" onSubmit={submit}>
        <div className="form-content">
          <p>Envía una invitación por correo para colaborar en PorciTrack</p>
          <button
            type="button"
            className="invite-users-link"
            onClick={onGoUsers}
          >
            ¿Ya invitaste a alguien? Gestiona roles y accesos en Configuración →
          </button>
          <label
            className={`field ${submitted && !validEmail ? "has-error" : ""}`}
          >
            <span>
              Correo electrónico <em>* obligatorio</em>
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="nombre@empresa.com"
              aria-invalid={submitted && !validEmail}
            />
            {submitted && !validEmail && (
              <small>
                <Icon name="alert" size={14} />
                Escribe un correo válido
              </small>
            )}
          </label>
          <fieldset className="invite-role-options">
            <legend>Rol del usuario</legend>
            {[
              ["Administrador", "Acceso completo al sistema"],
              ["Supervisor", "Acceso limitado por granjas asignadas"],
              ["Visualizador", "Solo visualización, sin permisos de edición"],
            ].map(([value, description]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="invite-role"
                  checked={role === value}
                  onChange={() => setRole(value as UserRole)}
                />
                <span>
                  <strong>{value}</strong>
                  <small>{description}</small>
                </span>
              </label>
            ))}
          </fieldset>
          {role !== "Administrador" && (
            <fieldset
              className={`invite-farm-options ${
                submitted && !assignedFarms.length ? "has-error" : ""
              }`}
            >
              <legend>Asignar granjas</legend>
              {farms.map((farm) => (
                <label key={farm.id}>
                  <input
                    type="checkbox"
                    checked={assignedFarms.includes(farm.name)}
                    onChange={() =>
                      setAssignedFarms(
                        assignedFarms.includes(farm.name)
                          ? assignedFarms.filter((name) => name !== farm.name)
                          : [...assignedFarms, farm.name],
                      )
                    }
                  />
                  {farm.name}
                </label>
              ))}
              {submitted && !assignedFarms.length && (
                <small>Selecciona al menos una granja</small>
              )}
            </fieldset>
          )}
        </div>
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="button primary" type="submit">
            Enviar invitación
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type ReportRole = "Gerencia" | "Veterinario" | "Producción"
type ReportSection = "Indicadores principales" | "Mortalidad por lote" | "Partos por mes"

type ReportCatalogItem = {
  id: string
  name: string
  description: string
  subcategory?: string
}

type ReportCatalogCategory = {
  name: string
  reports: ReportCatalogItem[]
  subcategories?: string[]
}

const reportIconPools: Record<string, IconName[]> = {
  General: ["pig", "trend", "heart"],
  Reproducción: [
    "sow",
    "baby",
    "table",
    "calendar",
    "bell",
    "syringe",
    "weight",
    "heart",
    "alert",
    "trash",
    "trend",
    "clock",
    "boar",
    "droplet",
    "check",
    "list",
  ],
  Precebo: ["trend", "alert", "box", "weight"],
  "Levante / Finalización": ["chart", "alert", "box", "weight"],
  Ventas: [
    "chart",
    "trend",
    "calendar",
    "list",
    "profile",
    "weight",
    "box",
    "pig",
    "download",
    "syringe",
    "heart",
    "table",
    "clipboard",
  ],
  Inventario: [
    "box",
    "trend",
    "table",
    "download",
    "syringe",
    "list",
    "clipboard",
    "clock",
  ],
  Sanidad: ["alert", "info", "syringe", "check"],
}

const reportIcon = (category: string, index: number) =>
  reportIconPools[category]?.[index] ?? "chart"

const reportCatalog: ReportCatalogCategory[] = [
  {
    name: "General",
    reports: [
      {
        id: "stock-animal",
        name: "Stock animal",
        description: "Stock animal activo por etapa productiva",
      },
      {
        id: "analisis-post-destete",
        name: "Análisis post-destete",
        description:
          "Flujo, supervivencia y eficiencia desde el destete hasta Levante",
      },
      {
        id: "analisis-reproductivo",
        name: "Análisis reproductivo",
        description: "Indicadores mensuales y tabla detallada de reproducción",
      },
    ],
  },
  {
    name: "Reproducción",
    subcategories: [
      "General",
      "Gestación",
      "Maternidad",
      "Descartes",
      "Reproductores",
      "Reemplazo",
    ],
    reports: [
      {
        id: "estado-plantel-reproductivo",
        name: "Estado del plantel reproductivo",
        description: "Distribución del plantel por estado, banda y lote",
        subcategory: "General",
      },
      {
        id: "resultados-maternidad",
        name: "Resultados de maternidad",
        description: "Partos, nacimientos y destete por período",
        subcategory: "Maternidad",
      },
      {
        id: "inventario-reproductivo",
        name: "Inventario reproductivo",
        description: "Reposición, descarte, mortalidad y balance",
        subcategory: "General",
      },
      {
        id: "partos-previstos",
        name: "Partos previstos en el mes",
        description:
          "Calendario de partos probables sin novedad, según la fecha estimada de parto",
        subcategory: "Gestación",
      },
      {
        id: "alertas-gestacion",
        name: "Informe de alertas de gestación",
        description:
          "Hembras agrupadas por alerta de gestación en el período seleccionado",
        subcategory: "Gestación",
      },
      {
        id: "desempeno-lactancia",
        name: "Desempeño de lactancia",
        description:
          "Analiza supervivencia, pérdidas y evolución de las camadas durante la lactancia",
        subcategory: "Maternidad",
      },
      {
        id: "resultados-destete",
        name: "Resultados de destete",
        description: "Cantidad, promedio, peso y comportamiento de destetes",
        subcategory: "Maternidad",
      },
      {
        id: "supervivencia-camadas",
        name: "Supervivencia de camadas",
        description: "Nacidos vivos que llegan al destete",
        subcategory: "Maternidad",
      },
      {
        id: "alertas-maternidad",
        name: "Alertas de maternidad",
        description: "Pérdidas y registros que requieren revisión",
        subcategory: "Maternidad",
      },
      {
        id: "descartes-realizados",
        name: "Descartes realizados",
        description:
          "Analiza las bajas reproductivas realizadas, sus causas y el perfil de las hembras descartadas",
        subcategory: "Descartes",
      },
      {
        id: "proyeccion-descartes",
        name: "Proyección de descartes",
        description:
          "Identifica hembras próximas a criterios de descarte y explica qué factores requieren revisión",
        subcategory: "Descartes",
      },
      {
        id: "seguimiento-descartes",
        name: "Seguimiento de descartes",
        description:
          "Analiza el tiempo entre la marcación para descarte y la baja efectiva de la hembra",
        subcategory: "Descartes",
      },
      {
        id: "desempeno-reproductores",
        name: "Desempeño de reproductores",
        description:
          "Compara la efectividad de los reproductores según servicios, concepción y nacidos vivos",
        subcategory: "Reproductores",
      },
      {
        id: "perdidas-semen",
        name: "Pérdidas de semen",
        description:
          "Analiza semen descartado, vencido o perdido y las causas asociadas",
        subcategory: "Reproductores",
      },
      {
        id: "preparacion-servicio",
        name: "Preparación para servicio",
        description:
          "Analiza la edad, estado y entrada a servicio de las hembras de reemplazo por banda y lote",
        subcategory: "Reemplazo",
      },
      {
        id: "preparacion-reemplazos-banda",
        name: "Preparación de reemplazos por banda",
        description:
          "Consulta las próximas bandas programadas y cuántas hembras están listas para servicio o continúan en adaptación",
        subcategory: "Reemplazo",
      },
    ],
  },
  {
    name: "Precebo",
    reports: [
      {
        id: "precebo-lotes-cerrados",
        name: "Desempeño de lotes cerrados",
        description:
          "IEP, GPD, mortalidad y días en fase de los lotes de precebo finalizados",
      },
      {
        id: "mortalidad-precebo",
        name: "Mortalidad en Precebo",
        description:
          "Analiza las causas, concentración y evolución de la mortalidad en Precebo",
      },
      {
        id: "consumo-alimento-precebo",
        name: "Consumo de alimento",
        description:
          "Analiza la evolución del consumo de alimento durante la fase",
      },
      {
        id: "crecimiento-lotes-precebo",
        name: "Crecimiento de lotes",
        description: "Compara el peso registrado de los lotes de Precebo",
      },
    ],
  },
  {
    name: "Levante / Finalización",
    reports: [
      {
        id: "levante-lotes-cerrados",
        name: "Desempeño de lotes cerrados",
        description:
          "IEP, GPD, mortalidad y días en fase de los lotes de levante finalizados",
      },
      {
        id: "mortalidad-lf",
        name: "Mortalidad · L/F",
        description: "Analiza las causas y concentración de mortalidad",
      },
      {
        id: "consumo-alimento-lf",
        name: "Consumo de alimento · L/F",
        description: "Compara consumo real contra la curva configurada",
      },
      {
        id: "crecimiento-lotes-lf",
        name: "Crecimiento de lotes · L/F",
        description: "Compara peso real contra la curva por edad",
      },
    ],
  },
  {
    name: "Ventas",
    reports: [
      {
        id: "informe-ventas",
        name: "Informe de ventas",
        description:
          "Análisis comercial de las ventas de animales por granja, lote, etapa y cliente.",
        subcategory: "General",
      },
      {
        id: "rentabilidad-lote",
        name: "Rentabilidad por lote",
        description: "Compara ingresos, costos, utilidad y margen",
        subcategory: "General",
      },
      {
        id: "ingresos-costos-margen",
        name: "Ingresos, costos y margen",
        description: "Evolución comercial por período",
        subcategory: "General",
      },
      {
        id: "composicion-costos",
        name: "Composición de costos",
        description: "Distribución del costo productivo",
        subcategory: "General",
      },
      {
        id: "ventas-periodo-clientes",
        name: "Ventas por período y clientes",
        description: "Distribución de ingresos y volumen vendido",
        subcategory: "General",
      },
      {
        id: "precio-calidad-venta",
        name: "Precio y calidad de venta",
        description: "Precio por kg de lotes comercializados",
        subcategory: "General",
      },
      {
        id: "ventas-stock-concentrado",
        name: "Stock de concentrado",
        description: "Referencias con mayor y menor stock disponible",
        subcategory: "Concentrado",
      },
      {
        id: "gasto-consumo-etapa",
        name: "Gasto y consumo por etapa",
        description: "Consumo y costo de concentrado por etapa productiva",
        subcategory: "Concentrado",
      },
      {
        id: "ventas-compras-concentrado",
        name: "Compras de concentrado",
        description:
          "Entradas reales de concentrado por factura, sin mezclar consumos",
        subcategory: "Concentrado",
      },
      {
        id: "ventas-stock-medicamentos",
        name: "Stock de medicamentos",
        description: "Valor disponible por medicamento",
        subcategory: "Medicamentos",
      },
      {
        id: "analisis-etapa-medicamentos",
        name: "Análisis por etapa",
        description: "Consumo y costo de medicamentos por etapa productiva",
        subcategory: "Medicamentos",
      },
      {
        id: "gasto-sanitario-lote",
        name: "Gasto sanitario por lote",
        description: "Gasto de medicamentos y tratamientos por lote",
        subcategory: "Medicamentos",
      },
      {
        id: "ventas-compras-medicamentos",
        name: "Compras de medicamentos",
        description:
          "Entradas reales de medicamentos por factura, sin mezclar salidas",
        subcategory: "Medicamentos",
      },
    ],
  },
  {
    name: "Inventario",
    reports: [
      {
        id: "estado-cobertura-stock",
        name: "Estado y cobertura de stock",
        description: "Analiza cobertura y referencias críticas de concentrado",
        subcategory: "Concentrado",
      },
      {
        id: "movimientos-inventario",
        name: "Movimientos de inventario",
        description: "Entradas y salidas de concentrado por período",
        subcategory: "Concentrado",
      },
      {
        id: "kardex-concentrado",
        name: "Kardex de concentrado",
        description: "Consulta la trazabilidad de una referencia",
        subcategory: "Concentrado",
      },
      {
        id: "inventario-compras-concentrado",
        name: "Compras de concentrado",
        description: "Analiza las compras de concentrado",
        subcategory: "Concentrado",
      },
      {
        id: "estado-stock-medicamentos",
        name: "Estado de stock de medicamentos",
        description:
          "Compara el saldo disponible por referencia, cada una en su propia unidad",
        subcategory: "Medicamentos",
      },
      {
        id: "movimientos-medicamentos",
        name: "Movimientos de medicamentos",
        description: "Entradas, salidas y ajustes registrados por período",
        subcategory: "Medicamentos",
      },
      {
        id: "kardex-medicamentos",
        name: "Kardex de medicamentos",
        description:
          "Consulta la trazabilidad y el saldo corrido de una referencia",
        subcategory: "Medicamentos",
      },
      {
        id: "vencimientos-lotes",
        name: "Vencimientos y lotes",
        description: "Lotes con saldo agrupados por cercanía al vencimiento",
        subcategory: "Medicamentos",
      },
    ],
  },
  {
    name: "Sanidad",
    reports: [
      {
        id: "mortalidad-causas",
        name: "Mortalidad y causas",
        description: "¿Dónde se presenta mayor mortalidad?",
      },
      {
        id: "signos-sanitarios",
        name: "Signos sanitarios",
        description: "Frecuencia de signos generales y específicos",
      },
      {
        id: "tratamientos-medicamentos",
        name: "Tratamientos y medicamentos",
        description: "Uso y efectividad de tratamientos",
      },
      {
        id: "vacunacion-prevencion",
        name: "Vacunación y prevención",
        description: "Cumplimiento y vacunaciones vencidas",
      },
    ],
  },
]

type ChartPoint = {
  label: string
  value: number
}

const consolidatedReportScope = "Todas las granjas (consolidado)"

type ReportData = {
  farrowingRate: number
  mortalityRate: number
  weanedPiglets: number
  feedConversion: number
  mortality: ChartPoint[]
  births: ChartPoint[]
}

const reportDataByFarm: Record<string, ReportData> = {
  "Granja La Esperanza": {
    farrowingRate: 63.6,
    mortalityRate: 1.8,
    weanedPiglets: 11.9,
    feedConversion: 1.64,
    mortality: [
      { label: "ESP-11", value: 1.7 },
      { label: "ESP-17", value: 2.4 },
      { label: "ESP-08", value: 1 },
      { label: "ESP-09", value: 2.8 },
      { label: "ESP-15", value: 2.1 },
    ],
    births: [
      { label: "Ene", value: 16 },
      { label: "Feb", value: 19 },
      { label: "Mar", value: 14 },
      { label: "Abr", value: 22 },
      { label: "May", value: 20 },
      { label: "Jun", value: 24 },
    ],
  },
  "Granja El Porvenir": {
    farrowingRate: 74.2,
    mortalityRate: 2.2,
    weanedPiglets: 11.7,
    feedConversion: 1.62,
    mortality: [
      { label: "POR-04", value: 2 },
      { label: "POR-07", value: 2.2 },
      { label: "POR-08", value: 1.7 },
      { label: "POR-12", value: 2.5 },
      { label: "POR-16", value: 1.9 },
    ],
    births: [
      { label: "Ene", value: 14 },
      { label: "Feb", value: 17 },
      { label: "Mar", value: 16 },
      { label: "Abr", value: 19 },
      { label: "May", value: 21 },
      { label: "Jun", value: 20 },
    ],
  },
  "Granja San José": {
    farrowingRate: 81,
    mortalityRate: 1.6,
    weanedPiglets: 12.1,
    feedConversion: 1.63,
    mortality: [
      { label: "SJ-05", value: 1.5 },
      { label: "SJ-06", value: 1.9 },
      { label: "SJ-10", value: 1.2 },
      { label: "SJ-13", value: 2 },
      { label: "SJ-15", value: 1.8 },
    ],
    births: [
      { label: "Ene", value: 18 },
      { label: "Feb", value: 20 },
      { label: "Mar", value: 19 },
      { label: "Abr", value: 23 },
      { label: "May", value: 22 },
      { label: "Jun", value: 25 },
    ],
  },
}

const averageReportValue = (values: number[]) =>
  values.reduce((sum, value) => sum + value, 0) / values.length

function MortalityBarChart({ data }: { data: ChartPoint[] }) {
  const maximum = Math.max(2.5, ...data.map((point) => point.value))
  const axisMaximum = Math.ceil(maximum * 1.2 * 10) / 10
  const chartTop = 24
  const chartBottom = 210
  const chartHeight = chartBottom - chartTop
  const targetY = chartBottom - (2.5 / axisMaximum) * chartHeight
  return (
    <svg
      className="report-chart"
      viewBox="0 0 680 260"
      role="img"
      aria-label="Mortalidad por lote"
    >
      {[0, axisMaximum / 2, axisMaximum].map((tick) => {
        const y = chartBottom - (tick / axisMaximum) * chartHeight
        return (
          <g key={tick}>
            <line x1="52" y1={y} x2="660" y2={y} className="chart-grid-line" />
            <text x="43" y={y + 4} textAnchor="end">
              {formatDecimal(tick)} %
            </text>
          </g>
        )
      })}
      <line
        x1="52"
        y1={targetY}
        x2="660"
        y2={targetY}
        className="chart-target-line"
      />
      <text x="655" y={targetY - 7} textAnchor="end" className="target-label">
        Meta 2,5 %
      </text>
      {data.map((point, index) => {
        const x = 78 + index * 112
        const height = (point.value / axisMaximum) * chartHeight
        const y = chartBottom - height
        const colorClass =
          point.value > 2.5
            ? "bar-danger"
            : point.value >= 2.2
              ? "bar-warning"
              : "bar-positive"
        return (
          <g key={point.label}>
            <rect
              x={x}
              y={y}
              width="54"
              height={height}
              rx="6"
              className={colorClass}
            />
            <text
              x={x + 27}
              y={y - 8}
              textAnchor="middle"
              className="bar-value"
            >
              {formatDecimal(point.value)} %
            </text>
            <text x={x + 27} y="235" textAnchor="middle">
              {point.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function BirthsLineChart({ data }: { data: ChartPoint[] }) {
  const maximum = Math.max(...data.map((point) => point.value))
  const axisMaximum = Math.ceil((maximum + 2) / 5) * 5
  const chartTop = 24
  const chartBottom = 210
  const chartHeight = chartBottom - chartTop
  const points = data
    .map((point, index) => {
      const x = 72 + index * (560 / Math.max(1, data.length - 1))
      const y = chartBottom - (point.value / axisMaximum) * chartHeight
      return `${x},${y}`
    })
    .join(" ")
  return (
    <svg
      className="report-chart"
      viewBox="0 0 680 260"
      role="img"
      aria-label="Partos por mes"
    >
      {[0, axisMaximum / 2, axisMaximum].map((tick) => {
        const y = chartBottom - (tick / axisMaximum) * chartHeight
        return (
          <g key={tick}>
            <line x1="52" y1={y} x2="660" y2={y} className="chart-grid-line" />
            <text x="43" y={y + 4} textAnchor="end">
              {Math.round(tick)}
            </text>
          </g>
        )
      })}
      <polyline points={points} className="birth-line" />
      {data.map((point, index) => {
        const x = 72 + index * (560 / Math.max(1, data.length - 1))
        const y = chartBottom - (point.value / axisMaximum) * chartHeight
        return (
          <g key={point.label}>
            <circle cx={x} cy={y} r="5" className="birth-point" />
            <text x={x} y={y - 11} textAnchor="middle" className="bar-value">
              {point.value}
            </text>
            <text x={x} y="235" textAnchor="middle">
              {point.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function ReportTemplateCard({
  role,
  icon,
  description,
  accent,
  onView,
}: {
  role: ReportRole
  icon: IconName
  description: string
  accent: string
  onView: () => void
}) {
  return (
    <article className="report-template-card">
      <div className="template-preview">
        <div className="template-preview-top">
          <span style={{ background: accent }}>
            <Icon name={icon} size={20} />
          </span>
          <div>
            <b />
            <i />
          </div>
        </div>
        <div className="preview-kpis">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-chart">
          {[45, 72, 58, 84, 65].map((height, index) => (
            <i
              key={index}
              style={{ height: `${height}%`, background: accent }}
            />
          ))}
        </div>
      </div>
      <div className="template-copy">
        <div>
          <span className="template-role-icon" style={{ background: accent }}>
            <Icon name={icon} size={19} />
          </span>
          <div>
            <h2>Informe de {role}</h2>
            <p>{description}</p>
          </div>
        </div>
        <button className="button secondary" onClick={onView}>
          Ver informe
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </article>
  )
}

function DashboardsPage({
  initialScope,
  onNotice,
  onReports,
}: {
  initialScope: string
  onNotice: (text: string) => void
  onReports: () => void
}) {
  const [selectedReport, setSelectedReport] =
    useState<ReportCatalogItem | null>(null)
  const [scope, setScope] = useState(initialScope)
  const [editingReport, setEditingReport] = useState(false)
  const [activeSections, setActiveSections] = useState<ReportSection[]>([
    "Indicadores principales",
    "Mortalidad por lote",
    "Partos por mes",
  ])
  const [favorites, setFavorites] = useState<Set<string>>(
    () =>
      new Set([
        "estado-plantel-reproductivo",
        "resultados-maternidad",
        "inventario-reproductivo",
      ]),
  )
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set(reportCatalog.map((category) => category.name)),
  )
  const [categoryFilters, setCategoryFilters] =
    useState<Record<string, string>>({})
  const [startDate, setStartDate] = useState("2026-01-01")
  const [endDate, setEndDate] = useState(TODAY_ISO)
  const reportScopes = [
    ...initialFarms.map((farm) => farm.name),
    consolidatedReportScope,
  ]
  const isConsolidated = scope === consolidatedReportScope
  const selectedReportData =
    reportDataByFarm[scope] ?? reportDataByFarm[initialFarms[0].name]
  const allReportData = Object.values(reportDataByFarm)
  const reportData = isConsolidated
    ? {
        farrowingRate: averageReportValue(
          allReportData.map((data) => data.farrowingRate),
        ),
        mortalityRate: averageReportValue(
          allReportData.map((data) => data.mortalityRate),
        ),
        weanedPiglets: averageReportValue(
          allReportData.map((data) => data.weanedPiglets),
        ),
        feedConversion: averageReportValue(
          allReportData.map((data) => data.feedConversion),
        ),
        mortality: [
          allReportData[0].mortality[0],
          allReportData[0].mortality[1],
          allReportData[1].mortality[2],
          allReportData[2].mortality[3],
          allReportData[2].mortality[4],
        ],
        births: allReportData[0].births.map((point, index) => ({
          label: point.label,
          value: allReportData.reduce(
            (sum, data) => sum + data.births[index].value,
            0,
          ),
        })),
      }
    : selectedReportData
  const reportSections: {
    name: ReportSection
    icon: IconName
    description: string
  }[] = [
    {
      name: "Indicadores principales",
      icon: "trend",
      description: "Resultados clave y avance frente a las metas.",
    },
    {
      name: "Mortalidad por lote",
      icon: "chart",
      description: "Comparación de mortalidad por lote y meta.",
    },
    {
      name: "Partos por mes",
      icon: "calendar",
      description: "Evolución mensual de los partos registrados.",
    },
  ]
  const daysInPeriod = Math.max(
    1,
    Math.round(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        86_400_000,
    ),
  )
  const periodAdjustment = (daysInPeriod % 7) / 10
  const mortalityData = reportData.mortality.map((point, index) => ({
    ...point,
    value: point.value + periodAdjustment / (index + 3),
  }))
  const birthsData = reportData.births.map((point, index) => ({
    ...point,
    value:
      point.value +
      (index % 3 === 0 ? Math.round(periodAdjustment * (index + 1)) : 0),
  }))
  const formattedPeriod = `${formatDate(
    new Date(`${startDate}T12:00:00`),
  )} al ${formatDate(new Date(`${endDate}T12:00:00`))}`
  const reportSubtitle = isConsolidated
    ? `Consolidado · ${initialFarms.length} granjas · período ${formattedPeriod}`
    : `${scope} · ${formattedPeriod}`

  if (!selectedReport) {
    return (
      <div className="connected-tool-page reports-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <span>{isConsolidated ? "Consolidado" : scope}</span>
              <Icon name="chevron" size={14} />
              <strong>Tableros</strong>
            </div>
            <h1>Banco de informes</h1>
            <p>
              Consulta y abre los tableros disponibles para{" "}
              {isConsolidated ? "todas las granjas" : scope}
            </p>
          </div>
          <div className="header-actions">
            <button className="button secondary" onClick={onReports}>
              <Icon name="document" size={18} />
              Reportes e ICA
            </button>
          </div>
        </header>
        <section className="role-report-section">
          <div className="section-heading-accent">
            <h2>Plantillas por rol</h2>
          </div>
          <div className="report-templates">
            {[
              {
                role: "Gerencia" as ReportRole,
                icon: "chart" as IconName,
                description:
                  "Rentabilidad, producción y cumplimiento de metas.",
                accent: "#DCE8D9",
              },
              {
                role: "Veterinario" as ReportRole,
                icon: "syringe" as IconName,
                description: "Mortalidad, sanidad y desempeño reproductivo.",
                accent: "#FEEEEF",
              },
              {
                role: "Producción" as ReportRole,
                icon: "growth" as IconName,
                description: "Lotes, pesos, conversión y movimientos.",
                accent: "#F9E4D7",
              },
            ].map((template) => (
              <ReportTemplateCard
                key={template.role}
                {...template}
                onView={() => {
                  setActiveSections([
                    "Indicadores principales",
                    ...(template.role !== "Producción"
                      ? ["Mortalidad por lote"] as ReportSection[]
                      : []),
                    ...(template.role !== "Veterinario"
                      ? ["Partos por mes"] as ReportSection[]
                      : []),
                  ])
                  setSelectedReport({
                    id: `role-${template.role.toLowerCase()}`,
                    name: `Informe de ${template.role}`,
                    description: template.description,
                  })
                  setEditingReport(false)
                }}
              />
            ))}
          </div>
        </section>
        <div className="report-bank">
          {reportCatalog.map((category) => {
            const open = openCategories.has(category.name)
            const subcategories =
              category.subcategories ??
              Array.from(
                new Set(
                  category.reports
                    .map((report) => report.subcategory)
                    .filter((value): value is string => Boolean(value)),
                ),
              )
            const activeFilter = categoryFilters[category.name]
            const visibleReports = activeFilter
              ? category.reports.filter(
                  (report) => report.subcategory === activeFilter,
                )
              : category.reports
            return (
              <section className="report-bank-category" key={category.name}>
                <button
                  className="report-bank-heading"
                  onClick={() =>
                    setOpenCategories((current) => {
                      const next = new Set(current)
                      if (next.has(category.name)) next.delete(category.name)
                      else next.add(category.name)
                      return next
                    })
                  }
                  aria-expanded={open}
                >
                  <span className="report-bank-title">
                    <strong>{category.name}</strong>
                    <small>
                      · {category.reports.length}{" "}
                      {category.reports.length === 1 ? "tablero" : "tableros"}
                    </small>
                  </span>
                  <span>
                    <Icon name="chevron" size={17} />
                  </span>
                </button>
                {open && (
                  <div className="report-bank-body">
                    {subcategories.length > 0 && (
                      <div
                        className="report-subcategories"
                        aria-label={`Subcategorías de ${category.name}`}
                      >
                        {subcategories.map((subcategory) => (
                          <button
                            key={subcategory}
                            className={
                              activeFilter === subcategory ? "active" : ""
                            }
                            aria-pressed={activeFilter === subcategory}
                            onClick={() =>
                              setCategoryFilters((current) => ({
                                ...current,
                                [category.name]:
                                  current[category.name] === subcategory
                                    ? ""
                                    : subcategory,
                              }))
                            }
                          >
                            {subcategory}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="report-bank-grid">
                      {visibleReports.map((report) => {
                        const reportIndex = category.reports.findIndex(
                          (item) => item.id === report.id,
                        )
                        const favorite = favorites.has(report.id)
                        return (
                          <article className="report-bank-card" key={report.id}>
                            <button
                              className="report-card-main"
                              onClick={() => {
                                setSelectedReport(report)
                                setEditingReport(false)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }}
                            >
                              <span className="report-card-icon">
                                <Icon
                                  name={reportIcon(category.name, reportIndex)}
                                  size={20}
                                />
                              </span>
                              <span>
                                <strong>{report.name}</strong>
                                <small>{report.description}</small>
                              </span>
                            </button>
                            <button
                              className={`report-favorite ${
                                favorite ? "active" : ""
                              }`}
                              aria-label={`${
                                favorite ? "Quitar" : "Agregar"
                              } ${report.name} de favoritos`}
                              aria-pressed={favorite}
                              onClick={() =>
                                setFavorites((current) => {
                                  const next = new Set(current)
                                  if (next.has(report.id))
                                    next.delete(report.id)
                                  else next.add(report.id)
                                  return next
                                })
                              }
                            >
                              <Icon name="star" size={20} />
                            </button>
                          </article>
                        )
                      })}
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="connected-tool-page report-view">
      <header className="report-view-header">
        <div>
          <div className="breadcrumbs">
            <button
              onClick={() => {
                setEditingReport(false)
                setSelectedReport(null)
              }}
            >
              Banco de informes
            </button>
            <Icon name="chevron" size={14} />
            <strong>{selectedReport.name}</strong>
          </div>
          <div className="report-title-line">
            <div>
              <div>
                <h1>{selectedReport.name}</h1>
                <span className="status neutral">
                  {editingReport ? "Edición" : "Solo lectura"}
                </span>
              </div>
              <p>{reportSubtitle}</p>
            </div>
            <div className="header-actions">
              {!selectedReport.id.startsWith("role-") && (
                <button
                  className="button secondary"
                  onClick={() => setEditingReport(!editingReport)}
                >
                  <Icon name="edit" size={17} />
                  {editingReport ? "Terminar edición" : "Editar"}
                </button>
              )}
              <button
                className="button primary"
                onClick={() => onNotice("PDF preparado para exportar")}
              >
                <Icon name="download" size={17} />
                Exportar PDF
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="report-scope">
        <div>
          <span>
            <Icon name="home" size={18} />
          </span>
          <div>
            <strong>Alcance del informe</strong>
            <p>Consulta una granja o el consolidado general.</p>
          </div>
        </div>
        <select
          value={scope}
          onChange={(event) => setScope(event.target.value)}
          aria-label="Alcance del informe"
        >
          {reportScopes.map((reportScope) => (
            <option key={reportScope}>{reportScope}</option>
          ))}
        </select>
      </div>
      <div className="report-period">
        <div>
          <Icon name="calendar" size={18} />
          <div>
            <strong>Período del informe</strong>
            <span>Los indicadores y gráficas se actualizan al cambiarlo.</span>
          </div>
        </div>
        <label>
          <span>Desde</span>
          <DatePicker
            value={startDate}
            max={endDate}
            onChange={setStartDate}
            label="Seleccionar fecha inicial"
          />
        </label>
        <label>
          <span>Hasta</span>
          <DatePicker
            value={endDate}
            min={startDate}
            max={today}
            onChange={setEndDate}
            label="Seleccionar fecha final"
          />
        </label>
      </div>
      {editingReport && (
        <section className="report-section-editor">
          <div>
            <strong>Tableros del informe</strong>
            <p>Elige las secciones que quieres incluir.</p>
          </div>
          <div className="report-section-options">
            {reportSections.map((section) => {
              const checked = activeSections.includes(section.name)
              return (
                <label key={section.name}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      setActiveSections(
                        checked
                          ? activeSections.filter(
                              (name) => name !== section.name,
                            )
                          : [...activeSections, section.name],
                      )
                    }
                  />
                  <span>
                    <Icon name={section.icon} size={20} />
                  </span>
                  <div>
                    <strong>{section.name}</strong>
                    <p>{section.description}</p>
                  </div>
                  <div
                    className={`report-section-toggle ${
                      checked ? "included" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <strong>{checked ? "Incluido" : "No incluido"}</strong>
                    <span>
                      <i />
                    </span>
                  </div>
                </label>
              )
            })}
          </div>
        </section>
      )}
      {!activeSections.length ? (
        <section className="report-empty-sections">
          <span>
            <Icon name="chart" size={25} />
          </span>
          <div>
            <h2>Este informe todavía no tiene tableros</h2>
            <p>Activa al menos un tablero para ver el informe.</p>
          </div>
          <button
            className="button secondary"
            onClick={() => setEditingReport(true)}
          >
            <Icon name="edit" size={17} />
            Editar tableros
          </button>
        </section>
      ) : (
        <>
          {activeSections.includes("Indicadores principales") && (
            <div className="report-kpis">
              <div className="kpi-danger">
                <span>Tasa de parición</span>
                <strong>
                  {formatDecimal(reportData.farrowingRate)} %{" "}
                  <small>· meta 90 %</small>
                </strong>
                <p>Requiere atención</p>
              </div>
              <div className="kpi-positive">
                <span>Mortalidad</span>
                <strong>
                  {formatDecimal(reportData.mortalityRate)} %{" "}
                  <small>· meta 2,5 %</small>
                </strong>
                <p>Meta cumplida</p>
              </div>
              <div className="kpi-positive">
                <span>Lechones destetados</span>
                <strong>
                  {formatDecimal(reportData.weanedPiglets)}{" "}
                  <small>· meta 11,5</small>
                </strong>
                <p>Meta superada</p>
              </div>
              <div className="kpi-warning">
                <span>Conversión alimenticia</span>
                <strong>
                  {formatDecimal(reportData.feedConversion, 2)}{" "}
                  <small>· meta 1,60</small>
                </strong>
                <p>Cerca de la meta</p>
              </div>
            </div>
          )}
          <div
            className={`report-charts ${
              activeSections.filter(
                (section) => section !== "Indicadores principales",
              ).length === 1
                ? "single"
                : ""
            }`}
          >
            {activeSections.includes("Mortalidad por lote") && (
              <section className="records-card">
                <div className="records-heading report-chart-heading">
                  <div>
                    <h2>Mortalidad por lote</h2>
                    <p>Porcentaje de mortalidad frente a la meta</p>
                  </div>
                  <div className="chart-legend" aria-label="Leyenda">
                    <span className="legend-positive">Cumple</span>
                    <span className="legend-warning">Cerca</span>
                    <span className="legend-danger">No cumple</span>
                  </div>
                </div>
                <MortalityBarChart data={mortalityData} />
              </section>
            )}
            {activeSections.includes("Partos por mes") && (
              <section className="records-card">
                <div className="records-heading report-chart-heading">
                  <div>
                    <h2>Partos por mes</h2>
                    <p>Evolución durante el período seleccionado</p>
                  </div>
                  <div className="chart-legend" aria-label="Leyenda">
                    <span className="legend-births">Partos registrados</span>
                  </div>
                </div>
                <BirthsLineChart data={birthsData} />
              </section>
            )}
          </div>
        </>
      )}
    </div>
  )
}

type OperationalReport = {
  id: string
  name: string
  description: string
  group: string
  icon: IconName
}

const operationalReportGroups: {
  name: string
  icon: IconName
  reports: Omit<OperationalReport, "group" | "icon">[]
}[] = [
  {
    name: "Inventario",
    icon: "box",
    reports: [
      {
        id: "food-kardex",
        name: "Kardex de alimentos",
        description: "Entradas, salidas y saldo de alimentos por referencia.",
      },
      {
        id: "feed-consumption",
        name: "Registro de consumo",
        description: "Consumo de alimento por ciclo, lote y período.",
      },
      {
        id: "medicine-kardex",
        name: "Kardex de medicamentos",
        description: "Movimientos y existencias de productos veterinarios.",
      },
      {
        id: "medicine-purchases",
        name: "Compras de medicamentos",
        description: "Facturas y entradas de medicamentos a inventario.",
      },
      {
        id: "food-purchases",
        name: "Compras de alimentos",
        description: "Compras de concentrado y materias primas.",
      },
      {
        id: "bpaa-validation",
        name: "Validación BPAA",
        description: "Controles de buenas prácticas de alimentación animal.",
      },
    ],
  },
  {
    name: "Sanidad",
    icon: "syringe",
    reports: [
      {
        id: "treatments",
        name: "Registro de tratamientos",
        description: "Tratamientos veterinarios aplicados y tiempos de retiro.",
      },
      {
        id: "morbidity",
        name: "Registro de morbilidad",
        description: "Casos clínicos y seguimiento por animal o lote.",
      },
      {
        id: "medicated-feed",
        name: "Alimento medicado",
        description: "Suministro de alimento medicado y prescripciones.",
      },
      {
        id: "vaccination",
        name: "Registro de vacunación",
        description: "Vacunas aplicadas, dosis, lotes y responsables.",
      },
      {
        id: "mortality",
        name: "Mortalidades",
        description: "Mortalidad por fecha, ciclo, causa y responsable.",
      },
      {
        id: "bpmv-validation",
        name: "Validación BPMV",
        description:
          "Validaciones de buenas prácticas de medicamentos veterinarios.",
      },
      {
        id: "lactation-mortality",
        name: "Mortalidad en lactancia y adopciones",
        description: "Pérdidas, adopciones y movimientos de camadas.",
      },
    ],
  },
  {
    name: "Producción",
    icon: "growth",
    reports: [
      {
        id: "animal-identification",
        name: "Identificación de animales y lotes",
        description: "Trazabilidad de animales, bandas y lotes productivos.",
      },
      {
        id: "body-condition",
        name: "Condición corporal",
        description: "Evaluaciones de condición corporal del plantel.",
      },
      {
        id: "weights",
        name: "Pesos",
        description: "Pesajes y evolución del peso por etapa.",
      },
      {
        id: "quarantine",
        name: "Cuarentena y aclimatación de reemplazos",
        description: "Seguimiento de reemplazos durante su adaptación.",
      },
      {
        id: "mother-productivity",
        name: "Productividad de la madre",
        description: "Ciclos, nacidos vivos y destetados por hembra.",
      },
      {
        id: "production-lots",
        name: "Lotes productivos",
        description: "Historial completo de lotes de Precebo y Levante.",
      },
    ],
  },
  {
    name: "Ventas",
    icon: "chart",
    reports: [
      {
        id: "sales-finishing",
        name: "Levante/Engorde",
        description: "Ventas de animales de levante y finalización.",
      },
      {
        id: "sales-discards",
        name: "Descartes",
        description: "Ventas y bajas comerciales por descarte.",
      },
      {
        id: "sales-piglets",
        name: "Lechones",
        description: "Ventas de lechones por cliente y período.",
      },
      {
        id: "sales-precebo",
        name: "Precebo",
        description: "Ventas de animales al finalizar Precebo.",
      },
      {
        id: "sales-breeders",
        name: "Reproductores descartados",
        description: "Salida comercial de reproductores descartados.",
      },
    ],
  },
]

const operationalReports: OperationalReport[] = operationalReportGroups.flatMap(
  (group) =>
    group.reports.map((report) => ({
      ...report,
      group: group.name,
      icon: group.icon,
    })),
)

type IcaItem = {
  id: string
  name: string
}

type IcaChapter = {
  number: number
  name: string
  items: IcaItem[]
}

const icaChapters: IcaChapter[] = [
  {
    number: 1,
    name: "Sanidad animal",
    items: [
      { id: "1.1", name: "Plan sanitario" },
      { id: "1.2", name: "Enfermedades de control oficial (PPC)" },
      { id: "1.3", name: "Registro de mortalidad" },
      {
        id: "1.4",
        name: "Instructivo de manejo sanitario sobre enfermedades de control oficial",
      },
      { id: "1.5", name: "Área de enfermería o tratamiento" },
    ],
  },
  {
    number: 2,
    name: "Identificación",
    items: [
      { id: "2.1", name: "Identificación de animales y lotes" },
      { id: "2.2.1", name: "Ficha de sanidad de reproductoras — último ciclo" },
      { id: "2.2.2", name: "Ficha individual de reproductores" },
      { id: "2.2.3", name: "Ficha/historial de lotes de Precebo" },
      { id: "2.2.4", name: "Ficha/historial de lotes de Levante/Finalización" },
    ],
  },
  {
    number: 3,
    name: "Bioseguridad",
    items: [
      { id: "3.1", name: "Delimitación del predio" },
      { id: "3.2", name: "Ingreso de personas y vehículos" },
      { id: "3.3", name: "Protocolo de desinfección de vehículos" },
      { id: "3.4", name: "Desinfección de herramientas y utensilios" },
      { id: "3.5", name: "Protocolo para el ingreso de personas" },
      { id: "3.6.1", name: "Protocolo de lavado y desinfección de botas" },
      { id: "3.6.2", name: "Registro de lavado y desinfección de botas" },
      { id: "3.7", name: "Ingreso de material genético" },
      { id: "3.8", name: "Ingreso y aislamiento de reemplazos" },
      { id: "3.9", name: "Cuarentena y aclimatación" },
      { id: "3.10", name: "Identificación de áreas" },
    ],
  },
  {
    number: 4,
    name: "Buenas prácticas para el uso de medicamentos veterinarios (BPMV)",
    items: [
      { id: "4.1", name: "Registro ICA de productos veterinarios" },
      { id: "4.2", name: "Vigencia de productos" },
      { id: "4.3", name: "Almacenamiento de productos" },
      { id: "4.4", name: "Sustancias prohibidas" },
      { id: "4.5", name: "Materias primas químicas terapéuticas/promotores" },
      { id: "4.6", name: "Tiempo de retiro" },
      { id: "4.7", name: "Prescripción veterinaria" },
      { id: "4.8.1", name: "Registro de tratamientos veterinarios" },
      { id: "4.8.2", name: "Registro de vacunación" },
      { id: "4.9", name: "Equipos y agujas" },
      { id: "4.10", name: "Inventario de productos veterinarios" },
      { id: "4.11", name: "Autorización veterinaria del personal" },
      { id: "4.12", name: "Eventos adversos" },
    ],
  },
  {
    number: 5,
    name: "Buenas prácticas para la alimentación animal (BPAA)",
    items: [
      { id: "5.1", name: "Registro ICA y estado de alimentos comerciales" },
      { id: "5.2", name: "Alimento como medio para medicamentos" },
      { id: "5.3", name: "Uso de subproductos" },
      { id: "5.4", name: "Prohibiciones en alimentación" },
      { id: "5.5", name: "Insumos agrícolas y carencia" },
      { id: "5.6", name: "Inventario de alimentos y materias primas" },
      { id: "5.7", name: "Almacenamiento y calidad del agua" },
    ],
  },
  {
    number: 6,
    name: "Saneamiento",
    items: [
      {
        id: "6.1.1",
        name: "Registro de limpieza de áreas, equipos y utensilios",
      },
      {
        id: "6.1.2",
        name: "Protocolo de limpieza de áreas, equipos y utensilios",
      },
      { id: "6.2", name: "Ubicación alejada de contaminación" },
      { id: "6.3", name: "Protección de fuentes hídricas" },
      {
        id: "6.4.1",
        name: "Protocolo de disposición de estiércol y efluentes",
      },
      { id: "6.4.2", name: "Disposición de estiércol y efluentes" },
      { id: "6.5", name: "Manejo de residuos sólidos" },
      {
        id: "6.6",
        name: "Almacenamiento de productos, equipos y herramientas",
      },
      { id: "6.7.1", name: "Protocolo de manejo de plagas y roedores" },
      { id: "6.7.2", name: "Registro de control de plagas" },
    ],
  },
  {
    number: 7,
    name: "Bienestar animal",
    items: [
      { id: "7.1", name: "Adaptación de animales" },
      { id: "7.2", name: "Superficies y espacio" },
      { id: "7.3", name: "Agrupamiento social" },
      { id: "7.4", name: "Enfermedades y parásitos" },
      { id: "7.5", name: "Alimentos y agua" },
      { id: "7.6", name: "Sacrificio humanitario" },
      { id: "7.7", name: "Dolor y sufrimiento" },
      { id: "7.8", name: "Relación hombre-animal" },
    ],
  },
  {
    number: 8,
    name: "Personal",
    items: [
      { id: "8.1", name: "Capacitación al personal" },
      { id: "8.2", name: "Uso de implementos" },
    ],
  },
]

const initialIcaReady = new Set([
  "1.3",
  "2.1",
  "2.2.1",
  "2.2.2",
  "2.2.3",
  "2.2.4",
  "4.8.2",
  "4.10",
  "5.6",
])
const expiredIcaItems = new Set(["4.2"])
const openIcaReports: Record<string, string> = {
  "1.3": "mortality",
  "2.1": "animal-identification",
  "2.2.1": "mother-productivity",
  "2.2.2": "animal-identification",
  "2.2.3": "production-lots",
  "2.2.4": "production-lots",
  "4.8.1": "treatments",
  "4.8.2": "vaccination",
  "4.10": "medicine-kardex",
  "5.6": "food-kardex",
  "6.7.2": "porci-pest-control",
}
const verifyIcaItems = new Set(["1.5", "3.1", "3.10", "6.2", "6.3", "7.2"])

const operationalReportRows = (report: OperationalReport) => {
  if (report.id === "vaccination") {
    return {
      columns: [
        "Fecha",
        "Ciclo",
        "Animal/Lote/Banda",
        "Vacuna",
        "Retiro (días)",
        "Estado del retiro",
        "Vía",
        "Dosis (ml)",
        "Cantidad de animales",
        "Total consumido",
        "Responsable",
        "Lote de la vacuna",
        "Vencimiento",
        "Registro ICA",
        "Laboratorio",
      ],
      rows: [
        [
          "14/03/2026",
          "Plantel reproductivo",
          "Cerda #1305",
          "Parvovirus",
          "0",
          "No aplica",
          "Intramuscular",
          "2",
          "1",
          "2 ml",
          "Andrés Mejía",
          "PV-24018",
          "15/03/2026",
          "ICA 8421-MV",
          "VetPharma",
        ],
        [
          "12/03/2026",
          "Precebo",
          "PR-2026-11",
          "Circovirus",
          "0",
          "No aplica",
          "Intramuscular",
          "1",
          "118",
          "118 ml",
          "Carlos Ríos",
          "CV-9032",
          "14/03/2026",
          "ICA 6147-MV",
          "BioPorc",
        ],
        [
          "08/03/2026",
          "Levante",
          "LV-2026-08",
          "Mycoplasma",
          "0",
          "No aplica",
          "Intramuscular",
          "2",
          "99",
          "198 ml",
          "Andrés Mejía",
          "MY-1188",
          "16/03/2026",
          "ICA 7732-MV",
          "AgroVet",
        ],
      ],
    }
  }
  if (report.id === "mortality") {
    return {
      columns: [
        "Fecha",
        "Ciclo",
        "Animal/Lote",
        "Cantidad",
        "Sexo",
        "Causa",
        "Responsable",
      ],
      rows: [
        [
          "12/03/2026",
          "Precebo",
          "PR-2026-11",
          "1",
          "Macho",
          "Aplastamiento",
          "Carlos Ríos",
        ],
        [
          "12/03/2026",
          "Levante",
          "LV-2026-08",
          "1",
          "Macho",
          "Enfermedad respiratoria",
          "Andrés Mejía",
        ],
        [
          "08/03/2026",
          "Precebo",
          "PC-2025-017",
          "2",
          "Hembra",
          "Bajo consumo",
          "Andrés Mejía",
        ],
      ],
    }
  }
  return {
    columns: [
      "Fecha",
      "Ciclo",
      "Animal/Lote/Banda",
      "Concepto",
      "Cantidad",
      "Responsable",
      "Estado",
    ],
    rows: [
      [
        "15/03/2026",
        "Levante",
        "LV-2026-08",
        report.name,
        "99",
        "Andrés Mejía",
        "Al día",
      ],
      [
        "12/03/2026",
        "Precebo",
        "PR-2026-11",
        report.name,
        "118",
        "Carlos Ríos",
        "Al día",
      ],
      [
        "08/03/2026",
        "Plantel reproductivo",
        "Banda 37",
        report.name,
        "26",
        "Andrés Mejía",
        "Verificado",
      ],
    ],
  }
}

function OperationalReportDialog({
  report,
  onClose,
  onNotice,
}: {
  report: OperationalReport
  onClose: () => void
  onNotice: (text: string) => void
}) {
  const data = operationalReportRows(report)
  const [from, setFrom] = useState("2026-02-15")
  const [to, setTo] = useState(TODAY_ISO)
  const [query, setQuery] = useState("")
  const [pageSize, setPageSize] = useState("25")
  const [page, setPage] = useState(1)
  const [columnsOpen, setColumnsOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [visibleColumns, setVisibleColumns] = useState(
    () => new Set(data.columns),
  )
  const filteredRows = data.rows.filter((row) =>
    row.join(" ").toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <DialogShell title={report.name} onClose={onClose} size="full">
      <div className="operational-report-modal">
        <p className="report-modal-description">{report.description}</p>
        <div className="report-modal-period">
          <label>
            <span>Desde</span>
            <DatePicker
              value={from}
              max={to}
              onChange={setFrom}
              label="Fecha inicial"
            />
          </label>
          <label>
            <span>Hasta</span>
            <DatePicker
              value={to}
              min={from}
              max={TODAY_ISO}
              onChange={setTo}
              label="Fecha final"
            />
          </label>
          <button
            className="button primary"
            onClick={() => {
              setPage(1)
              onNotice("Reporte actualizado")
            }}
          >
            Buscar
          </button>
        </div>
        <div className="report-table-toolbar">
          <label className="search-field">
            <Icon name="search" size={18} />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPage(1)
              }}
              placeholder="Buscar en el reporte"
            />
          </label>
          <div className="report-toolbar-menu">
            <button
              className="button secondary"
              onClick={() => setColumnsOpen(!columnsOpen)}
            >
              <Icon name="table" size={17} /> Columnas
            </button>
            {columnsOpen && (
              <div className="report-dropdown columns-dropdown">
                {data.columns.map((column) => (
                  <label key={column}>
                    <input
                      type="checkbox"
                      checked={visibleColumns.has(column)}
                      onChange={() => {
                        const next = new Set(visibleColumns)
                        if (next.has(column)) next.delete(column)
                        else next.add(column)
                        setVisibleColumns(next)
                      }}
                    />
                    {column}
                  </label>
                ))}
              </div>
            )}
          </div>
          <label className="report-page-size">
            <span>Filas por página</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(event.target.value)
                setPage(1)
              }}
            >
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>
          <div className="report-toolbar-menu">
            <button
              className="button secondary"
              onClick={() => setExportOpen(!exportOpen)}
            >
              <Icon name="download" size={17} /> Exportar
            </button>
            {exportOpen && (
              <div className="report-dropdown export-dropdown">
                {["Excel", "CSV", "PDF"].map((format) => (
                  <button
                    key={format}
                    onClick={() => {
                      setExportOpen(false)
                      onNotice(`Reporte exportado en ${format}`)
                    }}
                  >
                    {format}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="table-wrap operational-data-table">
          <table>
            <thead>
              <tr>
                {data.columns.map(
                  (column) =>
                    visibleColumns.has(column) && (
                      <th key={column}>{column}</th>
                    ),
                )}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map(
                    (value, index) =>
                      visibleColumns.has(data.columns[index]) && (
                        <td key={`${rowIndex}-${index}`}>{value}</td>
                      ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {!filteredRows.length && (
            <div className="report-no-data">No hay datos con estos filtros</div>
          )}
        </div>
        <div className="report-pagination">
          <span>
            {countLabel(filteredRows.length, "registro", "registros")}
          </span>
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage(Math.max(1, page - 1))}
            >
              Anterior
            </button>
            <strong>{page} de 3</strong>
            <button
              disabled={page === 3}
              onClick={() => setPage(Math.min(3, page + 1))}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </DialogShell>
  )
}

function IcaAttachmentDialog({
  item,
  onClose,
  onSave,
}: {
  item: IcaItem
  onClose: () => void
  onSave: () => void
}) {
  const [name, setName] = useState("")
  const [reference, setReference] = useState("")
  const [fileName, setFileName] = useState("")
  const [issuedAt, setIssuedAt] = useState("")
  const [expiration, setExpiration] = useState("")
  const [noExpiration, setNoExpiration] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  return (
    <DialogShell
      title="Adjuntar documento o foto"
      onClose={onClose}
      size="wide"
    >
      <div className="ica-form-context">
        <strong>
          {item.id} · {item.name}
        </strong>
      </div>
      <div className="form-content ica-attachment-form">
        <label
          className={`field ${submitted && !name.trim() ? "has-error" : ""}`}
        >
          <span>
            Nombre del soporte <em>* obligatorio</em>
          </span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ej. Plan sanitario 2026"
          />
        </label>
        <label
          className={`ica-file-drop ${
            submitted && !fileName && !reference.trim() ? "has-error" : ""
          }`}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault()
            setFileName(event.dataTransfer.files[0]?.name ?? "")
          }}
        >
          <Icon name="download" size={24} />
          <strong>{fileName || "Arrastra o selecciona un archivo"}</strong>
          <span>PDF, JPG o PNG · máximo 20 MB</span>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(event) =>
              setFileName(event.target.files?.[0]?.name ?? "")
            }
          />
        </label>
        <label className="field">
          <span>Ruta/referencia</span>
          <input
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            placeholder="Ej. Archivador sanitario, carpeta 2"
          />
        </label>
        <div className="form-grid">
          <label className="field">
            <span>Fecha de expedición (opcional)</span>
            <DatePicker
              value={issuedAt}
              onChange={setIssuedAt}
              max={TODAY_ISO}
              label="Fecha de expedición"
            />
          </label>
          <label
            className={`field ${
              submitted && !noExpiration && !expiration ? "has-error" : ""
            }`}
          >
            <span>
              Fecha de vencimiento <em>* obligatorio</em>
            </span>
            <DatePicker
              value={expiration}
              onChange={setExpiration}
              min={TODAY_ISO}
              label="Fecha de vencimiento"
            />
          </label>
        </div>
        <label className="ica-checkbox">
          <input
            type="checkbox"
            checked={noExpiration}
            onChange={(event) => setNoExpiration(event.target.checked)}
          />
          No vence
        </label>
        <label className="field">
          <span>Observaciones</span>
          <textarea placeholder="Información adicional" />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button primary"
          onClick={() => {
            setSubmitted(true)
            if (
              name.trim() &&
              (fileName || reference.trim()) &&
              (noExpiration || expiration)
            )
              onSave()
          }}
        >
          Guardar documento
        </button>
      </div>
    </DialogShell>
  )
}

function IcaVerificationDialog({
  item,
  onClose,
  onSave,
}: {
  item: IcaItem
  onClose: () => void
  onSave: () => void
}) {
  const [date, setDate] = useState(TODAY_ISO)
  const [responsible, setResponsible] = useState(CONNECTED_USER)
  return (
    <DialogShell title="Verificación en campo" onClose={onClose}>
      <div className="ica-form-context">
        <strong>
          {item.id} · {item.name}
        </strong>
      </div>
      <div className="form-content form-grid">
        <label className="field">
          <span>Fecha</span>
          <DatePicker
            value={date}
            max={TODAY_ISO}
            onChange={setDate}
            label="Fecha de verificación"
          />
        </label>
        <label className="field">
          <span>Responsable</span>
          <input
            value={responsible}
            onChange={(event) => setResponsible(event.target.value)}
          />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button primary"
          disabled={!date || !responsible.trim()}
          onClick={onSave}
        >
          Guardar verificación
        </button>
      </div>
    </DialogShell>
  )
}

function ReportsPage({
  farmName,
  alerts,
  onNotice,
  porciTables,
}: {
  farmName: string
  alerts: HomeFarmAlert[]
  onNotice: (text: string) => void
  porciTables: PorciTableDefinition[]
}) {
  const porciReports: OperationalReport[] = porciTables.map((table) => ({
    id: `porci-${table.id}`,
    name: table.name,
    description: "Registros de la PorciTabla configurada para esta granja.",
    group: "PorciTablas",
    icon: table.icon,
  }))
  const allReports = [...operationalReports, ...porciReports]
  const [section, setSection] = useState<"reports" | "ica">("reports")
  const [reportQuery, setReportQuery] = useState("")
  const [selectedReport, setSelectedReport] =
    useState<OperationalReport | null>(null)
  const [ready, setReady] = useState(() => new Set(initialIcaReady))
  const [icaQuery, setIcaQuery] = useState("")
  const [icaFilter, setIcaFilter] = useState<"Todos" | "Pendientes">("Todos")
  const [openChapters, setOpenChapters] = useState(() => new Set([1, 2]))
  const [attachment, setAttachment] = useState<IcaItem | null>(null)
  const [verification, setVerification] = useState<IcaItem | null>(null)
  const [criteria, setCriteria] = useState<IcaItem | null>(null)
  const [physical, setPhysical] = useState(() => new Set<string>())
  const [dateRangeOpen, setDateRangeOpen] = useState(false)
  const [alertsOpen, setAlertsOpen] = useState(false)
  const [folderFrom, setFolderFrom] = useState("2026-01-01")
  const [folderTo, setFolderTo] = useState(TODAY_ISO)
  const pending = 61 - ready.size
  const progress = Math.round((ready.size / 61) * 100)
  const findReport = (id: string) =>
    allReports.find((report) => report.id === id) ?? {
      id,
      name:
        id === "porci-pest-control"
          ? "Registro de control de plagas"
          : "Reporte operativo",
      description: "Registros generados por la operación de la granja.",
      group: "PorciTablas",
      icon: "table" as IconName,
    }
  const detailFor = (item: IcaItem) => {
    if (expiredIcaItems.has(item.id)) return "Venció el 15/12/2025"
    if (ready.has(item.id))
      return item.id.startsWith("2.")
        ? "Último registro: 14/03/2026"
        : "Evidencia actualizada"
    if (verifyIcaItems.has(item.id)) return "Pendiente de verificación en campo"
    return "No se ha adjuntado evidencia"
  }
  const filteredReportGroups = [
    ...operationalReportGroups.map((group) => ({
      name: group.name,
      reports: allReports.filter((report) => report.group === group.name),
    })),
    { name: "PorciTablas", reports: porciReports },
  ].map((group) => ({
    ...group,
    reports: group.reports.filter((report) =>
      `${report.name} ${report.description}`
        .toLowerCase()
        .includes(reportQuery.toLowerCase()),
    ),
  }))
  return (
    <>
      <div className="connected-tool-page operational-reports-page">
        <header className="page-header connected-page-header reports-module-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <span>{farmName}</span>
              <Icon name="chevron" size={14} />
              <strong>Reportes</strong>
            </div>
            <div className="reports-title-line">
              <h1>Reportes · {farmName}</h1>
              <span className="status positive">
                Preparación expediente ICA
              </span>
            </div>
            <p>Reportes e informes de la granja</p>
          </div>
          <div className="header-actions">
            <div className="bell-wrap">
              <button
                className="icon-button alert-bell"
                aria-label="Alertas de documentos ICA"
                onClick={() => setAlertsOpen(!alertsOpen)}
              >
                <Icon name="bell" size={19} />
                {alerts.length > 0 && <span>{alerts.length}</span>}
              </button>
              {alertsOpen && (
                <div className="alerts-popover reports-alerts-popover">
                  <div className="popover-heading">
                    <strong>Alertas ICA</strong>
                    <span>{alerts.length} requiere atención</span>
                  </div>
                  {alerts.map((alert) => (
                    <div className="popover-alert" key={alert.id}>
                      <span className={`alert-dot urgency-${alert.urgency}`} />
                      <div>
                        <strong>{alert.title}</strong>
                        <p>{alert.detail}</p>
                        <button
                          onClick={() => {
                            setAlertsOpen(false)
                            setSection("ica")
                          }}
                        >
                          Abrir carpeta ICA
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="reports-main-switch" aria-label="Secciones de reportes">
          <button
            className={section === "reports" ? "active" : ""}
            onClick={() => setSection("reports")}
          >
            Reportes operativos
          </button>
          <button
            className={section === "ica" ? "active" : ""}
            onClick={() => setSection("ica")}
          >
            Carpeta ICA <span>{pending}</span>
          </button>
        </div>
        {section === "reports" ? (
          <div className="operational-reports-content">
            <label className="search-field reports-search">
              <Icon name="search" size={18} />
              <input
                value={reportQuery}
                onChange={(event) => setReportQuery(event.target.value)}
                placeholder="Buscar reporte"
              />
            </label>
            <div className="operational-groups">
              {filteredReportGroups.map(
                (group) =>
                  group.reports.length > 0 && (
                    <section className="operational-group" key={group.name}>
                      <div className="section-heading-accent">
                        <h2>
                          {group.name} <span>· {group.reports.length}</span>
                        </h2>
                      </div>
                      <div className="operational-report-list">
                        {group.reports.map((report) => (
                          <button
                            key={report.id}
                            onClick={() => setSelectedReport(report)}
                          >
                            <span className="operational-report-icon">
                              <Icon name={report.icon} size={20} />
                            </span>
                            <span className="operational-report-copy">
                              <strong>{report.name}</strong>
                              <small>{report.description}</small>
                            </span>
                            <span className="status neutral">
                              {report.group}
                            </span>
                            <Icon name="arrow" size={17} />
                          </button>
                        ))}
                      </div>
                    </section>
                  ),
              )}
            </div>
            <section className="ica-package-card">
              <span>
                <Icon name="document" size={23} />
              </span>
              <div>
                <h2>Paquete ICA completo</h2>
                <p>Todos los reportes requeridos en un ZIP</p>
              </div>
              <button
                className="button secondary"
                onClick={() => onNotice("Paquete descargado")}
              >
                <Icon name="download" size={17} />
                Exportar todos
              </button>
            </section>
          </div>
        ) : (
          <div className="ica-folder">
            <section className="ica-progress-card">
              <div className="ica-progress-heading">
                <div>
                  <span>Carpeta ICA</span>
                  <strong>
                    {ready.size} de 61 listos · {progress} %
                  </strong>
                </div>
                <span className="status warning">
                  {countLabel(pending, "pendiente", "pendientes")}
                </span>
              </div>
              <div className="ica-progress-track">
                <span style={{ width: `${progress}%` }} />
              </div>
              <div className="ica-progress-actions">
                <div>
                  <span>Código del expediente</span>
                  <strong>76509-2026-03-16</strong>
                </div>
                <div className="ica-date-range-wrap">
                  <button
                    className="icon-button"
                    aria-label="Rango de fechas del expediente"
                    onClick={() => setDateRangeOpen(!dateRangeOpen)}
                  >
                    <Icon name="calendar" size={19} />
                  </button>
                  {dateRangeOpen && (
                    <div className="ica-date-range-popover">
                      <label>
                        <span>Desde</span>
                        <DatePicker
                          value={folderFrom}
                          max={folderTo}
                          onChange={setFolderFrom}
                          label="Desde"
                        />
                      </label>
                      <label>
                        <span>Hasta</span>
                        <DatePicker
                          value={folderTo}
                          min={folderFrom}
                          max={TODAY_ISO}
                          onChange={setFolderTo}
                          label="Hasta"
                        />
                      </label>
                    </div>
                  )}
                </div>
                <button
                  className="button primary"
                  onClick={() => onNotice("Expediente ICA descargado")}
                >
                  <Icon name="download" size={17} />
                  Descargar expediente
                </button>
              </div>
            </section>
            <div className="ica-filters">
              <label className="search-field">
                <Icon name="search" size={18} />
                <input
                  value={icaQuery}
                  onChange={(event) => setIcaQuery(event.target.value)}
                  placeholder="Buscar numeral, evidencia o criterio"
                />
              </label>
              <div className="reports-main-switch compact">
                {(["Todos", "Pendientes"] as const).map((filter) => (
                  <button
                    key={filter}
                    className={icaFilter === filter ? "active" : ""}
                    onClick={() => setIcaFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="ica-chapters">
              {icaChapters.map((chapter) => {
                const chapterReady = chapter.items.filter((item) =>
                  ready.has(item.id),
                ).length
                const chapterDone = chapterReady === chapter.items.length
                const visibleItems = chapter.items.filter(
                  (item) =>
                    `${item.id} ${item.name} ${detailFor(item)}`
                      .toLowerCase()
                      .includes(icaQuery.toLowerCase()) &&
                    (icaFilter === "Todos" || !ready.has(item.id)),
                )
                if (
                  !visibleItems.length &&
                  (icaQuery || icaFilter === "Pendientes")
                )
                  return null
                const open =
                  openChapters.has(chapter.number) || Boolean(icaQuery)
                return (
                  <section className="ica-chapter" key={chapter.number}>
                    <button
                      className="ica-chapter-heading"
                      onClick={() => {
                        const next = new Set(openChapters)
                        if (next.has(chapter.number))
                          next.delete(chapter.number)
                        else next.add(chapter.number)
                        setOpenChapters(next)
                      }}
                    >
                      <span className="ica-chapter-number">
                        {chapter.number}
                      </span>
                      <span>
                        <strong>{chapter.name}</strong>
                        <small>
                          {chapterReady} de {chapter.items.length} listos
                        </small>
                      </span>
                      <span
                        className={`status ${
                          chapterDone ? "positive" : "warning"
                        }`}
                      >
                        {chapterDone ? "Al día" : "Pendiente"}
                      </span>
                      <Icon name="chevron" size={18} />
                    </button>
                    {open && (
                      <div className="ica-items">
                        {visibleItems.map((item) => {
                          const isReady = ready.has(item.id)
                          const isExpired =
                            expiredIcaItems.has(item.id) && !isReady
                          const action = openIcaReports[item.id]
                            ? "Abrir"
                            : verifyIcaItems.has(item.id)
                              ? "Verificar"
                              : "Adjuntar"
                          return (
                            <div className="ica-item" key={item.id}>
                              <strong className="ica-item-number">
                                {item.id}
                              </strong>
                              <div className="ica-item-copy">
                                <strong>{item.name}</strong>
                                <small>{detailFor(item)}</small>
                              </div>
                              <button
                                className="ica-info-button"
                                aria-label={`Criterios de ${item.id}`}
                                onClick={() => setCriteria(item)}
                              >
                                <Icon name="info" size={17} />
                              </button>
                              <span
                                className={`status ${
                                  isReady
                                    ? "positive"
                                    : isExpired
                                      ? "critical"
                                      : "warning"
                                }`}
                              >
                                {isReady
                                  ? "Al día"
                                  : isExpired
                                    ? "Vencido"
                                    : "Pendiente"}
                              </span>
                              {(verifyIcaItems.has(item.id) ||
                                item.id === "3.2") && (
                                <label className="physical-check">
                                  <input
                                    type="checkbox"
                                    checked={physical.has(item.id)}
                                    onChange={() => {
                                      const next = new Set(physical)
                                      if (next.has(item.id))
                                        next.delete(item.id)
                                      else next.add(item.id)
                                      setPhysical(next)
                                    }}
                                  />
                                  Físico en granja
                                </label>
                              )}
                              <button
                                className="button secondary ica-row-action"
                                onClick={() => {
                                  if (action === "Abrir")
                                    setSelectedReport(
                                      findReport(openIcaReports[item.id]),
                                    )
                                  else if (action === "Verificar")
                                    setVerification(item)
                                  else setAttachment(item)
                                }}
                              >
                                {action}
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </div>
        )}
      </div>
      {selectedReport && (
        <OperationalReportDialog
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
          onNotice={onNotice}
        />
      )}
      {attachment && (
        <IcaAttachmentDialog
          item={attachment}
          onClose={() => setAttachment(null)}
          onSave={() => {
            setReady((current) => new Set(current).add(attachment.id))
            setAttachment(null)
            onNotice("Documento guardado")
          }}
        />
      )}
      {verification && (
        <IcaVerificationDialog
          item={verification}
          onClose={() => setVerification(null)}
          onSave={() => {
            setReady((current) => new Set(current).add(verification.id))
            setVerification(null)
            onNotice("Verificación guardada")
          }}
        />
      )}
      {criteria && (
        <div
          className="side-panel-backdrop"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setCriteria(null)
          }
        >
          <aside className="sow-panel criteria-panel">
            <div className="panel-heading">
              <div>
                <span>Criterios de cumplimiento</span>
                <h2>{criteria.id}</h2>
              </div>
              <button className="icon-button" onClick={() => setCriteria(null)}>
                <Icon name="x" size={20} />
              </button>
            </div>
            <div className="panel-body">
              <h3>{criteria.name}</h3>
              <p>
                La evidencia debe estar vigente, identificar claramente la
                granja y permitir verificar el cumplimiento del numeral.
              </p>
              <ul>
                <li>Documento legible y completo.</li>
                <li>Fecha y responsable identificados.</li>
                <li>Disponible para consulta durante la visita ICA.</li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

const porciTableAlertCountByFarm: Record<number, number> = {
  1: 2,
  2: 1,
  3: 2,
}

function getFarmAlerts(
  farm: Farm,
  lots: Lot[],
  inventoryAttention: InventoryAttention[],
  breedingAlertCount: number,
): HomeFarmAlert[] {
  const alerts: HomeFarmAlert[] = []

  if (farm.cycles.includes("Plantel reproductivo")) {
    initialBreedingAlerts.slice(0, breedingAlertCount).forEach((alert) => {
      alerts.push({
        id: `plantel-${farm.id}-${alert.id}`,
        title: alert.title,
        detail: `${alert.sowNumber} · ${alert.detail}`,
        urgency: alert.urgency,
        module: "Plantel reproductivo",
        destination: "Plantel reproductivo",
      })
    })
  }

  if (farm.cycles.includes("Reproductor")) {
    alerts.push(
      {
        id: `reproductor-vacuna-${farm.id}`,
        title: "Vacuna pendiente",
        detail: "Macho reproductor · requiere seguimiento hoy",
        urgency: 1,
        module: "Reproductor",
        destination: "Reproductor",
      },
      {
        id: `reproductor-lote-${farm.id}`,
        title: "Revisión de lote",
        detail: "Semen de genética externa · requiere seguimiento",
        urgency: 2,
        module: "Reproductor",
        destination: "Reproductor",
      },
    )
  }

  inventoryAttention.forEach((item) => {
    alerts.push({
      id: `inventario-${farm.id}-${item.id}`,
      title: item.title,
      detail: `${item.product} · ${item.detail}`,
      urgency: item.critical ? 1 : 2,
      module: "Inventario",
      destination: "Inventario",
    })
  })

  lots
    .filter((lot) => lot.farmId === farm.id && lot.status === "Activo")
    .map((lot) => ({ lot, figures: calculateLotFigures(lot) }))
    .filter(({ lot, figures }) => figures.mortality > lot.mortalityGoal)
    .forEach(({ lot, figures }) => {
      alerts.push({
        id: `sanidad-${lot.id}`,
        title: "Mortalidad sobre la meta",
        detail: `${lot.code} · ${formatDecimal(figures.mortality)} % frente a meta de ${formatDecimal(lot.mortalityGoal)} %`,
        urgency: 1,
        module: "Sanidad del lote",
        destination: lot.cycle,
      })
    })

  Array.from(
    { length: porciTableAlertCountByFarm[farm.id] ?? 0 },
    (_, index) => {
      alerts.push({
        id: `porcitable-${farm.id}-${index + 1}`,
        title: "Registro pendiente",
        detail: `PorciTabla · ${index + 1} registro requiere revisión`,
        urgency: 3,
        module: "PorciTabla",
        destination: "PorciTabla",
      })
    },
  )

  expiredIcaItems.forEach((itemId) => {
    alerts.push({
      id: `ica-${farm.id}-${itemId}`,
      title: `Documento vencido · numeral ${itemId}`,
      detail: "Actualiza la evidencia de vigencia de productos.",
      urgency: 1,
      module: "Carpeta ICA",
      destination: "Reportes",
    })
  })

  return alerts.sort((a, b) => a.urgency - b.urgency)
}

export default function App() {
  const [farms, setFarms] = useState(initialFarms)
  const [farmQuery, setFarmQuery] = useState("")
  const [favoriteFarmIds, setFavoriteFarmIds] = useState<number[]>(() => {
    try {
      const stored = window.localStorage.getItem("porcitrack-favorite-farms")
      const parsed: unknown = stored ? JSON.parse(stored) : []
      return Array.isArray(parsed)
        ? parsed.filter((id): id is number => typeof id === "number")
        : []
    } catch {
      return []
    }
  })
  const [lots, setLots] = useState(initialLots)
  const [movementHistory, setMovementHistory] = useState(initialMovements)
  const [porciTables, setPorciTables] = useState(initialPorciTables)
  const [modal, setModal] = useState<"add" | "edit" | null>(null)
  const [lotModal, setLotModal] = useState(false)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [editing, setEditing] = useState<Farm | null>(null)
  const [deleting, setDeleting] = useState<Farm | null>(null)
  const [toast, setToast] = useState("")
  const [breedingAlertCountByFarm, setBreedingAlertCountByFarm] =
    useState<Record<number, number>>({
      1: initialBreedingAlerts.length,
      3: initialBreedingAlerts.length,
    })
  const [inventoryAttentionByFarm, setInventoryAttentionByFarm] =
    useState<Record<number, InventoryAttention[]>>({
      1: initialInventoryAttention,
      2: [],
      3: [
        {
          ...initialInventoryAttention[1],
          id: 31,
          product: "Oxitocina San José",
          detail: "1 ítem disponible · mínimo 3",
        },
      ],
    })
  const [page, setPage] =
    useState<"home" | "farmSummary" | "cycle" | "lot" | "breeding" | "reproducer" | "inventory" | "porciTable" | "dashboards" | "reports" | "calendar" | "history" | "settings">(
      "home",
    )
  const [selectedFarm, setSelectedFarm] = useState<Farm>(initialFarms[0])
  const [dashboardScope, setDashboardScope] = useState(initialFarms[0].name)
  const [activeCycle, setActiveCycle] = useState<ProductionCycle>("Precebo")
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => window.matchMedia(compactSidebarQuery).matches,
  )
  const [settingsSection, setSettingsSection] =
    useState<SettingsSection>("Granjas y ciclos")
  const [users, setUsers] = useState<UserAccess[]>([
    {
      id: 1,
      name: "Andrés Mejía",
      email: "andres.mejia@granja.co",
      role: "Administrador",
      farms: initialFarms.map((farm) => farm.name),
      status: "Activo",
    },
  ])
  const [settingsDirty, setSettingsDirty] = useState(false)
  const [pendingNavigation, setPendingNavigation] =
    useState<(() => void) | null>(null)
  const skipSettingsGuard = useRef(false)

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(""), 3000)
    return () => window.clearTimeout(timer)
  }, [toast])
  useEffect(() => {
    const query = window.matchMedia(compactSidebarQuery)
    const syncSidebar = () => setSidebarCollapsed(query.matches)
    query.addEventListener("change", syncSidebar)
    return () => query.removeEventListener("change", syncSidebar)
  }, [])
  useEffect(() => {
    window.localStorage.setItem(
      "porcitrack-favorite-farms",
      JSON.stringify(favoriteFarmIds),
    )
  }, [favoriteFarmIds])

  const totalAnimals = useMemo(
    () =>
      farms
        .reduce((sum, farm) => sum + farm.animals, 0)
        .toLocaleString("es-CO"),
    [farms],
  )
  const alertsByFarm = useMemo(
    () =>
      Object.fromEntries(
        farms.map((farm) => [
          farm.id,
          getFarmAlerts(
            farm,
            lots,
            inventoryAttentionByFarm[farm.id] ?? [],
            breedingAlertCountByFarm[farm.id] ?? 0,
          ),
        ]),
      ) as Record<number, HomeFarmAlert[]>,
    [breedingAlertCountByFarm, farms, inventoryAttentionByFarm, lots],
  )
  const totalAlerts = farms.reduce(
    (sum, farm) => sum + (alertsByFarm[farm.id]?.length ?? 0),
    0,
  )
  const totalLots = farms.reduce((sum, farm) => sum + farm.lots, 0)
  const visibleFarms = useMemo(() => {
    const normalizedQuery = farmQuery
      .trim()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLocaleLowerCase("es")

    return farms
      .filter((farm) =>
        farm.name
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toLocaleLowerCase("es")
          .includes(normalizedQuery),
      )
      .sort(
        (a, b) =>
          Number(favoriteFarmIds.includes(b.id)) -
          Number(favoriteFarmIds.includes(a.id)),
      )
  }, [farmQuery, farms, favoriteFarmIds])
  const consolidatedMortality = averageReportValue(
    Object.values(reportDataByFarm).map((data) => data.mortalityRate),
  )
  const selectedFarmAlerts = alertsByFarm[selectedFarm.id] ?? []
  const alertCountByDestination =
    selectedFarmAlerts.reduce<Record<string, number>>((counts, alert) => {
      counts[alert.destination] = (counts[alert.destination] ?? 0) + 1
      return counts
    }, {})
  const alertCounts: Record<string, number> = {
    "Plantel reproductivo":
      alertCountByDestination["Plantel reproductivo"] ?? 0,
    Reproductor: alertCountByDestination.Reproductor ?? 0,
    Precebo: alertCountByDestination.Precebo ?? 0,
    Levante: alertCountByDestination.Levante ?? 0,
    Inventario: alertCountByDestination.Inventario ?? 0,
    PorciTabla: alertCountByDestination.PorciTabla ?? 0,
    Tableros: 0,
    Reportes: alertCountByDestination.Reportes ?? 0,
    Calendario: 0,
  }
  const saveFarm = (draft: FarmDraft) => {
    if (editing) {
      setFarms(
        farms.map((farm) =>
          farm.id === editing.id ? { ...farm, ...draft } : farm,
        ),
      )
      setToast("Cambios guardados")
    } else {
      setFarms([
        ...farms,
        {
          id: Date.now(),
          ...draft,
          alerts: 0,
          urgent: "Todo está al día",
          lots: 0,
          animals: 0,
          mortality: "0,0 %",
          goal: "≤ 2,0 %",
        },
      ])
      setToast("Granja creada")
    }
    setModal(null)
    setEditing(null)
  }
  const openEdit = (farm: Farm) => {
    setEditing(farm)
    setModal("edit")
  }
  const openCycle = (farm: Farm, cycle: Cycle) => {
    setSelectedFarm(farm)
    if (cycle === "Reproductor") {
      setPage("reproducer")
      setSelectedLot(null)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (cycle === "Plantel reproductivo") {
      setPage("breeding")
      setSelectedLot(null)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (cycle === "Precebo" || cycle === "Levante") {
      setActiveCycle(cycle)
      setPage("cycle")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  // Leaving Configuración with unsaved changes asks for confirmation first.
  const guardSettings = (retry: () => void) => {
    if (page === "settings" && settingsDirty && !skipSettingsGuard.current) {
      setPendingNavigation(() => retry)
      return true
    }
    skipSettingsGuard.current = false
    return false
  }
  const navigate = (label: string) => {
    if (page === "settings" && label === "Configuración") return
    if (guardSettings(() => navigate(label))) return
    if (label === "Inicio") {
      setPage("home")
      setSelectedLot(null)
    } else if (label === "Resumen") {
      setPage("farmSummary")
      setSelectedLot(null)
    } else if (label === "Plantel reproductivo") {
      setPage("breeding")
      setSelectedLot(null)
    } else if (label === "Reproductor") {
      setPage("reproducer")
      setSelectedLot(null)
    } else if (label === "Inventario") {
      setPage("inventory")
      setSelectedLot(null)
    } else if (label === "PorciTabla") {
      setPage("porciTable")
      setSelectedLot(null)
    } else if (label === "Tableros") {
      setDashboardScope(selectedFarm.name)
      setPage("dashboards")
      setSelectedLot(null)
    } else if (label === "Reportes") {
      setPage("reports")
      setSelectedLot(null)
    } else if (label === "Calendario") {
      setPage("calendar")
      setSelectedLot(null)
    } else if (label === "Historial") {
      setPage("history")
      setSelectedLot(null)
    } else if (label === "Configuración" || label === "Ajustes") {
      setSettingsSection("Granjas y ciclos")
      setPage("settings")
      setSelectedLot(null)
    } else if (label === "Precebo" || label === "Levante") {
      setActiveCycle(label)
      setPage("cycle")
      setSelectedLot(null)
    }
    setMobileOpen(false)
    window.scrollTo({ top: 0 })
  }
  const openTool = (farm: Farm, tool: string) => {
    setSelectedFarm(farm)
    if (tool === "Tableros") {
      setDashboardScope(farm.name)
      setPage("dashboards")
      setSelectedLot(null)
      return
    }
    if (tool === "Reportes") {
      setPage("reports")
      setSelectedLot(null)
      return
    }
    navigate(tool)
  }
  const changeFarm = (farm: Farm) => {
    if (guardSettings(() => changeFarm(farm))) return
    setSelectedFarm(farm)
    setSelectedLot(null)
    setPage("farmSummary")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const saveLot = (draft: LotDraft) => {
    const females = parseColombianNumber(draft.females)
    const males = parseColombianNumber(draft.males)
    const initialAnimals = females + males
    const totalWeight = parseColombianNumber(draft.totalWeight)
    setLots([
      {
        id: Date.now(),
        farmId: selectedFarm.id,
        cycle: activeCycle,
        code: draft.code.trim(),
        status: "Activo",
        day: 1,
        females,
        males,
        initialAnimals,
        averageWeight: initialAnimals ? totalWeight / initialAnimals : 0,
        mortalityGoal: activeCycle === "Precebo" ? 2.5 : 2,
        gpd: 0,
        mortalityRecords: [],
        purchaseRecords: [],
        saleRecords: [],
        entryDate: draft.entryDate,
        initialTotalWeight: totalWeight,
        targetWeight: parseColombianNumber(draft.targetWeight),
        feedBrand: draft.feedBrand.trim(),
        origin: draft.origin.trim(),
        notes: draft.notes.trim(),
        responsible: draft.responsible.trim(),
      },
      ...lots,
    ])
    setLotModal(false)
    setToast("Lote creado")
  }
  const updateLot = (updated: Lot) => {
    setLots((current) =>
      current.map((lot) => (lot.id === updated.id ? updated : lot)),
    )
    setSelectedLot((current) =>
      current?.id === updated.id ? updated : current,
    )
  }
  const migrateLotToLevante = (source: Lot, draft: MigrationDraft) => {
    const displayDate = formatDate(new Date(`${draft.date}T12:00:00`))
    const animals = draft.females + draft.males
    const existingDestination =
      draft.destination === "existing"
        ? lots.find((lot) => lot.id === draft.destinationLotId)
        : undefined
    const destinationCode =
      existingDestination?.code ?? draft.newLotCode?.trim() ?? ""
    const farmName =
      farms.find((farm) => farm.id === source.farmId)?.name ?? selectedFarm.name
    const sourceFigures = calculateLotFigures(
      lots.find((lot) => lot.id === source.id) ?? source,
    )
    if (
      animals <= 0 ||
      animals > sourceFigures.currentAnimals ||
      draft.females > sourceFigures.currentFemales ||
      draft.males > sourceFigures.currentMales
    ) {
      setToast("No hay suficientes animales disponibles")
      return
    }
    setLots((current) => {
      const currentSource =
        current.find((lot) => lot.id === source.id) ?? source
      const figures = calculateLotFigures(currentSource)
      if (
        currentSource.cycle !== "Precebo" ||
        currentSource.status !== "Activo" ||
        figures.currentAnimals === 0 ||
        animals <= 0 ||
        animals > figures.currentAnimals ||
        draft.females > figures.currentFemales ||
        draft.males > figures.currentMales
      ) {
        return current
      }
      const transferId = Date.now()
      const sourceTransfer: LotTransfer = {
        id: transferId,
        date: displayDate,
        direction: "Salida",
        kind: "Migración",
        otherLot: destinationCode,
        animals,
        females: draft.females,
        males: draft.males,
        averageWeight: draft.averageWeight,
        totalWeight: draft.totalWeight,
        responsible: CONNECTED_USER,
        reason: draft.notes || "Migración a Levante",
        notes: draft.notes,
      }
      const destinationTransfer: LotTransfer = {
        ...sourceTransfer,
        id: transferId + 1,
        direction: "Entrada",
        otherLot: currentSource.code,
      }
      const remainingAnimals = figures.currentAnimals - animals
      const updatedSource: Lot = {
        ...currentSource,
        status: remainingAnimals === 0 ? "Finalizado" : "Activo",
        closedDate: remainingAnimals === 0 ? draft.date : undefined,
        transferRecords: [
          sourceTransfer,
          ...(currentSource.transferRecords ?? []),
        ],
      }
      const currentDestination =
        draft.destination === "existing"
          ? current.find((lot) => lot.id === draft.destinationLotId)
          : undefined
      if (currentDestination) {
        const destinationFigures = calculateLotFigures(currentDestination)
        const combinedAnimals = destinationFigures.currentAnimals + animals
        const combinedWeight =
          destinationFigures.currentAnimals * currentDestination.averageWeight +
          draft.totalWeight
        const updatedDestination: Lot = {
          ...currentDestination,
          females: currentDestination.females + draft.females,
          males: currentDestination.males + draft.males,
          initialAnimals: currentDestination.initialAnimals + animals,
          averageWeight:
            combinedAnimals > 0 ? combinedWeight / combinedAnimals : 0,
          initialTotalWeight:
            (currentDestination.initialTotalWeight ??
              currentDestination.initialAnimals *
                currentDestination.averageWeight) + draft.totalWeight,
          transferRecords: [
            destinationTransfer,
            ...(currentDestination.transferRecords ?? []),
          ],
        }
        return current.map((lot) =>
          lot.id === currentSource.id
            ? updatedSource
            : lot.id === currentDestination.id
              ? updatedDestination
              : lot,
        )
      }
      const newDestination: Lot = {
        id: transferId + 2,
        farmId: currentSource.farmId,
        cycle: "Levante",
        code: destinationCode,
        status: "Activo",
        day: 1,
        females: draft.females,
        males: draft.males,
        initialAnimals: animals,
        averageWeight: draft.averageWeight,
        mortalityGoal: 2,
        gpd: 0,
        mortalityRecords: [],
        purchaseRecords: [],
        saleRecords: [],
        consumptionRecords: [],
        transferRecords: [destinationTransfer],
        entryDate: draft.date,
        initialTotalWeight: draft.totalWeight,
        targetWeight: draft.targetWeight,
        feedBrand: currentSource.feedBrand,
        origin: `Migrado desde ${currentSource.code}`,
        notes: draft.notes,
        responsible: CONNECTED_USER,
      }
      return [
        newDestination,
        ...current.map((lot) =>
          lot.id === currentSource.id ? updatedSource : lot,
        ),
      ]
    })
    setMovementHistory((current) => [
      {
        id: Date.now(),
        date: draft.date,
        user: CONNECTED_USER,
        module: "Movimientos",
        action: "Migración",
        tone: "out",
        record: `${source.code} → ${destinationCode}`,
        responsible: `Responsable: ${CONNECTED_USER}`,
        quantity: countLabel(animals, "animal", "animales"),
        lot: `${source.code} / ${destinationCode}`,
        farm: farmName,
      },
      ...current,
    ])
    setToast(
      `${countLabel(animals, "animal migrado", "animales migrados")} a ${destinationCode}`,
    )
  }
  const registerLotTransfer = (source: Lot, draft: LotTransferDraft) => {
    const currentSource = lots.find((lot) => lot.id === source.id)
    const destination = lots.find(
      (lot) =>
        lot.id === draft.destinationLotId &&
        lot.id !== source.id &&
        lot.farmId === source.farmId &&
        lot.cycle === source.cycle &&
        lot.status === "Activo",
    )
    if (!currentSource || !destination || currentSource.status !== "Activo") {
      setToast("El lote destino ya no está disponible")
      return
    }
    const sourceFigures = calculateLotFigures(currentSource)
    const destinationFigures = calculateLotFigures(destination)
    const animals = draft.females + draft.males
    if (
      animals <= 0 ||
      animals > sourceFigures.currentAnimals ||
      draft.females > sourceFigures.currentFemales ||
      draft.males > sourceFigures.currentMales
    ) {
      setToast("No hay suficientes animales disponibles")
      return
    }

    const transferId = Date.now()
    const displayDate = formatDate(new Date(`${draft.date}T12:00:00`))
    const averageWeight = currentSource.averageWeight
    const totalWeight = animals * averageWeight
    const sharedTransfer = {
      date: displayDate,
      kind: "Traslado" as const,
      animals,
      females: draft.females,
      males: draft.males,
      averageWeight,
      totalWeight,
      responsible: CONNECTED_USER,
      reason: draft.reason,
    }
    const sourceTransfer: LotTransfer = {
      ...sharedTransfer,
      id: transferId,
      direction: "Salida",
      otherLot: destination.code,
    }
    const destinationTransfer: LotTransfer = {
      ...sharedTransfer,
      id: transferId + 1,
      direction: "Entrada",
      otherLot: currentSource.code,
    }
    const updatedSource: Lot = {
      ...currentSource,
      transferRecords: [
        sourceTransfer,
        ...(currentSource.transferRecords ?? []),
      ],
    }
    const combinedAnimals = destinationFigures.currentAnimals + animals
    const combinedWeight =
      destinationFigures.currentAnimals * destination.averageWeight +
      totalWeight
    const updatedDestination: Lot = {
      ...destination,
      females: destination.females + draft.females,
      males: destination.males + draft.males,
      initialAnimals: destination.initialAnimals + animals,
      averageWeight: combinedAnimals > 0 ? combinedWeight / combinedAnimals : 0,
      initialTotalWeight:
        (destination.initialTotalWeight ??
          destination.initialAnimals * destination.averageWeight) + totalWeight,
      transferRecords: [
        destinationTransfer,
        ...(destination.transferRecords ?? []),
      ],
    }
    setLots((current) =>
      current.map((lot) =>
        lot.id === updatedSource.id
          ? updatedSource
          : lot.id === updatedDestination.id
            ? updatedDestination
            : lot,
      ),
    )
    setSelectedLot(updatedSource)
    const farmName =
      farms.find((farm) => farm.id === source.farmId)?.name ?? selectedFarm.name
    setMovementHistory((current) => [
      {
        id: transferId,
        date: draft.date,
        user: CONNECTED_USER,
        module: "Movimientos",
        action: "Traslado",
        tone: "out",
        record: `${currentSource.code} → ${destination.code} · ${draft.reason}`,
        responsible: `Responsable: ${CONNECTED_USER}`,
        quantity: `${animals} animales · ${draft.females} H / ${draft.males} M`,
        lot: `${currentSource.code} / ${destination.code}`,
        farm: farmName,
      },
      ...current,
    ])
    setToast(
      `${countLabel(animals, "animal trasladado", "animales trasladados")} a ${destination.code}`,
    )
  }
  const confirmDelete = () => {
    if (!deleting) return
    setFarms(farms.filter((farm) => farm.id !== deleting.id))
    setDeleting(null)
    setModal(null)
    setEditing(null)
    setToast("Granja eliminada")
  }
  const updateInventoryAttention = (items: InventoryAttention[]) => {
    setInventoryAttentionByFarm((current) => ({
      ...current,
      [selectedFarm.id]: items,
    }))
  }
  const activeNavigation =
    page === "home"
      ? "Inicio"
      : page === "farmSummary"
        ? "Resumen"
        : page === "breeding"
          ? "Plantel reproductivo"
          : page === "reproducer"
            ? "Reproductor"
            : page === "inventory"
              ? "Inventario"
              : page === "porciTable"
                ? "PorciTabla"
                : page === "dashboards"
                  ? "Tableros"
                  : page === "reports"
                    ? "Reportes"
                    : page === "calendar"
                      ? "Calendario"
                      : page === "history"
                        ? "Historial"
                        : page === "settings"
                          ? "Configuración"
                          : activeCycle
  const goBack = () => {
    if (page === "lot") {
      setSelectedLot(null)
      setPage("cycle")
    } else if (
      page === "farmSummary" ||
      page === "history" ||
      page === "settings"
    ) {
      navigate("Inicio")
    } else {
      navigate("Resumen")
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  // Historial and Configuración are account-wide, so they keep the general sidebar.
  const farmContext =
    page !== "home" && page !== "history" && page !== "settings"
  const lotsList = (
    <LotsList
      cycle={activeCycle}
      lots={lots.filter((lot) => lot.farmId === selectedFarm.id)}
      onCreate={() => setLotModal(true)}
      onUpdate={updateLot}
      onDelete={(deleted) =>
        setLots(lots.filter((lot) => lot.id !== deleted.id))
      }
      onNotice={setToast}
      onMigrate={migrateLotToLevante}
      onOpenLot={(lot) => {
        setSelectedLot(lot)
        setActiveCycle(lot.cycle)
        setPage("lot")
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />
  )

  return (
    <div className={`app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        farms={farms}
        selectedFarm={selectedFarm}
        farmContext={farmContext}
        accountOpen={accountOpen}
        setAccountOpen={setAccountOpen}
        active={activeNavigation}
        onNavigate={navigate}
        onSelectFarm={changeFarm}
        onLogout={() => setToast("Sesión cerrada")}
        alertCounts={alertCounts}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        onInvite={() => setInviteOpen(true)}
      />
      <MobileNavigation
        farms={farms}
        selectedFarm={selectedFarm}
        farmContext={farmContext}
        open={mobileOpen}
        setOpen={setMobileOpen}
        active={activeNavigation}
        onNavigate={navigate}
        onSelectFarm={changeFarm}
        alertCounts={alertCounts}
        onInvite={() => setInviteOpen(true)}
        onLogout={() => {
          setMobileOpen(false)
          setToast("Sesión cerrada")
        }}
      />
      <main>
        {page !== "home" && (
          <div className="global-back-wrap">
            <button className="global-back-button" onClick={goBack}>
              <Icon name="arrow" size={17} />
              Volver
            </button>
          </div>
        )}
        {(page === "home" || page === "cycle") && (
          <Header
            page={page}
            cycle={activeCycle}
            farmName={selectedFarm.name}
            farmQuery={farmQuery}
            onAdd={() => {
              setEditing(null)
              setModal("add")
            }}
            onConsolidated={() => {
              setDashboardScope(consolidatedReportScope)
              setPage("dashboards")
              setSelectedLot(null)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            onCreateLot={() => setLotModal(true)}
            onFarmQueryChange={setFarmQuery}
            onVoice={() => setVoiceOpen(true)}
          />
        )}
        {page === "home" ? (
          <>
            {farms.length > 0 && (
              <section className="home-summary">
                <div className="home-summary-heading">
                  <strong>Resumen general</strong>{" "}
                  <span>· {countLabel(farms.length, "granja", "granjas")}</span>
                </div>
                <div className="home-summary-metrics">
                  <div className={totalAlerts ? "summary-alert" : ""}>
                    <span>Alertas pendientes</span>
                    <strong>{totalAlerts}</strong>
                  </div>
                  <div>
                    <span>Lotes activos</span>
                    <strong>{totalLots}</strong>
                    <small>En producción</small>
                  </div>
                  <div>
                    <span>Animales totales</span>
                    <strong>{totalAnimals}</strong>
                    <small>Inventario actual</small>
                  </div>
                  <div>
                    <span>Mortalidad del mes</span>
                    <strong>{formatDecimal(consolidatedMortality)} %</strong>
                    <small>Meta ≤ 2,0 %</small>
                  </div>
                </div>
              </section>
            )}
            {farms.length && visibleFarms.length ? (
              <div className="farm-grid">
                {visibleFarms.map((farm) => (
                  <FarmCard
                    key={farm.id}
                    farm={farm}
                    alerts={alertsByFarm[farm.id] ?? []}
                    favorite={favoriteFarmIds.includes(farm.id)}
                    onEdit={() => openEdit(farm)}
                    onFavorite={() =>
                      setFavoriteFarmIds((current) =>
                        current.includes(farm.id)
                          ? current.filter((id) => id !== farm.id)
                          : [...current, farm.id],
                      )
                    }
                    onSummary={() => changeFarm(farm)}
                    onCycle={(cycle) => openCycle(farm, cycle)}
                    onTool={(tool) => openTool(farm, tool)}
                    onResolveAlert={(module) => {
                      setSelectedFarm(farm)
                      if (
                        module === "Plantel reproductivo" ||
                        module === "Reproductor" ||
                        module === "Precebo" ||
                        module === "Levante"
                      ) {
                        openCycle(farm, module)
                      } else {
                        openTool(farm, module)
                      }
                    }}
                  />
                ))}
              </div>
            ) : farms.length ? (
              <div className="farm-search-empty" role="status">
                <span>
                  <Icon name="search" size={24} />
                </span>
                <h2>No encontramos granjas</h2>
                <p>Prueba con otro nombre o limpia la búsqueda.</p>
                <button
                  className="button secondary"
                  onClick={() => setFarmQuery("")}
                >
                  Limpiar búsqueda
                </button>
              </div>
            ) : (
              <EmptyState onAdd={() => setModal("add")} />
            )}
          </>
        ) : page === "farmSummary" ? (
          <FarmSummaryPage
            farm={selectedFarm}
            lots={lots}
            alerts={selectedFarmAlerts}
            onNavigate={navigate}
            onCycle={(cycle) => openCycle(selectedFarm, cycle)}
          />
        ) : page === "cycle" ? (
          lotsList
        ) : page === "breeding" ? (
          <BreedingPage
            key={selectedFarm.id}
            farmName={selectedFarm.name}
            onNotice={setToast}
            onAlertCountChange={(count) =>
              setBreedingAlertCountByFarm((current) =>
                current[selectedFarm.id] === count
                  ? current
                  : { ...current, [selectedFarm.id]: count },
              )
            }
          />
        ) : page === "reproducer" ? (
          <ReproducerPage
            key={selectedFarm.id}
            farmName={selectedFarm.name}
            alerts={selectedFarmAlerts.filter(
              (alert) => alert.module === "Reproductor",
            )}
            onNotice={setToast}
          />
        ) : page === "inventory" ? (
          <InventoryPage
            key={selectedFarm.id}
            farmName={selectedFarm.name}
            attention={inventoryAttentionByFarm[selectedFarm.id] ?? []}
            setAttention={updateInventoryAttention}
            onNotice={setToast}
          />
        ) : page === "porciTable" ? (
          <PorciTablePage
            farmName={selectedFarm.name}
            onNotice={setToast}
            tables={porciTables}
            setTables={setPorciTables}
          />
        ) : page === "dashboards" ? (
          <DashboardsPage
            initialScope={dashboardScope}
            onNotice={setToast}
            onReports={() => {
              setPage("reports")
              setSelectedLot(null)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        ) : page === "reports" ? (
          <ReportsPage
            farmName={selectedFarm.name}
            alerts={selectedFarmAlerts.filter(
              (alert) => alert.module === "Carpeta ICA",
            )}
            onNotice={setToast}
            porciTables={porciTables}
          />
        ) : page === "calendar" ? (
          <CalendarPage farm={selectedFarm} onNotice={setToast} />
        ) : page === "history" ? (
          <HistoryPage farms={farms} movements={movementHistory} />
        ) : page === "settings" ? (
          <SettingsPage
            key={settingsSection}
            farms={farms}
            selectedFarm={selectedFarm}
            initialSection={settingsSection}
            users={users}
            onInvite={() => setInviteOpen(true)}
            onDirtyChange={setSettingsDirty}
            onNotice={setToast}
          />
        ) : selectedLot ? (
          <LotDetail
            lot={selectedLot}
            farmName={selectedFarm.name}
            destinationLots={lots.filter(
              (lot) =>
                lot.id !== selectedLot.id &&
                lot.farmId === selectedLot.farmId &&
                lot.cycle === selectedLot.cycle &&
                lot.status === "Activo",
            )}
            onBack={() => setPage("cycle")}
            onUpdate={(updated) => {
              updateLot(updated)
            }}
            onTransfer={registerLotTransfer}
            onDelete={() => {
              setLots(lots.filter((lot) => lot.id !== selectedLot.id))
              setSelectedLot(null)
              setPage("cycle")
              setToast("Lote eliminado")
            }}
            onNotice={setToast}
            existingCodes={lots
              .filter((lot) => lot.farmId === selectedFarm.id)
              .map((lot) => lot.code)}
          />
        ) : (
          lotsList
        )}
      </main>
      {modal && (
        <FarmModal
          farm={modal === "edit" ? (editing ?? undefined) : undefined}
          onClose={() => {
            setModal(null)
            setEditing(null)
          }}
          onSave={saveFarm}
          onDelete={(farm) => {
            setModal(null)
            setEditing(null)
            setDeleting(farm)
          }}
        />
      )}
      {deleting && (
        <DeleteDialog
          farm={deleting}
          onClose={() => setDeleting(null)}
          onConfirm={confirmDelete}
        />
      )}
      {lotModal && (
        <CreateLotModal
          cycle={activeCycle}
          existingCodes={lots
            .filter((lot) => lot.farmId === selectedFarm.id)
            .map((lot) => lot.code)}
          onClose={() => setLotModal(false)}
          onSave={saveLot}
        />
      )}
      {voiceOpen && (
        <VoiceRegistrationModal
          onClose={() => setVoiceOpen(false)}
          onStart={() => {
            setVoiceOpen(false)
            setToast("Escuchando registro por voz")
          }}
        />
      )}
      {inviteOpen && (
        <InviteUserModal
          farms={farms}
          onClose={() => setInviteOpen(false)}
          onGoUsers={() => {
            setInviteOpen(false)
            setSettingsSection("Usuarios")
            setPage("settings")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onInvite={(user) => {
            setUsers((current) => [...current, user])
            setInviteOpen(false)
            setToast(`Invitación enviada a ${user.email}`)
          }}
        />
      )}
      {pendingNavigation && (
        <DiscardChangesDialog
          onDiscard={() => {
            const proceed = pendingNavigation
            setSettingsDirty(false)
            setPendingNavigation(null)
            skipSettingsGuard.current = true
            proceed()
          }}
          onKeepEditing={() => setPendingNavigation(null)}
        />
      )}
      {toast && (
        <div className="toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          {toast}
        </div>
      )}
    </div>
  )
}
