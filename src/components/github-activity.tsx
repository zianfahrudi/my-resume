import { getContributions } from "@/lib/github";
import { profile } from "@/data/portfolio";

const levelClasses: Record<number, string> = {
  0: "bg-[color:var(--muted)]/50",
  1: "bg-emerald-500/20",
  2: "bg-emerald-500/40",
  3: "bg-emerald-500/60",
  4: "bg-emerald-500/90",
};

export async function GithubActivity() {
  const { weeks, total, months } = await getContributions(
    profile.githubUsername,
  );

  return (
    <section className="border-b border-[color:var(--border)] px-8 py-10">
      <div className="mb-2 flex items-start justify-between">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          GitHub Activity
        </h2>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[color:var(--muted-foreground)]">
          <span className="font-medium text-[color:var(--foreground)]">
            {total.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </p>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
        >
          View on GitHub →
        </a>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="relative mb-2 flex pl-7" style={{ height: 16 }}>
            {months.map((m, idx) => (
              <div
                key={`${m.label}-${idx}`}
                className="absolute text-xs text-[color:var(--muted-foreground)]"
                style={{ left: m.weekIndex * 15 }}
              >
                {m.label}
              </div>
            ))}
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col gap-1 pt-0.5">
              {["", "M", "", "W", "", "F", ""].map((d, i) => (
                <div
                  key={i}
                  className="flex h-3 w-6 items-center justify-end pr-1"
                >
                  <span className="text-xs text-[color:var(--muted-foreground)]">
                    {d}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-1 gap-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      title={`${day.date}: ${day.count} contribution${
                        day.count === 1 ? "" : "s"
                      }`}
                      className={`size-[11px] border border-[color:var(--border)]/60 ${levelClasses[day.level]} transition-all hover:ring-2 hover:ring-emerald-500/50`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-[color:var(--muted-foreground)]">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                className={`size-[11px] border border-[color:var(--border)]/60 ${levelClasses[l]}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
