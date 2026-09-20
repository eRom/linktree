import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const MARKETPLACE_DIR = path.resolve(process.cwd(), "public/marketplace");

const files = fs.readdirSync(MARKETPLACE_DIR).filter((f) => f.endsWith(".png"));

console.log(`Trouvé ${files.length} images PNG à optimiser dans ${MARKETPLACE_DIR}...\n`);

let totalOriginal = 0;
let totalOptimized = 0;

for (const file of files) {
  const inputPath = path.join(MARKETPLACE_DIR, file);
  const baseName = path.basename(file, ".png");
  const outputPath = path.join(MARKETPLACE_DIR, `${baseName}.webp`);

  const statBefore = fs.statSync(inputPath);
  totalOriginal += statBefore.size;

  // Resize to 800px width (3:2 ratio -> 800x534), quality 82, sharp filter
  execSync(`cwebp -quiet -resize 800 0 -q 82 "${inputPath}" -o "${outputPath}"`);

  const statAfter = fs.statSync(outputPath);
  totalOptimized += statAfter.size;

  const reduction = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(1);
  const sizeBeforeKb = (statBefore.size / 1024 / 1024).toFixed(2);
  const sizeAfterKb = (statAfter.size / 1024).toFixed(0);

  console.log(`✓ ${baseName}: ${sizeBeforeKb} Mo → ${sizeAfterKb} Ko (-${reduction}%)`);
}

const totalReduction = (((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1);
console.log(`\nTotal : ${(totalOriginal / 1024 / 1024).toFixed(2)} Mo → ${(totalOptimized / 1024).toFixed(0)} Ko (-${totalReduction}%)`);
