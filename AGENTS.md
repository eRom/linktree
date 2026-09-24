# AGENTS.md - Hub Linktree Romain Ecarnot

## 1. Vue d'ensemble du projet

Ce dépôt héberge le site personnel et hub officiel de Romain Ecarnot : **[romain-ecarnot.com](https://www.romain-ecarnot.com/)**.
Il fait office de carte de visite numérique, vitrine professionnelle et passerelle vers l'ensemble de ses activités et profils.

### Identité & Posture de Romain
* **Titre :** Passeur du numérique & Architecte du simple.
* **Mission :** Accompagnement humain et technique aux usages du numérique et de l'intelligence artificielle.
* **Philosophie :** Sobriété logicielle, pragmatisme, anti-overkill, recherche du chemin le plus court et élégant entre l'idée et la production.
* **Résilience :** Parcours personnel fort de reconstruction professionnelle post-AVC (RQTH).

---

## 2. Stack Technique & Outillage

* **Framework :** Next.js 15 (App Router, Server Components par défaut).
* **UI & Style :** React 19, Tailwind CSS 4, Lucide React.
* **Polices :** Archivo (titraille, axe de largeur) & Source Serif 4 (texte) via `next/font/google` ; monospace système réservée aux commandes.
* **Runtime & Package Manager :** `bun` (obligatoire par convention, éviter npm/yarn/pnpm).
* **Hébergement & Déploiement :** Vercel, déploiement continu automatique sur push de la branche `main` (`origin/main` sur GitHub `eRom/linktree`).

---

## 3. Architecture des fichiers

```text
linktree/
├── public/
│   ├── .well-known/           # Découverte IA (ai-catalog.json)
│   ├── avatar.jpg             # Portrait N&B, recadrage carré (vignette contact, JSON-LD)
│   ├── e8c4a90f1d7b4256...txt # Clé de vérification protocole IndexNow
│   ├── favicon* / icon*       # Favicons multi-résolutions & apple-touch-icon
│   ├── llms.txt               # Documentation sémantique pour agents IA & LLMs
│   ├── manifest.json          # Manifest PWA
│   ├── og-image.jpg           # Bannière de partage OpenGraph & Twitter Cards
│   ├── portrait.jpg           # Portrait N&B original (accueil, image de partage)
│   ├── robots.txt             # Directives de crawl + bots IA (GPTBot, ClaudeBot, etc.)
│   └── sitemap.xml            # Plan de site XML canonique
├── scripts/
│   ├── generate-icons.mjs     # Génération des favicons
│   ├── generate-og-image.mjs  # Image OpenGraph (rendu HTML par Chrome headless)
│   └── submit-indexnow.mjs    # Soumission manuelle/scriptée aux API IndexNow
├── src/
│   ├── app/
│   │   ├── claude-marketplace/
│   │   │   └── page.tsx       # Cahier des plugins Claude Code (/claude-marketplace)
│   │   ├── contact/
│   │   │   └── page.tsx       # Page de contact dédiée (/contact)
│   │   ├── globals.css        # Jetons du monde « page Portrait » (Tailwind v4)
│   │   ├── layout.tsx         # Layout racine, balises SEO globales & Schema.org
│   │   └── page.tsx           # Page d'accueil : la page Portrait
│   ├── components/            # Folio, liens au crayon, commandes copiables, articles, outils WebMCP
│   ├── data/                  # Plugins et faits du parcours (repris du CV)
│   └── lib/                   # Utilitaires (typographie française, date d'édition)
├── AGENTS.md                  # Ce document de référence
├── DESIGN.md                  # Système de design (source de vérité visuelle)
├── PRODUCT.md                 # Vérité produit (public, positionnement, contraintes)
├── package.json               # Dépendances et scripts
└── tsconfig.json              # Configuration TypeScript
```

---

## 4. Règles SEO & Contraintes Moteurs (Google & Bing)

### Longueur des balises `<title>`
Bing Webmaster Tools lève un avertissement sévère si un titre dépasse 70 caractères.
* **Accueil (`src/app/layout.tsx`) :**
  `"Romain Ecarnot - Passeur du numérique & Architecte du simple"` (exactement 60 caractères, idéal pour Google et Bing). Ne jamais rajouter de suffixe comme ` | Linktree`.
* **Contact (`src/app/contact/page.tsx`) :**
  `"Contact - Romain Ecarnot | Passeur du numérique"` (48 caractères).
* **Marketplace (`src/app/claude-marketplace/page.tsx`) :**
  `"Marketplace Plugins Claude Code - Romain Ecarnot"` (49 caractères).

### Microdonnées & Référencement sémantique
* `src/app/layout.tsx` intègre un graphe JSON-LD Schema.org complet :
  - `ProfilePage` (`#profilepage`)
  - `Person` (`#person` avec liens `sameAs` LinkedIn, GitHub, Tipeee)
  - `WebSite` (`#website`)
* `src/app/contact/page.tsx` intègre un schéma `ContactPage` avec fil d'Ariane (`BreadcrumbList`).
* `src/app/claude-marketplace/page.tsx` intègre un schéma `CollectionPage` + `ItemList` avec les 9 `SoftwareApplication` et `BreadcrumbList`.
* Découverte IA : fichiers `public/llms.txt` et `public/llms-full.txt` maintenus à jour à la racine, et liens de découverte dans le `<head>` (`ai-catalog` RFC 8615 et `alternate` type `text/plain`).
* WebMCP : `src/components/WebMcpTools.tsx` expose aux agents du navigateur trois outils en lecture seule (`get_profile`, `list_plugins`, `get_contact`) via `document.modelContext`, nourris par `src/data/`. Activé en production par le jeton d'origin trial en dur dans `src/app/layout.tsx` (public, lié à `https://www.romain-ecarnot.com`), **qui expire le 17/11/2026** : à renouveler sur https://developer.chrome.com/origintrials/. En local, activer `chrome://flags/#enable-webmcp-testing`.

### IndexNow & Sitemaps
* Clé IndexNow hébergée sur `https://www.romain-ecarnot.com/e8c4a90f1d7b4256a938c11e74f329de.txt`.
* En cas de mise à jour de page ou de nouvelle route, exécuter :
  `bun run indexnow`
  ou utiliser l'outil `indexing_submit` du MCP `search-console`.
* Le sitemap officiel déclaré auprès de Google Search Console et Bing Webmaster Tools est :
  `https://www.romain-ecarnot.com/sitemap.xml`.

---

## 5. Design System & Principes UI

Source de vérité : `DESIGN.md` (et `.impeccable/design.json`). Monde « page Portrait » : le site est la page Portrait qu'un quotidien consacrerait à Romain, imprimée sur le papier saumon des pages éco.

* **Palette :** papier journal saumon (`oklch(0.885 0.056 43)`, `#facebc`), encre noire chaude, aucune autre teinte. Loi de palette : le noir inversé (texte papier sur fond encre) est réservé à l'action principale de chaque page (le CV, le courriel, l'ajout de la marketplace).
* **Typographie :** titres en Archivo condensée très grasse, texte en Source Serif 4, folio et rubriques en capitales. Typographie française (apostrophe courbe, espaces insécables) appliquée par `fr()` dans `src/lib/typography.ts`.
* **Mise en page :** folio de journal et double filet, portrait N&B à mi-écran (collant en desktop), colonnes justifiées et césurées à partir de 64rem, en drapeau sans césure en dessous. Des filets, pas de cartes.
* **Micro-interactions :** un seul geste, le crayon du lecteur : soulignement tracé au survol et au focus, coche sur les liens consultés (mémorisée en local), tampon « Copié ». Tout est coupé avec `prefers-reduced-motion`.
* **Intouchable :** le portrait N&B (`public/portrait.jpg`, l'original, et `public/avatar.jpg`, son recadrage carré), jamais filtré ni régénéré.
* **Accessibilité :** WCAG AA (encre sur papier 12,6:1, texte secondaire 6,5:1), focus visibles sur papier comme sur fond encre.

---

## 6. Commandes utiles

```bash
# Développement local
bun dev

# Vérification du typage et du linting
bun run lint
bun x tsc --noEmit

# Soumission IndexNow
bun run indexnow

# Image de partage OpenGraph (nécessite Google Chrome, ou CHROME_PATH)
bun scripts/generate-og-image.mjs

# Déploiement en production
git add <fichiers>
git commit -m "type(scope): description"
git push origin main
```
