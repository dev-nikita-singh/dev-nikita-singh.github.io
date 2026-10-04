import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug, profile, type BlogLink } from "@/lib/data";
import { SiteHeader } from "@/components/SiteHeader";

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
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-sm text-white/80 transition-colors hover:border-white/35 hover:text-white"
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/45">
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

  // blogs is newest-first; prev = newer, next = older chronologically in the list
  const index = blogs.findIndex((b) => b.slug === post.slug);
  const newer = index > 0 ? blogs[index - 1] : null;
  const older = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <>
      <SiteHeader />
      <main className="min-h-svh bg-[#0F241C] text-[#F3F7F4]">
        <article className="mx-auto max-w-3xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            ← Back to blogs
          </Link>

          <header className="mt-8 sm:mt-10">
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/50">
              <span className="rounded-full border border-white/15 px-2.5 py-1 text-white/70">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="opacity-40">·</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.68rem] text-white/55"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </header>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-t-2xl border border-white/10 sm:mt-10">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="mt-10 space-y-6 text-[1.02rem] leading-8 text-white/82 sm:mt-12 sm:text-[1.08rem] sm:leading-9">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          {post.links && post.links.length > 0 ? (
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                Related links
              </p>
              <div className="flex flex-wrap gap-2.5">
                {post.links.map((link) => (
                  <LinkChip key={`${link.href}-${link.label}`} link={link} />
                ))}
              </div>
            </div>
          ) : null}

          <footer className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm text-white/55">
              Written by{" "}
              <a
                href={profile.github}
                className="text-white underline decoration-white/25 underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                {profile.name}
              </a>
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {newer ? (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="rounded-t-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                    Newer
                  </p>
                  <p className="mt-2 font-semibold leading-snug">{newer.title}</p>
                </Link>
              ) : (
                <div />
              )}
              {older ? (
                <Link
                  href={`/blog/${older.slug}`}
                  className="rounded-t-xl border border-white/10 bg-white/[0.03] p-4 text-right transition-colors hover:border-white/25 sm:justify-self-end"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                    Older
                  </p>
                  <p className="mt-2 font-semibold leading-snug">{older.title}</p>
                </Link>
              ) : null}
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
