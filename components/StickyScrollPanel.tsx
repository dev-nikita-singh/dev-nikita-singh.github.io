"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type StickyScrollPanelProps = {
  id?: string;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Page-scroll driven sticky panel:
 * 1) Document scroll brings the panel to its sticky top
 * 2) Extra runway scroll then translates inner content upward
 * 3) After the runway, the next section continues normally
 *
 * No overflow/wheel hijacking — one scroll chain only.
 */
export function StickyScrollPanel({
  id,
  zIndex,
  className,
  style,
  children,
}: StickyScrollPanelProps) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runway = runwayRef.current;
    const panel = panelRef.current;
    const track = trackRef.current;
    if (!runway || !panel || !track) return;

    let raf = 0;

    const sync = () => {
      const viewH = panel.clientHeight || panel.offsetHeight;
      const contentH = track.scrollHeight;
      const inner = Math.max(0, contentH - viewH);

      // Pin, then scrub overflow content with page scroll
      runway.style.height = `${viewH + inner}px`;

      const stickyTop = parseFloat(getComputedStyle(panel).top) || 0;
      const runwayTop = runway.getBoundingClientRect().top;
      const into = Math.min(inner, Math.max(0, stickyTop - runwayTop));

      track.style.transform = `translate3d(0, ${-into}px, 0)`;
      panel.classList.toggle("is-pinned", into > 0 || runwayTop <= stickyTop + 1);
      panel.dataset.pinProgress =
        inner > 0 ? (into / inner).toFixed(4) : into > 0 ? "1" : "0";
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(onScroll);
    ro.observe(track);
    ro.observe(panel);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={runwayRef} className="sticky-runway relative" style={{ zIndex }}>
      <section
        ref={panelRef}
        id={id}
        className={cn("sticky-panel", className)}
        style={{ ...style, zIndex }}
      >
        <div ref={trackRef} className="sticky-panel-track">
          {children}
        </div>
      </section>
    </div>
  );
}
