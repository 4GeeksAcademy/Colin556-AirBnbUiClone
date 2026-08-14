import { Category } from "@/types/listing";

type HomeCategoryRowProps = {
  items: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
};

export const HomeCategoryRow = ({
  items,
  activeCategory,
  onSelectCategory,
}: HomeCategoryRowProps) => {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
      {items.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={`chip whitespace-nowrap transition ${
              isActive ? "border-[var(--brand)] bg-[var(--brand)] text-white" : ""
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
};
