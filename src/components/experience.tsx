"use client";

import { useState } from "react";
import { experiences, type Experience } from "@/data/portfolio";

function deriveInitials(company: string): string {
  const words = company
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const initials = words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  return initials || "•";
}

export function ExperienceSection() {
  return (
    <section className="px-6 py-10 md:px-8 md:py-12">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          Work Experience
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-[color:var(--muted-foreground)]">
          A quick look at where I&apos;ve worked and what I&apos;ve been up to
          over the years.
        </p>
      </div>

      <ul className="divide-y divide-[color:var(--border)]">
        {experiences.map((exp, i) => (
          <ExperienceItem
            key={`${exp.company}-${exp.period}`}
            exp={exp}
          />
        ))}
      </ul>
    </section>
  );
}

function ExperienceItem({
  exp,
  defaultOpen = false,
}: {
  exp: Experience;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const logoColor = exp.logoColor ?? "bg-emerald-500";

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 py-4 text-left transition-colors hover:bg-[color:var(--muted)]/40 md:gap-5 md:py-5"
      >
        {exp.logo ? (
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg md:h-12 md:w-12 ${exp.logoFit === "contain" ? "bg-white p-1.5" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={exp.logo}
              alt={exp.company}
              className={`h-full w-full ${exp.logoFit === "contain" ? "object-contain object-center" : "object-cover object-center"}`}
            />
          </span>
        ) : (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-white md:h-12 md:w-12 md:text-sm ${logoColor}`}
            aria-hidden="true"
          >
            {deriveInitials(exp.company)}
          </span>
        )}

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[11px] font-medium uppercase tracking-widest text-[color:var(--muted-foreground)] md:text-xs">
            {exp.company}
          </span>
          <span className="mt-0.5 block truncate text-sm font-medium text-[color:var(--foreground)] md:text-base">
            {exp.role}
          </span>
        </span>

        <span className="hidden shrink-0 text-xs text-[color:var(--muted-foreground)] sm:block md:text-sm">
          {exp.period}
        </span>

        <span
          className={`shrink-0 text-[color:var(--muted-foreground)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pl-14 pr-2 md:pl-[68px]">
            <p className="block text-xs text-[color:var(--muted-foreground)] sm:hidden">
              {exp.period} · {exp.location}
            </p>
            <p className="hidden text-xs text-[color:var(--muted-foreground)] sm:block">
              {exp.location}
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--foreground)]/90">
              {exp.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/60 px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted-foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-500 hover:underline"
              >
                Visit website
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
