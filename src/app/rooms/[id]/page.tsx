import Image from "next/image";
import { notFound } from "next/navigation";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { getRoomById } from "@/lib/mock-data";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  const room = getRoomById(id);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] pb-24">
      <MainHeader compact />

      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-8 pt-5 md:px-8 md:pt-8">
        <section className="space-y-2">
          <h1 className="font-display text-3xl font-semibold text-[var(--ink)] md:text-4xl">{room.title}</h1>
          <p className="text-sm text-[var(--muted)]">
            Rating {room.rating} ({room.reviews} reviews) | {room.location}
          </p>
        </section>

        <section className="space-y-3">
          <div className="overflow-hidden rounded-3xl md:hidden">
            <Image src={room.gallery[0]} alt={room.title} width={1200} height={900} className="h-80 w-full object-cover" />
          </div>

          <div className="hidden grid-cols-4 gap-3 md:grid">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <Image src={room.gallery[0]} alt={room.title} width={1200} height={900} className="h-full w-full object-cover" />
            </div>
            {room.gallery.slice(1).map((image, index) => (
              <div key={image} className="overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt={`${room.title} view ${index + 2}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_360px]">
          <div className="space-y-7">
            <div className="border-b border-[var(--line)] pb-6">
              <h2 className="text-2xl font-semibold text-[var(--ink)]">
                Entire rental unit hosted by {room.hostName}
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {room.maxGuests} guests | {room.bedrooms} bedrooms | {room.beds} beds | {room.baths} baths
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{room.hostRole}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--ink)]">About this place</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{room.about}</p>
              <ul className="space-y-2">
                {room.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-[var(--ink)]">
                    - {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t border-[var(--line)] pt-6">
              <h3 className="text-xl font-semibold text-[var(--ink)]">What this place offers</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--ink)]">
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="air-shadow sticky top-24 rounded-3xl border border-[var(--line)] bg-white p-6">
              <p className="text-xl text-[var(--ink)]">
                <span className="font-semibold">${room.pricePerNight}</span> night
              </p>
              <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--line)] text-xs">
                <div className="border-b border-r border-[var(--line)] p-3">
                  <p className="font-semibold text-[var(--ink)]">CHECK-IN</p>
                  <p className="text-[var(--muted)]">Sep 12</p>
                </div>
                <div className="border-b border-[var(--line)] p-3">
                  <p className="font-semibold text-[var(--ink)]">CHECKOUT</p>
                  <p className="text-[var(--muted)]">Sep 17</p>
                </div>
                <div className="col-span-2 p-3">
                  <p className="font-semibold text-[var(--ink)]">GUESTS</p>
                  <p className="text-[var(--muted)]">2 guests</p>
                </div>
              </div>
              <button type="button" className="mt-4 w-full rounded-xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white">
                Reserve
              </button>
              <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <p className="flex items-center justify-between">
                  <span>${room.pricePerNight} x 5 nights</span>
                  <span>${room.totalPrice}</span>
                </p>
                <p className="flex items-center justify-between border-t border-[var(--line)] pt-2 font-semibold text-[var(--ink)]">
                  <span>Total before taxes</span>
                  <span>${room.totalPrice}</span>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-16 z-40 border-t border-[var(--line)] bg-white px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">${room.pricePerNight} night</p>
            <p className="text-xs text-[var(--muted)]">Sep 12 - 17</p>
          </div>
          <button type="button" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white">
            Reserve
          </button>
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}