const EDITION_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Paris",
});

const SHORT_EDITION_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Europe/Paris",
});

const ISO_FORMATTER = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Europe/Paris",
});

/** Date d'édition façon folio de journal : « Mercredi 23 septembre 2026 ». */
export function formatEdition(date: Date): string {
  const label = EDITION_FORMATTER.format(date);
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** Date d'édition courte pour les écrans étroits : « 23 sept. 2026 ». */
export function formatShortEdition(date: Date): string {
  return SHORT_EDITION_FORMATTER.format(date);
}

/** Date ISO (AAAA-MM-JJ) à l'heure de Paris, pour l'attribut dateTime. */
export function isoDate(date: Date): string {
  return ISO_FORMATTER.format(date);
}

export interface Edition {
  label: string;
  shortLabel: string;
  iso: string;
}

export function editionOf(date: Date): Edition {
  return { label: formatEdition(date), shortLabel: formatShortEdition(date), iso: isoDate(date) };
}
