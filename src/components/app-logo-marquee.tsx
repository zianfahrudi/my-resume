/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { appLogos, type AppLogo } from "@/data/portfolio";

function getInitials(name: string) {
  const words = name
    .replace(/[^A-Za-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function AppLogoMarquee() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  return (
    <section className="border-b border-[color:var(--border)] px-6 py-10 md:px-8">
      <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            Things I&apos;ve Built
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-[color:var(--muted-foreground)]">
            Products I have shipped, maintained, or supported across mobile
            releases.
          </p>
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--muted-foreground)]">
          {appLogos.length} apps
        </span>
      </div>

      <div className="logo-marquee -mx-6 pt-4 md:-mx-8">
        <div className="logo-marquee__track flex w-max items-center px-6 md:px-8">
          <LogoGroup
            apps={appLogos}
            hoveredLogo={hoveredLogo}
            onHover={setHoveredLogo}
          />
          <LogoGroup
            apps={appLogos}
            ariaHidden
            hoveredLogo={hoveredLogo}
            onHover={setHoveredLogo}
          />
        </div>
      </div>
    </section>
  );
}

function LogoGroup({
  apps,
  ariaHidden = false,
  hoveredLogo,
  onHover,
}: {
  apps: AppLogo[];
  ariaHidden?: boolean;
  hoveredLogo: string | null;
  onHover: (name: string | null) => void;
}) {
  return (
    <div
      className="logo-marquee__group flex shrink-0 items-center gap-4 pr-4 md:gap-5 md:pr-5"
      aria-hidden={ariaHidden}
    >
      {apps.map((app) => (
        <div
          key={`${app.name}-${ariaHidden ? "copy" : "main"}`}
          className="app-logo-item relative flex shrink-0 justify-center focus:outline-none"
          aria-label={ariaHidden ? undefined : app.name}
          tabIndex={-1}
          onMouseEnter={() => onHover(app.name)}
          onMouseLeave={() => onHover(null)}
        >
          <AppLogoTile name={app.name} icon={app.icon} />
          <span
            className={`app-logo-tooltip pointer-events-none absolute left-1/2 top-full z-10 mt-2 max-w-48 -translate-x-1/2 whitespace-nowrap rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-2.5 py-1 text-xs font-medium text-[color:var(--foreground)] shadow-lg shadow-black/10 transition duration-200 ${
              hoveredLogo === app.name
                ? "translate-y-0 opacity-100"
                : "-translate-y-1 opacity-0"
            }`}
          >
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function AppLogoTile({ name, icon }: { name: string; icon: string }) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image || hasImageError) {
      return;
    }

    const detectBrokenImage = () => {
      if (image.complete && image.naturalWidth === 0) {
        setHasImageError(true);
      }
    };

    detectBrokenImage();
    const timeout = window.setTimeout(detectBrokenImage, 1200);

    return () => window.clearTimeout(timeout);
  }, [hasImageError]);

  return (
    <div className="app-logo-card flex size-16 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)]/45 p-2 shadow-sm shadow-black/5 transition duration-300 md:size-20 md:p-2.5">
      {hasImageError ? (
        <span className="flex h-full w-full items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-semibold text-emerald-500 md:text-base">
          {getInitials(name)}
        </span>
      ) : (
        <img
          ref={imageRef}
          src={icon}
          alt={name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasImageError(true)}
          className="h-full w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
}
