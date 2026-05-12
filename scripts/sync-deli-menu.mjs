/**
 * Même source que le site de commande (slug marchand = delis-corner).
 * Écrit lib/delicity-product-images.json (nom produit → image + tarif retrait).
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { request } from "node:https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../lib/delicity-product-images.json");

function postJson(url, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(body);
    const req = request(
      {
        hostname: u.hostname,
        path: u.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
          Origin: "https://deliscorner.com",
        },
      },
      (res) => {
        let b = "";
        res.on("data", (c) => (b += c));
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${b.slice(0, 200)}`));
            return;
          }
          try {
            resolve(JSON.parse(b));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

const j = await postJson("https://api.delicity.co/api/front/merchant/menu", {
  slug: "delis-corner",
  timestamp: Date.now(),
});

if (!j.success) {
  console.error("API error", j);
  process.exit(1);
}

const out = {};
for (const cat of j.menu) {
  for (const p of cat.products || []) {
    const name = (p.name || "").trim();
    if (!name) {
      continue;
    }
    let path = p.imageLarge?.path || p.imageSmall?.path || "";
    path = (path || "").trim();
    const price = p.pricePickup || p.priceOnsite;
    out[name] = {
      image: path ? `${path}?width=900&aspect_ratio=4:3&format=webp` : null,
      price: price ? String(price.price).replace("\u00a0", " ") : null,
    };
  }
}

writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");
console.log("Wrote", Object.keys(out).length, "products →", outPath);
