import { categories } from "@/data/mockData";

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const CategoryBar = ({ selectedCategory, onSelectCategory }: CategoryBarProps) => {
  return (
    <section className="container mx-auto px-4 -mt-6 relative z-10">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => onSelectCategory(null)}
          className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
            selectedCategory === null
              ? "bg-primary text-primary-foreground shadow-card"
              : "bg-card text-card-foreground shadow-card hover:shadow-card-hover border border-border"
          }`}
        >
          🏪 Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id === selectedCategory ? null : cat.id)}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-card text-card-foreground shadow-card hover:shadow-card-hover border border-border"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryBar;
