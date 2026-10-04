export default function Loading() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-white px-6">
      <div className="loader-mark mb-6" aria-hidden="true" />
      <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--ink)]">
        Nikita Singh
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        Loading portfolio
      </p>
    </div>
  );
}
