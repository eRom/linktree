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
* **UI & Style :** React 19, Tailwind CSS 4, Lucide React, Radix UI.
* **Polices :** Geist & Geist Mono (`next/font/google`).
* **Runtime & Package Manager :** `bun` (obligatoire par convention, éviter npm/yarn/pnpm).
* **Hébergement & Déploiement :** Vercel, déploiement continu automatique sur push de la branche `main` (`origin/main` sur GitHub `eRom/linktree`).

---

## 3. Architecture des fichiers

```text
linktree/
├── public/
│   ├── .well-known/           # Découverte IA (ai-catalog.json)
│   ├── avatar.jpg             # Photo de profil officielle
│   ├── e8c4a90f1d7b4256...txt # Clé de vérification protocole IndexNow
│   ├── favicon* / icon*       # Favicons multi-résolutions & apple-touch-icon
│   ├── llms.txt               # Documentation sémantique pour agents IA & LLMs
│   ├── manifest.json          # Manifest PWA
│   ├── og-image.jpg           # Bannière de partage OpenGraph & Twitter Cards
│   ├── robots.txt             # Directives de crawl + bots IA (GPTBot, ClaudeBot, etc.)
│   └── sitemap.xml            # Plan de site XML canonique
├── scripts/
│   ├── generate-icons.mjs     # Génération des favicons
│   ├── generate-og-image.mjs  # Génération de l'image OpenGraph
│   └── submit-indexnow.mjs    # Soumission manuelle/scriptée aux API IndexNow
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx       # Page de contact dédiée (/contact)
│   │   ├── globals.css        # Styles globaux & variables Tailwind v4
│   │   ├── layout.tsx         # Layout racine, balises SEO globales & Schema.org
│   │   └── page.tsx           # Page d'accueil / Hub principal de liens
│   ├── components/            # Composants UI réutilisables
│   └── lib/                   # Utilitaires (cn, etc.)
├── AGENTS.md                  # Ce document de référence
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

### Microdonnées & Référencement sémantique
* `src/app/layout.tsx` intègre un graphe JSON-LD Schema.org complet :
  - `ProfilePage` (`#profilepage`)
  - `Person` (`#person` avec liens `sameAs` LinkedIn, GitHub, Tipeee)
  - `WebSite` (`#website`)
* `src/app/contact/page.tsx` intègre un schéma `ContactPage`.
* Découverte IA : fichier `public/llms.txt` maintenu à jour à la racine, et lien `ai-catalog` dans le `<head>`.

### IndexNow & Sitemaps
* Clé IndexNow hébergée sur `https://www.romain-ecarnot.com/e8c4a90f1d7b4256a938c11e74f329de.txt`.
* En cas de mise à jour de page ou de nouvelle route, exécuter :
  `bun run indexnow`
  ou utiliser l'outil `indexing_submit` du MCP `search-console`.
* Le sitemap officiel déclaré auprès de Google Search Console et Bing Webmaster Tools est :
  `https://www.romain-ecarnot.com/sitemap.xml`.

---

## 5. Design System & Principes UI

* **Palette :** Thème sombre absolu (`#09090b` de fond), touches subtiles de bordures zinc (`zinc-800`, `zinc-900`), illumination supérieure radiale discrète (`bg-[radial-gradient(...)]`).
* **Design :** Aucun effet gadget, pas de dégradés violet criards, densité maîtrisée, contrastes stricts, accessibilité WCAG AA avec retours de focus clairs (`focus-visible`).
* **Micro-interactions :** Indicateur de disponibilité vert pulsant sur l'avatar, cartes de liens avec transitions nettes au hover (`hover:bg-zinc-900/90`), icônes fléchées interactives.

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

# Déploiement en production
git add <fichiers>
git commit -m "type(scope): description"
git push origin main
```
