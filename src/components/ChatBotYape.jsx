import React, { useState } from 'react';
import { MessageSquareText, X, BotMessageSquare, CornerDownRight, Zap, Briefcase, GraduationCap, LifeBuoy, Send } from 'lucide-react';

const ChatBotYape = () => {
  const [isOpen, setIsOpen] = useState(false);

  const preguntas = [
    { 
      id: 1,
      q: "¿Cómo potenciar mi perfil?", 
      a: "Sube tu CV en formato PDF y nuestra IA te dará recomendaciones personalizadas para destacar.",
      icon: <Zap size={16} className="text-amber-400" />
    },
    { 
      id: 2,
      q: "¿Qué empresas buscan talento?", 
      a: "Conectamos con startups y empresas top del sector tech y financiero en todo el Perú.",
      icon: <Briefcase size={16} className="text-emerald-400" />
    },
    { 
      id: 3,
      q: "¿Tienen cursos certificados?", 
      a: "¡Sí! En la sección de Aprendizaje encontrarás rutas gratuitas con certificación oficial.",
      icon: <GraduationCap size={16} className="text-purple-400" />
    },
    { 
      id: 4,
      q: "¿Cómo funcionan las entrevistas?", 
      a: "Son 100% digitales. Te notificaremos vía app para agendar tu primera sesión con el equipo de selección.",
      icon: <Send size={16} className="text-sky-400" />
    },
    { 
      id: 5,
      q: "¿Necesitas ayuda técnica?", 
      a: "Si tienes problemas con la plataforma, escríbenos a soporte@yapego.pe para ayudarte de inmediato.",
      icon: <LifeBuoy size={16} className="text-rose-400" />
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[10000] font-sans">
      {/* Botón Flotante - Más discreto */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#7422c4] p-4 rounded-full shadow-lg hover:bg-[#8a33e0] transition-all hover:scale-105 active:scale-95 group border-2 border-white/20"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquareText size={24} className="text-white group-hover:rotate-6 transition-transform" />
        )}
      </button>

      {/* Ventana de Asistente (Compacta y Estilizada) */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* Cabecera más delgada */}
          <div className="bg-[#7422c4] p-5 text-white flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl border border-white/10">
              <BotMessageSquare size={22} className="text-purple-100" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Asistente Yape <span className="text-purple-200 font-light">Go</span></h3>
              <p className="text-[10px] opacity-70 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> En línea
              </p>
            </div>
          </div>
          
          {/* Cuerpo - Altura reducida y sin input al final */}
          <div className="p-5 h-[350px] overflow-y-auto space-y-6 bg-gray-50/50 scrollbar-hide">
            {/* Mensaje de Bienvenida */}
            <div className="flex gap-2.5 items-start">
              <div className="bg-[#7422c4]/10 p-1.5 rounded-full mt-1">
                <BotMessageSquare size={14} className="text-[#7422c4]" />
              </div>
              <div className="bg-white p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-xs leading-relaxed text-gray-700 italic">
                ¡Hola! 👋 Soy tu guía digital. Selecciona una pregunta para ayudarte:
              </div>
            </div>
            
            {/* Opciones de Preguntas */}
            <div className="space-y-3">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-1">Preguntas Populares</p>
              {preguntas.map((item) => (
                <details key={item.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
                  <summary className="list-none p-3.5 text-xs font-semibold text-gray-800 cursor-pointer flex justify-between items-center group-open:bg-purple-50/30">
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      {item.q}
                    </div>
                    <CornerDownRight size={14} className="text-gray-300 transition-transform group-open:rotate-90 group-open:text-[#7422c4]" />
                  </summary>
                  <div className="p-4 pt-0 text-[11px] text-gray-600 bg-white leading-relaxed">
                    <div className="h-[1px] w-full bg-gray-50 mb-3" />
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Pie de página decorativo (Reemplaza al input) */}
          <div className="py-3 bg-white text-center">
            <p className="text-[9px] text-gray-300 font-medium">Yape Go v1.0 • Impulsando tu carrera</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotYape;