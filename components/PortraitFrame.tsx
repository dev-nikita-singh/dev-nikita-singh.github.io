"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";

/** Clean portrait frame — swap avatar at /public/images/nikita-avatar.png */
export function PortraitFrame() {
  return (
    <figure className="hero-frame relative mx-auto w-full max-w-[150px] min-[400px]:max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:mx-0 lg:ml-auto lg:max-w-[400px]">
      <div className="pointer-events-none absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-[var(--ink)]/[0.04] via-transparent to-[var(--accent)]/10 sm:-inset-4 sm:rounded-[1.75rem]" />

      <TiltCard
        maxTilt={4}
        className="relative rounded-[1rem] border border-[var(--line)] bg-white p-1.5 shadow-[0_16px_40px_rgba(15,17,21,0.08)] sm:rounded-[1.35rem] sm:p-2.5 sm:shadow-[0_24px_60px_rgba(15,17,21,0.08)] md:p-3"
      >
        <div className="relative overflow-hidden rounded-[0.75rem] bg-[#f3f4f6] sm:rounded-[1rem]">
          <div className="relative aspect-[4/5]">
            <Image
              src={profile.avatar}
              alt={`${profile.name}`}
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 400px) 150px, (max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
              priority
              unoptimized
            />
          </div>
        </div>

        <figcaption className="mt-2 flex items-center justify-between gap-2 px-0.5 pb-0.5 sm:mt-3 sm:gap-3 sm:px-1">
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-tight text-[var(--ink)] sm:text-sm">
              {profile.name}
            </p>
            <p className="truncate text-[0.58rem] text-[var(--muted)] sm:text-[0.7rem]">
              {profile.role}
            </p>
          </div>
          <span className="hidden shrink-0 rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] min-[400px]:inline-flex">
            {profile.location}
          </span>
        </figcaption>
      </TiltCard>
    </figure>
  );
}
