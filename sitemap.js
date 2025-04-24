const fs = require("fs");
const path = require("path");

const domain = "https://louismartinaudio.it/";

// Static URL definitions
const urls = [
  // Homepage route
  { loc: "", priority: 1.0 },

  // Primary business pages
  { loc: "distributor", priority: 0.8 },
  { loc: "news", priority: 0.8 },

  // Informational/download pages
  { loc: "download", priority: 0.6 },
  { loc: "case", priority: 0.7 },
  { loc: "about", priority: 0.7 },
  { loc: "contact", priority: 0.7 },

  // Product categories
  { loc: "linearray", priority: 0.8 },
  { loc: "pointsource", priority: 0.8 },
  { loc: "stagemonitor", priority: 0.7 },
  { loc: "subwoofer", priority: 0.8 },
  { loc: "columsound", priority: 0.7 },
  { loc: "qseries", priority: 0.7 },
  { loc: "famousseries", priority: 0.7 },
  { loc: "coxseries", priority: 0.7 },
  { loc: "redseries", priority: 0.7 },
  { loc: "fseries", priority: 0.7 },
  { loc: "sseries", priority: 0.7 },
  { loc: "ksseries", priority: 0.7 },
  { loc: "electronics", priority: 0.8 },
  { loc: "dseries", priority: 0.7 },
  { loc: "plseries", priority: 0.7 },
  { loc: "kseries", priority: 0.7 },
  { loc: "dsseries", priority: 0.7 },
  { loc: "tipseries", priority: 0.7 },
  { loc: "ttaseries", priority: 0.7 },

  // Supporting pages
  { loc: "view-pdf", priority: 0.4 },
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `
  <url>
    <loc>${domain}${loc}</loc>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>
`.trim();

// Write to sitemap.xml
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");

console.log("✅ Sitemap generated successfully!");
