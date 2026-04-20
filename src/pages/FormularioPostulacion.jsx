import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Upload, Send, CheckCircle, Home } from 'lucide-react';

const FormularioPostulacion = () => {
  const { id } = useParams(); // Usamos 'id' para que coincida con la URL de DetalleArea
  const [enviado, setEnviado] = useState(false);

  // Preguntas personalizadas según el área
  const preguntasPorArea = {
    tech: ["¿Qué lenguajes dominas?", "¿Tienes experiencia en React?", "¿Cuál es tu perfil de GitHub?"],
    experiencia: ["¿Qué herramientas usas (Figma, Adobe)?", "¿Tienes portafolio en Behance?", "Describe tu estilo visual"],
    marketing: ["¿Has manejado campañas digitales?", "¿Qué redes sociales dominas?", "Cuéntanos de un proyecto exitoso"],
    default: ["¿Por qué quieres unirte a esta área?", "¿Qué experiencia previa tienes?", "¿Cuál es tu disponibilidad?"]
  };

  const preguntas = preguntasPorArea[id] || preguntasPorArea.default;

  // --- VISTA DE ÉXITO (Cuando enviado === true) ---
  if (enviado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        {/* Tarjeta de Confirmación */}
        <div className="text-center p-12 bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] max-w-lg w-full mb-8 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            ¡Postulación Recibida!
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Revisaremos tu CV y te contactaremos por Yape.
          </p>
        </div>

        {/* Botón para volver al inicio */}
        <Link 
          to="/" 
          className="group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold transition-all hover:bg-[#7422c4] hover:shadow-[0_15px_35px_rgba(116,34,196,0.25)] active:scale-95"
        >
          <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
          Volver al inicio
        </Link>
      </div>
    );
  }

  // --- VISTA DEL FORMULARIO ---
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Postulación: <span className="text-[#7422c4] capitalize">{id?.replace(/-/g, ' ')}</span>
          </h2>
          <p className="text-gray-500 font-light">Completa los datos para empezar tu carrera en Yape Go.</p>
        </header>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
          
          {/* Mapeo de Preguntas Dinámicas */}
          {preguntas.map((pregunta, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">{pregunta}</label>
              <input 
                type="text" 
                required 
                placeholder="Escribe tu respuesta aquí..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#7422c4] focus:bg-white outline-none transition-all placeholder:text-gray-300" 
              />
            </div>
          ))}

          {/* Sección de carga de CV */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Tu CV (PDF o Imagen)</label>
            <div className="group relative border-2 border-dashed border-gray-200 rounded-[2rem] p-10 text-center hover:border-[#7422c4] hover:bg-purple-50/30 transition-all cursor-pointer">
              <input type="file" id="cv" className="hidden" accept=".pdf,image/*" />
              <label htmlFor="cv" className="cursor-pointer block">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 group-hover:text-[#7422c4] group-hover:bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all shadow-sm">
                  <Upload size={28} />
                </div>
                <p className="text-base text-gray-600 font-semibold">Haz clic para subir tu archivo</p>
                <p className="text-xs text-gray-400 mt-1">Formatos aceptados: PDF, PNG o JPG</p>
              </label>
            </div>
          </div>

          {/* Botón de Envío */}
          <button 
            type="submit" 
            className="w-full bg-[#7422c4] hover:bg-[#5d1ba1] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_25px_rgba(116,34,196,0.2)] hover:shadow-[0_15px_30px_rgba(116,34,196,0.3)] transform active:scale-[0.98]"
          >
            Enviar Postulación 
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioPostulacion;