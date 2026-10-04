"use client";

import Image from "next/image";
import { interests } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function InterestsSection() {
  return (
    <div id="interests" className="relative" style={{ zIndex: 20 }}>
      {interests.map((item, index) => (
        <section
          key={item.title}
          className="sticky-panel flex flex-col overflow-hidden rounded-t-[1.5rem] bg-[#0E0E0E] text-[#F7F7F4] shadow-[0_-12px_40px_rgba(10,10,10,0.18)] sm:rounded-t-[2.25rem]"
          style={{ zIndex: 20 + index }}
        >
          <div className="mx-auto flex h-full min-h-[var(--panel-height)] w-full max-w-7xl flex-col px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10">
            <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
              <div>
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                  Interests
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl">
                  {item.title}
                </h2>
              </div>
              <p className="shrink-0 font-[family-name:var(--font-display)] text-sm tabular-nums text-white/50 sm:text-base">
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
                className="relative grid h-full min-h-0 overflow-hidden rounded-t-[1.5rem] border border-white/10 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="relative min-h-[210px] sm:min-h-[280px] lg:min-h-full">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-end gap-4 bg-[#141414] p-6 sm:p-8 lg:justify-center lg:p-10">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/50">
                    Focus 0{index + 1}
                  </p>
                  <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
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
