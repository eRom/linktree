// Génère public/og-image.jpg (1200x630) dans le monde « page Portrait » :
// une page HTML rendue par Chrome headless via le protocole DevTools, sans dépendance.
// Usage : bun scripts/generate-og-image.mjs   (CHROME_PATH pour un autre binaire que Chrome macOS)
import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const WIDTH = 1200;
const HEIGHT = 630;
const PORT = 9334;
const CHROME_PATH =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORTRAIT_PATH = path.join(import.meta.dir, '../public/portrait.jpg');
const OUTPUT_PATH = path.join(import.meta.dir, '../public/og-image.jpg');

const PAPER = '#facebc';
const INK = '#1c1411';
const INK_SOFT = '#584239';

function buildHtml(portraitDataUri) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Source+Serif+4:opsz,wght@8..60,200..900&display=block" rel="stylesheet">
<style>
  html, body { margin: 0; width: ${WIDTH}px; height: ${HEIGHT}px; background: ${PAPER}; color: ${INK}; }
  body { box-sizing: border-box; padding: 38px 56px 46px; display: flex; flex-direction: column; font-family: 'Source Serif 4', serif; }
  .folio { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 12px;
    font: 650 15px/1 'Archivo', sans-serif; font-variation-settings: 'wdth' 88; letter-spacing: .07em; text-transform: uppercase; }
  .rule { height: 9px; box-sizing: border-box; border-top: 4px solid ${INK}; border-bottom: 1.5px solid ${INK}; }
  .main { flex: 1; min-height: 0; display: grid; grid-template-columns: 392px 1fr; gap: 52px; margin-top: 30px; }
  .photo { background: #777 url(${portraitDataUri}) 37% 35% / cover no-repeat; }
  .text { display: flex; flex-direction: column; justify-content: space-between; }
  h1 { margin: 0; font: 900 104px/.9 'Archivo', sans-serif; font-variation-settings: 'wdth' 70; letter-spacing: -.012em; }
  .deck { margin: 24px 0 0; max-width: 30ch; font: 600 28px/1.28 'Source Serif 4', serif; font-optical-sizing: auto; }
  .foot { display: flex; justify-content: space-between; align-items: baseline; border-top: 1.5px solid ${INK}; padding-top: 12px;
    font: 500 17px/1.2 'Archivo', sans-serif; font-variation-settings: 'wdth' 92; color: ${INK_SOFT}; }
  .foot strong { color: ${INK}; font-weight: 750; }
</style>
</head>
<body>
  <div class="folio"><span>romain-ecarnot.com</span><span>Portrait</span></div>
  <div class="rule"></div>
  <div class="main">
    <div class="photo"></div>
    <div class="text">
      <div>
        <h1>Romain Ecarnot,<br>sans détour.</h1>
        <p class="deck">Passeur du numérique &amp; Architecte du simple. Accompagnement aux usages du numérique et de l&rsquo;IA.</p>
      </div>
      <div class="foot"><span><strong>Le CV complet</strong> · cv.romain-ecarnot.com</span><span>Nantes, France</span></div>
    </div>
  </div>
</body>
</html>`;
}

async function pageSocketUrl() {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const pages = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = pages.find((entry) => entry.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      // Chrome démarre encore.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`Chrome headless injoignable (${CHROME_PATH})`);
}

async function generateOGImage() {
  console.log('Création de l\'image OpenGraph (monde page Portrait)...');

  const workDir = mkdtempSync(path.join(tmpdir(), 'og-image-'));
  const htmlPath = path.join(workDir, 'og.html');
  const portraitDataUri = `data:image/jpeg;base64,${readFileSync(PORTRAIT_PATH).toString('base64')}`;
  writeFileSync(htmlPath, buildHtml(portraitDataUri));

  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${path.join(workDir, 'profile')}`,
    '--hide-scrollbars',
    '--no-first-run',
    'about:blank',
  ]);

  try {
    const socket = new WebSocket(await pageSocketUrl());
    await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));

    let nextId = 1;
    const pending = new Map();
    let onLoad = null;
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(String(event.data));
      if (message.id && pending.has(message.id)) {
        pending.get(message.id)(message.result);
        pending.delete(message.id);
      } else if (message.method === 'Page.loadEventFired' && onLoad) {
        onLoad();
      }
    });
    const send = (method, params = {}) => {
      const id = nextId++;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve) => pending.set(id, resolve));
    };

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
    });
    const loaded = new Promise((resolve) => (onLoad = resolve));
    await send('Page.navigate', { url: `file://${htmlPath}` });
    await loaded;
    await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });

    const shot = await send('Page.captureScreenshot', {
      format: 'jpeg',
      quality: 90,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 },
    });
    writeFileSync(OUTPUT_PATH, Buffer.from(shot.data, 'base64'));
    socket.close();
  } finally {
    chrome.kill();
  }

  console.log('Image OpenGraph générée :', OUTPUT_PATH);
}

generateOGImage().catch((error) => {
  console.error(error);
  process.exit(1);
});
