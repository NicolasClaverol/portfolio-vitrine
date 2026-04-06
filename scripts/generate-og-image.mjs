import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/og-image.jpg");

const W = 1200;
const H = 630;

// Navy background
const navy = { r: 0x1c, g: 0x3a, b: 0x5e };
const white = { r: 0xff, g: 0xff, b: 0xff };
const mint = { r: 0x64, g: 0xff, b: 0xda };

function hex(c) {
  return `#${c.r.toString(16).padStart(2, "0")}${c.g.toString(16).padStart(2, "0")}${c.b.toString(16).padStart(2, "0")}`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${hex(navy)}"/>

  <!-- Accent line -->
  <rect x="80" y="240" width="60" height="6" rx="3" fill="${hex(mint)}"/>

  <!-- Name -->
  <text
    x="80" y="320"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-weight="700"
    font-size="72"
    fill="${hex(white)}"
    letter-spacing="-1"
  >Nicolas Claverol</text>

  <!-- Subtitle -->
  <text
    x="80" y="384"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-weight="400"
    font-size="32"
    fill="${hex(mint)}"
    letter-spacing="0.5"
  >Développeur web freelance · Montpellier</text>

  <!-- URL -->
  <text
    x="80" y="560"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-weight="400"
    font-size="22"
    fill="rgba(255,255,255,0.45)"
    letter-spacing="1"
  >nicolasclaverol.com</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(OUTPUT);

console.log(`✓ og-image.jpg generated at ${OUTPUT}`);
