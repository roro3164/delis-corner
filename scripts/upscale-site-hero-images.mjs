/**
 * Agrandit les PNG « hero » et bloc lieu si la source est trop petite (réduit la pixelisation en plein écran).
 * Utilise sharp (Lanczos + léger sharpen) — pas d’IA ; pour un rendu optimal, repartir d’un export photo HD.
 *
 * Usage : npm run upscale:site-images -w @rdc/delis-corner
 */
import { existsSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/** Largeur cible (px) pour un bandeau pleine largeur confortable sur desktop / Retina. */
const TARGET_WIDTH = 2560;

/** Ne pas regrossir au-delà de cette largeur (limite poids / mémoire). */
const MAX_WIDTH = 3840;

const FILES = [
  "public/images/site/hero-main.png",
  "public/images/site/about-main.png",
  "public/images/site/footer-banner.png",
];

async function upscaleOne(relativePath) {
  const abs = join(root, relativePath);
  if (!existsSync(abs)) {
    console.warn(`Absent, ignoré : ${relativePath}`);
    return;
  }

  const meta = await sharp(abs).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (!w || !h) {
    console.warn(`Pas de dimensions : ${relativePath}`);
    return;
  }

  if (w >= TARGET_WIDTH) {
    console.log(`OK déjà large (${w}px) : ${relativePath}`);
    return;
  }

  let outW = TARGET_WIDTH;
  let outH = Math.round((h / w) * TARGET_WIDTH);
  if (outW > MAX_WIDTH) {
    outW = MAX_WIDTH;
    outH = Math.round((h / w) * MAX_WIDTH);
  }

  await sharp(abs)
    .resize(outW, outH, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    .sharpen({ sigma: 0.65, m1: 0.55, m2: 2.2 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(abs + ".tmp");

  renameSync(abs + ".tmp", abs);

  console.log(`Mis à jour ${relativePath} : ${w}×${h} → ${outW}×${outH}`);
}

async function main() {
  for (const f of FILES) {
    await upscaleOne(f);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
