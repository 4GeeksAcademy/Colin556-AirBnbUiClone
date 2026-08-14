import Image from "next/image";
import Link from "next/link";
import { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/rooms/${listing.id}`} className="group block">
      <article className="space-y-3">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={listing.image}
            alt={listing.title}
            width={900}
            height={700}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            type="button"
            className="absolute right-3 top-3 rounded-full bg-white/85 px-2 py-1 text-xs font-semibold text-[var(--ink)]"
          >
            Save
          </button>
          {listing.badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-xs font-semibold text-[var(--ink)]">
              {listing.badge}
            </span>
          ) : null}
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-[var(--ink)]">{listing.location}</h3>
            <p className="text-sm font-semibold text-[var(--ink)]">Rating {listing.rating}</p>
          </div>
          <p className="text-sm text-[var(--muted)]">{listing.title}</p>
          <p className="text-sm text-[var(--muted)]">{listing.distance}</p>
          <p className="text-sm text-[var(--muted)]">{listing.dates}</p>
          <p className="pt-1 text-sm text-[var(--ink)]">
            <span className="font-semibold">${listing.pricePerNight}</span> night
          </p>
        </div>
      </article>
    </Link>
  );
}