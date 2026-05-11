export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionWeek = ContributionDay[];

export type ContributionData = {
  weeks: ContributionWeek[];
  total: number;
  months: { label: string; weekIndex: number }[];
  source: "github" | "dummy";
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function levelFor(count: number): ContributionDay["level"] {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 7) return 2;
  if (count < 14) return 3;
  return 4;
}

function buildMonths(weeks: ContributionWeek[]) {
  const months: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const month = new Date(firstDay.date).getMonth();
    if (month !== lastMonth) {
      months.push({ label: monthNames[month], weekIndex: index });
      lastMonth = month;
    }
  });
  return months;
}

function generateDummyContributions(): ContributionData {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 52 * 7);
  start.setDate(start.getDate() - start.getDay());

  const rand = seededRandom(20260512);
  const weeks: ContributionWeek[] = [];
  let total = 0;

  for (let w = 0; w < 53; w++) {
    const week: ContributionWeek = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);

      if (date > today) {
        week.push({ date: date.toISOString().slice(0, 10), count: 0, level: 0 });
        continue;
      }

      const roll = rand();
      let count = 0;
      if (roll < 0.25) count = 0;
      else if (roll < 0.55) count = Math.floor(rand() * 3) + 1;
      else if (roll < 0.8) count = Math.floor(rand() * 5) + 3;
      else if (roll < 0.95) count = Math.floor(rand() * 10) + 7;
      else count = Math.floor(rand() * 25) + 15;

      total += count;
      week.push({
        date: date.toISOString().slice(0, 10),
        count,
        level: levelFor(count),
      });
    }
    weeks.push(week);
  }

  return { weeks, total, months: buildMonths(weeks), source: "dummy" };
}

/**
 * Fetch the public contribution calendar by scraping the GitHub profile
 * contributions HTML fragment. No auth required, but rate-limited and may
 * change without notice.
 */
async function fetchGithubContributions(
  username: string,
): Promise<ContributionData | null> {
  const url = `https://github.com/users/${encodeURIComponent(
    username,
  )}/contributions`;

  let html: string;
  try {
    const res = await fetch(url, {
      headers: {
        // GitHub is picky about default Node fetch User-Agent, so pretend to be
        // a regular browser to avoid 403/empty responses.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        Accept: "text/html",
      },
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) return null;
    html = await res.text();
  } catch {
    return null;
  }

  // Each contribution cell looks roughly like:
  // <td tabindex="0" data-ix="0" ... data-date="2025-05-11"
  //     id="contribution-day-component-0-0" data-level="0"
  //     role="gridcell" ... class="ContributionCalendar-day">
  // Attributes can appear in any order, so match them independently.
  const cellRegex =
    /<td\b[^>]*\bclass="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g;
  const tooltipRegex =
    /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g;

  const tooltipByFor = new Map<string, string>();
  let tm: RegExpExecArray | null;
  while ((tm = tooltipRegex.exec(html)) !== null) {
    tooltipByFor.set(tm[1], tm[2]);
  }

  type RawDay = { date: string; count: number; level: ContributionDay["level"] };
  const rawDays: RawDay[] = [];

  let m: RegExpExecArray | null;
  while ((m = cellRegex.exec(html)) !== null) {
    const tag = m[0];

    const dateMatch = tag.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/);
    if (!dateMatch) continue;
    const date = dateMatch[1];

    const levelMatch = tag.match(/\bdata-level="(\d)"/);
    const level = Math.max(
      0,
      Math.min(4, levelMatch ? Number(levelMatch[1]) : 0),
    ) as ContributionDay["level"];

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
      const fallbackByLevel: Record<number, number> = {
        1: 1,
        2: 4,
        3: 9,
        4: 20,
      };
      count = fallbackByLevel[level];
    }

    rawDays.push({ date, count, level });
  }

  if (rawDays.length < 7) return null;

  rawDays.sort((a, b) => (a.date < b.date ? -1 : 1));

  // Bucket days into weeks aligned to Sunday (GitHub's default).
  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionWeek = [];
  let total = 0;

  for (const day of rawDays) {
    const dow = new Date(day.date + "T00:00:00Z").getUTCDay();
    if (dow === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
    total += day.count;
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);

  return {
    weeks,
    total,
    months: buildMonths(weeks),
    source: "github",
  };
}

export async function getContributions(
  username?: string,
): Promise<ContributionData> {
  if (!username) return generateDummyContributions();
  const data = await fetchGithubContributions(username);
  return data ?? generateDummyContributions();
}
