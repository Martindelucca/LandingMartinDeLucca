# FIXES v4 — Estructura (medidas exactas)

**Fecha:** 2026-08-11
**Alcance:** layout global + hero + sección 02. **No tocar copy ni contenido del diagrama.**
**Origen:** medidas extraídas del HTML de la exploración visual aprobada.
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `FIXES_HERO_v2.md` ✅ · `FIXES_HERO_v3.md` ✅

---

## Contexto: por qué esta ronda es distinta

Las tres rondas anteriores corrigieron síntomas (padding, alineación, sangrado) sobre una spec que tenía **dos errores estructurales**. Al comparar contra el HTML de la exploración aparecieron:

1. **No hay contenedor centrado.** `DESIGN_SYSTEM.md` v1.0 definía 1120 px centrados. La exploración es **full-bleed**, `padding: 56px 40px`, secciones separadas por `border-bottom`. Esto explica el aire lateral, el panel que no anclaba y la sensación de bloques flotando.
2. **El cuerpo es sans, no serif.** La spec pedía Source Serif 4; la exploración usa **Schibsted Grotesk**.

Ningún ajuste de padding iba a resolver esto. **`DESIGN_SYSTEM.md` está actualizado a v1.1 con los valores reales — leerlo antes de tocar nada.**

Aclaración: **"Sin Brújula Viajes" es el nombre real del cliente.** Las advertencias anteriores en contra quedan sin efecto y el nombre se publica.

---

## P0

### I-01 · Eliminar el contenedor centrado — layout full-bleed

**Problema.** Todas las secciones están dentro de un contenedor con `max-width: 1120px; margin-inline: auto`. La exploración no tiene contenedor.

**Cambio.**

```
sección: width: 100%; padding: 56px 40px;
         border-bottom: 1px solid var(--rule);
```

- Sin `max-width` a nivel de sección, en ningún breakpoint.
- **La medida de lectura se preserva a nivel de párrafo:** `max-width: 34rem` en el texto corrido. Full-bleed y legibilidad se resuelven en capas distintas, no compiten.
- Cada sección con `border-bottom`. El sitio es una pila de bloques delimitados.
- Padding lateral: 40 px desde 900 px, 20 px debajo, 64 px desde 1280 px.

**Consecuencia:** H-04 de la ronda anterior (sangrado del panel) deja de necesitar un tratamiento especial — con full-bleed el panel llega al borde por construcción.

### I-02 · Reconstruir la grilla del hero

**Problema.** La grilla actual tiene columnas separadas por gutter, con el divisor agregado aparte.

**Cambio.**

```
hero:      display: grid; grid-template-columns: 1.05fr .95fr;
           border-bottom: 1px solid var(--rule-hard);
col-izq:   padding: 56px 40px; border-right: 1px solid var(--rule);
col-der:   padding: 56px 40px; background: var(--panel) + retícula;
```

- **Sin `gap`.** La separación es el `border-right` de la columna izquierda. Ese borde *es* el divisor (H-05).
- Ambas columnas comparten `padding-top: 56px`, así que **el panel queda alineado con el eyebrow por construcción**, sin reglas adicionales.
- Columnas asimétricas 1.05 / 0.95, no 50/50.

### I-03 · Retícula como fondo de columna, no como caja

**Problema.** La retícula está en una caja interna del panel, con borde propio.

**Cambio.**

```
background-color: #E8E8E3;
background-image: linear-gradient(#D3D3CC 1px, transparent 1px),
                  linear-gradient(90deg, #D3D3CC 1px, transparent 1px);
background-size: 32px 32px;
```

Aplicado a **toda la columna derecha**. Sin borde propio, sin caja contenedora. Por debajo de 900 px se quita el `background-image` y queda solo el color de fondo.

### I-04 · Cambiar el cuerpo tipográfico a sans

**Problema.** El cuerpo está en serif (Source Serif 4, según `DESIGN_SYSTEM.md` v1.0). La dirección aprobada usa sans.

**Cambio.** Cuerpo en **Schibsted Grotesk** 400/600, autoalojada en WOFF2. Titulares siguen en Archivo, sistema en JetBrains Mono. Eliminar la familia serif del proyecto y su precarga.

---

## P1

### I-05 · Compactar el diagrama

**Problema.** Cada nodo mide ~90 px de alto para una línea de texto. El diagrama entero pasa de 600 px y desbalancea las columnas.

**Cambio.**

```
contenedor: display: flex; flex-direction: column; gap: 10px;
nodo:       padding: 14px 16px; font: Archivo 600 15px;
flecha:     ítem propio del flex, mono 12px,
            color var(--text), padding-left: 16px;
```

Nodo ≈ 48 px de alto. **La flecha es un ítem más del flex, no un margen** — de ahí el ritmo parejo. Cinco nodos entran en ~450 px.

### I-06 · Bordes del diagrama: sólido → punteado

**Problema.** Los cinco nodos tienen el mismo borde punteado (criterio de `FIXES_HERO.md` §F-08).

**Cambio.** Se adopta el criterio de la exploración, que es mejor: **la degradación del trazo cuenta la historia.**

| Nodos | Borde | Fondo | Texto |
|---|---|---|---|
| 01, 02 | `1px solid var(--ink)` | `--paper` | `--text-strong` |
| 03, 04, 05 | `1px dashed var(--text)` | sin fondo | `--text` |

Arranca firme y se desdibuja. F-08 queda revertido.

### I-07 · CTA del header: pieza propia, no botón reducido

**Problema.** El header repite el botón completo, con el mismo peso que el primario del hero.

**Cambio.**

```
padding: 11px 16px; background: var(--ink); color: var(--paper);
font: JetBrains Mono 12px; letter-spacing: .04em;
```

Con un cuadrado de 8 px `--green` a la izquierda (no el glifo de WhatsApp) y el texto `WHATSAPP`. Es una pieza de otro registro, por eso no compite.

### I-08 · Header con borde duro

**Problema.** El header usa `border-bottom: 1px solid --rule` dentro del contenedor.

**Cambio.** `padding: 16px 40px`, `border-bottom: 1px solid var(--ink)` **a todo el ancho del viewport**. Es un borde duro, no un filete suave: marca el arranque de la estructura.

### I-09 · Microcopy en mono y mayúsculas

**Problema.** `Te contesto yo, no un bot.` está en cuerpo minúscula.

**Cambio.** `TE CONTESTO YO, NO UN BOT.` — JetBrains Mono 12 px, `--text`, `margin-top: 12px`. Mismo tratamiento para la micro-prueba del pie del panel.

### I-10 · Ajustar la paleta a los valores reales

**Problema.** Los tokens de v1.0 eran aproximaciones. Los reales difieren lo suficiente como para notarse.

| Token | v1.0 | **v1.1 (real)** |
|---|---|---|
| `--paper` | #F1EFEA | **#F1F1EE** |
| `--panel` | #E7E5DE | **#E8E8E3** |
| `--ink` | #0D1311 | **#0E1211** |
| `--text` | #2E3733 | **#4B5250** |
| `--green` | #0E5C45 | **#0E6B57** |
| `--rule` | #D5D2C9 | **#D3D3CC** |
| `--green-light` | #3FBE93 | **#6FBFA8** |

Todos los pares verificados contra WCAG AA (ver `DESIGN_SYSTEM.md` §1). Barrer el CSS y eliminar cualquier valor fuera de esta tabla.

---

## P2

### I-11 · Celdas de la sección 02 con la técnica del gap de 1 px

**Cambio.** La grilla de citas usa `gap: 1px` sobre `background: var(--rule)` y `border: 1px solid var(--rule)`, con cada celda en `background: var(--paper)` y `padding: 26px`. Así los separadores son hairlines reales de 1 px, sin bordes dobles.

### I-12 · Altura del botón primario a 56 px

`height: 56px` (v1.0 decía 52 px, que era el mínimo táctil, no el valor de la dirección). Sigue cumpliendo el mínimo de 44 px de área táctil.

---

## Verificación

- [ ] Ninguna sección tiene `max-width` ni `margin-inline: auto`
- [ ] Todas las secciones con `padding: 56px 40px` y `border-bottom`
- [ ] Párrafos de texto corrido con `max-width: 34rem`
- [ ] Hero con grilla `1.05fr .95fr`, sin `gap`, con `border-right` en la columna izquierda
- [ ] Retícula como `background-image` de la columna, sin caja interna
- [ ] Cuerpo en Schibsted Grotesk; ninguna familia serif en el proyecto
- [ ] Nodos de ~48 px de alto, flechas como ítems del flex
- [ ] Nodos 01–02 sólidos, 03–05 punteados
- [ ] CTA del header en mono sobre fondo oscuro, con cuadrado verde
- [ ] Microcopy en mono mayúscula
- [ ] Cero colores fuera de la tabla de I-10
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1440 y 1920 px

---

## Archivos actualizados en esta ronda

| Archivo | Cambio |
|---|---|
| `docs/DESIGN_SYSTEM.md` | → **v1.1**: paleta, tipografía, escala, espaciado, grilla full-bleed, botones y diagrama con medidas exactas |
| `docs/DECISIONS.md` | D-13 revisada (sans), D-12 aclarada (Sin Brújula es real), D-19 con los dos hallazgos |
| `docs/UX_SPEC.md` | Retiradas las advertencias sobre el nombre del cliente |
| `README.md` | Retirado el insumo bloqueante del nombre real |

---

## Fuera de alcance

- Copy del H1, la bajada, el microcopy y las citas.
- Contenido y orden de los nodos del diagrama (incluido `05 · DESAPARECEN`, que es decisión del cliente).
- Secciones 03 en adelante: se implementan según `UX_SPEC.md` v2.0 con los tokens de `DESIGN_SYSTEM.md` v1.1.
