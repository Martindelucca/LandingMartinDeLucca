# FIXES v9 — Eliminar "Qué cambia" + correcciones de "Recorrido"

**Fecha:** 2026-08-11
**Referencias:** `docs/UX_SPEC.md` (actualizado) · `docs/DECISIONS.md` → D-20 · `docs/DESIGN_SYSTEM.md` v1.1
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `_v5` ✅ · `_v6` ✅ · `_v7` ✅
**Reemplaza a:** `FIXES_v8.md` — ese documento queda anulado. La decisión pendiente que planteaba está resuelta acá.

---

# PARTE A · Eliminar la sección "Qué cambia"

## O-01 · Eliminar la sección y renumerar (P0)

**Contexto.** La sección *Qué cambia* (tres bloques: te encuentran / te toman en serio / te escriben mejor) es redundante con el diagrama del recorrido, que dice lo mismo en otro formato inmediatamente después. Ver `DECISIONS.md` → D-20.

**Cambio.**

1. **Eliminar la sección completa**, incluidos su componente y su entrada en `site.json`.
2. **Renumerar las etiquetas visibles.** Orden definitivo:

| Sección | Etiqueta visible |
|---|---|
| Hero | *(sin etiqueta)* |
| Problema | `01 / PROBLEMA` |
| Recorrido | `02 / RECORRIDO` |
| Qué construyo | `03 / QUÉ CONSTRUYO` |
| Qué incluye | `04 / QUÉ INCLUYE` |
| Cómo trabajamos | `05 / CÓMO TRABAJAMOS` |
| Un caso | `06 / UN CASO` |
| Quién soy | `07 / QUIÉN SOY` |
| Inversión | `08 / INVERSIÓN` |
| Preguntas | `09 / PREGUNTAS` |
| Empezar | `10 / EMPEZAR` |

3. **Eliminar el ancla `#mecanismos`** de la lista de deep-links.

⚠️ **Que el número salga del índice del array de secciones**, no de una cadena escrita a mano en cada componente. Con diez secciones y una recién eliminada, la numeración a mano se desincroniza sola.

## O-02 · Ampliar el cierre del Recorrido (P0)

**Por qué.** Al eliminarse la sección, **el cierre del Recorrido pasa a ser el único punto del flujo donde los tres mecanismos se nombran juntos y en orden.** Sin esto, la promesa del hero queda sin ningún respaldo hasta el método de *Qué construyo*.

**Cambio.** Reemplazar el cierre actual por:

> La web es el vehículo. Lo que armo es el recorrido: que te encuentren cuando te buscan, que vean un negocio y no un perfil, y que te escriban sabiendo qué ofrecés.

**No acortarlo.** Es la única mitigación del hueco que deja la sección eliminada.

Va en `site.json`.

---

# PARTE B · Correcciones de la sección "Recorrido"

## P1

### O-03 · La fila `ANTES` no está apagada

**Problema.** Las dos filas usan prácticamente el mismo blanco en texto y número. Solo se distinguen por el borde. Sin diferencia de intensidad, `ANTES` y `DESPUÉS` se leen como **dos opciones equivalentes**, que es lo contrario del argumento.

**Cambio.**

| | Texto | Número mono |
|---|---|---|
| `ANTES` | `--text-on-ink-muted` (#8E9997) | `--text-on-ink-muted` |
| `DESPUÉS` 01–04 | `--text-on-ink` (#F1F1EE) | `--green-light` |
| `DESPUÉS` 05 | `--on-green` | `--on-green` |

⚠️ El número `05` de `DESPUÉS` está sobre relleno `--green`, no sobre `--ink`. **No usar `--green-light` ahí** — ese par no pasa contraste. Va en `--on-green`.

### O-04 · Altura forzada en los nodos de `ANTES`

**Problema.** El nodo 01 tiene tres elementos (número, texto, etiqueta de canales); los otros cuatro tienen dos. La fila se estiró a la altura del 01 y los nodos 02–05 quedan con ~28 px de vacío enmarcado por el borde punteado.

**Cambio.** La altura de cada nodo la determina su contenido, no la fila: nodos alineados **arriba** (`align-items: start`).

**La comparación entre filas se sostiene por la alineación horizontal de las columnas, no por la altura de los nodos.** Esa alineación no se toca.

### O-05 · La línea de cierre está en medida de lectura

**Problema.** El cierre ocupa ~490 px de un viewport de 1900 y rompe en líneas cortas. Con el texto ampliado de O-02 el problema empeora.

**Cambio.** Sin `max-width: 34rem`. Que ocupe hasta ~70 % del ancho de la sección. **La medida de lectura es para párrafos, no para titulares ni frases de cierre.**

### O-06 · Borde inferior de sección

**Problema.** El bloque oscuro corta contra el claro siguiente sin filete, mientras el resto de las secciones lleva `border-bottom`.

**Cambio.** Definir un tratamiento y aplicarlo **igual en los dos bloques oscuros** (*Recorrido* y *Empezar*): filete `--rule` al cierre, o corte limpio declarado como excepción. Lo que no puede pasar es que uno tenga filete y el otro no.

## P2

### O-07 · Espaciado entre bloques

| Del | Al | Valor |
|---|---|---|
| H2 | Diagrama | 48 px |
| Fila `ANTES` | Fila `DESPUÉS` | 24 px |
| Diagrama | Línea de cierre | 32 px |

**Criterio:** la separación entre las dos filas debe ser **menor** que la del diagrama con sus vecinos. Las dos filas son una sola unidad de comparación.

### O-08 · Aire de las etiquetas `ANTES` / `DESPUÉS`

24 px arriba, 12 px abajo. La etiqueta pertenece a la fila que sigue, y hoy se lee ambigua.

### O-09 · Glifo de WhatsApp en el nodo 05 de `DESPUÉS`

Es el único nodo con relleno de la página y marca el mismo destino que el CTA. Un glifo de 14 px a la izquierda de "Te escriben" cierra el vínculo entre el diagrama y el botón. Opcional.

---

## Verificación

**Parte A**
- [ ] Sección *Qué cambia* eliminada: componente y entrada en `site.json`
- [ ] Numeración visible corrida de `01 / PROBLEMA` a `10 / EMPEZAR`, sin saltos ni duplicados
- [ ] El número sale del índice del array, no de cadenas a mano
- [ ] Ancla `#mecanismos` eliminada
- [ ] Cierre del Recorrido con el texto ampliado completo

**Parte B**
- [ ] Fila `ANTES` visiblemente apagada respecto de `DESPUÉS`
- [ ] Número `05` de `DESPUÉS` en `--on-green`
- [ ] Nodos alineados arriba; los 02–05 de `ANTES` más bajos que el 01
- [ ] Alineación horizontal entre columnas intacta
- [ ] Cierre en una o dos líneas largas, sin `max-width` de lectura
- [ ] Borde inferior con el mismo tratamiento en los dos bloques oscuros
- [ ] Espaciados 48 / 24 / 32 px
- [ ] En mobile, las dos filas apiladas y completas, sin intercalar
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Archivos actualizados en esta ronda

| Archivo | Cambio |
|---|---|
| `docs/UX_SPEC.md` | Sección de mecanismos eliminada · todo renumerado · tabla "dónde vive cada mecanismo" · cierre del Recorrido ampliado |
| `docs/DECISIONS.md` | D-20 nueva |
| `docs/FIXES_v8.md` | **Anulado**, reemplazado por este documento |

---

## Fuera de alcance

- Hero y Problema, que están correctos.
- Copy del H1 y de las citas.
- Secciones posteriores a *Recorrido*.
