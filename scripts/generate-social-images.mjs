// Optional asset maintenance: npm ci && node scripts/generate-social-images.mjs
// These are branded title cards, not screenshots or project-result evidence.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const cards = [
  ["customer-churn-data-pipeline", ["Customer Churn", "Data Pipeline"], "DATA ENGINEERING", "PySpark · AWS · Parquet"],
  ["global-iso-security", ["Global ISO", "Security"], "SYSTEMS ENGINEERING", "Spring Boot · TiDB · FastAPI"],
  ["fc-barcelona-player-performance-ml", ["FC Barcelona Player", "Performance ML"], "MACHINE LEARNING", "Python · scikit-learn · Streamlit"],
  ["laptop-price-statistical-analysis", ["Laptop Price", "Statistical Analysis"], "DATA ANALYTICS", "Python · Statistics · Jupyter"],
];
await mkdir("public/images/social", { recursive: true });
for (const [slug, lines, category, stack] of cards) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f2eee5"/><rect x="0" width="22" height="630" fill="#163f35"/><circle cx="1115" cy="95" r="150" fill="#e6b94f"/><circle cx="104" cy="102" r="34" fill="#163f35"/><text x="104" y="111" text-anchor="middle" font-family="DejaVu Serif,serif" font-size="24" fill="#fbfaf6">AO</text><text x="157" y="110" font-family="DejaVu Sans,sans-serif" font-size="25" font-weight="bold" fill="#15251f">ANDRÉS OBANDO</text><text x="70" y="214" font-family="DejaVu Sans,sans-serif" font-size="20" letter-spacing="3" fill="#9f3f2d">${category}</text><text x="68" y="320" font-family="DejaVu Serif,serif" font-size="65" fill="#15251f">${lines[0]}</text><text x="68" y="402" font-family="DejaVu Serif,serif" font-size="65" fill="#15251f">${lines[1]}</text><path d="M70 472H1130" stroke="#b8c1b8"/><text x="70" y="530" font-family="DejaVu Sans,sans-serif" font-size="23" fill="#42524b">${stack}</text><text x="70" y="577" font-family="DejaVu Sans,sans-serif" font-size="18" fill="#42524b">CASE STUDY · ACADEMIC PROJECT</text></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/images/social/${slug}.png`);
}
console.log(`Generated ${cards.length} branded 1200 × 630 title cards.`);
