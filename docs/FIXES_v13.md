# FIXES v13 — "Cómo trabajamos" a tabla

**Fecha:** 2026-08-11
**Alcance:** solo la sección *Cómo trabajamos*. **No tocar *Qué incluye*, que quedó correcta.**
**Referencias:** `docs/UX_SPEC.md` §06 (reescrita) · `docs/DECISIONS.md` → D-22
**Rondas anteriores:** `_v9` ✅ · `_v10` ✅ · `_v11` ✅ · `_v12` ✅

---

## Diagnóstico

*Qué incluye* y *Cómo trabajamos* quedaron con la **misma silueta**: grilla de cuatro celdas con hairlines de 1 px, misma anatomía interna (etiqueta mono arriba, título, líneas debajo). Leídas seguidas se perciben como la misma sección dos veces.

Hay dos causas:

1. **Se perdió el tratamiento de la exploración.** Ahí cada paso tiene un número en Archivo 700 **32 px verde** como elemento dominante, con `DE VOS: NADA` y `DÍA 1` en mono compacto de 11 px. En la implementación el número es una etiqueta mono chica y `DE VOS` / `CUÁNDO` se volvieron rótulos apilados con texto de cuerpo.
2. **Aunque se restaurara eso, el patrón seguiría siendo el mismo:** cuatro cajas iguales en fila. Cambiar el interior no cambia la silueta.

Por eso el cambio es de formato, no de estilos.

---

## P0

### S-01 · Convertir la sección en tabla de filas

**Cambio.** Una fila por paso, cuatro columnas, encabezados que aparecen **una sola vez**.

```
QUÉ PASA                        DE VOS                              CUÁNDO
01  Charla de 15 min            Contarme cómo conseguís clientes    Día 1
02  Análisis y estructura       Nada                                Días 2–4
03  Diseño y desarrollo         Una devolución                      Días 5–X
04  Publicación y puesta a punto Nada                               Día X
```

**No es una grilla de tarjetas.** Ese formato ya lo usa la sección anterior.

**Tratamiento:**

| Elemento | Especificación |
|---|---|
| Encabezados de columna | Mono 11 px, `--text`, mayúsculas, una sola vez arriba de la tabla |
| Número de paso | Archivo 700, 32 px, `--green`, `letter-spacing: -.04em` |
| Qué pasa | Archivo 600, 17 px, caja normal |
| De vos / Cuándo | Cuerpo 17 px, `--text` |
| Separadores | Filete horizontal 1 px `--rule` entre filas |
| Padding vertical de fila | 20 px |

⚠️ **Sin bordes verticales entre columnas, sin fondo de celda y sin la técnica del `gap: 1px`.** La tabla se lee por alineación, no por cajas. Si se le ponen bordes en los cuatro lados, vuelve a ser una grilla y el problema regresa.

**Anchos sugeridos (≥900 px):** número auto · `Qué pasa` 1fr · `De vos` 1.4fr · `Cuándo` auto.

### S-02 · Por qué la tabla, y qué no se puede perder

El valor de esta sección está en la columna **`De vos`** leída hacia abajo:

> Contarme cómo conseguís clientes → **Nada** → Una devolución → **Nada**

Eso demuestra de un vistazo que la carga de trabajo del cliente es mínima, que es el miedo que la sección tiene que desactivar ("esto me va a dar más trabajo"). Repartido en cuatro tarjetas, hay que leer las cuatro para notarlo.

**Consecuencia:** la columna `De vos` tiene que quedar **alineada verticalmente y escaneable**. No convertirla en un rótulo dentro de cada fila (`De vos: Nada`) en desktop — eso rompe la lectura en columna.

---

## P1

### S-03 · Responsive

- **≥ 900 px:** tabla completa con encabezados arriba.
- **< 900 px:** los pasos apilan en bloques verticales. **Ahí sí** cada paso lleva el rótulo `DE VOS:` visible, porque sin encabezados de columna el dato queda sin contexto.

Si el rótulo se pierde en el colapso, la sección deja de cumplir su función.

### S-04 · Cierre

Debajo de la tabla, en mono `--text`: fecha de entrega comprometida + 15 días de soporte posterior.

**Prohibido:** garantizar cantidad de consultas.

---

## Verificación

- [ ] La sección es una tabla de filas, no una grilla de celdas
- [ ] Encabezados `QUÉ PASA` / `DE VOS` / `CUÁNDO` aparecen una sola vez
- [ ] Número de paso en Archivo 700, 32 px, verde
- [ ] Solo filetes horizontales entre filas; sin bordes verticales ni fondo de celda
- [ ] La columna `De vos` se lee en vertical de un vistazo
- [ ] Las dos secciones consecutivas ya no comparten silueta
- [ ] En mobile, cada paso conserva el rótulo `DE VOS:`
- [ ] Sin scroll horizontal a 390 px
- [ ] Verificado a 390, 768, 1024, 1440 y 1920 px

---

## Regla para las secciones que faltan

**Antes de construir una sección, verificar el formato de la anterior. Si es una grilla de celdas, la siguiente no puede serlo.**

Formatos disponibles: grilla de celdas · tabla de filas · dos columnas asimétricas (texto + imagen) · bloque a fondo completo · acordeón · diagrama.

Aplicado a lo que viene:

| Sección | Formato sugerido | Por qué |
|---|---|---|
| 06 Un caso | Dos columnas asimétricas (texto + captura) | Ya lo usa *Qué construyo*, pero hay tres secciones de distancia |
| 07 Quién soy | Dos columnas invertidas (foto a la izquierda) | Espeja la anterior sin repetirla |
| 08 Inversión | Bloque destacado con la cifra `$0` en grande | Formato único en la página |
| 09 Preguntas | Acordeón | Formato único |
| 10 Empezar | Bloque a fondo completo, oscuro | Espeja el Recorrido |

Con once secciones, alternar formatos no es decoración: es lo que permite escanear la página y saber en qué parte se está.

---

## Archivos actualizados en esta ronda

| Archivo | Cambio |
|---|---|
| `docs/UX_SPEC.md` §06 | Reescrita como tabla, con la restricción estructural explícita |
| `docs/DECISIONS.md` | D-22 nueva |

---

## Fuera de alcance

- *Qué incluye* y todas las secciones anteriores.
- Copy de la sección, que está correcto.
