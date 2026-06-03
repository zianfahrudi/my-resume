import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-[color:var(--border)] px-6 py-10 md:px-8"
    >
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">Skills</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-md border border-transparent bg-[color:var(--foreground)] px-2.5 py-1 text-xs font-semibold text-[color:var(--background)] shadow-sm transition-colors hover:bg-emerald-500 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
