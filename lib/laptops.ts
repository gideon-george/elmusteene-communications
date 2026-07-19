/**
 * Laptops & Computers for Sale — one JSON file per unit in content/laptops/,
 * created and edited by the owner through the /admin content manager.
 *
 * IMPORTANT (honesty rule): only what is visible in the photos is described.
 * `specs` and `price` stay empty until the owner confirms real details.
 *
 * Server-only (reads the filesystem at build time): pages call getLaptops()
 * and pass the result to client components as props. Client components may
 * `import type { Laptop }` — type imports are erased at compile time.
 */

import fs from "node:fs";
import path from "node:path";

export type Laptop = {
  /** Neutral, visible-brand-only label (no invented model claims). */
  name: string;
  image: string;
  alt: string;
  specs?: string;
  price?: string;
  /** Lower numbers show first in the gallery. */
  order?: number;
};

const LAPTOPS_DIR = path.join(process.cwd(), "content", "laptops");

export function getLaptops(): Laptop[] {
  if (!fs.existsSync(LAPTOPS_DIR)) return [];
  return fs
    .readdirSync(LAPTOPS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = JSON.parse(
        fs.readFileSync(path.join(LAPTOPS_DIR, f), "utf8")
      ) as Laptop;
      return {
        ...raw,
        specs: raw.specs || undefined,
        price: raw.price || undefined,
      };
    })
    .sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name)
    );
}
