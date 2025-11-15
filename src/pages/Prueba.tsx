import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Palette, BookOpen, Music, Gamepad2, Heart } from "lucide-react";

const actividades = [
  {
    id: 1,
    titulo: "Pintura con Dedos",
    categoria: "Arte",
    edad: "2-4 años",
    descripcion: "Actividad creativa donde los niños exploran colores y texturas usando sus propias manos.",
    materiales: ["Pintura no tóxica", "Papel grueso", "Delantal"],
    beneficios: "Desarrolla la motricidad fina y la creatividad",
    icono: Palette,
    color: "bg-pink-100 text-pink-700"
  },
  {
    id: 2,
    titulo: "Cuenta Cuentos Interactivos",
    categoria: "Lectura",
    edad: "3-5 años",
    descripcion: "Sesiones de lectura donde los niños participan activamente en la historia.",
    materiales: ["Libros ilustrados", "Marionetas", "Disfraces"],
    beneficios: "Mejora el vocabulario y la comprensión",
    icono: BookOpen,
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 3,
    titulo: "Música y Movimiento",
    categoria: "Música",
    edad: "2-5 años",
    descripcion: "Bailes y canciones que ayudan a desarrollar el ritmo y la coordinación.",
    materiales: ["Instrumentos simples", "Música infantil", "Espacio abierto"],
    beneficios: "Desarrolla el sentido del ritmo y la expresión corporal",
    icono: Music,
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 4,
    titulo: "Juegos de Construcción",
    categoria: "Juegos",
    edad: "3-5 años",
    descripcion: "Construcciones con bloques que fomentan la creatividad y el pensamiento lógico.",
    materiales: ["Bloques de madera", "Lego", "Piezas de construcción"],
    beneficios: "Desarrolla habilidades espaciales y resolución de problemas",
    icono: Gamepad2,
    color: "bg-green-100 text-green-700"
  },
  {
    id: 5,
    titulo: "Manualidades con Materiales Reciclados",
    categoria: "Arte",
    edad: "4-5 años",
    descripcion: "Crear arte usando materiales reciclados para enseñar sobre el medio ambiente.",
    materiales: ["Botellas", "Cajas", "Papel reciclado", "Pegamento"],
    beneficios: "Fomenta la creatividad y conciencia ambiental",
    icono: Sparkles,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    id: 6,
    titulo: "Actividades de Emociones",
    categoria: "Desarrollo Social",
    edad: "3-5 años",
    descripcion: "Juegos y actividades para identificar y expresar emociones de forma saludable.",
    materiales: ["Caras de emociones", "Cuentos", "Juegos de rol"],
    beneficios: "Desarrolla inteligencia emocional y empatía",
    icono: Heart,
    color: "bg-red-100 text-red-700"
  },
  {
    id: 7,
    titulo: "Experimentos Científicos Simples",
    categoria: "Ciencia",
    edad: "4-5 años",
    descripcion: "Experimentos seguros y divertidos para despertar la curiosidad científica.",
    materiales: ["Vinagre", "Bicarbonato", "Colorantes", "Recipientes"],
    beneficios: "Despierta la curiosidad y el pensamiento científico",
    icono: Sparkles,
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    id: 8,
    titulo: "Juegos de Memoria",
    categoria: "Juegos",
    edad: "3-5 años",
    descripcion: "Juegos de memoria adaptados para desarrollar la concentración y retención.",
    materiales: ["Tarjetas con imágenes", "Juegos de memoria", "Rompecabezas"],
    beneficios: "Mejora la memoria y la concentración",
    icono: Gamepad2,
    color: "bg-teal-100 text-teal-700"
  }
];

const categorias = ["Todas", "Arte", "Lectura", "Música", "Juegos", "Ciencia", "Desarrollo Social"];

const Prueba = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              🎨 Blog de Actividades Infantiles
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Ideas creativas y educativas para niños de infantil
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              Descubre actividades divertidas que fomentan el aprendizaje, la creatividad y el desarrollo integral de los más pequeños
            </p>
          </div>
        </div>
      </section>

      {/* Actividades Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Actividades Destacadas
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Selecciona una actividad para ver todos los detalles y materiales necesarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actividades.map((actividad) => {
              const Icono = actividad.icono;
              return (
                <Card 
                  key={actividad.id} 
                  className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg ${actividad.color}`}>
                        <Icono className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {actividad.edad}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{actividad.titulo}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {actividad.categoria}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-gray-700">
                      {actividad.descripcion}
                    </CardDescription>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 text-gray-800">Materiales:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {actividad.materiales.map((material, idx) => (
                          <li key={idx}>{material}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm">
                        <span className="font-semibold text-primary">💡 Beneficio: </span>
                        <span className="text-gray-700">{actividad.beneficios}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            💡 Consejos para Padres y Educadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
              <CardHeader>
                <CardTitle className="text-xl">Supervisión y Seguridad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Siempre supervisa las actividades, especialmente aquellas que involucran materiales pequeños o herramientas. 
                  Asegúrate de que todos los materiales sean seguros y apropiados para la edad del niño.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">Paciencia y Flexibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Cada niño tiene su propio ritmo. Permite que exploren y experimenten a su manera. 
                  No te preocupes si el resultado no es perfecto, lo importante es el proceso de aprendizaje.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-xl">Celebra los Logros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Reconoce y celebra los esfuerzos de los niños, no solo los resultados. 
                  Esto fortalece su autoestima y los motiva a seguir explorando y aprendiendo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl">Aprender Jugando</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  El juego es la forma natural de aprender en la infancia. Combina actividades educativas 
                  con diversión para crear experiencias de aprendizaje significativas y memorables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prueba;
