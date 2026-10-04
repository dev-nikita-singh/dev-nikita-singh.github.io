"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StickyScrollPanel } from "@/components/StickyScrollPanel";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { blogCategories, blogs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BlogsSection() {
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (category === "all") return blogs;
    return blogs.filter((post) => post.category === category);
  }, [category]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <StickyScrollPanel
      id="blogs"
      zIndex={50}
      className="rounded-t-[1.5rem] bg-[#0F241C] text-[#F3F7F4] shadow-[0_-12px_40px_rgba(10,10,10,0.16)] sm:rounded-t-[2.25rem]"
    >
      <div className="mx-auto flex min-h-[var(--panel-height)] w-full max-w-7xl flex-col px-4 pb-8 pt-7 sm:px-8 sm:pb-12 sm:pt-10">
        <div className="mb-5 flex flex-col gap-4 sm:mb-8 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-[0.7rem]">
              Blogs
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-5xl">
              Notes from building
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-lg sm:leading-8">
              Most recent first. Filter by category, open any essay for the full
              write-up, tags, and related links.
            </p>
          </div>
          <p className="shrink-0 text-sm tabular-nums text-white/45">
            {filtered.length}{" "}
            {filtered.length === 1 ? "essay" : "essays"}
          </p>
        </div>

        <div
          className="mb-7 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Blog categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={category === "all"}
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors",
              category === "all"
                ? "border-white/40 bg-white text-[#0F241C]"
                : "border-white/15 text-white/65 hover:border-white/35 hover:text-white",
            )}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                category === cat
                  ? "border-white/40 bg-white text-[#0F241C]"
                  : "border-white/15 text-white/65 hover:border-white/35 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured ? (
          <ScrollReveal className="mb-5">
            <TiltCard maxTilt={3}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-t-2xl border border-white/10 bg-[#0c1c16] transition-colors hover:border-white/25 sm:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[260px]">
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 55vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur sm:left-4 sm:top-4">
                    Latest
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-3 p-5 sm:gap-4 sm:p-7 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-white/50">
                    <span className="rounded-full border border-white/15 px-2 py-0.5 text-white/70">
                      {featured.category}
                    </span>
                    <time dateTime={featured.date}>
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{featured.readMinutes} min</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base sm:leading-7">
                    {featured.excerpt}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] text-white/55"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    Read full essay →
                  </span>
                </div>
              </Link>
            </TiltCard>
          </ScrollReveal>
        ) : (
          <p className="rounded-t-2xl border border-white/10 bg-white/[0.03] p-8 text-sm text-white/60">
            No essays in this category yet.
          </p>
        )}

        {rest.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {rest.map((post, index) => (
              <ScrollReveal key={post.slug} delayMs={index * 40}>
                <TiltCard maxTilt={3.5} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#0c1c16] transition-colors hover:border-white/25"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-white/50">
                        <span className="rounded-full border border-white/15 px-2 py-0.5 text-white/65">
                          {post.category}
                        </span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        {post.excerpt}
                      </p>
                      <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[0.62rem] text-white/50"
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>
                      <span className="pt-1 text-sm font-semibold text-[var(--accent)]">
                        Read essay →
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        ) : null}
      </div>
    </StickyScrollPanel>
  );
}
