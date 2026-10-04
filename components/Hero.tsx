"use client";

import Image from "next/image";
import { PortraitFrame } from "@/components/PortraitFrame";
import { AppearWords } from "@/components/motion/Appear";
import { socialIcons } from "@/components/SocialIcons";
import { profile, socials } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/laptop-work.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%] opacity-[0.2]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.72)_45%,rgba(255,255,255,0.95)_100%)]" />
        <div className="hero-grain absolute inset-0 opacity-22" />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,17,21,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,21,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-3 px-4 pb-12 pt-24 sm:gap-6 sm:px-8 sm:pb-16 sm:pt-28 md:gap-10 lg:gap-14 lg:pb-20">
        <div className="min-w-0 max-w-3xl">
          <p className="hero-anim hero-anim-d1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[0.7rem] sm:tracking-[0.3em]">
            {profile.location} · {profile.company}
          </p>
          <h1 className="hero-anim hero-anim-d2 mt-2.5 font-[family-name:var(--font-display)] text-[clamp(1.55rem,5.2vw,6.8rem)] font-semibold leading-[0.95] tracking-tight text-[var(--ink)] sm:mt-4">
            <AppearWords text={profile.brand} />
          </h1>
          <p className="hero-anim hero-anim-d3 mt-3 max-w-xl text-[0.8rem] leading-relaxed text-[var(--ink-soft)] sm:mt-5 sm:text-base sm:leading-relaxed md:mt-6 md:text-xl md:leading-8">
            <AppearWords text={profile.tagline} />
          </p>

          <div className="hero-anim hero-anim-d4 mt-5 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--ink)] px-3.5 py-2.5 text-[0.75rem] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
            >
              View projects
            </a>
            <a
              href="#blogs"
              className="rounded-full border border-[var(--line)] bg-white/85 px-3.5 py-2.5 text-[0.75rem] font-semibold text-[var(--ink)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
            >
              Read blogs
            </a>
            <a
              href="#about"
              className="hidden rounded-full border border-transparent px-3 py-2.5 text-[0.75rem] font-semibold text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] sm:inline-flex sm:px-4 sm:py-3 sm:text-sm"
            >
              About
            </a>
          </div>

          <ul className="hero-anim hero-anim-d5 mt-5 flex flex-wrap items-center gap-1.5 sm:mt-8 sm:gap-2.5">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[var(--ink)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)]/30 sm:h-11 sm:w-11"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <PortraitFrame />
      </div>
    </section>
  );
}
