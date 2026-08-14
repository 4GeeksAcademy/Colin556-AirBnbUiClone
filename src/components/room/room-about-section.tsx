type RoomAboutSectionProps = {
  about: string;
  highlights: string[];
};

export const RoomAboutSection = ({ about, highlights }: RoomAboutSectionProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-[var(--ink)]">About this place</h3>
      <p className="text-sm leading-7 text-[var(--muted)]">{about}</p>
      <ul className="space-y-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-[var(--ink)]">- {highlight}</li>
        ))}
      </ul>
    </div>
  );
};
