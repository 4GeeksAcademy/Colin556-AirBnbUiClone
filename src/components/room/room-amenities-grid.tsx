type RoomAmenitiesGridProps = {
  amenities: string[];
};

const amenityIconLabel = (amenity: string) => {
  const iconMap: Record<string, string> = {
    Wifi: "WF",
    Kitchen: "KT",
    "Air conditioning": "AC",
    Washer: "WS",
    "Dedicated workspace": "DW",
    Essentials: "ES",
    "Smart TV": "TV",
    "Hair dryer": "HD",
  };

  return iconMap[amenity] ?? "AM";
};

export const RoomAmenitiesGrid = ({ amenities }: RoomAmenitiesGridProps) => {
  return (
    <div className="space-y-4 border-t border-[var(--line)] pt-6">
      <h3 className="text-xl font-semibold text-[var(--ink)]">What this place offers</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-3 py-3 text-sm text-[var(--ink)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--line)] text-[11px] font-semibold text-[var(--ink)]">
              {amenityIconLabel(amenity)}
            </span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
