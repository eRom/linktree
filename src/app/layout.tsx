import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebMcpTools } from "@/components/WebMcpTools";
import "./globals.css";

// Grotesque de titraille (axe de largeur pour les titres condensés) et serif de texte en colonnes.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romain Ecarnot - Passeur du numérique & Architecte du simple",
  description:
    "Romain Ecarnot - Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA.",
  keywords: [
    "Romain Ecarnot",
    "Passeur du numérique",
    "Architecte du simple",
    "accompagnement numérique",
    "intelligence artificielle",
    "IA",
    "vulgarisation tech",
    "sobriété numérique",
    "anti-overkill",
    "reprise professionnelle",
    "AVC",
    "cloud computing",
    "LinkedIn",
    "GitHub",
    "Tipeee",
  ],
  authors: [{ name: "Romain Ecarnot" }],
  creator: "Romain Ecarnot",
  publisher: "Romain Ecarnot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.romain-ecarnot.com",
    title: "Romain Ecarnot - Passeur du numérique & Architecte du simple",
    description:
      "Romain Ecarnot - Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA.",
    siteName: "Romain Ecarnot",
    images: [
      {
        url: "https://www.romain-ecarnot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Passeur du numérique & Architecte du simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ecarnot - Passeur du numérique & Architecte du simple",
    description:
      "Romain Ecarnot - Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA.",
    images: [
      "https://www.romain-ecarnot.com/og-image.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.romain-ecarnot.com",
  },
  verification: {
    google: "IEOR1xYofoX9wNR1O31-PSF9hK__8p-OpojAVz7O4JQ",
  },
};

// Jeton public de l'origin trial WebMCP, lié à https://www.romain-ecarnot.com, expire le 17/11/2026.
// Renouveler sur https://developer.chrome.com/origintrials/ avant cette date.
const WEBMCP_ORIGIN_TRIAL_TOKEN =
  "AlQU3ci8lpdE+mO74UWKurLzEw/z2G7D8trGhcSwb9CylwcwnHrwlincf7pfOnGAd00D2oI9Ua6LjKYrphMn8gsAAABWeyJvcmlnaW4iOiJodHRwczovL3d3dy5yb21haW4tZWNhcm5vdC5jb206NDQzIiwiZmVhdHVyZSI6IldlYk1DUCIsImV4cGlyeSI6MTc5NDg3MzYwMH0=";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <head>
        <meta httpEquiv="origin-trial" content={WEBMCP_ORIGIN_TRIAL_TOKEN} />
        {/* JSON-LD Schema.org (Google ProfilePage + Person Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  "@id": "https://www.romain-ecarnot.com/#profilepage",
                  "url": "https://www.romain-ecarnot.com",
                  "name": "Romain Ecarnot - Passeur du numérique & Architecte du simple",
                  "description":
                    "Romain Ecarnot - Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA.",
                  "dateModified": "2026-09-23T10:00:00+02:00",
                  "inLanguage": "fr-FR",
                  "mainEntity": {
                    "@id": "https://www.romain-ecarnot.com/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.romain-ecarnot.com/#person",
                  "name": "Romain Ecarnot",
                  "alternateName": "eRom",
                  "jobTitle": "Passeur du numérique & Architecte du simple",
                  "disambiguatingDescription":
                    "Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA, résilience post-AVC.",
                  "description":
                    "Passeur du numérique et architecte du simple, Romain Ecarnot accompagne particuliers et professionnels vers une appropriation fluide, sobre et émancipatrice du numérique et de l'intelligence artificielle.",
                  "url": "https://www.romain-ecarnot.com",
                  "image": "https://www.romain-ecarnot.com/avatar.jpg",
                  "sameAs": [
                    "https://www.linkedin.com/in/romainecarnot/",
                    "https://github.com/eRom",
                    "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
                  ],
                  "knowsAbout": [
                    "Accompagnement aux usages du numérique",
                    "Intelligence Artificielle & IA Générative",
                    "Architecture Cloud",
                    "Développement Web",
                    "Sobriété et Simplicité logicielle",
                    "Pédagogie & Vulgarisation Tech",
                    "Résilience et Rebond post-AVC",
                    "Plugins et extensions Claude Code",
                    "Orchestration d'agents IA (Swarm, MCP)",
                    "GEO (Generative Engine Optimization)",
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "FR",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.romain-ecarnot.com/#website",
                  "url": "https://www.romain-ecarnot.com",
                  "name": "Romain Ecarnot",
                  "publisher": {
                    "@id": "https://www.romain-ecarnot.com/#person",
                  },
                  "inLanguage": "fr-FR",
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#facebc" />
        <meta name="msapplication-TileColor" content="#facebc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* AI Discovery & Catalog (RFC 8615 / ai-catalog.io) */}
        <link
          rel="ai-catalog"
          href="/.well-known/ai-catalog.json"
          type="application/ai-catalog+json"
        />

        {/* LLMs & AI Agents Context */}
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Context"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="LLM Context Full"
        />
      </head>
      <body className="antialiased">
        <a
          href="#contenu"
          className="type-folio sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-20 focus:border-2 focus:border-ink focus:bg-paper focus:px-3 focus:py-2"
        >
          Aller au contenu
        </a>
        {children}
        <WebMcpTools />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
