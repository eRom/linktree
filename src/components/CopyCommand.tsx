import { Copy } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";

interface CopyCommandProps {
  command: string;
  /** Nom lisible de la commande, pour le libellé du bouton. */
  label: string;
  /** « inverse » : noir inversé, réservé à l'action principale de la page (loi de palette). */
  tone?: "default" | "inverse";
}

// Commande Claude Code copiable, sur une ligne encadrée d'un filet.
export function CopyCommand({ command, label, tone = "default" }: CopyCommandProps) {
  const isInverse = tone === "inverse";

  return (
    <div
      className={`flex min-w-0 items-stretch border ${
        isInverse ? "border-ink bg-ink text-paper" : "border-ink"
      }`}
    >
      <code className="block min-w-0 flex-1 px-3 py-2.5 text-[0.8125rem] leading-snug [overflow-wrap:anywhere] select-all selection:bg-paper-deep selection:text-ink">
        {command}
      </code>
      <CopyButton
        text={command}
        label={`Copier la commande : ${label}`}
        className={`type-folio flex shrink-0 items-center gap-1.5 border-l px-3 transition-colors ${
          isInverse
            ? "border-paper/50 hover:bg-paper hover:text-ink focus-visible:outline-paper"
            : "border-ink hover:bg-paper-deep"
        }`}
      >
        <Copy aria-hidden="true" className="size-3.5" strokeWidth={2} />
        Copier
      </CopyButton>
    </div>
  );
}
