"use client";

import { useEffect, useMemo, useState } from "react";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { HomeCategoryRow } from "@/components/home/home-category-row";
import { HomeFeaturedStays } from "@/components/home/home-featured-stays";
import { HomeHero } from "@/components/home/home-hero";
import { HomePrototypeNote } from "@/components/home/home-prototype-note";
import { HomeTopNav } from "@/components/home/home-top-nav";
import { categories, listings } from "@/lib/mock-data";
import { Listing } from "@/types/listing";

const ALL_CATEGORIES_ID = "all";

const filterListings = (source: Listing[], query: string, categoryId: string) => {
  const normalizedQuery = query.trim().toLowerCase();

  return source.filter((listing) => {
    const matchesCategory = categoryId === ALL_CATEGORIES_ID || listing.categoryId === categoryId;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      listing.title.toLowerCase().includes(normalizedQuery) ||
      listing.location.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });
};

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES_ID);
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setAllListings(listings);
      setVisibleListings(listings);
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(loadTimer);
  }, []);

  const categoriesWithAll = useMemo(
    () => [{ id: ALL_CATEGORIES_ID, label: "All", icon: "*" }, ...categories],
    []
  );

  const onSearchChange = (nextQuery: string) => {
    setSearchValue(nextQuery);
    setVisibleListings(filterListings(allListings, nextQuery, activeCategory));
  };

  const onSelectCategory = (nextCategoryId: string) => {
    setActiveCategory(nextCategoryId);
    setVisibleListings(filterListings(allListings, searchValue, nextCategoryId));
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] pb-20">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 md:px-8">
          <HomeTopNav searchValue={searchValue} onSearchChange={onSearchChange} />
          <HomeCategoryRow items={categoriesWithAll} activeCategory={activeCategory} onSelectCategory={onSelectCategory} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-8 pt-6 md:px-8 md:pt-8">
        <HomeHero />
        <HomeFeaturedStays isLoading={isLoading} visibleListings={visibleListings} />
        <HomePrototypeNote />
      </main>

      <MobileBottomNav />
    </div>
  );
};
