import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export const RoomNotFoundView = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] pb-24">
      <MainHeader compact />
      <main className="mx-auto w-full max-w-3xl px-4 pb-8 pt-12 md:px-8">
        <div className="rounded-3xl border border-[var(--line)] bg-white p-6 text-center">
          <h1 className="font-display text-3xl text-[var(--ink)]">Room not found</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">This listing is unavailable right now.</p>
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
};
