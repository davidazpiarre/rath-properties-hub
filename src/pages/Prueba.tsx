import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Prueba = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Página de Prueba</h1>
          <p className="text-center text-lg text-muted-foreground">
            Esta es una página de prueba creada para demostrar la navegación.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prueba;
