type RoomBookingCardProps = {
  pricePerNight: number;
  totalPrice: number;
  guestCount: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
};

export const RoomBookingCard = ({
  pricePerNight,
  totalPrice,
  guestCount,
  onDecreaseGuests,
  onIncreaseGuests,
}: RoomBookingCardProps) => {
  return (
    <aside className="hidden md:block">
      <div className="air-shadow sticky top-24 rounded-3xl border border-[var(--line)] bg-white p-6">
        <p className="text-xl text-[var(--ink)]"><span className="font-semibold">${pricePerNight}</span> night</p>
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--line)] text-xs">
          <div className="border-b border-r border-[var(--line)] p-3"><p className="font-semibold text-[var(--ink)]">CHECK-IN</p><p className="text-[var(--muted)]">Sep 12</p></div>
          <div className="border-b border-[var(--line)] p-3"><p className="font-semibold text-[var(--ink)]">CHECKOUT</p><p className="text-[var(--muted)]">Sep 17</p></div>
          <div className="col-span-2 p-3">
            <p className="font-semibold text-[var(--ink)]">GUESTS</p>
            <div className="mt-2 flex items-center gap-2">
              <button type="button" onClick={onDecreaseGuests} className="h-8 w-8 rounded-full border border-[var(--line)] text-sm font-semibold text-[var(--ink)]" aria-label="Decrease guests">-</button>
              <p className="min-w-20 text-center text-sm text-[var(--ink)]">{guestCount} guests</p>
              <button type="button" onClick={onIncreaseGuests} className="h-8 w-8 rounded-full border border-[var(--line)] text-sm font-semibold text-[var(--ink)]" aria-label="Increase guests">+</button>
            </div>
          </div>
        </div>
        <button type="button" className="mt-4 w-full rounded-xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white">Reserve</button>
        <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          <p className="flex items-center justify-between"><span>${pricePerNight} x 5 nights</span><span>${totalPrice}</span></p>
          <p className="flex items-center justify-between border-t border-[var(--line)] pt-2 font-semibold text-[var(--ink)]"><span>Total before taxes</span><span>${totalPrice}</span></p>
        </div>
      </div>
    </aside>
  );
};
