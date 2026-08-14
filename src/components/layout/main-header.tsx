import Link from "next/link";

type MainHeaderProps = {
  compact?: boolean;
};

export const MainHeader = ({ compact = false }: MainHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-display text-xl font-bold text-[var(--ink)]">
          airbnb
        </Link>

        <button
          type="button"
          className="air-shadow flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-left"
        >
          <span className="text-sm font-semibold text-[var(--ink)]">Anywhere</span>
          <span className="hidden text-sm text-[var(--muted)] md:inline">Any week</span>
          <span className="rounded-full bg-[var(--brand)] px-2 py-1 text-xs font-semibold text-white">
            {compact ? "Edit" : "Add guests"}
          </span>
        </button>

        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--ink)]"
        >
          Menu
        </button>
      </div>
    </header>
  );
};