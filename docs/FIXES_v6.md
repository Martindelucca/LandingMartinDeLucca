# FIXES v6 — Grilla de la sección Problema

**Fecha:** 2026-08-11
**Alcance:** solo la sección Problema. **Nada más se toca.**
**Referencias:** `docs/UX_SPEC.md` §02 (actualizada) · `docs/DESIGN_SYSTEM.md` v1.1
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `FIXES_v5.md` ✅

---

## Diagnóstico

Dos problemas, uno de contenido y uno de layout. **La fila huérfana es el síntoma visible; el ancho de celda es el que hace que la sección se vea anémica.**

**1. Cinco citas no cierran una grilla par.** La quinta queda sola en una fila a ancho completo, con una línea de texto y ~1.200 px de vacío a la derecha. Error de la spec, no de la implementación: pedía cinco elementos para una grilla de dos columnas.

**2. Las celdas son demasiado anchas.** A 1920 px, dos columnas full-bleed dan celdas de ~875 px. Cada cita entra en una sola línea y la caja queda mayormente vacía. En la exploración visual las celdas miden ~400 px y las citas ocupan 2–3 líneas, que es lo que les da cuerpo.

La exploración se veía a ~900 px de viewport, así que su grilla de dos columnas nunca se puso a prueba en pantallas anchas. **La estructura full-bleed es correcta; lo que no escala es la cantidad fija de columnas.**

---

## P1

### K-01 · Sexta cita

**Cambio.** Agregar en tercera posición:

> «No sé si la gente que mira mi perfil entiende lo que vendo.»

Sale del buyer persona y cubre el hueco entre "no me encuentran" y "no me escriben bien", que hoy no dice ninguna cita. Con seis, la grilla cierra en 1, 2 o 3 columnas.

**Orden completo y definitivo** (el mismo del diagrama del hero):

1. «Me recomendaron, me buscaron en Google y no encontraron nada mío.»
2. «Tengo buenos clientes, pero online parezco improvisado.»
3. «No sé si la gente que mira mi perfil entiende lo que vendo.»
4. «Todo está repartido entre publicaciones, destacadas y chats.»
5. «Me preguntan siempre lo mismo: precio, cómo funciona, qué incluye.»
6. «Me escriben, contesto todo, y después desaparecen.»

⚠️ El texto va en `site.json`, no en el componente.

### K-02 · Columnas por breakpoint

**Problema.** La grilla es de dos columnas en todos los anchos.

**Cambio.**

| Ancho | Columnas | Ancho de celda resultante |
|---|---|---|
| < 900 px | 1 | full |
| 900–1279 px | 2 | ~400–600 px |
| ≥ 1280 px | **3** | ~430–600 px |

**Criterio, por si el rango cambia:** el ancho útil de celda es 400–600 px. Ahí la cita ocupa 2–3 líneas y la caja tiene cuerpo. Por encima de 700 px la cita entra en una línea y la celda se ve vacía.

**No** resolverlo poniendo un `max-width` a la grilla: rompería el full-bleed, que es la decisión estructural de la dirección (`DESIGN_SYSTEM.md` §5).

### K-03 · Verificar que se mantengan los hairlines

Con tres columnas, la técnica de `gap: 1px` sobre fondo `--rule` tiene que seguir funcionando: celdas al 100 % de su columna, `background: var(--paper)`, `padding: 26px`, y el contenedor con `background: var(--rule)` y `border: 1px solid var(--rule)`.

**Verificar que no quede ninguna superficie gris visible.** Es el bug que J-01 acaba de corregir y esta reconfiguración puede reintroducirlo.

---

## Verificación

- [ ] Seis citas, en el orden especificado, desde `site.json`
- [ ] 3 columnas ≥1280 px · 2 columnas 900–1279 px · 1 columna <900 px
- [ ] Todas las filas cerradas, sin celdas vacías ni filas huérfanas en ningún ancho
- [ ] Ninguna superficie gris visible entre celdas
- [ ] Ancho de celda entre 400 y 600 px a 1440 px y a 1920 px
- [ ] Filas de la misma altura dentro de cada fila
- [ ] Sin `max-width` en la grilla ni en la sección
- [ ] Mobile sin cambios de comportamiento
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Archivos actualizados

| Archivo | Cambio |
|---|---|
| `docs/UX_SPEC.md` §02 | Seis citas, criterio de ancho de celda, grilla por breakpoint |

---

## Fuera de alcance

Todo lo demás. El hero quedó correcto en la ronda anterior y no se toca.
