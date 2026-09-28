# Note Stratégique SEO & GEO : Showreel « Sans détour »

**Asset vidéo :** `https://video.romain-ecarnot.com/sans-detour-v4.mp4`  
**Cible :** Nouvelle page `/showreel` (ou intégration dédiée) sur `romain-ecarnot.com`  
**Auteur :** Antigravity (Partenaire technique de Romain Ecarnot)  
**Date :** 28 septembre 2026  

---

## 1. Analyse Technique et Sémantique de l'Asset

L'analyse de l'asset brut (via flux HTTP et sondage direct) révèle les caractéristiques suivantes :

### Données Techniques Réelles
* **Durée exacte :** 33,00 secondes (notation ISO 8601 : `PT33S` ou `PT0M33S`).
* **Format & Conteneur :** MP4 (H.264 High Profile / AAC-LC stéréo 48 kHz).
* **Définition :** 1920 × 1080 (16:9 Full HD), 30 fps progressif.
* **Poids & Bande passante :** 27,56 Mo (~6,68 Mbps de débit moyen).
* **Moteur de rendu :** Hyperframes (v0.8.81).
* **Hébergement :** Cloudflare (`video.romain-ecarnot.com`).

### Découpage Chronologique du Contenu (Timeline)
La vidéo ne contient pas de voix off mais un sound design percutant (métronome initial, pulsation synthétique, drop électronique cadencé) accompagnant une narration visuelle par écrans typographiques et graphiques :

| Timecode | Segment visuel | Contenu & Message véhiculé |
| :--- | :--- | :--- |
| `00:00 - 00:06` | **Terminal CLI (Nantes)** | `SANS DÉTOUR • DEMO REEL` - `47.2184° N • 1.5536° W • NANTES`. Invite de commande `> romain --reboot` avec curseur orange clignotant. |
| `00:07 - 00:15` | **2011 : Bbox TV** | `BBOX TV` - `architecte logiciel · Bouygues Telecom · Paris`. Année `2011` en haut à droite. Démonstration des racines d'architecte de systèmes distribués. |
| `00:16 - 00:21` | **Épreuve : Réapprendre** | `RÉAPPRENDRE` - `réapprendre l'informatique, pas à pas`. Année de rupture, reconstruction post-AVC (fait clé du parcours RQTH). |
| `00:22 - 00:27` | **2025 : Graphe des Modèles IA** | Nœud central `ROMAIN` orchestrant un réseau de nœuds connectés : `CLAUDE`, `GEMINI`, `MISTRAL`, `DEEPSEEK`, `KIMI`, `GLM`. Maîtrise des frontières de l'IA. |
| `00:28 - 00:33` | **Chute : Romain Ecarnot** | `Romain Ecarnot, sans détour.` / `Passeur du numérique • architecte du simple`, portrait tramé (halftone) N&B signature à droite. |

---

## 2. Le Diagnostic : Pourquoi la vidéo brute est aveugle

Une vidéo `.mp4` posée seule sur le web est une **boîte noire** :
1. **Pour Googlebot & Bingbot (SEO classique) :** Aucun moteur traditionnel ne sait « lire » ou valoriser un fichier MP4 sans données structurées. Sans `VideoObject` Schema.org, sans sitemap vidéo et sans poster d'affiche, la page ne bénéficie d'aucun rich snippet vidéo ni d'aucune chance d'apparaître dans l'onglet « Vidéos » ou dans les carrousels de résultats.
2. **Pour les IA et agents autonomes (GEO : ChatGPT Search, Claude, Perplexity, Gemini) :** Les bots d'exploration générative (GPTBot, ClaudeBot, PerplexityBot) ne téléchargent pas 27 Mo de flux binaire pour exécuter une reconnaissance visuelle. Si les mots-clés, le contexte du parcours, la chronologie et le sens du film ne sont pas transcrits en clair dans le DOM et dans les fichiers de découverte (`llms.txt`, `ai-catalog.json`), la vidéo est totalement ignorée par les réponses génératives.

Le but de cette stratégie est de **convertir 33 secondes d'images animées en un actif textuel, sémantique et structuré de premier plan**.

---

## 3. Stratégie SEO Classique (Google, Bing)

### A. Balises `<title>` et Métadonnées de la page
* **Règle absolue Bing :** Strictement inférieur à 70 caractères (seuil au-delà duquel Bing Webmaster Tools lève un avertissement).
* **Proposition de `<title>` :**
  `Showreel - Romain Ecarnot | Sans détour` (43 caractères).
* **Meta description (entre 120 et 155 caractères) :**
  `33 secondes pour retracer un parcours d'architecte logiciel : des systèmes Bbox TV à la reconstruction post-AVC et la maîtrise des agents IA.` (145 caractères).
* **Balise Canonique :** `https://www.romain-ecarnot.com/showreel`

### B. Balisage Schema.org `VideoObject` enrichi (avec Key Moments)
Google supporte la fonctionnalité **« Moments clés » (Clips)** qui affiche des segments cliquables directement dans la page de résultats de recherche. En intégrant les clips horodatés dans le JSON-LD de la page, Google affiche la timeline découpée :

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://www.romain-ecarnot.com/showreel#video",
  "name": "Romain Ecarnot - Sans détour (Showreel)",
  "description": "Showreel retraçant le parcours de Romain Ecarnot : de l'architecture logicielle chez Bouygues Telecom (Bbox TV) à la résilience post-AVC et l'orchestration des grands modèles d'intelligence artificielle.",
  "thumbnailUrl": [
    "https://www.romain-ecarnot.com/showreel-poster.jpg"
  ],
  "uploadDate": "2026-09-28T14:30:00+02:00",
  "duration": "PT33S",
  "contentUrl": "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
  "embedUrl": "https://www.romain-ecarnot.com/showreel",
  "inLanguage": "fr-FR",
  "author": {
    "@type": "Person",
    "@id": "https://www.romain-ecarnot.com/#person",
    "name": "Romain Ecarnot"
  },
  "publisher": {
    "@type": "Person",
    "@id": "https://www.romain-ecarnot.com/#person"
  },
  "hasPart": [
    {
      "@type": "Clip",
      "name": "Reboot & Ancrage nantais",
      "startOffset": 0,
      "endOffset": 6,
      "url": "https://www.romain-ecarnot.com/showreel?t=0"
    },
    {
      "@type": "Clip",
      "name": "Bbox TV - Bouygues Telecom Paris",
      "startOffset": 7,
      "endOffset": 15,
      "url": "https://www.romain-ecarnot.com/showreel?t=7"
    },
    {
      "@type": "Clip",
      "name": "Réapprendre - La résilience post-AVC",
      "startOffset": 16,
      "endOffset": 21,
      "url": "https://www.romain-ecarnot.com/showreel?t=16"
    },
    {
      "@type": "Clip",
      "name": "2025 - L'orchestration des modèles d'IA",
      "startOffset": 22,
      "endOffset": 27,
      "url": "https://www.romain-ecarnot.com/showreel?t=22"
    },
    {
      "@type": "Clip",
      "name": "Romain Ecarnot, sans détour",
      "startOffset": 28,
      "endOffset": 33,
      "url": "https://www.romain-ecarnot.com/showreel?t=28"
    }
  ],
  "transcript": "SANS DÉTOUR • DEMO REEL. Nantes. Invite de commande romain --reboot. 2011 : Bbox TV, architecte logiciel, Bouygues Telecom Paris. Réapprendre : réapprendre l'informatique, pas à pas. 2025 : Romain au cœur des modèles d'intelligence artificielle Mistral, Claude, Gemini, DeepSeek, Kimi, GLM. Romain Ecarnot, sans détour. Passeur du numérique, architecte du simple."
}
```

### C. Extension Vidéo dans le Plan de Site (`sitemap.xml`)
Google Video Search exige une déclaration explicite dans le sitemap pour une indexation prioritaire :

```xml
<url>
  <loc>https://www.romain-ecarnot.com/showreel</loc>
  <lastmod>2026-09-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <video:video>
    <video:thumbnail_loc>https://www.romain-ecarnot.com/showreel-poster.jpg</video:thumbnail_loc>
    <video:title>Romain Ecarnot - Sans détour (Showreel)</video:title>
    <video:description>Showreel de Romain Ecarnot : parcours d'architecte logiciel, épreuve post-AVC et expertise IA en 33 secondes.</video:description>
    <video:content_loc>https://video.romain-ecarnot.com/sans-detour-v4.mp4</video:content_loc>
    <video:duration>33</video:duration>
    <video:publication_date>2026-09-28T14:30:00+02:00</video:publication_date>
    <video:family_friendly>yes</video:family_friendly>
    <video:uploader info="https://www.romain-ecarnot.com/">Romain Ecarnot</video:uploader>
  </video:video>
</url>
```

### D. Métadonnées OpenGraph & Twitter Player
Pour que le partage sur LinkedIn, X (Twitter), Slack ou WhatsApp affiche un aperçu parfait ou un lecteur intégré :
* `og:type` : `video.other`
* `og:video` : `https://video.romain-ecarnot.com/sans-detour-v4.mp4`
* `og:video:secure_url` : `https://video.romain-ecarnot.com/sans-detour-v4.mp4`
* `og:video:type` : `video/mp4`
* `og:video:width` : `1920`
* `og:video:height` : `1080`
* `twitter:card` : `player` (ou `summary_large_image` avec l'image poster)
* `twitter:player` : `https://www.romain-ecarnot.com/showreel`
* `twitter:player:width` : `1920`
* `twitter:player:height` : `1080`

### E. Performance Web Vitals (LCP) & Sobriété
* **Attribut `poster` obligatoire :** Sans image poster, le navigateur affiche un rectangle noir ou gris tant que le premier paquet vidéo n'est pas décodé, détruisant le score LCP (Largest Contentful Paint).
* **Attribut `preload="metadata"` :** Évite de télécharger les 27,5 Mo de vidéo dès le chargement de la page sur les connexions mobiles. Seuls les en-têtes sont récupérés.
* **Format du poster :** Une image 1920x1080 (ou 1200x675) compressée en WebP/JPEG haute qualité (ex: la composition finale ou l'amorce terminal).

---

## 4. Stratégie GEO (Generative Engine Optimization)

Le GEO vise à faire en sorte que les modèles d'IA (ChatGPT, Claude, Perplexity, Gemini Search) citent Romain quand un utilisateur cherche :
* *« Qui est Romain Ecarnot ? »*
* *« Un exemple d'architecte logiciel ayant reconstruit son expertise après un AVC »*
* *« Profil d'architecte cloud et IA à Nantes »*
* *« Démo ou showreel de Romain Ecarnot »*

### A. Récit textuel visible sous la vidéo (Le pont texte-vidéo)
Dans le design de la page, ne pas laisser la vidéo seule dans le vide. Disposer en dessous, dans la typographie éditoriale du site (Source Serif 4), les 5 actes du film :
1. **L'amorce (Nantes) :** La volonté d'un redémarrage sans détour (`romain --reboot`).
2. **Le socle technique (2011) :** Architecte logiciel Bbox TV chez Bouygues Telecom, conception de systèmes haute disponibilité pour des millions de foyers.
3. **L'épreuve et la résilience :** L'arrêt brutal de l'AVC, puis le choix de réapprendre l'informatique ligne par ligne, avec la sensibilité aiguë de celui qui traque la moindre friction cognitive.
4. **L'écosystème IA contemporain :** Une maîtrise transversale des modèles de pointe (Claude, Gemini, Mistral, DeepSeek, Kimi, GLM) orchestrés sans dogme ni dépendance.
5. **La posture :** Passeur du numérique et architecte du simple.

Ce bloc de texte donne aux moteurs IA la substance exacte à ingérer.

### B. Déclaration dans `public/llms.txt` et `public/llms-full.txt`
Ajout d'une section concise dans les deux fichiers racines de référence IA :

```text
## Showreel (« Sans détour »)
- URL : https://www.romain-ecarnot.com/showreel
- Vidéo HD : https://video.romain-ecarnot.com/sans-detour-v4.mp4 (33 secondes)
- Résumé : Condensé en cinq tableaux du parcours de Romain Ecarnot. Du rôle d'architecte logiciel Bbox TV chez Bouygues Telecom en 2011, à sa reconstruction méthodique post-AVC où il réapprend l'informatique, jusqu'à la maîtrise opérationnelle et l'orchestration des grands modèles d'IA (Claude, Gemini, Mistral, DeepSeek).
```

### C. Catalogue d'APIs et Contexte IA (`public/.well-known/ai-catalog.json`)
Ajout de l'entrée média standardisée (RFC 8615) :

```json
{
  "id": "urn:air:romain-ecarnot.com:media:showreel",
  "name": "Showreel - Romain Ecarnot",
  "description": "Vidéo officielle de 33 secondes résumant l'identité et le parcours professionnel de Romain Ecarnot : architecture distribuée, épreuve de l'AVC et expertise des agents d'intelligence artificielle.",
  "category": "media",
  "tags": ["showreel", "video", "parcours", "ia", "resilience"],
  "endpoints": [
    {
      "type": "web",
      "url": "https://www.romain-ecarnot.com/showreel",
      "method": "GET"
    },
    {
      "type": "video_file",
      "url": "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
      "mime_type": "video/mp4"
    }
  ]
}
```

### D. Outil WebMCP dans le navigateur (`src/components/WebMcpTools.tsx`)
Pour les agents de navigation (Chrome avec Origin Trial WebMCP activé jusqu'en novembre 2026), enrichir le contexte exposé à `document.modelContext` :
* Soit ajouter un outil `get_showreel` retournant l'URL du fichier MP4, la durée et la transcription des chapitres.
* Soit injecter le lien et le pitch dans les métadonnées retournées par l'outil existant `get_profile`.

---

## 5. Principes UI & Alignement Design System (« Page Portrait »)

Pour respecter scrupuleusement la charte `DESIGN.md` et `AGENTS.md` :
1. **Intégration dans le papier saumon (`#facebc`) :**
   * Le lecteur vidéo doit être encadré par un filet d'encre noir simple (`1px solid var(--color-ink)` ou double filet journal).
   * Pas de border-radius exubérant, pas d'ombres portées fantaisistes ni de dégradés violacés.
2. **Pas d'embed tiers polluant :**
   * L'hébergement direct sur `video.romain-ecarnot.com` est parfait : zéro tracker Google/YouTube, zéro script publicitaire tiers, zéro cookie externe.
   * Utiliser une balise `<video controls>` HTML5 native stylisée, sobre et ultra-rapide.
3. **Typographie d'accompagnement :**
   * Titre en Archivo grasse et condensée.
   * Texte explicatif et timestamps en Source Serif 4.
   * Code de temps et coordonnées en police monospace système.
4. **Accessibilité & Réduction de mouvement (`prefers-reduced-motion`) :**
   * Ne jamais déclencher l'autoplay avec son.
   * Si un autoplay en boucle est envisagé, il doit être strictement `muted`, `playsInline`, et immédiatement désactivable. Mais pour un showreel narratif de 33 secondes, un lancement volontaire par clic avec poster explicite est beaucoup plus digne et respectueux de l'attention du visiteur.

---

## 6. Checklist Opérationnelle pour le Jour J (Déploiement)

Lorsque la décision d'implémentation sera prise :
1. [ ] Extraire une image poster HD 1920x1080 au format WebP/JPG (`public/showreel-poster.jpg`).
2. [ ] Créer la route `src/app/showreel/page.tsx` avec les métadonnées SEO (< 70 car.) et le balisage Schema.org `VideoObject` + `BreadcrumbList`.
3. [ ] Ajouter l'entrée `<video:video>` dans `public/sitemap.xml`.
4. [ ] Mettre à jour `public/.well-known/ai-catalog.json`.
5. [ ] Mettre à jour `public/llms.txt` et `public/llms-full.txt`.
6. [ ] Mettre à jour `scripts/submit-indexnow.mjs` pour y inclure l'URL `/showreel`.
7. [ ] Exécuter `bun run indexnow` pour notifier instantanément Bing et IndexNow.
8. [ ] Valider avec les outils MCP `schema_validate` et `inspection_inspect`.
