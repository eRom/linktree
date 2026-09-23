import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Colophon } from "@/components/Colophon";
import { CopyCommand } from "@/components/CopyCommand";
import { Folio } from "@/components/Folio";
import { PluginArticle } from "@/components/PluginArticle";
import { TrackedLink } from "@/components/TrackedLink";
import { MARKETPLACE_ADD_COMMAND, PLUGINS } from "@/data/plugins";
import { fr } from "@/lib/typography";

const MARKETPLACE_REPO_URL = "https://github.com/eRom/erom-marketplace";

export const metadata: Metadata = {
  title: "Marketplace Plugins Claude Code - Romain Ecarnot",
  description:
    "Marketplace officielle des 9 plugins Claude Code développés par Romain Ecarnot : orchestration d'agents, recherche, SEO, vision et outillage.",
  keywords: [
    "Plugins Claude Code",
    "Claude Code Marketplace",
    "Extensions Claude Code",
    "Agents IA",
    "Orchestration agents",
    "Caserne",
    "Romain Ecarnot",
    "Claude CLI",
    "Deep Research",
    "SEO technique",
  ],
  alternates: {
    canonical: "https://www.romain-ecarnot.com/claude-marketplace",
  },
  openGraph: {
    title: "Marketplace Plugins Claude Code - Romain Ecarnot",
    description:
      "Catalogue officiel des 9 plugins et skills Claude Code créés par Romain Ecarnot : orchestration, recherche, SEO et vision.",
    url: "https://www.romain-ecarnot.com/claude-marketplace",
    images: [
      {
        url: "https://www.romain-ecarnot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marketplace Plugins Claude Code - Romain Ecarnot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace Plugins Claude Code - Romain Ecarnot",
    description:
      "Catalogue officiel des 9 plugins et skills Claude Code créés par Romain Ecarnot.",
    images: ["https://www.romain-ecarnot.com/og-image.jpg"],
  },
};

export default function MarketplacePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.romain-ecarnot.com/claude-marketplace#webpage",
    url: "https://www.romain-ecarnot.com/claude-marketplace",
    name: "Marketplace Plugins Claude Code - Romain Ecarnot",
    description:
      "Catalogue des 9 plugins et extensions Claude Code développés par Romain Ecarnot.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.romain-ecarnot.com/#website",
      name: "Romain Ecarnot",
      url: "https://www.romain-ecarnot.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://www.romain-ecarnot.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Marketplace Plugins Claude Code",
          item: "https://www.romain-ecarnot.com/claude-marketplace",
        },
      ],
    },
    publisher: {
      "@type": "Person",
      "@id": "https://www.romain-ecarnot.com/#person",
      name: "Romain Ecarnot",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PLUGINS.length,
      itemListElement: PLUGINS.map((plugin, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: plugin.name,
          headline: plugin.title,
          applicationCategory: "DeveloperApplication",
          applicationSubCategory: "AI Agent Plugin",
          operatingSystem: "Claude Code CLI",
          version: plugin.version,
          description: plugin.description,
          url: plugin.repoUrl,
          downloadUrl: plugin.repoUrl,
          image: plugin.imageUrl
            ? `https://www.romain-ecarnot.com${plugin.imageUrl}`
            : undefined,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          author: {
            "@type": "Person",
            "@id": "https://www.romain-ecarnot.com/#person",
            name: "Romain Ecarnot",
            url: "https://www.romain-ecarnot.com",
          },
        },
      })),
    },
  };

  // Hiérarchie de cahier : un article de tête, deux articles, puis les brèves.
  const [leadPlugin, ...otherPlugins] = PLUGINS;
  const featuredPlugins = otherPlugins.slice(0, 2);
  const briefPlugins = otherPlugins.slice(2);

  return (
    <>
      {/* Schema.org CollectionPage & ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Folio current="plugins" />

      <main id="contenu" className="mx-auto w-full max-w-[88rem] px-4 pb-16 sm:px-8 lg:px-10">
        <header className="grid gap-x-12 gap-y-8 pt-8 pb-10 lg:grid-cols-12 lg:pt-10">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h1 className="type-headline text-[clamp(2.75rem,8.6vw,6rem)]">
              Neuf plugins pour Claude Code
            </h1>
            <p className="type-deck max-w-[40ch] text-[clamp(1.1875rem,1.8vw,1.5rem)]">
              {fr(
                "Une suite d'outils taillés pour l'efficacité, la sobriété logicielle et l'orchestration intelligente, écrits par Romain Ecarnot. Open source ; chacun s'installe en une commande.",
              )}
            </p>
          </div>

          <aside
            aria-labelledby="mode-emploi"
            className="self-end border-[3px] border-ink p-5 sm:p-6 lg:col-span-5"
          >
            <h2 id="mode-emploi" className="type-rubric">
              {fr("Mode d'emploi")}
            </h2>
            <ol className="mt-4 flex flex-col gap-4">
              <li className="grid grid-cols-[2rem_1fr] gap-x-3">
                <span className="tabular font-grotesk text-3xl leading-none font-black [font-variation-settings:'wdth'_72]">
                  1
                </span>
                <div className="flex min-w-0 flex-col gap-2.5">
                  <p className="text-[0.9375rem] leading-snug">
                    Ajouter la marketplace dans Claude Code.
                  </p>
                  <CopyCommand
                    command={MARKETPLACE_ADD_COMMAND}
                    label="ajouter la marketplace"
                    tone="inverse"
                  />
                </div>
              </li>
              <li className="grid grid-cols-[2rem_1fr] gap-x-3">
                <span className="tabular font-grotesk text-3xl leading-none font-black [font-variation-settings:'wdth'_72]">
                  2
                </span>
                <p className="text-[0.9375rem] leading-snug">
                  Installer un plugin avec la commande de son article, ci-dessous.
                </p>
              </li>
            </ol>
            <TrackedLink
              href={MARKETPLACE_REPO_URL}
              external
              className="group type-folio mt-5 inline-flex items-center gap-1.5 border-t border-ink pt-3"
            >
              <span className="pencil">Dépôt de la marketplace</span>
              <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
            </TrackedLink>
          </aside>
        </header>

        <div className="border-t-[3px] border-ink pt-8">
          <PluginArticle plugin={leadPlugin} size="lead" />
        </div>

        <div className="mt-12 grid gap-y-12 border-t-[3px] border-ink pt-8 md:grid-cols-2">
          {featuredPlugins.map((plugin, index) => (
            <div
              key={plugin.name}
              className={index > 0 ? "md:border-l md:border-ink md:pl-10" : "md:pr-10"}
            >
              <PluginArticle plugin={plugin} size="feature" />
            </div>
          ))}
        </div>

        <section aria-labelledby="en-bref" className="mt-14">
          <h2 id="en-bref" className="type-rubric border-t-[3px] border-ink pt-2">
            En bref
          </h2>
          <div className="mt-2 grid gap-y-2 lg:grid-cols-2 lg:[&>*:nth-child(even)]:border-l lg:[&>*:nth-child(even)]:pl-10 lg:[&>*:nth-child(odd)]:pr-10">
            {briefPlugins.map((plugin, index) => (
              <div
                key={plugin.name}
                className={`border-ink py-6 ${index > 0 ? "border-t" : ""} ${index === 1 ? "lg:border-t-0" : ""}`}
              >
                <PluginArticle plugin={plugin} size="brief" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Colophon />
    </>
  );
}
