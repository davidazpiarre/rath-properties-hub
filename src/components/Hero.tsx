import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.getElementById("propiedades");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tu Próximo Hogar Empieza Aquí
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Expertos en venta, renta y administración de propiedades
          </p>

          {/* Property Search */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de operación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venta">Venta</SelectItem>
                  <SelectItem value="renta">Renta</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="departamento">Departamento</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Ubicación" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary-hover" onClick={scrollToProperties}>
              <Search className="mr-2 h-4 w-4" />
              Buscar Propiedad
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
