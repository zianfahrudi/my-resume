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
            Flutter. I&apos;m also open for freelance work or just a friendly
            discussion.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Let&apos;s talk
            </a>
            <span className="text-sm text-[color:var(--muted-foreground)]">
              {profile.email}
            </span>
          </div>
        </div>
      </header>

      <section id="about" className="space-y-4 p-8">
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
