import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-soft)] via-[#f9d9cc] to-[#f4edd8] p-5 md:p-8">
      <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-white/35 blur-2xl" />
      <div className="relative z-10 max-w-xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">Stay in style</p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
          Find your next weekend ritual.
        </h1>
        <p className="text-sm text-[var(--muted)] md:text-base">
          Discover handpicked spaces with the comfort, personality, and location you actually want.
        </p>
        <div className="flex gap-3">
          <Link href="/catalog" className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white">
            Start searching
          </Link>
          <Link
            href="/rooms/1"
            className="rounded-full border border-[var(--line)] bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--ink)]"
          >
            View featured room
          </Link>
        </div>
      </div>
    </section>
  );
};
