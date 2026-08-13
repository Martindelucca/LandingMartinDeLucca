# UX_SPEC

**Versión:** 2.0 — cerrado
**Última actualización:** 2026-08-11
**Cambio principal respecto de v1.0:** la promesa deja de ser solo el recorrido Instagram → WhatsApp y pasa a ser *tu negocio existe en un solo lugar*, con tres mecanismos jerarquizados. El precio sale del flujo principal.

Este documento define **qué hace cada sección y por qué existe**. El copy final vive en `src/content/site.json`.

**Regla que gobierna todo:** cada sección tiene que poder responder *¿qué objeción mueve?* Si no puede, no va.

---

## Tesis

> Hoy tu negocio existe en un solo lugar. El que te googlea no te encuentra, el que te recomienda no tiene qué mostrar, y el que te escribe llega sin entender nada.

Tres mecanismos, en este orden de jerarquía y sin excepción:

| # | Mecanismo | Qué promete | Qué NO promete |
|---|---|---|---|
| 1 | **Te encuentran** | Que aparezcas cuando te buscan por nombre, cuando te recomiendan, y que la ficha de Google quede configurada y conectada | Posiciones en Google, tráfico nuevo, aparecer en ChatGPT |
| 2 | **Te toman en serio** | Presentación profesional: el que llega ve un negocio, no un perfil | — |
| 3 | **Te escriben mejor** | Llegan a WhatsApp entendiendo qué vendés | Cantidad de consultas |

El recorrido Instagram → WhatsApp **no desaparece**: baja de promesa principal a tercer mecanismo, que es su lugar correcto.

### Dónde vive cada mecanismo

⚠️ **No hay una sección dedicada a los tres mecanismos.** Existió en v2.0 y se eliminó el 2026-08-11 por redundancia con el diagrama del recorrido (ver `DECISIONS.md` → D-20). Cada mecanismo queda representado en varios puntos del flujo:

| Mecanismo | Dónde aparece |
|---|---|
| 01 · Te encuentran | H1 y bajada · cita 1 de §02 · nodo `Te encuentran` del diagrama · paso `TE PONGO EN GOOGLE` del método §04 · bloque `PARA QUE TE ENCUENTREN` de §05 · pregunta 5 del FAQ |
| 02 · Te toman en serio | Bajada · citas 2 y 3 de §02 · nodo `Confían` del diagrama · §08 Quién soy |
| 03 · Te escriben mejor | Bajada · citas 4–6 de §02 · nodos `Entienden` y `Te escriben` · §05 Qué incluye |

**Consecuencia asumida:** el prospecto no recibe una explicación detallada del mecanismo 01 hasta §04. Se mitiga con el cierre reforzado de §03. Si el mecanismo de discovery queda percibiéndose como débil, la corrección es ampliar el bloque `PARA QUE TE ENCUENTREN` de §05, no reponer una sección dedicada.

⚠️ **Límite duro:** ninguna sección puede prometer posicionamiento, tráfico, clientes ni presencia en asistentes de IA. Ver D-17.

---

## Orden y función

| # | Sección | Objetivo | Objeción que ataca | CTA |
|---|---|---|---|---|
| — | Header | Identidad + acceso al CTA | — | ghost (desktop) |
| 01 | Hero | Prometer y calificar en 5 segundos | "¿esto es para mí?" | **primario** |
| 02 | Problema | Identificación. Ganar el derecho a seguir | "no me entiende" | — |
| 03 | Recorrido (tesis) | Sacar la decisión del eje precio | "ya tengo Instagram" (10/10) | — |
| 04 | Qué construyo | Hacer tangible el entregable | "linda pero inútil" (9/10) | **primario** |
| 05 | Qué incluye | Alcance y valor percibido | "¿qué me llevo?" | — |
| 06 | Cómo trabajamos | Reducir riesgo de proceso | "no tengo tiempo" / "desaparecen" | — |
| 07 | Un caso | Credibilidad verificable | "no lo conozco" | link de texto |
| 08 | Quién soy | Confianza persona a persona | "¿con quién trato?" | — |
| 09 | Inversión | Matar el miedo al costo recurrente | "¿cuánto termino pagando?" (9/10) | **primario** |
| 10 | Preguntas | Precio, descalificación y objeciones residuales | varias | — |
| 11 | Empezar | Última conversión con el marco correcto | "¿y ahora qué hago?" | **primario** |
| — | Footer | Datos, número visible | — | número en texto |

**Longitud objetivo:** 1.000–1.400 palabras. Larga a propósito (D-05).

**Sobre el orden:** la objeción "ya tengo Instagram" se resuelve en 03, no en el FAQ. Es la barrera de mayor peso: si se deja para el final, la persona ya se fue.

### Numeración visible vs. numeración de este documento

⚠️ **No coinciden, y es deliberado.** Este documento numera desde el hero para referencia interna. **Las etiquetas mono que ve el usuario arrancan en `01` en la sección Problema**, porque el hero no lleva etiqueta numerada: su eyebrow es `CÓRDOBA / NEGOCIOS DE SERVICIOS`, que cumple otra función.

| Sección en este doc | Etiqueta visible en la página |
|---|---|
| 01 Hero | *(sin etiqueta numerada)* |
| 02 Problema | `01 / PROBLEMA` |
| 03 Recorrido | `02 / RECORRIDO` |
| 04 Qué construyo | `03 / QUÉ CONSTRUYO` |
| 05 Qué incluye | `04 / QUÉ INCLUYE` |
| 06 Cómo trabajamos | `05 / CÓMO TRABAJAMOS` |
| 07 Un caso | `06 / UN CASO` |
| 08 Quién soy | `07 / QUIÉN SOY` |
| 09 Inversión | `08 / INVERSIÓN` |
| 10 Preguntas | `09 / PREGUNTAS` |
| 11 Empezar | `10 / EMPEZAR` |

Una numeración visible que arranca en 02 deja al usuario buscando un 01 que no existe. En un sistema cuya credibilidad se apoya en verse ordenado, ese salto lo desarma.

---

## Header

Presencia mínima. **No es navegación.**

- Nombre "Martin De Lucca" como marca tipográfica.
- Desktop: nombre izquierda, botón `ghost` derecha.
- **Sin menú de secciones.** Cuatro links en una landing de una sola acción son cuatro vías de fuga.
- **Sin hamburguesa en mobile.** Solo el nombre.
- No sticky en mobile: ahí el CTA persistente es la barra inferior.

---

## 01 · Hero

**Función:** frenar el scroll con reconocimiento emocional y calificar. No convencer.

**Contenido**

- **Etiqueta mono:** `CÓRDOBA / NEGOCIOS DE SERVICIOS`
- **H1:** **Trabajás bien. Cuando te buscan, no se nota.**
- **Bajada:** *Armo una página para que te encuentren cuando te buscan, te tomen en serio cuando te miran, y te escriban sabiendo qué ofrecés. Para negocios de servicios que ya consiguen clientes y cierran todo a mano.*
- **CTA primario** + microcopy `Te contesto yo, no un bot.`
- **Micro-prueba:** una línea, honesta, verificable. Nombre real del caso publicado.
- **Panel derecho:** sobre retícula, rotulado `HOY / CUANDO TE BUSCAN`.

  ⚠️ **Rehecho el 2026-08-13 (D-25).** Antes eran cinco nodos en columna (`TE BUSCAN → TE ENCUENTRAN A MEDIAS → …`). Se descartaron por dos motivos: eran cajas iguales a las de Recorrido —lo que anulaba el contraste entre estado roto y estado ordenado— y describían estados mentales de un desconocido, que nadie ve pasar.

  **Una convergencia: tres lugares reales → un destino.** Cada canal es una caja con su nombre en mono y, debajo, una pregunta que el prospecto no puede contestar con confianza:

  | | Canal | Pregunta |
  |---|---|---|
  | 01 | `GOOGLE` | ¿qué encuentran? |
  | 02 | `INSTAGRAM` | ¿qué tienen que recorrer? |
  | 03 | `UN CONOCIDO` | ¿qué link les pasás? |

  Las tres bajan a una caja de destino con *La información está repartida.*, **`¿Dónde se entiende tu negocio?`** y el pie mono `QUÉ HACÉS · CÓMO TRABAJÁS · POR QUÉ ELEGIRTE`.

  **El destino es una pregunta, no una respuesta.** Ahí es donde falta algo, y la caja lo hace visible sin decirlo.

  ⚠️ **El conector va en horquilla —tres bajadas, un travesaño, una bajada— nunca en diagonales.** Las diagonales quedan bien a un ancho fijo y se descuadran en todos los demás.

  ⚠️ **Lo que separa este diagrama del de Recorrido es la topología, no la ausencia de cajas** (D-25): acá convergencia vertical de tres en uno sobre `--panel`; allá cadena lineal de cinco nodos sobre `--ink` y en verde. Antes de tocar cualquiera de los dos, bajar del hero a Recorrido y volver: si dan la misma sensación, se cambia **el hero**, no Recorrido.

  ⚠️ **Cierra en pregunta, no en estado.** Un estado (`desaparecen`) se lee y se olvida; la pregunta deja al lector contestando. Y **no puede cerrar en alguien escribiéndote**: Recorrido termina en `Te escriben`, y si las dos cadenas aterrizan igual, el pago de Recorrido se evapora.

  **La tercera pregunta es la que más pega** — es la única que pone al prospecto a hacer algo y no tiene con qué.

  **El eje pasa de decisión a canal, y es deliberado (D-25).** Los canales son la premisa, no el recorrido: lo que se vende es la pregunta final, que no tiene equivalente en una plantilla de $150. La neutralización de Instagram se conserva — aparece como uno de tres, no como el único.

  ⚠️ **El rótulo `HOY / CUANDO TE BUSCAN` carga el eco de D-21.** Es lo que reemplaza al nodo `Te buscan` que hacía de puente con Recorrido. No se acorta a `HOY`.

**Sobre el H1.** Es un golpe corto que apela a la brecha "soy bueno pero parezco amateur". Riesgo asumido: puede leerse como reproche. **La bajada es la que baja la temperatura** — por eso no vuelve a mencionar el problema y va directo a los tres mecanismos. Si en implementación se acorta la bajada, el riesgo vuelve.

Se descartó *"Trabajás bien. Online no se nota."* porque emite un juicio sobre su Instagram, que puede ser falso y ponerlo a la defensiva. *"Cuando te buscan"* agrega la escena de búsqueda, que es el mecanismo nuevo.

**Prohibido acá:** imagen de stock, video con autoplay, scroll-reveal sobre el H1 o el CTA.

---

## 02 · Problema

**Función:** identificación literal. No argumenta, **describe**.

**Cuatro** frases en **primera persona del prospecto**, en su lenguaje, **en el mismo orden que el diagrama del hero**: quien vio el gráfico reconoce la secuencia.

| # | Cita | Mecanismo | Nodo del hero |
|---|---|---|---|
| 1 | «Me recomendaron, me buscaron en Google y no encontraron nada mío.» | 01 · te encuentran | `TE ENCUENTRAN A MEDIAS` |
| 2 | «Hay gente que trabaja peor que yo y se presenta mejor.» | 02 · te toman en serio | `DUDAN` |
| 3 | «Nadie termina de entender todo lo que hago.» | 02 → 03 · bisagra | `NO TERMINAN DE ENTENDER` |
| 4 | «Me escriben, contesto todo, y después desaparecen.» | 03 · te escriben mejor | `DESAPARECEN` |

⚠️ **Bajó de seis a cuatro el 2026-08-13.** Se eliminaron «Todo está repartido entre publicaciones, destacadas y chats», «Me preguntan siempre lo mismo» y «Tengo buenos clientes, pero online parezco improvisado».

**Las tres eliminadas daban por hecho un flujo de consultas ya existente**, y eran las que expulsaban al que recién arranca antes de que llegara al FAQ. Acortar la sección y abrirle la puerta a ese segmento terminaron siendo el mismo movimiento. Las cuatro que quedan funcionan igual con una consulta por semana o con veinte.

**Una por mecanismo, más la bisagra.** Con seis citas el peso estaba en el mecanismo 03 (desbalance 1-1-3 deliberado). Con cuatro, cada una cubre un tramo distinto y **la secuencia calca los nodos del diagrama del hero** — ver la última columna de la tabla. Ese eco es el que hace que la sección se lea como reconocimiento y no como lista de quejas. **No reordenar.**

**Grilla.** 1 columna en mobile · **2×2 desde 900 px**, sin más quiebres.

⚠️ **No pasar a una fila de cuatro.** Se probó el 2026-08-13 y se descartó: en una sola fila las celdas quedan angostas, las citas se parten en tiras y la sección se lee como una fila de etiquetas. En cuadro se leen como cuatro voces distintas, que es lo que la sección tiene que transmitir. El cuadro además cierra sin fila huérfana en cualquier ancho.

**Costo asumido:** por encima de ~1700 px cada celda pasa de 800 px y la cita puede entrar en una sola línea. La medida de lectura sigue protegida por el `max-width: 34rem` del texto dentro de la celda.

**Nota sobre la cita 2.** Se descartaron dos variantes por el mismo motivo: «Mi trabajo es mejor de lo que parece cuando alguien me busca» y «Sé que lo que hago está bueno, pero online no se nota». Las dos son casi literales el H1 vigente ("Trabajás bien. Cuando te buscan, no se nota") y repetirlo desperdicia una de las cuatro posiciones. La vigente ataca el mismo mecanismo desde la comparación con terceros, que es un ángulo que el H1 no ocupa.

**Formato: citas, no bullets con tilde.** Un bullet dice "beneficio"; una cita dice "te entiendo". No agregar íconos ni comillas decorativas más allá de las angulares.

⚠️ **Sin cajas, desde el 2026-08-13.** Las citas iban en celdas con filete de 1 px. Eran contenedores puros —no cargaban argumento— y a anchos grandes quedaban medio vacías, con la cita a 17 px perdida adentro. Ahora **cada voz se separa con un filete superior `--rule-hard` y va a `--fs-h3`**, sin encierro. El volumen de voces *es* el argumento de la sección: si las citas no pesan, la sección no hace nada.

**Padding vertical de celda:** `--sp-5` en mobile, `--sp-6` en desktop, con `column-gap: --sp-16` entre columnas. Ya no hay padding lateral: las citas alinean con el borde de la sección.

**Cierre de sección, completo, dos frases:**

> El problema no es que te falte una página. Es que tu negocio existe en un solo lugar.

⚠️ La segunda frase es obligatoria: es donde se enuncia la tesis y el único puente hacia la sección de Recorrido. Sin ella, el diagrama aparece sin que se haya enunciado la tesis que ilustra.

**Layout.** Cuatro tarjetas apiladas en mobile son ~590 px de alto. Si queda pesado, reducir el padding interno **antes** que eliminar una cita: con cuatro no sobra ninguna — cada una cubre un tramo distinto de la cadena.

⚠️ La nota vieja sobre el fondo `--rule` del contenedor ya no aplica: con las celdas eliminadas no hay contenedor que se vea a través de los huecos.

---

## 03 · Recorrido (tesis)

**La sección más importante.** Es la que evita que te comparen por precio.

1. Frase de neutralización, sola y grande:
   > No quiero reemplazar tu Instagram. Quiero aprovechar mejor a la gente que ya te busca — ahí y en todos lados.

   ⚠️ Cambió respecto de v2.0. La versión anterior terminaba en *"la gente que ya te descubre ahí"*, que encerraba el descubrimiento dentro de Instagram y contradecía el mecanismo 01. La versión nueva conserva la neutralización —que sigue siendo la objeción de 10/10— pero abre el canal, igual que la etiqueta `GOOGLE · INSTAGRAM · UN CONOCIDO` del diagrama.
2. **Puente al hero, una línea:**
   > Arriba viste cómo es hoy. Así queda.

   ⚠️ Obligatoria. Es lo que ata este diagrama al del hero y evita que la cadena se lea como un embudo genérico de marketing.

3. **Diagrama, una sola fila de cinco nodos:**

   | 01 | 02 | 03 | 04 | 05 |
   |---|---|---|---|---|
   | Te buscan | Te encuentran | Entienden | Confían | Te escriben |

   ⚠️ **Cambió el 2026-08-11.** La versión anterior tenía dos filas (`ANTES` / `DESPUÉS`). Se eliminó la fila `ANTES` porque replicaba literalmente el diagrama del hero, que ya muestra esa misma cadena. Ver `DECISIONS.md` → D-21.

   **El nodo 01 dice `Te buscan`, igual que el primer nodo del hero.** Ese eco es lo que reemplaza a la comparación visual: quien vio el hero reconoce el punto de partida y entiende que lo que cambia es todo lo que sigue. **No modificarlo.**

   Bajo el nodo 01, la etiqueta mono `GOOGLE · INSTAGRAM · UN CONOCIDO` — la misma del hero.

   **Orientación horizontal**, a diferencia del hero, que es vertical. En mobile los nodos apilan en columna.

   **Estados sobre fondo oscuro:** nodos 01–04 con borde sólido `--green`, texto `--text-on-ink` y número `--green-light`; nodo 05 con relleno `--green`, texto y número `--on-green`. Es el único nodo con relleno de toda la página.

4. Cierre, **dos líneas**:
   > La web es el vehículo. Lo que armo es el recorrido: que te encuentren cuando te buscan, que vean un negocio y no un perfil, y que te escriban sabiendo qué ofrecés.

   ⚠️ Ampliado el 2026-08-11. La versión anterior era solo *"La web es el vehículo. Lo que armo es el recorrido."* Al eliminarse la sección de los tres mecanismos (D-20), este cierre es el único punto del flujo donde los tres se nombran juntos y en orden. **No acortarlo.**

**Tratamiento:** fondo `--ink`. Uno de los dos únicos quiebres de la página.

**Restricción:** el diagrama tiene que ser legible y completo sin JS y con `prefers-reduced-motion`. Si la animación es la que comunica, está mal dibujado.

---

## 04 · Qué construyo

- Nombre del producto: **Página para negocios de servicios**.

  ⚠️ Se descartó "Landing de conversión para servicios": usa dos palabras de la lista prohibida (§Tono) — "conversión" y "landing" — justo en el nombre del producto, que es lo más visible de la sección. El prospecto no dice ninguna de las dos.

- El método en pasos con etiqueta mono, **cinco pasos que espejan los tres mecanismos**:

  `ANALIZO TU CLIENTE` → `ORDENO LA OFERTA` → `ESCRIBO Y DISEÑO` → `TE PONGO EN GOOGLE` → `CONECTO CON WHATSAPP`

  El paso 04 es el que sostiene el mecanismo 01. La cadena anterior (`ANALIZO` → `ORDENO` → `DISEÑO EL RECORRIDO` → `CONSTRUYO` → `CONECTO CON WHATSAPP`) describía solo el recorrido interno y dejaba el discovery sin representación en el método.
- **Captura real en mockup de celular.** Mobile, no desktop.
- CTA primario.

---

## 05 · Qué incluye

**Función:** alcance y valor percibido. Cuatro bloques con etiqueta mono.

| Bloque | Contenido |
|---|---|
| `BLOQUE 01 · ANTES DE DISEÑAR` | Análisis del negocio · Análisis del cliente ideal · Estructura estratégica |
| `BLOQUE 02 · LA PÁGINA` | Copy orientado a consultas — **no necesitás traer los textos** · Diseño propio, no plantilla · Desarrollo responsive · Integración con WhatsApp |
| `BLOQUE 03 · PARA QUE TE ENCUENTREN` | Ficha de Google configurada y conectada al sitio · Datos estructurados para buscadores y asistentes de IA · Sitio rápido e indexable · Contenido en formato pregunta-respuesta |
| `BLOQUE 04 · PUESTA EN MARCHA` | Dominio, hosting y publicación explicados · Analítica básica · Entrega funcionando |

**El bloque 03 es nuevo** y es lo que sostiene el mecanismo "te encuentran". Sin él, la promesa del hero queda sin respaldo en el alcance — el error más caro posible en esta página.

⚠️ Redacción: *"queda preparado para que los buscadores y los asistentes de IA puedan leerlo y entenderlo"*. **Nunca** *"vas a aparecer en Google"* ni *"vas a aparecer en ChatGPT"*.

**Nota de alcance:** 1 columna en mobile · 2 de 900 a 1279 px · 4 desde 1280 px.

⚠️ **Sin celdas y sin filetes, desde el 2026-08-13.** Primero se sacaron las cajas —eran contenedores puros y en mobile costaban ~220 px de scroll solo en padding y encabezados—, y después se sacó el filete superior de cada bloque: en varias columnas quedaban cuatro segmentos cortos a la misma altura y se leían como una línea rota. **El orden lo dan el número en `--green` y el aire.**

**El número y el nombre van en la misma línea** (`01 Antes de diseñar`). La palabra "BLOQUE" se eliminó: la numeración ya es el sistema de toda la página y ocupaba una línea entera repetida cuatro veces.

---

## 06 · Cómo trabajamos

**Función:** matar dos miedos — "que el desarrollador desaparezca" y "esto me va a dar más trabajo".

### Formato: tabla de filas, NO grilla de tarjetas 🔒

⚠️ **Restricción estructural.** Esta sección va como **tabla horizontal: una fila por paso**, con cuatro columnas.

**No puede ser una grilla de tarjetas.** La sección anterior (*Qué incluye*) ya es una grilla de cuatro celdas con hairlines; repetir esa silueta hace que las dos secciones se lean como la misma cosa dos veces, y ninguna destaque.

**Y la tabla no es solo diferenciación visual: es el formato que sostiene el argumento.** El valor de esta sección está en la columna **"De vos"**, que leída hacia abajo dice `Contarme cómo conseguís clientes → Nada → Una devolución → Nada`. Eso demuestra de un vistazo que la carga de trabajo del cliente es mínima, que es exactamente el miedo a desactivar. Repartido en cuatro tarjetas, hay que leer las cuatro para notarlo; en una columna, se ve solo.

### Contenido

| Paso | Qué pasa | De vos | Cuándo |
|---|---|---|---|
| 01 | Charla de 15 min | Contarme cómo conseguís clientes hoy | Día 1 |
| 02 | Análisis y estructura | Nada | Días 2–4 |
| 03 | Diseño y desarrollo | Una devolución | Días 5–12 |
| 04 | Publicación y puesta a punto | Nada | Días 13–14 |

⚠️ **Los días se cerraron el 2026-08-13.** Hasta entonces las dos últimas filas decían `Días 5–X` y `Día X`, y esos literales se estaban renderizando en la página. Los números salen de las dos semanas de entrega que fija D-17 y **tienen que coincidir con la respuesta "¿Cuánto tarda?" del FAQ**: si cambia el plazo, se actualizan los dos lugares o la página se contradice sola.

### Tratamiento

- **Encabezados de columna** en mono 11 px, `--text`, mayúsculas: `QUÉ PASA` · `DE VOS` · `CUÁNDO`. Aparecen **una sola vez**, arriba de la tabla. Es la diferencia clave con las tarjetas, donde el rótulo se repite en cada celda.
- **Número de paso** en Archivo 700, 32 px, `--green`, `letter-spacing: -.04em`. Es el elemento dominante de cada fila y viene del tratamiento de la exploración visual.
- **Qué pasa** en Archivo 600, 17 px, y debajo **una línea que explica el paso** en cuerpo 15 px `--text`.

  ⚠️ **La línea explicativa se sumó el 2026-08-13.** El motivo: las celdas enunciaban el proceso ("Charla de 15 min", "Análisis y estructura") pero no tranquilizaban a nadie, y esta sección existe para desactivar dos miedos. La línea es explicativa y en primera persona, nunca una promesa de resultado.

  ⚠️ **No puede crecer más.** Si las filas se hacen altas, la columna `De vos` deja de leerse de un vistazo hacia abajo y la sección pierde lo único que la justifica. Si hace falta más texto, se acorta la línea — **no se pasa a tarjetas**.
- **De vos** y **Cuándo** en cuerpo 17 px, `--text`.
- **Separadores:** filete horizontal de 1 px `--rule` entre filas. Sin bordes verticales entre columnas y sin fondo alterno: la tabla se lee por alineación, no por cajas.
- Padding vertical de fila: 20 px.

### Cierre

Fecha de entrega comprometida + 15 días de soporte posterior. Mono, `--text`, debajo de la tabla.

**Prohibido:** garantizar cantidad de consultas.

### Responsive

- **≥ 900 px:** tabla completa, cuatro columnas. Anchos sugeridos: número auto, `Qué pasa` 1fr, `De vos` 1.4fr, `Cuándo` auto.
- **< 900 px:** los pasos apilan en bloques verticales. **Cada paso conserva el rótulo `DE VOS:` visible.** Si eso se pierde en el colapso, la sección deja de cumplir su función.

---

## 07 · Un caso

**Estrategia: prueba de criterio, no prueba de resultados.** No hay métricas reales y no se fabrican.

- El caso se cuenta como `PROBLEMA` → `DECISIÓN`, con etiquetas mono. Eso demuestra el diferencial que se vende —el análisis— que una cifra no demostraría.

  ⚠️ **Una línea por bloque, no un párrafo.** El relato completo del proyecto no va acá: a esta altura de la página el prospecto ya leyó cinco secciones y no lee un caso de estudio. Una frase de problema y una de decisión, elegidas para que se note el criterio. Lo que convence es la decisión concreta y el link vivo, no el volumen de texto. Si hace falta más de una decisión, van como líneas cortas apiladas, nunca numeradas: la numeración ya la usan §04 y §06 y acá compite.

  ⚠️ **La decisión tiene que contestar el problema enunciado, no otro.** Es el error fácil de esta sección: se escribe un problema ("no llevaba a ninguna consulta") y una decisión que habla de otra cosa ("el orden de los contenidos"). Leídas juntas suenan a que se cambió de tema antes de resolver nada, y la sección pierde justo lo que vino a demostrar — que hay criterio detrás. Par vigente:

  > **PROBLEMA** · La web contaba quiénes eran, pero no llevaba a ninguna consulta.
  > **DECISIÓN** · Todo el sitio empuja a una sola acción: pedir la cotización por WhatsApp.

  Los dos bloques van sobre un **riel vertical de 2 px `--green`** a la izquierda. Es lo único que separa esta sección de un bloque de texto suelto.

- **Formato: dos columnas asimétricas** — copy a la izquierda, captura del sitio publicado a la derecha. La captura de §04 es vertical (mockup de celular) y esta es apaisada: es lo que evita que las dos secciones de texto + imagen se lean igual (D-22). Por el mismo motivo, las dos capturas no pueden ser de la misma parte del sitio.

- **Montaje de la captura:** va sobre fondo `--panel` con borde `--rule` y `12 px` de padding, con el dominio arriba en mono sobre un filete `--rule`. No lleva borde `--rule-hard`: un filete negro alrededor de una captura llena de color se lee como un recorte pegado, no como una pieza del sistema. El passe-partout es lo que la integra.

  La captura se recorta **sin la barra de scroll del navegador**. Queda como una franja oscura en el borde derecho y es lo primero que delata una captura hecha a las apuradas.
- **Link vivo** al sitio publicado. El cliente es **Sin Brújula Viajes** (nombre real, verificado). En la página se muestra como **Sin Brújula**, con el dominio debajo como link.
- Testimonios con **nombre + negocio + ciudad**. Sin atribución no se publican.
- El caso del catálogo de camisetas **no va** (D-11).

**Requisito de arquitectura:** esta sección tiene que poder pasar a estrategia de resultados sin refactor cuando existan datos reales.

---

## 08 · Quién soy

- **Foto real de Martin.** Requisito de producción. Ilustración o avatar no reemplazan.
- Nombre completo, Córdoba, 2–3 líneas en primera persona.
- Incluir: *"Diseño y programo cada proyecto yo mismo. Vas a hablar siempre conmigo."*
- **Nada de "somos un equipo".**

### Formato

- **Mobile:** apilado — foto, nombre, texto.
- **≥ 900 px: banda horizontal**, retrato cuadrado a la izquierda (máx. 420 px) y el texto a la derecha a **20 px**, no a 17. Apilado en desktop dejaba media pantalla vacía.

⚠️ **Esto es texto + imagen a dos columnas, igual que §07, y roza D-22.** Lo que las separa: en §07 la imagen es una captura apaisada montada sobre panel que ocupa media sección y el texto va en cuerpo chico; acá es un retrato cuadrado chico, del lado opuesto, y **lo que domina es la frase**. Si en algún rediseño la foto crece hasta pesar como la captura de §07, las dos secciones se funden y hay que cambiar el formato de esta, no el de aquella.

**La foto se recorta a cuadrado por CSS** (`aspect-ratio: 1/1` + `object-fit: cover`), no por el archivo: la foto definitiva tiene que poder reemplazarse pisando el archivo, sin recortar ni tocar código.

---

## 09 · Cómo funciona la inversión

⚠️ **Cambio del 2026-08-13: el precio vuelve a esta sección.** Ver D-03, revisada por segunda vez. La versión v2.0 lo mandaba al FAQ.

**Contenido, en este orden:**

1. **Marco de retorno:** *La pregunta no es cuánto sale una página, es cuántos clientes tiene que ayudarte a cerrar.*
2. **Un solo rectángulo con dos celdas**, las dos cifras a la misma altura y al mismo tamaño:

   | `PISO, PAGO ÚNICO` | `COSTO FIJO MENSUAL` |
   |---|---|
   | **$250.000** | **$0** |
   | 50 % para empezar y 50 % al entregar. El número exacto depende de cuántas secciones necesites; en 15 minutos te lo digo. | Yo no cobro nada por mes. La página queda a tu nombre. |

3. **Pie del dominio**, en mono, **debajo del rectángulo**: *El dominio va incluido el primer año. Después lo renovás vos, a tu nombre: unos USD 20 al año.*
4. CTA primario.

### Formato: un rectángulo, no dos bloques sueltos 🔒

⚠️ **Las dos cifras van dentro del mismo rectángulo, al mismo tamaño y alineadas.** La comparación *$250.000 una vez / $0 por mes* **es** el argumento de la sección, y tiene que entrar de un vistazo, sin leer una palabra. Repartidas en dos cajas distintas —o peor, una en el flujo de texto y la otra en un panel aparte— dejan de leerse como par: quedan "un texto sobre precio" y "una caja destacada" sin relación visual, y el argumento desaparece.

⚠️ **El marco de retorno va chico** (20 px mobile / 24 px desktop, sin peso de titular). Es una línea de encuadre, no el titular de la sección. A escala de H2 compite con las cifras y les roba la jerarquía.

⚠️ **El precio va después del marco de retorno, nunca antes.** El marco es lo que reencuadra la cifra como inversión y no como gasto. Invertido el orden, `$250.000` es lo primero que se lee y la sección se convierte en una lista de precios.

**Cifras:** `$250.000` en `--text-strong`, `$0` en `--green`. Es el único uso del acento como cifra en toda la página, previsto en `DESIGN_SYSTEM.md` §1. Borde del rectángulo y separador entre celdas en `--rule-hard`: comunica estructura, no decora.

### El dato del dominio va afuera del bloque 🔒

⚠️ **La celda del `$0` no lleva la cifra del dominio.** Adentro compite con el cero, y *"después son USD 20"* se lee como que se retira el regalo en la misma frase en que se hace. Va en **mono, debajo del rectángulo**: presente y verificable, pero como letra chica honesta, que juega a favor.

⚠️ **Requiere la cifra exacta y la mención de la renovación** (D-23). Sin las dos cosas la sección no se renderiza: decir "no es mensual" y que al año siguiente aparezca un costo del que no se habló destruye el argumento entero.

**El bloque de costo fijo es intocable.** Resuelve la objeción de 9/10 y no depende de dónde viva el precio.

**Fondo claro.** Va a ser la tentación oscurecer el `$0` para destacarlo, pero el presupuesto de secciones oscuras está agotado con Recorrido y Empezar. El destaque sale de la escala y del verde.

---

## 10 · Preguntas

**Esta sección carga la descalificación, que salió del flujo (D-14).** El precio volvió a §09 el 2026-08-13, así que la pregunta 2 ya no lo sustituye: lo repite corto. Ocho preguntas, acordeón, la primera abierta.

1. **¿Esto me va a traer clientes?** *(abierta por defecto)*
   > No te lo puedo garantizar, y el que te diga que sí te está vendiendo humo. Lo que sí te aseguro es que el que te escriba va a llegar entendiendo qué vendés, y que cuando alguien te busque por tu nombre te va a encontrar.
2. **¿Cuánto sale?** ← *versión corta; el desarrollo vive en §09*
   > Desde $250.000, pago único. En 15 minutos de charla te digo el número para tu caso.

   ⚠️ **Acortada el 2026-08-13.** La versión anterior cargaba la explicación completa porque era el único lugar donde aparecía el precio. Con el número en §09, repetir todo acá es redundante — pero la pregunta **no se elimina**: mucha gente va derecho al FAQ a buscar el precio y no encontrarlo ahí se lee como que se esconde.
3. **¿Me sirve si recién arranco?** ← *sustituye a "para quién no es"*
   > Si todavía no tenés clientes, la página no te los va a traer sola y prefiero decírtelo. Y si vendés productos con envío, lo tuyo es una plataforma tipo Tienda Nube, no lo que hago yo.
4. **¿Y si ya tengo Instagram y me funciona?**
5. **¿Voy a aparecer primero en Google?**
   > No te lo puedo prometer y desconfiá del que te lo prometa: eso depende de tu rubro, de la competencia y del tiempo. Lo que sí hago es dejarte el sitio preparado para que Google y los asistentes de IA puedan leerlo y entenderlo, y dejarte la ficha de Google configurada. Sin eso, no hay chance de nada.
6. **¿Después tengo que pagar todos los meses?**
7. **¿Puedo cambiar los textos yo después?**
8. **¿Cuánto tarda?**

**Requisito técnico:** las respuestas están en el HTML, no se cargan por JS.

⚠️ **Implementado con `<details>`/`<summary>` nativo, sin JS y sin `aria-expanded`.** La spec pedía `aria-expanded`, que es lo correcto para un acordeón hecho con `<button>` + JS. Acá sería un error: `<details>` ya expone el estado abierto/cerrado a los lectores de pantalla por sí mismo, agregarle `aria-expanded` duplica el anuncio, y la versión con JS incumpliría el invariante 19 (contenido completo con JavaScript desactivado). Se cumple el objetivo —operable por teclado, estado anunciado— por la vía que no rompe nada más.

**El signo `+` / `–` es el único indicador de estado** y va en `--green`, a la derecha del texto. No puede depender de `:hover`: el grueso del tráfico es táctil.

**Las 8 respuestas están escritas.** Las de las preguntas 4, 6, 7 y 8 se redactaron el 2026-08-13; las otras cuatro venían de este documento. La 6 y la 7 tienen que seguir coincidiendo con §09: si cambia la modalidad de dominio o de soporte, se actualizan las tres a la vez o la página se contradice sola.

⚠️ **Nota de riesgo asumido — actualizada.** Con el precio y la descalificación dentro del acordeón, **y con el calificador de segmento retirado de la bajada del hero** (invariante 10 revocado el 2026-08-11), la página **no filtra en ningún punto del flujo principal**. El único filtro activo es la pregunta 3 de este acordeón.

Consecuencias operativas:
- Las preguntas 2 y 3 van arriba en el orden, nunca al fondo.
- La pregunta 3 no se elimina ni se suaviza: es lo único que queda (D-14).
- **Señal de alarma:** si empiezan a llegar consultas de gente sin clientes o sin presupuesto, el primer cambio a probar es reponer el calificador en la bajada del hero.

---

## 11 · Empezar

No repetir el hero. Marco de conversación correcto — diagnóstico, no presupuesto:

> Contame qué servicio ofrecés y cómo te llegan hoy los clientes. Te digo si una landing te sirve, y si no te sirve también te lo digo.

- CTA primario, tamaño máximo.
- Número de WhatsApp visible en texto plano debajo.
- Fondo `--ink`. Segundo y último quiebre.

---

## Footer

Nombre, Córdoba, número en texto, link a Instagram, año. Sin mapa del sitio, sin newsletter.

---

## Sistema de CTAs

1. **Un solo destino.** Todos a WhatsApp. Los anclajes internos son links de texto.
2. **Una sola etiqueta:** `Contame tu caso por WhatsApp`.
3. **Un solo color:** verde, en toda la página, incluidas las secciones oscuras.
4. **Microcopy** `Te contesto yo, no un bot.` solo en hero y cierre.

| Punto | Tipo |
|---|---|
| Header | `ghost`, solo desktop |
| Hero | `primary`, ancho completo en mobile |
| Fin de "Qué construyo" | `primary` |
| Fin de "Inversión" | `primary` |
| Empezar | `primary`, tamaño máximo |
| Barra fija mobile | Persistente desde que el hero sale de viewport |

### Implementación

```
https://wa.me/5493524401654?text=<mensaje url-encoded>
```

| Origen | Mensaje |
|---|---|
| Hero | `Hola Martin, vi tu página y quiero contarte mi caso.` |
| Qué construyo | `Hola Martin, vi lo que armás y quiero saber si me sirve.` |
| Inversión | `Hola Martin, vi la página y quería consultarte por la inversión.` |
| Empezar | `Hola Martin, te escribo desde tu página.` |
| Barra fija | `Hola Martin, te escribo desde tu página.` |

- `target="_blank"` + `rel="noopener"`.
- **Número visible y seleccionable** en footer y bajo el CTA final.
- **Verificación obligatoria antes de publicar:** iOS, Android y escritorio.

### Deep-links

`#problema`, `#recorrido`, `#que-construyo`, `#incluye`, `#proceso`, `#caso`, `#quien-soy`, `#inversion`, `#precio` *(alias de `#inversion`)*, `#faq`.

⚠️ **`#precio` cambió de destino el 2026-08-13.** Apuntaba a la pregunta 2 del FAQ; ahora apunta a la sección de inversión, que es donde vive el número (D-03). Se mantiene como ancla propia y no se reemplaza por `#inversion` a secas: es el que se manda por DM a quien pregunta el precio, y ya puede estar circulando.

---

## Tono y lenguaje

- **Voseo rioplatense**, segunda persona.
- Frases cortas. Un párrafo, una idea.
- Decir siempre lo que no se puede prometer.

**Permitido:** página, consultas, clientes, WhatsApp, Instagram, presupuesto, gente interesada, turnos, reservas, aparecer en Google, ficha de Google, publicaciones.

**Prohibido:** UX, UI, funnel, embudo, responsive, conversión (usar "consultas"), lead, stack, SEO, GEO, schema, indexación, posicionamiento, optimización, soluciones digitales, "transformá tu negocio".

⚠️ **"SEO" y "GEO" no aparecen nunca en la página.** Son vocabulario de proveedor, no del prospecto, y activan la comparación con agencias. El mecanismo se explica en castellano: *"que te encuentren cuando te buscan"*, *"preparado para que Google y los asistentes de IA puedan entenderlo"*.

---

## Accesibilidad

- Contraste AA (verificado en `DESIGN_SYSTEM.md` §1).
- Área táctil ≥ 44 px, botones ≥ 52 px.
- Un solo H1, jerarquía correcta.
- Foco visible en todo interactivo.
- `alt` real en capturas.
- Acordeón navegable por teclado.

---

## Criterio de corte

Si alguien fuera del rubro no puede explicar qué vende Martin después de 30 segundos de scroll, la página falló — por linda que sea.
