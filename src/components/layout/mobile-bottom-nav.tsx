import Link from "next/link";

const links = [
  { href: "/", label: "Explore" },
  { href: "/catalog", label: "Stays" },
  { href: "/rooms/1", label: "Trips" },
  { href: "#", label: "Inbox" },
  { href: "#", label: "Profile" },
];

export const MobileBottomNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-white/95 backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-[11px] font-medium text-[var(--muted)]"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--brand)]" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};