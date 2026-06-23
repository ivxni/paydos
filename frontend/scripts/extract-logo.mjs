// logo.png ships as chrome-on-baked-checkerboard (no real alpha). Remove the
// connected light checkerboard background via a flood-fill from the borders
// (keeps the bright chrome highlights *inside* the mark), feather the edge,
// trim, and export a transparent WebP.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../../logo.png");
const OUT = path.resolve(__dirname, "../public/images/logo-mark.webp");

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({
  resolveWithObject: true,
});
const { width: W, height: H } = info;
const idx = (x, y) => (y * W + x) * 4;

// background-like = light & near-grey (the checkerboard squares)
const isBg = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return min >= 198 && max - min <= 24;
};

// Flood fill from the border.
const stack = [];
const seen = new Uint8Array(W * H);
const pushIf = (x, y) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const p = y * W + x;
  if (seen[p]) return;
  seen[p] = 1;
  stack.push(x, y);
};
for (let x = 0; x < W; x++) {
  pushIf(x, 0);
  pushIf(x, H - 1);
}
for (let y = 0; y < H; y++) {
  pushIf(0, y);
  pushIf(W - 1, y);
}
while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  const i = idx(x, y);
  if (!isBg(i)) continue;
  data[i + 3] = 0; // transparent
  pushIf(x + 1, y);
  pushIf(x - 1, y);
  pushIf(x, y + 1);
  pushIf(x, y - 1);
}

// Enclosed pockets the border fill can't reach: the checkerboard is perfectly
// neutral (r≈g≈b), while the chrome is faintly tinted — so a strict neutral+bright
// test clears the pockets without holing the chrome highlights.
for (let i = 0; i < data.length; i += 4) {
  if (data[i + 3] === 0) continue;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (min >= 206 && max - min <= 12) data[i + 3] = 0;
}

// Feather: knock back the bright matte fringe one ring in from transparency.
const copy = Uint8ClampedArray.from(data);
for (let y = 1; y < H - 1; y++) {
  for (let x = 1; x < W - 1; x++) {
    const i = idx(x, y);
    if (copy[i + 3] === 0) continue;
    const touchesBg =
      copy[idx(x + 1, y) + 3] === 0 ||
      copy[idx(x - 1, y) + 3] === 0 ||
      copy[idx(x, y + 1) + 3] === 0 ||
      copy[idx(x, y - 1) + 3] === 0;
    if (!touchesBg) continue;
    const v = Math.max(copy[i], copy[i + 1], copy[i + 2]);
    if (v >= 210) data[i + 3] = 0;
    else if (v >= 170) data[i + 3] = Math.round(((210 - v) / 40) * 255);
  }
}

await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .trim()
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(OUT);

const m = await sharp(OUT).metadata();
console.log("✓ logo-mark.webp", m.width + "x" + m.height, "alpha:", m.hasAlpha);
