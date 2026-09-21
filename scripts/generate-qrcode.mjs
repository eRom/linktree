import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const URL = "https://www.romain-ecarnot.com";
const OUTPUT_PATH = join(import.meta.dir, "../public/qrcode.svg");

console.log(`📱 Génération du QR Code pour ${URL}...`);

// Exécute qrencode pour produire un SVG optimisé avec RLE
execSync(`qrencode -o "${OUTPUT_PATH}" -t SVG -l M -m 2 --rle "${URL}"`);

// Optimise les attributs SVG pour un affichage net et responsive
let content = readFileSync(OUTPUT_PATH, "utf-8");
content = content.replace(
  /<svg [^>]*viewBox="([^"]*)"[^>]*>/,
  '<svg viewBox="$1" version="1.1" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">'
);

writeFileSync(OUTPUT_PATH, content, "utf-8");
console.log(`✅ QR Code généré dans ${OUTPUT_PATH}`);
