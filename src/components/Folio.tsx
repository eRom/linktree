import Link from "next/link";
import { EditionDate } from "@/components/EditionDate";
import { editionOf } from "@/lib/edition";

export type Section = "portrait" | "plugins" | "contact";

const SECTIONS: { id: Section; label: string; href: string }[] = [
  { id: "portrait", label: "Portrait", href: "/" },
  { id: "plugins", label: "Plugins", href: "/claude-marketplace" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// Folio de journal : date de l'édition à gauche, sommaire des trois pages à droite, double filet dessous.
export function Folio({ current }: { current: Section }) {
  return (
    <header className="relative mx-auto w-full max-w-[88rem] px-4 pt-3 sm:px-8 lg:px-10">
      <div className="type-folio flex items-baseline justify-between gap-4 pb-2">
        <p className="flex min-w-0 items-baseline gap-2">
          <EditionDate fallback={editionOf(new Date())} />
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <Link href="/" className="pencil hidden sm:inline">
            romain-ecarnot.com
          </Link>
        </p>
        <nav aria-label="Sommaire">
          <ul className="flex items-baseline gap-4 sm:gap-6">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <Link
                  href={section.href}
                  aria-current={section.id === current ? "page" : undefined}
                  className="pencil aria-[current=page]:font-[850]"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="rule-double" />
    </header>
  );
}
