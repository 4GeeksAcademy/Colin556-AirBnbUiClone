import { CategoryChips } from "@/components/common/category-chips";
import { ListingCard } from "@/components/common/listing-card";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { categories, listings } from "@/lib/mock-data";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pb-20">
      <MainHeader compact />

      <main className="mx-auto w-full max-w-7xl px-4 pb-8 pt-5 md:px-8">
        <section className="space-y-4">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
            <p className="text-sm font-semibold text-[var(--ink)]">Stays in California</p>
            <p className="text-xs text-[var(--muted)]">Sep 12 - Sep 17 | 2 guests</p>
          </div>
          <CategoryChips items={categories} />
        </section>

        <section className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm text-[var(--muted)]">{listings.length}+ stays | Entire places and private rooms</p>
            <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="sticky top-24 h-[75vh] overflow-hidden rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[#dce9ff] via-[#f5f8ff] to-[#f7ead9] p-5">
              <p className="font-display text-2xl text-[var(--ink)]">Map view</p>
              <p className="mt-2 max-w-xs text-sm text-[var(--muted)]">
                Desktop split-screen mirrors the Airbnb browse-and-map pattern.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--ink)]">$240</span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--ink)]">$330</span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--ink)]">$295</span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--ink)]">$185</span>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}