"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Bidirectional scroll reveal — adds `className` when in view,
 * removes it when scrolled away (so animations reverse).
 */
export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
  className = "is-visible",
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(className);
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      el.classList.toggle(className, entry.isIntersecting);
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [className, options.root, options.rootMargin, options.threshold]);

  return ref;
}

/** Observe a container and toggle a class on it bidirectionally. */
export function useScrollToggle(
  className: string,
  options: IntersectionObserverInit = { threshold: 0.22, rootMargin: "0px 0px -10% 0px" },
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(className);
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      el.classList.toggle(className, entry.isIntersecting);
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [className, options.rootMargin, options.threshold]);

  return ref;
}
