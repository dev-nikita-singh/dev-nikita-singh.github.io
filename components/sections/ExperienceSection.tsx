"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    let raf = 0;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.75;
      const travel = Math.max(rect.height * 0.85, 1);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / travel));
      fill.style.setProperty("--timeline-progress", progress.toFixed(4));

      // Bidirectional: reveal on enter, disperse when scrolled away
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const inView = r.top < view * 0.88 && r.bottom > view * 0.12;
        node.classList.toggle("is-visible", inView);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative overflow-x-hidden rounded-t-[1.5rem] bg-[#171E28] text-[#F2F4F7] shadow-[0_-12px_40px_rgba(10,10,10,0.14)] sm:rounded-t-[2.25rem]"
      style={{ zIndex: 40 }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/55">
            Experience
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
            Work timeline
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-lg sm:leading-8">
            One path through roles and learning chapters — from foundations to
            shipping at Sovaria.
          </p>
        </div>

        <div ref={wrapRef} className="relative pl-2 sm:pl-0">
          <div className="absolute bottom-2 left-[0.85rem] top-2 w-px bg-white/15 sm:left-[6.75rem]" />
          <div
            ref={fillRef}
            className="timeline-line absolute left-[0.85rem] top-2 w-px bg-[var(--accent)] sm:left-[6.75rem]"
            style={{
              height: "calc(100% - 0.5rem)",
              ["--timeline-progress" as string]: 0,
            }}
          />

          <ol className="space-y-0">
            {experiences.map((job, index) => (
              <li
                key={`${job.org}-${job.role}`}
                ref={(el) => {
                  nodeRefs.current[index] = el;
                }}
                className="timeline-node relative grid gap-3 pb-10 last:pb-2 sm:grid-cols-[6rem_1fr] sm:gap-8 sm:pb-12"
                style={{ ["--delay" as string]: `${index * 70}ms` }}
              >
                <div className="pl-8 pt-1 sm:pl-0 sm:text-right">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                    {job.year}
                  </p>
                  <p className="mt-1 hidden text-[0.7rem] leading-5 text-white/45 sm:block">
                    {job.period}
                  </p>
                </div>

                <div
                  className={cn(
                    "timeline-card relative border-t border-white/10 pt-5 pl-8 sm:border-t-0 sm:pl-0 sm:pt-0",
                  )}
                >
                  <span
                    className="absolute left-[-0.42rem] top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[#171E28] sm:left-[-2.1rem] sm:top-2 sm:translate-x-0"
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight sm:text-2xl">
                      {job.role}
                    </h3>
                    <span className="text-[0.65rem] uppercase tracking-[0.14em] text-white/45">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/65">
                    {job.org} · {job.location}
                  </p>
                  <p className="mt-0.5 text-[0.75rem] text-white/40 sm:hidden">
                    {job.period}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/78 sm:text-[0.95rem] sm:leading-7">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
