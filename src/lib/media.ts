import fs from 'node:fs';
import path from 'node:path';

/**
 * Una imagen declarada en site.json puede no estar todavía en public/.
 * Si no está, la sección tiene que caer al placeholder: una imagen rota en
 * producción es peor que un hueco marcado. Se resuelve en build, no en el navegador.
 *
 * Exige `alt` real: sin alt no se publica (requisito de accesibilidad de UX_SPEC).
 */
export const imagenPublicable = (src?: string | null, alt?: string | null): string => {
  const ruta = src?.trim() ?? '';
  const texto = alt?.trim() ?? '';

  if (!ruta || !texto || !ruta.startsWith('/')) return '';

  return fs.existsSync(path.join(process.cwd(), 'public', ruta.slice(1))) ? ruta : '';
};
