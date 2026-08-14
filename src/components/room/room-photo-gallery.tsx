import Image from "next/image";

type RoomPhotoGalleryProps = {
  title: string;
  gallery: string[];
  photoIndex: number;
  onSelectPhoto: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export const RoomPhotoGallery = ({
  title,
  gallery,
  photoIndex,
  onSelectPhoto,
  onPrevious,
  onNext,
}: RoomPhotoGalleryProps) => {
  return (
    <section className="space-y-3">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={gallery[photoIndex]}
          alt={`${title} photo ${photoIndex + 1}`}
          width={1400}
          height={950}
          className="h-80 w-full object-cover md:h-[480px]"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/45 to-transparent px-4 py-4">
          <button type="button" onClick={onPrevious} className="rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[var(--ink)]">
            Previous
          </button>
          <p className="text-xs font-semibold text-white">{photoIndex + 1}/{gallery.length}</p>
          <button type="button" onClick={onNext} className="rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[var(--ink)]">
            Next
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {gallery.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => onSelectPhoto(index)}
            className={`overflow-hidden rounded-2xl border ${photoIndex === index ? "border-[var(--brand)]" : "border-[var(--line)]"}`}
            aria-label={`Show photo ${index + 1}`}
          >
            <Image src={image} alt={`${title} thumbnail ${index + 1}`} width={220} height={160} className="h-20 w-28 object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};
