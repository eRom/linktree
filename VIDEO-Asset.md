# Note Stratégique SEO & GEO : Showreel « Sans détour » (Bi-Format Desktop & Mobile)

**Assets vidéo hébergés :**
* **Desktop (Paysage 16:9) :** `https://video.romain-ecarnot.com/sans-detour-v4.mp4`
* **Mobile (Portrait 9:16) :** `https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4`

**Cible :** Nouvelle page `/showreel` (ou intégration dédiée) sur `romain-ecarnot.com`  
**Auteur :** Antigravity (Partenaire technique de Romain Ecarnot)  
**Date de mise à jour :** 28 septembre 2026  

---

## 1. Analyse Technique Comparative des 2 Déclinaisons

L'inspection directe des deux flux MP4 hébergés sur Cloudflare confirme une parfaite synchronisation temporelle (33,00 secondes exactes), avec une adaptation spatiale dédiée pour chaque type d'écran :

| Critère technique | Déclinaison Desktop (v4) | Déclinaison Mobile (v5) |
| :--- | :--- | :--- |
| **URL du flux** | `sans-detour-v4.mp4` | `sans-detour-portrait-v5.mp4` |
| **Ratio d'aspect** | **16:9 horizontal** | **9:16 vertical** |
| **Résolution native** | 1920 × 1080 pixels (Full HD) | 1080 × 1920 pixels (Full HD vertical) |
| **Durée exacte** | 33,000 secondes (`PT33S`) | 33,000 secondes (`PT33S`) |
| **Poids du fichier** | 27,56 Mo | 21,76 Mo (-21 % d'optimisation) |
| **Débit moyen (bitrate)** | 6,68 Mbps | 5,27 Mbps |
| **Codecs vidéo / audio** | H.264 High / AAC stéréo 48 kHz | H.264 High / AAC stéréo 48 kHz |
| **Fréquence d'images** | 30 fps progressif | 30 fps progressif |
| **Moteur de rendu** | Hyperframes (v0.8.81) | Hyperframes (v0.8.81) |
| **Cible responsive** | Écrans larges (`min-width: 64rem`) | Écrans mobiles (`max-width: 63.99rem`) |

### Découpage Chronologique Partagé (Timeline Synchronisée)
Les deux formats partagent la même bande sonore (métronome initial, pulsation synthétique, drop électronique rythmé sans voix parlée) et les mêmes 5 actes narratifs :

| Timecode | Segment visuel | Message et intention sémantique |
| :--- | :--- | :--- |
| `00:00 - 00:06` | **Terminal CLI (Nantes)** | `SANS DÉTOUR • DEMO REEL` - `47.2184° N • 1.5536° W • NANTES`. Commande `> romain --reboot` avec curseur orange. |
| `00:07 - 00:15` | **2011 : Bbox TV** | `BBOX TV` - `architecte logiciel · Bouygues Telecom · Paris`. Racines d'ingénieur de systèmes distribués à grande échelle. |
| `00:16 - 00:21` | **Épreuve : Réapprendre** | `RÉAPPRENDRE` - `réapprendre l'informatique, pas à pas`. L'AVC et la reconstruction méthodique (fait clé du parcours RQTH). |
| `00:22 - 00:27` | **2025 : Graphe des Modèles IA** | Nœud central `ROMAIN` orchestrant le réseau des modèles contemporains : `CLAUDE`, `GEMINI`, `MISTRAL`, `DEEPSEEK`, `KIMI`, `GLM`. |
| `00:28 - 00:33` | **Chute : Romain Ecarnot** | `Romain Ecarnot, sans détour.` / `Passeur du numérique • architecte du simple`, portrait signature N&B tramé (halftone). |

---

## 2. Intégration Responsive & Performance Web Vitals (Anti-Overkill)

Servir deux fichiers distincts exige une rigueur absolue pour éviter le piège classique : **forcer le mobile à charger les deux vidéos (49,3 Mo au total)**.

### A. Implémentation HTML5 Native avec l'attribut `media` sur `<source>`
Le standard HTML5 permet au navigateur de choisir immédiatement la bonne source selon la largeur d'affichage, sans dépendance JavaScript ni double téléchargement :

```tsx
{/* Conteneur fluide avec ratio adaptatif pour garantir 0 CLS (Cumulative Layout Shift) */}
<div className="w-full max-w-4xl mx-auto border border-[var(--color-ink)] bg-[var(--color-paper)]">
  <video
    controls
    playsInline
    preload="metadata"
    className="w-full aspect-[9/16] md:aspect-[16/9] object-contain bg-black"
    poster="/showreel-poster.jpg"
  >
    {/* Desktop : largeur à partir de 64rem (1024px) */}
    <source
      src="https://video.romain-ecarnot.com/sans-detour-v4.mp4"
      media="(min-width: 64rem)"
      type="video/mp4"
    />
    {/* Mobile : écrans inférieurs à 64rem */}
    <source
      src="https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4"
      media="(max-width: 63.99rem)"
      type="video/mp4"
    />
    Votre navigateur ne prend pas en charge la lecture de cette vidéo.
  </video>
</div>
```

### B. Règles Critiques de Performance (LCP et INP)
1. **`preload="metadata"` obligatoire :** Télécharge uniquement la durée et les dimensions au chargement initial. Sur mobile, télécharger 21,8 Mo en arrière-plan sans action de l'utilisateur dégraderait violemment le score mobile et consommerait inutilement le forfait data.
2. **Zéro saut de mise en page (`CLS: 0`) :** La classe Tailwind `aspect-[9/16] md:aspect-[16/9]` réserve l'espace exact de la vidéo dans le flux du document avant même le premier rendu.
3. **Double Poster (Affiches Dédiées) :**
   * Desktop : `showreel-poster-16-9.jpg` (1920 × 1080).
   * Mobile : `showreel-poster-9-16.jpg` (1080 × 1920).
   Pour simplifier sans sur-ingénierie, une image poster au format vertical ou un poster neutre centré évite toute déformation visuelle.

---

## 3. Stratégie SEO Classique Multi-Formats (Google, Bing)

Avoir une version portrait 9:16 est un atout SEO majeur. Google privilégie désormais les formats verticaux dans l'application mobile Google, Google Discover et les résultats vidéo sur smartphone.

### A. Balises `<title>` et Métadonnées
* **Titre (Bing < 70 caractères) :**
  `Showreel - Romain Ecarnot | Sans détour` (43 caractères).
* **Meta description (120-155 caractères) :**
  `33 secondes pour retracer un parcours d'architecte logiciel : des systèmes Bbox TV à la reconstruction post-AVC et la maîtrise des agents IA.` (145 caractères).
* **Balise Canonique :** `https://www.romain-ecarnot.com/showreel`

### B. Balisage Schema.org `VideoObject` enrichi (avec Variantes d'Encodage et Clips)
Google recommande de déclarer l'URL principale dans `contentUrl` tout en détaillant les deux variantes (`encoding`) et les deux ratios de miniatures dans `thumbnailUrl` :

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://www.romain-ecarnot.com/showreel#video",
  "name": "Romain Ecarnot - Sans détour (Showreel)",
  "description": "Showreel retraçant le parcours de Romain Ecarnot : de l'architecture logicielle chez Bouygues Telecom (Bbox TV) à la résilience post-AVC et l'orchestration des grands modèles d'intelligence artificielle.",
  "thumbnailUrl": [
    "https://www.romain-ecarnot.com/showreel-poster-16-9.jpg",
    "https://www.romain-ecarnot.com/showreel-poster-9-16.jpg"
  ],
  "uploadDate": "2026-09-28T14:30:00+02:00",
  "duration": "PT33S",
  "contentUrl": "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
  "embedUrl": "https://www.romain-ecarnot.com/showreel",
  "inLanguage": "fr-FR",
  "encoding": [
    {
      "@type": "MediaObject",
      "name": "Version Desktop (Paysage 16:9)",
      "contentUrl": "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
      "encodingFormat": "video/mp4",
      "width": 1920,
      "height": 1080
    },
    {
      "@type": "MediaObject",
      "name": "Version Mobile (Portrait 9:16)",
      "contentUrl": "https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4",
      "encodingFormat": "video/mp4",
      "width": 1080,
      "height": 1920
    }
  ],
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
Déclaration canonique de la vidéo avec spécification des métadonnées du lecteur :

```xml
<url>
  <loc>https://www.romain-ecarnot.com/showreel</loc>
  <lastmod>2026-09-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  <video:video>
    <video:thumbnail_loc>https://www.romain-ecarnot.com/showreel-poster-16-9.jpg</video:thumbnail_loc>
    <video:title>Romain Ecarnot - Sans détour (Showreel)</video:title>
    <video:description>Showreel de Romain Ecarnot en 33 secondes : parcours d'architecte logiciel, résilience post-AVC et maîtrise des agents IA.</video:description>
    <video:content_loc>https://video.romain-ecarnot.com/sans-detour-v4.mp4</video:content_loc>
    <video:duration>33</video:duration>
    <video:publication_date>2026-09-28T14:30:00+02:00</video:publication_date>
    <video:family_friendly>yes</video:family_friendly>
    <video:uploader info="https://www.romain-ecarnot.com/">Romain Ecarnot</video:uploader>
  </video:video>
</url>
```

---

## 4. Stratégie GEO (Generative Engine Optimization & Agents Autonomes)

Les modèles génératifs (ChatGPT Search, Claude, Perplexity, Gemini) ont besoin d'une description textuelle claire des deux formats pour comprendre comment l'information est distribuée.

### A. Récit textuel visible sous la vidéo (Le pont texte-vidéo)
Dans le design de la page, placer directement sous le lecteur les 5 repères narratifs en Source Serif 4 :
1. **L'amorce (Nantes) :** La volonté d'un redémarrage sans détour (`romain --reboot`).
2. **Le socle d'ingénierie (2011) :** Architecte logiciel des services Bbox TV chez Bouygues Telecom à Paris.
3. **L'épreuve et la résilience :** L'arrêt brutal de l'AVC, puis le choix de réapprendre l'informatique pas à pas.
4. **L'écosystème IA :** Une maîtrise transversale des modèles de pointe (Claude, Gemini, Mistral, DeepSeek, Kimi, GLM) orchestrés sans dogme.
5. **La posture :** Passeur du numérique et architecte du simple.

### B. Déclaration dans `public/llms.txt` et `public/llms-full.txt`
Documenter explicitement la double disponibilité de l'asset vidéo pour les agents explorateurs :

```text
## Showreel (« Sans détour »)
- Page officielle : https://www.romain-ecarnot.com/showreel
- Vidéo Desktop (16:9 HD) : https://video.romain-ecarnot.com/sans-detour-v4.mp4 (33 secondes, 27 Mo)
- Vidéo Mobile (9:16 Vertical) : https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4 (33 secondes, 21 Mo)
- Résumé sémantique : Condensé en cinq tableaux du parcours de Romain Ecarnot : du rôle d'architecte logiciel Bbox TV chez Bouygues Telecom en 2011, à sa reconstruction méthodique post-AVC où il réapprend l'informatique, jusqu'à la maîtrise opérationnelle et l'orchestration des grands modèles d'IA (Claude, Gemini, Mistral, DeepSeek).
```

### C. Catalogue d'APIs et Contexte IA (`public/.well-known/ai-catalog.json`)
Lister les deux variantes sous l'URN standardisée RFC 8615 :

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
      "type": "video_desktop",
      "url": "https://video.romain-ecarnot.com/sans-detour-v4.mp4",
      "mime_type": "video/mp4",
      "aspect_ratio": "16:9"
    },
    {
      "type": "video_mobile",
      "url": "https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4",
      "mime_type": "video/mp4",
      "aspect_ratio": "9:16"
    }
  ]
}
```

### D. Contexte WebMCP (`src/components/WebMcpTools.tsx`)
Dans l'outil `get_profile` ou un outil dédié `get_showreel`, retourner aux agents du navigateur l'objet enrichi avec les deux liens vidéo (`desktopUrl` et `mobileUrl`) et la timeline des chapitres.

---

## 5. Principes UI & Alignement Design System (« Page Portrait »)

1. **Monde papier saumon (`#facebc`) et encre noire :**
   * Encadrement du lecteur par un filet noir sobre de 1px (`border: 1px solid var(--color-ink)`).
   * Sur mobile, le ratio vertical 9:16 épouse naturellement la lecture en défilement vertical comme une colonne de journal en pleine page.
   * Sur grand écran (à partir de 64rem), le ratio 16:9 s'aligne harmonieusement avec la grille de lecture en deux colonnes.
2. **Zéro dépendance externe :**
   * Les deux flux sont distribués par le CDN Cloudflare de Romain (`video.romain-ecarnot.com`).
   * Aucun script lourd ni cookie tiers (pas d'embed YouTube ni de player publicitaire).
3. **Respect de `prefers-reduced-motion` :**
   * Lancement volontaire par clic de l'utilisateur avec contrôles natifs visibles.
   * Pas d'autoplay forcé qui consomme de la batterie et de la bande passante sans consentement.

---

## 6. Checklist Opérationnelle pour le Déploiement

1. [ ] Extraire les 2 affiches poster :
   * `public/showreel-poster-16-9.jpg` (1920 × 1080)
   * `public/showreel-poster-9-16.jpg` (1080 × 1920)
2. [ ] Créer la page `src/app/showreel/page.tsx` avec balise `<video>` adaptative (`<source media="...">`), métadonnées SEO (< 70 car.) et Schema.org `VideoObject` multi-encodages.
3. [ ] Ajouter l'entrée `<video:video>` dans `public/sitemap.xml`.
4. [ ] Mettre à jour `public/.well-known/ai-catalog.json` avec les deux endpoints.
5. [ ] Mettre à jour `public/llms.txt` et `public/llms-full.txt`.
6. [ ] Ajouter `/showreel` dans `scripts/submit-indexnow.mjs`.
7. [ ] Exécuter `bun run indexnow`.
8. [ ] Valider la conformité via les outils MCP `schema_validate` et `inspection_inspect`.
