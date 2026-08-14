import { ListingCard } from "@/components/common/listing-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Listing } from "@/types/listing";

type HomeFeaturedStaysProps = {
  isLoading: boolean;
  visibleListings: Listing[];
};

export const HomeFeaturedStays = ({
  isLoading,
  visibleListings,
}: HomeFeaturedStaysProps) => {
  return (
    <section>
      <SectionHeading
        title="Featured stays"
        subtitle="Results update instantly as you type and switch categories"
      />

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={`loading-${index}`} className="h-[360px] animate-pulse rounded-2xl border border-[var(--line)] bg-white" />
          ))}
        </div>
      ) : visibleListings.length === 0 ? (
        <p className="rounded-2xl border border-[var(--line)] bg-white px-4 py-5 text-sm text-[var(--muted)]">
          No stays found for this search. Try a different keyword or category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </section>
  );
};
