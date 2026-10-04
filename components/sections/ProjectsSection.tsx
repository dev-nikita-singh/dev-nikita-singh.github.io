"use client";

import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <div id="projects" className="relative" style={{ zIndex: 30 }}>
      {projects.map((project, index) => (
        <section
          key={project.name}
          className="sticky-panel flex flex-col rounded-t-[1.5rem] border-t border-[var(--line)] bg-white shadow-[0_-12px_40px_rgba(10,10,10,0.1)] sm:rounded-t-[2.25rem]"
          style={{ zIndex: 30 + index }}
        >
          <div className="mx-auto flex h-full min-h-[var(--panel-height)] w-full max-w-7xl flex-col px-4 pb-6 pt-7 sm:px-8 sm:pb-10 sm:pt-10">
            <div className="mb-4 flex items-end justify-between gap-3 sm:mb-7 sm:gap-4">
              <div className="min-w-0">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.7rem]">
                  Selected builds
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                  {project.name}
                </h2>
                <p className="mt-1.5 max-w-2xl text-xs font-medium text-[var(--ink-soft)] sm:mt-2 sm:text-base">
                  {project.summary}
                </p>
              </div>
              <p className="shrink-0 font-[family-name:var(--font-display)] text-xs tabular-nums text-[var(--muted)] sm:text-base">
                {String(index + 1).padStart(2, "0")}
                <span className="opacity-40">
                  {" "}
                  / {String(projects.length).padStart(2, "0")}
                </span>
              </p>
            </div>

            <ScrollReveal className="min-h-0 flex-1" delayMs={40}>
              <TiltCard
                maxTilt={4}
                className="grid h-full min-h-0 grid-cols-1 overflow-hidden rounded-t-[1.25rem] border border-[var(--line)] bg-[#F4F6F8] sm:grid-cols-[1.05fr_0.95fr] sm:rounded-t-[1.5rem]"
              >
                <div className="relative min-h-[140px] sm:min-h-full">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 55vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-0 flex-col justify-between gap-4 overflow-y-auto p-4 sm:gap-5 sm:p-7 md:p-9">
                  <div>
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[0.98rem] sm:leading-7">
                      {project.description}
                    </p>
                    <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-snug text-[var(--ink)] sm:text-[0.95rem]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-3 sm:gap-4 sm:pt-4">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[0.68rem]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ink)] px-3.5 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-2.5"
                    >
                      View repo
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
