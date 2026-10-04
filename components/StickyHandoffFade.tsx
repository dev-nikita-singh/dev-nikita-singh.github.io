"use client";

import { useEffect } from "react";

/**
 * Thin bottom dissolve on a sticky card only while the *next* card is
 * coming up to take over. Blogs never fades (hands off to the footer).
 */
export function StickyHandoffFade() {
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const panels = Array.from(
        document.querySelectorAll<HTMLElement>(".sticky-panel"),
      );

      panels.forEach((panel, index) => {
        // Last content card (blogs) mixes with footer — never fade
        if (panel.id === "blogs") {
          panel.classList.remove("is-handing-off");
          return;
        }

        const next = panels[index + 1];
        if (!next) {
          panel.classList.remove("is-handing-off");
          return;
        }

        const panelRect = panel.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const viewH = window.innerHeight;

        // Next card has entered the viewport and is overlapping this card
        const nextRising =
          nextRect.top < viewH - 8 && nextRect.top < panelRect.bottom - 4;
        const stillVisible = panelRect.bottom > viewH * 0.2;

        panel.classList.toggle("is-handing-off", nextRising && stillVisible);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const mo = new MutationObserver(onScroll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mo.disconnect();
      document
        .querySelectorAll(".sticky-panel.is-handing-off")
        .forEach((el) => el.classList.remove("is-handing-off"));
    };
  }, []);

  return null;
}
