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
    name: "erom-caserne",
    title: "Orchestration d'équipe & MCP Caserne",
    description:
      "Plugin d'orchestration cross-projet pour agents IA. Branche l'agent sur le MCP Caserne, le control plane qui donne à chaque salarié IA sa propre identité sur Linear, Slack et le mail : issues créées, commentées et déléguées sans collision.",
    version: "3.1.0",
    repoUrl: "https://github.com/eRom/erom-caserne",
    imageUrl: null,
    category: "Orchestration",
    installCommand: "claude plugin install erom-caserne@erom-marketplace",
  },
  {
    name: "erom-devil",
    title: "Avocats du diable & Revue critique",
    description:
      "Avocats du diable : reviews critiques de specs (score, verdict, issues), interrogatoire socratique de brainstormings, review de code et porte de merge complète par Gemini, GLM, Deepseek, Opus et Kimi, unitaires ou en swarm.",
    version: "0.9.3",
    repoUrl: "https://github.com/eRom/erom-devil",
    imageUrl: "/marketplace/erom-devil.png",
    category: "Revue critique",
    installCommand: "claude plugin install erom-devil@erom-marketplace",
  },
  {
    name: "erom-research",
    title: "Deep Research multi-moteurs",
    description:
      "Quatre moteurs de recherche approfondie complémentaires : deep-gemini (agy/Antigravity, multi-rounds, matrice de preuves), deep-claude (subagents natifs), deep-grok (asynchrone hors quota) et deep-notebook (NotebookLM, 40-70 sources).",
    version: "0.9.2",
    repoUrl: "https://github.com/eRom/erom-research",
    imageUrl: null,
    category: "Recherche",
    installCommand: "claude plugin install erom-research@erom-marketplace",
  },
  {
    name: "erom-image",
    title: "Atelier image, document & filigrane",
    description:
      "Atelier image et document : nanobanana (Gemini) pour images, icônes et diagrammes ; gpt-image (OpenAI gpt-image-2.5 flare/sunburst) pour texte exact et fonds transparents ; filigrane vectoriel non destructif (AES-256) et QR-Code relu.",
    version: "0.5.0",
    repoUrl: "https://github.com/eRom/erom-image",
    imageUrl: null,
    category: "Génération média",
    installCommand: "claude plugin install erom-image@erom-marketplace",
  },
  {
    name: "erom-marketing",
    title: "Voix de marque & Personas eRom",
    description:
      "Système de voix de marque eRom : magasin de voix local (socle + personas institut, perso, business), rédaction draft-content strictement adossée au persona, brand-review en six passes avec findings sourcés et grille anti-tics IA.",
    version: "0.2.0",
    repoUrl: "https://github.com/eRom/erom-agence-marketing",
    imageUrl: null,
    category: "Contenu & Marque",
    installCommand: "claude plugin install erom-marketing@erom-marketplace",
  },
  {
    name: "erom-gemini",
    title: "Capacités multimodales & Antigravity",
    description:
      "Offloade vers Gemini (Antigravity CLI) les capacités multimodales absentes de Claude Code : transcription audio/vidéo fidèle, breakdown visuel horodaté d'une vidéo (scènes, OCR), Q&A média, conversion OCR document vers markdown.",
    version: "0.3.0",
    repoUrl: "https://github.com/eRom/erom-gemini",
    imageUrl: null,
    category: "Multimodal",
    installCommand: "claude plugin install erom-gemini@erom-marketplace",
  },
  {
    name: "erom-insight",
    title: "Analyse & Audit de dépôts tiers",
    description:
      "Explore un repo GitHub tiers et en extrait ce qui vaut d'être repris : harness pour benchmarker les agents CLI concurrents, tool-claude pour confronter promesses et code réel, et skill-claude pour scanner les failles de sécurité avant installation.",
    version: "0.6.0",
    repoUrl: "https://github.com/eRom/erom-agence-insight",
    imageUrl: null,
    category: "Audit & Veille",
    installCommand: "claude plugin install erom-insight@erom-marketplace",
  },
  {
    name: "erom-dev-plugin",
    title: "Cycle de vie des plugins Claude Code",
    description:
      "Le cycle de vie complet d'un plugin Claude Code eRom, du dépôt vide à la marketplace : scaffold de la structure, illustrate (carte de présentation au fusain 1536x1024 via GPT Image), release (bump SemVer, assertions CI et double commit ordonné).",
    version: "0.1.5",
    repoUrl: "https://github.com/eRom/erom-agence-dev-plugin",
    imageUrl: "/marketplace/erom-dev-plugin.png",
    category: "Outillage",
    installCommand: "claude plugin install erom-dev-plugin@erom-marketplace",
  },
  {
    name: "erom-seo",
    title: "Cycle SEO/GEO complet sans abonnement",
    description:
      "Cycle SEO/GEO complet d'un site sans abonnement tiers en six skills : strategy (contrat du site), audit daté et sourcé, build correctif commit par commit, checklist des 15 cases prouvées, console Search Console / Bing, et rapport client imprimable.",
    version: "1.0.0",
    repoUrl: "https://github.com/eRom/erom-agence-seo",
    imageUrl: "/marketplace/erom-seo.png",
    category: "SEO & GEO",
    installCommand: "claude plugin install erom-seo@erom-marketplace",
  },
  {
    name: "erom-vision",
    title: "Gate design & Juge vision UI",
    description:
      "Gate design avant rendu UI : un juge vision externe (Gemini via Antigravity CLI) évalue des captures étiquetées par état (repos, survol, focus, clic) contre la grille eRom et rend un verdict binaire PASS/FAIL sur 10 critères avec preuves.",
    version: "0.1.1",
    repoUrl: "https://github.com/eRom/erom-agence-vision",
    imageUrl: "/marketplace/erom-vision.png",
    category: "Design UI",
    installCommand: "claude plugin install erom-vision@erom-marketplace",
  },
  {
    name: "erom-dev-ios-apps",
    title: "Développement iOS natif en SwiftUI",
    description:
      "Construire, déboguer et profiler des apps iOS natives en SwiftUI avec Claude Code : App Intents, Liquid Glass, patterns SwiftUI, pilotage du Simulator via XcodeBuildMCP embarqué, audits de performance ETTrace et traque des fuites mémoire.",
    version: "0.1.0",
    repoUrl: "https://github.com/eRom/erom-agence-dev-ios-apps",
    imageUrl: "/marketplace/erom-dev-ios-apps.png",
    category: "Développement iOS",
    installCommand: "claude plugin install erom-dev-ios-apps@erom-marketplace",
  },
  {
    name: "erom-dev-macos-apps",
    title: "Développement macOS natif en SwiftUI",
    description:
      "Construire, lancer, tester et livrer des apps macOS natives en SwiftUI avec Claude Code : patterns SwiftUI, fenêtrage, Liquid Glass, script build_and_run.sh unique, triage de tests, signature et packaging notarisé pour la distribution.",
    version: "0.1.0",
    repoUrl: "https://github.com/eRom/erom-agence-dev-macos-apps",
    imageUrl: "/marketplace/erom-dev-macos-apps.png",
    category: "Développement macOS",
    installCommand: "claude plugin install erom-dev-macos-apps@erom-marketplace",
  },
];
