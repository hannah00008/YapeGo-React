import React, { useState } from 'react';
// Usamos iconos estándar de Lucide que NO darán error
import { MessageSquareText, X, Send, BotMessageSquare, CornerDownRight, Zap } from 'lucide-react';

const ChatBotYape = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Preguntas personalizadas para Yape Go
  const preguntas = [
    { 
      id: 1,
      q: "¿Cómo potenciar mi perfil?", 
      a: "Sube tu CV en formato PDF y nuestra IA te dará recomendaciones personalizadas.",
      icon: <Zap size={16} className="text-amber-400" />
    },
    { 
      id: 2,
      q: "¿Qué empresas buscan talento?", 
      a: "Tenemos alianzas con startups y grandes corporaciones del sector tecnológico y financiero.",
      icon: <Briefcase size={16} className="text-emerald-400" />
    },
    { 
      id: 3,
      q: "¿Cómo funcionan las entrevistas?", 
      a: "Te conectamos directamente con los reclutadores para una entrevista ágil y digital.",
      icon: <Send size={16} className="text-sky-400" />
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Botón Flotante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#7422c4] p-5 rounded-full shadow-2xl hover:bg-[#8a33e0] transition-all hover:scale-110 active:scale-95 group border-4 border-white/20"
      >
        {isOpen ? (
          <X size={30} className="text-white" />
        ) : (
          <MessageSquareText size={30} className="text-white group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Ventana de Asistente (Ajustada) */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[360px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Cabecera */}
          <div className="bg-[#7422c4] p-6 text-white flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/20">
              <BotMessageSquare size={28} className="text-purple-100" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Asistente Yape <span className="text-purple-200 font-light">Go</span></h3>
              <p className="text-xs opacity-70">En línea ahora</p>
            </div>
          </div>
          
          {/* Cuerpo - Ajustado el padding superior para que no se vea "muy arriba" */}
          <div className="p-6 pt-8 h-[420px] overflow-y-auto space-y-8 bg-gray-50/30">
            {/* Mensaje de Bienvenida */}
            <div className="flex gap-3 items-start">
              <div className="bg-[#7422c4]/10 p-2 rounded-full mt-1">
                <BotMessageSquare size={16} className="text-[#7422c4]" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm leading-relaxed text-gray-800">
                ¡Hola! 👋 Soy tu guía digital. ¿En qué puedo ayudarte hoy?
              </div>
            </div>
            
            {/* Opciones de Preguntas */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Preguntas Frecuentes</p>
              {preguntas.map((item) => (
                <details key={item.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:border-[#7422c4]/30">
                  <summary className="list-none p-4 text-sm font-semibold text-gray-900 cursor-pointer flex justify-between items-center group-open:bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {item.q}
                    </div>
                    <CornerDownRight size={16} className="text-gray-400 transition-transform group-open:rotate-90 group-open:text-[#7422c4]" />
                  </summary>
                  <div className="p-5 pt-2 text-sm text-gray-600 border-t border-gray-50 bg-white leading-relaxed">
                    {/* Se eliminó el "Saber más" y se ajustó el espaciado */}
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Input decorativo */}
          <div className="p-4 bg-white border-t border-gray-50 flex gap-3">
            <input 
              type="text" 
              placeholder="Escribe tu duda aquí..." 
              className="w-full text-xs p-3 bg-gray-100 rounded-xl focus:outline-none"
              disabled 
            />
            <div className="bg-gray-100 text-gray-300 p-3 rounded-xl">
              <Send size={18} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helpers para evitar errores de iconos
const Briefcase = ({size, className}) => <svg size={size} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;

export default ChatBotYape;