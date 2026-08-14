import { Category } from "@/types/listing";

type CategoryChipsProps = {
  items: Category[];
};

export const CategoryChips = ({ items }: CategoryChipsProps) => {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
      {items.map((item) => (
        <button key={item.id} type="button" className="chip whitespace-nowrap">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};