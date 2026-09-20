import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { PLUGINS } from "@/data/plugins";
import { PluginCard } from "@/components/PluginCard";
import { MarketplaceHeaderCommand } from "@/components/MarketplaceHeaderCommand";

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

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8">
      {/* Schema.org CollectionPage & ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle top ambient illumination */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 py-8 sm:py-12">
        {/* Navigation bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <a
            href="https://github.com/eRom/erom-marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dépôt marketplace</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* Page Header */}
        <header className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Marketplace eRom
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed">
              Une suite d&apos;outils taillés pour l&apos;efficacité, la sobriété logicielle
              et l&apos;orchestration intelligente, développés par Romain Ecarnot.
            </p>
          </div>

          {/* Quick install guide */}
          <div className="w-full mt-2">
            <MarketplaceHeaderCommand />
          </div>
        </header>

        {/* Responsive Grid: 4 columns on desktop (4x3), 3 on laptop, 2 on tablet, 1 on mobile */}
        <main
          role="main"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {PLUGINS.map((plugin) => (
            <PluginCard key={plugin.name} plugin={plugin} />
          ))}
        </main>

        {/* Footer */}
        <footer
          className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono"
          role="contentinfo"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Romain Ecarnot · Nantes, France</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline"
            >
              Accueil
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline"
            >
              Contact
            </Link>
            <a
              href="https://github.com/eRom/erom-marketplace"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors underline-offset-4 hover:underline"
            >
              GitHub Marketplace
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
