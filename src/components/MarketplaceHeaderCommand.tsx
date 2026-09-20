"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { MARKETPLACE_ADD_COMMAND } from "@/data/plugins";

export function MarketplaceHeaderCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(MARKETPLACE_ADD_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xs shadow-lg shadow-black/30">
      <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
        <span>1. Ajouter la marketplace dans Claude Code :</span>
      </div>
      <div className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800">
        <code className="text-xs sm:text-sm font-mono text-zinc-200 truncate select-all">
          {MARKETPLACE_ADD_COMMAND}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 text-xs font-medium transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          title="Copier la commande"
          aria-label="Copier la commande d'ajout de la marketplace"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono text-[11px]">Copié</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-mono text-[11px]">Copier</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
