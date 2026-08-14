"use client";

import { useMemo, useState } from "react";
import { CategoryChips } from "@/components/common/category-chips";
import { ListingCard } from "@/components/common/listing-card";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { categories, listings } from "@/lib/mock-data";

type SortOrder = "asc" | "desc";

export const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(
    () => [...listings].sort((a, b) => (sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight)),
    [sortOrder]
  );

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
            <div className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--muted)]">{sortedListings.length} results | Entire places and private rooms</p>
              <label className="flex items-center gap-2 text-sm text-[var(--ink)]">
                <span className="font-semibold">Sort by price</span>
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-sm text-[var(--ink)] outline-none"
                  aria-label="Sort listings by price"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>

          <aside>
            <div className="flex h-64 items-center justify-center rounded-3xl border border-[var(--line)] bg-gray-200 text-xl font-semibold uppercase tracking-[0.3em] text-gray-600 md:sticky md:top-24 md:h-[75vh]">
              map
            </div>
          </aside>
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
};
