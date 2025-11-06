import { Home, Key, Building2, FileCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Home,
    title: "Venta de Propiedades",
    description: "Asesoría completa para la compra y venta de inmuebles residenciales y comerciales con los mejores precios del mercado."
  },
  {
    icon: Key,
    title: "Renta de Inmuebles",
    description: "Encuentra la propiedad ideal en renta. Gestionamos todo el proceso para garantizar una experiencia sin complicaciones."
  },
  {
    icon: Building2,
    title: "Administración",
    description: "Servicio profesional de administración de propiedades. Nos encargamos de todo para que tú no te preocupes."
  },
  {
    icon: FileCheck,
    title: "Asesoría Legal",
    description: "Respaldo legal completo en todas tus transacciones inmobiliarias. Protegemos tus intereses en cada paso."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para todas tus necesidades inmobiliarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
