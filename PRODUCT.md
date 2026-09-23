# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primaire : recruteurs et employeurs** (confirmé par Romain le 23/09/2026). Ils évaluent son profil pour un poste ou une mission. Action visée : ouvrir le CV (cv.romain-ecarnot.com), puis LinkedIn ou la prise de contact.
- Situation (inféré) : ils arrivent depuis LinkedIn, une candidature, une recherche Google ou le QR code, avec peu de temps pour décider s'ils creusent.
- Secondaires (présents dans le contenu actuel) : clients potentiels d'accompagnement numérique et IA (page `/contact`), développeurs Claude Code venus pour la marketplace (page `/claude-marketplace`), soutiens Tipeee.
- Audience machine : moteurs de recherche et moteurs génératifs (JSON-LD, `llms.txt`, `ai-catalog.json`, IndexNow).

## Product Purpose

Site personnel et hub officiel de Romain Ecarnot sur www.romain-ecarnot.com : carte de visite numérique, vitrine professionnelle et passerelle vers le CV, LinkedIn, GitHub, la marketplace de plugins Claude Code et Tipeee.

Succès : un recruteur comprend en quelques secondes qui est Romain et ce qu'il sait faire, puis ouvre le CV ou prend contact.

## Positioning

- Titre : « Passeur du numérique & Architecte du simple ».
- Mission : accompagnement humain et technique aux usages du numérique et de l'intelligence artificielle.
- Ce qu'un profil voisin ne peut pas copier : une expertise d'architecte logiciel et cloud, prouvée côté IA par une suite de 9 plugins Claude Code open source, publiés et maintenus (orchestration d'agents, deep research, revue critique multi-modèles, SEO/GEO, vision, image). La compétence IA est vérifiable dans du code public, pas déclarative.
- Philosophie : anti-overkill, sobriété logicielle, chemin le plus court entre l'idée et la production.

## Operating Context

- Trois routes : `/` (hub), `/contact`, `/claude-marketplace` (redirection permanente depuis `/marketplace`).
- Consultation desktop et mobile ; un QR code affiché sur desktop permet d'ouvrir le hub sur smartphone.
- Déploiement continu : push sur `main` (GitHub `eRom/linktree`) puis Vercel en production.
- Soumission IndexNow après toute modification de page (`bun run indexnow`).

## Capabilities and Constraints

- Stack : Next.js 15 (App Router, Server Components par défaut), React 19, Tailwind CSS 4, lucide-react, `bun`.
- Langue du site : français (`lang="fr"`).
- Titres SEO figés (AGENTS.md §4, limite Bing de 70 caractères) : accueil « Romain Ecarnot - Passeur du numérique & Architecte du simple », contact « Contact - Romain Ecarnot | Passeur du numérique », marketplace « Marketplace Plugins Claude Code - Romain Ecarnot ».
- JSON-LD à préserver : `ProfilePage` + `Person` + `WebSite` (layout), `ContactPage` + `BreadcrumbList` (contact), `CollectionPage` + `ItemList` de 9 `SoftwareApplication` (marketplace).
- Découverte IA à préserver : `llms.txt`, `llms-full.txt`, `.well-known/ai-catalog.json` et leurs balises `<link>` dans le `<head>`.
- Données des plugins : `src/data/plugins.ts` (nom, titre, description, version, dépôt, illustration, catégorie, commande d'installation).
- Commandes copiables : `/plugin marketplace add eRom/erom-marketplace` et une commande `claude plugin install` par plugin.
- Liens sortants : CV `https://cv.romain-ecarnot.com/`, GitHub `https://github.com/eRom`, LinkedIn `https://www.linkedin.com/in/romainecarnot/`, Tipeee `https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/`, email `contact@romain-ecarnot.com`.
- Localisation : Nantes, France.

## Brand Commitments

- Nom : Romain Ecarnot, alias eRom.
- Titre : « Passeur du numérique & Architecte du simple ».
- Portrait noir et blanc : intouchable (confirmé par Romain le 23/09/2026). Original `public/portrait.jpg`, fourni par Romain le 23/09/2026 ; recadrage carré `public/avatar.jpg`.
- Voix : sobre, pragmatique, pédagogique, en français.
- Carte blanche visuelle pour la refonte hors portrait (confirmé le 23/09/2026) : le design system perso eRom (sombre, ambre, Inter) n'est pas imposé à ce site, et les planches fusain des plugins ne sont pas un engagement de style.
- Récit post-AVC (RQTH, Tipeee) : présent mais discret, le métier passe devant (confirmé le 23/09/2026).

## Evidence on Hand

- Portrait N&B original : `public/portrait.jpg` (1009x946) ; recadrage carré `public/avatar.jpg` (800x800).
- Illustrations officielles des 9 plugins, style fusain : `public/marketplace/*.webp` (800x534).
- Image de partage : `public/og-image.jpg` (1200x630), générée par `scripts/generate-og-image.mjs`.
- QR code vers le site : `public/qrcode.svg`, généré par `scripts/generate-qrcode.mjs`.
- Récit du portrait (parcours, reconstruction, outils) : article de l'accueil, `src/app/page.tsx`.
- Offre de services (3 domaines) et fiches des 9 plugins : `public/llms-full.txt`.
- Parcours daté, preuves et compétences : `https://cv.romain-ecarnot.com/llms.txt` (source des faits de `src/data/profile.ts`).
- Email de contact retenu pour tout le site, recruteurs compris : `contact@romain-ecarnot.com` (confirmé par Romain le 23/09/2026).
- Absences à ne pas fabriquer : aucun témoignage, aucun client nommé, aucun chiffre de résultat, aucun tarif, aucun détail d'expérience hors du CV (le CV vit sur cv.romain-ecarnot.com).

## Product Principles

1. Le recruteur d'abord : en quelques secondes, qui il est, ce qu'il sait faire, et le chemin vers le CV.
2. Prouver plutôt qu'affirmer : les plugins publiés et le code public sont la preuve de la compétence IA.
3. Anti-overkill jusque dans le site : léger, rapide, sans gadget.
4. Le récit de résilience éclaire le profil sans le définir.
5. Lisible par les machines autant que par les humains (SEO, GEO, `llms.txt`).

## Accessibility & Inclusion

- WCAG AA : contrastes stricts, focus visibles, navigation clavier (engagement existant, AGENTS.md §5).
