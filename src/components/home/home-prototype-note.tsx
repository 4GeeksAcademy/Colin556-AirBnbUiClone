import { SectionHeading } from "@/components/common/section-heading";

export const HomePrototypeNote = () => {
  return (
    <section className="surface-card rounded-3xl p-5 md:p-8">
      <SectionHeading title="Plan from anywhere" subtitle="A map-like experience appears on desktop in catalog" />
      <p className="max-w-2xl text-sm text-[var(--muted)] md:text-base">
        This prototype mirrors Airbnb component relationships: shared headers, reusable listing cards,
        filter chips, and a room page fed by the same listing model.
      </p>
    </section>
  );
};
