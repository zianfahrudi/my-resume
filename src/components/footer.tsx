import { profile } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "X", href: profile.twitterUrl },
  { label: "YouTube", href: profile.youtubeUrl },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-start justify-between gap-6 border-y border-[color:var(--border)] p-8 sm:flex-row sm:items-center">
      <p className="text-sm text-[color:var(--muted-foreground)]">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <nav
        aria-label="Social links"
        className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[color:var(--muted-foreground)] sm:gap-x-8"
      >
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              item.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="transition-colors hover:text-[color:var(--foreground)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
