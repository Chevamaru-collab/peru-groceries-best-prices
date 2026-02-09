import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import StoreBar from "@/components/StoreBar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === null || product.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const selectedCategoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)?.name
    : "Todos los productos";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <StoreBar />

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-heading text-foreground">
            {selectedCategoryName}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredProducts.length} productos
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-lg font-medium text-foreground mb-1">
              No encontramos productos
            </p>
            <p className="text-sm text-muted-foreground">
              Intenta con otro término de búsqueda o categoría
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
