"use client";

import { navItems, profile, socials } from "@/lib/data";
import { socialIcons } from "@/components/SocialIcons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[60] overflow-hidden bg-[#0A1A14] text-[#F3F7F4]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(127,214,176,0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(127,214,176,0.08), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              {profile.brand}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[0.95rem] sm:leading-7">
              {profile.role} at {profile.company} · {profile.location}. Building
              agents, systems, and notes worth shipping.
            </p>
            <a
              href={profile.site}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)] transition-colors hover:text-white"
            >
              {profile.site.replace(/^https?:\/\//, "")} →
            </a>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Connect
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
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
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08]"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-sm text-white/50">
              Open to Researchers, collaborators, and curious readers.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-[0.8rem] text-white/45 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Crafted with care.
          </p>
          <p className="font-mono text-[0.7rem] tracking-wide">
            @{profile.github.replace("https://github.com/", "")}
          </p>
        </div>
      </div>
    </footer>
  );
}
