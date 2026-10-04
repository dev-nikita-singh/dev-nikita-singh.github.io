import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,17,21,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,21,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <p className="relative font-[family-name:var(--font-display)] text-[clamp(5rem,18vw,10rem)] font-semibold leading-none tracking-tight text-[var(--ink)]">
        404
      </p>
      <h1 className="relative mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        This page drifted out of frame
      </h1>
      <p className="relative mt-3 max-w-md text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
        The route you asked for is not part of this portfolio. Head back home
        and keep scrolling through the work.
      </p>
      <Link
        href="/"
        className="relative mt-8 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}
