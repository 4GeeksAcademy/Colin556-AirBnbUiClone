import Link from "next/link";
import { CategoryChips } from "@/components/common/category-chips";
import { ListingCard } from "@/components/common/listing-card";
import { SectionHeading } from "@/components/common/section-heading";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { categories, listings } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pb-20">
      <MainHeader />

      <main className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-8 pt-6 md:px-8 md:pt-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-soft)] via-[#f9d9cc] to-[#f4edd8] p-5 md:p-8">
          <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-white/35 blur-2xl" />
          <div className="relative z-10 max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Stay in style
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
              Find your next weekend ritual.
            </h1>
            <p className="text-sm text-[var(--muted)] md:text-base">
              Discover handpicked spaces with the comfort, personality, and location you actually want.
            </p>
            <div className="flex gap-3">
              <Link
                href="/catalog"
                className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white"
              >
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

        <section className="space-y-3">
          <SectionHeading title="Browse by vibe" subtitle="Designed for mobile first discovery" />
          <CategoryChips items={categories} />
        </section>

        <section>
          <SectionHeading title="Featured stays" subtitle="Curated picks this week" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        <section className="surface-card rounded-3xl p-5 md:p-8">
          <SectionHeading title="Plan from anywhere" subtitle="A map-like experience appears on desktop in catalog" />
          <p className="max-w-2xl text-sm text-[var(--muted)] md:text-base">
            This prototype mirrors Airbnb component relationships: shared headers, reusable listing cards,
            filter chips, and a room page fed by the same listing model.
          </p>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
