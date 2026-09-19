import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve } from "path";

const sourcePath = "/Users/recarnot/.gemini/antigravity/brain/4993bdfd-4dab-46d5-913b-95d0bf20c3ae/.user_uploaded/media_1789818451936.jpg";
const publicDir = resolve(import.meta.dir, "../public");
const appDir = resolve(import.meta.dir, "../src/app");

function createIco(images: { width: number; height: number; data: Buffer }[]): Buffer {
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  let offset = headerSize + numImages * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const entries: Buffer[] = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.data)]);
}

async function main() {
  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  const width = metadata.width || 1009;
  const height = metadata.height || 946;
  const size = Math.min(width, height);
  const left = Math.round((width - size) / 2);
  const top = 0;

  console.log(`Cropping square: ${size}x${size} from (${left}, ${top})`);

  const squareImage = image.extract({ left, top, width: size, height: size });

  // 1. High-res Avatar for web display (800x800 jpg)
  await squareImage
    .clone()
    .resize(800, 800, { fit: "cover" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(resolve(publicDir, "avatar.jpg"));
  console.log("Generated public/avatar.jpg");

  // 2. PWA & Web App Icons
  await squareImage
    .clone()
    .resize(512, 512)
    .png()
    .toFile(resolve(publicDir, "icon-512.png"));
  console.log("Generated public/icon-512.png");

  await squareImage
    .clone()
    .resize(192, 192)
    .png()
    .toFile(resolve(publicDir, "icon-192.png"));
  console.log("Generated public/icon-192.png");

  await squareImage
    .clone()
    .resize(180, 180)
    .png()
    .toFile(resolve(publicDir, "apple-touch-icon.png"));
  console.log("Generated public/apple-touch-icon.png");

  await squareImage
    .clone()
    .resize(512, 512)
    .png()
    .toFile(resolve(publicDir, "icon.png"));
  console.log("Generated public/icon.png");

  // 3. Favicon PNGs
  const png32 = await squareImage
    .clone()
    .resize(32, 32)
    .png()
    .toBuffer();
  writeFileSync(resolve(publicDir, "favicon-32x32.png"), png32);
  console.log("Generated public/favicon-32x32.png");

  const png16 = await squareImage
    .clone()
    .resize(16, 16)
    .png()
    .toBuffer();
  writeFileSync(resolve(publicDir, "favicon-16x16.png"), png16);
  console.log("Generated public/favicon-16x16.png");

  // 4. Multi-res favicon.ico in src/app/
  const icoBuffer = createIco([
    { width: 32, height: 32, data: png32 },
    { width: 16, height: 16, data: png16 },
  ]);
  writeFileSync(resolve(appDir, "favicon.ico"), icoBuffer);
  console.log("Generated src/app/favicon.ico");

  console.log("All icons and avatar generated successfully!");
}

main().catch(console.error);
