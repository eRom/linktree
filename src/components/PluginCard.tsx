"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  ArrowUpRight,
  Bot,
  Scale,
  Search,
  Sparkles,
  PenTool,
  Radio,
  ShieldCheck,
  Wrench,
  Globe,
  Eye,
  Smartphone,
  Laptop,
  FolderGit2,
} from "lucide-react";
import type { MarketplacePlugin } from "@/data/plugins";

interface PluginCardProps {
  plugin: MarketplacePlugin;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Orchestration":
      return <Bot className="w-4 h-4 text-emerald-400" />;
    case "Revue critique":
      return <Scale className="w-4 h-4 text-amber-400" />;
    case "Recherche":
      return <Search className="w-4 h-4 text-sky-400" />;
    case "Génération média":
      return <Sparkles className="w-4 h-4 text-pink-400" />;
    case "Contenu & Marque":
      return <PenTool className="w-4 h-4 text-violet-400" />;
    case "Multimodal":
      return <Radio className="w-4 h-4 text-indigo-400" />;
    case "Audit & Veille":
      return <ShieldCheck className="w-4 h-4 text-blue-400" />;
    case "Outillage":
      return <Wrench className="w-4 h-4 text-orange-400" />;
    case "SEO & GEO":
      return <Globe className="w-4 h-4 text-emerald-400" />;
    case "Design UI":
      return <Eye className="w-4 h-4 text-cyan-400" />;
    case "Développement iOS":
      return <Smartphone className="w-4 h-4 text-blue-400" />;
    case "Développement macOS":
      return <Laptop className="w-4 h-4 text-purple-400" />;
    default:
      return <FolderGit2 className="w-4 h-4 text-zinc-400" />;
  }
}

export function PluginCard({ plugin }: PluginCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plugin.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700/90 transition-all duration-200 overflow-hidden shadow-lg shadow-black/20 focus-within:ring-2 focus-within:ring-zinc-400">
      {/* Top Banner / Image (Ratio 3:2) */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-950 border-b border-zinc-800/60">
        {plugin.imageUrl ? (
          <Image
            src={plugin.imageUrl}
            alt={`Illustration officielle du plugin ${plugin.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-center">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-15 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner">
                {getCategoryIcon(plugin.category)}
              </div>
              <span className="font-mono text-sm font-semibold text-zinc-200 tracking-tight">
                {plugin.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-800">
                Planche en préparation
              </span>
            </div>
          </div>
        )}

        {/* Floating Version Tag */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-xs border border-zinc-700/60 text-[10px] font-mono text-zinc-300 shadow-md">
            v{plugin.version}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          {/* Category & Name */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
            {getCategoryIcon(plugin.category)}
            <span>{plugin.category}</span>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
              {plugin.name}
            </h2>
            <p className="text-xs font-medium text-zinc-300 mt-0.5">
              {plugin.title}
            </p>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
            {plugin.description}
          </p>
        </div>

        {/* Card Footer: Install Command + GitHub link */}
        <div className="flex flex-col gap-2.5 pt-3 border-t border-zinc-800/80">
          {/* Copy install command */}
          <div className="flex items-center justify-between gap-2 p-1.5 pl-2.5 rounded-lg bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors">
            <code className="text-[11px] font-mono text-zinc-300 truncate select-all">
              {plugin.installCommand}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center p-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              title={copied ? "Copié !" : "Copier la commande"}
              aria-label={`Copier la commande pour ${plugin.name}`}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* GitHub link */}
          <div className="flex items-center justify-between text-xs pt-0.5">
            <a
              href={plugin.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm"
            >
              <span>Code source &amp; documentation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
