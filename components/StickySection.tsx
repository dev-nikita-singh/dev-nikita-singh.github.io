"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppearTitle, AppearWords } from "@/components/motion/Appear";

type StickySectionProps = {
  id: string;
  tone: "light" | "mist" | "ink" | "forest" | "slate";
  zIndex: number;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  className?: string;
};

const toneClasses: Record<StickySectionProps["tone"], string> = {
  light: "bg-white text-[var(--ink)]",
  mist: "bg-[#E8EDF2] text-[var(--ink)]",
  ink: "bg-[#0E0E0E] text-[#F7F7F4]",
  forest: "bg-[#0F241C] text-[#F3F7F4]",
  slate: "bg-[#171E28] text-[#F2F4F7]",
};

export function StickySection({
  id,
  tone,
  zIndex,
  eyebrow,
  title,
  lead,
  children,
  className,
}: StickySectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "sticky-panel rounded-t-[1.5rem] shadow-[0_-12px_40px_rgba(10,10,10,0.1)] sm:rounded-t-[2.25rem]",
        toneClasses[tone],
        className,
      )}
      style={{ zIndex }}
    >
      <div className="mx-auto flex min-h-[var(--panel-height)] max-w-7xl flex-col px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
        <div className="mb-6 max-w-3xl sm:mb-8">
          <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] opacity-65">
            {eyebrow}
          </p>
          <AppearTitle
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl md:text-[3.2rem] md:leading-[1.05]"
          >
            {title}
          </AppearTitle>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-85 sm:text-lg sm:leading-8">
            <AppearWords text={lead} />
          </p>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
