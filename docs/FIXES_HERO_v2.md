# FIXES — Hero v2

**Fecha:** 2026-08-11
**Alcance:** hero + header, desktop y mobile. **No tocar el copy del H1 ni de la bajada** salvo instrucción explícita aparte.
**Referencias:** `docs/DESIGN_SYSTEM.md` v1.0 · `docs/UX_SPEC.md` v2.0 §01 · `docs/FIXES_HERO.md` (primera ronda)

**Estado de la ronda anterior:** F-01, F-03, F-04, F-06, F-07, F-08, F-09, F-10 y F-12 resueltos. F-02 parcial, F-05 pendiente.

---

## P0

### G-01 · Barra CTA fija en mobile (falta)

**Problema.** No existe. Una vez que el hero sale de viewport, no hay ninguna forma de llegar a WhatsApp hasta el final de la página. La sesión desde el navegador interno de Instagram es corta y la decisión puede darse en cualquier scroll.

**Cambio.** Barra persistente al pie, visible desde que el CTA del hero sale de viewport.
- Fondo `--paper` con borde superior 1 px `--rule-strong` (sin sombra).
- Botón `primary` ancho completo, alto ≥ 52 px.
- Padding inferior que respete `env(safe-area-inset-bottom)`.
- Mensaje prellenado: `Hola Martin, te escribo desde tu página.`
- Solo por debajo de 900 px. En desktop el CTA persistente es el del header.

Es invariante de `DECISIONS.md`. Ver `UX_SPEC.md` §Sistema de CTAs.

---

## P1

### G-02 · Ocultar la retícula por debajo de 900 px

**Problema.** La retícula sigue visible en mobile. `DESIGN_SYSTEM.md` §5 la oculta bajo 900 px: en pantalla chica roba contraste al texto de los nodos y no aporta nada, porque el efecto de "plano técnico" necesita ancho para leerse.

**Cambio.** `display: none` en la capa de retícula por debajo de 900 px. El panel del diagrama conserva su borde y su padding.

### G-03 · Completar F-02 — etiqueta de canales fuera de paleta

**Problema.** `GOOGLE · INSTAGRAM · UN CONOCIDO` sigue en el tostado heredado de la dirección visual descartada. No está en los tokens y, a 11–12 px, queda por debajo de AA. Es la línea más chica del bloque, o sea donde más pesa el déficit de contraste.

**Cambio.** `--text-muted` (`#5C6661`, ratio 5.18 sobre `--paper`). Barrer el CSS y eliminar cualquier tostado, marrón o terracota restante: los únicos colores permitidos son los de `DESIGN_SYSTEM.md` §1.

### G-04 · Micro-prueba en el hero (F-05, pendiente)

**Problema.** El hero no tiene ningún elemento de evidencia. Quien llega desde un DM ve una promesa y un botón, sin una sola señal de que esto ya existe y funciona. Es el hueco más caro de la primera pantalla.

**Cambio.** Línea bajo el microcopy, separada por un filete `--rule`, con link al sitio publicado.
- Si `casos[0].nombre` existe en `site.json`: usar el nombre real del cliente.
- Si no existe todavía: renderizar una versión neutra (`Un proyecto publicado y funcionando →`) con el link.
- **Nunca** usar "Sin Brújula": es un nombre inventado por la herramienta de diseño (D-12).

### G-05 · Bajar el peso del CTA del header

**Problema.** El botón del header tiene el mismo alto, padding y texto completo que el primario del hero. En la primera pantalla se ven dos CTAs de peso casi idéntico y la atención se reparte.

**Cambio.** Variante `ghost` reducida: alto ~40 px, tipografía 14 px, padding horizontal 16 px. Sin glifo de WhatsApp (el glifo es marca del primario). El texto puede acortarse a `WhatsApp`. El primario del hero tiene que ganar la jerarquía sin discusión.

### G-06 · Equilibrio vertical entre columnas del hero

**Problema.** La columna izquierda termina en el microcopy y el panel del diagrama sigue ~170 px más abajo. El texto queda flotando y a la izquierda queda un vacío que no comunica nada.

**Cambio.** Preferido: llenar el espacio con la micro-prueba de G-04, que es contenido que igual tiene que estar. Si tras agregarla persiste el desbalance, alinear el panel derecho al centro vertical del bloque de texto (`align-items: center` en la grilla del hero). No estirar el diagrama para rellenar.

---

## P2

### G-07 · Reducir el ancho del panel del diagrama

Los nodos miden ~340 px para contenidos como "DUDAN". El vacío a la derecha de cada caja es grande y el bloque se lee más como formulario que como diagrama.

**Cambio.** Panel a ~280–300 px en desktop. En mobile queda a ancho completo, sin cambios.

### G-08 · Separador bajo el header

No hay línea entre el header y el hero: el bloque flota sobre el mismo fondo. En una dirección donde la estructura se ve, un filete de 1 px `--rule` es coherente y ordena la entrada.

**Cambio.** Borde inferior 1 px `--rule` en el header, ancho del contenedor (no full-bleed).

---

## Verificación

- [ ] Barra CTA fija visible en mobile al salir el hero de viewport, con safe-area respetada
- [ ] Retícula oculta por debajo de 900 px
- [ ] Cero colores fuera de los tokens de `DESIGN_SYSTEM.md` §1 (buscar tostado/terracota residual)
- [ ] Contraste ≥ 4.5:1 en **todo** el texto del diagrama, incluida la etiqueta de canales
- [ ] Micro-prueba renderizada, con nombre real o versión neutra — nunca "Sin Brújula"
- [ ] CTA del header claramente subordinado al primario del hero
- [ ] Sin vacío vertical entre el fin del texto y el fin del panel
- [ ] Verificado a 390 px, 768 px y 1440 px
- [ ] `wa.me` probado en iOS, Android y escritorio con el mensaje prellenado correcto

---

## Sigue pendiente de insumo (no es trabajo del agente)

- Nombre real del cliente del caso publicado
- Foto de Martin (sección 09)
- Capturas mobile del proyecto publicado (secciones 05 y 08)
- Costo anual exacto del dominio (sección 10 — sin la cifra, la sección no se renderiza)
