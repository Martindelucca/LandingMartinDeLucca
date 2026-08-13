# FIXES v11 — Recorrido sin fila "ANTES"

**Fecha:** 2026-08-11
**Alcance:** sección *Recorrido*, más una verificación en *Qué construyo*.
**Referencias:** `docs/UX_SPEC.md` §03 (actualizada) · `docs/DECISIONS.md` → D-21
**Rondas anteriores:** `FIXES_HERO.md` ✅ · `_v2` ✅ · `_v3` ✅ · `FIXES_v4.md` ✅ · `_v5` ✅ · `_v6` ✅ · `_v7` ✅ · `_v8` ❌ anulado · `_v9` ✅ · `_v10` ✅

**Nota:** las correcciones O-03 a O-09 de `FIXES_v9.md` siguen vigentes para la fila que queda, salvo las que aplicaban específicamente a `ANTES` (O-03 parcial, O-04, O-08).

---

## P0

### Q-01 · Eliminar la fila `ANTES`

**Problema.** El hero ya muestra esa cadena completa (`te buscan → te encuentran a medias → no terminan de entender → dudan → desaparecen`). Repetirla en el Recorrido es la misma información dos veces, con una sola sección de por medio.

**Cambio.** El diagrama queda en **una sola fila de cinco nodos**:

| 01 | 02 | 03 | 04 | 05 |
|---|---|---|---|---|
| Te buscan | Te encuentran | Entienden | Confían | Te escriben |

- Se elimina la fila `ANTES` completa y su etiqueta.
- Se elimina también la etiqueta `DESPUÉS`: sin comparación, no hay nada que rotular.
- **El nodo 01 sigue diciendo `Te buscan`**, igual que el primer nodo del hero. Ese eco es lo que reemplaza a la comparación visual. **No cambiarlo por otra cosa.**
- Bajo el nodo 01, se conserva la etiqueta mono `GOOGLE · INSTAGRAM · UN CONOCIDO`.

### Q-02 · Línea de puente al hero

**Problema.** Sin la fila `ANTES`, la cadena sola puede leerse como un embudo genérico de marketing.

**Cambio.** Agregar entre el H2 y el diagrama:

> Arriba viste cómo es hoy. Así queda.

Cuerpo, `--text-on-ink-muted`, con 24 px arriba y 32 px abajo.

⚠️ **Obligatoria.** Junto con el nodo 01 repetido, es lo único que ata este diagrama al del hero. Ver `DECISIONS.md` → D-21.

---

## P1

### Q-03 · Estados del diagrama

Sin fila apagada, todos los nodos son del estado deseado:

| | Borde | Relleno | Texto | Número mono |
|---|---|---|---|---|
| 01–04 | 1 px sólido `--green` | ninguno | `--text-on-ink` | `--green-light` |
| 05 | 1 px sólido `--green` | `--green` | `--on-green` | `--on-green` |

⚠️ El número `05` va en `--on-green`, **no** en `--green-light`: está sobre relleno verde y ese par no pasa contraste.

**Deja de aplicar:** O-04 de `FIXES_v9.md` (alturas desiguales por la etiqueta de canales). Con una sola fila, la etiqueta bajo el nodo 01 hace que ese nodo sea más alto que los otros cuatro. **Alinear los nodos arriba** para que cada uno tenga la altura de su contenido.

### Q-04 · Espaciados

| Del | Al | Valor |
|---|---|---|
| H2 | Línea de puente | 24 px |
| Línea de puente | Diagrama | 32 px |
| Diagrama | Línea de cierre | 32 px |

### Q-05 · Verificar el mockup en mobile (*Qué construyo*)

En la captura mobile, el mockup se ve más ancho que alto en proporción — no parece respetar `aspect-ratio: 9/17`.

**Cambio.** Verificar que el `aspect-ratio` se aplique también por debajo de 900 px, con `max-width: 240px` centrado. Un placeholder de celular con proporción de tablet contradice lo que dice representar.

---

## Sigue vigente de `FIXES_v9.md`

- **O-05** — línea de cierre sin `max-width: 34rem`
- **O-06** — borde inferior con el mismo tratamiento en los dos bloques oscuros
- **O-09** — glifo de WhatsApp en el nodo 05 (opcional)

---

## Verificación

- [ ] Una sola fila de cinco nodos; fila `ANTES` eliminada
- [ ] Etiquetas `ANTES` / `DESPUÉS` eliminadas
- [ ] Nodo 01 dice `Te buscan`, con la etiqueta de canales debajo
- [ ] Línea de puente presente entre H2 y diagrama
- [ ] Nodos 01–04 con borde verde sin relleno; 05 con relleno
- [ ] Número `05` en `--on-green`
- [ ] Nodos alineados arriba (el 01 más alto que el resto)
- [ ] Espaciados 24 / 32 / 32 px
- [ ] Línea de cierre en una o dos líneas largas, sin medida de lectura
- [ ] Mockup de *Qué construyo* con proporción 9/17 también en mobile
- [ ] En mobile, los nodos apilan en columna
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Archivos actualizados en esta ronda

| Archivo | Cambio |
|---|---|
| `docs/UX_SPEC.md` §03 | Diagrama a una fila · línea de puente · estados actualizados |
| `docs/DECISIONS.md` | D-21 nueva |

---

## Fuera de alcance

- Hero, Problema y el copy de *Qué construyo*.
- Secciones posteriores.
