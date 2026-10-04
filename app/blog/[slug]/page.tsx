import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogBlocks } from "@/components/blog/BlogBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  blogs,
  getBlogBySlug,
  profile,
  type BlogLink,
} from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Essay not found" };
  return {
    title: `${post.title} · ${profile.name}`,
    description: post.excerpt,
  };
}

function LinkChip({ link }: { link: BlogLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3.5 py-2 text-sm text-[var(--ink-soft)] transition-colors hover:border-[var(--ink)]/25 hover:text-[var(--ink)]"
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        {link.kind ?? "link"}
      </span>
      {link.label}
      <span aria-hidden>↗</span>
    </a>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const index = blogs.findIndex((b) => b.slug === post.slug);
  const newer = index > 0 ? blogs[index - 1] : null;
  const older = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <>
      <SiteHeader />
      <main className="min-h-svh bg-[#F7F8FA] text-[var(--ink)]">
        <article className="mx-auto w-full max-w-[72rem] px-4 pb-16 pt-[calc(var(--nav-h)+1.5rem)] sm:px-8 sm:pb-20 sm:pt-[calc(var(--nav-h)+2rem)] xl:px-10">
          <nav
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--muted)]"
            aria-label="Breadcrumb"
          >
            <Link
              href="/#blogs"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              <span aria-hidden>←</span>
              Blog
            </Link>
            <span className="opacity-40" aria-hidden>
              /
            </span>
            <Link
              href="/"
              className="transition-colors hover:text-[var(--ink)]"
            >
              Home
            </Link>
          </nav>

          <header className="mt-8 max-w-4xl sm:mt-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] bg-white px-2.5 py-1 font-semibold text-[var(--ink-soft)]">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="opacity-35" aria-hidden>
                ·
              </span>
              <span>{post.readMinutes} min read</span>
            </div>

            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.12] tracking-tight text-[var(--ink)] sm:mt-5">
              {post.title}
            </h1>

            <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-[var(--ink-soft)] sm:mt-5 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-[var(--line)] pb-6 sm:mt-8 sm:pb-8">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[var(--line)] bg-white">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--ink)]">
                    {profile.name}
                  </p>
                  <p className="truncate text-xs text-[var(--muted)]">
                    {profile.role} · {profile.company}
                  </p>
                </div>
              </div>
              <ul className="ml-auto flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-[var(--ink)]/[0.04] px-2.5 py-1 text-[0.68rem] text-[var(--muted)]"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <BlogBlocks blocks={post.content} />

          {post.links && post.links.length > 0 ? (
            <div className="mt-12 rounded-2xl border border-[var(--line)] bg-white p-5 sm:mt-14 sm:p-7">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Related links
              </p>
              <div className="flex flex-wrap gap-2.5">
                {post.links.map((link) => (
                  <LinkChip key={`${link.href}-${link.label}`} link={link} />
                ))}
              </div>
            </div>
          ) : null}

          <footer className="mt-14 border-t border-[var(--line)] pt-8 sm:mt-16">
            <p className="text-sm text-[var(--muted)]">
              Written by{" "}
              <a
                href={profile.github}
                className="font-medium text-[var(--ink)] underline decoration-[var(--ink)]/20 underline-offset-4 transition-colors hover:decoration-[var(--ink)]/45"
                target="_blank"
                rel="noreferrer"
              >
                {profile.name}
              </a>
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {newer ? (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-4 transition-colors hover:border-[var(--ink)]/20 sm:p-5"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    ← Newer
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-[var(--ink)] sm:text-lg">
                    {newer.title}
                  </p>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              {older ? (
                <Link
                  href={`/blog/${older.slug}`}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-4 text-left transition-colors hover:border-[var(--ink)]/20 sm:p-5 sm:text-right"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Older →
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-[var(--ink)] sm:text-lg">
                    {older.title}
                  </p>
                </Link>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#blogs"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                All essays
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]/25"
              >
                Back home
              </Link>
            </div>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
