export interface MarketplacePlugin {
  name: string;
  title: string;
  description: string;
  version: string;
  repoUrl: string;
  imageUrl: string | null;
  category: string;
  installCommand: string;
}

export const MARKETPLACE_ADD_COMMAND = "/plugin marketplace add eRom/erom-marketplace";

export const PLUGINS: MarketplacePlugin[] = [
  {
    name: "Caserne",
    title: "Orchestration d'équipe & MCP Caserne",
    description:
      "Plugin d'orchestration cross-projet pour agents IA. Branche l'agent sur le MCP Caserne, le control plane qui donne à chaque salarié IA sa propre identité sur Linear, Slack et le mail : issues créées, commentées et déléguées sans collision.",
    version: "3.1.0",
    repoUrl: "https://github.com/eRom/erom-caserne",
    imageUrl: "/marketplace/erom-caserne.webp",
    category: "Orchestration",
    installCommand: "claude plugin install erom-caserne@erom-marketplace",
  },
  {
    name: "Devil",
    title: "Avocats du diable & Revue critique",
    description:
      "Avocats du diable : reviews critiques de specs (score, verdict, issues), interrogatoire socratique de brainstormings, review de code et porte de merge complète par Gemini, GLM, Deepseek, Opus et Kimi, unitaires ou en swarm.",
    version: "0.9.3",
    repoUrl: "https://github.com/eRom/erom-devil",
    imageUrl: "/marketplace/erom-devil.webp",
    category: "Revue critique",
    installCommand: "claude plugin install erom-devil@erom-marketplace",
  },
  {
    name: "Research",
    title: "Deep Research multi-moteurs",
    description:
      "Quatre moteurs de recherche approfondie complémentaires : deep-gemini (agy/Antigravity, multi-rounds, matrice de preuves), deep-claude (subagents natifs), deep-grok (asynchrone hors quota) et deep-notebook (NotebookLM, 40-70 sources).",
    version: "0.9.2",
    repoUrl: "https://github.com/eRom/erom-research",
    imageUrl: "/marketplace/erom-research.webp",
    category: "Recherche",
    installCommand: "claude plugin install erom-research@erom-marketplace",
  },
  {
    name: "Vision",
    title: "Gate design & Juge vision UI",
    description:
      "Gate design avant rendu UI : un juge vision externe (Gemini via Antigravity CLI) évalue des captures étiquetées par état (repos, survol, focus, clic) contre la grille eRom et rend un verdict binaire PASS/FAIL sur 10 critères avec preuves.",
    version: "0.1.1",
    repoUrl: "https://github.com/eRom/erom-agence-vision",
    imageUrl: "/marketplace/erom-vision.webp",
    category: "Design UI",
    installCommand: "claude plugin install erom-vision@erom-marketplace",
  },
  {
    name: "Image",
    title: "Atelier image, document & filigrane",
    description:
      "Atelier image et document : nanobanana (Gemini) pour images, icônes et diagrammes ; gpt-image (OpenAI gpt-image-2.5 flare/sunburst) pour texte exact et fonds transparents ; filigrane vectoriel non destructif (AES-256) et QR-Code relu.",
    version: "0.5.0",
    repoUrl: "https://github.com/eRom/erom-image",
    imageUrl: "/marketplace/erom-image.webp",
    category: "Génération média",
    installCommand: "claude plugin install erom-image@erom-marketplace",
  },
  {
    name: "Gemini",
    title: "Capacités multimodales & Antigravity",
    description:
      "Offloade vers Gemini (Antigravity CLI) les capacités multimodales absentes de Claude Code : transcription audio/vidéo fidèle, breakdown visuel horodaté d'une vidéo (scènes, OCR), Q&A média, conversion OCR document vers markdown.",
    version: "0.3.0",
    repoUrl: "https://github.com/eRom/erom-gemini",
    imageUrl: "/marketplace/erom-gemini.webp",
    category: "Multimodal",
    installCommand: "claude plugin install erom-gemini@erom-marketplace",
  },
  {
    name: "Insight",
    title: "Analyse & Audit de dépôts tiers",
    description:
      "Explore un repo GitHub tiers et en extrait ce qui vaut d'être repris : harness pour benchmarker les agents CLI concurrents, tool-claude pour confronter promesses et code réel, et skill-claude pour scanner les failles de sécurité avant installation.",
    version: "0.6.0",
    repoUrl: "https://github.com/eRom/erom-agence-insight",
    imageUrl: "/marketplace/erom-insight.webp",
    category: "Audit & Veille",
    installCommand: "claude plugin install erom-insight@erom-marketplace",
  },
  {
    name: "Dev-plugin",
    title: "Cycle de vie des plugins Claude Code",
    description:
      "Le cycle de vie complet d'un plugin Claude Code eRom, du dépôt vide à la marketplace : scaffold de la structure, illustrate (carte de présentation au fusain 1536x1024 via GPT Image), release (bump SemVer, assertions CI et double commit ordonné).",
    version: "0.1.5",
    repoUrl: "https://github.com/eRom/erom-agence-dev-plugin",
    imageUrl: "/marketplace/erom-dev-plugin.webp",
    category: "Outillage",
    installCommand: "claude plugin install erom-dev-plugin@erom-marketplace",
  },
  {
    name: "SEO",
    title: "Cycle SEO/GEO complet sans abonnement",
    description:
      "Cycle SEO/GEO complet d'un site sans abonnement tiers en six skills : strategy (contrat du site), audit daté et sourcé, build correctif commit par commit, checklist des 15 cases prouvées, console Search Console / Bing, et rapport client imprimable.",
    version: "1.0.0",
    repoUrl: "https://github.com/eRom/erom-agence-seo",
    imageUrl: "/marketplace/erom-seo.webp",
    category: "SEO & GEO",
    installCommand: "claude plugin install erom-seo@erom-marketplace",
  },
];
