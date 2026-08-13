# DECISIONS

Registro de decisiones del proyecto. Formato: contexto → decisión → qué se descartó → consecuencia asumida.

**Regla:** ninguna decisión marcada como 🔒 **invariante** se modifica sin actualizar este archivo primero. Un agente que encuentre una contradicción entre este documento y el código debe detenerse y preguntar, no elegir.

---

## D-01 · El posicionamiento es el problema, no el diseño web 🔒

**Revisada el 2026-08-11.** La versión original decía "el posicionamiento es el recorrido Instagram → WhatsApp". Se amplió: ver D-17.

**Contexto.** "Diseño y desarrollo web" es una categoría commodity. Compite contra plantillas, Wix y generadores por IA, y el único eje de comparación que deja abierto es el precio.

**Decisión.** La página vende **"tu negocio existe en un solo lugar"**, con tres mecanismos jerarquizados: te encuentran → te toman en serio → te escriben mejor. El H1 no dice "diseño y desarrollo web". La palabra "página" aparece en la bajada, no en el titular.

**Descartado.** Encabezar con el servicio técnico ("Diseño y desarrollo web profesional en Córdoba"). Es más claro para SEO genérico y mucho peor para conversión: invita a comparar contra "landing $150".

**Consecuencia asumida.** Se pierde tráfico de búsqueda genérica. Es irrelevante: el canal es Instagram, no Google.

---

## D-02 · El cliente ideal es el que ya tiene demanda 🔒

**Contexto.** El briefing original definía al cliente como "negocios locales que no tienen web". Eso es una condición técnica: describe también al que vive de referidos, está desbordado, tiene ticket bajo y no obtendría retorno.

**Decisión.** Criterio de entrada de la página: *ya conseguís clientes por Instagram/WhatsApp/referidos y el proceso es manual y desordenado*.

**Descartado.** Hablarle al que "no tiene web". Atrae exactamente al segmento que se descalifica después en la llamada.

**Consecuencia asumida.** Menos visitantes se sienten aludidos. Es el objetivo: filtrar en la página lo que hoy se filtra a mano por WhatsApp.

---

## D-03 · El precio vive en la sección de inversión 🔒

**Revisada dos veces.** v1.0 lo publicaba en la sección de inversión. El **2026-08-11** se sacó al FAQ por decisión del cliente. El **2026-08-13 vuelve al flujo principal**, también por decisión del cliente, con el número actualizado.

**Decisión.** La sección de inversión publica **desde $250.000, pago único, 50 % para empezar y 50 % al entregar**, junto con el marco de retorno y el bloque de costo fijo mensual `$0`. El FAQ conserva la pregunta *"¿Cuánto sale?"* pero **acortada**: repite el número y deriva a los 15 minutos, sin cargar la explicación completa. El ancla `#precio` apunta a la sección de inversión, no al FAQ.

**Por qué vuelve.**
1. Con el calificador del hero revocado (invariante 10) y el precio metido en un acordeón, **la página no filtraba en ningún punto del flujo principal**. El precio es el filtro más fuerte disponible.
2. El costo que la revisión anterior había asumido se cumplió: quien escaneaba sin abrir el acordeón se iba sin el dato.
3. A la altura de §09 el prospecto ya vio método, alcance, caso con link vivo y persona. Ahí el riesgo de comparación por precio (D-01) es mínimo: la diferenciación ya está hecha. El error sería mostrarlo antes, no mostrarlo.

**Descartado.**
- *Sacar el precio por completo, sin número en ningún lado.* Evaluado el 2026-08-13 y descartado **por segunda vez**: no filtra nada y garantiza seguir cotizando de cero por WhatsApp — el dolor que la página promete curar.
- *Dejarlo solo en el FAQ* (v2.0). Ver "por qué vuelve".
- *Poner el número como criterio de exclusión en "para quién no es".* Descartado junto con esa sección (D-14 revisada).

**El número: $250.000**, actualizado desde $200.000. D-17 ya había advertido que con la ficha de Google, los datos estructurados y la indexación sumados al alcance, $200.000 quedaba bajo.

**Consecuencia asumida.** Vuelve el riesgo de que alguien compare el número contra una plantilla de $150 sin haber leído nada. Se mitiga con la posición, no con el silencio: el precio no aparece hasta que la página hizo su trabajo. **Señal de que salió mal:** si el scroll empieza a morir en §09 y deja de llegar gente al CTA final.

**Intocable en cualquier escenario:** el bloque de costo fijo `$0`. Resuelve la objeción de 9/10 y no depende de dónde viva el precio.

---

## D-04 · WhatsApp como único CTA, sin formulario 🔒 (con costos asumidos)

**Contexto.** Decisión del cliente. Es correcta para este público: vive en WhatsApp y un formulario agrega un paso y una espera.

**Decisión.** Sin formulario. Todos los CTA van a `wa.me` con mensaje prellenado.

**Descartado.** Formulario de 3 campos como alternativa o fallback.

**Costos que se asumen explícitamente.**
1. Cero registro de quien no escribe. Sin lista, sin remarketing, sin seguimiento sobre el ~94 % que no convierte.
2. En escritorio sin WhatsApp Web logueado, el clic muere en una pantalla rota, sin error visible.

**Mitigaciones obligatorias.** Mensaje prellenado por sección · número visible y copiable en texto plano · comportamiento verificado en iOS, Android y escritorio antes de publicar.

---

## D-05 · La página es larga, a propósito 🔒

**Contexto.** El instinto de diseño va a ser "corta, limpia, moderna".

**Decisión.** 900–1.300 palabras, 13 secciones de contenido.

**Razones.** El ticket es alto para el segmento; el producto que se vende es *explicar antes del WhatsApp* y una landing corta contradice la tesis; las barreras del comprador son de comprensión, no de impulso.

**Descartado.** Landing de un scroll con hero + beneficios + CTA. Funciona para compra por impulso, no para una decisión de $200.000 en un servicio de confianza.

**Mitigación.** Larga ≠ pesada: jerarquía tipográfica fuerte, párrafos de 3 líneas, densidad creciente en la segunda mitad.

---

## D-06 · Los botones no usan el verde de WhatsApp

**Contexto.** `#25D366` tiene reconocimiento aprendido fuerte en Argentina.

**Decisión.** El CTA usa el acento de marca. El destino se señala con el **glifo** de WhatsApp dentro del botón, no con el color.

**Descartado.** Botón verde WhatsApp. Rompe la paleta, compite con el acento y hace ver la página como plantilla — lo opuesto a lo que la página tiene que demostrar.

**Estado.** Candidato legítimo a prueba A/B más adelante, **con datos**. Hoy no hay datos.

---

## D-07 · Tema claro, no dark mode 🔒

**Decisión.** Fondo claro cálido como tema único. Dos secciones de fondo oscuro como quiebre de énfasis, nada más.

**Descartado.** Dark mode por defecto o toggle de tema.

**Motivo.** Señala "producto para desarrolladores" ante una audiencia que no lo es, y empeora la legibilidad en celular a plena luz, que es la condición real de uso. El toggle además agrega JS y superficie de bug sin mover ninguna objeción.

---

## D-08 · Todo el copy vive fuera del layout 🔒

**Decisión.** `src/content/site.json` es la **única** fuente de texto de negocio. Ninguna cadena de copy embebida en componentes.

**Motivo.** El cliente lo pidió explícitamente; el precio va a cambiar en fase 2; los casos se reemplazan cuando existan resultados reales.

**Consecuencia.** Una entrega con el copy incrustado en el marcado está **incompleta**, aunque se vea idéntica.

---

## D-09 · Stack estático, sin nada mensual 🔒

**Decisión.** Astro + CSS con custom properties → salida estática subida al hosting existente.

**Descartado.**
- *WordPress / Webflow / cualquier CMS con plan mensual.* Contradice frontalmente el argumento comercial central ("pago único, no cobro nada por mes"). Es una decisión comercial antes que técnica.
- *Tailwind.* Arrastra su estética por defecto, que es exactamente la que hay que evitar. El sistema de diseño es propio y chico.
- *React / Next.* Peso y complejidad sin ninguna justificación para una página estática.

---

## D-10 · Analítica sin cookies y sin banner 🔒

**Decisión.** Umami o Plausible. Eventos: `cta_click` (con sección), `scroll_50`, `scroll_90`, `faq_open`.

**Descartado.** Google Analytics: suma peso, obliga a banner de consentimiento y ese banner es una fuga gratuita en una landing de conversión.

---

## D-11 · El caso del catálogo de camisetas no se publica 🔒

**Motivos, en orden de gravedad.**
1. Contradice el posicionamiento: es producto físico, y el propio criterio de calificación descarta ese perfil ("ahí conviene una plataforma"). Mostrarlo invita al prospecto equivocado.
2. Riesgo de imagen de terceros: escudos de clubes y marcas deportivas en una pieza comercial propia.

**Decisión.** Solo el caso de la agencia de viajes, con link vivo. Un caso bien contado vale más que dos mal elegidos.

**Aclaración del 2026-08-11.** **"Sin Brújula Viajes" es el nombre real del cliente**, no un nombre inventado por la herramienta de diseño como se había asumido en revisiones anteriores. Se publica. Las advertencias en contra que figuraban en `UX_SPEC.md` §08, `DESIGN_SYSTEM.md` §11 y `FIXES_HERO_v2.md` quedan sin efecto.

---

## D-12 · Cero cifras, testimonios o promesas sin respaldo 🔒

**Decisión.** No se publica ninguna métrica de resultado que no exista, ninguna garantía de consultas o ventas, ningún testimonio sin nombre + negocio, ninguna escasez inventada.

**Estrategia de reemplazo.** Prueba de **criterio** en lugar de prueba de resultados: el caso se cuenta como decisiones tomadas y por qué. Eso demuestra el diferencial real, que un número de conversión no demostraría.

**Motivo.** Este público desconfía profesionalmente de la exageración, y una cifra inventada es indefendible en la primera llamada. Además, la honestidad sobre lo que no se puede prometer es el diferencial frente a quien promete clientes.

---

## D-13 · Cuerpo en sans 🔒

**Revisada el 2026-08-11.** Las dos versiones anteriores especificaban serif para el cuerpo (primero Literata, después Source Serif 4). **La exploración visual usa sans: Schibsted Grotesk.**

**Decisión.** Archivo para titulares, Schibsted Grotesk para cuerpo, JetBrains Mono para el sistema.

**Motivo del cambio.** No es preferencia: la implementación con serif no se parecía a la dirección aprobada, y el cuerpo tipográfico era una de las causas. En la dirección *Plano* el peso "serio" lo aporta la mono y la estructura visible, no el cuerpo. Un serif encima suma un segundo registro editorial que compite.

**Invariante que se mantiene:** prohibidas Inter, Roboto, Poppins, Montserrat, Space Grotesk como principal; base 17 px; medida 62–70 caracteres.

---

## D-14 · La descalificación migra al FAQ 🔒

**Revisada el 2026-08-11.** La versión original exigía una sección "para quién NO es" en el flujo principal. Decisión del cliente: eliminarla.

**Decisión.** No hay sección de descalificación. Su función pasa a la **pregunta 3 del FAQ** ("¿Me sirve si recién arranco?"), que descalifica al que no tiene clientes y al que vende producto físico, con formato de honestidad en vez de portazo.

**Lo que se mantiene, y no es negociable:** la descalificación **tiene que existir en algún lado**. Es el elemento de confianza más barato disponible y lo único que distingue esta página de la de alguien que le vende a cualquiera. Se puede mover; no se puede eliminar.

**Consecuencia asumida.** Menos visible que como sección propia, con menos peso como señal de credibilidad. Combinada con D-03, la página tiene dos filtros menos que en v1.0 — ver la advertencia en D-03.

---

## D-15 · Deep-links por sección 🔒

**Decisión.** `id` estables y semánticos en cada sección.

**Motivo.** El uso principal previsto de la página es pegar links en DMs de Instagram. Poder mandar `#precio` a quien preguntó el precio es más valioso que cualquier micro-animación.

---

## D-16 · El sistema de diseño se congela después de la exploración visual

**Contexto.** Escribir el sistema de diseño antes de explorar direcciones produce dos fuentes de verdad contradictorias, y el agente que implementa usa la que lee primero.

**Decisión.** `DESIGN_SYSTEM.md` se publica en v0.1 con dos estados: cerrado (espaciado, breakpoints, contraste, escala tipográfica, performance, prohibiciones) y provisional (paleta, familias, radios, cards). Pasa a v1.0 recién cuando se elige la dirección.

**Regla de implementación.** Mientras el documento diga 0.1, el trabajo permitido es estructura y contenido, no ajuste estético fino.

---

## D-17 · Qué se promete y qué no sobre "que te encuentren" 🔒

**Contexto.** El cliente observó, con razón, que a su segmento le importa que las consultas *lleguen*, no la calidad de esas consultas. "Mejores conversaciones" resuelve un problema de segundo orden que el prospecto todavía no sabe que tiene. Pidió sumar SEO y GEO como argumento de atracción.

**El problema con prometer SEO/GEO tal cual.**
1. **No es un entregable, es un proceso.** Las propias fuentes de la industria hablan de lift medible alrededor del día 90 y posición defendible a los seis meses. La oferta es pago único, se entrega en dos semanas y después no se toca nada.
2. **Una landing de una página no rankea para términos competitivos.** "Peluquería Córdoba" lo gana el local pack y sitios con años de reseñas.
3. **Rompe el único diferencial.** La ventaja de Martin es decir lo que no puede prometer. Prometer clientes lo convierte en el proveedor del que su prospecto ya desconfía, compitiendo contra agencias con más equipo y más casos.

**Decisión.** Se suma el mecanismo de discovery, pero **acotado a lo que es 100 % controlable y entregable en un pago único**:

| ✅ Se promete | ❌ No se promete jamás |
|---|---|
| Que te encuentren cuando te buscan por tu nombre | Posiciones en Google |
| Ficha de Google configurada y conectada al sitio | Tráfico nuevo o cantidad de visitas |
| Sitio rápido, indexable, con datos estructurados | Aparecer en ChatGPT / Perplexity / AI Overviews |
| Contenido en formato pregunta-respuesta que un buscador o asistente de IA **pueda leer y entender** | Clientes, ventas o consultas en cualquier cantidad |
| Base técnica que hace viable posicionar o pautar más adelante | Resultados en un plazo determinado |

**Redacción obligatoria:** *"queda preparado para que puedan entenderlo"*, nunca *"vas a aparecer"*. La diferencia entre las dos formulaciones es la diferencia entre una promesa defendible y una indefendible.

**Las palabras "SEO" y "GEO" no aparecen en la página.** Son vocabulario de proveedor, activan la comparación con agencias y no están en el léxico del prospecto.

**Consecuencias asumidas.**
- **El alcance crece y $200.000 ya estaba bajo.** Ficha de Google, datos estructurados e indexación es trabajo real. Queda incluido en el precio base; el posicionamiento continuo, si alguna vez se ofrece, va como bloque opcional cotizado aparte — nunca como suscripción encubierta.
- **Se reabre la puerta al segmento descartado.** Prometer atracción vuelve a atraer al que no tiene clientes. Mitigación: la pregunta 3 del FAQ y la bajada del hero. Con D-14 revisada, esa mitigación es más débil que antes.

---

## D-18 · H1: "Trabajás bien. Cuando te buscan, no se nota." 🔒

**Decisión.** H1 corto y emocional, tres mecanismos en la bajada.

**Descartado.**
- *"Una página para que te encuentren, te crean y te escriban bien."* Arranca con "una página" (devuelve a la categoría commodity, D-01) y la enumeración de tres beneficios se lee como agencia.
- *"Trabajás bien. Online no se nota."* Emite un juicio sobre su Instagram que puede ser literalmente falso y lo pone a la defensiva. *"Cuando te buscan"* agrega la escena de búsqueda, que es el mecanismo nuevo.
- *"Si te recomiendan y te googlean, ¿qué encuentran?"* Buena, pero el formato pregunta suena a reproche sin la protección de una afirmación previa.

**Riesgo asumido.** Un H1 corto y directo puede leerse como acusación. **La bajada es la que baja la temperatura**: va directo a la solución sin volver sobre el problema. Si en implementación se acorta la bajada, el riesgo vuelve y el H1 queda solo con el reproche.

---

## D-19 · Dirección visual: *Plano* 🔒

**Decisión.** Sistema visible: grilla perceptible, etiquetas mono numeradas, cajas con borde en vez de sombra, verde profundo como acento único.

**Descartada.** La dirección *Papel* (editorial impreso, texto como imagen, terracota). Más elegante, pero menos clara: el cliente eligió Plano por legibilidad del sistema.

**Motivo de fondo.** El producto que se vende es *método*. Una estética que muestra su propia estructura es la demostración visual de "no empiezo diseñando, primero entiendo". Un prospecto que no puede juzgar código sí puede percibir orden.

**Actualización del 2026-08-11.** El HTML de la exploración se usó como fuente de medidas exactas. Dos hallazgos corrigen errores de la spec original, no de la implementación:

1. **No hay contenedor centrado.** El layout es full-bleed, `padding: 56px 40px`, secciones separadas por `border-bottom`. `DESIGN_SYSTEM.md` v1.0 especificaba 1120 px centrados. Esa es la causa principal de que la implementación se leyera como bloques flotando.
2. **El cuerpo es sans, no serif.** Ver D-13 revisada.

También se adopta el criterio de bordes del diagrama de la exploración (sólido → punteado a medida que avanza la cadena) por sobre el de v1.0 (todos punteados): la degradación del trazo cuenta la historia.

**Correcciones sobre lo explorado** (detalle en `DESIGN_SYSTEM.md` §11): sin navegación en el header, CTA verde en toda la página, retícula solo en el hero, barra CTA fija en mobile, y el nombre "Sin Brújula" —inventado por la herramienta— reemplazado por el real o retirado.

---

## D-20 · Se elimina la sección de los tres mecanismos 🔒

**Fecha:** 2026-08-11.

**Contexto.** La sección *Qué cambia* (tres bloques: te encuentran / te toman en serio / te escriben mejor) se agregó en `UX_SPEC.md` v2.0 al cambiar la tesis. La exploración visual original iba directo de `Problema` a `Recorrido`.

**Problema.** Redundancia. El diagrama del recorrido dice `te buscan → te encuentran → entienden → confían → te escriben`; los tres bloques dicen lo mismo en otro formato, inmediatamente antes. El prospecto recibía el mismo contenido dos veces seguidas, antes de que se le entregara nada concreto.

**Decisión.** Se elimina la sección. El orden vuelve a `Problema → Recorrido → Qué construyo`.

**Descartado.** Invertir el orden y reescribir los tres bloques en clave de método (`Recorrido → Qué hago para que eso pase`). Eliminaba la redundancia sin perder la explicación, pero agregaba una sección a una página que ya es larga y solapaba con *Qué construyo*.

**Consecuencia asumida.** El mecanismo 01 (discovery) pierde su explicación temprana: el prospecto no sabe qué implica "te encuentran" hasta el método de §04. Se mitiga con el cierre ampliado de §03, que es ahora el único punto donde los tres mecanismos se nombran juntos.

**Si el discovery queda percibiéndose como débil**, la corrección es ampliar el bloque `PARA QUE TE ENCUENTREN` de *Qué incluye*, no reponer una sección dedicada.

---

## D-21 · El diagrama del Recorrido pierde la fila `ANTES` 🔒

**Fecha:** 2026-08-11.

**Problema.** El hero muestra la cadena `te buscan → te encuentran a medias → no terminan de entender → dudan → desaparecen`. La sección *Recorrido* la repetía completa como fila `ANTES` antes de mostrar el `DESPUÉS`. Es la misma información dos veces, con una sola sección de por medio.

**Decisión.** El Recorrido muestra **una sola fila**, la del estado deseado. La comparación se sostiene con:

1. **Una línea de puente antes del diagrama:** *"Arriba viste cómo es hoy. Así queda."*
2. **El nodo 01 (`Te buscan`) repetido del hero.** Ese eco reemplaza a la comparación visual: quien vio el hero reconoce el punto de partida y entiende que lo que cambia es lo que sigue.

**Descartado.** Mantener las dos filas. La comparación posición por posición se lee mejor, pero no justifica repetir cinco nodos idénticos a los del hero.

**Consecuencia asumida.** Sin la fila `ANTES`, la cadena sola puede leerse como un embudo genérico de marketing. **La línea de puente y el nodo 01 repetido son las dos piezas que lo evitan: ninguna de las dos se elimina ni se reformula.**

---

## D-22 · Dos secciones consecutivas no pueden compartir silueta 🔒

**Fecha:** 2026-08-11.

**Problema detectado.** *Qué incluye* y *Cómo trabajamos* se construyeron como la misma grilla de cuatro celdas con hairlines de 1 px, misma anatomía (etiqueta mono + título + lista). Leídas seguidas, se perciben como la misma sección repetida y ninguna destaca.

**Decisión.** *Cómo trabajamos* pasa a **tabla de cuatro filas**, con encabezados de columna que aparecen una sola vez. Ver `UX_SPEC.md` §06.

**Descartado.** Restaurar solo el tratamiento interno de la exploración (número gigante verde, líneas mono compactas). Diferencia la anatomía de la celda pero no la silueta: seguirían siendo cuatro cajas iguales en fila. El problema es el patrón, no el relleno.

**Motivo de fondo, más allá de lo visual.** El valor de la sección está en la columna `De vos` leída hacia abajo: `Contarme cómo conseguís clientes → Nada → Una devolución → Nada`. Eso prueba en un vistazo que la carga de trabajo del cliente es mínima. En cuatro tarjetas hay que leer las cuatro para notarlo.

**Regla general para las secciones que faltan.** Antes de construir una sección, verificar qué formato tiene la anterior. Si es una grilla de celdas, la siguiente no puede serlo. Formatos disponibles: grilla de celdas · tabla de filas · dos columnas asimétricas (texto + imagen) · bloque a fondo completo · acordeón · diagrama.

Con once secciones, alternar formatos no es decoración: es lo que permite escanear la página y saber dónde se está.

---

## D-23 · El primer año de dominio va incluido, y la renovación se dice 🔒

**Fecha:** 2026-08-13.

**Decisión.** El primer año del dominio va incluido en el precio. La página lo dice — y dice también que después son **~USD 20 al año, a nombre del cliente, y que no se le pagan a Martin**.

**Por qué se nombra la renovación en vez de callarla.** *"Costo fijo mensual: $0"* a secas es cierto y suena mejor. Pero al mes 13 al cliente le llega un aviso de renovación del que nadie le habló. El monto es irrelevante; el daño es que la página que prometió decir siempre la verdad le escondió un dato. Es el mismo modo de falla que D-03 describe para el precio, con otro disfraz.

Dicho completo, el argumento queda **más fuerte**, no más débil: regalás el primer año y encima sos el único que le avisa del costo que viene.

**Descartado.**
- *Decir solo `$0`.* Ver arriba.
- *Cobrar el dominio desde el día uno* (versión original de `UX_SPEC.md` §09). Incluir el primer año cuesta casi nada y refuerza el argumento central.

**Redacción.** La cifra se cotiza **por encima** del costo real. Un número que después resulta menor es una sorpresa agradable; uno que resulta mayor rompe la promesa.

**Dónde va — corregido el 2026-08-13.** La primera implementación metía el dato dentro de la celda del `$0`. Está mal: ahí la cifra del dominio compite con el cero y *"después son USD 20"* se lee como retirar el regalo en la misma frase en que se hace. **Va en mono, debajo del rectángulo.** Presente y verificable, pero como letra chica honesta. Ver `UX_SPEC.md` §09.

---

## D-24 · Plano necesita rango de contraste, no menos sistema 🔒

**Fecha:** 2026-08-13.

**Contexto.** Revisando el brief visual original (`direccion_visual_referencias_martin.md`) contra la implementación, aparece una brecha. Las partes **estratégicas** de ese brief se superaron a propósito (tesis, navegación, CTAs, casos). Las partes de **oficio** —§3 "verse cara sin resultar complicada", §17 tipografía display y whitespace abundante, §20 personalidad premium— nunca se revocaron, y la página no las cumplía.

**Diagnóstico.** El problema no eran las cajas ni la grilla: es que **todo estaba al mismo peso**. Etiqueta mono 12 px, títulos 24–38 px, cuerpo 17 px, filetes de 1 px, 56 px de aire. Nada dominaba. Un plano técnico se percibe caro cuando hay un elemento enorme, mucho aire y anotaciones diminutas y precisas; uniformemente mediano se lee como wireframe.

**Decisión.** Se amplía el rango de contraste sin tocar la dirección:

| | Antes | Ahora |
|---|---|---|
| Display (H1) | 50 / 38 | **88 / 40** |
| H2 de sección | 38 / 28 | **52 / 28** |
| H3 | 24 / 20 | **26 / 20** |
| Cuerpo | 17 | 17 *(sin cambio)* |
| Mono | 11–12 | 11–12 *(sin cambio)* |
| Padding vertical de sección | 56 / 40 | **96 / 56** |

La relación display : cuerpo pasa de 2,9 : 1 a **5,2 : 1**. Cuerpo y mono no se tocan: el contraste sale de agrandar lo grande, no de achicar lo legible (invariante 18 intacto).

**Revierte parcialmente `DESIGN_SYSTEM.md` v1.1**, que había bajado el padding de sección de 128 a 56 px "porque era casi el doble de lo real". Ese número se midió del HTML de la exploración, que era una mesa de trabajo comprimida, no una página terminada. 96 px es el punto medio y queda dentro de la escala (`--sp-24`).

**Descartado.**
- *Sacar las cajas y los filetes.* Es la dirección misma (D-19). El problema era la falta de jerarquía, no la presencia de sistema.
- *Abandonar Plano por una dirección editorial.* Costaría reimplementar todo y D-19 sigue siendo correcta: el producto que se vende es método.
- *Agrandar el cuerpo.* Rompería la medida de lectura sin aportar percepción de valor.

**Tensión de fondo, asumida.** D-19 argumenta que *"un prospecto que no puede juzgar código sí puede percibir orden"*. Pero el comprador —peluquero, coach, fotógrafo— no juzga "qué ordenado", juzga "qué lindo, este sabe". El brief lo dice en §3: que piense *"este tipo entiende cómo debería presentarse mi negocio"*. Eso es estético antes que sistemático. Plano sigue vigente; lo que cambia es que se ejecuta con generosidad y no en su piso.

**Implementación.** La escala y el padding viven como custom properties en `tokens.css` con sus breakpoints, y los componentes las consumen. Antes cada sección repetía sus propios `@media` de padding: ajustar el ritmo de la página obligaba a tocar diez archivos y era la razón práctica por la que nunca se ajustaba.

**Pendiente, fuera de esta entrada.** Densidad de cajas, imágenes a escala, motion autorizado sin usar (`DESIGN_SYSTEM.md` §10) y el diagrama del hero, que el brief §7 pedía explícitamente que no fuera un diagrama de cajas.

---

## D-25 · El panel del hero deja de ser una cadena de nodos 🔒

**Fecha:** 2026-08-13.

**Contexto.** El panel mostraba cinco nodos en columna (`te buscan → te encuentran a medias → no terminan de entender → dudan → desaparecen`). Dos problemas, uno de forma y uno de fondo.

**De forma:** eran cajas con borde y número, igual que el diagrama de Recorrido. Las dos secciones se dibujaban igual, y eso desarmaba la compensación de D-21 — si el estado roto y el ordenado tienen la misma silueta, no hay contraste, hay repetición. El brief visual original (§7) además pedía explícitamente *no* usar un diagrama corporativo genérico.

**De fondo:** los cinco nodos describían **estados mentales de un desconocido**. Nadie ve eso pasar. Se probaron cuatro reescrituras del nodo 2 y tres cadenas completas con lógicas distintas; ninguna resolvió la abstracción, porque el problema era el plano, no la redacción.

**Decisión.** El panel es una **convergencia**: tres lugares reales donde te buscan —cada uno con una pregunta que el prospecto no puede contestar con confianza— que desembocan en una sola caja de destino.

```
        HOY / CUANDO TE BUSCAN
    ───────────────────────────────
 ┌─ GOOGLE ─┐ ┌ INSTAGRAM ┐ ┌ UN CONOCIDO ┐
 │ ¿qué      │ │ ¿qué tienen│ │ ¿qué link   │
 │ encuentran?│ │ que recorrer?│ │ les pasás?│
 └─────┬────┘ └──────┬─────┘ └──────┬──────┘
       └─────────────┼──────────────┘
                     ↓
       ┌─────────────────────────────┐
       │ LA INFORMACIÓN ESTÁ REPARTIDA│
       │ ¿Dónde se entiende          │
       │ tu negocio?                 │
       │ ─────────────────────────── │
       │ QUÉ HACÉS · CÓMO TRABAJÁS   │
       └─────────────────────────────┘
```

**El destino es una pregunta, no una respuesta.** Ahí es exactamente donde falta algo, y la caja vacía de contenido lo hace visible sin decirlo.

**El conector va en horquilla, no en diagonales:** tres bajadas, un travesaño y una bajada al destino, todo con porcentajes. Las diagonales quedan bien a un ancho fijo y se descuadran en todos los demás, y el panel del hero cambia de ancho entre 900 y 1900 px. Trazo punteado, coherente con el criterio de `DESIGN_SYSTEM` §8: el punteado es lo que está por desdibujarse.

⚠️ **Volvió a haber cajas, y es deliberado.** Esta entrada nació para separar el hero de Recorrido, que eran los dos cadenas de nodos con borde. **Lo que los separa ahora es la topología, no la ausencia de cajas:** Recorrido es una cadena lineal de cinco nodos iguales, horizontal, sobre `--ink` y en verde; el hero es una convergencia de tres en uno, vertical, sobre `--panel` claro. Distinta forma, distinto fondo, distinta lectura.

**Cómo se verifica que sigue funcionando:** bajar del hero a Recorrido y volver. Si dan la misma sensación, hay que cambiar uno de los dos — y el que se cambia es el hero, porque el diagrama de Recorrido es el que la página promete ("así queda").

**Iteraciones descartadas antes de llegar acá** (2026-08-13, todas probadas en pantalla):
- *Escalera tipográfica que se degrada, sin cajas.* Sin masa: 17 px contra un H1 de 88 px se leía como nota al pie.
- *La misma escalera con las preguntas a 26 px y sin filetes entre canales.* Mejor, pero seguía sin componer.
- *Tres superficies de interfaz escalonadas y superpuestas* (campo de búsqueda, perfil, mensaje), que era lo que pedía el brief §7. Tenía superficie, pero se acercaba peligrosamente a falsificar capturas de Google e Instagram y sumaba tres cajas más sin argumento propio.

**La etiqueta `GOOGLE · INSTAGRAM · UN CONOCIDO` asciende de nota al pie a estructura.** Ya estaba en la spec, colgada debajo del primer nodo; era el elemento más desaprovechado del panel.

**Cierra en pregunta, no en estado.** *"¿Dónde se entiende tu negocio?"* es la tesis convertida en pregunta y deja al lector contestando. Un estado (`desaparecen`) se lee y se olvida.

**Descartado.**
- *`«hola, info?»` como cierre* (versión de `UX_SPEC` v2.0). Recorrido termina en `Te escriben` — el único nodo relleno de la página. Si el hero también termina en alguien escribiendo, las dos cadenas aterrizan en el mismo lugar y el pago de Recorrido se evapora. Peor: en el estado roto, recibir un mensaje no se lee como pérdida.
- *La escena de chat donde te recomiendan y muere la conversación.* Concreta y fuerte, pero perdía los tres canales y con ellos el mecanismo 01.
- *Fondo `--ink` en el panel.* Queda muy bien y es muy Plano, pero el presupuesto de superficies oscuras está tomado por Recorrido y el CTA final. Queda sobre `--panel` con la retícula, que es lo que `DESIGN_SYSTEM` §5 ya le asigna.

**Consecuencia asumida — el eje pasa de decisión a canal.** `UX_SPEC` §01 exigía que el eje fuera *"la decisión de la persona, no el canal"*, porque "Instagram → WhatsApp describe herramientas" y eso se compara contra "landing $150". Acá los canales son **la premisa, no el recorrido**: lo que se vende es la pregunta final, y *"¿dónde se entiende tu negocio?"* no tiene equivalente en una plantilla barata. **Señal de que salió mal:** si empiezan a llegar consultas comparando precio contra Wix o plantillas.

---

## D-21 · El diagrama del Recorrido pierde la fila `ANTES` 🔒 — enmienda

**Enmendado el 2026-08-13.** D-21 declaró intocable el eco del nodo `Te buscan`, repetido entre hero y Recorrido, por ser lo único que reemplazaba a la fila `ANTES` eliminada.

Con D-25 el hero ya no tiene nodos, así que **el eco se muda del nodo al rótulo del panel: `HOY / CUANDO TE BUSCAN`**. Recorrido sigue abriendo con `Te buscan`. La correspondencia se conserva, cambia de soporte.

**Las dos piezas de D-21 siguen vigentes y siguen sin poder eliminarse:** el eco —ahora en el rótulo— y la línea de puente *"Arriba viste cómo es hoy. Así queda."*

---

## Invariantes — qué NO se cambia 🔒

Aunque el resultado se vea peor, aunque un agente lo sugiera, aunque parezca una mejora obvia:

1. **Un solo destino de CTA (WhatsApp) y una sola etiqueta** en toda la página.
2. **El H1 no dice "diseño y desarrollo web"** ni ninguna variante de la categoría commodity.
3. **La objeción "ya tengo Instagram" se resuelve antes del 40 % del scroll**, no en el FAQ.
4. **Nunca se promete cantidad de consultas, ventas o clientes.**
5. **Nunca se promete posición en Google, tráfico ni presencia en asistentes de IA.** Redacción: "queda preparado para que puedan entenderlo", no "vas a aparecer" (D-17).
6. **Las palabras "SEO" y "GEO" no aparecen en la página.**
7. **Ninguna cifra, testimonio o sello sin respaldo verificable.**
8. **El bloque de costo fijo `$0` + dominio** se publica siempre, **con la renovación anual dicha** (D-23). Si no hay monto exacto de dominio, no se publica la sección de inversión.
9. **La descalificación existe en algún lado.** Puede moverse de sección; no puede eliminarse (D-14).
10. ~~**La bajada del hero no se acorta.**~~ **Revocado el 2026-08-11 por decisión del cliente.** La bajada ya no incluye el calificador de segmento. Los filtros activos son **el precio en §09** (D-03 revisada el 2026-08-13) y la pregunta 3 del FAQ. Si aun así llegan muchas consultas de gente sin clientes, la reposición del calificador en la bajada es el primer cambio a probar.
11. **El CTA es verde en toda la página**, incluidas las secciones oscuras.
12. **Sin navegación de secciones en el header.**
13. **Sin formulario.** Sin segundo destino que compita con WhatsApp.
14. **Sin fotos de stock, sin logos de tecnologías, sin contadores animados.**
15. **Todo el copy fuera del layout.**
16. **Nada mensual en el stack.**
17. **Alto de botón ≥ 52 px** y área táctil ≥ 44 px.
18. **Base tipográfica mobile 17 px**, medida 62–70 caracteres.
19. **Contenido legible y completo con JS desactivado.**
20. **LCP < 2,5 s en 4G, CLS < 0,1.**

---

## Riesgos abiertos

| # | Riesgo | Estado |
|---|---|---|
| R-1 | Publicar sin plan de distribución → 0 consultas → conclusión falsa "la landing no sirve" | **abierto** — requisito de lanzamiento |
| R-2 | Falta foto real de Martin | **bloqueante** |
| R-3 | Faltan las capturas mobile del proyecto publicado (§04). El link vivo y el relato del caso (§07) ya están cargados | **bloqueante de la captura de §04** |
| R-4 | Falta el costo anual exacto del dominio | **bloqueante de la sección de precio** |
| R-5 | Testimonios sin nombre y negocio | **bloqueante de esa sección** |
| R-6 | Prefijo de WhatsApp mal armado → falla silenciosa, conversión cero | mitigado por verificación en 3 dispositivos |
| R-7 | Webview de Instagram: `100vh`, safe-area, links atrapados | mitigado en `DESIGN_SYSTEM.md` § Breakpoints |
| R-8 | Sobre-diseño: página tan "diseñada" que el prospecto no entiende qué se le vende | criterio de corte: 30 segundos de scroll |
