# Plan de implementación: flujo #1 · Precebo y Levante

## 1. Objetivo y alcance acordado

Actualizar el flujo actual de Precebo/Levante en la aplicación React existente, conservando su navegación y lenguaje visual, para resolver P1–P7 del PDF.

Decisiones confirmadas:

- El cambio se aplica al flujo actual, no a una página paralela.
- El campo numérico único se adopta en todos los formularios de la aplicación.
- El código del lote es único dentro de cada granja; otra granja puede reutilizarlo.
- “Registrar compra” empieza preguntando “Animales” o “Alimento e insumos”.
- Campos aprobados:
  - Animales: fecha, responsable, proveedor, hembras, machos, peso total y valor.
  - Alimento e insumos: fecha, responsable, proveedor, categoría, producto, cantidad, unidad, valor y factura.
  - Solo las compras de animales modifican las cifras de animales del lote.

No se añadirá un backend: el alcance sigue el modelo de estado del frontend actual. Sí se reorganizará el estado para que todos los componentes de lote lean la misma fuente.

## 2. Archivos y límites técnicos

Archivos actuales relevantes:

- `src/App.tsx`: navegación, modelos, formularios, tarjetas, tabla y detalle de lote.
- `src/index.css`: estilos globales, formularios, pestañas y breakpoints.

Nuevos módulos recomendados:

- `src/components/NumericField.tsx`: único campo numérico.
- `src/lib/number-format.ts`: análisis y formato colombiano, sin dependencias de React.
- `src/domain/lot-calculations.ts`: cálculo único de cifras del lote.
- Mantener los componentes de pantalla en `App.tsx` para no convertir esta entrega en una refactorización general.

No se iniciará otro servidor. Se usará el servidor supervisado existente.

## 3. P1 · Campo numérico único

### 3.1 Contrato del componente

Crear `NumericField` como componente controlado:

```ts
type NumericFieldProps = {
  value: number | null
  onValueChange: (value: number | null) => void
  unit?: string
  currency?: boolean
  decimals?: number
  min?: number
  max?: number
  required?: boolean
  label: string
  error?: string
  onValidityChange?: (valid: boolean) => void
}
```

Comportamiento:

- Mientras tiene foco conserva el texto que escribe la persona.
- Al perder foco:
  - convierte a `number`;
  - llama `onValueChange`;
  - presenta el valor con `Intl.NumberFormat("es-CO")`.
- Unidad dentro del control:
  - sufijo derecho para `kg`, `animales`, `ml`, `L`, `%`, `ítems`, etc.;
  - pesos con prefijo `$` para respetar el ejemplo exacto `$ 9.500.000`.
- Los campos enteros usan `decimals={0}` y rechazan fracciones en lugar de redondearlas.
- Valores negativos se rechazan cuando `min={0}`.
- `aria-invalid`, asociación del mensaje mediante `aria-describedby` y foco visible.

### 3.2 Reglas de análisis

Implementar una función pura `parseColombianNumber`:

- `90,5` → `90.5`.
- `90.5` → `90.5`, nunca `905`.
- `1.250,5` → `1250.5`.
- `9.500.000` → `9500000`.
- Si aparecen coma y punto, el último separador es el decimal y los anteriores son agrupadores.
- Con un solo punto:
  - 1 o 2 cifras posteriores se interpretan como decimal;
  - 3 cifras posteriores se interpretan como miles;
  - varios puntos se interpretan como agrupación de miles solo si los grupos son válidos.
- Letras, separadores repetidos inválidos, infinito, `NaN` y valores fuera del rango producen error.
- Mensaje único: **“Escribe un número, por ejemplo 90,5”.**

### 3.3 Migración transversal

Reemplazar campos numéricos ad hoc en:

- Crear/editar lote: hembras, machos, peso inicial, peso objetivo.
- Mortalidad: cantidad.
- Sanidad: dosis.
- Compras y ventas del lote.
- Parto: vivos, muertos y momificados.
- Compra de inventario y conteo físico.
- PorciTabla: cantidades de producto y agua.
- Ajustes de alimentación que sean editables.
- Cualquier otro `inputMode="numeric"` o `inputMode="decimal"` localizado durante la implementación.

Eliminar conversiones locales con `Number(...)`, `replace(",", ".")` y expresiones regulares duplicadas.

## 4. P2 · Fuente única de cifras del lote

### 4.1 Modelo de registros

Elevar fuera de `LotDetail` los historiales que hoy son estado local. Mantener en `App` una estructura por lote:

```ts
type LotLedger = {
  mortalities: MortalityRecord[]
  purchases: PurchaseRecord[]
  sales: SaleRecord[]
  healthHistory: HealthHistoryRecord[]
}

type LotLedgerById = Record<number, LotLedger>
```

Todos los registros llevan:

- `id`;
- `lotId`;
- fecha en ISO para cálculo y formato `dd/mm/aaaa` al mostrar;
- responsable;
- `status: "active" | "annulled"`;
- `annulReason?`;
- fecha de creación/edición si hace falta ordenar.

Separar compras con unión discriminada:

```ts
type PurchaseRecord =
  | { kind: "animals"; females; males; totalWeight; value; ...base }
  | { kind: "supplies"; category; product; quantity; unit; value; invoice?; ...base }
```

### 4.2 Cálculo único

Crear `calculateLotFigures(lot, ledger)` y prohibir cálculos alternos en componentes.

Resultados:

- `initialFemales`, `initialMales`, `initialAnimals`.
- `purchasedFemales`, `purchasedMales`, `purchasedAnimals`, solo compras activas de tipo animales.
- `mortalityFemales`, `mortalityMales`, `mortalityCount`, suma de mortalidades activas.
- `soldFemales`, `soldMales`, `soldAnimals`, suma de ventas activas.
- `currentFemales = max(0, iniciales + compradas − mortalidad − ventas)`.
- `currentMales` con la misma fórmula.
- `currentAnimals = currentFemales + currentMales`.
- `mortalityRate = mortalityCount / (initialAnimals + purchasedAnimals) * 100`, evitando división por cero.
- `mortalityTone`:
  - verde: por debajo de 80 % de la meta;
  - naranja: desde 80 % de la meta hasta la meta inclusive;
  - rojo: sobre la meta.
- `mortalityLabel`: “Dentro de la meta”, “Cerca de la meta” o “Supera la meta”.

La frase “Mortalidad acumulada” se representa con:

- conteo acumulado = suma de registros;
- porcentaje derivado sobre los animales incorporados;
- meta y leyenda siempre visibles.

### 4.3 Uso obligatorio

Usar el resultado de `calculateLotFigures` en:

- tarjeta del lote;
- fila de la tabla;
- encabezado del detalle;
- Resumen;
- Mortalidad;
- Sanidad;
- Compras;
- Ventas y liquidación;
- validación de cantidades disponibles.

No actualizar manualmente `currentAnimals` ni `mortality` al guardar. Guardar el registro y dejar que el cálculo derivado actualice todo.

En lotes finalizados:

- sustituir “actuales” por “vendidos” en tarjeta, tabla, encabezado y resumen;
- mostrar `soldAnimals`;
- conservar iniciales y mortalidad para consulta.

### 4.4 Migración de datos de muestra

- Asociar los dos registros de mortalidad existentes al lote de demostración correspondiente.
- Para lotes cuyo agregado actual no tiene registros equivalentes, crear registros históricos de migración con sexo “Sin especificar”, de modo que las cifras iniciales no cambien visualmente.
- Las compras estáticas de concentrado se migran como `kind: "supplies"` y no cambian animales.
- Las ventas de animales solo se mantienen en lotes cuyos datos iniciales puedan cuadrar; eliminar filas estáticas contradictorias y sustituirlas por registros coherentes del ledger.

## 5. P3 · Navegación y ciclo de vida del lote

### 5.1 Entrada al detalle

- Toda la tarjeta es interactiva, con `role="button"`, `tabIndex={0}`, Enter y Espacio.
- Toda la fila de tabla abre el detalle.
- Los botones internos y el menú `⋮` detienen propagación para no abrir el detalle accidentalmente.
- Eliminar la acción redundante “Ver” tanto del menú de tarjeta/fila como del menú del encabezado del detalle.

### 5.2 Editar

- `CreateLotModal` recibe `lot?: Lot`.
- En edición precarga identificación, fecha, cantidades, pesos, origen, alimento y notas.
- El título y CTA cambian a “Editar lote” / “Guardar cambios”.
- Excluir el lote actual de la validación de código duplicado.
- Guardar actualiza el lote existente y conserva su ledger.

### 5.3 Finalizar y deshacer

- “Finalizar lote” abre confirmación.
- Campos: fecha de cierre obligatoria, precargada con hoy, máximo hoy; responsable obligatorio, precargado con “Andrés Mejía”.
- Al confirmar: `status = "Finalizado"` y `closedAt`.
- Mostrar aviso con acción “Deshacer” durante 5 segundos.
- “Deshacer” restaura estado activo y elimina `closedAt`.
- El menú mantiene separación visual entre finalizar y eliminar.

### 5.4 Pestañas

Dejar exactamente:

1. Resumen
2. Mortalidad
3. Sanidad
4. Compras
5. Ventas y liquidación

Cambios:

- Eliminar `Identificación` como pestaña.
- Eliminar `Liquidación` independiente.
- Mover identificación a una tarjeta “Datos del lote” al final de Resumen.
- “Ventas y liquidación” contiene historial de ventas y resumen económico.

La tarjeta “Datos del lote” muestra al menos código, ciclo, fecha de ingreso, cantidades iniciales por sexo, peso inicial, peso objetivo, origen, alimento y observaciones.

## 6. P4 · Sanidad

### 6.1 Aplicar

- Acción individual o múltiple abre un mismo formulario.
- Campos obligatorios:
  - fecha real, hoy por defecto, máximo hoy;
  - responsable, “Andrés Mejía” por defecto;
  - producto, precargado con el tratamiento cuando corresponda;
  - lote del producto.
- Al aplicar:
  - pasar tratamiento(s) al historial con estado “Aplicada”;
  - conservar nombre, fecha programada, fecha real, responsable, producto y lote;
  - mostrar aviso “Tratamiento aplicado” con “Deshacer”.
- Deshacer elimina el registro de historial y restaura el tratamiento en el calendario.

### 6.2 Omitir

- “Omitir” abre confirmación.
- Motivo obligatorio, con error debajo del campo.
- Al confirmar:
  - mover al historial con estado “Omitida” y motivo;
  - no borrar el tratamiento;
  - mostrar aviso con “Deshacer”.

### 6.3 Historial y layout

- Añadir “Historial sanitario” debajo del calendario.
- Mostrar fecha, tratamiento, estado, producto/lote, responsable y motivo cuando aplique.
- Fecha en columna fija izquierda con ancho reservado; nombre y contenido nunca se superponen.
- Estados aplicados/omitidos no participan como pendientes.

## 7. P5 · Reglas comunes de formularios y filas

### 7.1 Valores predeterminados y fechas

En Crear/editar lote y registros de Mortalidad, Sanidad, Compras, Ventas y cierre:

- fecha obligatoria, precargada con hoy;
- responsable obligatorio, precargado con “Andrés Mejía”;
- `DatePicker` recibe `max=today`;
- el submit repite la validación para impedir fechas futuras aunque se altere el estado.

### 7.2 Código único

- Antes de guardar, comparar código normalizado con los lotes de la misma granja.
- Normalización: `trim()` y comparación sin distinguir mayúsculas/minúsculas.
- Error exacto: **“Ya hay un lote con este código”.**
- En edición excluir el ID actual.

### 7.3 Errores y foco

- Cada campo guarda su error específico.
- En submit:
  1. validar todo;
  2. renderizar mensajes debajo de cada campo;
  3. enfocar y desplazar suavemente al primer `[aria-invalid="true"]`.
- El campo numérico inválido usa el mensaje exacto de P1.
- La ayuda “Meta de la granja” permanece gris y fuera de los contenedores de error.

### 7.4 Menús de filas

Cada fila de Mortalidad, Compras y Ventas tiene `⋮` con:

- Editar: abre el formulario correspondiente precargado.
- Anular: abre modal con motivo obligatorio.

Al anular:

- la fila permanece en el historial con etiqueta “Anulado” y motivo;
- el registro deja de participar en cálculos;
- las cifras del lote se recalculan inmediatamente.

Los menús detienen propagación para no activar la fila o la tarjeta.

## 8. P6 · Compras

### 8.1 Primer paso

“Registrar compra” abre un selector con dos tarjetas:

- Animales.
- Alimento e insumos.

Permitir volver al selector sin perder datos solo cuando el formulario esté vacío; si hay datos, usar la confirmación existente de salida sin guardar.

### 8.2 Compra de animales

Campos:

- fecha y responsable obligatorios, precargados;
- proveedor;
- hembras y machos;
- total de animales calculado;
- peso total;
- valor total en pesos.

Validaciones:

- al menos un animal;
- cantidades enteras y no negativas;
- peso y valor mayores que cero;
- actualiza cifras del lote al guardar.

### 8.3 Alimento e insumos

Campos:

- fecha y responsable obligatorios, precargados;
- proveedor;
- categoría;
- producto;
- cantidad;
- unidad;
- valor total;
- foto de factura opcional.

No cambia los animales actuales.

### 8.4 Historial

Añadir columna “Tipo” con “Animales” o “Alimento e insumos”.

Las columnas restantes muestran contenido contextual:

- animales: hembras, machos, total, peso y valor;
- alimento/insumos: producto, cantidad/unidad, valor y factura.

Todas las filas ofrecen Editar y Anular.

## 9. Ventas y liquidación

Mantener el formulario actual, migrándolo al nuevo modelo:

- fecha y responsable precargados y obligatorios;
- comprador;
- hembras y machos;
- total calculado;
- peso total;
- valor total en pesos.

Validar por sexo y total contra animales disponibles.

Guardar o editar recalcula actuales/vendidos y liquidación.

La sección “Ventas y liquidación” muestra:

- historial con Tipo implícito “Venta”;
- animales vendidos;
- peso vendido;
- ingresos;
- promedio por animal y por kg;
- menús Editar/Anular.

## 10. P7 · Resoluciones de 768 a 1100 px

Añadir un breakpoint dedicado `@media (min-width: 768px) and (max-width: 1100px)`:

- tarjetas de Resumen en 2 columnas; última tarjeta puede ocupar dos columnas cuando quede sola;
- cifras clave con `min-width: 0`, sin `text-overflow: ellipsis` ni `white-space: nowrap`;
- unidades y metas pueden pasar a segunda línea sin cortar la cifra;
- tablas conservan scroll horizontal únicamente en su contenedor;
- pestañas en una fila desplazable.

Crear un contenedor de pestañas con `ref`:

- detectar `scrollWidth > clientWidth`;
- mostrar flecha derecha solo cuando hay contenido oculto a la derecha;
- al pulsar, desplazar aproximadamente 70 % del ancho visible;
- ocultarla al llegar al final;
- recalcular en `resize` y al cambiar de lote/pestañas;
- conservar acceso por teclado y `aria-label="Ver más pestañas"`.

## 11. Estado de avisos y “Deshacer”

Cambiar el toast actual de `string` a:

```ts
type ToastState = {
  message: string
  actionLabel?: string
  onAction?: () => void
}
```

- Duración normal: 3 segundos.
- Con “Deshacer”: 5 segundos.
- Acciones con deshacer:
  - finalizar lote;
  - aplicar tratamiento;
  - omitir tratamiento.
- Ejecutar la acción cancela el temporizador y restaura el estado anterior exacto.

## 12. Orden de implementación

1. Extraer funciones puras de formato numérico y cálculo de lote.
2. Crear `NumericField` y migrar primero Crear lote.
3. Introducir `LotLedgerById` y migrar datos de muestra.
4. Reemplazar todos los cálculos visuales por `calculateLotFigures`.
5. Completar navegación de tarjeta/fila, edición y finalización.
6. Reducir pestañas y mover Datos del lote.
7. Implementar Sanidad e historial con deshacer.
8. Implementar selector y formularios de compras.
9. Migrar ventas/liquidación.
10. Añadir menús Editar/Anular y validaciones comunes.
11. Migrar el resto de campos numéricos de la aplicación.
12. Aplicar breakpoint 768–1100 y control de desbordamiento de pestañas.
13. Revisar todas las superficies del lote contra la fuente única.

## 13. Verificación

### Comandos

Ejecutar en este orden:

```bash
pnpm format
pnpm exec tsc --noEmit
pnpm build
```

No iniciar otro servidor.

### Casos numéricos obligatorios

- `12` y `26` suman 38, nunca `1226`.
- `90,5` y `90.5` guardan `90.5`.
- `1.250,5` guarda `1250.5`.
- `$ 9.500.000` guarda `9500000`.
- `9.500.000` se muestra como `$ 9.500.000` en Valor total.
- `abc`, `1,,2`, negativo no permitido y decimal en animales muestran el error exacto.
- Blur formatea; volver a enfocar permite editar sin perder precisión.

### Casos de cifras

- Registrar compra de 2 hembras y 3 machos suma 5 actuales.
- Registrar mortalidad de 1 resta 1.
- Registrar venta de 2 resta 2.
- Anular cada registro revierte su impacto.
- Editar cantidades recalcula tarjeta, tabla, encabezado y pestañas simultáneamente.
- Lote finalizado muestra vendidos, no actuales.
- Leyenda y color de mortalidad concuerdan con la meta.

### Navegación

- Clic y teclado en tarjeta/fila abren detalle.
- Menú `⋮` no abre el detalle.
- No existe “Ver” en menús.
- Editar precarga el formulario.
- Código duplicado en la misma granja falla; en otra granja se permite.
- Finalizar y Deshacer restauran correctamente.
- Solo existen las cinco pestañas acordadas.

### Sanidad

- Fecha futura bloqueada.
- Aplicar exige responsable, producto y lote.
- Omitir exige motivo.
- Aplicada/Omitida aparece en historial y desaparece de pendientes.
- Deshacer restaura el pendiente.
- Fecha y nombre no se superponen.

### Formularios e historiales

- Todos los registros empiezan con hoy y Andrés Mejía.
- Submit enfoca el primer error.
- Cada error aparece bajo su campo.
- Editar y Anular funcionan en Mortalidad, Compras y Ventas.
- Registros anulados permanecen visibles y no afectan cálculos.
- Compra muestra selector de tipo y columna Tipo.

### Responsive

Probar al menos 768, 900, 1024 y 1100 px:

- KPI completos y sin elipsis.
- Resumen en columnas.
- Flecha de pestañas aparece solo cuando corresponde.
- Tablas no rompen el layout general.

## 14. Criterio de terminado

El flujo se considera cerrado cuando:

- no existe ningún campo numérico ad hoc;
- todas las cifras del lote provienen de `calculateLotFigures`;
- guardar, editar o anular un registro actualiza todas las superficies;
- los cinco tabs, Sanidad, Compras y Ventas cumplen los flujos descritos;
- no se aceptan fechas futuras ni códigos duplicados por granja;
- la experiencia de 768–1100 px pasa la matriz responsive;
- formato, TypeScript y build terminan con código 0.
