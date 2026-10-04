"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppearTitle, AppearWords } from "@/components/motion/Appear";
import { StickyScrollPanel } from "@/components/StickyScrollPanel";

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
    <StickyScrollPanel
      id={id}
      zIndex={zIndex}
      className={cn(
        "rounded-t-[1.5rem] shadow-[0_-12px_40px_rgba(10,10,10,0.1)] sm:rounded-t-[2.25rem]",
        toneClasses[tone],
        className,
      )}
    >
      <div className="mx-auto flex min-h-[var(--panel-height)] max-w-7xl flex-col px-4 pb-8 pt-7 sm:px-8 sm:pb-12 sm:pt-10">
        <div className="mb-5 max-w-3xl sm:mb-8">
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-65 sm:text-[0.7rem]">
            {eyebrow}
          </p>
          <AppearTitle
            as="h2"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-5xl md:text-[3.2rem] md:leading-[1.05]"
          >
            {title}
          </AppearTitle>
          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed opacity-85 sm:mt-3 sm:text-lg sm:leading-8">
            <AppearWords text={lead} />
          </p>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </StickyScrollPanel>
  );
}
