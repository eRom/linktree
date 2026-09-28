// Showreel « Sans détour ». Chapitres relevés image par image sur les deux fichiers
// (planches à une image par seconde) : rien n'est repris d'une description tierce.

export const SHOWREEL_PAGE_URL = "https://www.romain-ecarnot.com/showreel";
export const SHOWREEL_TITLE = "Romain Ecarnot, sans détour";
export const SHOWREEL_DURATION_SECONDS = 33;
export const SHOWREEL_UPLOAD_DATE = "2026-09-28T14:27:18+00:00";

export interface ShowreelVariant {
  label: string;
  url: string;
  poster: string;
  width: number;
  height: number;
  sizeMb: number;
}

// Même montage, deux cadrages : le paysage à partir de 64rem, le portrait en dessous.
export const SHOWREEL_LANDSCAPE: ShowreelVariant = {
  label: "Paysage 16:9",
  url: "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
  poster: "/showreel-poster-16-9.jpg",
  width: 1920,
  height: 1080,
  sizeMb: 27.6,
};

export const SHOWREEL_PORTRAIT: ShowreelVariant = {
  label: "Portrait 9:16",
  url: "https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4",
  poster: "/showreel-poster-9-16.jpg",
  width: 1080,
  height: 1920,
  sizeMb: 21.8,
};

export interface Chapter {
  start: number;
  end: number;
  title: string;
  summary: string;
}

export const CHAPTERS: Chapter[] = [
  {
    start: 0,
    end: 5,
    title: "romain --reboot",
    summary: "Une invite de commande, un curseur, une seule instruction : redémarrer.",
  },
  {
    start: 5,
    end: 12,
    title: "Le parcours",
    summary: "Flash, la 3D, Bbox TV, AWS, OPEN, CTO et DPO, le cloud : de 2000 à 2023, en un souffle.",
  },
  {
    start: 12,
    end: 15,
    title: "2025, un AVC",
    summary: "Tout s'arrête. Puis un mot : reboot.",
  },
  {
    start: 15,
    end: 18,
    title: "Réapprendre, observer, construire",
    summary: "Réapprendre l'informatique pas à pas, voir où se loge la friction, bâtir l'outil qui manque.",
  },
  {
    start: 18,
    end: 22,
    title: "L'atelier",
    summary: "Une équipe d'agents IA orchestrée : Claude, Gemini, Mistral, DeepSeek, Kimi, GLM.",
  },
  {
    start: 22,
    end: 24,
    title: "Cruchot et neuf plugins",
    summary: "Un client d'IA de bureau 100 % local, et neuf plugins open source pour Claude Code.",
  },
  {
    start: 24,
    end: 33,
    title: "Il est prêt",
    summary: "Romain Ecarnot, sans détour. Passeur du numérique, architecte du simple.",
  },
];

// Texte réellement affiché à l'écran, dans l'ordre : sert de transcription aux moteurs.
export const SHOWREEL_TRANSCRIPT =
  "> romain --reboot. 2000 : Flash. 2006 : 3D. 2013 : Bbox TV. 2018 : AWS. 2020 : OPEN. 2021 : CTO, DPO. 2023 : Cloud. " +
  "2025. Un AVC. Tout s'arrête. Reboot. Réapprendre. Observer. Construire. " +
  "L'atelier : Claude, Gemini, Mistral, DeepSeek, Kimi, GLM. 2026 : Cruchot. 9 plugins. " +
  "Il est prêt. Romain Ecarnot, sans détour. Passeur du numérique, architecte du simple. cv.romain-ecarnot.com";

export const formatTimecode = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
