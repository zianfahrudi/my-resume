"use client";

import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initial: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, initial, size = 176, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        style={{ width: size, height: size }}
        className={`flex items-center justify-center bg-gradient-to-br from-emerald-400 to-violet-500 font-serif text-5xl font-bold text-white shadow-inner ${className}`}
      >
        {initial}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
