# AGENTS.md

Instrucciones para cualquier agente que trabaje en este repositorio (Codex, Claude Code, u otro).

---

## 0. Antes de escribir una sola línea

Leer, en este orden:

1. `docs/PROJECT_BRIEF.md` — qué se construye, para quién, restricciones, stack.
2. `docs/DECISIONS.md` — por qué. **Especialmente la sección "Invariantes".**
3. `docs/UX_SPEC.md` — estructura y comportamiento de cada sección.
4. `docs/DESIGN_SYSTEM.md` — tokens. **Verificar la versión en la primera línea.**

**Verificación de estado antes de arrancar:**

- Si `DESIGN_SYSTEM.md` dice **v0.1**, la dirección visual todavía no está elegida. El trabajo permitido es estructura, contenido, accesibilidad y performance usando **solo** los tokens marcados 🔒. No refinar estética, no inventar paleta, no elegir tipografías.
- Si dice **v1.0**, todo está cerrado y se implementa completo.

---

## 1. Reglas duras

1. **Los invariantes de `DECISIONS.md` no se tocan.** Si una mejora obvia contradice un invariante, **parar y preguntar**. No elegir por cuenta propia.
2. **Ninguna cadena de copy en el marcado.** Todo el texto de negocio vive en `src/content/site.json`. Un componente con texto hardcodeado es un bug, aunque se vea idéntico.
3. **Ningún valor fuera de las escalas** de espaciado, tipografía y radio. Nada de `margin-top: 37px`.
4. **Ninguna dependencia con costo mensual.** Contradice el argumento comercial central del cliente.
5. **Ninguna cifra, testimonio, logo o sello inventado** para "rellenar" mientras faltan los reales. Si falta un insumo, se deja un placeholder explícito en `site.json` y se reporta, no se completa con datos ficticios.
6. **Nada de imágenes de stock.** Ver punto anterior: si no hay imagen, se deja el hueco marcado.
7. **La página tiene que funcionar con JavaScript desactivado.** Todo el contenido visible y completo.

---

## 2. Estructura del repositorio

```
/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── docs/
│   ├── PROJECT_BRIEF.md
│   ├── DESIGN_SYSTEM.md
│   ├── UX_SPEC.md
│   └── DECISIONS.md
├── src/
│   ├── content/
│   │   └── site.json          ← única fuente de copy
│   ├── styles/
│   │   ├── tokens.css         ← espejo 1:1 de DESIGN_SYSTEM.md
│   │   ├── reset.css
│   │   ├── base.css
│   │   └── utilities.css
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Problema.astro
│   │   ├── Recorrido.astro
│   │   ├── QueConstruyo.astro
│   │   ├── Incluye.astro
│   │   ├── Proceso.astro
│   │   ├── Casos.astro
│   │   ├── QuienSoy.astro
│   │   ├── Inversion.astro
│   │   ├── Faq.astro
│   │   ├── CtaFinal.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       ├── WhatsappButton.astro
│   │       ├── StickyCta.astro
│   │       └── DiagramaRecorrido.astro
│   ├── lib/
│   │   └── media.ts            ← imagenPublicable(): sin archivo o sin alt, no se renderiza
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       └── index.astro
└── public/
    ├── fonts/
    ├── img/
    └── favicon.svg
```

**Un componente por sección de `UX_SPEC.md`.** La correspondencia debe ser uno a uno para que cualquiera pueda ir de la spec al archivo sin buscar.

---

## 3. Contrato de datos

`src/content/site.json` es la fuente única. Forma mínima esperada:

```jsonc
{
  "meta":     { "title": "", "description": "", "ogImage": "" },
  "whatsapp": {
    "numero": "5493524401654",
    "etiquetaCta": "Contame tu caso por WhatsApp",
    "microcopy": "Te contesto yo, no un bot.",
    "mensajes": {
      "hero": "", "queConstruyo": "", "inversion": "", "final": "", "sticky": ""
    }
  },
  "hero":     { "eyebrow": "", "h1": "", "bajada": "", "microPrueba": "",
                "diagrama": { "estado": "", "convergencia": "", "pregunta": "", "aspectos": "",
                              "canales": [ { "nombre": "", "pregunta": "" } ] } },
  // hero.diagrama.canales son siempre 3: la convergencia de D-25 se dibuja a tres columnas.
  "problema": { "titulo": "", "citas": [], "puente": "" },
  "solucion": { "titulo": "", "fraseInstagram": "", "puente": "",
                "diagrama": { "canales": "", "nodos": [] }, "cierre": "" },
  "queConstruyo": { "titulo": "", "producto": "", "metodo": [], "captura": { "src": "", "alt": "" } },
  "incluye":  { "titulo": "", "bloques": [ { "titulo": "", "items": [] } ] },
  "proceso":  { "titulo": "", "pasos": [ { "n": 1, "queePasa": "", "queNecesito": "", "cuando": "" } ],
                "garantia": "", "soporte": "" },
  "casos":    { "titulo": "", "etiquetas": { "problema": "", "decision": "", "verSitio": "" },
                "casos": [ { "nombre": "", "descriptor": "", "ciudad": "",
                             "problema": "", "decisiones": [], "url": "",
                             "captura": { "src": "", "alt": "", "placeholder": "" } } ],
                "testimonios": [ { "texto": "", "nombre": "", "negocio": "", "ciudad": "" } ] },
  "quienSoy": { "titulo": "", "nombre": "", "ciudad": "",
                "foto": { "src": "", "alt": "", "width": 0, "height": 0, "placeholder": "" },
                "texto": [] },
  "inversion": { "titulo": "", "marcoRetorno": "",
                 "precio":      { "etiqueta": "", "cifra": "", "texto": "" },
                 "costosFijos": { "etiqueta": "", "cifra": "", "texto": "",
                                  "dominio": "", "montoDominioUsd": null } },
  "faq":      { "titulo": "",
                "preguntas": [ { "pregunta": "", "respuesta": "", "abiertaPorDefecto": false } ] },
  "ctaFinal": { "titulo": "", "texto": "" },
  "footer":   { "instagram": "", "ciudad": "Córdoba, Argentina" }
}
```

**Reglas:**

- Campos sin insumo van en `null` o `""`, nunca con contenido inventado.
- Si `inversion.costosFijos.montoDominioUsd` es `null` **o falta `costosFijos.dominio`**, la sección de inversión no se renderiza. `dominio` es el pie que dice que la renovación existe: publicar el `$0` sin eso es el mismo error que publicar sin la cifra (D-23).
- Si un testimonio no tiene `nombre` y `negocio`, no se renderiza.
- Un caso sin `nombre` y sin `url` viva no se renderiza, y si no queda ninguno, la sección entera desaparece. La prueba de esta sección es el link, no el relato.
- Una pregunta del FAQ sin `respuesta` escrita no se renderiza: un acordeón que se abre y no dice nada es peor que no tener la pregunta.
- **Toda imagen pasa por `imagenPublicable()`** (`src/lib/media.ts`): si el archivo no está en `public/` o le falta el `alt`, se renderiza el placeholder rayado. Nunca un `<img>` roto en producción.
- El array `casos` no incluye el catálogo de camisetas (D-11).

---

## 4. Definición de "terminado"

Un cambio no está listo hasta que **todo** esto es cierto:

**Contenido y estructura**
- [ ] Cada sección de `UX_SPEC.md` existe, en el orden especificado, con su `id` semántico.
- [ ] El H1 no contiene "diseño y desarrollo web" ni ninguna variante de la categoría commodity (D-01, D-18). Los tres mecanismos van en la bajada, no en el titular.
- [ ] La numeración visible arranca en `01 / PROBLEMA`: el hero no lleva etiqueta numerada (`UX_SPEC.md` § Numeración).
- [ ] La objeción "ya tengo Instagram" está resuelta antes del 40 % del scroll, en la sección Recorrido y no en el FAQ.
- [ ] La descalificación existe: pregunta 3 del FAQ. **No hay sección "para quién NO es"** — se eliminó en D-14 revisada. Puede moverse de lugar; no puede desaparecer.
- [ ] Dos secciones consecutivas no comparten silueta (D-22).
- [ ] Cero copy hardcodeado fuera de `site.json`.
- [ ] Cero cifras, testimonios o imágenes inventadas.

**CTAs**
- [ ] Un solo destino y una sola etiqueta en toda la página.
- [ ] Mensaje prellenado distinto por sección.
- [ ] Número visible y seleccionable en footer y bajo el CTA final.
- [ ] Links probados en iOS, Android y escritorio. *(No se marca sin probar: un prefijo mal armado lleva la conversión a cero sin dar error.)*
- [ ] Barra CTA fija en mobile, respetando `env(safe-area-inset-bottom)`.

**Sistema**
- [ ] `tokens.css` es espejo exacto de `DESIGN_SYSTEM.md`.
- [ ] Ningún valor fuera de las escalas.
- [ ] Un solo estilo de card, un solo radio dominante.
- [ ] Máximo dos secciones de fondo oscuro.

**Técnico**
- [ ] LCP < 2,5 s en 4G simulada (Lighthouse mobile).
- [ ] CLS < 0,1.
- [ ] Peso total < 900 KB. Imágenes en AVIF/WebP con `width` y `height` declarados.
- [ ] Contenido completo con JS desactivado.
- [ ] `dvh` en vez de `vh`.
- [ ] Sin librerías de animación. Sin banner de cookies.
- [ ] `prefers-reduced-motion` implementado.

**Accesibilidad**
- [ ] Contraste AA verificado (atención al acento sobre fondo claro en texto chico).
- [ ] Área táctil ≥ 44 px, botones ≥ 52 px de alto.
- [ ] Un solo H1, jerarquía correcta.
- [ ] Foco visible en todo interactivo.
- [ ] FAQ operable por teclado con `aria-expanded`.
- [ ] `alt` real en capturas.

---

## 5. Cómo reportar

Al terminar una tarea, reportar en este formato:

```
HECHO:      qué se implementó
PENDIENTE:  qué quedó bloqueado y por qué insumo
DESVÍOS:    cualquier punto donde la spec no alcanzaba y hubo que decidir
RIESGOS:    qué puede fallar en producción que la spec no cubría
```

**No cerrar una tarea silenciosamente resolviendo una ambigüedad por cuenta propia.** Si la spec no alcanza, decidir lo mínimo, seguir, y reportarlo en `DESVÍOS`.

---

## 6. Errores que se cometen siempre en este tipo de página

Chequear explícitamente antes de dar por terminado:

1. Cambiar la etiqueta del CTA entre secciones "para que no se repita". Se repite a propósito.
2. Agregar un botón secundario ("Ver casos") que compite con WhatsApp.
3. Poner el CTA principal en verde WhatsApp.
4. Meter íconos genéricos, uno por bullet.
5. Reemplazar las citas del prospecto por bullets con tilde verde. Cambia el significado: la cita dice "te entiendo", el bullet dice "beneficio".
6. Animar el hero con scroll-reveal.
7. Usar `100vh`.
8. Rellenar el vacío de imágenes con stock.
9. Acortar la página "porque quedaba muy larga". Ver D-05.
10. Mover la objeción de Instagram al FAQ "porque queda más ordenado".
