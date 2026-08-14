import { MainHeader } from "@/components/layout/main-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export const RoomLoadingView = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] pb-24">
      <MainHeader compact />
      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-8 pt-5 md:px-8 md:pt-8">
        <div className="h-10 w-2/3 animate-pulse rounded-2xl bg-white" />
        <div className="h-[360px] animate-pulse rounded-3xl bg-white md:h-[480px]" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_360px]">
          <div className="h-[420px] animate-pulse rounded-3xl bg-white" />
          <div className="h-[320px] animate-pulse rounded-3xl bg-white" />
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
};
