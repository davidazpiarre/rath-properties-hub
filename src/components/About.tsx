import { Award, Users, Target, Heart } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src={teamPhoto} 
              alt="Equipo Grupo Inmobiliario Rath" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Conoce a Grupo Inmobiliario Rath
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Con más de 15 años de experiencia en el mercado inmobiliario, nos hemos consolidado 
              como una de las agencias más confiables y profesionales. Nuestro compromiso es ayudarte 
              a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Misión</h3>
                  <p className="text-muted-foreground">
                    Facilitar el acceso a propiedades de calidad, brindando un servicio 
                    personalizado y profesional que supere las expectativas de nuestros clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visión</h3>
                  <p className="text-muted-foreground">
                    Ser la agencia inmobiliaria líder en el mercado, reconocida por nuestra 
                    integridad, experiencia y resultados excepcionales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Valores</h3>
                  <p className="text-muted-foreground">
                    Confianza, transparencia, profesionalismo y compromiso con cada uno de 
                    nuestros clientes. Tu satisfacción es nuestra prioridad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipo Experto</h3>
                  <p className="text-muted-foreground">
                    Contamos con asesores altamente capacitados y certificados, listos para 
                    guiarte en cada paso del proceso inmobiliario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
