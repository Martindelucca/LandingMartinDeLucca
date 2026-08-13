# FIXES v10 — Sección "Qué construyo"

**Fecha:** 2026-08-11
**Alcance:** solo la sección *Qué construyo*. **No tocar hero, Problema ni Recorrido.**
**Origen:** medidas exactas extraídas del HTML de la exploración visual.
**Referencias:** `docs/UX_SPEC.md` §04 · `docs/DESIGN_SYSTEM.md` v1.1
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `_v5` ✅ · `_v6` ✅ · `_v7` ✅ · `_v8` ❌ anulado · `_v9` ✅

---

## Diagnóstico

La sección se construyó con una estructura propia en vez de la de la exploración. Dos desvíos principales: **el método pasó de chips inline a filas numeradas apiladas**, y **el mockup pasó de una columna angosta a un panel de media pantalla**. El resultado es una sección con mucho aire muerto y una lista que compite con otras dos del sitio.

---

## P0

### P-01 · El método va en chips inline, no en filas numeradas

**Problema.** Los cinco pasos están como filas a ancho completo, apiladas, con numeración `01`–`05`. Eso los convierte en una **lista de pasos numerada**, formato que ya usan el diagrama del recorrido (nodos numerados) y la tabla de *Cómo trabajamos* (pasos `01`–`04`). Tres listas numeradas seguidas hacen que ninguna destaque, y esta es la que menos lo necesita: es un resumen del método, no un proceso a seguir.

**Cambio.** Chips inline en una fila que envuelve:

```
contenedor: display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;
chip:       border: 1px solid var(--rule); padding: 8px 10px;
            font: JetBrains Mono 12px;
```

- **Sin números.** El orden lo da la secuencia horizontal.
- **El último chip va destacado:** `border: 1px solid var(--green); color: var(--green)`. Es el destino del método y el mismo destino del CTA que está justo debajo.
- Los chips envuelven de forma natural: en pantallas anchas entran en una o dos líneas, en angostas en varias. No forzar columnas.

**Contenido (5 chips, sin cambios):**
`ANALIZO TU CLIENTE` · `ORDENO LA OFERTA` · `ESCRIBO Y DISEÑO` · `TE PONGO EN GOOGLE` · `CONECTO CON WHATSAPP`

### P-02 · Grilla de la sección y ancho del mockup

**Problema.** La columna derecha ocupa aproximadamente un tercio del viewport y el mockup mide ~360 × 640 px. Entre eso y el CTA queda una franja vacía enorme a la izquierda, y la sección se percibe deshabitada.

**Cambio.**

```
sección: padding: 56px 40px;
         border-bottom: 1px solid var(--rule);
         display: grid; grid-template-columns: 1fr 240px;
         gap: 40px; align-items: center;
```

- **Columna derecha fija en 240 px.** No es proporcional: es un mockup de celular, y su ancho no debe crecer con la pantalla.
- `align-items: center` — el mockup se centra verticalmente respecto de la columna de texto. Eso elimina el desbalance sin agregar contenido.

### P-03 · Tratamiento del mockup

**Problema.** Hoy tiene **dos bordes** (uno sólido exterior y uno punteado interior) y el texto centrado en el medio del panel.

**Cambio.**

```
aspect-ratio: 9 / 17;
border: 1px solid var(--ink);
background-image: repeating-linear-gradient(135deg,
                  rgba(14,18,17,.06) 0 6px, transparent 6px 12px);
display: flex; align-items: flex-end; justify-content: center;
padding: 12px;
```

- **Un solo borde**, sólido, `--ink`.
- **Trama diagonal** como relleno del placeholder, no un borde punteado.
- **El texto va abajo** (`align-items: flex-end`), mono 11 px, `--text`, centrado horizontalmente.
- `aspect-ratio: 9/17` — con 240 px de ancho da ~453 px de alto, proporción de celular real.

Cuando llegue la captura real, reemplaza el fondo y el texto desaparece. La proporción y el borde se mantienen.

---

## P1

### P-04 · Tamaño del H2

**Problema.** El H2 está en el tamaño de titular de sección grande y rompe en dos líneas.

**Cambio.** **34 px**, Archivo 700, `letter-spacing: -.03em`, `margin: 0 0 18px`. Entra en una sola línea en desktop.

⚠️ `DESIGN_SYSTEM.md` §2 define H2 en 38 px como escala general. **Esta sección usa 34 px** porque el titular convive con una columna de 240 px a su derecha: a 38 px la relación entre bloques se desbalancea. Si se prefiere unificar, el valor de la escala es aceptable, pero **no puede superar los 38 px**.

### P-05 · Espaciados

| Del | Al | Valor |
|---|---|---|
| Etiqueta `03 / QUÉ CONSTRUYO` | H2 | 20 px |
| H2 | Chips | 18 px |
| Chips | CTA | 28 px |
| Columna izquierda | Mockup | 40 px |

### P-06 · CTA `inline-flex`, no bloque de ancho fijo

**Problema.** El botón parece tener un ancho fijo con espacio sobrante interno.

**Cambio.** `display: inline-flex; height: 56px; padding: 0 26px; gap: 12px`. El ancho lo da el contenido.

En mobile sigue a ancho completo, como el resto de los primarios.

⚠️ **El color se mantiene verde.** La exploración usa fondo `--ink` en este CTA, pero el invariante de un solo color de CTA en toda la página (D-06 / `DECISIONS.md` invariante 11) tiene prioridad sobre la referencia visual.

---

## Responsive

| Ancho | Comportamiento |
|---|---|
| ≥ 900 px | Grilla `1fr 240px`, mockup a la derecha |
| < 900 px | Una columna: texto, chips, CTA, y el mockup **al final**, con `max-width: 240px` centrado |

Los chips envuelven solos; no necesitan tratamiento especial en mobile.

---

## Verificación

- [ ] Método en chips inline con `flex-wrap`, sin numeración
- [ ] Último chip con borde y texto `--green`
- [ ] Grilla `1fr 240px` con `align-items: center` y gap 40 px
- [ ] Mockup con un solo borde, trama diagonal y texto abajo
- [ ] `aspect-ratio: 9/17` respetado
- [ ] H2 en 34 px, una sola línea en desktop
- [ ] CTA `inline-flex`, verde, alto 56 px
- [ ] Sin franjas vacías grandes entre columnas
- [ ] En mobile, mockup al final con ancho máximo de 240 px
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Nota para las secciones siguientes

**La exploración visual tiene la estructura exacta de todas las secciones que faltan.** Antes de construir cada una, extraer del HTML: grilla, paddings, tamaños de fuente y tratamiento de bordes. Es más rápido que iterar sobre capturas y evita desvíos como los de esta ronda.

Dos valores ya confirmados para lo que viene:

- **Qué incluye:** `grid-template-columns: repeat(3, 1fr)`, `gap: 1px` sobre fondo `--rule`, celdas con `padding: 24px`, etiqueta `BLOQUE 01` en mono 11 px, título en Archivo 600 18 px, ítems en columna con `gap: 8px`.
- El contenido de esa sección **sí cambia**: son cuatro bloques, no tres (`UX_SPEC.md` §05 incluye `PARA QUE TE ENCUENTREN`), así que la grilla pasa a 2×2 en desktop.

---

## Fuera de alcance

- Hero, Problema y Recorrido.
- Copy de la sección, que ya está correcto.
- Secciones posteriores.
