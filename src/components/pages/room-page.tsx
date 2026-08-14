"use client";

import { useParams } from "next/navigation";
import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { RoomAmenitiesGrid } from "@/components/room/room-amenities-grid";
import { RoomAboutSection } from "@/components/room/room-about-section";
import { RoomBookingCard } from "@/components/room/room-booking-card";
import { RoomHostRow } from "@/components/room/room-host-row";
import { RoomLoadingView } from "@/components/room/room-loading-view";
import { RoomMobileBookingBar } from "@/components/room/room-mobile-booking-bar";
import { RoomNotFoundView } from "@/components/room/room-not-found-view";
import { RoomPageHeader } from "@/components/room/room-page-header";
import { RoomPhotoGallery } from "@/components/room/room-photo-gallery";
import { useRoomPageState } from "@/components/room/use-room-page-state";

export const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const {
    room,
    isLoading,
    photoIndex,
    guestCount,
    setPhotoIndex,
    onPreviousPhoto,
    onNextPhoto,
    onDecreaseGuests,
    onIncreaseGuests,
  } = useRoomPageState(params?.id);

  if (isLoading) return <RoomLoadingView />;
  if (!room) return <RoomNotFoundView />;

  return (
    <div className="min-h-screen bg-[var(--bg)] pb-24">
      <MainHeader compact />

      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-8 pt-5 md:px-8 md:pt-8">
        <RoomPageHeader title={room.title} rating={room.rating} reviews={room.reviews} location={room.location} />

        <RoomPhotoGallery
          title={room.title}
          gallery={room.gallery}
          photoIndex={photoIndex}
          onSelectPhoto={setPhotoIndex}
          onPrevious={onPreviousPhoto}
          onNext={onNextPhoto}
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

            <RoomAboutSection about={room.about} highlights={room.highlights} />

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
