import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const AVATAR_PATH = path.join(import.meta.dir, '../public/avatar.jpg');
const OUTPUT_PATH = path.join(import.meta.dir, '../public/og-image.jpg');

async function generateOGImage() {
  console.log('🎨 Création de la nouvelle image OpenGraph...');

  // 1. Préparer l'avatar circulaire avec bordure
  const AVATAR_SIZE = 240;
  const avatarBuffer = fs.readFileSync(AVATAR_PATH);

  const circularAvatar = await sharp(avatarBuffer)
    .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}">
            <circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="white"/>
          </svg>
        `),
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  // 2. SVG Background & Typography (Dark Épuré Linear/Vercel style)
  const svgContent = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Top ambient glow -->
        <radialGradient id="topGlow" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stop-color="#3b3b44" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
        </radialGradient>

        <!-- Subtle Card gradient -->
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#18181b" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#111113" stop-opacity="0.9"/>
        </linearGradient>

        <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f3f46" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#27272a" stop-opacity="0.3"/>
        </linearGradient>
      </defs>

      <!-- Base background #09090b -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#09090b"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#topGlow)"/>

      <!-- Central Card -->
      <rect x="70" y="75" width="1060" height="480" rx="24" fill="url(#cardGrad)"/>
      <rect x="70" y="75" width="1060" height="480" rx="24" fill="none" stroke="url(#cardBorder)" stroke-width="1.5"/>

      <!-- Avatar Ring (Center of avatar is at 130 + 120 = 250, 195 + 120 = 315) -->
      <circle cx="250" cy="315" r="126" fill="none" stroke="#27272a" stroke-width="2"/>
      <circle cx="250" cy="315" r="130" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.5"/>

      <!-- Active Green Status Dot (bottom-right of avatar) -->
      <circle cx="338" cy="403" r="14" fill="#10b981" stroke="#18181b" stroke-width="4"/>

      <!-- Header Label / Domain -->
      <g transform="translate(420, 155)">
        <rect width="190" height="32" rx="16" fill="#27272a" opacity="0.6"/>
        <circle cx="16" cy="16" r="4" fill="#10b981"/>
        <text x="30" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#a1a1aa" letter-spacing="0.5">
          romain-ecarnot.com
        </text>
      </g>

      <!-- Main Title -->
      <text x="420" y="255" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" fill="#fafafa" letter-spacing="-1">
        Romain Ecarnot
      </text>

      <!-- Subtitle -->
      <text x="420" y="315" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="27" font-weight="500" fill="#d4d4d8">
        Passeur du numérique &amp; Architecte du simple
      </text>

      <!-- Tagline / Accompagnement -->
      <text x="420" y="365" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#71717a">
        Accompagnement aux usages du numérique et de l&apos;IA
      </text>

      <!-- Bottom Badges (Links) -->
      <g transform="translate(420, 425)">
        <!-- CV Badge -->
        <rect x="0" y="0" width="105" height="36" rx="10" fill="#27272a" opacity="0.5"/>
        <rect x="0" y="0" width="105" height="36" rx="10" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.6"/>
        <text x="52" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#e4e4e7" text-anchor="middle">
          Mon CV
        </text>

        <!-- LinkedIn Badge -->
        <rect x="120" y="0" width="105" height="36" rx="10" fill="#27272a" opacity="0.5"/>
        <rect x="120" y="0" width="105" height="36" rx="10" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.6"/>
        <text x="172" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#e4e4e7" text-anchor="middle">
          LinkedIn
        </text>

        <!-- GitHub Badge -->
        <rect x="240" y="0" width="105" height="36" rx="10" fill="#27272a" opacity="0.5"/>
        <rect x="240" y="0" width="105" height="36" rx="10" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.6"/>
        <text x="292" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#e4e4e7" text-anchor="middle">
          GitHub
        </text>

        <!-- Tipeee Badge -->
        <rect x="360" y="0" width="105" height="36" rx="10" fill="#27272a" opacity="0.5"/>
        <rect x="360" y="0" width="105" height="36" rx="10" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.6"/>
        <text x="412" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#e4e4e7" text-anchor="middle">
          Tipeee
        </text>
      </g>
    </svg>
  `;

  // 3. Composer l'image finale
  await sharp(Buffer.from(svgContent))
    .composite([
      {
        input: circularAvatar,
        top: 195,
        left: 130,
      }
    ])
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log('✅ Image OpenGraph générée avec succès:', OUTPUT_PATH);
}

generateOGImage().catch(console.error);
