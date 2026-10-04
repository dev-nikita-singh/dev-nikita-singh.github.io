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

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-20">
        <div className="max-w-3xl">
          <p className="hero-anim hero-anim-d1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            {profile.location} · {profile.company}
          </p>
          <h1 className="hero-anim hero-anim-d2 mt-4 font-[family-name:var(--font-display)] text-[clamp(2.8rem,10vw,6.8rem)] font-semibold leading-[0.92] tracking-tight text-[var(--ink)]">
            <AppearWords text={profile.brand} />
          </h1>
          <p className="hero-anim hero-anim-d3 mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:mt-6 sm:text-xl sm:leading-8">
            <AppearWords text={profile.tagline} />
          </p>

          <div className="hero-anim hero-anim-d4 mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <a
              href="#projects"
              className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-6"
            >
              View projects
            </a>
            <a
              href="#blogs"
              className="rounded-full border border-[var(--line)] bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 sm:px-6"
            >
              Read blogs
            </a>
            <a
              href="#about"
              className="rounded-full border border-transparent px-4 py-3 text-sm font-semibold text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              About
            </a>
          </div>

          <ul className="hero-anim hero-anim-d5 mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8">
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[var(--ink)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)]/30"
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
