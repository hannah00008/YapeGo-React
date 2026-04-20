import React, { useState } from "react";

export default function TestModal({ isOpen, onClose }) {
  // 1. Estado para el paso actual y las selecciones
  const [paso, setPaso] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [numeroSeleccionado, setNumeroSeleccionado] = useState(null);

  // 2. Banco de preguntas (3 preguntas en total)
  const preguntas = [
    {
      titulo: "Elige la frase que mejor te representa",
      opciones: [
        "Me enfoco en encontrar soluciones rápidas para que mis yaperos nunca dejen de yapear.",
        "Prefiero analizar la seguridad de cada transacción antes de actuar."
      ]
    },
    {
      titulo: "¿Cómo te sientes trabajando en equipo?",
      opciones: [
        "Me encanta colaborar y compartir ideas constantes con mi grupo.",
        "Prefiero tener claridad en mis tareas individuales antes de reunirme."
      ]
    },
    {
      titulo: "Ante un nuevo reto tecnológico, tú:",
      opciones: [
        "Me lanzo a probarlo de inmediato para aprender en el camino.",
        "Busco documentación y tutoriales antes de dar el primer paso."
      ]
    }
  ];

  if (!isOpen) return null;

  const manejarSiguiente = () => {
    if (opcionSeleccionada !== null && numeroSeleccionado !== null) {
      if (paso < preguntas.length - 1) {
        setPaso(paso + 1);
        setOpcionSeleccionada(null); // Reiniciar para la siguiente
        setNumeroSeleccionado(null);
      } else {
        alert("¡Test completado! Gracias por participar.");
        onClose();
      }
    } else {
      alert("Por favor, selecciona una frase y un número antes de continuar.");
    }
  };

  // Cálculo de progreso para la barra superior
  const progreso = ((paso + 1) / preguntas.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
        
        {/* Botón Cerrar */}
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl z-10">&times;</button>

        {/* Barra de progreso dinámica */}
        <div className="w-full bg-gray-100 h-2">
          <div 
            className="bg-purple-600 h-full transition-all duration-500" 
            style={{ width: `${progreso}%` }}
          ></div>
        </div>

        <div className="p-10 text-center">
          <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 italic">
              {preguntas[paso].titulo}
            </h3>
          </div>

          {/* Opciones de Frases */}
          <div className="space-y-4 mb-8">
            {preguntas[paso].opciones.map((frase, index) => (
              <button 
                key={index}
                onClick={() => setOpcionSeleccionada(index)}
                className={`w-full p-5 border-2 rounded-2xl flex items-center gap-4 transition-all text-left ${
                  opcionSeleccionada === index 
                    ? "border-purple-600 bg-purple-50 shadow-md" 
                    : "border-gray-100 hover:border-purple-200"
                }`}
              >
                <div className={`w-6 h-6 border-2 rounded-full flex-shrink-0 flex items-center justify-center ${
                  opcionSeleccionada === index ? "border-purple-600" : "border-gray-300"
                }`}>
                  {opcionSeleccionada === index && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                </div>
                <p className="text-gray-700 font-medium">{frase}</p>
              </button>
            ))}
          </div>

          {/* Escala Numérica Interactiva */}
          <p className="text-gray-400 text-sm mb-4">Selecciona cuánto te representa</p>
          <div className="flex justify-center gap-3 mb-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <button 
                key={num}
                onClick={() => setNumeroSeleccionado(num)}
                className={`w-12 h-12 rounded-full border-2 font-bold transition-all ${
                  numeroSeleccionado === num 
                    ? "bg-purple-600 border-purple-600 text-white shadow-lg scale-110" 
                    : "border-gray-100 text-gray-600 hover:bg-purple-50 hover:border-purple-300"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button 
            onClick={manejarSiguiente}
            className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg ${
              (opcionSeleccionada !== null && numeroSeleccionado !== null)
                ? "bg-purple-600 hover:bg-purple-700" 
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {paso === preguntas.length - 1 ? "Finalizar Test" : "Siguiente pregunta"}
          </button>
        </div>
      </div>
    </div>
  );
}