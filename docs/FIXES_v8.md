# FIXES v8 — Sección "Recorrido"

**Fecha:** 2026-08-11
**Alcance:** solo la sección *Recorrido*. **No tocar hero, Problema ni Qué cambia.**
**Referencias:** `docs/UX_SPEC.md` §04 · `docs/DESIGN_SYSTEM.md` v1.1 §1 y §8
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `_v5` ✅ · `_v6` ✅ · `_v7` ✅

**Estado:** la sección está bien construida. Dos filas alineadas, nodo 01 idéntico en ambas, etiqueta de canales presente, numeración correcta, nodo final con relleno. Las correcciones son de tratamiento, no de estructura.

---

## P1

### N-01 · La fila `ANTES` no está apagada

**Problema.** Las dos filas usan prácticamente el mismo blanco en texto y número. Solo se distinguen por el borde (punteado vs. sólido).

Sin diferencia de intensidad, `ANTES` y `DESPUÉS` se leen como **dos opciones equivalentes**, que es lo contrario del argumento: una es el estado degradado y la otra el estado deseado.

**Cambio.** Aplicar los estados de `UX_SPEC.md` §04:

| | Texto | Número mono |
|---|---|---|
| `ANTES` | `--text-on-ink-muted` (#8E9997) | `--text-on-ink-muted` |
| `DESPUÉS` 01–04 | `--text-on-ink` (#F1F1EE) | `--green-light` |
| `DESPUÉS` 05 | `--on-green` | `--on-green` |

⚠️ El número `05` de `DESPUÉS` está sobre relleno `--green`, no sobre `--ink`. **No usar `--green-light` ahí** — ese par no pasa contraste. Va en `--on-green`.

### N-02 · Altura forzada en los nodos de `ANTES`

**Problema.** El nodo 01 tiene tres elementos (número, texto, etiqueta de canales); los otros cuatro tienen dos. La fila se estiró a la altura del 01, así que los nodos 02–05 quedan con ~28 px de vacío abajo, enmarcado por el borde punteado.

**Cambio.** La altura de cada nodo la determina su contenido, no la fila. Los nodos se alinean **arriba** (`align-items: start`) y los 02–05 quedan más bajos que el 01.

**La comparación entre filas se sostiene por la alineación horizontal de las columnas, no por la altura de los nodos.** Esa alineación no se toca.

*Alternativa si se prefiere altura pareja:* mover la etiqueta de canales fuera del nodo, debajo de la fila `ANTES`, alineada a la izquierda. Pierde el anclaje visual al nodo 01, que es lo que hoy la hace clara. **Preferir la opción principal.**

### N-03 · La línea de cierre está en medida de lectura

**Problema.** *"La web es el vehículo. Lo que armo es el recorrido."* ocupa ~490 px de un viewport de 1900 y rompe en dos líneas cortas. Es una frase de remate, no texto corrido.

**Cambio.** Una sola línea, sin `max-width: 34rem`. Mismo criterio que se aplicó al H2: **la medida de lectura es para párrafos, no para titulares ni frases de cierre.**

### N-04 · Borde inferior de sección

**Problema.** El bloque oscuro corta contra el claro de la sección siguiente sin filete. El resto de las secciones lleva `border-bottom: 1px solid --rule`.

**Cambio.** Verificar el tratamiento del quiebre. Dos salidas válidas, pero tiene que ser **la misma en los dos bloques oscuros** (*Recorrido* y *Empezar*):
- filete `--rule` al cierre de la sección oscura, o
- corte limpio sin filete, declarado como excepción para fondos oscuros en `DESIGN_SYSTEM.md`.

Lo que no puede pasar es que un bloque oscuro tenga filete y el otro no.

---

## P2

### N-05 · Espaciado entre bloques

**Problema.** Hoy: H2 → `ANTES` ~50 px; `ANTES` → `DESPUÉS` ~30 px; diagrama → cierre ~40 px. Son valores desparejos y fuera de la escala.

**Cambio.**

| Del | Al | Valor |
|---|---|---|
| H2 | Diagrama | 48 px |
| Fila `ANTES` | Fila `DESPUÉS` | 24 px |
| Diagrama | Línea de cierre | 32 px |

**Criterio:** la separación **entre las dos filas debe ser menor** que la del diagrama con sus vecinos. Las dos filas son una sola unidad de comparación; si respiran más entre sí que con el resto, se leen como dos elementos distintos.

### N-06 · Aire de las etiquetas `ANTES` / `DESPUÉS`

Cada etiqueta está a ~10 px de su fila, con más aire arriba. Se lee ambigua: no queda claro si pertenece a la fila que sigue o a la que termina.

**Cambio.** 24 px arriba, 12 px abajo. La etiqueta pertenece a la fila que sigue.

### N-07 · Glifo de WhatsApp en el nodo 05 de `DESPUÉS`

Es el único nodo con relleno de toda la página y marca el mismo destino que el CTA. Un glifo de 14 px a la izquierda de "Te escriben" cierra el vínculo visual entre el diagrama y el botón.

Opcional, pero es el detalle que convierte el diagrama en argumento del CTA.

---

## Verificación

- [ ] Fila `ANTES` en `--text-on-ink-muted`, visiblemente apagada respecto de `DESPUÉS`
- [ ] Número `05` de `DESPUÉS` en `--on-green`, no en `--green-light`
- [ ] Nodos alineados arriba; los 02–05 de `ANTES` más bajos que el 01
- [ ] Alineación horizontal entre columnas intacta
- [ ] Línea de cierre en una sola línea a 1440 y 1920 px
- [ ] Tratamiento del borde inferior igual en los dos bloques oscuros
- [ ] Espaciados: 48 / 24 / 32 px
- [ ] En mobile, las dos filas apiladas y completas, sin intercalar
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## ⚠️ Decisión pendiente — NO ejecutar

**No implementar nada de esto hasta confirmación explícita.**

**Contexto.** La exploración visual iba `Problema → Recorrido`, sin sección de mecanismos. La sección *Qué cambia* se agregó al cambiar la tesis.

**Problema detectado.** Hay redundancia: el diagrama dice `te buscan → te encuentran → entienden → confían → te escriben` y los tres bloques dicen `te encuentran / te toman en serio / te escriben mejor`. Es el mismo contenido dos veces seguidas, en dos formatos, antes de entregar nada concreto.

**Opción A (recomendada).** Invertir el orden y reescribir los tres bloques en clave concreta:

`Problema → Recorrido → Qué hago para que eso pase → Qué construyo`

El diagrama muestra **qué cambia** (el estado). Los tres bloques muestran **cómo se consigue** (sitio propio, ficha de Google, copy que explica antes del WhatsApp). Con esa división desaparece la repetición.

Requiere reescribir el copy de los tres bloques: hoy repiten el estado en vez de explicar el método.

**Opción B.** Eliminar la sección y absorber su contenido en *Qué incluye*, que ya tiene el bloque `PARA QUE TE ENCUENTREN`. Más económico, pero la promesa del hero queda sin explicación durante mucho scroll.

**Impacto en documentos.** Cualquiera de las dos obliga a actualizar `UX_SPEC.md` (§03, §04 y la tabla de numeración visible) antes de tocar código.

---

## Fuera de alcance

- Hero, Problema y Qué cambia.
- El orden de las secciones, hasta que se resuelva la decisión pendiente.
- Secciones posteriores a *Recorrido*.
