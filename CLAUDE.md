# CLAUDE.md

**Las reglas de trabajo de este repositorio están en `AGENTS.md`. Leerlo completo antes de tocar nada.** Este archivo solo agrega lo específico de Claude Code.

---

## Contexto en una línea

Landing estática (Astro) cuyo único trabajo es que un dueño de negocio de servicios de Córdoba llegue a WhatsApp habiendo entendido qué se le vende. Es simultáneamente el argumento y la demostración del servicio: si la página parece una plantilla, la propuesta comercial queda desmentida por su propia evidencia.

## Orden de lectura obligatorio

1. `AGENTS.md`
2. `docs/DECISIONS.md` → sección **Invariantes**
3. `docs/UX_SPEC.md`
4. `docs/DESIGN_SYSTEM.md` → **mirar la versión en la primera línea**

Si `DESIGN_SYSTEM.md` está en **v0.1**, la dirección visual no está elegida: implementar estructura y contenido con los tokens 🔒 únicamente. No inventar paleta ni tipografías.

---

## Comportamiento esperado

- **Preguntar antes de romper un invariante.** Si detectás que un invariante de `DECISIONS.md` produce un resultado peor, decilo, argumentá, y esperá respuesta. No lo cambies solo.
- **Señalar contradicciones en la spec en vez de resolverlas en silencio.** La spec la escribió otro agente; puede tener huecos.
- **Cero complacencia.** Si una instrucción del usuario contradice una decisión documentada, marcá la contradicción antes de ejecutar.
- **No inventar contenido faltante.** Faltan foto, capturas, testimonios con atribución y el costo anual del dominio. Placeholder explícito y reporte, nunca relleno.
- **Cambios chicos y verificables.** Un componente por vez, con la sección de `UX_SPEC.md` a la vista.

## Comandos

```bash
npm install
npm run dev        # desarrollo
npm run build      # genera dist/ estático
npm run preview    # verificación previa a subir
```

Deploy: subir el contenido de `dist/` al hosting existente del cliente. Sin CI, sin plataforma con costo mensual (D-09).

## Antes de dar cualquier tarea por terminada

Recorrer el checklist de "Definición de terminado" de `AGENTS.md` y reportar en el formato `HECHO / PENDIENTE / DESVÍOS / RIESGOS`.

## Verificación que no se puede saltear

Los links de WhatsApp probados en dispositivo real (iOS, Android, escritorio). Un prefijo mal armado lleva la conversión a cero **sin generar ningún error visible**. Es el modo de falla más caro del proyecto y el más fácil de pasar por alto.
