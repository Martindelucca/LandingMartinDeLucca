# FIXES v7 — "Qué cambia" (revisión) + "Recorrido" (a construir)

**Fecha:** 2026-08-11
**Referencias:** `docs/UX_SPEC.md` §03 y §04 · `docs/DESIGN_SYSTEM.md` v1.1 §8
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `_v5` ✅ · `_v6` ✅

Este documento tiene dos partes:

- **Parte A** — correcciones sobre la sección *Qué cambia*, ya construida.
- **Parte B** — especificación de la sección *Recorrido*, que **todavía no está construida**.

**Estado de lo anterior:** la grilla de Problema quedó correcta (tres columnas, filas cerradas, sin superficies grises). No se toca.

---

# PARTE A · Sección "Qué cambia" — correcciones

## P1

### M-01 · Desbalance entre los tres bloques

**Problema.** El bloque `01 / TE ENCUENTRAN` tiene cinco líneas; el `03 / TE ESCRIBEN MEJOR`, dos. Las cards se estiran a la misma altura, así que la tercera queda con dos tercios de espacio vacío.

`UX_SPEC.md` §03 pide que **los tres bloques tengan el mismo peso visual**. Si uno domina, el prospecto lee que los otros dos mecanismos son secundarios — y son justamente los que sostienen la promesa nueva.

**Cambio — copy, va en `site.json`:**

- **Bloque 01, acortar a tres líneas:**
  > Cuando alguien te recomienda, lo primero que hace es buscarte. Hoy encuentra un perfil. Quiero que encuentre tu negocio: sitio propio, ficha de Google y todo escrito para que un buscador o una IA entiendan qué hacés.

- **Bloque 03, extender a tres líneas:**
  > Que cuando te escriban ya sepan qué ofrecés, cómo trabajás y cuánto sale. En vez de arrancar cada conversación de cero, empezás donde antes terminabas.

- **Bloque 02:** sin cambios, ya está en tres líneas.

⚠️ El bloque 01 debe conservar *"para que un buscador o una IA entiendan"*. **Nunca** *"para que aparezcas en Google"* (D-17).

## P2

### M-02 · Ancho de card en pantallas muy anchas

A 1920 px cada card mide ~600 px, dentro del rango útil (400–600). **Verificar a 2560 px:** si supera los 700 px, limitar el **texto interno** de la card a la medida de lectura — no la card, que debe seguir llenando su columna.

---

# PARTE B · Sección "Recorrido" — especificación

**Estado: no construida.**

## Regla que gobierna esta sección

**El tratamiento visual se replica de la exploración de Design. El contenido se toma de `UX_SPEC.md` §04.**

La exploración tiene el aspecto correcto: fondo oscuro, cinco nodos horizontales, número mono dentro del nodo, último nodo con relleno verde, línea de cierre debajo. **Eso se conserva tal cual.**

Lo que no se conserva es su contenido. Esa pieza se diseñó antes del cambio de tesis: su cadena (`Instagram → Landing → Entiende → Confía → WhatsApp`) describe **canales**, y la tesis vigente describe **la decisión de la persona**. Además le falta la fila de comparación.

## Estructura

### 1 · Etiqueta de sección

`03 / RECORRIDO`, mono, `--green-light` sobre fondo oscuro.

### 2 · H2

> No quiero reemplazar tu Instagram. Quiero aprovechar mejor a la gente que ya te busca — ahí y en todos lados.

⚠️ Texto vigente. La versión de la exploración termina en *"la gente que ya te descubre ahí"*, que encierra el descubrimiento dentro de Instagram y contradice el mecanismo 01.

**Ancho:** hasta ~60 % de la sección (tope aproximado 1.000 px), para que rompa en dos o tres líneas en pantallas anchas. **No** aplicarle el `max-width: 34rem` de la medida de lectura: esa restricción es para texto corrido, no para titulares. Un titular en una columna de 600 px sobre un viewport de 1900 se lee como una columna perdida en el negro.

### 3 · Diagrama antes/después

**Dos filas de cinco nodos, horizontales, alineadas posición por posición:**

| | 01 | 02 | 03 | 04 | 05 |
|---|---|---|---|---|---|
| **ANTES** | Te buscan | Te encuentran a medias | No terminan de entender | Dudan | Desaparecen |
| **DESPUÉS** | Te buscan | Te encuentran | Entienden | Confían | Te escriben |

**Reglas:**

- **El nodo 01 es idéntico en las dos filas y no se altera.** Es el argumento visual completo: la gente ya te busca, lo que cambia es todo lo que pasa después. Si se "varía un poco para que no se repita", la sección pierde su sentido.
- Bajo el nodo 01 de `ANTES`, la etiqueta mono `GOOGLE · INSTAGRAM · UN CONOCIDO` — la misma del hero.
- Cada fila con su etiqueta mono: `ANTES` / `DESPUÉS`. La fila `ANTES` va arriba.
- **Horizontal**, a diferencia del hero, que es vertical. La comparación solo se lee si las posiciones se alinean en columna.

**Estados** (adaptación de `DESIGN_SYSTEM.md` §8 a fondo oscuro):

| | Borde | Relleno | Texto | Número mono |
|---|---|---|---|---|
| `ANTES` | 1 px punteado `--text-on-ink-muted` | ninguno | `--text-on-ink-muted` | `--text-on-ink-muted` |
| `DESPUÉS` 01–04 | 1 px sólido `--green` | ninguno | `--text-on-ink` | `--green-light` |
| `DESPUÉS` 05 | 1 px sólido `--green` | `--green` | `--on-green` | `--on-green` |

El nodo 05 de `DESPUÉS` es **el único nodo con relleno de toda la página**. Marca el destino del recorrido, que es el mismo destino del CTA.

**Medidas:** las de la exploración — número mono arriba, texto Archivo 600 debajo, `padding: 14px 16px`, gap uniforme entre nodos, radio 2 px.

### 4 · Cierre

> La web es el vehículo. Lo que armo es el recorrido.

En `--text-on-ink-muted`, debajo del diagrama.

### 5 · Sin CTA

Esta sección no lleva botón. El siguiente CTA aparece al final de *Qué construyo* (`UX_SPEC.md` §Sistema de CTAs).

## Responsive

| Ancho | Comportamiento |
|---|---|
| ≥ 1280 px | Dos filas de cinco nodos |
| 900–1279 px | Igual, nodos más angostos; verificar que ningún texto parta en más de dos líneas |
| < 900 px | Las dos filas apilan **en vertical y completas**: primero `ANTES` entero en columna, después `DESPUÉS` entero en columna. **No intercalar** los nodos de una fila con los de la otra: se pierde la comparación |

## Restricciones

- Legible y completo **sin JavaScript**.
- Si se anima la entrada de los nodos, respetar `prefers-reduced-motion` y que el estado final sea el visible por defecto.
- Fondo `--ink`. Es **uno de los dos únicos quiebres oscuros** de la página; el otro es *Empezar*. No agregar un tercero.

---

## Verificación

**Parte A**
- [ ] Los tres bloques de mecanismos con masa de texto pareja (tres líneas cada uno)
- [ ] El bloque 01 conserva la redacción "para que un buscador o una IA entiendan"
- [ ] Copy actualizado en `site.json`, no en el componente

**Parte B**
- [ ] Etiqueta `03 / RECORRIDO`
- [ ] H2 con el texto vigente ("…que ya te busca — ahí y en todos lados")
- [ ] H2 en dos o tres líneas a 1440 y 1920 px
- [ ] Dos filas de cinco nodos, alineadas por posición
- [ ] Nodo 01 idéntico en ambas filas
- [ ] Etiqueta `GOOGLE · INSTAGRAM · UN CONOCIDO` bajo el nodo 01 de `ANTES`
- [ ] `ANTES` punteada y apagada; `DESPUÉS` sólida; nodo 05 con relleno verde
- [ ] Cero rastros de la cadena anterior (`Instagram`, `Landing` como nodos)
- [ ] En mobile, las dos filas apiladas y completas, sin intercalar
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Fuera de alcance

- Hero y sección Problema, que están correctos.
- Copy del H1 y de las citas.
- Secciones posteriores a *Recorrido*.
