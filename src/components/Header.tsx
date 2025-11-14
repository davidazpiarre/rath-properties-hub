import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  //Prueba git

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+525512345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+52 55 1234 5678</span>
              </a>
              <a href="mailto:contact@gruporath.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">contacto@gruporath.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => scrollToSection("inicio")} className="text-2xl font-bold text-primary">
            Grupo Inmobiliario Rath
          </button>

          {/* Desktop Menu (always visible) */}
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("propiedades")} className="hover:text-primary transition-colors">
              Propiedades
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="hover:text-primary transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("servicios")} className="hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-primary transition-colors">
              Contacto
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;