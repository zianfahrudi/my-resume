import { readFileSync } from "node:fs";

const html = readFileSync(process.argv[2] ?? "/tmp/gh_contrib.html", "utf8");

const cellRegex = /<td\b[^>]*\bclass="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g;
const tooltipRegex = /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g;

const tooltipByFor = new Map();
let tm;
while ((tm = tooltipRegex.exec(html)) !== null) {
  tooltipByFor.set(tm[1], tm[2]);
}

let total = 0;
let days = 0;
let m;
while ((m = cellRegex.exec(html)) !== null) {
  const tag = m[0];
  const dateMatch = tag.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/);
  if (!dateMatch) continue;
  days++;

  const levelMatch = tag.match(/\bdata-level="(\d)"/);
  const level = levelMatch ? Number(levelMatch[1]) : 0;

  const idMatch = tag.match(/\bid="([^"]+)"/);
  const id = idMatch?.[1];

  let count = 0;
  if (id) {
    const tooltip = tooltipByFor.get(id);
    if (tooltip) {
      const countMatch = tooltip.match(/([\d,]+)\s+contribution/i);
      if (countMatch) {
        count = Number(countMatch[1].replace(/,/g, "")) || 0;
      }
    }
  }
  if (count === 0 && level > 0) {
    const fallbackByLevel = { 1: 1, 2: 4, 3: 9, 4: 20 };
    count = fallbackByLevel[level];
  }
  total += count;
}
console.log(JSON.stringify({ days, total }));
