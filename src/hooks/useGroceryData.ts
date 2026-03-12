import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface StoreRow {
  id: string;
  name: string;
  slug: string;
  color: string;
  logo_emoji: string;
  store_type: string;
}

export interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  icon: string;
  sort_order: number;
}

export interface PriceRow {
  id: string;
  product_id: string;
  store_id: string;
  price: number;
  in_stock: boolean;
  last_updated: string;
}

export interface ProductRow {
  id: string;
  name: string;
  category_id: string;
  image_emoji: string;
  unit: string;
}

export interface ProductWithPrices extends ProductRow {
  prices: PriceRow[];
}

export function useStores() {
  return useQuery({
    queryKey: ["stores"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stores")
        .select("*")
        .order("name");
      if (error) throw error;
      return data as StoreRow[];
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data as CategoryRow[];
    },
  });
}

export function useProductsWithPrices() {
  return useQuery({
    queryKey: ["products-with-prices"],
    queryFn: async () => {
      const [productsRes, pricesRes] = await Promise.all([
        supabase.from("products").select("*").order("name"),
        supabase.from("prices").select("*"),
      ]);
      if (productsRes.error) throw productsRes.error;
      if (pricesRes.error) throw pricesRes.error;

      const pricesByProduct = new Map<string, PriceRow[]>();
      for (const p of pricesRes.data) {
        const list = pricesByProduct.get(p.product_id) || [];
        list.push(p as PriceRow);
        pricesByProduct.set(p.product_id, list);
      }

      return (productsRes.data as ProductRow[]).map((product) => ({
        ...product,
        prices: pricesByProduct.get(product.id) || [],
      })) as ProductWithPrices[];
    },
  });
}

export function getBestPrice(product: ProductWithPrices) {
  const available = product.prices.filter((p) => p.in_stock);
  if (available.length === 0) return null;
  return available.reduce((best, p) => (p.price < best.price ? p : best));
}

export function getWorstPrice(product: ProductWithPrices) {
  const available = product.prices.filter((p) => p.in_stock);
  if (available.length === 0) return null;
  return available.reduce((worst, p) => (p.price > worst.price ? p : worst));
}

export function getSavings(product: ProductWithPrices) {
  const best = getBestPrice(product);
  const worst = getWorstPrice(product);
  if (!best || !worst) return 0;
  return worst.price - best.price;
}
