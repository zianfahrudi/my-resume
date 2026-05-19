import { Avatar } from "@/components/avatar";
import { profile, aboutMe } from "@/data/portfolio";

export function Hero() {
  return (
    <>
      <header className="flex flex-col border-y border-[color:var(--border)] sm:flex-row sm:items-center">
        <div className="flex h-auto w-46 items-center px-8 pt-8 sm:p-0.5">
          <Avatar
            src={profile.avatar}
            alt={profile.name}
            initial={profile.firstName[0]}
            size={176}
            className="size-40 sm:size-44"
          />
        </div>
        <div className="p-8 sm:border-l sm:border-[color:var(--border)]">
          <h1 className="mb-2 text-balance font-serif text-4xl font-bold md:text-5xl">
            Hi I&apos;m{" "}
            <span className="text-emerald-500">{profile.name}</span>
          </h1>
          <p className="max-w-2xl text-lg text-[color:var(--muted-foreground)]">
            I work at{" "}
            <a
              href={profile.companyUrl}
              className="italic underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.company}
            </a>{" "}
            as a {profile.role}, building Android and iOS applications with
            Flutter.
          </p>
        </div>
      </header>

      <section
        id="about"
        className="space-y-4 border-b border-[color:var(--border)] p-8"
      >
        <h2 className="text-balance font-serif text-2xl font-bold md:text-3xl">
          About Me
        </h2>
        {aboutMe.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-lg text-[color:var(--muted-foreground)]"
          >
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
}
