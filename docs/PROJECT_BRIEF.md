# PROJECT_BRIEF

**Proyecto:** Landing de captación — Martin De Lucca
**Última actualización:** 2026-08-11
**Estado:** cerrado. Cambios acá requieren actualizar `DECISIONS.md`.

---

## Qué estamos construyendo

Una landing page de una sola ruta cuyo único trabajo es que un dueño de negocio de servicios llegue a WhatsApp **habiendo entendido** qué se le vende, para quién es y cuánto cuesta aproximadamente.

No es un portfolio. No es una web institucional. No es un sitio multipágina.

Es la pieza que ocupa el hueco entre "vi tu Instagram" y "te escribo", y es simultáneamente el argumento y la demostración del servicio que vende: si esta página no convierte, el servicio queda desmentido por su propia evidencia.

**Producto que se vende a través de ella:** Landing de Conversión para Servicios — análisis del negocio y del cliente ideal, estructura, copy, diseño, desarrollo, publicación y conexión con WhatsApp.

---

## Para quién

**Audiencia de la página (el prospecto de Martin):**

Dueño-operador o profesional independiente de servicios, 28–50 años, Córdoba Capital / Jesús María / Gran Córdoba, negocio de 1 a 10 personas.

Criterio de entrada — **ya tiene demanda y la atiende a mano**:

- ya vende un servicio validado, con precio definido;
- consigue clientes por Instagram, WhatsApp, Google o referidos;
- cierra manualmente, explicando lo mismo una y otra vez;
- no tiene web, o tiene una que funciona como tarjeta de presentación;
- su servicio necesita explicación o confianza antes de la compra;
- tiene margen para recuperar la inversión con pocas ventas.

Rubros típicos: estética, barberías, entrenadores y coaches, estudios profesionales, fotógrafos, academias, turismo, servicios para eventos, consultoría.

**Quién NO es la audiencia** (y la página debe rechazarlo activamente):

- negocios sin clientes todavía;
- venta de productos físicos con envío y carrito (ahí corresponde una plataforma, no esto);
- ticket bajo;
- quien busca "algo simple y baratito".

> ⚠️ El briefing original definía al cliente como "negocios locales que no tienen web". Eso es una condición técnica, no una necesidad comercial, y atrae exactamente al segmento descalificado. Ver `DECISIONS.md` → D-02.

**Nivel técnico de la audiencia:** nulo. No conoce ni le interesa saber qué es responsive, UX, funnel o stack. Ver vocabulario permitido y prohibido en `UX_SPEC.md` § Tono.

**Contexto de lectura real:** celular, navegador interno de Instagram, sesión corta, a veces con mala señal y a veces a plena luz del día.

---

## Objetivo comercial

**Promesa central:** hoy el negocio del prospecto existe en un solo lugar. La página lo pone en los otros: que lo encuentren cuando lo buscan, que lo tomen en serio cuando lo miran, y que le escriban sabiendo qué ofrece.

**Objetivo primario:** generar consultas por WhatsApp de gente que llega entendiendo qué se ofrece.

**Objetivo secundario:** **filtrar**. Reducir las conversaciones que arrancan en "hola, info?" y terminan en nada. *(Nota: con el precio y la descalificación movidos al FAQ — D-03 y D-14 revisadas — la página filtra menos que en la versión anterior. Filtros activos en el flujo: la bajada del hero y las preguntas 2 y 3 del acordeón.)*

Estos dos objetivos están en tensión con el volumen: filtrar baja la cantidad de mensajes. **Gana la calidad.** La métrica de éxito no puede ser "cantidad de mensajes".

### Lo que esta página NO puede hacer

**No promete posición en Google, tráfico nuevo, presencia en asistentes de IA ni cantidad de clientes.** Sí entrega la base para que te encuentren cuando te buscan: ficha de Google configurada, sitio indexable y contenido que un buscador o una IA puedan leer y entender. La diferencia entre "queda preparado para que puedan entenderlo" y "vas a aparecer" es la diferencia entre una promesa defendible y una que no lo es. Ver `DECISIONS.md` → D-17.

Tampoco genera demanda por sí sola: amplifica y ordena la que ya existe.

Hoy el único canal declarado es un Instagram personal. Con 60 visitas mensuales, una tasa de clic del 6 % son 3–4 consultas. **Publicar esta página sin un plan de distribución es el riesgo número uno del proyecto**, y llevaría a la conclusión falsa de que la landing no funciona cuando en realidad no llegó nadie.

Requisito de lanzamiento: link en bio, historia destacada apuntando a la página, y uso sistemático del link en DMs.

### Métricas de éxito

| Métrica | Objetivo |
|---|---|
| Clic a WhatsApp / visitantes únicos | 4–8 % |
| Scroll 50 % | > 55 % |
| Scroll 90 % | > 25 % |
| Consultas que llegan sabiendo el precio | > 70 % |
| Mensajes "¿cuánto sale?" sin contexto | en baja |
| LCP mobile (4G simulada) | < 2,5 s |

Con menos de 300 visitas mensuales ninguna de estas métricas es interpretable. Antes de sacar conclusiones sobre la página, resolver el tráfico.

---

## CTA principal

**Único destino: WhatsApp.** No hay formulario. No hay segundo destino que compita.

- **Etiqueta, idéntica en toda la página:** `Contame tu caso por WhatsApp`
- **Microcopy** (solo bajo el CTA del hero y el del cierre): `Te contesto yo, no un bot.`
- **Número:** `5493524401654` → `https://wa.me/5493524401654?text=...`
- **Mensaje prellenado distinto por sección**, para atribuir la conversión sin analítica avanzada. Ver `UX_SPEC.md` § Sistema de CTAs.

Etiquetas descartadas: "Solicitá presupuesto" (activa modo comparación de precios), "Quiero analizar mi negocio" (abstracto, suena a consultoría cara para el segmento).

**Verificación obligatoria antes de publicar:** el link probado en iOS, Android y escritorio. Un prefijo mal armado lleva la conversión a cero sin generar ningún error visible.

---

## Restricciones

**De negocio**

1. Sin formulario de contacto. Decisión del cliente, asumida con sus costos. Ver D-04.
2. El precio **no aparece en el flujo principal**: vive en la pregunta 2 del FAQ, como rango con condición. Ver D-03 revisada.
3. Pago único. El único costo recurrente es el dominio, a nombre del cliente. Este argumento se cae entero si aparece cualquier cargo mensual → **prohibido cualquier servicio de suscripción en el stack**.
4. Cero promesas de cantidad de consultas, ventas o clientes.
5. Cero métricas, testimonios o cifras sin respaldo verificable.
6. El caso del catálogo de camisetas de fútbol no se publica. Ver D-11.
7. Ninguna promesa de posicionamiento, tráfico o presencia en asistentes de IA. Las palabras "SEO" y "GEO" no aparecen en la página. Ver D-17.

**De contenido**

8. Todo el copy vive en `src/content/site.json`, fuera del marcado. Martin edita sin tocar código. Es requisito de entrega, no una mejora.
9. No hay fotos ni identidad visual previas. Prohibido usar imágenes de stock: este público las reconoce y le bajan credibilidad a todo lo demás.
10. Insumos bloqueantes pendientes: foto real de Martin, capturas del proyecto publicado + link vivo, costo anual exacto del dominio, testimonios con nombre y negocio.

**Técnicas**

11. Salida 100 % estática. Sin runtime de servidor.
12. Desplegable por FTP/subida de archivos al hosting que el cliente ya tiene.
13. Presupuesto de performance: LCP < 2,5 s en 4G, CLS < 0,1, peso total < 900 KB.
14. La página debe ser legible y completa con JavaScript desactivado.
15. Sin banner de cookies, porque no se usan cookies.
16. Accesibilidad AA como mínimo.

---

## Stack

| Capa | Decisión | Motivo |
|---|---|---|
| Framework | **Astro** | Salida estática pura, cero JS por defecto, separación nativa contenido/plantilla |
| Estilos | **CSS con custom properties**, sin framework de utilidades | El sistema de diseño es propio; Tailwind arrastra su estética por defecto, que es justo lo que hay que evitar |
| Contenido | `src/content/site.json` | Fuente única de copy, editable sin tocar código |
| Interactividad | JS vanilla, mínima | Solo acordeón de FAQ y barra CTA fija |
| Tipografías | WOFF2 autoalojadas en `/public/fonts` | Sin request a Google, mejor LCP, sin dependencia externa |
| Analítica | Umami o Plausible, sin cookies | GA suma peso, banner y fricción sin aportar nada acá |
| Build/deploy | `astro build` → subida de `dist/` al hosting existente | Sin costo mensual, sin vendor lock-in |

**Prohibido en el stack:** cualquier CMS o servicio con costo mensual, librerías de animación pesadas, jQuery, bundles de iconos completos, fuentes vía CDN de terceros.

---

## Documentos relacionados

- `docs/UX_SPEC.md` — estructura, contenido y comportamiento de cada sección.
- `docs/DESIGN_SYSTEM.md` — tokens visuales. Parte cerrada / parte provisional.
- `docs/DECISIONS.md` — por qué cada decisión, qué se descartó, qué no se toca.
- `AGENTS.md` — reglas de trabajo para agentes que implementan.
