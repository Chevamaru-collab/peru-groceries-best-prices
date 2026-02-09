export type Store = {
  id: string;
  name: string;
  colorVar: string;
  logo: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export type ProductPrice = {
  storeId: string;
  price: number;
  unit: string;
  inStock: boolean;
  lastUpdated: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  prices: ProductPrice[];
};

export const stores: Store[] = [
  { id: "wong", name: "Wong", colorVar: "store-wong", logo: "🔴" },
  { id: "metro", name: "Metro", colorVar: "store-metro", logo: "🔵" },
  { id: "plaza-vea", name: "Plaza Vea", colorVar: "store-plaza-vea", logo: "🟢" },
  { id: "tottus", name: "Tottus", colorVar: "store-tottus", logo: "🟦" },
  { id: "makro", name: "Makro", colorVar: "store-makro", logo: "🟠" },
  { id: "mas", name: "Mass", colorVar: "store-mas", logo: "🟥" },
];

export const categories: Category[] = [
  { id: "frutas", name: "Frutas", icon: "🍎", count: 24 },
  { id: "verduras", name: "Verduras", icon: "🥬", count: 32 },
  { id: "carnes", name: "Carnes", icon: "🥩", count: 18 },
  { id: "lacteos", name: "Lácteos", icon: "🥛", count: 15 },
  { id: "abarrotes", name: "Abarrotes", icon: "🛒", count: 45 },
  { id: "bebidas", name: "Bebidas", icon: "🥤", count: 22 },
  { id: "limpieza", name: "Limpieza", icon: "🧹", count: 20 },
  { id: "panaderia", name: "Panadería", icon: "🍞", count: 12 },
];

export const products: Product[] = [
  {
    id: "1", name: "Arroz Extra Costeño 5kg", categoryId: "abarrotes",
    image: "🍚",
    prices: [
      { storeId: "wong", price: 22.90, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 21.50, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 20.90, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 21.20, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 19.90, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 21.90, unit: "bolsa", inStock: false, lastUpdated: "2026-02-08" },
    ],
  },
  {
    id: "2", name: "Leche Gloria Entera 1L", categoryId: "lacteos",
    image: "🥛",
    prices: [
      { storeId: "wong", price: 5.80, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 5.50, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 5.40, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 5.60, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 5.10, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 5.70, unit: "unidad", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "3", name: "Pollo Entero x kg", categoryId: "carnes",
    image: "🍗",
    prices: [
      { storeId: "wong", price: 11.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 10.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 10.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 10.70, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 9.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 11.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "4", name: "Papa Blanca x kg", categoryId: "verduras",
    image: "🥔",
    prices: [
      { storeId: "wong", price: 3.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 3.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 2.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 3.10, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 2.70, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 3.30, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "5", name: "Aceite Primor 1L", categoryId: "abarrotes",
    image: "🫒",
    prices: [
      { storeId: "wong", price: 12.90, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 11.90, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 11.50, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 12.20, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 10.90, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 12.50, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "6", name: "Plátano de Seda x kg", categoryId: "frutas",
    image: "🍌",
    prices: [
      { storeId: "wong", price: 4.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 3.80, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 3.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 3.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 3.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 4.00, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "7", name: "Azúcar Rubia Casa Grande 1kg", categoryId: "abarrotes",
    image: "🍬",
    prices: [
      { storeId: "wong", price: 4.90, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 4.50, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 4.30, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 4.60, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 3.90, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 4.70, unit: "bolsa", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "8", name: "Huevos La Calera x 15", categoryId: "lacteos",
    image: "🥚",
    prices: [
      { storeId: "wong", price: 9.90, unit: "bandeja", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 9.20, unit: "bandeja", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 8.90, unit: "bandeja", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 9.50, unit: "bandeja", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 8.50, unit: "bandeja", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 9.80, unit: "bandeja", inStock: false, lastUpdated: "2026-02-08" },
    ],
  },
  {
    id: "9", name: "Cebolla Roja x kg", categoryId: "verduras",
    image: "🧅",
    prices: [
      { storeId: "wong", price: 4.80, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 4.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 3.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 4.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 3.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 4.60, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "10", name: "Inca Kola 1.5L", categoryId: "bebidas",
    image: "🥤",
    prices: [
      { storeId: "wong", price: 7.50, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 6.90, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 6.50, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 7.00, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 6.20, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 7.20, unit: "botella", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "11", name: "Tomate x kg", categoryId: "verduras",
    image: "🍅",
    prices: [
      { storeId: "wong", price: 5.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 5.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 4.80, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 5.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 4.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 5.60, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
  {
    id: "12", name: "Limón x kg", categoryId: "frutas",
    image: "🍋",
    prices: [
      { storeId: "wong", price: 6.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "metro", price: 5.90, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "plaza-vea", price: 5.50, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "tottus", price: 6.00, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "makro", price: 5.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
      { storeId: "mas", price: 6.20, unit: "kg", inStock: true, lastUpdated: "2026-02-09" },
    ],
  },
];

export function getBestPrice(product: Product) {
  const available = product.prices.filter(p => p.inStock);
  if (available.length === 0) return null;
  return available.reduce((best, p) => p.price < best.price ? p : best);
}

export function getWorstPrice(product: Product) {
  const available = product.prices.filter(p => p.inStock);
  if (available.length === 0) return null;
  return available.reduce((worst, p) => p.price > worst.price ? p : worst);
}

export function getSavings(product: Product) {
  const best = getBestPrice(product);
  const worst = getWorstPrice(product);
  if (!best || !worst) return 0;
  return worst.price - best.price;
}

export function getStoreName(storeId: string) {
  return stores.find(s => s.id === storeId)?.name ?? storeId;
}
