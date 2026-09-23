"use client";

import Link from "next/link";
import { useSyncExternalStore, type MouseEvent, type ReactNode } from "react";

const STORAGE_KEY = "romain-ecarnot:read-links";
const listeners = new Set<() => void>();

function readSnapshot(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function markAsRead(href: string) {
  try {
    const hrefs: string[] = JSON.parse(readSnapshot());
    if (!hrefs.includes(href)) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...hrefs, href]));
    }
  } catch {
    // Stockage indisponible (navigation privée) : la coche reste simplement absente.
  }
  listeners.forEach((listener) => listener());
}

function isRead(snapshot: string, href: string): boolean {
  try {
    return (JSON.parse(snapshot) as string[]).includes(href);
  } catch {
    return false;
  }
}

// Coche au crayon, tracée une fois quand le lien a été consulté.
function ReadTick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 16" aria-hidden="true" className={className}>
      <path
        className="tick-draw"
        pathLength={1}
        d="M2.2 8.9c1.5 1.2 2.7 2.6 3.9 4.5C8.5 8.6 12.2 4.5 17.8 1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface TrackedLinkProps {
  href: string;
  external?: boolean;
  className?: string;
  tickClassName?: string;
  children: ReactNode;
}

// Lien qui garde la marque du crayon : une fois consulté, il porte sa coche (mémorisée en local).
export function TrackedLink({
  href,
  external = false,
  className,
  tickClassName = "ml-2 inline-block h-[0.8em] w-[1em] align-baseline",
  children,
}: TrackedLinkProps) {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => "[]");
  const read = isRead(snapshot, href);

  const content = (
    <>
      {children}
      {read && (
        <>
          <ReadTick className={tickClassName} />
          <span className="sr-only">, déjà consulté</span>
        </>
      )}
      {external && <span className="sr-only"> (nouvel onglet)</span>}
    </>
  );

  // Clic principal ou clic molette (ouverture dans un nouvel onglet) : les deux valent lecture.
  const handleAuxClick = (event: MouseEvent) => {
    if (event.button === 1) markAsRead(href);
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() => markAsRead(href)}
        onAuxClick={handleAuxClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={() => markAsRead(href)}
      onAuxClick={handleAuxClick}
    >
      {content}
    </Link>
  );
}
