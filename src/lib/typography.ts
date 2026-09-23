const NARROW_NBSP = " ";
const NBSP = " ";
const APOSTROPHE = "’";

/**
 * Applique la typographie française : apostrophe courbe, fine insécable avant ; ! ? et %,
 * insécable avant : et à l'intérieur des guillemets.
 */
export function fr(text: string): string {
  return text
    .replace(/'/g, APOSTROPHE)
    .replace(/ ([;!?])/g, `${NARROW_NBSP}$1`)
    .replace(/ :/g, `${NBSP}:`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`)
    .replace(/(\d) %/g, `$1${NARROW_NBSP}%`);
}
