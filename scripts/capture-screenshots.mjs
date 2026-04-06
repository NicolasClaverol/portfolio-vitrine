import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../public/portfolio");

mkdirSync(OUTPUT_DIR, { recursive: true });

const SITES = [
  { url: "https://echoppe-du-peyrou.vercel.app",      file: "echoppe.webp"    },
  { url: "https://ceramiques-madore.vercel.app",       file: "ceramiques.webp" },
  { url: "https://cabinet-kine-antigone.vercel.app",   file: "kine.webp"       },
  { url: "https://camille-orsini.vercel.app",          file: "camille.webp"    },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const { url, file } of SITES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });

  console.log(`Capturing ${url} …`);

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });

    // Dismiss cookie banners if any
    await page.evaluate(() => {
      for (const sel of [
        "[id*='cookie'] button",
        "[class*='cookie'] button",
        "[id*='consent'] button",
        "[class*='consent'] button",
      ]) {
        document.querySelector(sel)?.click();
      }
    });

    // Short pause for any closing animations
    await new Promise((r) => setTimeout(r, 500));

    const output = join(OUTPUT_DIR, file);
    await page.screenshot({ path: output, type: "webp", quality: 85 });
    console.log(`  ✓ saved → public/portfolio/${file}`);
  } catch (err) {
    console.error(`  ✗ failed (${url}): ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("\nDone.");
