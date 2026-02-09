const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 py-10 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🛒</span>
          <span className="font-heading font-bold text-lg text-primary-foreground">PrecioJusto</span>
        </div>
        <p className="text-sm mb-2">
          Compara precios de supermercados en Lima y ahorra en cada compra.
        </p>
        <p className="text-xs text-primary-foreground/40">
          Próximamente: bodegas, minimarkets y mercados distritales
        </p>
        <div className="mt-4 text-xs text-primary-foreground/30">
          © 2026 PrecioJusto · Hecho con ❤️ en Lima
        </div>
      </div>
    </footer>
  );
};

export default Footer;
