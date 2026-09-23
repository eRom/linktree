// Faits du parcours, repris du CV public (cv.romain-ecarnot.com/llms.txt). Rien d'inventé ici.

export const CV_URL = "https://cv.romain-ecarnot.com/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/romainecarnot/";
export const GITHUB_URL = "https://github.com/eRom";
export const TIPEEE_URL = "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/";
export const CRUCHOT_URL = "https://cruchot.romain-ecarnot.com/";
export const CONTACT_EMAIL = "contact@romain-ecarnot.com";

export interface Milestone {
  period: string;
  text: string;
  place?: string;
  /** Période de rupture : dessinée en pointillé, discrète et assumée. */
  isBreak?: boolean;
}

export const MILESTONES: Milestone[] = [
  { period: "1998", text: "D.U.T. informatique à l'université de Nantes.", place: "Nantes" },
  {
    period: "2011–2015",
    text: "Architecte logiciel des services Bbox TV chez Bouygues Telecom.",
    place: "Paris",
  },
  {
    period: "2016–2018",
    text: "Architecte solutions AWS chez GFI Informatique : migration du système d'information de Veolia.",
    place: "Paris",
  },
  {
    period: "2019–2020",
    text: "Directeur de programme AWS chez OPEN : formation et animation d'une communauté d'architectes.",
    place: "Paris",
  },
  {
    period: "2021–2025",
    text: "Cofondateur, CTO et DPO de pharmacylounge, réseau social professionnel des pharmaciens. En parallèle, architecte cloud indépendant.",
    place: "Nantes",
  },
  {
    period: "2025",
    text: "Un AVC, puis la reconstruction. Il réapprend l'informatique en observant où se loge la friction.",
    isBreak: true,
  },
  {
    period: "2026",
    text: "Publie Cruchot, client d'IA de bureau 100 % local, et neuf plugins open source pour Claude Code.",
  },
];

export interface Tool {
  name: string;
  summary: string;
  href: string;
  external: boolean;
}

export const TOOLS: Tool[] = [
  {
    name: "Neuf plugins pour Claude Code",
    summary: "Orchestration d'agents, deep research, revue critique multi-modèles, SEO et GEO.",
    href: "/claude-marketplace",
    external: false,
  },
  {
    name: "Cruchot",
    summary: "Client d'IA de bureau multi-modèles, 100 % local et open source.",
    href: CRUCHOT_URL,
    external: true,
  },
  {
    name: "GitHub eRom",
    summary: "Une vingtaine d'outils open source, livrés sans sur-ingénierie.",
    href: GITHUB_URL,
    external: true,
  },
];

export interface Address {
  label: string;
  destination: string;
  href: string;
  external: boolean;
}

export const ADDRESSES: Address[] = [
  { label: "Le CV complet", destination: "cv.romain-ecarnot.com", href: CV_URL, external: true },
  { label: "LinkedIn", destination: "linkedin.com/in/romainecarnot", href: LINKEDIN_URL, external: true },
  { label: "GitHub", destination: "github.com/eRom", href: GITHUB_URL, external: true },
  {
    label: "Plugins Claude Code",
    destination: "Le cahier des neuf plugins",
    href: "/claude-marketplace",
    external: false,
  },
  { label: "Écrire", destination: CONTACT_EMAIL, href: "/contact", external: false },
  {
    label: "Tipeee",
    destination: "Rebondir après l'AVC : ma carrière dans la tech",
    href: TIPEEE_URL,
    external: true,
  },
];
