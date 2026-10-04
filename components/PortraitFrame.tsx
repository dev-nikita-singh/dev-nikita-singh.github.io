"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";

/** Clean portrait frame — swap avatar at /public/images/avatar.png */
export function PortraitFrame() {
  return (
    <figure className="hero-frame relative mx-auto w-full max-w-[320px] lg:mx-0 lg:ml-auto lg:max-w-[380px]">
      <div className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-[var(--ink)]/[0.04] via-transparent to-[var(--ink)]/[0.06]" />

      <TiltCard
        maxTilt={4}
        className="relative rounded-[1.35rem] border border-[var(--line)] bg-white p-2.5 shadow-[0_24px_60px_rgba(15,17,21,0.08)] sm:p-3"
      >
        <div className="relative overflow-hidden rounded-[1rem] bg-[#f3f4f6]">
          <div className="relative aspect-[4/5]">
            <Image
              src={profile.avatar}
              alt={`${profile.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 320px, 380px"
              priority
            />
          </div>
        </div>

        <figcaption className="mt-3 flex items-center justify-between gap-3 px-1 pb-0.5">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--ink)]">
              {profile.name}
            </p>
            <p className="text-[0.7rem] text-[var(--muted)]">
              {profile.role}
            </p>
          </div>
          <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Portrait
          </span>
        </figcaption>
      </TiltCard>

      <p className="mt-3 text-center text-[0.68rem] text-[var(--muted)] lg:text-left">
        Replace with your photo in{" "}
        <code className="rounded bg-black/[0.04] px-1 py-0.5 font-mono text-[0.65rem]">
          public/images/avatar.png
        </code>
      </p>
    </figure>
  );
}
