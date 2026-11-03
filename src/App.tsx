import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react"

type IconName = "home" | "sow" | "boar" | "piglet" | "growth" | "box" | "table" | "chart" | "calendar" | "settings" | "mic" | "plus" | "edit" | "pin" | "alert" | "pig" | "trend" | "chevron" | "logout" | "menu" | "x" | "check" | "trash" | "arrow" | "dots" | "list" | "grid" | "weight" | "clock" | "info"

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
    urgent: "Vacunación vence hoy",
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
]

type NavigationItem = {
  label: string
  icon: IconName
}

const navigation: NavigationItem[] = [
  { label: "Inicio", icon: "home" },
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
  accountOpen,
  setAccountOpen,
  active,
  onNavigate,
}: {
  accountOpen: boolean
  setAccountOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
}) {
  return (
    <aside className="sidebar">
      <Logo />
      <nav aria-label="Navegación principal">
        {navigation.map((item) => (
          <button
            className={`nav-item ${item.label === active ? "active" : ""}`}
            key={item.label}
            onClick={() => onNavigate(item.label)}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="account-wrap">
        {accountOpen && (
          <div className="account-menu">
            <div className="account-menu-heading">Cuenta</div>
            <button>
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
    </aside>
  )
}

function MobileNavigation({
  open,
  setOpen,
  active,
  onNavigate,
}: {
  open: boolean
  setOpen: (value: boolean) => void
  active: string
  onNavigate: (label: string) => void
}) {
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
          <div className="mobile-user">
            <span className="avatar">AM</span>
            <span>
              <strong>Andrés Mejía</strong>
              <small>Operario de granja</small>
            </span>
          </div>
          <nav aria-label="Menú móvil">
            {navigation.map((item) => (
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
              </button>
            ))}
          </nav>
          <button className="mobile-logout">
            <Icon name="logout" size={18} />
            Cerrar sesión
          </button>
        </div>
      )}
      <nav className="bottom-nav" aria-label="Navegación móvil">
        {navigation.slice(0, 4).map((item) => (
          <button
            className={item.label === active ? "active" : ""}
            key={item.label}
            onClick={() => onNavigate(item.label)}
          >
            <Icon name={item.icon} size={20} />
            <span>
              {item.label === "Plantel reproductivo" ? "Plantel" : item.label}
            </span>
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
  onAdd: () => void
  onCreateLot: () => void
}

function Header({ page, cycle, onAdd, onCreateLot }: HeaderProps) {
  return (
    <header className="page-header">
      <div>
        <div className="breadcrumbs">
          <span>Inicio</span>
          {page === "cycle" && (
            <>
              <Icon name="chevron" size={14} />
              <span>Granja La Esperanza</span>
              <Icon name="chevron" size={14} />
              <strong>{cycle}</strong>
            </>
          )}
        </div>
        <h1>{page === "home" ? "Inicio" : cycle}</h1>
        {page === "home" && <p>Resumen de tus granjas y operaciones</p>}
      </div>
      {page === "home" && (
        <div className="header-actions">
          <button className="button secondary voice">
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
  onCycle,
}: {
  farm: Farm
  onEdit: () => void
  onCycle: (cycle: Cycle) => void
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
            <button key={item.label}>
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
          <circle cx="133" cy="29" r="9" fill="#F4B5B3" />
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
  title: string
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
  return (
    <>
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
      {confirmExit && (
        <DialogShell
          title="¿Salir sin guardar?"
          onClose={() => setConfirmExit(false)}
          size="small"
        >
          <div className="confirm-content">
            <p>Perderás lo que escribiste.</p>
          </div>
          <div className="modal-actions">
            <button className="button secondary" onClick={onClose}>
              Salir sin guardar
            </button>
            <button
              className="button primary"
              onClick={() => setConfirmExit(false)}
            >
              Seguir editando
            </button>
          </div>
        </DialogShell>
      )}
    </>
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
        Ver lote
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
  const mortalityOk = lot.mortality <= lot.mortalityGoal
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
        Día {lot.day} del ciclo
      </div>
      <div className="lot-stats">
        <div>
          <span>Animales</span>
          <strong>
            {lot.currentAnimals} / {lot.initialAnimals} <em>animales</em>
          </strong>
          <small>actuales / iniciales</small>
        </div>
        <div>
          <span>Peso promedio</span>
          <strong>{formatDecimal(lot.averageWeight)} kg</strong>
          <small>por animal</small>
        </div>
        <div className={mortalityOk ? "mortality-ok" : "mortality-high"}>
          <span>Mortalidad</span>
          <strong>{formatDecimal(lot.mortality)} %</strong>
          <small>meta {formatDecimal(lot.mortalityGoal)} %</small>
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
            <th>GPD (g/día)</th>
            <th>Mortalidad</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => (
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
              <td>{lot.day}</td>
              <td>{lot.females}</td>
              <td>{lot.males}</td>
              <td>
                {lot.currentAnimals} / {lot.initialAnimals}
              </td>
              <td>{formatDecimal(lot.averageWeight)}</td>
              <td>{lot.gpd.toLocaleString("es-CO")}</td>
              <td
                className={
                  lot.mortality <= lot.mortalityGoal
                    ? "mortality-ok"
                    : "mortality-high"
                }
              >
                {formatDecimal(lot.mortality)} %
              </td>
            </tr>
          ))}
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
  const cycleLots = lots.filter((lot) => lot.cycle === cycle)
  const activeLots = cycleLots.filter((lot) => lot.status === "Activo")
  const finishedLots = cycleLots.filter((lot) => lot.status === "Finalizado")
  const action = (kind: "view" | "edit" | "finish" | "delete", lot: Lot) => {
    setMenuOpen(null)
    if (kind === "finish") {
      onUpdate({ ...lot, status: "Finalizado" })
      onNotice("Lote finalizado")
    } else if (kind === "delete") {
      onDelete(lot)
      onNotice("Lote eliminado")
    } else if (kind === "edit") {
      onNotice(`Edición de ${lot.code}`)
    } else {
      onOpenLot(lot)
    }
  }
  if (loading) return <LotSkeletons />
  if (!cycleLots.length) return <LotsEmpty cycle={cycle} onCreate={onCreate} />
  return (
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
  const attemptClose = () => (dirty ? setConfirmExit(true) : onClose())
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    if (!draft.code.trim() || !draft.entryDate) return
    onSave(draft)
  }
  return (
    <>
      <DialogShell
        title={`Crear lote de ${cycle}`}
        onClose={attemptClose}
        size="wide"
      >
        <form onSubmit={submit}>
          <div className="lot-form">
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
                  <input
                    type="date"
                    value={draft.entryDate}
                    onChange={(e) =>
                      setDraft({ ...draft, entryDate: e.target.value })
                    }
                    aria-invalid={submitted && !draft.entryDate}
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
                  <span>Hembras</span>
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
                  <span>Machos</span>
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
                      {females} + {males} = <b>{animals}</b>
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
                  <h3>Peso</h3>
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
                  <span>Peso objetivo (kg)</span>
                  <input
                    inputMode="decimal"
                    value={draft.targetWeight}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        targetWeight: e.target.value.replace(/[^\d,.]/g, ""),
                      })
                    }
                    placeholder={cycle === "Precebo" ? "32,0" : "110,0"}
                  />
                  <small>
                    <Icon name="info" size={13} />
                    Tomado de la meta de la granja · editable
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
                  <strong>Datos opcionales</strong>
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
              Crear lote
            </button>
          </div>
        </form>
      </DialogShell>
      {confirmExit && (
        <DialogShell
          title="¿Salir sin guardar?"
          onClose={() => setConfirmExit(false)}
          size="small"
        >
          <div className="confirm-content">
            <p>Perderás lo que escribiste.</p>
          </div>
          <div className="modal-actions">
            <button className="button secondary" onClick={onClose}>
              Salir sin guardar
            </button>
            <button
              className="button primary"
              onClick={() => setConfirmExit(false)}
            >
              Seguir editando
            </button>
          </div>
        </DialogShell>
      )}
    </>
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
    date: "12 mar 2026",
    quantity: 1,
    sex: "Macho",
    cause: "Aplastamiento",
    responsible: "Carlos Ríos",
  },
  {
    id: 2,
    date: "08 mar 2026",
    quantity: 1,
    sex: "Hembra",
    cause: "Bajo consumo",
    responsible: "Andrés Mejía",
  },
]

function LotDetailHeader({
  lot,
  menuOpen,
  onMenu,
  onBack,
  onEdit,
  onFinish,
  onDelete,
}: {
  lot: Lot
  menuOpen: boolean
  onMenu: () => void
  onBack: () => void
  onEdit: () => void
  onFinish: () => void
  onDelete: () => void
}) {
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
        <span>Granja La Esperanza</span>
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
            {lot.currentAnimals} / {lot.initialAnimals} animales · Día {lot.day}{" "}
            de {lot.cycle}
          </p>
        </div>
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
    </header>
  )
}

function SummaryTab({ lot }: { lot: Lot }) {
  const mortalityOk = lot.mortality <= lot.mortalityGoal
  const target = lot.cycle === "Precebo" ? 32 : 110
  return (
    <div className="tab-panel">
      <div className="detail-metrics">
        <div>
          <span>Animales</span>
          <strong>
            {lot.currentAnimals} <small>/ {lot.initialAnimals}</small>
          </strong>
          <p>actuales / iniciales</p>
        </div>
        <div>
          <span>Día del ciclo</span>
          <strong>{lot.day}</strong>
          <p>de {lot.cycle.toLowerCase()}</p>
        </div>
        <div>
          <span>Peso promedio</span>
          <strong>
            {formatDecimal(lot.averageWeight)} <small>kg</small>
          </strong>
          <p>objetivo {formatDecimal(target)} kg</p>
        </div>
        <div className={mortalityOk ? "metric-success" : "metric-danger"}>
          <span>Mortalidad</span>
          <strong>
            {formatDecimal(lot.mortality)} <small>%</small>
          </strong>
          <p>meta {formatDecimal(lot.mortalityGoal)} %</p>
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
          <div className="upcoming-list">
            <div>
              <span className="treatment-date">
                <b>18</b>MAR
              </span>
              <div>
                <strong>Refuerzo vacuna Circovirus</strong>
                <p>Para {lot.currentAnimals} animales · Vía intramuscular</p>
              </div>
            </div>
            <div>
              <span className="treatment-date">
                <b>25</b>MAR
              </span>
              <div>
                <strong>Desparasitación interna</strong>
                <p>Para {lot.currentAnimals} animales · Vía oral</p>
              </div>
            </div>
          </div>
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

function MortalityTab({ records }: { records: MortalityRecord[] }) {
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Mortalidad acumulada</span>
          <strong>2</strong>
          <p>animales</p>
        </div>
        <div>
          <span>Tasa del lote</span>
          <strong>1,7 %</strong>
          <p>meta 2,5 %</p>
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
      date: new Date(`${form.date}T12:00:00`).toLocaleDateString("es-CO", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      quantity: Number(form.quantity),
      sex: form.sex as "Hembra" | "Macho",
      cause: form.cause,
      responsible: form.responsible,
    })
  }
  return (
    <DialogShell title="Registrar mortalidad" onClose={onClose}>
      <form onSubmit={submit}>
        <div className="form-content mortality-form">
          <div className="available-banner">
            <Icon name="pig" size={20} />
            <span>Disponibles en el lote</span>
            <strong>{available}</strong>
          </div>
          <div className="form-grid">
            <label
              className={`field ${submitted && !form.date ? "has-error" : ""}`}
            >
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
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
          <button type="button" className="button secondary" onClick={onClose}>
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
}: {
  lot: Lot
  treatments: Treatment[]
  setTreatments: (items: Treatment[]) => void
}) {
  const [selected, setSelected] = useState<number[]>([])
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
            Calculado para los {lot.currentAnimals} animales reales del lote
          </p>
        </div>
        <button
          className="button secondary apply-selected"
          disabled={!selected.length}
          onClick={() => apply(selected)}
        >
          <Icon name="check" size={17} />
          Aplicar seleccionados ({selected.length})
        </button>
      </div>
      <div className="treatments-list">
        {treatments.map((item) => (
          <article
            className={`treatment-row ${item.applied ? "applied" : ""}`}
            key={item.id}
          >
            <label className="treatment-check">
              <input
                type="checkbox"
                disabled={item.applied}
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
                {item.method} · Para {lot.currentAnimals} animales · {item.date}
              </p>
            </div>
            {!item.applied && (
              <div className="treatment-actions">
                <button
                  className="text-button"
                  onClick={() =>
                    setTreatments(
                      treatments.map((treatment) =>
                        treatment.id === item.id
                          ? { ...treatment, date: "01 ABR", overdue: false }
                          : treatment,
                      ),
                    )
                  }
                >
                  Aplazar
                </button>
                <button
                  className="button primary"
                  onClick={() => apply([item.id])}
                >
                  Aplicar
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
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
  return (
    <DialogShell title="Registrar tratamiento" onClose={onClose} size="wide">
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
              <input placeholder="Ej. Vacuna Circovirus" />
            </label>
            <label className="field">
              <span>
                Fecha <em>* obligatorio</em>
              </span>
              <input type="date" />
            </label>
            <label className="field">
              <span>Producto</span>
              <input placeholder="Nombre comercial" />
            </label>
            <label className="field">
              <span>Vía de aplicación</span>
              <select>
                <option>Intramuscular</option>
                <option>Oral</option>
                <option>Subcutánea</option>
              </select>
            </label>
            <label className="field">
              <span>Dosis por animal</span>
              <input inputMode="decimal" placeholder="Ej. 2,0 ml" />
            </label>
            <label className="field">
              <span>Responsable</span>
              <input placeholder="Nombre del responsable" />
            </label>
          </div>
        </div>
        <div className="modal-actions large-actions">
          <button type="button" className="button secondary" onClick={onClose}>
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

function PurchasesTab() {
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
                <th>Valor total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08 mar 2026</td>
                <td>Concentrado iniciador</td>
                <td>NutriCampo</td>
                <td>420,0 kg</td>
                <td>$ 1.365.000</td>
              </tr>
              <tr>
                <td>25 feb 2026</td>
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

function SalesTab() {
  return (
    <div className="tab-panel">
      <div className="neutral-summary-cards">
        <div>
          <span>Animales vendidos</span>
          <strong>64</strong>
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
              <tr>
                <td>12 mar 2026</td>
                <td>Comercializadora del Norte</td>
                <td>32</td>
                <td>1.049,6</td>
                <td>$ 8.850</td>
                <td>$ 9.288.960</td>
              </tr>
              <tr>
                <td>03 mar 2026</td>
                <td>Porcícola Antioquia</td>
                <td>32</td>
                <td>1.036,8</td>
                <td>$ 8.805</td>
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
  onBack,
  onUpdate,
  onDelete,
  onNotice,
}: {
  lot: Lot
  onBack: () => void
  onUpdate: (lot: Lot) => void
  onDelete: () => void
  onNotice: (text: string) => void
}) {
  const [tab, setTab] = useState<LotTab>("Resumen")
  const [menuOpen, setMenuOpen] = useState(false)
  const [mortalityModal, setMortalityModal] = useState(false)
  const [treatmentModal, setTreatmentModal] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [records, setRecords] = useState(mortalityRecords)
  const [treatments, setTreatments] = useState<Treatment[]>([
    {
      id: 1,
      name: "Vacuna Mycoplasma",
      date: "10 MAR",
      method: "Intramuscular",
      overdue: true,
      applied: false,
    },
    {
      id: 2,
      name: "Refuerzo vacuna Circovirus",
      date: "18 MAR",
      method: "Intramuscular",
      overdue: false,
      applied: false,
    },
    {
      id: 3,
      name: "Desparasitación interna",
      date: "25 MAR",
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
      run: () => onNotice("Formulario de compra abierto"),
    },
    Ventas: {
      label: "Registrar venta",
      run: () => onNotice("Formulario de venta abierto"),
    },
  }
  const currentAction = action[tab]
  return (
    <>
      <LotDetailHeader
        lot={lot}
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
        {currentAction && (
          <div className="tab-action">
            {tab === "Mortalidad" && lot.currentAnimals === 0 && (
              <span>Este lote no tiene animales disponibles</span>
            )}
            <button
              className="button primary"
              onClick={currentAction.run}
              disabled={tab === "Mortalidad" && lot.currentAnimals === 0}
            >
              <Icon name="plus" size={18} />
              {currentAction.label}
            </button>
          </div>
        )}
      </div>
      {tab === "Resumen" && <SummaryTab lot={lot} />}
      {tab === "Mortalidad" && <MortalityTab records={records} />}
      {tab === "Sanidad" && (
        <HealthTab
          lot={lot}
          treatments={treatments}
          setTreatments={setTreatments}
        />
      )}
      {tab === "Compras" && <PurchasesTab />}
      {tab === "Ventas" && <SalesTab />}
      {(tab === "Liquidación" || tab === "Identificación") && (
        <EmptyDetailTab tab={tab} />
      )}
      {mortalityModal && (
        <MortalityModal
          available={lot.currentAnimals}
          onClose={() => setMortalityModal(false)}
          onSave={(record) => {
            setRecords([record, ...records])
            const currentAnimals = Math.max(
              0,
              lot.currentAnimals - record.quantity,
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

export default function App() {
  const [farms, setFarms] = useState(initialFarms)
  const [lots, setLots] = useState(initialLots)
  const [loading, setLoading] = useState(true)
  const [cycleLoading, setCycleLoading] = useState(false)
  const [modal, setModal] = useState<"add" | "edit" | null>(null)
  const [lotModal, setLotModal] = useState(false)
  const [editing, setEditing] = useState<Farm | null>(null)
  const [deleting, setDeleting] = useState<Farm | null>(null)
  const [toast, setToast] = useState("")
  const [page, setPage] = useState<"home" | "cycle" | "lot">("home")
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
    if (
      farm.name === "Granja La Esperanza" &&
      (cycle === "Precebo" || cycle === "Levante")
    ) {
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
    } else if (label === "Precebo" || label === "Levante") {
      setActiveCycle(label)
      setPage("cycle")
      setSelectedLot(null)
      setCycleLoading(true)
      window.setTimeout(() => setCycleLoading(false), 650)
    }
    setMobileOpen(false)
  }
  const saveLot = (draft: LotDraft) => {
    const females = Number(draft.females) || 0
    const males = Number(draft.males) || 0
    const initialAnimals = females + males
    const totalWeight = Number(draft.totalWeight.replace(",", ".")) || 0
    setLots([
      {
        id: Date.now(),
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

  return (
    <div className="app-shell">
      <Sidebar
        accountOpen={accountOpen}
        setAccountOpen={setAccountOpen}
        active={page === "home" ? "Inicio" : activeCycle}
        onNavigate={navigate}
      />
      <MobileNavigation
        open={mobileOpen}
        setOpen={setMobileOpen}
        active={page === "home" ? "Inicio" : activeCycle}
        onNavigate={navigate}
      />
      <main>
        {page !== "lot" && (
          <Header
            page={page}
            cycle={activeCycle}
            onAdd={() => {
              setEditing(null)
              setModal("add")
            }}
            onCreateLot={() => setLotModal(true)}
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
                    onCycle={(cycle) => openCycle(farm, cycle)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onAdd={() => setModal("add")} />
            )}
          </>
        ) : page === "cycle" ? (
          <LotsList
            cycle={activeCycle}
            lots={lots}
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
        ) : selectedLot ? (
          <LotDetail
            lot={selectedLot}
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
            lots={lots}
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
          onDelete={(farm) => setDeleting(farm)}
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
