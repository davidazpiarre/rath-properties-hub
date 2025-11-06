import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Departamento Moderno en Polanco",
    location: "Polanco, Ciudad de México",
    price: "$8,500,000 MXN",
    type: "Venta" as const,
    beds: 3,
    baths: 2,
    area: "180 m²"
  },
  {
    id: 2,
    image: property2,
    title: "Casa Residencial con Jardín",
    location: "Interlomas, Estado de México",
    price: "$15,000,000 MXN",
    type: "Venta" as const,
    beds: 4,
    baths: 3,
    area: "350 m²"
  },
  {
    id: 3,
    image: property3,
    title: "Oficina Corporativa",
    location: "Santa Fe, Ciudad de México",
    price: "$45,000 MXN/mes",
    type: "Renta" as const,
    beds: 0,
    baths: 2,
    area: "200 m²"
  },
  {
    id: 4,
    image: property4,
    title: "Penthouse con Terraza",
    location: "Condesa, Ciudad de México",
    price: "$12,500,000 MXN",
    type: "Venta" as const,
    beds: 3,
    baths: 3,
    area: "220 m²"
  },
  {
    id: 5,
    image: property5,
    title: "Estudio Amueblado",
    location: "Roma Norte, Ciudad de México",
    price: "$18,000 MXN/mes",
    type: "Renta" as const,
    beds: 1,
    baths: 1,
    area: "55 m²"
  },
  {
    id: 6,
    image: property6,
    title: "Casa con Alberca",
    location: "Coyoacán, Ciudad de México",
    price: "$25,000 MXN/mes",
    type: "Renta" as const,
    beds: 5,
    baths: 4,
    area: "400 m²"
  }
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Propiedades Destacadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de inmuebles premium en las mejores ubicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
