type RoomMobileBookingBarProps = {
  pricePerNight: number;
  guestCount: number;
};

export const RoomMobileBookingBar = ({
  pricePerNight,
  guestCount,
}: RoomMobileBookingBarProps) => {
  return (
    <div className="fixed inset-x-0 bottom-16 z-40 border-t border-[var(--line)] bg-white px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--ink)]">${pricePerNight} night</p>
          <p className="text-xs text-[var(--muted)]">{guestCount} guests</p>
        </div>
        <button type="button" className="rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white">
          Reserve
        </button>
      </div>
    </div>
  );
};
