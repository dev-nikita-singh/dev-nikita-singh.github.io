"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { StickySection } from "@/components/StickySection";
import { AppearTitle } from "@/components/motion/Appear";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

type Shard = {
  key: string;
  from: { x: string; y: string; r: string; s?: string };
  delay: string;
  eyebrow: string;
  title?: string;
  span: string;
  tone?: "plain" | "ink" | "accent";
  content: ReactNode;
};

const shards: Shard[] = [
  {
    key: "origin",
    from: { x: "-160px", y: "80px", r: "-8deg", s: "0.86" },
    delay: "40ms",
    eyebrow: "01 · Origin",
    title: "Where the work starts",
    span: "md:col-span-7",
    content: (
      <>
        <p>
          I’m {profile.name} — {profile.location}-based, shipping intelligent
          product at{" "}
          <a
            href={profile.site}
            className="font-semibold underline decoration-current/30 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            {profile.company}
          </a>
          . I work in the narrow band where language models stop performing and
          start operating: planning, calling tools, remembering what failed, and
          recovering without drama.
        </p>
        <p className="mt-3">
          That means I care as much about queues, schemas, and threat models as
          I do about prompts. Magic that can’t survive latency or a bad tool
          response isn’t a product — it’s a clip.
        </p>
      </>
    ),
  },
  {
    key: "bias",
    from: { x: "140px", y: "-90px", r: "7deg", s: "0.88" },
    delay: "110ms",
    eyebrow: "02 · Bias",
    title: "Learn by shipping",
    span: "md:col-span-5",
    tone: "accent",
    content: (
      <p>
        I don’t wait for perfect architecture docs. I ship the thinnest loop
        that creates value, instrument it, then deepen autonomy only where the
        human is clearly the bottleneck. Theory sticks when it has a scar from
        production.
      </p>
    ),
  },
  {
    key: "systems",
    from: { x: "-120px", y: "-100px", r: "-6deg", s: "0.87" },
    delay: "180ms",
    eyebrow: "03 · Systems",
    title: "Agents as distributed systems",
    span: "md:col-span-5",
    content: (
      <>
        <p>
          An agent is a distributed system with a language model in the middle.
          Each tool call is another hop. Each retry is another chance to double
          charge, double write, or double confuse the user.
        </p>
        <p className="mt-3">
          So I design for idempotency, budgets, explicit timeouts, and state you
          can query — not vibes about “context windows.” If you can’t answer
          what the agent already tried, you can’t debug it.
        </p>
      </>
    ),
  },
  {
    key: "stack",
    from: { x: "150px", y: "70px", r: "5deg", s: "0.9" },
    delay: "250ms",
    eyebrow: "04 · Stack taste",
    title: "What I reach for",
    span: "md:col-span-7",
    tone: "ink",
    content: (
      <>
        <p>
          Day to day: agent loops with narrow tool contracts, durable job
          tables, honest logging, and security checks small enough to fit in a
          standup. I’m drawn to local-first and privacy-respecting software —
          trust is infrastructure, not a footer link.
        </p>
        <p className="mt-3">
          Outside the day job I study open tools like Document Studio and
          OpenCanvasX — offline-capable, account-optional products that keep
          bytes on the machine that opened them. That ethos shapes how I think
          about agents and data too.
        </p>
      </>
    ),
  },
  {
    key: "public",
    from: { x: "-90px", y: "120px", r: "-4deg", s: "0.9" },
    delay: "320ms",
    eyebrow: "05 · Public trail",
    title: "Open by default",
    span: "md:col-span-6",
    content: (
      <p>
        I keep a public trail on{" "}
        <a
          href={profile.github}
          className="font-semibold underline decoration-current/30 underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and write essays when a sharp edge is worth leaving for someone else —
        including future me. Open source isn’t a row of logos; it’s the habit of
        documenting the break so the next build doesn’t repeat it.
      </p>
    ),
  },
  {
    key: "now",
    from: { x: "110px", y: "110px", r: "6deg", s: "0.88" },
    delay: "390ms",
    eyebrow: "06 · Now",
    title: "What I’m deepening",
    span: "md:col-span-6",
    tone: "accent",
    content: (
      <p>
        At {profile.company} I’m pushing intelligent surfaces that people can
        actually trust — clear plans, escape hatches, measurable outcomes. If
        you care about agents that behave like real software, the trail is
        public. Build in the open with me.
      </p>
    ),
  },
];

const toneClass: Record<NonNullable<Shard["tone"]>, string> = {
  plain: "border-[var(--line)] bg-white/90 text-[var(--ink-soft)]",
  ink: "border-[var(--ink)]/15 bg-[#0F1115] text-[#E8EBE9]",
  accent:
    "border-[var(--accent)]/35 bg-[linear-gradient(160deg,#0F241C_0%,#16352A_100%)] text-[#E7F3EC]",
};

export function AboutSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-assembled");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        root.classList.toggle("is-assembled", entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
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
      title="The system under the story"
      lead={profile.bio}
    >
      <div ref={rootRef} className="assemble-root">
        <AppearTitle className="mb-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)] sm:mb-7 sm:text-2xl">
          Shards of the craft
        </AppearTitle>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {shards.map((shard) => (
            <div
              key={shard.key}
              className={cn(
                "assemble-piece rounded-2xl border px-4 py-4 shadow-[0_12px_32px_rgba(15,17,21,0.06)] sm:px-5 sm:py-5",
                shard.span,
                toneClass[shard.tone ?? "plain"],
              )}
              style={
                {
                  "--from-x": shard.from.x,
                  "--from-y": shard.from.y,
                  "--from-r": shard.from.r,
                  "--from-s": shard.from.s ?? "0.9",
                  "--delay": shard.delay,
                } as CSSProperties
              }
            >
              <p
                className={cn(
                  "mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                  shard.tone === "plain" || !shard.tone
                    ? "text-[var(--muted)]"
                    : "text-white/50",
                )}
              >
                {shard.eyebrow}
              </p>
              {shard.title ? (
                <h3
                  className={cn(
                    "mb-2.5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight sm:text-xl",
                    shard.tone === "plain" || !shard.tone
                      ? "text-[var(--ink)]"
                      : "text-white",
                  )}
                >
                  {shard.title}
                </h3>
              ) : null}
              <div className="text-[0.92rem] leading-7 sm:text-[0.98rem] sm:leading-8">
                {shard.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StickySection>
  );
}
