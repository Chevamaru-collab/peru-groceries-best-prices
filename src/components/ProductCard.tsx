import { Product, getBestPrice, getSavings, getStoreName, stores } from "@/data/mockData";
import { TrendingDown, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const storeColorMap: Record<string, string> = {
  wong: "bg-store-wong",
  metro: "bg-store-metro",
  "plaza-vea": "bg-store-plaza-vea",
  tottus: "bg-store-tottus",
  makro: "bg-store-makro",
  mas: "bg-store-mas",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const best = getBestPrice(product);
  const savings = getSavings(product);

  if (!best) return null;

  const sortedPrices = [...product.prices]
    .filter((p) => p.inStock)
    .sort((a, b) => a.price - b.price);

  return (
    <div
      className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all cursor-pointer animate-scale-in group"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="text-4xl flex-shrink-0">{product.image}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold font-heading text-card-foreground text-base leading-tight mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                S/ {best.price.toFixed(2)}
              </span>
              <span className="text-xs text-muted-foreground">/{best.unit}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-xs font-medium text-muted-foreground">
                en {getStoreName(best.storeId)}
              </span>
              {savings > 0 && (
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                  <TrendingDown className="h-3 w-3" />
                  Ahorras S/ {savings.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Expanded price list */}
        {expanded && (
          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Comparar precios
            </p>
            {sortedPrices.map((p, i) => {
              const store = stores.find((s) => s.id === p.storeId);
              const isBest = i === 0;
              const isWorst = i === sortedPrices.length - 1;
              return (
                <div
                  key={p.storeId}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    isBest ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${storeColorMap[p.storeId] || "bg-muted-foreground"}`}
                    />
                    <span className="text-sm font-medium text-card-foreground">
                      {store?.name}
                    </span>
                    {isBest && (
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5">
                        <ArrowDown className="h-2.5 w-2.5" /> MEJOR
                      </span>
                    )}
                    {isWorst && sortedPrices.length > 1 && (
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-accent bg-accent/10 rounded px-1.5 py-0.5">
                        <ArrowUp className="h-2.5 w-2.5" /> MÁS CARO
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      isBest ? "text-primary" : "text-card-foreground"
                    }`}
                  >
                    S/ {p.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="px-5 py-2.5 bg-muted/30 rounded-b-2xl flex items-center justify-between border-t border-border">
        <div className="flex -space-x-1">
          {sortedPrices.slice(0, 4).map((p) => (
            <div
              key={p.storeId}
              className={`w-4 h-4 rounded-full border-2 border-card ${storeColorMap[p.storeId] || "bg-muted-foreground"}`}
            />
          ))}
          {sortedPrices.length > 4 && (
            <div className="w-4 h-4 rounded-full border-2 border-card bg-muted flex items-center justify-center">
              <span className="text-[7px] font-bold text-muted-foreground">+{sortedPrices.length - 4}</span>
            </div>
          )}
        </div>
        <span className="text-xs text-muted-foreground">
          {expanded ? "Cerrar" : "Ver precios"} →
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
