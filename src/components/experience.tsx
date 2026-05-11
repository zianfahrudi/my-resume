import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="border-b border-[color:var(--border)]">
      <div className="px-8 py-10">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-[color:var(--muted-foreground)]">
          A quick look at where I&apos;ve worked and what I&apos;ve been up to
          over the years.
        </p>
      </div>

      <div className="divide-y divide-[color:var(--border)] border-t border-[color:var(--border)]">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="group px-8 py-8 transition-colors hover:bg-[color:var(--muted)]/40"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)] opacity-70">
                {exp.period}
              </span>
              <span className="text-xs text-[color:var(--muted-foreground)]">
                •
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)] opacity-70">
                {exp.location}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold">
              {exp.role}{" "}
              <span className="text-emerald-500">@ {exp.company}</span>
            </h3>

            <p className="mt-2 max-w-2xl text-[color:var(--muted-foreground)]">
              {exp.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/60 px-3 py-1 text-xs font-medium text-[color:var(--muted-foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
