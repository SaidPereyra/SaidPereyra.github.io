# Midnight Project - DESIGN_SYSTEM.md

## 1. Propósito del documento

Este documento define la identidad visual, reglas de UI y sistema de diseño de **Midnight Project**.

Debe usarse como guía obligatoria para implementar pantallas, componentes y estilos en React + TypeScript + Tailwind CSS.  
Codex debe leer este archivo antes de crear o modificar cualquier UI.

La regla principal es:

> No improvisar estilos por pantalla. Todo debe derivar de estos tokens, componentes y patrones.

---

## 2. Dirección visual aprobada

La propuesta visual generada por Stitch es buena como base general, pero debe ajustarse para producción.

### Se conserva

- Dark mode como experiencia principal.
- Estética nocturna / cyberpunk discreta.
- Uso de cyan, violeta y verde esmeralda como acentos.
- Layout desktop-first con sidebar, topbar y canvas central.
- Quick capture como elemento protagonista.
- Command palette estilo Raycast.
- Editor con sidebar de propiedades.
- Cards con borde sutil, fondos oscuros y glow controlado.
- Splash / boot screen con logo, progreso y mensajes tipo terminal.

### Se ajusta

- No usar imágenes remotas generadas por Stitch.
- No usar avatar de usuario en MVP, porque no hay login.
- No usar textos que prometan funcionalidades no existentes, como “decrypting vault data” si no hay cifrado.
- No saturar de glow; el glow solo se usa para foco, hover importante, primary action y splash.
- No usar nombres Material Design como base del diseño final si complican la semántica. Se mapearán a tokens propios estilo shadcn/ui.
- No usar `⌘K` como única referencia, porque el target inicial es Windows. Usar `Ctrl + K`.
- No usar icono `cruelty_free` como logo temporal final. Usar `logo-mark` o un placeholder de murciélago abstracto hasta tener asset final.
- No implementar light mode en MVP si retrasa. El sistema queda preparado, pero dark mode es el tema oficial de V1.

---

## 3. Personalidad visual

Midnight Project debe sentirse como:

- **Local-first knowledge vault**.
- **Dark premium desktop app**.
- **Raycast + Obsidian + Notion**, pero con identidad propia.
- **Cyberpunk discreto**, no gamer.
- **Nocturno, serio, elegante y técnico**.
- **Rápido y ordenado**, no pesado.
- **Misterioso, pero usable**.
- **Intimidante en marca, calmado en interfaz**.

### Palabras clave

```txt
midnight
vault
knowledge
capture
graph
terminal
focus
private
local
signal
night
```

### Evitar

```txt
gamer RGB
Halloween literal
gótico exagerado
notas estilo 2012
dashboard SaaS genérico
colores aleatorios
glow excesivo
fondos muy brillantes
UI infantil
```

---

## 4. Identidad de marca

### Nombre

```txt
Midnight Project
```

### Concepto de logo

Logo principal basado en:

- murciélago abstracto;
- posado sobre una rama fina;
- alas abiertas;
- silueta seria e intimidante;
- luna parcial detrás;
- el murciélago sobresale de la luna;
- no debe sentirse como círculo/badge cerrado;
- cyberpunk discreto;
- vectorizable.

### Usos del logo

| Uso | Variante recomendada |
|---|---|
| Splash / Boot screen | Logo completo: murciélago + luna + rama |
| App icon | Versión simplificada: murciélago + luna parcial |
| Sidebar | Mark simple, sin demasiado detalle |
| Favicon / 16px | Silueta reducida o ala abstracta |
| Monocromo | Una sola tinta, sin textura |

### Reglas

- El logo no debe tener ojos, dientes ni expresión caricaturesca.
- El logo no debe tener fondo obligatorio.
- Debe funcionar sobre fondo oscuro.
- Debe existir versión monocroma.
- Debe existir versión sin glow.
- En UI normal, usar logo pequeño y limpio.
- En splash, se permite glow sutil.

---

## 5. Paleta de color

La paleta parte de la propuesta de Stitch, pero se normaliza para uso en tokens semánticos.

### Colores base

| Nombre | Hex | Uso |
|---|---:|---|
| Night Black | `#020408` | Fondo más profundo / app shell |
| Background | `#05070D` | Fondo principal recomendado |
| Surface Lowest | `#0E0E10` | Paneles profundos |
| Surface | `#131315` | Superficie base |
| Surface Low | `#1C1B1D` | Cards y secciones |
| Surface | `#201F22` | Inputs / paneles medios |
| Surface High | `#2A2A2C` | Hover / elementos elevados |
| Surface Highest | `#353437` | Elementos activos secundarios |
| Surface Bright | `#39393B` | Bordes/highlight bajo |
| Border Muted | `#1E293B` | Borde frío oscuro |
| Border | `#3B494C` | Borde estándar |
| Outline | `#849396` | Texto auxiliar / borde visible |

### Texto

| Nombre | Hex | Uso |
|---|---:|---|
| Text Primary | `#E5E1E4` | Texto principal |
| Text Secondary | `#BAC9CC` | Texto secundario |
| Text Muted | `#849396` | Metadatos |
| Text Faint | `#6B7280` | Placeholders/deshabilitado |
| Inverse Text | `#001F24` | Texto sobre cyan |

### Acentos

| Nombre | Hex | Uso |
|---|---:|---|
| Cyan Primary | `#00E5FF` | CTA, foco, acciones principales |
| Cyan Soft | `#C3F5FF` | Texto/acento alto contraste |
| Cyan Dim | `#00DAF3` | Detalles, progreso, línea activa |
| Cyan Dark | `#00363D` | Texto sobre cyan claro |
| Violet | `#D0BCFF` | Notas creativas, backlinks, secondary |
| Violet Strong | `#571BC1` | Estados/acentos secundarios |
| Emerald | `#5BE9AD` | Success, listo, completado |
| Emerald Soft | `#A8FFD2` | Success foreground suave |
| Amber | `#FBBF24` | Warning |
| Red | `#FFB4AB` | Error foreground |
| Red Strong | `#93000A` | Error container |

---

## 6. Tokens semánticos estilo shadcn/ui

El proyecto debe usar tokens semánticos.  
No usar colores directos como `#00E5FF` dentro de componentes, salvo en definición de tokens.

### CSS variables recomendadas

```css
:root,
.dark {
  --background: 5 7 13;
  --foreground: 229 225 228;

  --card: 19 19 21;
  --card-foreground: 229 225 228;

  --popover: 14 14 16;
  --popover-foreground: 229 225 228;

  --primary: 0 229 255;
  --primary-foreground: 0 31 36;

  --secondary: 208 188 255;
  --secondary-foreground: 35 0 92;

  --muted: 32 31 34;
  --muted-foreground: 186 201 204;

  --accent: 91 233 173;
  --accent-foreground: 0 56 36;

  --destructive: 255 180 171;
  --destructive-foreground: 105 0 5;

  --border: 59 73 76;
  --input: 59 73 76;
  --ring: 0 218 243;

  --surface-lowest: 14 14 16;
  --surface-low: 28 27 29;
  --surface: 19 19 21;
  --surface-container: 32 31 34;
  --surface-high: 42 42 44;
  --surface-highest: 53 52 55;

  --outline: 132 147 150;
  --outline-variant: 59 73 76;

  --cyan-soft: 195 245 255;
  --cyan-dim: 0 218 243;
  --violet: 208 188 255;
  --violet-strong: 87 27 193;
  --emerald: 91 233 173;
  --amber: 251 191 36;

  --radius: 0.75rem;
}
```

### Tailwind mapping esperado

```ts
colors: {
  background: 'rgb(var(--background) / <alpha-value>)',
  foreground: 'rgb(var(--foreground) / <alpha-value>)',
  card: 'rgb(var(--card) / <alpha-value>)',
  'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
  popover: 'rgb(var(--popover) / <alpha-value>)',
  'popover-foreground': 'rgb(var(--popover-foreground) / <alpha-value>)',
  primary: 'rgb(var(--primary) / <alpha-value>)',
  'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
  secondary: 'rgb(var(--secondary) / <alpha-value>)',
  'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
  muted: 'rgb(var(--muted) / <alpha-value>)',
  'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
  accent: 'rgb(var(--accent) / <alpha-value>)',
  'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
  destructive: 'rgb(var(--destructive) / <alpha-value>)',
  'destructive-foreground': 'rgb(var(--destructive-foreground) / <alpha-value>)',
  border: 'rgb(var(--border) / <alpha-value>)',
  input: 'rgb(var(--input) / <alpha-value>)',
  ring: 'rgb(var(--ring) / <alpha-value>)',
}
```

---

## 7. Tipografía

### Familias

| Uso | Fuente |
|---|---|
| UI / cuerpo | Geist |
| Títulos | Geist |
| Código | JetBrains Mono |
| Labels técnicos | JetBrains Mono |

### Reglas

- Geist se usa para casi toda la UI.
- JetBrains Mono se usa para:
  - comandos;
  - metadatos;
  - labels en uppercase;
  - shortcuts;
  - code blocks;
  - terminal/boot screen;
  - timestamps si se busca tono técnico.
- No usar más de dos familias en MVP.

### Escala tipográfica

| Token | Tamaño | Line height | Peso | Uso |
|---|---:|---:|---:|---|
| `display` | 40px | 1.1 | 600 | Splash / landing interna |
| `headline-xl` | 32px | 1.2 | 600 | Título de nota / pantalla |
| `headline-lg` | 24px | 1.3 | 600 | Secciones importantes |
| `headline-md` | 20px | 1.4 | 500 | Cards grandes |
| `body-lg` | 16px | 1.6 | 400 | Texto de editor |
| `body-md` | 14px | 1.5 | 400 | UI estándar |
| `body-sm` | 13px | 1.45 | 400 | Metadatos secundarios |
| `label-caps` | 11px | 1 | 600 | Labels técnicos uppercase |
| `code-sm` | 13px | 1.6 | 400 | Código y snippets |
| `caption` | 11px | 1.3 | 400 | Hints |

### Labels uppercase

```css
.label-caps {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.08em;
  font-weight: 600;
  text-transform: uppercase;
}
```

---

## 8. Espaciado

Usar escala basada en 4px.

| Token | Valor |
|---|---:|
| `space-0` | 0 |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

### Layout

| Elemento | Valor |
|---|---:|
| Sidebar width | 256px |
| Topbar height | 64px |
| Main desktop padding | 32px |
| Main compact padding | 16px |
| Container max | 1200px |
| Editor max width | 880px |
| Properties panel | 288px |
| Command palette width | 640px |

---

## 9. Bordes y radios

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 4px | chips, code inline |
| `radius-md` | 8px | inputs, buttons |
| `radius-lg` | 12px | cards |
| `radius-xl` | 16px | modals, panels |
| `radius-2xl` | 24px | command palette / splash containers |
| `radius-full` | 9999px | pills, toggles |

### Reglas

- Cards principales: `12px`.
- Modales: `16px` o `24px`.
- Inputs: `8px`.
- Chips/tags: `9999px`.
- No mezclar radios aleatorios.

---

## 10. Sombras y glow

Midnight usa sombras profundas y glow sutil.

### Shadows

```css
--shadow-card: 0 10px 30px rgba(0, 0, 0, 0.28);
--shadow-panel: 0 18px 60px rgba(0, 0, 0, 0.42);
--shadow-modal: 0 24px 90px rgba(0, 0, 0, 0.55);
```

### Glow

```css
--glow-cyan-soft: 0 0 14px rgba(0, 229, 255, 0.16);
--glow-cyan-focus: 0 0 0 1px rgba(0, 229, 255, 0.55), 0 0 18px rgba(0, 229, 255, 0.22);
--glow-violet-soft: 0 0 14px rgba(208, 188, 255, 0.16);
--glow-emerald-soft: 0 0 14px rgba(91, 233, 173, 0.16);
--glow-danger-soft: 0 0 14px rgba(255, 180, 171, 0.16);
```

### Reglas

- Glow no debe estar en todos lados.
- Glow se permite en:
  - primary button hover;
  - quick capture focus;
  - command palette active result;
  - splash logo;
  - selected graph node;
  - active sidebar item.
- No usar glow rojo salvo error/destructive.

---

## 11. Layout base

### Desktop shell

```txt
App
├── Sidebar fija izquierda: 256px
├── Topbar: 64px
└── Main canvas
    ├── contenido principal
    └── panel contextual opcional
```

### Sidebar

Debe incluir:

- Logo / nombre.
- New Note.
- Dashboard.
- Inbox.
- Notes.
- Spaces.
- Graph.
- Tags.
- Types.
- Views.
- Settings.
- Command Palette hint.

### Topbar

Debe incluir:

- navegación secundaria;
- búsqueda o botón command palette;
- botón terminal/quick actions si aplica;
- estado local-first;
- sin avatar de usuario en MVP.

### Canvas

- Fondo `Night Black`.
- Cards/panels con superficies elevadas.
- Máximo de ancho controlado.
- En pantallas densas, usar grid.

---

## 12. Componentes base

## 12.1 Botones

### Primary Button

Uso:
- Guardar.
- Crear nota.
- Acción principal.

Estilo:
- Fondo `primary`.
- Texto `primary-foreground`.
- Border transparente.
- Hover con cyan más suave y glow.
- Disabled con muted.

```txt
height: 36px / 40px
padding: 12px 16px
radius: 8px
font: label-caps o body-md medium
```

### Secondary Button

Uso:
- Acciones secundarias.

Estilo:
- Fondo `surface-container`.
- Texto `foreground`.
- Borde `border`.
- Hover `surface-high`.

### Ghost Button

Uso:
- Sidebar/topbar/icons.

Estilo:
- Fondo transparente.
- Hover `surface-container`.
- Texto muted a foreground.

### Destructive Button

Uso:
- Eliminar.
- Vaciar papelera.

Estilo:
- Fondo no siempre rojo sólido.
- Preferir borde rojo + texto rojo.
- Confirmar en modal.

### Icon Button

```txt
size: 32px / 36px
radius: 8px
icon: 16px / 20px
```

### Command Action Button

Botón compacto para resultados/acciones de command palette.

---

## 12.2 Inputs

### Text input

- Fondo `surface-lowest` o transparente.
- Borde `border`.
- Focus border `primary`.
- Focus ring `ring`.
- Placeholder `muted-foreground / 50`.

### Quick Capture input

Debe ser protagonista.

Características:
- Card glass/panel.
- Icono a la izquierda.
- Placeholder claro.
- Botón Save a la derecha.
- Enter para guardar.
- Focus glow cyan.
- Debe poder usarse desde Dashboard e Inbox.

### Textarea

- Misma regla de input.
- Altura mínima 96px.
- Resize vertical si aplica.

### Select

- Usar estilo oscuro.
- Opción seleccionada clara.
- No usar select nativo si visualmente rompe; se puede simular si se implementa bien.

### Tag input

- Chips redondeados.
- Autocomplete futuro.
- Remove con `x`.
- Hover claro.

---

## 12.3 Cards

### Note Card

Debe mostrar:

- tipo;
- título;
- preview;
- tags;
- space;
- fecha;
- estado;
- favorito/pin.

Variantes:
- compacta;
- normal;
- pinned;
- inbox;
- command;
- task.

Estilo:
- Fondo `card`.
- Borde `border`.
- Left accent opcional por tipo.
- Hover con borde primary/secondary.
- No usar glow salvo pinned/hover importante.

### Space Card

Debe mostrar:

- icono;
- nombre;
- descripción;
- cantidad de notas;
- última actividad;
- color/acento.

### Tag Chip

- Rounded full.
- Fondo muted/accent suave.
- Texto pequeño.
- Color no debe saturar.

### Type Badge

- Icono + label.
- Color por tipo.
- Usar acentos suaves.

---

## 13. Tipos de nota y colores

| Tipo | Icono sugerido | Color |
|---|---|---|
| Note | document | Cyan soft |
| Task | check_box | Emerald |
| Command | terminal | Cyan |
| List | checklist | Violet |
| Idea | lightbulb | Amber |
| Project | folder_code | Violet strong |
| Meeting | groups | Secondary |
| Link | link | Cyan dim |
| Image | image | Emerald soft |
| Reference | bookmark | Outline |
| Snippet | code | Cyan |
| Journal | moon | Violet |

Regla:
- El color del tipo debe ser acento, no fondo dominante.
- Las cards no deben parecer arcoíris.
- Máximo un borde/acento de color por card.

---

## 14. Editor

El editor es pieza central del producto.

### Layout

```txt
Editor Page
├── toolbar/properties top
├── title
├── metadata
├── editor content
├── backlinks section
└── properties sidebar
```

### Reglas

- El área de escritura debe sentirse limpia, no como formulario.
- Título grande.
- Metadata discreta.
- Propiedades visibles pero no invasivas.
- Sidebar derecha solo en desktop amplio.
- En compact desktop, propiedades pueden colapsar.

### Estilos editor

#### Heading 1

```txt
font-size: 32px
line-height: 1.2
font-weight: 600
color: foreground
margin-top: 32px
```

#### Heading 2

```txt
font-size: 24px
line-height: 1.3
font-weight: 600
```

#### Paragraph

```txt
font-size: 16px
line-height: 1.6
color: muted-foreground
```

#### Inline code

```txt
font: JetBrains Mono
bg: surface-container
color: secondary
radius: 4px
padding: 2px 4px
```

#### Code block

```txt
bg: surface-lowest
border: border muted
radius: 8px
padding: 16px
font: JetBrains Mono 13px
```

#### Quote

```txt
border-left: 2px solid secondary
color: outline
font-style: italic
padding-left: 16px
```

#### Checklist

- Custom checkbox.
- Checked: primary bg.
- Text checked: muted + line-through.

---

## 15. Command Palette

La command palette debe sentirse como una herramienta de poder.

### Apertura

Shortcut:

```txt
Ctrl + K
```

En futuro macOS:

```txt
Cmd + K
```

### Layout

```txt
Command Palette
├── input search
├── grouped results
├── actions
└── footer shortcuts
```

### Resultados agrupados

- Notes.
- Spaces.
- Tags.
- Actions.
- Views.
- Recent.

### Comportamiento

- Resultado activo con background `surface-high`.
- Borde/left accent cyan.
- Enter abre resultado.
- Esc cierra.
- Flechas navegan.
- Debe ser accesible con teclado.

---

## 16. Splash / Boot Screen

### Objetivo

La primera pantalla debe mostrar identidad y calidad.

### Secuencia recomendada

1. Fondo night black.
2. Glow radial sutil.
3. Logo aparece con reveal.
4. Línea terminal muestra estados.
5. Barra de progreso.
6. Transición al dashboard.

### Textos válidos

Usar textos que no prometan funcionalidades inexistentes:

```txt
Booting Midnight Project...
Loading local vault...
Preparing workspace...
Indexing notes...
Restoring session...
System ready.
```

Evitar en MVP:

```txt
Decrypting vault data...
Synchronizing nodes...
Establishing secure connection...
```

Salvo que esas funcionalidades existan.

### Animaciones

- Pulse glow.
- Logo float muy sutil.
- Progress line.
- Cursor blink.
- Fade out.

### Timing

- Mínimo: 900ms.
- Normal: 1200–2500ms.
- No hacer esperar artificialmente más de 3s.

### Reduced motion

Si el usuario prefiere reducción de movimiento:
- eliminar float;
- mantener fade simple;
- no usar glitch.

---

## 17. Graph Lite

### Objetivo

Visualizar conexiones sin abrumar.

### Reglas

- Grafo simple.
- Fondo oscuro.
- Nodos por nota.
- Links por backlinks.
- Nodo seleccionado con glow cyan.
- Nodos huérfanos en muted.
- Filtros por space/tag/type.
- No usar animaciones físicas excesivas si afectan rendimiento.

### Panel lateral

Debe mostrar:
- nota seleccionada;
- backlinks;
- outgoing links;
- tags;
- abrir nota.

---

## 18. Estados vacíos

Los estados vacíos deben sentirse pulidos, no como “no data”.

### Inbox vacío

Texto:
```txt
Inbox clear.
Nothing is waiting in the dark.
```

Acción:
```txt
Capture something
```

### Sin resultados

```txt
No signal found.
Try another keyword or create a new note.
```

### Sin backlinks

```txt
No backlinks yet.
Link this note using [[note name]].
```

### Sin spaces

```txt
No spaces created.
Start with Work, Projects or Personal.
```

### Sin tags

```txt
No tags yet.
Tags appear when you start organizing notes.
```

---

## 19. Estados de carga

### Skeletons

- Usar superficies oscuras.
- Shimmer muy sutil.
- No usar gris claro brillante.

### Loading inline

- Texto pequeño monospace.
- Icono/loader cyan discreto.

### Boot loading

- Usar splash/boot sequence.

---

## 20. Estados de error

### Error card

Debe incluir:
- título claro;
- descripción;
- acción;
- detalle técnico colapsable si aplica.

### Ejemplo

```txt
Could not load local vault.
Check file permissions or restart Midnight Project.
[Retry]
[Show details]
```

### Error destructive

- Usar red solo como acento.
- No pintar toda la pantalla de rojo.

---

## 21. Modales

### Confirm delete modal

- Fondo `popover`.
- Borde `border`.
- Título claro.
- Mensaje específico.
- Botón cancel ghost.
- Botón destructive.

### Create note modal

Solo si se necesita. Preferir quick capture y editor.

### Command palette modal

Debe ser modal principal de acción rápida.

---

## 22. Tablas, listas y vistas

### Listas

- Filas compactas.
- Hover claro.
- Icono a la izquierda.
- Metadata secundaria.
- Chevron o acción a la derecha.

### Table-like views

Si se implementan vistas tipo tabla:
- Header sticky.
- Columnas discretas.
- Zebra muy sutil o separación por borders.
- No usar tablas blancas.

### Views

Cada vista debe tener:
- título;
- descripción corta;
- filtros activos;
- resultados;
- empty state.

---

## 23. Accesibilidad

### Contraste

- Texto normal debe apuntar a contraste mínimo 4.5:1.
- Texto grande puede aceptar 3:1.
- No depender solo de color para estados.
- Focus visible obligatorio.

### Teclado

- Command palette navegable con teclado.
- Sidebar links focusables.
- Inputs con labels/hints.
- Modales cierran con Escape.
- Tab order lógico.

### Motion

Respetar:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Iconos

- Iconos acompañados de label o `aria-label`.
- No usar iconos sin significado claro.

---

## 24. Responsive / tamaños objetivo

Aunque es desktop-first, debe soportar tamaños razonables.

### Desktop compacto

```txt
1366x768
```

Reglas:
- Sidebar 240–256px.
- Properties panel colapsable.
- Cards compactas.
- Editor con ancho menor.

### Desktop amplio

```txt
1920x1080
```

Reglas:
- Sidebar 256px.
- Main max 1200px en dashboard.
- Editor puede tener properties panel fijo.
- No estirar contenido a todo lo ancho sin límite.

### Futuro web/tablet

No es prioridad MVP, pero:
- Sidebar puede convertirse en drawer.
- Properties panel puede ser bottom sheet.
- Command palette sigue centrada.

---

## 25. Scrollbars

Scrollbars deben estar estilizadas:

```css
* {
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--outline-variant)) transparent;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(var(--outline-variant));
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--outline));
}
```

---

## 26. Reglas de implementación para Codex

### Sí hacer

- Usar tokens del sistema.
- Crear componentes reutilizables.
- Mantener dark mode.
- Usar Geist y JetBrains Mono.
- Usar `Ctrl + K` en Windows.
- Crear estados vacíos bonitos.
- Usar `DESIGN_SYSTEM.md` como fuente visual.
- Mantener UI limpia y coherente.
- Derivar variantes desde componentes base.

### No hacer

- No inventar colores.
- No usar gradients fuertes sin justificación.
- No usar avatars de usuario en MVP.
- No usar imágenes remotas.
- No usar `decrypting` o `sync` en textos si no existe esa función.
- No usar estilos inline masivos.
- No crear una UI distinta por pantalla.
- No implementar light mode todavía salvo que se pida.
- No depender de CDN para fonts o assets en build final.
- No usar Material Symbols como requisito obligatorio si se elige Lucide u otro set local.

---

## 27. Componentes mínimos a crear

```txt
Button
IconButton
Input
Textarea
Select
Checkbox
Switch
Badge
TagChip
TypeBadge
Card
Panel
Modal
EmptyState
LoadingState
ErrorState
Sidebar
Topbar
QuickCapture
NoteCard
SpaceCard
CommandPalette
SplashScreen
BootSequence
EditorShell
PropertiesPanel
BacklinksPanel
GraphLite
```

---

## 28. Tokens por tipo de nota

```ts
export const NOTE_TYPE_THEME = {
  note: { icon: 'FileText', color: 'cyan' },
  task: { icon: 'CheckSquare', color: 'emerald' },
  command: { icon: 'Terminal', color: 'cyan' },
  list: { icon: 'ListChecks', color: 'violet' },
  idea: { icon: 'Lightbulb', color: 'amber' },
  project: { icon: 'FolderKanban', color: 'violet' },
  meeting: { icon: 'Users', color: 'secondary' },
  link: { icon: 'Link', color: 'cyan' },
  image: { icon: 'Image', color: 'emerald' },
  reference: { icon: 'Bookmark', color: 'muted' },
  snippet: { icon: 'Code2', color: 'cyan' },
  journal: { icon: 'Moon', color: 'violet' },
}
```

---

## 29. Ejemplo de clases base

### Glass panel

```css
.midnight-panel {
  background: rgba(var(--surface-lowest), 0.72);
  border: 1px solid rgba(var(--border), 0.72);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-card);
}
```

### Active sidebar item

```css
.sidebar-item-active {
  color: rgb(var(--primary));
  background: rgba(var(--primary), 0.06);
  border-left: 2px solid rgb(var(--primary));
}
```

### Quick capture focus

```css
.quick-capture:focus-within {
  border-color: rgb(var(--primary));
  box-shadow: var(--glow-cyan-focus);
}
```

---

## 30. Pantallas esperadas para MVP

1. Splash / Boot screen.
2. Dashboard / Home.
3. Inbox.
4. Notes list.
5. Note editor.
6. Spaces.
7. Tags.
8. Types.
9. Search.
10. Command Palette.
11. Graph Lite.
12. Views.
13. Settings.

Cada pantalla debe usar:
- sidebar;
- topbar si aplica;
- estados vacíos;
- componentes base;
- tokens del sistema.

---

## 31. Checklist visual antes de aceptar una pantalla

Antes de considerar terminada una pantalla:

- [ ] Usa tokens, no colores sueltos.
- [ ] Tiene estado vacío.
- [ ] Tiene estado loading si carga datos.
- [ ] Tiene estado error si hay operación async.
- [ ] Tiene focus visible.
- [ ] Respeta spacing de 4px.
- [ ] Usa Geist/JetBrains Mono correctamente.
- [ ] No usa imágenes remotas.
- [ ] No menciona sync/encryption si no existe.
- [ ] Funciona en 1366x768.
- [ ] Funciona en 1920x1080.
- [ ] No rompe identidad visual.
- [ ] No parece dashboard SaaS genérico.
- [ ] No parece app vieja de notas.
