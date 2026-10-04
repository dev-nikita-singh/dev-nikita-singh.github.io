"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] h-[var(--nav-h)] border-b transition-[background,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-[var(--line)] bg-white/95 shadow-[0_1px_0_rgba(15,17,21,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group flex min-w-0 items-baseline gap-2">
          <span className="truncate font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-[var(--ink)] sm:text-lg">
            {profile.brand}
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)] sm:inline">
            {profile.role}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1">
            <span
              className={cn(
                "h-px w-full bg-[var(--ink)] transition",
                open && "translate-y-[2.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-[var(--ink)] transition",
                open && "-translate-y-[2.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[var(--line)] bg-white lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-[var(--ink)] px-4 py-3 text-center text-sm font-medium text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
