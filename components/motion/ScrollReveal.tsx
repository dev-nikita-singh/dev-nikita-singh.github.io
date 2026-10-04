"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Bidirectional enter/leave reveal for cards and panels. */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    // Viewport root — sticky panels scrub via transform, not overflow scroll
    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal", className)}
      style={{ ["--delay" as string]: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
