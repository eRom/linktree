import { CONTACT_EMAIL } from "@/data/profile";
import { fr } from "@/lib/typography";

// Pied de page façon ours de journal : qui, où, et la version lisible par les machines.
export function Colophon() {
  return (
    <footer className="relative mx-auto w-full max-w-[88rem] px-4 pb-10 sm:px-8 lg:px-10">
      <div className="rule-heavy" />
      <div className="type-caption flex flex-col gap-1.5 pt-3 sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          Romain Ecarnot · Nantes, France ·{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="pencil text-ink">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          {fr("Version pour les IA : ")}
          <a href="/llms.txt" className="pencil text-ink">
            llms.txt
          </a>{" "}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
