# DESIGN_SYSTEM

**Versión:** 1.1 — **CERRADO**
**Actualizado el 2026-08-11** con los valores exactos extraídos del HTML de la exploración visual. Los tokens de v1.0 eran aproximaciones; estos son los reales.
**Dirección visual:** *Plano* — sistema visible, grilla y etiquetas mono, el diagrama manda, verde profundo.
**Última actualización:** 2026-08-11

Todo lo que sigue es implementable tal cual. Cambiar cualquier token requiere una entrada nueva en `DECISIONS.md`.

---

## 0. Concepto

**El sistema es visible.** La página se ve como un plano técnico: grilla perceptible, etiquetas monoespaciadas numeradas, cajas con borde en vez de sombra, todo alineado a una retícula que no se esconde.

Racional de conversión: el producto que se vende es *método* — "no empiezo diseñando, primero entiendo". Una estética que muestra su propia estructura es la demostración visual de esa afirmación. Un prospecto que no puede juzgar código sí puede percibir orden.

**Lo que la gente va a recordar:** el diagrama del recorrido y las etiquetas mono numeradas (`01 / PROBLEMA`).

### Prohibiciones

- Gradientes violeta/azul sobre blanco.
- Glassmorphism, blobs, mesh gradients.
- Dark mode como tema principal (dos secciones oscuras de quiebre, nada más).
- Un ícono genérico por bullet.
- **Sombras difusas.** La separación es por borde de 1 px o por fondo alterno. Ver §7.
- Fotos de stock.
- Logos de tecnologías.
- Contadores animados y cifras sin origen.

---

## 1. Colores

```css
:root {
  /* superficies */
  --paper:      #F1F1EE;  /* fondo base */
  --panel:      #E8E8E3;  /* fondo del panel del diagrama */
  --ink:        #0E1211;  /* fondo de sección de quiebre, bordes duros */
  --ink-alt:    #12201C;  /* card sobre fondo oscuro */

  /* texto */
  --text:       #4B5250;  /* cuerpo y texto secundario */
  --text-strong:#0E1211;  /* titulares */
  --text-on-ink:#F1F1EE;
  --text-on-ink-muted: #8E9997;

  /* acento */
  --green:      #0E6B57;  /* CTA, etiquetas mono, nodo activo */
  --green-hover:#0A5544;
  --green-light:#6FBFA8;  /* mono SOBRE fondo oscuro únicamente */
  --on-green:   #FFFFFF;

  /* estructura */
  --rule:       #D3D3CC;  /* bordes suaves, retícula, separadores */
  --rule-hard:  #0E1211;  /* borde de header y de bloques estructurales */
}
```

**Nota:** `--text` (#4B5250) se usa tanto para cuerpo como para secundario. No hay un tercer nivel de gris: la jerarquía se hace con tamaño y familia, no con más tonos.

### Contrastes verificados (WCAG 2.1)

| Par | Ratio | Estado |
|---|---|---|
| `--text` / `--paper` | 7.08 | AA ✅ |
| `--text` / `--panel` | 6.52 | AA ✅ |
| `--text-strong` / `--paper` | 16.67 | AAA ✅ |
| `--green` / `--paper` | 5.69 | AA ✅ |
| `--green` / `--panel` | 5.24 | AA ✅ |
| `--on-green` / `--green` (botón) | 6.44 | AA ✅ |
| `--text-on-ink` / `--ink` | 16.67 | AAA ✅ |
| `--green-light` / `--ink` | 8.71 | AA ✅ |


`--rule` sobre `--paper` da 1.33: es correcto para un separador decorativo, pero **no puede ser el único indicador de un límite funcional**. Donde el borde comunique estructura (celdas de tabla, borde de card) usar `--rule-hard`.

### Reglas de uso

- **`--green` es el único acento.** Aparece en: CTA, etiquetas mono de sección, nodo final del diagrama, links de texto, cifra del bloque de costos. Nada más.
- **`--green-light` solo sobre fondo oscuro.** Sobre papel no llega a AA.
- **Máximo dos secciones con fondo `--ink`:** el recorrido (§4 de `UX_SPEC`) y el CTA final. Un tercer quiebre destruye el énfasis.
- **El botón primario es verde en toda la página, sin excepción.** En la dirección explorada el CTA del hero era negro y el del cierre verde: eso es una inconsistencia y se corrige. Un solo destino, un solo color.
- El verde elegido (`#0E5C45`) es un verde profundo, no el verde de WhatsApp (`#25D366`). La distinción importa: D-06 sigue vigente, el destino se señala con el glifo, no con el color de marca de Meta.

---

## 2. Tipografías

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Titulares y cuerpo | **Archivo** (variable) | 600, 700 | H1–H3, botones, texto de nodos |
| Cuerpo largo | **Schibsted Grotesk** (variable) | 400, 600 | Párrafos, citas, listas |
| Sistema | **JetBrains Mono** | 400, 500 | Etiquetas de sección, metadatos, flechas, microcopy |

⚠️ **Cambio respecto de v1.0:** el cuerpo era Source Serif 4. La exploración visual usa **sans** (Schibsted Grotesk) y es una de las razones por las que la implementación con serif no se parecía. Ver `DECISIONS.md` → D-13 revisada.


La tercera familia no es decorativa: la mono **es** la dirección visual. Sostiene la numeración de secciones, los metadatos y las etiquetas del diagrama. Sin ella la dirección se cae.

- **Prohibidas:** Inter, Roboto, Poppins, Montserrat, Space Grotesk, Open Sans, system stack como principal.
- **Autoalojadas** en `/public/fonts` en WOFF2. Sin CDN.
- Solo los pesos listados. `font-display: swap` + `size-adjust` en la fallback.
- Preload del WOFF2 de Archivo 700 (el H1).
- **La mono nunca se usa en texto corrido.** Etiquetas, celdas y metadatos: sí. Párrafos: nunca.

### Escala — valores exactos

Base **17 px**, `line-height: 1.6`. Nunca 14 px en texto corrido.

⚠️ **Escala ampliada el 2026-08-13 (D-24).** Los valores anteriores están tachados. El motivo: display y cuerpo estaban demasiado cerca (2,9 : 1) y la página se leía uniformemente mediana, como wireframe. Ahora la relación es 5,2 : 1.

| Rol | 1280+ | 900+ | 600+ | Mobile | Especificación |
|---|---|---|---|---|---|
| **Display (H1)** | **88 px** | 72 px | 52 px | 40 px | Archivo 700, `line-height: 1`, `letter-spacing: -.035em` — ~~50 / 38~~ |
| **H2** | **52 px** | 44 px | 32 px | 28 px | Archivo 700, `1.12`, `-.02em` — ~~38 / 28~~ |
| **H3** | **26 px** | 24 px | 22 px | 20 px | Archivo 600, `1.25` — ~~24 / 20~~ |
| Cuerpo | 17 px | 17 px | Schibsted Grotesk 400, `1.6`, color `--text` |
| Texto de nodo | 15 px | 15 px | Archivo 600 |
| Etiqueta mono de sección | 12 px | 12 px | JetBrains Mono, `letter-spacing: .08em`, mayúsculas, `--green` |
| Metadato / microcopy mono | 12 px | 12 px | JetBrains Mono, `.04em`, mayúsculas, `--text` |
| Botón | 16 px | 16 px | Archivo 600 |

**El microcopy va en mayúsculas y en mono:** `TE CONTESTO YO, NO UN BOT.` — no en cuerpo minúscula.

### Medida y ritmo

- Texto corrido: **62–70 caracteres** (`max-width: 34rem`).
- Párrafos de máximo 3 líneas en mobile.
- Sin justificado. Sin texto sobre imagen.

---

## 3. Espaciado

Base **4 px**. Escala única:

```css
--sp-1:4px; --sp-2:8px; --sp-3:12px; --sp-4:16px; --sp-5:20px;
--sp-6:24px; --sp-8:32px; --sp-12:48px; --sp-16:64px;
--sp-24:96px; --sp-32:128px; --sp-40:160px;
```

| Contexto | Desktop | Mobile |
|---|---|---|
| **Padding de sección** | **96 px vertical / 40 px lateral** (64 desde 1280) | 56 px / 20 px |
| Padding del header | 16 px / 40 px | 16 px / 20 px |
| Eyebrow → H1 | 24 px | 20 px |
| H1 → párrafo | 24 px | 20 px |
| Párrafo → CTA | 32 px | 24 px |
| CTA → microcopy | 12 px | 12 px |
| Etiqueta de sección → contenido | 28 px | 24 px |
| Padding interno de nodo | 14 px / 16 px | 14 px / 16 px |
| Separación entre nodos (incluida flecha) | 10 px | 10 px |
| Padding interno de celda (§02) | 26 px | 20 px |

⚠️ **96 px, corregido el 2026-08-13 (D-24).** v1.0 pedía 128 px; v1.1 lo bajó a 56 midiendo el HTML de la exploración. Pero esa exploración era una mesa de trabajo comprimida, no una página terminada, y 56 px dejaba la página sin aire — parte de por qué no se leía como algo caro. 96 px (`--sp-24`) es el punto medio y está en la escala.

### Dónde viven estos valores

**El padding de sección y la escala tipográfica son custom properties en `tokens.css`** (`--sp-section-y`, `--sp-section-x`, `--sp-section-gap`, `--fs-display`, `--fs-h2`, `--fs-h3`), con sus breakpoints declarados una sola vez en `:root`.

⚠️ **Ninguna sección declara su propio padding ni sus propios `@media` de padding.** Antes cada componente repetía el mismo bloque de tres breakpoints: ajustar el ritmo de la página obligaba a tocar diez archivos, y esa es la razón práctica por la que nunca se ajustaba. Un componente nuevo usa las variables o queda fuera de ritmo.


Densidad: generosa hasta "Qué incluye", más compacta a partir de "Cómo trabajamos".

---

## 4. Border radius

```css
--radius: 2px;   /* único valor: cards, botones, cajas del diagrama */
--radius-0: 0;   /* tablas, separadores, retícula */
```

**Radio dominante único: 2 px.** Confirmado contra la exploración: el único `border-radius` del HTML es 2 px, en el botón. La dirección es un plano técnico; los radios grandes la contradicen. Nada de pill, nada de 16 px, nada de mezclar.

---

## 5. Grilla y retícula

### Layout: full-bleed, sin contenedor centrado

⚠️ **Corrección mayor respecto de v1.0.** La versión anterior definía un contenedor de 1120 px centrado. **La exploración visual no tiene contenedor:** cada sección ocupa el ancho completo del viewport, con `padding: 56px 40px`. Es la razón principal por la que la implementación se percibía como bloques flotando en un fondo.

```
sección: width:100%; padding: 56px 40px; border-bottom: 1px solid var(--rule);
```

- **Sin `max-width` a nivel de sección.** El sitio sangra de borde a borde en cualquier ancho.
- **La medida de lectura se preserva a nivel de párrafo:** `max-width: 34rem` en el texto corrido. Full-bleed y legibilidad no están en conflicto: se resuelven en capas distintas.
- Cada sección lleva `border-bottom: 1px solid --rule`. La estructura del sitio es una pila de bloques delimitados, no islas centradas.

### Hero: dos columnas asimétricas

```
display: grid; grid-template-columns: 1.05fr .95fr;
border-bottom: 1px solid var(--rule-hard);
```

- **Columna izquierda:** `padding: 56px 40px; border-right: 1px solid var(--rule)`. Ese borde es el divisor entre columnas.
- **Columna derecha (panel del diagrama):** `padding: 56px 40px`, fondo `--panel`, con la retícula como `background-image`.
- Ambas columnas arrancan en el mismo `padding-top`, así que **el panel queda alineado con el eyebrow sin necesidad de reglas adicionales**.

### Retícula

```
background-color: #E8E8E3;
background-image: linear-gradient(#D3D3CC 1px, transparent 1px),
                  linear-gradient(90deg, #D3D3CC 1px, transparent 1px);
background-size: 32px 32px;
```

Va sobre **toda** la columna del panel, no sobre una caja interna. Es lo que hace que llegue al borde derecho de la pantalla sin trucos de sangrado.

Se oculta por debajo de 900 px: el panel conserva el fondo `--panel` y pierde las líneas.

## 6. Botones

### Cerrado

- **Alto mínimo 52 px**, área táctil ≥ 44 × 44 px, padding horizontal ≥ 24 px.
- Radio 2 px.
- El primario lleva el glifo de WhatsApp a la izquierda del texto.
- Foco: `outline: 2px solid var(--green); outline-offset: 2px`.
- Transición 150 ms. Nada más largo.
- En mobile, el primario del hero y el del cierre son ancho completo.

### Variantes

| Variante | Especificación | Uso |
|---|---|---|
| `primary` | `height: 56px`, fondo `--green`, texto `--on-green`, Archivo 600 16 px, `gap: 12px`, `radius: 2px`, ancho completo de su columna | Todos los CTA sobre papel |
| `primary-on-ink` | Igual, sin cambios de color | CTA en sección oscura |
| `header` | `padding: 11px 16px`, fondo `--ink`, texto `--paper`, **JetBrains Mono 12 px**, cuadrado de 8 px `--green` a la izquierda, texto `WHATSAPP` | Solo el CTA del header |

⚠️ **El CTA del header es una pieza distinta, no un botón chico.** Mono, fondo oscuro, texto corto y un cuadrado verde de 8 px en vez del glifo. Así queda claramente subordinado al primario sin competir. La implementación actual repite el botón completo y por eso pesa igual que el del hero.

**Altura del primario: 56 px** (v1.0 decía 52 px, mínimo táctil; el valor real de la dirección es 56).


**No existe botón secundario.** Los anclajes internos son links de texto con subrayado en `--green`.

---

## 7. Cards

- **Sin sombra.** Borde de 1 px `--rule-strong`, o fondo `--paper-alt` sin borde. Nunca las dos cosas.
- Un solo estilo de card en toda la página.
- Sin card dentro de card.
- Padding uniforme según §3.
- Las cards de "Qué incluye" y "Proceso" llevan etiqueta mono superior (`BLOQUE 01`, `01`). Es lo que las ata a la dirección visual.

---

## 8. Diagrama del recorrido

Único gráfico propio del sitio. **Construido con HTML y CSS, no SVG ni imagen** — tiene que ser texto seleccionable e indexable.

### Medidas exactas

```
contenedor:  display: flex; flex-direction: column; gap: 10px;
nodo:        border: 1px solid; padding: 14px 16px;
             font: Archivo 600 15px;
flecha:      elemento propio del flex, JetBrains Mono 12px,
             color var(--text), padding-left: 16px;
```

Un nodo mide ~48 px de alto, no 90. **Cada flecha es un ítem más del flex, no un margen**: por eso el ritmo vertical es parejo y el diagrama entero entra en ~450 px con cinco nodos.

### Estados

| Estado | Borde | Fondo | Texto |
|---|---|---|---|
| Nodo normal | `1px solid --ink` | `--paper` | `--text-strong` |
| Nodo apagado (fin de la cadena `HOY`) | `1px dashed --text` | sin fondo | `--text` |
| Nodo final del `DESPUÉS` | `1px solid --ink` | `--green` | `--on-green` |

La exploración usa borde sólido en los dos primeros nodos y punteado en los últimos: **la degradación del trazo cuenta la historia** — arranca firme y se desdibuja. Es mejor que el criterio de v1.0 (todos punteados) y se adopta.

### Etiqueta y pie del panel

- Etiqueta superior (`HOY`): mono 12 px, `.08em`, `--text`, `margin-bottom: 20px`.
- Pie del panel (micro-prueba): mono 12 px, `--text`, `border-top: 1px solid --rule`, `padding-top: 12px`, `margin-top: 24px`.

### Mobile

Los nodos ya están en columna, así que no hay colapso. Se mantienen las mismas medidas.

## 9. Breakpoints

Mobile-first real. El grueso del tráfico viene del navegador interno de Instagram.

```css
/* base 0–599 */
@media (min-width:600px)  {}
@media (min-width:900px)  {}
@media (min-width:1280px) {}
```

| Rango | Comportamiento |
|---|---|
| 0–599 | Una columna. Retícula oculta. Barra CTA fija abajo. Diagrama vertical. |
| 600–899 | Una columna centrada, tipografía intermedia. |
| 900–1279 | Hero a dos columnas `1.05fr .95fr` con divisor. Cards a 2–3 columnas. CTA del header visible. |
| 1280+ | Sigue full-bleed. Crece el padding lateral (40 → 64 px). El texto no escala: la medida de lectura la fija el `max-width: 34rem` del párrafo. |

### Colapsos obligatorios

| Componente | < 900 px |
|---|---|
| Hero a 2 columnas | Apila: texto primero, diagrama después |
| Grilla de "Qué incluye" (3) | Una columna, bloques apilados con su etiqueta |
| Cards de proceso (4) | Una columna. **Cada paso conserva "de vos:" visible** — es el dato de más valor de la sección |
| Grilla de citas (2×2) | Una columna |
| Bloque de inversión (2) | Apila. La cifra de costo fijo va **debajo**, no arriba |

### Navegador interno de Instagram

- `dvh`, nunca `100vh`.
- `env(safe-area-inset-bottom)` en la barra CTA fija.
- Nada depende de `:hover`.
- Verificar que `wa.me` abra la app y no quede atrapado en el webview.

---

## 10. Animaciones

**Permitido**

- Entrada de sección: `opacity 0→1` + `translateY(12px→0)`, 400 ms, `ease-out`, una sola vez.
- Aparición escalonada de los nodos del diagrama al entrar en viewport (delay de 80 ms entre nodos, total < 500 ms).
- Hover / press en botones y links: 150 ms.

**Prohibido**

- Cualquier animación que retrase el H1 o el CTA del hero.
- Parallax, scroll hijacking, secciones con pin, scroll horizontal.
- Números que cuentan hacia arriba.
- Cadenas de más de 600 ms.
- Librerías de animación.

**Obligatorio**

```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
```

Todo el contenido visible y completo con JavaScript desactivado.

---

## 11. Correcciones sobre la exploración visual

Diferencias entre lo explorado y lo que se implementa:

1. **Sin navegación en el header.** La exploración incluía `01 PROBLEMA / 02 RECORRIDO / 03 PROCESO / 04 PRECIO`. Cuatro links en una landing de una sola acción son cuatro vías de fuga y compiten con el CTA. Header = nombre + botón, nada más.
2. **CTA verde en todos lados.** En la exploración el del hero era negro y el del cierre verde.
3. **Retícula solo en el hero.**
5. **Falta la barra CTA fija en mobile.** Es obligatoria.
6. **La sección de precio cambia de contenido.** Ver D-03 revisada.
