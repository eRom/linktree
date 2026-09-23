"use client";

import { useSyncExternalStore } from "react";
import { editionOf, isoDate, type Edition } from "@/lib/edition";

const subscribe = () => () => {};

// Mémoïsé par jour : useSyncExternalStore exige un instantané stable entre deux lectures.
let cachedEdition: Edition | null = null;

function readTodayEdition(): Edition {
  const today = new Date();
  if (cachedEdition?.iso !== isoDate(today)) {
    cachedEdition = editionOf(today);
  }
  return cachedEdition;
}

// L'édition du jour : date du build au rendu serveur, date du jour dès l'hydratation.
export function EditionDate({ fallback }: { fallback: Edition }) {
  const edition = useSyncExternalStore(subscribe, readTodayEdition, () => fallback);
  return (
    <time dateTime={edition.iso}>
      <span className="sm:hidden">{edition.shortLabel}</span>
      <span className="hidden sm:inline">{edition.label}</span>
    </time>
  );
}
