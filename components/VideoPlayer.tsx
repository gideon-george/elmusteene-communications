"use client";

import { useEffect, useRef } from "react";

/**
 * Self-hosted, bandwidth-friendly video: shows its poster until scrolled into
 * view, then plays muted + looped inline (no audio autoplay, `preload="none"`
 * keeps it out of the critical path). Pauses again when scrolled away.
 */
export default function VideoPlayer({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  // Raw <video> attributes don't go through the next/image loader, so apply
  // the basePath prefix here for subpath hosts like GitHub Pages.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave it as a poster with native controls

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked — poster + controls remain usable */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={`${basePath}${src}`}
      poster={`${basePath}${poster}`}
      muted
      loop
      playsInline
      controls
      preload="none"
      aria-label={label}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
