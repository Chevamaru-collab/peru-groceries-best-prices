import { useStores } from "@/hooks/useGroceryData";

const StoreBar = () => {
  const { data: stores = [] } = useStores();

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-lg font-semibold font-heading text-foreground mb-4">
        Supermercados disponibles
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">{store.logo_emoji}</span>
            <span className="text-sm font-medium text-card-foreground">{store.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoreBar;
