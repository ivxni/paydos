// One-off asset pipeline: optimize the lounge photography + logo into
// web-ready files under public/images. Run with: node scripts/optimize-images.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../../Images");
const OUT = path.resolve(__dirname, "../public/images");

// source file -> semantic output name (without extension)
const PHOTOS = {
  "IMG_5579.jpg": "lounge-purple", // purple-lit lounge w/ game tables — hero
  "IMG_0259.jpg": "terrace-lights", // string-light terrace at night
  "IMG_0261.jpg": "terrace-tables", // terrace tables / lanterns
  "IMG_5586.jpg": "cocktail-red", // moody single cocktail
  "IMG_4968.jpg": "okey-room", // okey gaming room
  "IMG_4972.jpg": "bar-sign", // illuminated PAYDOS bar sign
  "IMG_5576.jpg": "neon-paydos", // purple neon "Oh Baby / PAYDOS"
  "IMG_0340.jpg": "cocktails-bar", // red mojitos at the bar
  "IMG_0268.jpg": "drinks-daylight", // drinks + shisha, daylight terrace
  "IMG_6398.jpg": "bar-detail", // bar shelves / glassware detail
  "IMG_4969.jpg": "bar-tulips", // bar counter w/ tulips
};

const MAX = 2000; // cap longest edge — next/image derives responsive sizes from this

async function run() {
  await fs.mkdir(OUT, { recursive: true });

  for (const [src, name] of Object.entries(PHOTOS)) {
    const input = path.join(SRC, src);
    const output = path.join(OUT, `${name}.webp`);
    await sharp(input)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(output);
    const { size } = await fs.stat(output);
    console.log(`✓ ${name}.webp  (${(size / 1024).toFixed(0)} KB)`);
  }

  // NOTE: the supplied Logo.png has a baked-in checkerboard (no alpha),
  // so it can't sit on dark surfaces. The site uses a typographic
  // wordmark instead. Swap in a transparent logo here later if provided.

  // Open Graph image (1200x630) — darkened lounge photo + clean SVG wordmark.
  const ogBase = await sharp(path.join(SRC, "IMG_5579.jpg"))
    .rotate()
    .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
    .modulate({ brightness: 0.55 })
    .toBuffer();

  const ogText = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FDFDFE"/>
          <stop offset="46%" stop-color="#B7BCC4"/>
          <stop offset="100%" stop-color="#7C808A"/>
        </linearGradient>
        <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stop-color="rgba(6,6,8,0)"/>
          <stop offset="100%" stop-color="rgba(6,6,8,0.85)"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#scrim)"/>
      <text x="600" y="300" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="148"
        font-weight="600" letter-spacing="-2" fill="url(#sil)">Paydos</text>
      <text x="600" y="372" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="30"
        letter-spacing="14" fill="#D2D6DC">SHISHA &amp; OKEY LOUNGE</text>
      <text x="600" y="446" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="26"
        letter-spacing="2" fill="#A9AEB6">Marbach am Neckar</text>
    </svg>`);

  await sharp(ogBase)
    .composite([{ input: ogText, gravity: "centre" }])
    .jpeg({ quality: 86 })
    .toFile(path.join(OUT, "og-image.jpg"));
  console.log("✓ og-image.jpg");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
