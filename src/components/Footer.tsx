import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Grupo Inmobiliario Rath</h3>
            <p className="text-primary-foreground/80">
              Tu socio de confianza en el mercado inmobiliario. Encuentra tu hogar ideal con nosotros.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-primary-foreground transition-colors">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6 text-primary-foreground/80">
              <p className="mb-2">Av. Paseo de la Reforma 505</p>
              <p>Ciudad de México, C.P. 06500</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Grupo Inmobiliario Rath. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
