"use client";

import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { interests } from "@/lib/data";

export function InterestsSection() {
  return (
    <div id="interests" className="relative" style={{ zIndex: 20 }}>
      {interests.map((item, index) => (
        <section
          key={item.title}
          className="sticky-panel flex flex-col rounded-t-[1.5rem] bg-[#0E0E0E] text-[#F7F7F4] shadow-[0_-12px_40px_rgba(10,10,10,0.18)] sm:rounded-t-[2.25rem]"
          style={{ zIndex: 20 + index }}
        >
          <div className="mx-auto flex h-full min-h-[var(--panel-height)] w-full max-w-7xl flex-col px-4 pb-6 pt-7 sm:px-8 sm:pb-10 sm:pt-10">
            <div className="mb-4 flex items-end justify-between gap-3 sm:mb-7 sm:gap-4">
              <div className="min-w-0">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-[0.7rem]">
                  Interests
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {item.title}
                </h2>
              </div>
              <p className="shrink-0 font-[family-name:var(--font-display)] text-xs tabular-nums text-white/50 sm:text-base">
                {String(index + 1).padStart(2, "0")}
                <span className="opacity-40">
                  {" "}
                  / {String(interests.length).padStart(2, "0")}
                </span>
              </p>
            </div>

            <ScrollReveal className="min-h-0 flex-1" delayMs={40}>
              <TiltCard
                maxTilt={4}
                className="relative grid h-full min-h-0 grid-cols-1 overflow-hidden rounded-t-[1.25rem] border border-white/10 sm:grid-cols-[1.05fr_0.95fr] sm:rounded-t-[1.5rem]"
              >
                <div className="relative min-h-[160px] sm:min-h-full">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 55vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-3 bg-[#141414] p-5 sm:gap-4 sm:p-7 md:p-10">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/50 sm:text-[0.7rem]">
                    Focus 0{index + 1}
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
