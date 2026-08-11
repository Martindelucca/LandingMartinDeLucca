# Landing — Martin De Lucca

Landing de captación de consultas por WhatsApp para negocios de servicios de Córdoba.

**Promesa:** hoy el negocio existe en un solo lugar. La página lo pone en los otros — que te encuentren cuando te buscan, que te tomen en serio cuando te miran, y que te escriban sabiendo qué ofrecés.

La página no promete posiciones en Google, tráfico ni clientes. Ver `docs/DECISIONS.md` → D-17.

---

## Documentación

| Archivo | Qué contiene |
|---|---|
| [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md) | Qué se construye, para quién, objetivo comercial, restricciones, stack |
| [`docs/UX_SPEC.md`](docs/UX_SPEC.md) | Estructura, función y comportamiento de cada sección |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | Tokens visuales. **Parte cerrada / parte provisional** |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | Por qué cada decisión, qué se descartó, qué no se toca |
| [`AGENTS.md`](AGENTS.md) | Reglas para agentes que implementan |

**Todo cerrado.** `DESIGN_SYSTEM.md` está en v1.0 y `UX_SPEC.md` en v2.0: se puede implementar directo.

---

## Estado del proyecto

| Etapa | Estado |
|---|---|
| Estrategia y CRO | ✅ cerrado |
| UX y arquitectura de información | ✅ cerrado |
| Decisiones | ✅ cerrado |
| Dirección visual | ✅ cerrada — *Plano* |
| Sistema de diseño | ✅ v1.0, contrastes verificados |
| Implementación | ⬜ no iniciada |
| Contenido final | ⬜ faltan insumos |

### Insumos bloqueantes

Sin esto hay secciones que no se pueden publicar:

- [ ] **Foto real de Martin** — sin ella, la sección "Quién soy" pierde su función principal
- [ ] **Capturas mobile + link vivo** del proyecto publicado (agencia de viajes)
- [ ] **Costo anual exacto del dominio en USD** — sin la cifra, la sección de inversión no se renderiza
- [ ] **Nombre real del cliente del caso publicado** — "Sin Brújula" es un nombre inventado por la herramienta de diseño
- [ ] **Testimonios con nombre + negocio + ciudad** — sin atribución, no se publican

No se reemplazan con contenido inventado ni con imágenes de stock. Ver `docs/DECISIONS.md` → D-12.

---

## Stack

Astro · CSS con custom properties · JS vanilla mínimo · salida 100 % estática.

Sin framework de utilidades, sin CMS, sin nada con costo mensual — esto último no es preferencia técnica sino coherencia comercial: el servicio se vende como pago único.

---

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ para verificar antes de subir
```

## Deploy

`npm run build` y subir el contenido de `dist/` al hosting existente por FTP o panel. No hay pipeline ni plataforma intermedia.

---

## Editar el contenido

**Todo el texto de la página vive en un solo archivo:** `src/content/site.json`.

Para cambiar un título, el precio, una pregunta del FAQ o un testimonio, se edita ahí y se vuelve a construir. **No hace falta tocar el diseño ni el código.**

Reglas al editar:

- Los campos vacíos se dejan vacíos. Una sección sin datos no se muestra, y eso es intencional.
- Si se saca el monto del dominio, desaparece la sección de precio completa. Es a propósito: decir "no pagás nada por mes" y que después aparezca un costo destruye la credibilidad del argumento.
- Un testimonio sin nombre y negocio no se muestra.

---

## Verificación antes de publicar

- [ ] Links de WhatsApp probados en iOS, Android y escritorio
- [ ] Lighthouse mobile: LCP < 2,5 s, CLS < 0,1
- [ ] Probado en el navegador interno de Instagram, no solo en Chrome
- [ ] Imagen de Open Graph cargada — **es lo primero que ve el prospecto cuando el link se pega en un DM**
- [ ] Analítica funcionando con los eventos de `cta_click`

### Y algo que no es técnico

Publicar esta página sin plan de distribución es el riesgo principal del proyecto. Con 60 visitas mensuales, incluso una conversión excelente da 3 consultas — y la conclusión equivocada sería "la landing no funciona".

Al publicar: link en bio, historia destacada apuntando a la página, y uso sistemático del link en DMs.
