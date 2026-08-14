import Link from "next/link";

type HomeTopNavProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M5 19C6.5 15.8 9 14 12 14C15 14 17.5 15.8 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HomeTopNav = ({ searchValue, onSearchChange }: HomeTopNavProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link href="/" className="font-display text-xl font-bold text-[var(--ink)]">
        airbnb
      </Link>

      <label className="air-shadow flex w-full max-w-xl items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2.5">
        <SearchIcon />
        <input
          type="text"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by city or stay"
          className="w-full bg-transparent text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
          aria-label="Search listings"
        />
      </label>

      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-2 text-[var(--ink)]"
        aria-label="User menu"
      >
        <MenuIcon />
        <UserIcon />
      </button>
    </div>
  );
};
