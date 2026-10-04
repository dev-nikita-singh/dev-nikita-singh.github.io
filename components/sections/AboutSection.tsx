"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { StickySection } from "@/components/StickySection";
import { TiltCard } from "@/components/TiltCard";
import { AppearTitle, AppearWords } from "@/components/motion/Appear";
import { profile } from "@/lib/data";

const pieces: {
  key: string;
  from: { x: string; y: string; r: string };
  delay: string;
  content: ReactNode;
}[] = [
  {
    key: "p1",
    from: { x: "-120px", y: "72px", r: "-7deg" },
    delay: "60ms",
    content: (
      <p>
        I care about the intersection where agentic AI meets real engineering —
        databases, distributed systems, infrastructure, and security — and the
        open-source habits that keep that craft honest.
      </p>
    ),
  },
  {
    key: "p2",
    from: { x: "110px", y: "-64px", r: "6deg" },
    delay: "140ms",
    content: (
      <p>
        Based in {profile.location}, I build at{" "}
        <a
          href={profile.site}
          className="font-semibold text-[var(--ink)] underline decoration-[var(--ink)]/30 underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {profile.company}
        </a>{" "}
        and keep a public trail of experiments on GitHub.
      </p>
    ),
  },
];

const facts = [
  {
    label: "Focus",
    value: "Agentic AI · Systems",
    from: { x: "-100px", y: "48px", r: "-8deg" },
    delay: "220ms",
  },
  {
    label: "Mode",
    value: "Learn by shipping",
    from: { x: "90px", y: "70px", r: "7deg" },
    delay: "300ms",
  },
  {
    label: "Location",
    value: profile.location,
    from: { x: "-60px", y: "100px", r: "3deg" },
    delay: "380ms",
  },
  {
    label: "Company",
    value: profile.company,
    from: { x: "110px", y: "-36px", r: "-4deg" },
    delay: "460ms",
  },
];

export function AboutSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-assembled");
      return;
    }

    // Assemble when in view; disperse again when scrolling away
    const io = new IntersectionObserver(
      ([entry]) => {
        root.classList.toggle("is-assembled", entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <StickySection
      id="about"
      tone="mist"
      zIndex={10}
      eyebrow="About"
      title="Builder of intelligent systems"
      lead={profile.bio}
    >
      <div
        ref={rootRef}
        className="assemble-root grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        <div className="space-y-4 text-[0.95rem] leading-7 text-[var(--ink-soft)] sm:text-base sm:leading-8">
          <AppearTitle className="mb-1 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)] sm:text-2xl">
            Assembling the story
          </AppearTitle>
          {pieces.map((piece) => (
            <div
              key={piece.key}
              className="assemble-piece rounded-t-2xl border border-[var(--line)] bg-white/80 p-4 shadow-[0_8px_24px_rgba(15,17,21,0.04)] sm:p-5"
              style={
                {
                  "--from-x": piece.from.x,
                  "--from-y": piece.from.y,
                  "--from-r": piece.from.r,
                  "--delay": piece.delay,
                } as CSSProperties
              }
            >
              {piece.content}
            </div>
          ))}

          <dl className="grid grid-cols-2 gap-3 pt-1 sm:max-w-lg">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="assemble-piece rounded-t-xl border border-[var(--line)] bg-white/90 p-3.5 sm:p-4"
                style={
                  {
                    "--from-x": fact.from.x,
                    "--from-y": fact.from.y,
                    "--from-r": fact.from.r,
                    "--delay": fact.delay,
                  } as CSSProperties
                }
              >
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-semibold text-[var(--ink)]">
                  <AppearWords text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="assemble-piece relative mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0 lg:ml-auto lg:max-w-none lg:aspect-auto lg:min-h-[300px]"
          style={
            {
              "--from-x": "80px",
              "--from-y": "90px",
              "--from-r": "5deg",
              "--delay": "180ms",
            } as CSSProperties
          }
        >
          <TiltCard
            maxTilt={4}
            className="relative h-full min-h-[inherit] overflow-hidden rounded-t-[1.5rem] border border-[var(--line)]"
          >
            <Image
              src="/images/ai-systems.jpg"
              alt="Abstract visualization of intelligent systems"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              loading="lazy"
            />
          </TiltCard>
        </div>
      </div>
    </StickySection>
  );
}
