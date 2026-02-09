import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md border-b border-foreground/20">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛒</span>
          <span className="font-heading font-bold text-lg text-primary-foreground">
            PrecioJusto
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
          <MapPin className="h-4 w-4" />
          <span>Lima</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
