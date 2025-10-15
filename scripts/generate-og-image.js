const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const WIDTH = 1200;
const HEIGHT = 630;
const PROFILE_IMAGE_URL = 'https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4';
const OUTPUT_PATH = path.join(__dirname, '../public/og-image.jpg');

// Fonction pour télécharger l'image de profil
async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    });
  });
}

// Créer l'image OpenGraph
async function generateOGImage() {
  console.log('📥 Téléchargement de la photo de profil...');
  const profileImageBuffer = await downloadImage(PROFILE_IMAGE_URL);

  console.log('🎨 Création de l\'image OpenGraph...');

  // Créer l'image de profil circulaire sans bordure
  const profileImage = await sharp(profileImageBuffer)
    .resize(220, 220)
    .composite([
      {
        input: Buffer.from(`
          <svg width="220" height="220">
            <circle cx="110" cy="110" r="110" fill="white"/>
          </svg>
        `),
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  // SVG du background avec dégradé
  const svgBackground = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Dégradé principal de l'app -->
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>

        <!-- Overlay subtle pour la profondeur -->
        <radialGradient id="overlay" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:white;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:white;stop-opacity:0" />
        </radialGradient>
      </defs>

      <!-- Background avec dégradé -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#mainGradient)"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#overlay)"/>

      <!-- Card glassmorphism centrale -->
      <rect x="100" y="120" width="1000" height="390" rx="24" fill="white" opacity="0.15"/>
      <rect x="100" y="120" width="1000" height="390" rx="24" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>

      <!-- Photo de profil placeholder (sera ajoutée via composite) -->

      <!-- Texte principal -->
      <text x="480" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="white" text-anchor="start">
        Romain Ecarnot
      </text>

      <!-- Sous-titre -->
      <text x="480" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="500" fill="white" opacity="0.95" text-anchor="start">
        Architecte Cloud &amp; Développeur
      </text>

      <!-- Ligne de séparation -->
      <line x1="480" y1="345" x2="780" y2="345" stroke="white" stroke-width="3" opacity="0.6"/>

      <!-- Message personnel -->
      <text x="480" y="395" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="white" opacity="0.9" text-anchor="start">
        Engagé dans la reprise professionnelle
      </text>
      <text x="480" y="430" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="white" opacity="0.9" text-anchor="start">
        après un AVC
      </text>

      <!-- URL en bas -->
      <text x="600" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="white" opacity="0.85" text-anchor="middle">
        www.romain-ecarnot.com
      </text>
    </svg>
  `;

  // Composer l'image finale
  await sharp(Buffer.from(svgBackground))
    .composite([
      {
        input: profileImage,
        top: 180,
        left: 180,
      }
    ])
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log('✅ Image OpenGraph générée avec succès:', OUTPUT_PATH);
}

// Exécuter
generateOGImage().catch(console.error);
