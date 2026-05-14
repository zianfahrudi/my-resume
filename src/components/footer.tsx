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
    <footer className="relative mt-12 flex items-center justify-between gap-3 border-y border-[color:var(--border)] p-8">
      <p className="text-xs text-[color:var(--muted-foreground)] sm:text-sm">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-sm text-[color:var(--muted-foreground)]">
        <a
          href="/privacy"
          className="transition-colors hover:text-[color:var(--foreground)]"
        >
          Privacy
        </a>
        <span aria-hidden="true" className="text-[color:var(--border)]">
          •
        </span>
        <a
          href="/contact"
          className="transition-colors hover:text-[color:var(--foreground)]"
        >
          Contact
        </a>
      </div>
      <nav
        aria-label="Social links"
        className="flex flex-wrap items-center justify-end gap-2 text-[color:var(--muted-foreground)] sm:gap-3"
      >
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={
              item.href.startsWith("mailto:") || item.href.startsWith("/")
                ? undefined
                : "_blank"
            }
            rel={
              item.href.startsWith("mailto:") || item.href.startsWith("/")
                ? undefined
                : "noopener noreferrer"
            }
            className="transition-colors hover:text-[color:var(--foreground)]"
            aria-label={item.label}
            title={item.label}
          >
            <SocialIcon label={item.label} />
          </a>
        ))}
      </nav>
    </footer>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (label === "X") {
    return (
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
        <path d="M4 4l11.5 16H20L8.5 4H4z" />
        <path d="M4 20 20 4" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
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
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    );
  }

  return (
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
  );
}
