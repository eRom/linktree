import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CopyCommand } from "@/components/CopyCommand";
import { TrackedLink } from "@/components/TrackedLink";
import type { MarketplacePlugin } from "@/data/plugins";
import { fr } from "@/lib/typography";

type ArticleSize = "lead" | "feature" | "brief";

interface PluginArticleProps {
  plugin: MarketplacePlugin;
  size: ArticleSize;
}

const TITLE_SIZE: Record<ArticleSize, string> = {
  lead: "text-[clamp(2.5rem,5vw,4.5rem)]",
  feature: "text-[clamp(2rem,3.4vw,3rem)]",
  brief: "text-[clamp(1.5rem,1.9vw,1.875rem)]",
};

const IMAGE_SIZES: Record<ArticleSize, string> = {
  lead: "(min-width: 1024px) 56vw, 100vw",
  feature: "(min-width: 768px) 44vw, 100vw",
  brief: "(min-width: 640px) 136px, 88px",
};

function PluginPlate({ plugin, size }: PluginArticleProps) {
  if (!plugin.imageUrl) return null;
  return (
    <Image
      src={plugin.imageUrl}
      alt={fr(`Planche au fusain du plugin ${plugin.name} : ${plugin.title}.`)}
      width={800}
      height={534}
      sizes={IMAGE_SIZES[size]}
      priority={size === "lead"}
      className="printed-plate h-auto w-full"
    />
  );
}

function PluginHeader({ plugin, size, headingId }: PluginArticleProps & { headingId: string }) {
  const nameplate = (
    <div className="flex items-baseline justify-between gap-4">
      <h2 id={headingId} className={`type-headline ${TITLE_SIZE[size]}`}>
        {plugin.name}
      </h2>
      <span className="type-folio tabular shrink-0 normal-case">v{plugin.version}</span>
    </div>
  );

  // La brève n'a pas de chapeau : son texte court en tient lieu.
  if (size === "brief") return <header>{nameplate}</header>;

  return (
    <header className="flex flex-col gap-3">
      {nameplate}
      <p
        className={`type-deck ${
          size === "lead" ? "text-[clamp(1.1875rem,1.7vw,1.4375rem)]" : "text-[1.125rem]"
        }`}
      >
        {fr(plugin.title)}
      </p>
    </header>
  );
}

function PluginFooter({ plugin }: { plugin: MarketplacePlugin }) {
  return (
    <div className="flex flex-col gap-3 pt-1">
      <CopyCommand command={plugin.installCommand} label={`installer ${plugin.name}`} />
      <p className="type-caption flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span>{plugin.category}</span>
        <TrackedLink
          href={plugin.repoUrl}
          external
          className="group inline-flex items-baseline gap-1.5 text-ink"
        >
          <span className="pencil">Code source et documentation</span>
          <ArrowUpRight aria-hidden="true" className="size-3.5 self-center" strokeWidth={2} />
        </TrackedLink>
      </p>
    </div>
  );
}

// Un plugin traité comme un article du cahier : tête (planche en grand), article, ou brève.
export function PluginArticle({ plugin, size }: PluginArticleProps) {
  const headingId = `plugin-${plugin.name.toLowerCase()}`;

  if (size === "brief") {
    // Brève : vignette en marge, quelques mots humains, la commande.
    return (
      <article
        aria-labelledby={headingId}
        className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-3 sm:grid-cols-[8.5rem_1fr] sm:gap-x-6"
      >
        <figure className="sm:row-span-3">
          <PluginPlate plugin={plugin} size={size} />
        </figure>
        <div className="self-center sm:self-start">
          <PluginHeader plugin={plugin} size={size} headingId={headingId} />
        </div>
        <p className="type-body col-span-2 leading-relaxed text-pretty sm:col-span-1 sm:col-start-2">
          {fr(plugin.blurb ?? plugin.title)}
        </p>
        <div className="col-span-2 sm:col-span-1 sm:col-start-2">
          <PluginFooter plugin={plugin} />
        </div>
      </article>
    );
  }

  if (size === "lead") {
    return (
      <article aria-labelledby={headingId} className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <figure className="lg:col-span-7">
          <PluginPlate plugin={plugin} size={size} />
        </figure>
        <div className="flex flex-col gap-4 lg:col-span-5">
          <PluginHeader plugin={plugin} size={size} headingId={headingId} />
          <p className="type-body text-pretty">{fr(plugin.description)}</p>
          <PluginFooter plugin={plugin} />
        </div>
      </article>
    );
  }

  return (
    <article aria-labelledby={headingId} className="flex h-full flex-col gap-5">
      <figure>
        <PluginPlate plugin={plugin} size={size} />
      </figure>
      <div className="flex flex-1 flex-col gap-4">
        <PluginHeader plugin={plugin} size={size} headingId={headingId} />
        <p className="type-body text-pretty">{fr(plugin.description)}</p>
        {/* La commande se cale en pied d'article pour aligner la rangée. */}
        <div className="mt-auto">
          <PluginFooter plugin={plugin} />
        </div>
      </div>
    </article>
  );
}
