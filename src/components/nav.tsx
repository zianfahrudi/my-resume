import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <nav className="flex h-12 items-center">
      <div className="ml-auto flex h-auto items-center gap-0 px-1 text-sm sm:gap-2 sm:px-4 sm:text-base">
        <Link
          href="/#about"
          className="border-r border-[color:var(--border)] px-1.5 hover:underline sm:px-4"
        >
          About
        </Link>
        <Link
          href="/#experience"
          className="border-r border-[color:var(--border)] px-1.5 hover:underline sm:px-4"
        >
          Experience
        </Link>
        <Link
          href="/blog"
          className="border-r border-[color:var(--border)] px-1.5 hover:underline sm:px-4"
        >
          Blog
        </Link>
        <a
          href="https://tools.ziandev.site"
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-[color:var(--border)] px-1.5 hover:underline sm:px-4"
        >
          Tools
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
