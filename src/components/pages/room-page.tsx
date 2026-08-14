"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { RoomAmenitiesGrid } from "@/components/room/room-amenities-grid";
import { RoomBookingCard } from "@/components/room/room-booking-card";
import { RoomHostRow } from "@/components/room/room-host-row";
import { RoomLoadingView } from "@/components/room/room-loading-view";
import { RoomMobileBookingBar } from "@/components/room/room-mobile-booking-bar";
import { RoomNotFoundView } from "@/components/room/room-not-found-view";
import { RoomPhotoGallery } from "@/components/room/room-photo-gallery";
import { getRoomById } from "@/lib/mock-data";
import { RoomDetail } from "@/types/listing";

const MIN_GUESTS = 1;

export const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const roomId = params?.id;
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      const roomData = getRoomById(roomId);
      setRoom(roomData ?? null);
      setPhotoIndex(0);
      setGuestCount(roomData ? Math.min(2, roomData.maxGuests) : 2);
      setIsLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [roomId]);

  if (isLoading) return <RoomLoadingView />;
  if (!room) return <RoomNotFoundView />;

  const onPrevious = () => setPhotoIndex((current) => (current - 1 + room.gallery.length) % room.gallery.length);
  const onNext = () => setPhotoIndex((current) => (current + 1) % room.gallery.length);
  const onDecreaseGuests = () => setGuestCount((current) => Math.max(MIN_GUESTS, current - 1));
  const onIncreaseGuests = () => setGuestCount((current) => Math.min(room.maxGuests, current + 1));

  return (
    <div className="min-h-screen bg-[var(--bg)] pb-24">
      <MainHeader compact />

      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-8 pt-5 md:px-8 md:pt-8">
        <nav aria-label="Breadcrumb">
          <Link href="/catalog" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            <span aria-hidden="true">&lt;</span>Back to catalog
          </Link>
        </nav>

        <section className="space-y-2">
          <h1 className="font-display text-3xl font-semibold text-[var(--ink)] md:text-4xl">{room.title}</h1>
          <p className="text-sm text-[var(--muted)]">Star {room.rating} ({room.reviews} reviews) | {room.location}</p>
        </section>

        <RoomPhotoGallery
          title={room.title}
          gallery={room.gallery}
          photoIndex={photoIndex}
          onSelectPhoto={setPhotoIndex}
          onPrevious={onPrevious}
          onNext={onNext}
        />

        <section className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_360px]">
          <div className="space-y-7">
            <RoomHostRow
              hostName={room.hostName}
              hostRole={room.hostRole}
              maxGuests={room.maxGuests}
              bedrooms={room.bedrooms}
              beds={room.beds}
              baths={room.baths}
            />

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--ink)]">About this place</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{room.about}</p>
              <ul className="space-y-2">
                {room.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-[var(--ink)]">- {highlight}</li>
                ))}
              </ul>
            </div>

            <RoomAmenitiesGrid amenities={room.amenities} />
          </div>

          <RoomBookingCard
            pricePerNight={room.pricePerNight}
            totalPrice={room.totalPrice}
            guestCount={guestCount}
            onDecreaseGuests={onDecreaseGuests}
            onIncreaseGuests={onIncreaseGuests}
          />
        </section>
      </main>

      <RoomMobileBookingBar pricePerNight={room.pricePerNight} guestCount={guestCount} />
      <MobileBottomNav />
    </div>
  );
};
