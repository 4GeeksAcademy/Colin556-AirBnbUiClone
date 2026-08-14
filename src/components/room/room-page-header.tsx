import Link from "next/link";

type RoomPageHeaderProps = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
};

export const RoomPageHeader = ({
  title,
  rating,
  reviews,
  location,
}: RoomPageHeaderProps) => {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
        >
          <span aria-hidden="true">&lt;</span>Back to catalog
        </Link>
      </nav>

      <section className="space-y-2">
        <h1 className="font-display text-3xl font-semibold text-[var(--ink)] md:text-4xl">{title}</h1>
        <p className="text-sm text-[var(--muted)]">Star {rating} ({reviews} reviews) | {location}</p>
      </section>
    </>
  );
};
