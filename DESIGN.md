---
name: romain-ecarnot.com
description: La page Portrait d'un quotidien, imprimée sur le papier saumon des pages éco.
colors:
  ink: "oklch(0.2 0.014 40)"
  ink-soft: "oklch(0.4 0.035 42)"
  paper: "oklch(0.885 0.056 43)"
  paper-deep: "oklch(0.83 0.072 40)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 70"
  quote:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)"
    fontWeight: 850
    lineHeight: 1.02
    fontVariation: "'wdth' 74"
  deck:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.1875rem, 1.8vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.32
  deck-article:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.32
  date:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 3.2vw, 2rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 84"
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.58
  rubric:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 850
    lineHeight: 1.2
    letterSpacing: "0.045em"
    fontVariation: "'wdth' 80"
  folio:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 88"
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    fontVariation: "'wdth' 92"
  command:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.375
rounded:
  none: "0"
spacing:
  gutter-sm: "1rem"
  gutter-md: "2rem"
  gutter-lg: "2.5rem"
  column-gap: "2.5rem"
  grid-gap: "3rem"
  section: "2.5rem"
  section-major: "3.5rem"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  command:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  command-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  copy-button:
    textColor: "{colors.ink}"
    typography: "{typography.folio}"
    rounded: "{rounded.none}"
    padding: "0 12px"
  copy-button-hover:
    backgroundColor: "{colors.paper-deep}"
  stamp:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 9px"
  boxed-panel:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: romain-ecarnot.com

## Overview

**Creative North Star: "La page Portrait"**

Le site est la page Portrait qu'un quotidien consacrerait à Romain Ecarnot, imprimée sur le papier saumon des pages économiques. Tout vient de la presse écrite : un folio en capitales avec la date du jour, des filets d'encre qui ouvrent les rubriques, une titraille en grotesque condensée très grasse, un texte courant en serif dans des colonnes à alinéas, des chiffres tabulaires, des encadrés, des planches imprimées. Il n'y a qu'une encre et qu'un papier.

La densité est celle d'une page de journal lue sur écran : une information par ligne pleine largeur, séparée d'un filet, et un seul bloc tenu en noir inversé par page pour dire où aller. Le geste animé appartient au lecteur, pas à la page : un crayon qui souligne, coche ce qui a été lu et tamponne ce qui a été copié. Le site refuse l'arrangement linktree par défaut (avatar centré, pile de boutons sur fond sombre).

**Key Characteristics:**
- Deux couleurs au sens strict : papier saumon et encre noire chaude, avec leurs deux nuances.
- Titraille grotesque condensée (Archivo, axe `wdth`), texte serif (Source Serif 4, axe `opsz`).
- Structure par filets d'encre, jamais par cartes, ombres ou arrondis.
- Noir inversé réservé à l'action principale de chaque page.
- Seul mouvement : le crayon du lecteur, coupé sous `prefers-reduced-motion`.
- Typographie française appliquée à toute copie (apostrophe courbe, espaces insécables).

## Colors

Une encre et un papier, rien d'autre : la palette entière tient sur une presse monochrome.

### Primary
- **Encre noire chaude** (oklch(0.2 0.014 40)) : tout le texte, tous les filets, le contour de focus, le trait du crayon, et le fond du bloc d'action principale. Sa légère chaleur la marie au saumon au lieu de trancher en noir numérique.

### Neutral
- **Saumon des pages éco** (oklch(0.885 0.056 43)) : le papier. Fond de chaque page (porté par `html`), texte sur le bloc inversé, fond du tampon « Copié ». Un grain de papier journal (bruit fractal, opacité 0,13) le couvre et défile avec la feuille.
- **Saumon soutenu** (oklch(0.83 0.072 40)) : la sélection de texte, le survol des boutons de copie sur papier, la piste de la barre de défilement, et les libellés secondaires posés sur l'encre (l'URL du CV dans le bloc inversé).
- **Encre délavée** (oklch(0.4 0.035 42)) : légendes, résumés sous les liens, libellé « Ailleurs », texte de la ligne de rupture de 2025. Jamais pour un titre ni une action.

Les filets de séparation secondaires sont des dilutions de l'encre par `color-mix` ou opacité (filet de colonne à 70 %, filets de l'ours à 40 %), pas des couleurs nouvelles.

### Named Rules
**The Reversed Ink Rule.** Le noir inversé (texte papier sur fond encre) est réservé à l'action principale de la page, une seule par page : le lien « Suite : le CV complet » sur l'accueil, le bloc courriel sur `/contact`, la commande « ajouter la marketplace » sur `/claude-marketplace`. Toute autre action reste encre sur papier.

**The One Ink Rule.** Aucune autre teinte : pas d'accent, pas de couleur d'état, pas de lien bleu. Une information qui demanderait une couleur passe par la graisse, le filet ou la position.

## Typography

**Display Font:** Archivo (avec Helvetica Neue, Arial), variable, axe de largeur `wdth` chargé.
**Body Font:** Source Serif 4 (avec Georgia, Times New Roman), variable, axe optique `opsz` chargé, `font-optical-sizing: auto`.
**Label/Mono Font:** monospace système (ui-monospace, SFMono-Regular, Menlo, Consolas), ligatures coupées.

**Character:** une grotesque de titraille serrée comme un titre de une, contre un serif de labeur calme et lisible en colonnes. La largeur (`wdth`) est un outil de hiérarchie à part entière : plus le rôle est fort, plus la grotesque est condensée.

### Hierarchy
- **Display** (900, clamp(3.5rem, 6.6vw, 6rem) en grand écran, plafond 6rem, interligne 0.9, `wdth` 70) : le titre de chaque page. Sur mobile, clamp(2.6rem, 10.5vw, 4.75rem). Les titres d'articles plugins reprennent le même rôle à trois tailles (tête, article, brève).
- **Quote** (850, clamp(1.75rem, 2.4vw, 2.25rem), interligne 1.02, `wdth` 74) : la citation en exergue, entre guillemets français.
- **Deck** (serif 600, clamp(1.1875rem, 1.8vw, 1.5rem), interligne 1.32, 36 à 40ch) : le chapeau sous chaque titre, et le sous-titre de l'article de tête du cahier.
- **Deck article** (serif 600, 1.125rem) : le sous-titre des deux articles secondaires du cahier. Les brèves n'en ont pas : leur phrase courte (`blurb`) en tient lieu, en Body.
- **Title** (800, 1.25rem, `wdth` 84) : le nom d'un lien dans une liste (outils, adresses, canaux), porteur du soulignement au crayon.
- **Body** (serif 400, 1.0625rem, interligne 1.58) : le récit en colonnes et les descriptions. Les résumés sous les liens descendent à 0.9375rem en encre délavée.
- **Rubric** (850, 0.9375rem, capitales, interlettrage 0.045em, `wdth` 80) : le titre de rubrique posé sous un filet épais (« Ses outils », « Repères », « En bref »).
- **Folio** (650, 0.75rem, capitales, interlettrage 0.07em, `wdth` 88) : la ligne de folio, le sommaire, les liens secondaires, les boutons de copie, les numéros de version.
- **Caption** (500, 0.8125rem, `wdth` 92, encre délavée) : légendes de photos et de planches, lieux de la chronologie, pied de page.
- **Command** (mono 400, 0.8125rem) : uniquement les commandes Claude Code copiables.

- **Date** (900, clamp(1.375rem, 3.2vw, 2rem), `wdth` 72, chiffres tabulaires) : les années de la chronologie « Repères ». Les numéros d'étapes du mode d'emploi reprennent la même grotesque.

### Named Rules
**The Real Command Rule.** La monospace est réservée aux commandes réelles qu'on copie et colle dans un terminal. Une adresse, une URL ou une version reste en grotesque.

**The French Typography Rule.** Toute copie visible passe par `fr()` : apostrophe courbe, espace fine insécable avant ; ! ? et %, insécable avant les deux-points et dans les guillemets français. Les noms propres sont protégés de la césure.

**The Width Hierarchy Rule.** La grotesque se condense avec l'importance : 70 pour le titre, 74 pour la citation, 80 pour les rubriques, 84 pour les noms de liens, 88 pour le folio, 92 pour les légendes.

## Layout

Une page de journal de 88rem au plus, gouttières de 1rem, puis 2rem dès 40rem, puis 2.5rem dès 64rem. En grand écran, une grille de 12 colonnes avec 3rem d'écart : sur l'accueil, le portrait occupe 5 colonnes et reste collé à l'écran pendant la lecture (hauteur min(100svh - 5.5rem, 58rem)), l'article occupe les 7 autres ; `/contact` et `/claude-marketplace` reprennent le partage 7/5. En dessous de 64rem, tout passe en une colonne, le portrait en format 5:4 au-dessus du titre.

Le rythme vertical est donné par les filets : un filet épais ouvre une rubrique, son titre suit à 0.5rem, et les rubriques sont espacées de 2.5rem (3.5rem avant les grandes sections pleine largeur comme « Repères »). Les listes de liens sont une information par ligne pleine largeur, séparée d'un filet fin, avec 0.75 à 0.875rem de marge verticale.

Le récit se compose en deux colonnes dès 48rem, séparées d'un filet à 2.5rem. Pas d'espace entre paragraphes : un alinéa de 1.4em en première ligne, et au moins trois lignes en veuve comme en orpheline. Le cahier des plugins suit une hiérarchie de journal (un article de tête sur 7/5 colonnes, deux articles côte à côte séparés d'un filet vertical, puis des brèves sur deux colonnes avec vignette en marge : le nom, une phrase courte et humaine tirée du champ `blurb` de `src/data/plugins.ts`, la commande), jamais une grille de cartes identiques.

### Named Rules
**The Justify at 64rem Rule.** Les colonnes de journal sont justifiées et césurées automatiquement (`hyphens: auto`, 6 caractères minimum, 3 de part et d'autre) seulement à partir de 64rem. En dessous, texte en drapeau et césure manuelle uniquement : sur une colonne étroite, la justification ouvrirait des lézardes.

## Elevation & Depth

Aucune ombre, aucun calque. La page est une feuille imprimée : la profondeur vient du grain de papier posé sous le contenu, de l'épaisseur des filets, du noir inversé et du mode de fusion des planches, qui les fait appartenir au papier au lieu de flotter dessus. Le seul élément qui déborde de la feuille est le tampon « Copié », et il le fait par une double bordure et une rotation, pas par une ombre.

### Named Rules
**The Printed Plate Rule.** Les planches fusain des plugins et le QR code sont imprimés sur le saumon : `mix-blend-mode: multiply` et `filter: grayscale(1) contrast(1.04)`, pour que leur blanc prenne la teinte du papier. Le portrait noir et blanc (`public/portrait.jpg`, l'original fourni par Romain, en grand sur l'accueil et dans l'image de partage ; `public/avatar.jpg`, son recadrage carré, pour la vignette de contact et le JSON-LD) n'entre jamais dans cette règle : il est affiché tel quel, jamais filtré, recadré par `object-position` seulement, jamais régénéré.

## Shapes

Angles vifs partout (rayon 0). La forme vient de la presse : filet épais de 3px pour ouvrir une rubrique, filet fin de 1px entre les lignes d'une liste, double filet (3px puis 1px, 7px de haut) sous le folio, filet pointillé pour marquer la rupture de 2025 dans la chronologie, encadré de 3px pour les apartés (l'ours de `/contact`, le « Mode d'emploi » de la marketplace). Les commandes copiables sont serties d'un filet de 1px, le bouton de copie séparé par un filet vertical.

### Named Rules
**The Rule Weight Rule.** Trois épaisseurs, trois sens : 3px ouvre, 1px sépare, le pointillé signale une rupture. Pas de quatrième.

## Components

### Buttons
Le site n'a pas de bouton au sens applicatif : ses actions sont des liens et des blocs de page.
- **Shape:** angles vifs (0).
- **Primary:** le bloc d'action principale, pleine largeur de colonne, fond encre et texte papier, libellé en grotesque 800 condensée (`wdth` 80) de 1.375 à 1.875rem, flèche à droite, 16px 20px puis 20px 24px de marge.
- **Hover / Focus:** focus par un contour de 2px à 3px de décalage, en encre sur papier et en papier sur encre.
- **Secondary:** les boutons dans le bloc inversé de `/contact` (folio, filet papier de 1px, remplis de papier au survol) et les boutons de copie (folio, remplis de saumon soutenu au survol sur papier).

### Navigation
Le folio est la navigation : une ligne en capitales (date de l'édition du jour, adresse du site, puis sommaire Portrait, Plugins, Contact), posée sur un double filet. La page courante est marquée par la graisse 850 et le soulignement au crayon tracé en permanence. Sur mobile, la date passe en forme courte et l'adresse disparaît.

### Link Rows
Chaque lien de liste est une ligne pleine largeur : nom en grotesque 800, destination ou résumé en serif délavé, flèche en fin de ligne (diagonale pour un site externe, droite pour une page interne). Tout le rang est cliquable ; le nom seul reçoit le crayon.

### Copyable Command
Une ligne sertie : la commande en monospace sélectionnable d'un geste, puis un bouton « Copier » en folio. Variante inversée réservée à la commande principale de la marketplace. La copie annonce son résultat aux lecteurs d'écran hors du bouton, et en cas d'échec invite à sélectionner le texte à la main.

### The Reader's Pencil (signature)
Le seul geste animé du site, dans trois formes :
- **Soulignement :** un trait de crayon SVG en encre, tracé de gauche à droite au survol et au focus (420ms, cubic-bezier(0.16, 1, 0.3, 1)), permanent sur la page courante du sommaire.
- **Coche de lecture :** une coche au crayon se trace (480ms) après le nom d'un lien consulté ; la liste des liens lus est gardée dans `localStorage` et partagée entre onglets. Annoncée « déjà consulté » aux lecteurs d'écran.
- **Tampon « Copié » :** un tampon encreur incliné à -7 degrés, double bordure, s'abat sur le bouton de copie (220ms) et reste 2,4s.

Sur le noir inversé, le crayon d'encre serait invisible : l'adresse du bloc courriel prend un soulignement papier de 2px à la place.

### Named Rules
**The Pencil Rule.** Le mouvement appartient au lecteur : il n'existe qu'en réponse à un geste (survol, focus, lecture, copie) et il est entièrement coupé sous `prefers-reduced-motion`. Aucune animation d'entrée, de défilement ou d'attente.

## Do's and Don'ts

### Do:
- **Do** réserver le noir inversé à une seule action par page, celle qui mène au but de la page.
- **Do** structurer par filets d'encre (3px pour ouvrir, 1px pour séparer, pointillé pour une rupture), une information par ligne pleine largeur.
- **Do** imprimer toute illustration sur le papier (`multiply`, niveaux de gris) et laisser le portrait (`public/portrait.jpg`, `public/avatar.jpg`) intact.
- **Do** passer toute copie visible par `fr()` et protéger les noms propres de la césure.
- **Do** justifier et césurer les colonnes seulement à partir de 64rem.
- **Do** donner à chaque nouveau geste animé la forme du crayon et le couper sous `prefers-reduced-motion`.

### Don't:
- **Don't** ajouter une teinte : pas d'accent, pas de vert de disponibilité, pas de dégradé.
- **Don't** composer en cartes arrondies à ombre portée, ni en grille de cartes identiques.
- **Don't** employer la monospace pour autre chose qu'une commande réelle.
- **Don't** appliquer un filtre, un recadrage génératif ou un traitement de planche au portrait.
- **Don't** justifier un texte sur une colonne étroite.
- **Don't** revenir au linktree par défaut : avatar centré et pile de boutons sur fond sombre.
