---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/contact/page.tsx","src/app/claude-marketplace/page.tsx"]
---

# Surface brief : accueil (hub) + contact + marketplace

## Scope and mode

- Surfaces : `/` (hub, surface primaire), `/contact`, `/claude-marketplace`. Un seul monde pour les trois.
- Mode : Persuade. Le visiteur prioritaire (recruteur) décide s'il creuse, puis ouvre le CV.

## Audience, job, action

- Recruteur ou employeur, peu de temps : comprendre qui est Romain, ce qu'il sait faire, ouvrir le CV (cv.romain-ecarnot.com), puis LinkedIn ou contact.
- Preuves disponibles : parcours daté (llms.txt du CV : Bouygues Telecom 2011-2015, GFI 2016-2018, OPEN 2019-2020, pharmacylounge et Morannon 2021-2025, reconstruction post-AVC 2025-2026, DUT Nantes 1998), 9 plugins Claude Code (`src/data/plugins.ts`), Cruchot, GitHub eRom.
- Récit post-AVC : présent, discret.

## Direction contract

THESIS : le site est la page Portrait qu'un quotidien consacrerait à Romain, imprimée sur le papier saumon des pages éco. Il refuse l'arrangement linktree par défaut : avatar centré et pile de boutons sur fond sombre.

OWN-WORLD : surface entière en papier journal saumon, encre noire chaude, aucune autre teinte ; le noir inversé est réservé par loi à l'action principale. Titres en grotesque condensée très grasse (Archivo), texte en colonnes justifiées et césurées (Source Serif 4), folio de journal en capitales, filets d'encre, encadrés, chiffres tabulaires. Motion : le crayon du lecteur, seul geste animé du site ; il souligne au survol, coche le lien visité, tamponne « Copié ». Raises : une info par ligne pleine largeur (forge), le trou 2025 dessiné en pointillé discret (ruban), un seul moment tenu, le portrait à mi-écran (affiche), loi de palette (arcade), l'état est une marque (banc de montage).

STORY : en une seconde, portrait, titre et chapeau disent qui est Romain ; en dix secondes, la ligne « Suite » mène au CV ; en lisant, le récit, la chronologie et les outils prouvent le métier.

FIRST VIEWPORT (1440) : folio pleine largeur (date du jour, rubrique Portrait, sommaire des 3 pages). Gauche 5/12 : portrait N&B pleine hauteur, légende dessous. Droite 7/12 : titre « Sans détour. » au plafond de 6rem, chapeau gras, bloc noir inversé « Suite du portrait : le CV complet », puis LinkedIn, GitHub, Écrire en ligne secondaire.

FORM : page Portrait de quotidien, candidat 3 de ma liste ordonnée, seed 79809190.

FINISH : unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Cross-surface reach

- `/contact` : l'encadré de la rédaction (« l'ours ») ; l'adresse email tient le rôle du titre.
- `/claude-marketplace` : un cahier spécial ; un article de tête, des articles secondaires et des brèves, pas une grille de cartes identiques ; planches fusain imprimées sur le saumon (multiply).

## Unresolved decisions

- Copie éditoriale nouvelle (titre, chapeau, récit, repères, ours, brèves) à faire valider par Romain avant la mise en ligne ; tous les faits sont repris de cv.romain-ecarnot.com/llms.txt.
- Réglé le 23/09/2026 : image OG régénérée dans le monde Portrait ; manifest et theme-color au saumon ; favicons (portrait N&B) conservés ; photo originale fournie par Romain (`public/portrait.jpg`, 1009x946) ; email unique `contact@` ; brèves réécrites courtes et humaines (champ `blurb`).
