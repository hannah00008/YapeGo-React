import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const contenidoAreas = {
  "tech": {
    titulo: "Tech (Tecnología)",
    emoji: "💻",
    frase: "Aquí se construye y mantiene la aplicación.",
    puntos: ["Desarrollo de la app (frontend/backend)", "Programación (React, APIs, etc.)", "Seguridad del sistema", "Infraestructura"],
    imagenCabecera: "/imagen-tech.png" 
  },
  "data-and-analytics": {
    titulo: "Data & Analytics",
    emoji: "📊",
    frase: "Aquí analizamos datos para tomar mejores decisiones.",
    puntos: ["Análisis de usuarios", "Métricas (uso de la app, búsquedas)", "Reportes estrategicos", "Inteligencia de negocio"],
    imagenCabecera: "/imagen-data.png"
  },
  "people": {
    titulo: "People (RRHH)",
    emoji: "👥",
    frase: "Encuentra y gestiona al mejor talento del equipo.",
    puntos: ["Reclutamiento", "Selección de talento", "Cultura", "Capacitación"],
     imagenCabecera: "/imagen-people.png"
  },
   "planeamiento": {
    titulo: "Planeamiento",
    emoji: "📈",
    frase: "Aquí se decide hacia dónde va la empresa.",
    puntos: ["Objetivos del negocio", "Planes a futuro", "Organización de proyectos", "Crecimiento"],
     imagenCabecera: "/imagen-planeamiento.png" 
  },
  "experiencia": {
    titulo: "Experiencia (UX/UI)",
    emoji: "⭐",
    frase: "Aquí se asegura que la app sea fácil y agradable de usar.",
    puntos: ["Diseño de la app", "Facilidad de uso", "Interfaz atractiva", "Experiencia del cliente"],
     imagenCabecera: "/imagen-experiencia.png" 
  },
  "pagos": {
    titulo: "Pagos",
    emoji: "💳",
    frase: "Aquí se gestionan los pagos de forma rápida y segura.",
    puntos: ["Transferencias", "Pagos digitales", "Seguridad en transacciones", "Integración con bancos"],
     imagenCabecera: "/imagen-pagos.png" 
  },
  "commerce": {
    titulo: "Commerce",
    emoji: "🛒",
    frase: "Aquí se conecta a usuarios con oportunidades o servicios.",
    puntos: ["Ofertas de empleo", "Servicios dentro de la app", "Relación con empresas", "Publicaciones"],
     imagenCabecera: "/imagen-commerce.png" 
  },
  "marketing": {
    titulo: "Marketing",
    emoji: "📣",
    frase: "Aquí se da a conocer la app y se atraen usuarios.",
    puntos: ["Publicidad", "Redes sociales", "Campañas", "Atracción de usuarios"],
     imagenCabecera: "/imagen-marketing.png" 
  }
};

const DetalleArea = () => {
  const { id } = useParams();
  const info = contenidoAreas[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
        <h2 className="text-3xl font-bold text-gray-800">Área no encontrada</h2>
        <Link to="/" className="text-[#b347ff] mt-4 hover:underline text-lg">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      
      {/* --- CABECERA HERO --- */}
      <section 
        className="relative min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 bg-cover bg-center font-sans"
        style={{ backgroundImage: `url(${info.imagenCabecera})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <div className="mb-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-white hover:bg-white/20 transition-all group"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#b347ff] group-hover:scale-110 transition-transform">
                ←
              </span>
              Volver a todas las áreas
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <span className="text-6xl md:text-7xl drop-shadow-lg">{info.emoji}</span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                {info.titulo}
              </h1>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-white p-6 rounded-r-2xl w-full max-w-4xl shadow-xl">
              <p className="text-2xl md:text-3xl text-white font-medium italic">
                "{info.frase}"
              </p>
            </div>

            <div className="mt-6 flex items-center gap-6 group">
                <button className="w-20 h-20 rounded-full bg-[#b347ff] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#a236ee] transition-all">
                    <span className="text-3xl">▼</span>
                </button>
                <div className="flex flex-col">
                    <span className="text-xl font-bold group-hover:text-[#b347ff] transition-colors">Descubre roles</span>
                    <span className="text-base text-white/70">Conoce el futuro del equipo</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE CONTENIDO --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden">
          
          <div className="bg-[#b347ff] p-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
               <span className="text-4xl animate-bounce">🚀</span> ¿Qué hacemos aquí?
            </h2>
          </div>
          
          <div className="p-10 md:p-16">
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {info.puntos.map((punto, index) => (
                <li key={index} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center text-[#b347ff] group-hover:bg-[#b347ff] group-hover:text-white group-hover:rotate-6 transition-all duration-300 font-black text-xl shadow-sm">
                    {index + 1}
                  </div>
                  <span className="text-xl text-gray-700 font-semibold tracking-tight">
                    {punto}
                  </span>
                </li>
              ))}
            </ul>

            {/* --- BOTÓN DE POSTULACIÓN REDISEÑADO --- */}
            <div className="mt-20 pt-10 border-t border-gray-100 text-center space-y-8">
              <div className="inline-block p-[3px] rounded-[2.5rem] bg-gradient-to-r from-[#b347ff] via-[#7422c4] to-[#ff47d1] shadow-[0_20px_50px_rgba(116,34,196,0.3)] hover:shadow-[0_25px_60px_rgba(116,34,196,0.45)] transition-shadow">
                <Link 
                  to={`/postular/${id}`} 
                  className="group block bg-white hover:bg-transparent text-[#7422c4] hover:text-white px-16 py-6 rounded-[2.3rem] font-black text-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4"
                >
                  <span className="group-hover:animate-pulse">✨</span>
                  <span>¡Postular a {info.titulo}!</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-3xl">→</span>
                </Link>
              </div>
              
              <div className="max-w-md mx-auto">
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  Únete a la comunidad de Yaperos y ayúdanos a simplificar la vida de millones de peruanos.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DetalleArea;