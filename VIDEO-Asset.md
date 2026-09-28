# Showreel « Sans détour » : note technique

Page en ligne : `https://www.romain-ecarnot.com/showreel`.
Source de vérité des textes (chapitres, transcription, URLs) : `src/data/showreel.ts`. Cette note ne recopie pas ces données, elle explique les choix.

## Les deux fichiers

Même montage, deux cadrages, servis par `video.romain-ecarnot.com` (Cloudflare).

| | Paysage | Portrait |
| :--- | :--- | :--- |
| URL | `https://video.romain-ecarnot.com/sans-detour-v4.mp4` | `https://video.romain-ecarnot.com/sans-detour-portrait-v5.mp4` |
| Résolution | 1920 x 1080 (16:9) | 1080 x 1920 (9:16) |
| Durée | 33,0 s | 33,0 s |
| Poids | 27,6 Mo | 21,8 Mo |
| Affiché | à partir de 64rem | en dessous de 64rem |

Vérifié au `ffprobe` et au `curl -I` le 28/09/2026 (fichiers publiés le 28/09/2026 à 14:27 UTC).

## Chronologie réelle

Relevée image par image sur les deux fichiers (planches à une image par seconde), les deux cadrages sont synchrones.

| Timecode | Ce qu'on voit |
| :--- | :--- |
| 00:00 - 00:05 | Invite de commande : `romain --reboot` |
| 00:05 - 00:12 | Le parcours : Flash (2000), 3D (2006), Bbox TV (2013), AWS (2018), OPEN (2020), CTO et DPO (2021), Cloud (2023) |
| 00:12 - 00:15 | « 2025. Un AVC. Tout s'arrête. » puis « REBOOT. » |
| 00:15 - 00:18 | Réapprendre, Observer, Construire |
| 00:18 - 00:22 | L'atelier : graphe Claude, Gemini, Mistral, DeepSeek, Kimi, GLM |
| 00:22 - 00:24 | Cruchot (2026), 9 plugins |
| 00:24 - 00:33 | « Il est prêt. » puis « Romain Ecarnot, sans détour. », portrait tramé, QR code vers le CV |

La première version de cette note, rédigée sans regarder la vidéo, annonçait une autre chronologie (Bbox TV en 2011, cinq actes). Elle était fausse : ne pas s'en resservir.

## Choix d'intégration

- **Rien ne se télécharge avant le clic.** La page affiche une affiche, la balise `<video>` n'est créée qu'au clic. Pas de lecture automatique.
- **Une seule source téléchargée.** Deux `<source media="...">` au seuil 64rem, le même que la mise en page (`lg`). Le choix se fait au chargement : redimensionner la fenêtre ensuite ne change pas de fichier.
- **Deux affiches**, tirées de la dernière image du film (31 s) : `public/showreel-poster-16-9.jpg` et `public/showreel-poster-9-16.jpg`, choisies par `<picture>`.
- **Chapitres cliquables** à côté du lecteur ; `?t=<secondes>` prépare la lecture à ce point (sert aux `Clip` Schema.org).
- **Sur téléphone**, le bandeau « Lire le film » passe au-dessus de l'affiche pour rester visible sans défiler.

## Référencement

- `VideoObject` (deux `encoding`, `transcript`, un `Clip` par chapitre) dans `src/app/showreel/page.tsx`.
- Extension `video:` dans `public/sitemap.xml`.
- Section showreel dans `public/llms.txt`, `public/llms-full.txt` et une entrée dans `public/.well-known/ai-catalog.json`.
- Outil WebMCP `get_showreel` dans `src/components/WebMcpTools.tsx`.
- `/showreel` ajouté à `scripts/submit-indexnow.mjs`.

## Si la vidéo change

1. Mettre à jour `src/data/showreel.ts` (URLs, poids, chapitres, transcription, date).
2. Régénérer les affiches : `ffmpeg -ss 31 -i <url> -frames:v 1 -q:v 4 public/showreel-poster-16-9.jpg` (idem en portrait).
3. Reporter les URLs et poids dans `public/llms.txt`, `public/llms-full.txt`, `public/.well-known/ai-catalog.json` et `public/sitemap.xml`.
4. Pousser, puis `bun run indexnow`.
