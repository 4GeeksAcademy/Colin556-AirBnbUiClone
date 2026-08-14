type RoomHostRowProps = {
  hostName: string;
  hostRole: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

const getYearsHosting = (hostRole: string) => {
  const match = hostRole.match(/Hosting for (\d+) years/i);
  return match ? `${match[1]} years hosting` : "New host";
};

export const RoomHostRow = ({
  hostName,
  hostRole,
  maxGuests,
  bedrooms,
  beds,
  baths,
}: RoomHostRowProps) => {
  return (
    <div className="border-b border-[var(--line)] pb-6">
      <h2 className="text-2xl font-semibold text-[var(--ink)]">Entire rental unit hosted by {hostName}</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {maxGuests} guests | {bedrooms} bedrooms | {beds} beds | {baths} baths
      </p>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--line)] text-sm font-semibold text-[var(--ink)]">
          {hostName.slice(0, 1)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--ink)]">Host {hostName}</p>
          <p className="text-xs text-[var(--muted)]">{getYearsHosting(hostRole)}</p>
        </div>
      </div>
    </div>
  );
};
