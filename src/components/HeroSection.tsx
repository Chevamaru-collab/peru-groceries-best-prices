import { Search } from "lucide-react";
import heroImage from "@/assets/hero-groceries.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mercado de frutas y verduras frescas en Lima"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 mb-6 animate-fade-up">
            <span className="text-sm font-medium text-primary-foreground">
              📍 Lima, Perú
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Encuentra el mejor
            <span className="block text-secondary">precio</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Compara precios de supermercados en Lima y ahorra en cada compra
          </p>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar productos... (ej: arroz, leche, pollo)"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card text-card-foreground shadow-card-hover border border-border text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
