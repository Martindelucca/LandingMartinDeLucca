# FIXES v12 — Sección "Qué incluye"

**Fecha:** 2026-08-11
**Alcance:** solo la sección *Qué incluye*. **No tocar secciones anteriores.**
**Origen:** medidas exactas del HTML de la exploración visual.
**Referencias:** `docs/UX_SPEC.md` §05 · `docs/DESIGN_SYSTEM.md` v1.1
**Rondas anteriores:** `_v9` ✅ · `_v10` ✅ · `_v11` ✅

**Estado:** estructura correcta (grilla con hairlines de 1 px, etiquetas `BLOQUE 01`, cuatro bloques con el contenido de la spec). Las correcciones son de tratamiento tipográfico y de escala.

---

## P1

### R-01 · Títulos de bloque en caja normal y 18 px

**Problema.** Los títulos están en mayúsculas y a ~26 px. La referencia es Archivo 600 **18 px, caja normal**.

Dos consecuencias:

1. **Compiten con las etiquetas mono.** `BLOQUE 01` y `ANTES DE DISEÑAR` son ambos texto en mayúsculas, uno encima del otro. Se pierde la separación entre capa de sistema (mono, mayúsculas) y capa de contenido (Archivo, caja normal) — que es lo que hace legible esta dirección.
2. **Compiten con los H2 de sección.** A 26 px, un título de bloque pesa casi lo mismo que el titular de una sección entera.

**Cambio.**

```
título de bloque: Archivo 600; font-size: 18px; caja normal;
                  margin-bottom: 14px;
etiqueta BLOQUE:  JetBrains Mono 11px; color: var(--text);
                  margin-bottom: 14px;
```

**Regla general que aplica a todo el sitio:** las mayúsculas están reservadas al mono. Cualquier texto en Archivo va en caja normal.

### R-02 · Cuatro columnas desde 1280 px

**Problema.** A 1920 px, dos columnas dan celdas de ~875 px. Cada ítem entra en una sola línea y queda medio ancho de caja vacío. Es el mismo patrón ya corregido en la grilla de citas.

**Cambio.**

| Ancho | Columnas | Ancho de celda |
|---|---|---|
| < 900 px | 1 | full |
| 900–1279 px | 2 | ~400–600 px |
| ≥ 1280 px | **4** | ~430–600 px |

Con cuatro columnas, los ítems largos ("Copy orientado a consultas — no necesitás traer los textos", "Datos estructurados para buscadores y asistentes de IA") pasan a dos líneas y le dan cuerpo a la celda.

**Criterio:** ancho útil de celda 400–600 px. Por encima de 700 px el contenido queda en una línea y la caja se ve vacía.

**No** resolverlo con `max-width` en la grilla: rompería el full-bleed (`DESIGN_SYSTEM.md` §5).

---

## P2

### R-03 · Espaciado entre ítems

**Problema.** Los ítems están separados ~14 px; la referencia es 8 px. Estira las celdas sin aportar legibilidad.

**Cambio.** `display: flex; flex-direction: column; gap: 8px`, color `--text`.

### R-04 · Padding de celda

Verificar 24 px (no 26, que es el de las celdas de citas). Son dos grillas distintas y cada una tiene su valor.

---

## Lo que NO es un problema

**Las alturas desiguales entre bloques son correctas.** El bloque 01 tiene tres ítems y el 02 cuatro, así que el 01 queda con espacio abajo. Con la técnica del `gap: 1px` sobre fondo `--rule`, **las celdas tienen que estirarse a la altura de su fila** para que los hairlines queden continuos. Cualquier hueco deja ver el fondo gris.

No "arreglar" esto con alturas automáticas: reintroduce el bug que se corrigió en J-01.

---

## Verificación

- [ ] Títulos de bloque en caja normal, Archivo 600, 18 px
- [ ] Mayúsculas solo en mono en toda la sección
- [ ] 4 columnas ≥1280 px · 2 columnas 900–1279 px · 1 columna <900 px
- [ ] Ancho de celda entre 400 y 600 px a 1440 y 1920 px
- [ ] Filas cerradas, sin celdas vacías ni superficies grises
- [ ] `gap: 8px` entre ítems
- [ ] `padding: 24px` en celda
- [ ] Sin `max-width` en la grilla ni en la sección
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Nota para las secciones siguientes

**R-01 es una regla, no una corrección puntual.** Antes de construir *Cómo trabajamos*, *Un caso*, *Quién soy* e *Inversión*: los títulos y el contenido van en Archivo caja normal; las mayúsculas quedan para las etiquetas mono. Si aparece un título en versalitas en cualquier sección, es el mismo error.

**R-02 también va a repetirse.** *Cómo trabajamos* tiene cuatro pasos: aplica el mismo criterio de 400–600 px por celda, o sea cuatro columnas desde 1280 px y dos entre 900 y 1279.

---

## Fuera de alcance

- Copy de la sección, que está correcto.
- Secciones anteriores y posteriores.
