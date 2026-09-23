"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type CopyStatus = "idle" | "copied" | "failed";

const STAMP_DURATION_MS = 2400;

interface CopyButtonProps {
  text: string;
  /** Libellé accessible complet, par exemple « Copier la commande : ajouter la marketplace ». */
  label: string;
  className?: string;
  children: ReactNode;
}

// Bouton de copie : la copie laisse un tampon « Copié » sur le bouton, comme sur un bon de commande.
export function CopyButton({ text, label, className, children }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), STAMP_DURATION_MS);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={label}
        className={`relative cursor-pointer ${className ?? ""}`}
      >
        {children}
        {status !== "idle" && (
          <span aria-hidden="true" className="stamp pointer-events-none absolute top-1/2 left-1/2">
            {status === "copied" ? "Copié" : "Copie impossible"}
          </span>
        )}
      </button>
      {/* Annonce hors du bouton : un lecteur d'écran ignore une zone live enfouie sous un aria-label. */}
      <span className="sr-only" aria-live="polite">
        {status === "copied" && "Copié dans le presse-papiers."}
        {status === "failed" && "Copie impossible : sélectionnez le texte pour le copier à la main."}
      </span>
    </>
  );
}
