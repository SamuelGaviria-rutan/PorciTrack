import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react"

type IconName = "home" | "sow" | "boar" | "piglet" | "growth" | "box" | "table" | "chart" | "calendar" | "settings" | "mic" | "plus" | "edit" | "pin" | "alert" | "pig" | "trend" | "chevron" | "logout" | "menu" | "x" | "check" | "trash" | "arrow" | "dots" | "list" | "grid" | "weight" | "clock" | "info" | "syringe" | "bell" | "download" | "search" | "heart" | "baby" | "droplet" | "filter" | "sort"

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
        <path d="M6 9c2-3 9-3 12 0v7c-2 3-10 3-12 0Z" />
        <path d="m7 9-3-3v6m13-3 3-3v6M9 14h.01M15 14h.01M10 18h4" />
      </>
    ),
    growth: (
      <>
        <path d="M4 18V9m6 9V5m6 13v-7m4 7V3" />
        <path d="M2 21h20" />
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

const initialFarms: Farm[] = [
  {
    id: 1,
    name: "Granja La Esperanza",
    municipality: "Santa Rosa de Osos",
    cycles: ["Plantel reproductivo", "Precebo", "Levante"],
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
  currentAnimals: number
  averageWeight: number
  mortality: number
  mortalityGoal: number
  gpd: number
}

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
    currentAnimals: 118,
    averageWeight: 18.4,
    mortality: 1.7,
    mortalityGoal: 2.5,
    gpd: 468,
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
    currentAnimals: 109,
    averageWeight: 27.8,
    mortality: 2.7,
    mortalityGoal: 2.5,
    gpd: 492,
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
    currentAnimals: 117,
    averageWeight: 32.6,
    mortality: 2.5,
    mortalityGoal: 2.5,
    gpd: 505,
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
    currentAnimals: 99,
    averageWeight: 54.8,
    mortality: 1,
    mortalityGoal: 2,
    gpd: 714,
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
    currentAnimals: 116,
    averageWeight: 78.3,
    mortality: 1.7,
    mortalityGoal: 2,
    gpd: 758,
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
    currentAnimals: 106,
    averageWeight: 112.4,
    mortality: 1.9,
    mortalityGoal: 2,
    gpd: 801,
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
    currentAnimals: 85,
    averageWeight: 16.2,
    mortality: 1.2,
    mortalityGoal: 2.5,
    gpd: 452,
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
    currentAnimals: 97,
    averageWeight: 69.5,
    mortality: 3,
    mortalityGoal: 2,
    gpd: 731,
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
  { label: "Ajustes", icon: "settings" },
]

const toolItems: NavigationItem[] = [
  { label: "Inventario", icon: "box" },
  { label: "PorciTabla", icon: "table" },
  { label: "Tableros", icon: "chart" },
  { label: "Calendario", icon: "calendar" },
]

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand">
      <div className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none">
          <path
            d="M8 19c0-7 5-12 12-12 5 0 9 3 11 6-8-1-14 3-18 11-3-1-5-2-5-5Z"
            fill="currentColor"
          />
          <path
            d="M13 25c4-8 10-12 18-12-1 8-6 15-14 16"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M17 29c-2-6-5-9-9-10"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {!compact && (
        <div>
          <strong>PorciTrack</strong>
          <span>Gestión inteligente</span>
        </div>
      )}
    </div>
  )
}

function Sidebar({
  farms,
  selectedFarm,
  isHome,
  accountOpen,
  setAccountOpen,
  active,
  onNavigate,
  onSelectFarm,
  onLogout,
  alertCounts,
}: {
  farms: Farm[]
  selectedFarm: Farm
  isHome: boolean
  accountOpen: boolean
  setAccountOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
  onSelectFarm: (farm: Farm) => void
  onLogout: () => void
  alertCounts: Record<string, number>
}) {
  const [farmMenuOpen, setFarmMenuOpen] = useState(false)
  const cycles = cycleOrder
    .filter((cycle) => selectedFarm.cycles.includes(cycle))
    .map(
      (cycle) =>
        navigation.find((item) => item.label === cycle) as NavigationItem,
    )
  return (
    <aside className="sidebar">
      <Logo />
      <button
        className={`all-farms-link ${isHome ? "active" : ""}`}
        onClick={() => onNavigate("Inicio")}
      >
        <Icon name="home" size={18} />
        Todas las granjas
      </button>
      <div className="farm-selector-wrap">
        <span className="sidebar-group-label">Granja</span>
        <button
          className={`farm-selector ${isHome ? "choose" : ""}`}
          onClick={() => farms.length > 1 && setFarmMenuOpen(!farmMenuOpen)}
          aria-expanded={farmMenuOpen}
        >
          <span className="farm-selector-icon">
            <Icon name="pin" size={17} />
          </span>
          <span>
            <strong>{isHome ? "Elige una granja" : selectedFarm.name}</strong>
            {!isHome && <small>{selectedFarm.municipality}</small>}
          </span>
          {farms.length > 1 && <Icon name="chevron" size={16} />}
        </button>
        {farmMenuOpen && (
          <div className="farm-switcher-menu">
            {farms.map((farm) => (
              <button
                className={farm.id === selectedFarm.id ? "selected" : ""}
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
                {farm.id === selectedFarm.id && <Icon name="check" size={16} />}
              </button>
            ))}
          </div>
        )}
      </div>
      {!isHome && (
        <nav className="context-navigation" aria-label="Navegación principal">
          <div className="sidebar-nav-group">
            <span className="sidebar-group-label">Granja</span>
            <button
              className={`nav-item ${active === "Resumen" ? "active" : ""}`}
              onClick={() => onNavigate("Resumen")}
            >
              <Icon name="chart" size={19} />
              <span>Resumen</span>
            </button>
          </div>
          <div className="sidebar-nav-group">
            <span className="sidebar-group-label">Ciclos</span>
            {cycles.map((item) => (
              <button
                className={`nav-item ${item.label === active ? "active" : ""}`}
                key={item.label}
                onClick={() => onNavigate(item.label)}
              >
                <Icon name={item.icon} size={19} />
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
                className={`nav-item ${item.label === active ? "active" : ""}`}
                key={item.label}
                onClick={() => onNavigate(item.label)}
              >
                <Icon name={item.icon} size={19} />
                <span>{item.label}</span>
                {(alertCounts[item.label] ?? 0) > 0 && (
                  <b className="nav-alert-count">{alertCounts[item.label]}</b>
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
      <div className="sidebar-footer">
        <button
          className={`nav-item settings-link ${
            active === "Ajustes" ? "active" : ""
          }`}
          onClick={() => onNavigate("Ajustes")}
        >
          <Icon name="settings" size={19} />
          <span>Ajustes</span>
        </button>
        <div className="account-wrap">
          {accountOpen && (
            <div className="account-menu">
              <div className="account-menu-heading">Cuenta</div>
              <button onClick={onLogout}>
                <Icon name="logout" size={18} /> Cerrar sesión
              </button>
            </div>
          )}
          <button
            className="account"
            onClick={() => setAccountOpen(!accountOpen)}
            aria-expanded={accountOpen}
          >
            <span className="avatar">AM</span>
            <span className="account-copy">
              <strong>Andrés Mejía</strong>
              <small>Operario de granja</small>
            </span>
            <Icon name="chevron" size={17} />
          </button>
        </div>
      </div>
    </aside>
  )
}

function MobileNavigation({
  farms,
  selectedFarm,
  isHome,
  open,
  setOpen,
  active,
  onNavigate,
  onSelectFarm,
  onLogout,
  alertCounts,
}: {
  farms: Farm[]
  selectedFarm: Farm
  isHome: boolean
  open: boolean
  setOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
  onSelectFarm: (farm: Farm) => void
  onLogout: () => void
  alertCounts: Record<string, number>
}) {
  const [farmMenuOpen, setFarmMenuOpen] = useState(false)
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
    isHome ? [navigation[0]] : [summaryItem, ...cycles, ...toolItems]
  ).slice(0, 4)
  return (
    <>
      <div className="mobile-top">
        <Logo />
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
            className="mobile-all-farms"
            onClick={() => {
              onNavigate("Inicio")
              setOpen(false)
            }}
          >
            <Icon name="home" size={18} />
            Todas las granjas
          </button>
          <div className="mobile-farm-block">
            <span className="sidebar-group-label">Granja</span>
            <button
              className={`farm-selector ${isHome ? "choose" : ""}`}
              onClick={() => farms.length > 1 && setFarmMenuOpen(!farmMenuOpen)}
              aria-expanded={farmMenuOpen}
            >
              <span className="farm-selector-icon">
                <Icon name="pin" size={17} />
              </span>
              <span>
                <strong>
                  {isHome ? "Elige una granja" : selectedFarm.name}
                </strong>
                {!isHome && <small>{selectedFarm.municipality}</small>}
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
                      setOpen(false)
                    }}
                  >
                    <span>
                      <strong>{farm.name}</strong>
                      <small>{farm.municipality}</small>
                    </span>
                    {farm.id === selectedFarm.id && (
                      <Icon name="check" size={16} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          {!isHome && (
            <nav aria-label="Menú móvil">
              <span className="sidebar-group-label">Granja</span>
              <button
                className={active === "Resumen" ? "active" : ""}
                onClick={() => {
                  onNavigate("Resumen")
                  setOpen(false)
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
                    setOpen(false)
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
                    setOpen(false)
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
          <div className="mobile-user">
            <span className="avatar">AM</span>
            <span>
              <strong>Andrés Mejía</strong>
              <small>Operario de granja</small>
            </span>
          </div>
          <button
            className={`mobile-settings ${
              active === "Ajustes" ? "active" : ""
            }`}
            onClick={() => onNavigate("Ajustes")}
          >
            <Icon name="settings" size={18} />
            Ajustes
          </button>
          <button className="mobile-logout" onClick={onLogout}>
            <Icon name="logout" size={18} />
            Cerrar sesión
          </button>
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
  onAdd: () => void
  onCreateLot: () => void
  onVoice: () => void
}

function Header({
  page,
  cycle,
  farmName,
  onAdd,
  onCreateLot,
  onVoice,
}: HeaderProps) {
  return (
    <header className="page-header">
      <div>
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
        <div className="header-actions">
          <button className="button secondary voice" onClick={onVoice}>
            <Icon name="mic" size={19} />
            Registro por voz
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

function StatusBadge({ alerts }: { alerts: number }) {
  return alerts > 0 ? (
    <span className="status warning">
      <Icon name="alert" size={14} />
      {alerts} {alerts === 1 ? "alerta" : "alertas"}
    </span>
  ) : (
    <span className="status positive">
      <Icon name="check" size={14} />
      Al día
    </span>
  )
}

function FarmCard({
  farm,
  onEdit,
  onSummary,
  onCycle,
  onTool,
}: {
  farm: Farm
  onEdit: () => void
  onSummary: () => void
  onCycle: (cycle: Cycle) => void
  onTool: (tool: string) => void
}) {
  return (
    <article className="farm-card">
      <div className="farm-heading">
        <div>
          <div className="farm-name-line">
            <h2>{farm.name}</h2>
            <button
              className="edit-button"
              onClick={onEdit}
              aria-label={`Editar ${farm.name}`}
              title="Editar granja"
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
        <StatusBadge alerts={farm.alerts} />
      </div>
      <div className="metrics">
        <div
          className={`metric alert-metric ${farm.alerts === 0 ? "good" : ""}`}
        >
          <span>Alertas pendientes</span>
          <strong>{farm.alerts}</strong>
          <small>{farm.urgent}</small>
        </div>
        <div className="metric">
          <span>Lotes activos</span>
          <strong>{farm.lots}</strong>
          <small>En producción</small>
        </div>
        <div className="metric">
          <span>Animales totales</span>
          <strong>{farm.animals.toLocaleString("es-CO")}</strong>
          <small>Inventario actual</small>
        </div>
        <div className="metric">
          <span>Mortalidad del mes</span>
          <strong>{farm.mortality}</strong>
          <small>Meta {farm.goal}</small>
        </div>
      </div>
      <div className="farm-section">
        <span className="section-label">Ciclos activos</span>
        <div className="cycle-list">
          {cycleOrder
            .filter((cycle) => farm.cycles.includes(cycle))
            .map((cycle) => (
              <button key={cycle} onClick={() => onCycle(cycle)}>
                {cycle}
                <Icon name="arrow" size={15} />
              </button>
            ))}
        </div>
      </div>
      <div className="farm-section tools-section">
        <span className="section-label">Herramientas</span>
        <div className="tool-list">
          {toolItems.map((item) => (
            <button key={item.label} onClick={() => onTool(item.label)}>
              <Icon name={item.icon} size={17} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

function Skeletons() {
  return (
    <div className="farm-grid">
      {[1, 2, 3].map((item) => (
        <div className="farm-card skeleton-card" key={item}>
          <div className="skeleton w-40" />
          <div className="skeleton w-28" />
          <div className="skeleton-metrics">
            {[1, 2, 3, 4].map((x) => (
              <div className="skeleton metric-skeleton" key={x} />
            ))}
          </div>
          <div className="skeleton w-full" />
          <div className="skeleton w-3-4" />
        </div>
      ))}
    </div>
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
  size?: "normal" | "small" | "wide"
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
          size === "small" ? "small" : size === "wide" ? "wide" : ""
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

const formatDecimal = (value: number, decimals = 1) =>
  value.toLocaleString("es-CO", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

const formatDate = (date: Date) =>
  date.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

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
  const selectedDate = value ? new Date(`${value}T12:00:00`) : null
  const [open, setOpen] = useState(false)
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
      {open && (
        <div className="date-picker-popover">
          <div className="date-picker-heading">
            <button
              type="button"
              className="icon-button"
              aria-label="Mes anterior"
              onClick={() => setVisibleMonth(new Date(year, month - 1, 1, 12))}
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
              onClick={() => setVisibleMonth(new Date(year, month + 1, 1, 12))}
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
              const disabled = Boolean((min && iso < min) || (max && iso > max))
              return (
                <button
                  type="button"
                  className={value === iso ? "selected" : ""}
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
        </div>
      )}
    </div>
  )
}

const getLotMetrics = (lot: Lot) => {
  const initialAnimals = Math.max(0, lot.initialAnimals)
  const currentAnimals = Math.max(
    0,
    Math.min(initialAnimals, lot.currentAnimals),
  )
  const day = Math.max(0, lot.day)
  const mortality =
    initialAnimals > 0
      ? ((initialAnimals - currentAnimals) / initialAnimals) * 100
      : 0
  const mortalityTone =
    mortality > lot.mortalityGoal
      ? "high"
      : mortality >= lot.mortalityGoal * 0.8
        ? "near"
        : "ok"
  return { initialAnimals, currentAnimals, day, mortality, mortalityTone }
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

function LotCard({
  lot,
  menuOpen,
  onMenu,
  onAction,
}: {
  lot: Lot
  menuOpen: boolean
  onMenu: () => void
  onAction: (action: "view" | "edit" | "finish" | "delete", lot: Lot) => void
}) {
  const metrics = getLotMetrics(lot)
  return (
    <article className="lot-card">
      <div className="lot-card-top">
        <div>
          <span className="lot-label">Código del lote</span>
          <h3>{lot.code}</h3>
        </div>
        <div className="lot-card-actions">
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
            {metrics.currentAnimals} / {metrics.initialAnimals}{" "}
            <em>animales</em>
          </strong>
          <small>actuales / iniciales</small>
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
    </article>
  )
}

function LotSkeletons() {
  return (
    <div className="lot-skeletons">
      {[1, 2, 3].map((item) => (
        <div className="lot-card lot-skeleton" key={item}>
          <div className="skeleton w-40" />
          <div className="skeleton w-28" />
          <div className="skeleton-metrics">
            {[1, 2, 3].map((metric) => (
              <div className="skeleton metric-skeleton" key={metric} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function LotsTable({ lots }: { lots: Lot[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Estado</th>
            <th>Día del ciclo</th>
            <th>Hembras</th>
            <th>Machos</th>
            <th>Animales actuales</th>
            <th>Peso promedio (kg)</th>
            <th>Ganancia promedio diaria</th>
            <th>Mortalidad</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => {
            const metrics = getLotMetrics(lot)
            return (
              <tr key={lot.id}>
                <td>
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
                <td>{metrics.day} días</td>
                <td>{lot.females} hembras</td>
                <td>{lot.males} machos</td>
                <td>
                  {metrics.currentAnimals} de {metrics.initialAnimals} animales
                </td>
                <td>{formatDecimal(lot.averageWeight)} kg</td>
                <td>{lot.gpd.toLocaleString("es-CO")} g/día</td>
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
  loading,
  onCreate,
  onUpdate,
  onDelete,
  onNotice,
  onOpenLot,
}: {
  cycle: ProductionCycle
  lots: Lot[]
  loading: boolean
  onCreate: () => void
  onUpdate: (lot: Lot) => void
  onDelete: (lot: Lot) => void
  onNotice: (text: string) => void
  onOpenLot: (lot: Lot) => void
}) {
  const [view, setView] = useState<"cards" | "table">("cards")
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [deletingLot, setDeletingLot] = useState<Lot | null>(null)
  const cycleLots = lots.filter((lot) => lot.cycle === cycle)
  const activeLots = cycleLots.filter((lot) => lot.status === "Activo")
  const finishedLots = cycleLots.filter((lot) => lot.status === "Finalizado")
  const action = (kind: "view" | "edit" | "finish" | "delete", lot: Lot) => {
    setMenuOpen(null)
    if (kind === "finish") {
      onUpdate({ ...lot, status: "Finalizado" })
      onNotice("Lote finalizado")
    } else if (kind === "delete") {
      setDeletingLot(lot)
    } else if (kind === "edit") {
      onNotice(`Edición de ${lot.code}`)
    } else {
      onOpenLot(lot)
    }
  }
  if (loading) return <LotSkeletons />
  if (!cycleLots.length) return <LotsEmpty cycle={cycle} onCreate={onCreate} />
  return (
    <>
      <div className="lots-content">
        <div className="list-toolbar">
          <p>
            <strong>{cycleLots.length}</strong> lotes registrados en {cycle}
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
          <LotsTable lots={cycleLots} />
        ) : (
          <>
            <section className="lot-section">
              <div className="lot-section-heading">
                <div>
                  <h2>Lotes activos</h2>
                  <p>En seguimiento dentro del ciclo</p>
                </div>
                <span>{activeLots.length}</span>
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
                  />
                ))}
              </div>
            </section>
            <section className="lot-section finished-section">
              <div className="lot-section-heading">
                <div>
                  <h2>Lotes finalizados</h2>
                  <p>Historial de lotes cerrados</p>
                </div>
                <span>{finishedLots.length}</span>
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
}

function CreateLotModal({
  cycle,
  onClose,
  onSave,
}: {
  cycle: ProductionCycle
  onClose: () => void
  onSave: (draft: LotDraft) => void
}) {
  const [draft, setDraft] = useState<LotDraft>({
    code: "",
    entryDate: "",
    females: "",
    males: "",
    totalWeight: "",
    targetWeight: "",
    feedBrand: "",
    origin: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const females = Number(draft.females) || 0
  const males = Number(draft.males) || 0
  const animals = females + males
  const weight = Number(draft.totalWeight.replace(",", ".")) || 0
  const average = animals > 0 && weight > 0 ? weight / animals : 0
  const unusual =
    average > 0 &&
    (cycle === "Precebo"
      ? average > 40 || average < 3
      : average > 160 || average < 20)
  const dirty = Object.values(draft).some(Boolean)
  const farmGoal = cycle === "Precebo" ? "29 kg" : null
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!draft.code.trim() || !draft.entryDate) return
    setConfirming(true)
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
        confirming ? "Confirma los datos del lote" : `Crear lote de ${cycle}`
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
                      submitted && !draft.code.trim() ? "has-error" : ""
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
                      aria-invalid={submitted && !draft.code.trim()}
                    />
                    {submitted && !draft.code.trim() && (
                      <small>
                        <Icon name="alert" size={14} />
                        Escribe el código del lote
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
                      label="Seleccionar fecha de ingreso"
                    />
                    {submitted && !draft.entryDate && (
                      <small>
                        <Icon name="alert" size={14} />
                        Selecciona la fecha de ingreso
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
                  <label className="field">
                    <span>Hembras iniciales</span>
                    <input
                      inputMode="numeric"
                      value={draft.females}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          females: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="Ej. 62"
                    />
                  </label>
                  <label className="field">
                    <span>Machos iniciales</span>
                    <input
                      inputMode="numeric"
                      value={draft.males}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          males: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="Ej. 58"
                    />
                  </label>
                </div>
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
                    <input
                      inputMode="decimal"
                      value={draft.totalWeight}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          totalWeight: e.target.value.replace(/[^\d,.]/g, ""),
                        })
                      }
                      placeholder="Ej. 780,5"
                    />
                  </label>
                  <label className="field suggested-field">
                    <span>Peso objetivo final (kg)</span>
                    <input
                      inputMode="decimal"
                      value={draft.targetWeight}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          targetWeight: e.target.value.replace(/[^\d,.]/g, ""),
                        })
                      }
                      placeholder="Déjalo vacío o escribe la meta"
                    />
                    <small>
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
            {confirming ? "Confirmar y crear" : "Crear lote"}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type LotTab = "Resumen" | "Mortalidad" | "Sanidad" | "Compras" | "Ventas" | "Liquidación" | "Identificación"
type TabAction = {
  label: string
  run: () => void
}
type MortalityRecord = {
  id: number
  date: string
  quantity: number
  sex: "Hembra" | "Macho"
  cause: string
  responsible: string
}

const lotTabs: LotTab[] = [
  "Resumen",
  "Mortalidad",
  "Sanidad",
  "Compras",
  "Ventas",
  "Liquidación",
  "Identificación",
]

const mortalityRecords: MortalityRecord[] = [
  {
    id: 1,
    date: "12/03/2026",
    quantity: 1,
    sex: "Macho",
    cause: "Aplastamiento",
    responsible: "Carlos Ríos",
  },
  {
    id: 2,
    date: "08/03/2026",
    quantity: 1,
    sex: "Hembra",
    cause: "Bajo consumo",
    responsible: "Andrés Mejía",
  },
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
  const metrics = getLotMetrics(lot)
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
            {metrics.currentAnimals} / {metrics.initialAnimals} animales · Día{" "}
            {metrics.day} de {lot.cycle} ·{" "}
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
          <div className="detail-menu-wrap">
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
                <button role="menuitem" onClick={onMenu}>
                  <Icon name="arrow" size={16} />
                  Ver
                </button>
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

function SummaryTab({ lot }: { lot: Lot }) {
  const metrics = getLotMetrics(lot)
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
            {metrics.currentAnimals} <small>/ {metrics.initialAnimals}</small>
          </strong>
          <p>actuales / iniciales</p>
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
    </div>
  )
}

function MortalityTab({
  lot,
  records,
}: {
  lot: Lot
  records: MortalityRecord[]
}) {
  const metrics = getLotMetrics(lot)
  const deaths = Math.max(0, metrics.initialAnimals - metrics.currentAnimals)
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
          <strong>12 mar</strong>
          <p>hace 2 días</p>
        </div>
      </div>
      <section className="records-card">
        <div className="records-heading">
          <div>
            <h2>Historial de mortalidad</h2>
            <p>{records.length} registros en este lote</p>
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
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.date}</td>
                  <td>
                    <strong>{record.quantity}</strong>
                  </td>
                  <td>{record.sex}</td>
                  <td>{record.cause}</td>
                  <td>{record.responsible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function MortalityModal({
  available,
  onClose,
  onSave,
}: {
  available: number
  onClose: () => void
  onSave: (record: MortalityRecord) => void
}) {
  const [form, setForm] = useState({
    date: "",
    quantity: "",
    sex: "",
    cause: "",
    responsible: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Object.values(form).some(Boolean)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const quantityTooHigh = Number(form.quantity) > available
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      !form.quantity ||
      quantityTooHigh ||
      !form.sex ||
      !form.cause ||
      !form.responsible
    )
      return
    onSave({
      id: Date.now(),
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      quantity: Number(form.quantity),
      sex: form.sex as "Hembra" | "Macho",
      cause: form.cause,
      responsible: form.responsible,
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
    <DialogShell title="Registrar mortalidad" onClose={attemptClose}>
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
              <input
                inputMode="numeric"
                value={form.quantity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    quantity: e.target.value.replace(/\D/g, ""),
                  })
                }
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
            Registrar mortalidad
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
  applied: boolean
}

function HealthTab({
  lot,
  treatments,
  setTreatments,
  readOnly,
}: {
  lot: Lot
  treatments: Treatment[]
  setTreatments: (items: Treatment[]) => void
  readOnly: boolean
}) {
  const [selected, setSelected] = useState<number[]>([])
  const metrics = getLotMetrics(lot)
  const apply = (ids: number[]) => {
    setTreatments(
      treatments.map((item) =>
        ids.includes(item.id) ? { ...item, applied: true } : item,
      ),
    )
    setSelected([])
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
          onClick={() => apply(selected)}
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
          {treatments.map((item) => (
            <article
              className={`treatment-row ${item.applied ? "applied" : ""}`}
              key={item.id}
            >
              <label className="treatment-check">
                <input
                  type="checkbox"
                  disabled={item.applied || readOnly}
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
                <b>{item.date.split(" ")[0]}</b>
                {item.date.split(" ")[1]}
              </span>
              <div className="treatment-copy">
                <div>
                  <h3>{item.name}</h3>
                  {item.overdue && !item.applied && (
                    <span className="status critical">Vencido</span>
                  )}
                  {item.applied && (
                    <span className="status positive">Aplicado</span>
                  )}
                </div>
                <p>
                  {item.method} · Para {metrics.currentAnimals} animales ·{" "}
                  {item.date}
                </p>
              </div>
              {!item.applied && !readOnly && (
                <div className="treatment-actions">
                  <button
                    className="text-button"
                    onClick={() =>
                      setTreatments(
                        treatments.filter(
                          (treatment) => treatment.id !== item.id,
                        ),
                      )
                    }
                  >
                    Omitir
                  </button>
                  <button
                    className="button secondary"
                    onClick={() => apply([item.id])}
                  >
                    Aplicar
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

function TreatmentModal({
  lot,
  onClose,
  onSave,
}: {
  lot: Lot
  onClose: () => void
  onSave: () => void
}) {
  const [form, setForm] = useState({
    treatment: "",
    date: "",
    product: "",
    method: "Intramuscular",
    dose: "",
    responsible: "",
  })
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Object.values(form).some(
    (value) => value && value !== "Intramuscular",
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
          onSave()
        }}
      >
        <div className="form-content treatment-form">
          <div className="treatment-lot-note">
            <Icon name="info" size={18} />
            La dosis se calculará para {lot.currentAnimals} animales.
          </div>
          <div className="form-grid">
            <label className="field">
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
            </label>
            <label className="field">
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
                onChange={(value) => setForm({ ...form, date: value })}
                label="Seleccionar fecha del tratamiento"
              />
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
              <input
                inputMode="decimal"
                value={form.dose}
                onChange={(event) =>
                  setForm({
                    ...form,
                    dose: event.target.value.replace(/[^\d,.]/g, ""),
                  })
                }
                placeholder="Ej. 2,0 ml"
              />
            </label>
            <label className="field">
              <span>Responsable</span>
              <input
                value={form.responsible}
                onChange={(event) =>
                  setForm({ ...form, responsible: event.target.value })
                }
                placeholder="Nombre del responsable"
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
            Registrar tratamiento
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

type LotMovement = {
  id: number
  date: string
  party: string
  females: number
  males: number
  totalWeight: number
  value?: number
  invoice?: string
}

function LotMovementModal({
  kind,
  available,
  onClose,
  onSave,
}: {
  kind: "Compra" | "Venta"
  available: number
  onClose: () => void
  onSave: (movement: LotMovement) => void
}) {
  const [form, setForm] = useState({
    date: "",
    party: "",
    females: "",
    males: "",
    totalWeight: "",
    value: "",
  })
  const [invoice, setInvoice] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const females = Number(form.females) || 0
  const males = Number(form.males) || 0
  const animals = females + males
  const exceedsAvailable = animals > available
  const dirty = Object.values(form).some(Boolean) || Boolean(invoice)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (
      !form.date ||
      !form.party.trim() ||
      animals === 0 ||
      !form.totalWeight ||
      exceedsAvailable ||
      (kind === "Venta" && !form.value)
    )
      return
    onSave({
      id: Date.now(),
      date: formatDate(new Date(`${form.date}T12:00:00`)),
      party: form.party.trim(),
      females,
      males,
      totalWeight: Number(
        form.totalWeight.replace(/\./g, "").replace(",", "."),
      ),
      value:
        kind === "Venta" ? Number(form.value.replace(/[^\d]/g, "")) : undefined,
      invoice: kind === "Compra" ? invoice : undefined,
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
      title={`Registrar ${kind.toLowerCase()}`}
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="form-content lot-movement-form">
          <div className="available-banner">
            <Icon name="pig" size={20} />
            <span>Animales disponibles</span>
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
                label={`Seleccionar fecha de ${kind.toLowerCase()}`}
              />
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
            </label>
            <label className="field">
              <span>Hembras</span>
              <input
                inputMode="numeric"
                value={form.females}
                onChange={(event) =>
                  setForm({
                    ...form,
                    females: event.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="Ej. 20"
              />
            </label>
            <label className="field">
              <span>Machos</span>
              <input
                inputMode="numeric"
                value={form.males}
                onChange={(event) =>
                  setForm({
                    ...form,
                    males: event.target.value.replace(/\D/g, ""),
                  })
                }
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
              <input
                inputMode="decimal"
                value={form.totalWeight}
                onChange={(event) =>
                  setForm({
                    ...form,
                    totalWeight: event.target.value.replace(/[^\d,.]/g, ""),
                  })
                }
                placeholder="Ej. 1.250,0"
              />
            </label>
            {kind === "Venta" ? (
              <label
                className={`field ${
                  submitted && !form.value ? "has-error" : ""
                }`}
              >
                <span>
                  Valor total <em>* obligatorio</em>
                </span>
                <input
                  inputMode="numeric"
                  value={form.value}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      value: event.target.value.replace(/\D/g, ""),
                    })
                  }
                  placeholder="Ej. 9.500.000"
                />
              </label>
            ) : (
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
          {exceedsAvailable && (
            <div className="form-inline-error">
              <Icon name="alert" size={17} />
              El total no puede superar los {available} animales disponibles.
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
            Registrar {kind.toLowerCase()}
          </button>
        </div>
      </form>
    </DialogShell>
  )
}

function PurchasesTab({ records }: { records: LotMovement[] }) {
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Total comprado</span>
          <strong>$ 4.280.000</strong>
          <p>este ciclo</p>
        </div>
        <div>
          <span>Concentrado</span>
          <strong>1.260,0 kg</strong>
          <p>3 compras</p>
        </div>
        <div>
          <span>Otros insumos</span>
          <strong>$ 380.000</strong>
          <p>2 compras</p>
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
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.date}</td>
                  <td>Compra de animales</td>
                  <td>{record.party}</td>
                  <td>
                    {record.females + record.males} animales ·{" "}
                    {formatDecimal(record.totalWeight)} kg
                  </td>
                  <td>{record.invoice || "Sin factura adjunta"}</td>
                </tr>
              ))}
              <tr>
                <td>08/03/2026</td>
                <td>Concentrado iniciador</td>
                <td>NutriCampo</td>
                <td>420,0 kg</td>
                <td>$ 1.365.000</td>
              </tr>
              <tr>
                <td>25/02/2026</td>
                <td>Concentrado iniciador</td>
                <td>AgroNorte</td>
                <td>420,0 kg</td>
                <td>$ 1.344.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function SalesTab({ records }: { records: LotMovement[] }) {
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Animales vendidos</span>
          <strong>64 animales</strong>
          <p>animales vendidos</p>
        </div>
        <div>
          <span>Peso vendido</span>
          <strong>2.086,4 kg</strong>
          <p>peso total</p>
        </div>
        <div>
          <span>Total ventas</span>
          <strong>$ 18.420.000</strong>
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
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.date}</td>
                  <td>{record.party}</td>
                  <td>{record.females + record.males} animales</td>
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
                  </td>
                </tr>
              ))}
              <tr>
                <td>12/03/2026</td>
                <td>Comercializadora del Norte</td>
                <td>32 animales</td>
                <td>1.049,6 kg</td>
                <td>$ 8.850/kg</td>
                <td>$ 9.288.960</td>
              </tr>
              <tr>
                <td>03/03/2026</td>
                <td>Porcícola Antioquia</td>
                <td>32 animales</td>
                <td>1.036,8 kg</td>
                <td>$ 8.805/kg</td>
                <td>$ 9.127.584</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function EmptyDetailTab({ tab }: { tab: LotTab }) {
  return (
    <div className="detail-empty">
      <div className="empty-lot-art">
        <Icon name={tab === "Identificación" ? "pig" : "table"} size={34} />
      </div>
      <h2>{tab}</h2>
      <p>La información de {tab.toLowerCase()} del lote aparecerá aquí.</p>
    </div>
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
  onBack,
  onUpdate,
  onDelete,
  onNotice,
}: {
  lot: Lot
  farmName: string
  onBack: () => void
  onUpdate: (lot: Lot) => void
  onDelete: () => void
  onNotice: (text: string) => void
}) {
  const [tab, setTab] = useState<LotTab>("Resumen")
  const [menuOpen, setMenuOpen] = useState(false)
  const [mortalityModal, setMortalityModal] = useState(false)
  const [treatmentModal, setTreatmentModal] = useState(false)
  const [purchaseModal, setPurchaseModal] = useState(false)
  const [saleModal, setSaleModal] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [records, setRecords] = useState(mortalityRecords)
  const [purchaseRecords, setPurchaseRecords] = useState<LotMovement[]>([])
  const [saleRecords, setSaleRecords] = useState<LotMovement[]>([])
  const metrics = getLotMetrics(lot)
  const [treatments, setTreatments] = useState<Treatment[]>([
    {
      id: 1,
      name: "Vacuna Mycoplasma",
      date: "10/03/2026",
      method: "Intramuscular",
      overdue: true,
      applied: false,
    },
    {
      id: 2,
      name: "Refuerzo vacuna Circovirus",
      date: "18/03/2026",
      method: "Intramuscular",
      overdue: false,
      applied: false,
    },
    {
      id: 3,
      name: "Desparasitación interna",
      date: "25/03/2026",
      method: "Oral",
      overdue: false,
      applied: false,
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
    Compras: {
      label: "Registrar compra",
      run: () => setPurchaseModal(true),
    },
    Ventas: {
      label: "Registrar venta",
      run: () => setSaleModal(true),
    },
  }
  const currentAction = action[tab]
  const actionDisabled =
    lot.status === "Finalizado" ||
    ((tab === "Mortalidad" || tab === "Sanidad") &&
      metrics.currentAnimals === 0)
  const disabledReason =
    lot.status === "Finalizado"
      ? "Este lote está finalizado y es solo de consulta"
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
          onNotice(`Edición de ${lot.code}`)
        }}
        onFinish={() => {
          onUpdate({ ...lot, status: "Finalizado" })
          setMenuOpen(false)
          onNotice("Lote finalizado")
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
      <div className="tab-action-row">
        <div>
          {tab !== "Resumen" && (
            <>
              <h2>{tab}</h2>
              <p>Registros del lote {lot.code}</p>
            </>
          )}
        </div>
      </div>
      {tab === "Resumen" && <SummaryTab lot={lot} />}
      {tab === "Mortalidad" && <MortalityTab lot={lot} records={records} />}
      {tab === "Sanidad" && (
        <HealthTab
          lot={lot}
          treatments={treatments}
          setTreatments={setTreatments}
          readOnly={lot.status === "Finalizado"}
        />
      )}
      {tab === "Compras" && <PurchasesTab records={purchaseRecords} />}
      {tab === "Ventas" && <SalesTab records={saleRecords} />}
      {(tab === "Liquidación" || tab === "Identificación") && (
        <EmptyDetailTab tab={tab} />
      )}
      {mortalityModal && (
        <MortalityModal
          available={metrics.currentAnimals}
          onClose={() => setMortalityModal(false)}
          onSave={(record) => {
            setRecords([record, ...records])
            const currentAnimals = Math.max(
              0,
              metrics.currentAnimals - record.quantity,
            )
            onUpdate({
              ...lot,
              currentAnimals,
              mortality: lot.initialAnimals
                ? ((lot.initialAnimals - currentAnimals) / lot.initialAnimals) *
                  100
                : 0,
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
          onSave={() => {
            setTreatmentModal(false)
            onNotice("Tratamiento registrado")
          }}
        />
      )}
      {purchaseModal && (
        <LotMovementModal
          kind="Compra"
          available={metrics.currentAnimals}
          onClose={() => setPurchaseModal(false)}
          onSave={(movement) => {
            setPurchaseRecords([movement, ...purchaseRecords])
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
            setSaleRecords([movement, ...saleRecords])
            setSaleModal(false)
            onNotice("Venta registrada")
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
    </>
  )
}

type SowStatus = "Gestación" | "Lactancia" | "Vacía" | "Reemplazo"
type Sow = {
  id: number
  number: string
  status: SowStatus
  band: number
  daysInStatus: number
  probableFarrowing?: string
  parity: number
  attention?: "overdue" | "vaccine"
}

const sowStatuses: SowStatus[] = [
  "Gestación",
  "Lactancia",
  "Vacía",
  "Reemplazo",
]

const initialSows: Sow[] = Array.from({ length: 26 }, (_, index) => {
  const status: SowStatus =
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
    status,
    band: 37 + (index % 4),
    daysInStatus:
      status === "Gestación"
        ? 94 + index * 2
        : status === "Lactancia"
          ? 4 + (index % 7)
          : status === "Vacía"
            ? 3 + (index % 8)
            : 28 + index,
    probableFarrowing:
      status === "Gestación"
        ? index === 0
          ? "14/03/2026"
          : `${18 + (index % 9)}/03/2026`
        : undefined,
    parity: 1 + (index % 6),
    attention: index === 0 ? "overdue" : index === 1 ? "vaccine" : undefined,
  }
})

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
    detail: "FPP (fecha probable de parto): 14/03/2026 · 2 días de atraso",
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

function BreedingSkeletons() {
  return (
    <div className="sow-grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="sow-card sow-skeleton" key={item}>
          <div className="skeleton w-40" />
          <div className="skeleton w-28" />
          <div className="skeleton metric-skeleton" />
        </div>
      ))}
    </div>
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
  onBirth,
  onHealth,
  onNotice,
}: {
  sow: Sow | null
  onClose: () => void
  onBirth: () => void
  onHealth: () => void
  onNotice: (text: string) => void
}) {
  const options: RegisterOption[] = [
    { label: "Servicio y celo", icon: "heart" },
    { label: "Gestación", icon: "calendar" },
    { label: "Parto y lactancia", icon: "baby", action: onBirth },
    { label: "Destete", icon: "piglet" },
    { label: "Sanidad", icon: "syringe", action: onHealth },
    { label: "Peso y condición corporal", icon: "weight" },
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
  onResolve,
}: {
  farmName: string
  sowCount: number
  alerts: BreedingAlert[]
  bellOpen: boolean
  setBellOpen: (value: boolean) => void
  registerOpen: boolean
  setRegisterOpen: (value: boolean) => void
  onResolve: (alert: BreedingAlert) => void
}) {
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
        <div className="bell-wrap">
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
        <div className="register-wrap">
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
            <p>{alerts.length} acciones requieren tu atención</p>
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
  sow,
  onView,
  onNotice,
  onDelete,
}: {
  sow: Sow
  onView: () => void
  onNotice: (text: string) => void
  onDelete: () => void
}) {
  return (
    <div className="lot-menu sow-menu" role="menu">
      <button onClick={onView}>
        <Icon name="arrow" size={16} />
        Ver ficha
      </button>
      <div className="menu-divider" />
      <button onClick={() => onNotice(`${sow.number} marcada para descarte`)}>
        <Icon name="alert" size={16} />
        Marcar para descarte
      </button>
      <button onClick={() => onNotice(`Baja de ${sow.number}`)}>
        <Icon name="logout" size={16} />
        Registrar baja
      </button>
      <div className="menu-divider" />
      <button className="delete-item" onClick={onDelete}>
        <Icon name="trash" size={16} />
        Eliminar cerda
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
  onNotice,
  onDelete,
}: {
  sow: Sow
  menuOpen: boolean
  onMenu: () => void
  onRegister: () => void
  onHealth: () => void
  onView: () => void
  onNotice: (text: string) => void
  onDelete: () => void
}) {
  const delayed = sow.attention === "overdue"
  const statusTone =
    sow.attention === "overdue"
      ? "critical"
      : sow.attention === "vaccine"
        ? "warning"
        : "neutral"
  return (
    <article className="sow-card">
      <div className="sow-card-heading">
        <div>
          <span className="lot-label">Cerda</span>
          <h3>{sow.number}</h3>
        </div>
        <div className="sow-card-menu">
          <span className={`status ${statusTone}`}>{sow.status}</span>
          <button
            className="dots-button"
            aria-label={`Opciones de la cerda ${sow.number}`}
            onClick={onMenu}
          >
            <Icon name="dots" size={20} />
          </button>
          {menuOpen && (
            <SowMenu
              sow={sow}
              onView={onView}
              onNotice={onNotice}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>
      <div className="sow-data">
        <div>
          <span>
            {sow.status === "Vacía"
              ? "Días como vacía"
              : `Días en ${sow.status.toLowerCase()}`}
          </span>
          <strong>{sow.daysInStatus}</strong>
        </div>
        <div>
          <span>Banda</span>
          <strong>{sow.band}</strong>
        </div>
        {sow.status === "Gestación" && (
          <div className={delayed ? "overdue-text" : ""}>
            <span title="Fecha probable de parto" className="term-help">
              FPP (fecha probable de parto)
            </span>
            <strong>{sow.probableFarrowing}</strong>
          </div>
        )}
      </div>
      <div className="sow-actions">
        <button onClick={onRegister}>
          <Icon name="plus" size={17} />
          Registrar evento
        </button>
        <button onClick={onHealth}>
          <Icon name="syringe" size={17} />
          Sanidad
        </button>
        <button onClick={onView}>
          <Icon name="arrow" size={17} />
          Ver ficha
        </button>
      </div>
    </article>
  )
}

function SowTable({
  sows,
  onView,
}: {
  sows: Sow[]
  onView: (sow: Sow) => void
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Estado</th>
            <th>Banda</th>
            <th>Días en estado</th>
            <th>FPP (fecha probable de parto)</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {sows.map((sow) => (
            <tr key={sow.id}>
              <td>
                <strong>{sow.number}</strong>
              </td>
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
                  {sow.status}
                </span>
              </td>
              <td>{sow.band}</td>
              <td>{sow.daysInStatus}</td>
              <td>{sow.probableFarrowing ?? "No aplica"}</td>
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

function BirthModal({
  sow,
  onClose,
  onSave,
}: {
  sow: Sow
  onClose: () => void
  onSave: () => void
}) {
  const [form, setForm] = useState({
    date: "",
    alive: "",
    dead: "",
    mummified: "",
    bodyCondition: "",
    responsible: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Object.values(form).some(Boolean)
  const alive = Number(form.alive) || 0
  const dead = Number(form.dead) || 0
  const mummified = Number(form.mummified) || 0
  const total = alive + dead + mummified
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!form.date || !form.alive || !form.bodyCondition) return
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
    <DialogShell
      title={`Registrar parto · ${sow.number}`}
      onClose={attemptClose}
      size="wide"
    >
      <form onSubmit={submit}>
        <div className="form-content birth-form">
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha del parto <em>* obligatorio</em>
              </span>
              <DatePicker
                value={form.date}
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
            <label className="field">
              <span>Responsable</span>
              <input
                value={form.responsible}
                onChange={(e) =>
                  setForm({ ...form, responsible: e.target.value })
                }
                placeholder="Nombre del responsable"
              />
            </label>
          </div>
          <div className="birth-counts">
            <label
              className={`field ${submitted && !form.alive ? "has-error" : ""}`}
            >
              <span>
                <abbr title="Nacidos vivos">NV</abbr> (nacidos vivos){" "}
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
                <abbr title="Nacidos muertos">NAT</abbr> (nacidos muertos)
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
                <abbr title="Momificados">MOM</abbr> (momificados)
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

function SowHealthModal({
  sow,
  onClose,
  onNotice,
}: {
  sow: Sow
  onClose: () => void
  onNotice: (text: string) => void
}) {
  const [selected, setSelected] = useState<number[]>([])
  const [vaccines, setVaccines] = useState([
    { id: 1, name: "Parvovirus", date: "16/03/2026", overdue: true },
    { id: 2, name: "Leptospira", date: "19/03/2026", overdue: false },
    { id: 3, name: "Erisipela", date: "22/03/2026", overdue: false },
  ])
  const apply = (ids: number[]) => {
    setVaccines(vaccines.filter((vaccine) => !ids.includes(vaccine.id)))
    setSelected([])
    onNotice(ids.length > 1 ? "Vacunas aplicadas" : "Vacuna aplicada")
  }
  return (
    <DialogShell
      title={
        <span className="modal-title-icon">
          <Icon name="syringe" size={21} />
          Sanidad · {sow.number}
        </span>
      }
      onClose={onClose}
      size="wide"
    >
      <div className="sow-health-content">
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
                  onClick={() =>
                    setVaccines(
                      vaccines.filter((item) => item.id !== vaccine.id),
                    )
                  }
                >
                  Omitir
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
        </div>
      </div>
    </DialogShell>
  )
}

function SowPanel({
  sow,
  onClose,
  onRegister,
  onHealth,
}: {
  sow: Sow
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
              {sow.status}
            </span>
            <span>
              Banda {sow.band} · {sow.daysInStatus} días
            </span>
          </div>
          <div className="panel-kpis">
            <div>
              <span title="Partos por hembra al año" className="term-help">
                PHA (partos por hembra al año)
              </span>
              <strong>2,35</strong>
            </div>
            <div>
              <span title="Destetados por hembra al año" className="term-help">
                DHA (destetados por hembra al año)
              </span>
              <strong>25,8</strong>
            </div>
          </div>
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

function DeleteSowDialog({
  sow,
  onClose,
  onConfirm,
}: {
  sow: Sow
  onClose: () => void
  onConfirm: () => void
}) {
  const [value, setValue] = useState("")
  return (
    <DialogShell title="Eliminar cerda" onClose={onClose} size="small">
      <div className="delete-content">
        <div className="danger-icon">
          <Icon name="trash" size={22} />
        </div>
        <p>
          Se eliminarán la ficha, los ciclos y todos los registros asociados a
          {` ${sow.number}`}. Esta acción no se puede deshacer.
        </p>
        <label className="field">
          <span>
            Escribe <strong>{sow.number}</strong> para confirmar
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={sow.number}
          />
        </label>
      </div>
      <div className="modal-actions">
        <button className="button secondary" onClick={onClose}>
          Cancelar
        </button>
        <button
          className="button danger"
          disabled={value !== sow.number}
          onClick={onConfirm}
        >
          Eliminar cerda
        </button>
      </div>
    </DialogShell>
  )
}

function BreedingPage({
  farmName,
  onNotice,
}: {
  farmName: string
  onNotice: (text: string) => void
}) {
  const [sows, setSows] = useState(() =>
    farmName === "Granja La Esperanza"
      ? initialSows
      : initialSows
          .slice(0, farmName === "Granja El Porvenir" ? 12 : 18)
          .map((sow, index) => ({
            ...sow,
            id: sow.id + (farmName === "Granja El Porvenir" ? 200 : 400),
            number: `#${
              farmName === "Granja El Porvenir" ? 1501 + index : 1701 + index
            }`,
            band: (farmName === "Granja El Porvenir" ? 41 : 45) + (index % 3),
          })),
  )
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<SowStatus>("Gestación")
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
  const [birthSow, setBirthSow] = useState<Sow | null>(null)
  const [healthSow, setHealthSow] = useState<Sow | null>(null)
  const [deletingSow, setDeletingSow] = useState<Sow | null>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  const filtered = sows.filter(
    (sow) =>
      sow.status === status &&
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
    if (alert.type === "parto" && sow) setBirthSow(sow)
    else if (alert.type === "vacuna" && sow) setHealthSow(sow)
    else openRegister(sow)
    setAlerts(alerts.filter((item) => item.id !== alert.id))
  }
  return (
    <>
      <div className="breeding-page">
        <BreedingHeader
          farmName={farmName}
          sowCount={sows.length}
          alerts={alerts}
          bellOpen={bellOpen}
          setBellOpen={setBellOpen}
          registerOpen={registerOpen}
          setRegisterOpen={(value) => {
            setRegisterSow(null)
            setRegisterOpen(value)
          }}
          onResolve={resolveAlert}
        />
        {registerOpen && (
          <RegisterMenu
            sow={registerSow}
            onClose={() => setRegisterOpen(false)}
            onBirth={() => {
              if (registerSow) setBirthSow(registerSow)
              else onNotice("Selecciona una cerda para registrar el parto")
            }}
            onHealth={() => {
              if (registerSow) setHealthSow(registerSow)
              else onNotice("Selecciona una cerda para registrar Sanidad")
            }}
            onNotice={onNotice}
          />
        )}
        <AttendToday alerts={alerts} onAction={resolveAlert} />
        <section className="sow-directory">
          <div className="sow-toolbar">
            <div className="sow-tabs">
              {sowStatuses.map((item) => (
                <button
                  className={status === item ? "active" : ""}
                  onClick={() => setStatus(item)}
                  key={item}
                >
                  {item}
                  <span>
                    {sows.filter((sow) => sow.status === item).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="sow-view-actions">
              <button
                className="button secondary"
                onClick={() => onNotice("Descarga del plantel preparada")}
              >
                <Icon name="download" size={17} />
                Descargar
              </button>
              <button
                className="button secondary"
                onClick={() => setTableView(!tableView)}
              >
                <Icon name={tableView ? "grid" : "table"} size={17} />
                {tableView ? "Ver tarjetas" : "Ver en tabla"}
              </button>
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
            <label className="band-filter">
              <span>Banda</span>
              <select value={band} onChange={(e) => setBand(e.target.value)}>
                <option>Todas</option>
                {[...new Set(sows.map((sow) => sow.band))]
                  .sort((a, b) => a - b)
                  .map((value) => (
                    <option key={value}>{value}</option>
                  ))}
              </select>
            </label>
            <div className="terms-help">
              <span title="Partos por hembra al año">
                PHA (partos por hembra al año)
              </span>
              <span title="Destetados por hembra al año">
                DHA (destetados por hembra al año)
              </span>
              <span title="Nacidos vivos">NV (nacidos vivos)</span>
              <span title="Nacidos muertos">NAT (nacidos muertos)</span>
              <span title="Momificados">MOM (momificados)</span>
            </div>
          </div>
          {loading ? (
            <BreedingSkeletons />
          ) : tableView ? (
            <SowTable sows={filtered} onView={setPanelSow} />
          ) : (
            <div className="sow-grid">
              {filtered.map((sow) => (
                <SowCard
                  key={sow.id}
                  sow={sow}
                  menuOpen={menuOpen === sow.id}
                  onMenu={() =>
                    setMenuOpen(menuOpen === sow.id ? null : sow.id)
                  }
                  onRegister={() => openRegister(sow)}
                  onHealth={() => {
                    setMenuOpen(null)
                    setHealthSow(sow)
                  }}
                  onView={() => {
                    setMenuOpen(null)
                    setPanelSow(sow)
                  }}
                  onNotice={(text) => {
                    setMenuOpen(null)
                    onNotice(text)
                  }}
                  onDelete={() => {
                    setMenuOpen(null)
                    setDeletingSow(sow)
                  }}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      {birthSow && (
        <BirthModal
          sow={birthSow}
          onClose={() => setBirthSow(null)}
          onSave={() => {
            setBirthSow(null)
            onNotice("Parto registrado")
          }}
        />
      )}
      {healthSow && (
        <SowHealthModal
          sow={healthSow}
          onClose={() => setHealthSow(null)}
          onNotice={onNotice}
        />
      )}
      {panelSow && (
        <SowPanel
          sow={panelSow}
          onClose={() => setPanelSow(null)}
          onRegister={() => {
            setPanelSow(null)
            openRegister(panelSow)
          }}
          onHealth={() => {
            setHealthSow(panelSow)
            setPanelSow(null)
          }}
        />
      )}
      {deletingSow && (
        <DeleteSowDialog
          sow={deletingSow}
          onClose={() => setDeletingSow(null)}
          onConfirm={() => {
            setSows(sows.filter((sow) => sow.id !== deletingSow.id))
            setDeletingSow(null)
            onNotice("Cerda eliminada")
          }}
        />
      )}
    </>
  )
}

type ReproducerKind = "Macho" | "Semen"
type ReproducerStatus = "Activo" | "Fallecido" | "Descartado"
type Reproducer = {
  id: number
  name: string
  kind: ReproducerKind
  method: "Monta natural" | "Inseminación"
  status: ReproducerStatus
  servicesThisMonth: number
  lastService: string
  breed: string
}

const initialReproducers: Reproducer[] = [
  {
    id: 1,
    name: "Macho Duroc 01",
    kind: "Macho",
    method: "Monta natural",
    status: "Activo",
    servicesThisMonth: 18,
    lastService: "14/03/2026",
    breed: "Duroc",
  },
  {
    id: 2,
    name: "Semen Pietrain",
    kind: "Semen",
    method: "Inseminación",
    status: "Activo",
    servicesThisMonth: 26,
    lastService: "15/03/2026",
    breed: "Pietrain",
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
  moreOpen,
  setMoreOpen,
  onAdd,
  onNotice,
}: {
  farmName: string
  moreOpen: boolean
  setMoreOpen: (value: boolean) => void
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
                  onNotice("Campos personalizados")
                  setMoreOpen(false)
                }}
              >
                <Icon name="settings" size={17} />
                Campos personalizados
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
          Agregar reproductor
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
  onClose,
  onSave,
}: {
  reproducer?: Reproducer
  onClose: () => void
  onSave: (reproducer: Reproducer) => void
}) {
  const [form, setForm] = useState({
    name: reproducer?.name ?? "",
    kind: reproducer?.kind ?? "",
    breed: reproducer?.breed ?? "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = reproducer
    ? form.name !== reproducer.name ||
      form.kind !== reproducer.kind ||
      form.breed !== reproducer.breed
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
      title={reproducer ? "Editar reproductor" : "Agregar reproductor"}
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
            {reproducer ? "Guardar cambios" : "Agregar reproductor"}
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
                      <th>Periodo actual</th>
                      <th>Periodo anterior</th>
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
              lastService: formatDate(new Date()),
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

function ReproducerPage({
  farmName,
  onNotice,
}: {
  farmName: string
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
              servicesThisMonth: 19,
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
          ],
  )
  const [kind, setKind] = useState<"Todos" | ReproducerKind>("Todos")
  const [status, setStatus] = useState<"Todos" | ReproducerStatus>("Todos")
  const [moreOpen, setMoreOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [selected, setSelected] = useState<Reproducer | null>(null)
  const filtered = reproducers.filter(
    (reproducer) =>
      (kind === "Todos" || reproducer.kind === kind) &&
      (status === "Todos" || reproducer.status === status),
  )
  if (selected) {
    return (
      <ReproducerDetail
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
          moreOpen={moreOpen}
          setMoreOpen={setMoreOpen}
          onAdd={() => setAddOpen(true)}
          onNotice={onNotice}
        />
        <div className="reproducer-filters">
          <div className="filter-group">
            <span>Tipo</span>
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
          <div className="filter-group">
            <span>Estado</span>
            {(["Todos", "Activo", "Fallecido", "Descartado"] as const).map(
              (item) => (
                <button
                  className={status === item ? "active" : ""}
                  onClick={() => setStatus(item)}
                  key={item}
                >
                  {item === "Activo"
                    ? "Activos"
                    : item === "Fallecido"
                      ? "Fallecidos"
                      : item === "Descartado"
                        ? "Descartados"
                        : item}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="reproducer-grid">
          {filtered.map((reproducer) => (
            <ReproducerCard
              key={reproducer.id}
              reproducer={reproducer}
              onView={() => setSelected(reproducer)}
            />
          ))}
        </div>
      </div>
      {addOpen && (
        <AddReproducerModal
          onClose={() => setAddOpen(false)}
          onSave={(reproducer) => {
            setReproducers([...reproducers, reproducer])
            setAddOpen(false)
            onNotice("Reproductor agregado")
          }}
        />
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
    expiry: "18/03/2026",
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
    expiry: "30/04/2026",
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
    expiry: "15/08/2026",
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
    detail: "Vence el 18/03/2026 · quedan 4 ítems",
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
            <p>{items.length} productos necesitan una acción</p>
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
  onHistory,
  onEdit,
  onCount,
  onRemove,
}: {
  onHistory: () => void
  onEdit: () => void
  onCount: () => void
  onRemove: () => void
}) {
  return (
    <div className="lot-menu inventory-row-menu">
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
    </div>
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
  return (
    <div className="table-wrap inventory-table">
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
                    onClick={() => setMenuOpen(menuOpen === key ? null : key)}
                  >
                    <Icon name="dots" size={20} />
                  </button>
                  {menuOpen === key && (
                    <InventoryRowMenu
                      onHistory={() => {
                        setMenuOpen(null)
                        onView("Historial")
                      }}
                      onEdit={() => {
                        setMenuOpen(null)
                        onNotice(`Edición de ${item.name}`)
                      }}
                      onCount={() => {
                        setMenuOpen(null)
                        onView("Conteo físico")
                      }}
                      onRemove={() => {
                        setMenuOpen(null)
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
                      {item.sealed} sellados · {item.open} abierto
                      {item.open ? ` (${item.openLevel} % restante)` : ""} ·{" "}
                      {item.empty} vacíos
                    </span>
                    {item.open > 0 && (
                      <div className="bottle-level">
                        <span style={{ width: `${item.openLevel}%` }} />
                      </div>
                    )}
                  </div>
                </td>
                <td>{item.stock} ítems</td>
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
                    onClick={() => setMenuOpen(menuOpen === key ? null : key)}
                  >
                    <Icon name="dots" size={20} />
                  </button>
                  {menuOpen === key && (
                    <InventoryRowMenu
                      onHistory={() => {
                        setMenuOpen(null)
                        onView("Historial")
                      }}
                      onEdit={() => {
                        setMenuOpen(null)
                        onNotice(`Edición de ${item.name}`)
                      }}
                      onCount={() => {
                        setMenuOpen(null)
                        onView("Conteo físico")
                      }}
                      onRemove={() => {
                        setMenuOpen(null)
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
    date: "",
    supplier: "",
  })
  const [invoice, setInvoice] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty =
    form.category !== category ||
    form.product !== (product ?? "") ||
    Boolean(form.quantity || form.date || form.supplier || invoice)
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
                        lastPurchase: formatDate(new Date()),
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
    date: "",
    area: "",
    product: "",
    productQuantity: "",
    waterQuantity: "",
    time: "",
    responsible: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const dirty = Object.values(form).some(Boolean)
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!form.date || !form.area || !form.product || !form.responsible) return
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
                  onChange={(value) => setForm({ ...form, date: value })}
                  label="Seleccionar fecha del registro"
                />
              </label>
              <label
                className={`field ${
                  submitted && !form.time ? "has-error" : ""
                }`}
              >
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
              className={`field ${submitted && !form.area ? "has-error" : ""}`}
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
              />
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
                onChange={(event) =>
                  setForm({ ...form, product: event.target.value })
                }
                placeholder="Nombre del desinfectante"
              />
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
                submitted && !form.responsible ? "has-error" : ""
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
              />
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

function PorciTablePage({ farmName }: { farmName: string }) {
  const [selectedTable, setSelectedTable] = useState("Control de pediluvios")
  const [records, setRecords] = useState(initialPediluvioRecords)
  const [areaFilter, setAreaFilter] = useState("Todas")
  const [statusFilter, setStatusFilter] = useState("Todos")
  const [dateFilter, setDateFilter] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(true)
  const [sortAscending, setSortAscending] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const tableNames = [
    "Control de pediluvios",
    "Limpieza de corrales",
    "Temperatura de salas",
  ]
  const updateRecord = (
    id: number,
    field: keyof PediluvioRecord,
    value: string,
  ) => {
    setRecords(
      records.map((record) =>
        record.id === id ? { ...record, [field]: value } : record,
      ),
    )
  }
  const filtered = records.filter(
    (record) =>
      (areaFilter === "Todas" || record.area === areaFilter) &&
      (statusFilter === "Todos" || record.status === statusFilter) &&
      (!dateFilter ||
        record.date.split("/").reverse().join("-") === dateFilter),
  )
  const visibleRecords = filtered.slice().sort((a, b) => {
    const dateDifference =
      new Date(a.date.split("/").reverse().join("-")).getTime() -
      new Date(b.date.split("/").reverse().join("-")).getTime()
    return sortAscending ? dateDifference : -dateDifference
  })
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
              onClick={() => setPanelOpen(true)}
            >
              <Icon name="plus" size={18} />
              Nuevo registro
            </button>
          </div>
        </header>
        <div className="porci-workspace">
          <aside className="porci-table-list">
            <span>Tablas</span>
            {tableNames.map((name) => (
              <button
                className={selectedTable === name ? "active" : ""}
                onClick={() => setSelectedTable(name)}
                key={name}
              >
                <Icon
                  name={
                    name === "Control de pediluvios"
                      ? "droplet"
                      : name === "Limpieza de corrales"
                        ? "check"
                        : "trend"
                  }
                  size={18}
                />
                <span>{name}</span>
                <Icon name="chevron" size={15} />
              </button>
            ))}
          </aside>
          <section className="porci-table-content">
            <div className="porci-table-title">
              <div>
                <h2>{selectedTable}</h2>
                <p>
                  {selectedTable === "Control de pediluvios"
                    ? `${filtered.length} registros visibles`
                    : "Tabla operativa"}
                </p>
              </div>
              {selectedTable === "Control de pediluvios" && (
                <div className="porci-table-tools">
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
                </div>
              )}
            </div>
            {selectedTable === "Control de pediluvios" && filtersOpen && (
              <div className="porci-filters">
                <span>Filtros</span>
                <label>
                  <b>Área</b>
                  <select
                    value={areaFilter}
                    onChange={(event) => setAreaFilter(event.target.value)}
                  >
                    <option>Todas</option>
                    {[...new Set(records.map((record) => record.area))].map(
                      (area) => (
                        <option key={area}>{area}</option>
                      ),
                    )}
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
            {selectedTable === "Control de pediluvios" ? (
              <div className="porci-scroll-table">
                <table>
                  <thead>
                    <tr>
                      <th className="sticky-date">Fecha</th>
                      <th className="sticky-area">Área</th>
                      <th>Producto</th>
                      <th>Cantidad de producto (ml)</th>
                      <th>Cantidad de agua (L)</th>
                      <th>Hora</th>
                      <th>Responsable</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRecords.map((record) => (
                      <tr key={record.id}>
                        <EditableTableCell
                          className="sticky-date"
                          value={record.date}
                          onSave={(value) =>
                            updateRecord(record.id, "date", value)
                          }
                        />
                        <EditableTableCell
                          className="sticky-area"
                          value={record.area}
                          onSave={(value) =>
                            updateRecord(record.id, "area", value)
                          }
                        />
                        <EditableTableCell
                          value={record.product}
                          onSave={(value) =>
                            updateRecord(record.id, "product", value)
                          }
                        />
                        <EditableTableCell
                          value={record.productQuantity}
                          suffix=" ml"
                          onSave={(value) =>
                            updateRecord(record.id, "productQuantity", value)
                          }
                        />
                        <EditableTableCell
                          value={record.waterQuantity}
                          suffix=" L"
                          onSave={(value) =>
                            updateRecord(record.id, "waterQuantity", value)
                          }
                        />
                        <EditableTableCell
                          value={record.time}
                          onSave={(value) =>
                            updateRecord(record.id, "time", value)
                          }
                        />
                        <EditableTableCell
                          value={record.responsible}
                          onSave={(value) =>
                            updateRecord(record.id, "responsible", value)
                          }
                        />
                        <td>
                          <button
                            className={`status ${
                              record.status === "Hecho" ? "positive" : "warning"
                            }`}
                            onClick={() =>
                              updateRecord(
                                record.id,
                                "status",
                                record.status === "Hecho"
                                  ? "Pendiente"
                                  : "Hecho",
                              )
                            }
                          >
                            {record.status === "Hecho" && (
                              <Icon name="check" size={14} />
                            )}
                            {record.status}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="porci-empty-table">
                <Icon name="table" size={32} />
                <h3>{selectedTable}</h3>
                <p>Esta tabla está lista para recibir registros.</p>
              </div>
            )}
          </section>
        </div>
      </div>
      {panelOpen && (
        <NewPediluvioPanel
          onClose={() => setPanelOpen(false)}
          onSave={(record) => {
            setRecords([record, ...records])
            setPanelOpen(false)
          }}
        />
      )}
    </>
  )
}

function FarmSummaryPage({
  farm,
  lots,
  inventoryAttention,
  onNavigate,
  onCycle,
}: {
  farm: Farm
  lots: Lot[]
  inventoryAttention: InventoryAttention[]
  onNavigate: (label: string) => void
  onCycle: (cycle: Cycle) => void
}) {
  const activeLots = lots.filter(
    (lot) => lot.farmId === farm.id && lot.status === "Activo",
  )
  const alerts = [
    ...inventoryAttention.map((item) => ({
      id: `inventory-${item.id}`,
      title: item.title,
      detail: `${item.product} · ${item.detail}`,
      urgency: item.critical ? 1 : 2,
      module: "Inventario",
    })),
    ...(farm.cycles.includes("Plantel reproductivo")
      ? [
          {
            id: "breeding-birth",
            title: "Parto atrasado",
            detail: "Una cerda requiere seguimiento hoy.",
            urgency: 1,
            module: "Plantel reproductivo",
          },
          {
            id: "breeding-vaccine",
            title: "Vacuna vencida",
            detail: "Hay una vacuna pendiente por aplicar.",
            urgency: 2,
            module: "Plantel reproductivo",
          },
          {
            id: "breeding-service",
            title: "Servicio pendiente",
            detail: "Una cerda en celo requiere atención hoy.",
            urgency: 3,
            module: "Plantel reproductivo",
          },
        ]
      : []),
    ...activeLots
      .filter((lot) => lot.mortality > lot.mortalityGoal)
      .map((lot) => ({
        id: `lot-${lot.id}`,
        title: "Mortalidad sobre la meta",
        detail: `${lot.code} · ${formatDecimal(lot.mortality)} % frente a meta de ${formatDecimal(lot.mortalityGoal)} %`,
        urgency: 1,
        module: lot.cycle,
      })),
  ].sort((a, b) => a.urgency - b.urgency)
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
                <button key={alert.id} onClick={() => onNavigate(alert.module)}>
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
                  <strong>{cycleLots.length} lotes</strong>
                  <small>
                    {cycleLots
                      .reduce(
                        (sum, lot) => sum + getLotMetrics(lot).currentAnimals,
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

type CalendarEventType = "Vacuna" | "Parto probable" | "Pediluvio"
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
      date: `2026-03-${String(18 + index).padStart(2, "0")}`,
      type: "Vacuna",
      title: "Refuerzo de parvovirus",
      detail: `Aplicación programada para el plantel de ${farm.name}.`,
      action: "Aplicar vacuna",
    },
    {
      id: farm.id * 10 + 2,
      farmId: farm.id,
      date: `2026-03-${String(20 + index).padStart(2, "0")}`,
      type: "Parto probable",
      title: `Parto probable · Cerda #${1304 + index}`,
      detail: "Revisar signos de parto y preparar el área de maternidad.",
      action: "Registrar parto",
    },
    {
      id: farm.id * 10 + 3,
      farmId: farm.id,
      date: `2026-03-${String(16 + index).padStart(2, "0")}`,
      type: "Pediluvio",
      title: "Control de pediluvio",
      detail: "Renovar solución desinfectante del acceso principal.",
      action: "Marcar como hecho",
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
            {(["Todos", "Vacuna", "Parto probable", "Pediluvio"] as const).map(
              (item) => (
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
              ),
            )}
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

function SettingsPage({
  farms,
  selectedFarm,
  onNotice,
}: {
  farms: Farm[]
  selectedFarm: Farm
  onNotice: (text: string) => void
}) {
  const [feedUnit, setFeedUnit] = useState("kg")
  const [medicineUnit, setMedicineUnit] = useState("ítems")
  return (
    <div className="connected-tool-page settings-page">
      <header className="page-header connected-page-header">
        <div>
          <div className="breadcrumbs">
            <span>Inicio</span>
            <Icon name="chevron" size={14} />
            <strong>Ajustes</strong>
          </div>
          <h1>Ajustes</h1>
          <p>Configura granjas, alimentación, unidades y permisos.</p>
        </div>
        <div className="header-actions">
          <button
            className="button primary"
            onClick={() => onNotice("Ajustes guardados")}
          >
            Guardar ajustes
          </button>
        </div>
      </header>
      <div className="settings-sections">
        <section className="settings-card">
          <div className="settings-card-heading">
            <span>
              <Icon name="pig" size={21} />
            </span>
            <div>
              <h2>Granjas y ciclos</h2>
              <p>Consulta las granjas y sus ciclos activos.</p>
            </div>
          </div>
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
        </section>
        <section className="settings-card">
          <div className="settings-card-heading">
            <span>
              <Icon name="box" size={21} />
            </span>
            <div>
              <h2>Programa de alimentación y unidades</h2>
              <p>Define cómo se registran las salidas del inventario.</p>
            </div>
          </div>
          <div className="settings-form-grid">
            <label className="field">
              <span>Granja</span>
              <input value={selectedFarm.name} readOnly />
            </label>
            <label className="field">
              <span>Unidad para alimento</span>
              <select
                value={feedUnit}
                onChange={(event) => setFeedUnit(event.target.value)}
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
                onChange={(event) => setMedicineUnit(event.target.value)}
              >
                <option>ítems</option>
                <option>frascos</option>
                <option>ml</option>
              </select>
            </label>
            <label className="field">
              <span>Consumo esperado en Precebo</span>
              <input defaultValue="1,4 kg por animal/día" />
            </label>
            <label className="field">
              <span>Consumo esperado en Levante</span>
              <input defaultValue="2,6 kg por animal/día" />
            </label>
          </div>
          <div className="settings-inventory-output">
            <div>
              <span>Última salida de alimento</span>
              <strong>420,0 {feedUnit}</strong>
              <small>Concentrado de Precebo · hoy</small>
            </div>
            <div>
              <span>Última salida de medicamentos</span>
              <strong>4 {medicineUnit}</strong>
              <small>Vacuna Circovirus · hoy</small>
            </div>
          </div>
        </section>
        <section className="settings-card">
          <div className="settings-card-heading">
            <span>
              <Icon name="settings" size={21} />
            </span>
            <div>
              <h2>Usuarios y roles</h2>
              <p>Define el nivel de acceso de cada persona.</p>
            </div>
          </div>
          <div className="role-grid">
            {[
              {
                role: "Administrador",
                description:
                  "Gestiona granjas, usuarios y toda la información.",
              },
              {
                role: "Supervisor",
                description: "Revisa resultados y aprueba registros.",
              },
              {
                role: "Operario",
                description: "Registra actividades y consulta su granja.",
              },
            ].map((item) => (
              <article key={item.role}>
                <span className="avatar">{item.role.slice(0, 2)}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

type ReportRole = "Gerencia" | "Veterinario" | "Producción"
type ReportSection = "Indicadores principales" | "Mortalidad por lote" | "Partos por mes"

type ChartPoint = {
  label: string
  value: number
}

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
  farmName,
  onNotice,
}: {
  farmName: string
  onNotice: (text: string) => void
}) {
  const today = new Date().toISOString().slice(0, 10)
  const [role, setRole] = useState<ReportRole | null>(null)
  const [editingReport, setEditingReport] = useState(false)
  const [sectionsByRole, setSectionsByRole] =
    useState<Record<ReportRole, ReportSection[]>>({
      Gerencia: [
        "Indicadores principales",
        "Mortalidad por lote",
        "Partos por mes",
      ],
      Veterinario: ["Indicadores principales", "Mortalidad por lote"],
      Producción: ["Indicadores principales", "Partos por mes"],
    })
  const [startDate, setStartDate] = useState(`${today.slice(0, 4)}-01-01`)
  const [endDate, setEndDate] = useState(today)
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
  const activeSections = role ? sectionsByRole[role] : []
  const daysInPeriod = Math.max(
    1,
    Math.round(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        86_400_000,
    ),
  )
  const periodAdjustment = (daysInPeriod % 7) / 10
  const mortalityData: ChartPoint[] = [
    { label: "PR-11", value: 1.7 + periodAdjustment / 5 },
    { label: "PR-17", value: 2.4 + periodAdjustment / 4 },
    { label: "LV-08", value: 1 + periodAdjustment / 6 },
    { label: "LV-09", value: 2.8 + periodAdjustment / 3 },
    { label: "PR-15", value: 2.1 + periodAdjustment / 5 },
  ]
  const birthsData: ChartPoint[] = [
    { label: "Ene", value: 16 + Math.round(periodAdjustment) },
    { label: "Feb", value: 19 },
    { label: "Mar", value: 14 + Math.round(periodAdjustment * 2) },
    { label: "Abr", value: 22 },
    { label: "May", value: 20 },
    { label: "Jun", value: 24 + Math.round(periodAdjustment) },
  ]

  if (!role) {
    return (
      <div className="connected-tool-page reports-page">
        <header className="page-header connected-page-header">
          <div>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <Icon name="chevron" size={14} />
              <span>{farmName}</span>
              <Icon name="chevron" size={14} />
              <strong>Tableros</strong>
            </div>
            <h1>Tableros · {farmName}</h1>
            <p>Elige una plantilla de informe según tu rol</p>
          </div>
        </header>
        <div className="report-templates">
          <ReportTemplateCard
            role="Gerencia"
            icon="chart"
            description="Rentabilidad, producción y cumplimiento de metas."
            accent="#DCE8D9"
            onView={() => setRole("Gerencia")}
          />
          <ReportTemplateCard
            role="Veterinario"
            icon="syringe"
            description="Mortalidad, sanidad y desempeño reproductivo."
            accent="#DDEADB"
            onView={() => setRole("Veterinario")}
          />
          <ReportTemplateCard
            role="Producción"
            icon="growth"
            description="Lotes, pesos, conversión y movimientos."
            accent="#F9E4D7"
            onView={() => setRole("Producción")}
          />
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
                setRole(null)
              }}
            >
              Tableros
            </button>
            <Icon name="chevron" size={14} />
            <strong>Informe de {role}</strong>
          </div>
          <div className="report-title-line">
            <div>
              <div>
                <h1>Informe de {role}</h1>
                <span className="status neutral">
                  {editingReport ? "Edición" : "Solo lectura"}
                </span>
              </div>
              <p>
                {farmName} · {formatDate(new Date(`${startDate}T12:00:00`))} al{" "}
                {formatDate(new Date(`${endDate}T12:00:00`))}
              </p>
            </div>
            <div className="header-actions">
              <button
                className="button secondary"
                onClick={() => setEditingReport(!editingReport)}
              >
                <Icon name="edit" size={17} />
                {editingReport ? "Terminar edición" : "Editar"}
              </button>
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
                      setSectionsByRole({
                        ...sectionsByRole,
                        [role]: checked
                          ? activeSections.filter(
                              (name) => name !== section.name,
                            )
                          : [...activeSections, section.name],
                      })
                    }
                  />
                  <span>
                    <Icon name={section.icon} size={20} />
                  </span>
                  <div>
                    <strong>{section.name}</strong>
                    <p>{section.description}</p>
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
                  63,6 % <small>· meta 90 %</small>
                </strong>
                <p>Requiere atención</p>
              </div>
              <div className="kpi-positive">
                <span>Mortalidad</span>
                <strong>
                  1,8 % <small>· meta 2,5 %</small>
                </strong>
                <p>Meta cumplida</p>
              </div>
              <div className="kpi-positive">
                <span>Lechones destetados</span>
                <strong>
                  11,9 <small>· meta 11,5</small>
                </strong>
                <p>Meta superada</p>
              </div>
              <div className="kpi-warning">
                <span>Conversión alimenticia</span>
                <strong>
                  1,64 <small>· meta 1,60</small>
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

export default function App() {
  const [farms, setFarms] = useState(initialFarms)
  const [lots, setLots] = useState(initialLots)
  const [loading, setLoading] = useState(true)
  const [cycleLoading, setCycleLoading] = useState(false)
  const [modal, setModal] = useState<"add" | "edit" | null>(null)
  const [lotModal, setLotModal] = useState(false)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const [editing, setEditing] = useState<Farm | null>(null)
  const [deleting, setDeleting] = useState<Farm | null>(null)
  const [toast, setToast] = useState("")
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
    useState<"home" | "farmSummary" | "cycle" | "lot" | "breeding" | "reproducer" | "inventory" | "porciTable" | "dashboards" | "calendar" | "settings">(
      "home",
    )
  const [selectedFarm, setSelectedFarm] = useState<Farm>(initialFarms[0])
  const [activeCycle, setActiveCycle] = useState<ProductionCycle>("Precebo")
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850)
    return () => window.clearTimeout(timer)
  }, [])
  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(""), 3000)
    return () => window.clearTimeout(timer)
  }, [toast])

  const totalAnimals = useMemo(
    () =>
      farms
        .reduce((sum, farm) => sum + farm.animals, 0)
        .toLocaleString("es-CO"),
    [farms],
  )
  const alertCounts: Record<string, number> = {
    "Plantel reproductivo": selectedFarm.cycles.includes("Plantel reproductivo")
      ? initialBreedingAlerts.length
      : 0,
    Inventario: (inventoryAttentionByFarm[selectedFarm.id] ?? []).length,
    PorciTabla:
      ({ 1: 2, 2: 1, 3: 2 } as Record<number, number>)[selectedFarm.id] ?? 0,
    Tableros: 0,
    Calendario:
      ({ 1: 2, 2: 1, 3: 2 } as Record<number, number>)[selectedFarm.id] ?? 0,
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
      setCycleLoading(true)
      window.setTimeout(() => setCycleLoading(false), 650)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  const navigate = (label: string) => {
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
      setPage("dashboards")
      setSelectedLot(null)
    } else if (label === "Calendario") {
      setPage("calendar")
      setSelectedLot(null)
    } else if (label === "Ajustes") {
      setPage("settings")
      setSelectedLot(null)
    } else if (label === "Precebo" || label === "Levante") {
      setActiveCycle(label)
      setPage("cycle")
      setSelectedLot(null)
      setCycleLoading(true)
      window.setTimeout(() => setCycleLoading(false), 650)
    }
    setMobileOpen(false)
  }
  const openTool = (farm: Farm, tool: string) => {
    setSelectedFarm(farm)
    navigate(tool)
  }
  const changeFarm = (farm: Farm) => {
    setSelectedFarm(farm)
    setSelectedLot(null)
    setPage("farmSummary")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const saveLot = (draft: LotDraft) => {
    const females = Number(draft.females) || 0
    const males = Number(draft.males) || 0
    const initialAnimals = females + males
    const totalWeight = Number(draft.totalWeight.replace(",", ".")) || 0
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
        currentAnimals: initialAnimals,
        averageWeight: initialAnimals ? totalWeight / initialAnimals : 0,
        mortality: 0,
        mortalityGoal: activeCycle === "Precebo" ? 2.5 : 2,
        gpd: 0,
      },
      ...lots,
    ])
    setLotModal(false)
    setToast("Lote creado")
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
    setFarms((current) =>
      current.map((farm) =>
        farm.id === selectedFarm.id
          ? {
              ...farm,
              alerts: items.length,
              urgent: items[0]?.title ?? "Todo está al día",
            }
          : farm,
      ),
    )
    setSelectedFarm((current) => ({
      ...current,
      alerts: items.length,
      urgent: items[0]?.title ?? "Todo está al día",
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
                  : page === "calendar"
                    ? "Calendario"
                    : page === "settings"
                      ? "Ajustes"
                      : activeCycle

  return (
    <div className="app-shell">
      <Sidebar
        farms={farms}
        selectedFarm={selectedFarm}
        isHome={page === "home"}
        accountOpen={accountOpen}
        setAccountOpen={setAccountOpen}
        active={activeNavigation}
        onNavigate={navigate}
        onSelectFarm={changeFarm}
        onLogout={() => setToast("Sesión cerrada")}
        alertCounts={alertCounts}
      />
      <MobileNavigation
        farms={farms}
        selectedFarm={selectedFarm}
        isHome={page === "home"}
        open={mobileOpen}
        setOpen={setMobileOpen}
        active={activeNavigation}
        onNavigate={navigate}
        onSelectFarm={changeFarm}
        alertCounts={alertCounts}
        onLogout={() => {
          setMobileOpen(false)
          setToast("Sesión cerrada")
        }}
      />
      <main>
        {(page === "home" || page === "cycle") && (
          <Header
            page={page}
            cycle={activeCycle}
            farmName={selectedFarm.name}
            onAdd={() => {
              setEditing(null)
              setModal("add")
            }}
            onCreateLot={() => setLotModal(true)}
            onVoice={() => setVoiceOpen(true)}
          />
        )}
        {page === "home" ? (
          <>
            {!loading && farms.length > 0 && (
              <div className="summary-line">
                <span>
                  <strong>{farms.length}</strong> granjas activas
                </span>
                <span className="summary-dot" />
                <span>
                  <strong>{totalAnimals}</strong> animales registrados
                </span>
              </div>
            )}
            {loading ? (
              <Skeletons />
            ) : farms.length ? (
              <div className="farm-grid">
                {farms.map((farm) => (
                  <FarmCard
                    key={farm.id}
                    farm={farm}
                    onEdit={() => openEdit(farm)}
                    onSummary={() => changeFarm(farm)}
                    onCycle={(cycle) => openCycle(farm, cycle)}
                    onTool={(tool) => openTool(farm, tool)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onAdd={() => setModal("add")} />
            )}
          </>
        ) : page === "farmSummary" ? (
          <FarmSummaryPage
            farm={selectedFarm}
            lots={lots}
            inventoryAttention={inventoryAttentionByFarm[selectedFarm.id] ?? []}
            onNavigate={navigate}
            onCycle={(cycle) => openCycle(selectedFarm, cycle)}
          />
        ) : page === "cycle" ? (
          <LotsList
            cycle={activeCycle}
            lots={lots.filter((lot) => lot.farmId === selectedFarm.id)}
            loading={cycleLoading}
            onCreate={() => setLotModal(true)}
            onUpdate={(updated) =>
              setLots(
                lots.map((lot) => (lot.id === updated.id ? updated : lot)),
              )
            }
            onDelete={(deleted) =>
              setLots(lots.filter((lot) => lot.id !== deleted.id))
            }
            onNotice={setToast}
            onOpenLot={(lot) => {
              setSelectedLot(lot)
              setActiveCycle(lot.cycle)
              setPage("lot")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        ) : page === "breeding" ? (
          <BreedingPage
            key={selectedFarm.id}
            farmName={selectedFarm.name}
            onNotice={setToast}
          />
        ) : page === "reproducer" ? (
          <ReproducerPage
            key={selectedFarm.id}
            farmName={selectedFarm.name}
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
          <PorciTablePage farmName={selectedFarm.name} />
        ) : page === "dashboards" ? (
          <DashboardsPage farmName={selectedFarm.name} onNotice={setToast} />
        ) : page === "calendar" ? (
          <CalendarPage farm={selectedFarm} onNotice={setToast} />
        ) : page === "settings" ? (
          <SettingsPage
            farms={farms}
            selectedFarm={selectedFarm}
            onNotice={setToast}
          />
        ) : selectedLot ? (
          <LotDetail
            lot={selectedLot}
            farmName={selectedFarm.name}
            onBack={() => setPage("cycle")}
            onUpdate={(updated) => {
              setSelectedLot(updated)
              setLots(
                lots.map((lot) => (lot.id === updated.id ? updated : lot)),
              )
            }}
            onDelete={() => {
              setLots(lots.filter((lot) => lot.id !== selectedLot.id))
              setSelectedLot(null)
              setPage("cycle")
              setToast("Lote eliminado")
            }}
            onNotice={setToast}
          />
        ) : (
          <LotsList
            cycle={activeCycle}
            lots={lots.filter((lot) => lot.farmId === selectedFarm.id)}
            loading={false}
            onCreate={() => setLotModal(true)}
            onUpdate={() => {}}
            onDelete={() => {}}
            onNotice={setToast}
            onOpenLot={() => {}}
          />
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
