import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ChevronRight, Rocket, Target, Users } from 'lucide-react';

export default function Orientacion() {
  const preguntas = [
    "¿Tienes acceso a internet?",
    "¿Tienes ganas de aprender?",
    "¿Puedes comprometerte con el proceso?",
  ];

  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));

  const [intereses, setIntereses] = useState({
  area: "",
  nivel: "",
  objetivo: ""
});

const [resultadoQuiz, setResultadoQuiz] = useState(null);

  const handleRespuesta = (index, valor) => {
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  };

  const progreso = (respuestas.filter((r) => r !== null).length / preguntas.length) * 100;
  const califica = respuestas.every((r) => r === true);

    const obtenerRecomendaciones = () => {
  const tips = [];

  if (respuestas[0] === false) {
    tips.push("Puedes usar cabinas públicas, redes compartidas o espacios gratuitos con internet.");
  }
  if (respuestas[1] === false) {
    tips.push("Empieza con contenido corto para descubrir qué te gusta.");
  }
  if (respuestas[2] === false) {
    tips.push("Comienza con solo 20 minutos al día. La constancia vale más que la intensidad.");
  }

  return tips;
};

// 👇 ESTA VA AFUERA (IMPORTANTE)
const generarResultado = () => {
  let resultado = "";

  const texto = intereses.area.toLowerCase();

  if (texto.includes("diseño")) {
    resultado = "Creatividad visual 🎨 (Diseño UX/UI, branding)";
  } else if (texto.includes("program")) {
    resultado = "Desarrollo tecnológico 💻 (Frontend, Backend)";
  } else if (texto.includes("marketing")) {
    resultado = "Marketing digital 📈 (Redes, contenido)";
  } else {
    resultado = "Explorador digital 🚀 (puedes descubrir múltiples áreas)";
  }

  setResultadoQuiz(resultado);
};
  return (
    // SECCIÓN CORREGIDA: pt-32 asegura que el Navbar no tape el título
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HERO SECTION */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <Rocket size={16} /> <span>Tu carrera empieza aquí</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight"
        >
          Orientación para <span className="text-[#7422c4]">Postular</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Te guiamos paso a paso y te ayudamos a descubrir si estás listo para ser parte de la comunidad Yape Go.
        </motion.p>
      </section>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: REQUISITOS */}
        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-50 text-[#7422c4] rounded-2xl">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Criterios clave</h2>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <Users className="text-emerald-500" />, text: "Ser joven con ganas de mejorar" },
                { icon: <CheckCircle className="text-emerald-500" />, text: "Compromiso con el autoaprendizaje" },
                { icon: <CheckCircle className="text-emerald-500" />, text: "Tener acceso a una conexión estable" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-hover hover:border-purple-200">
                  {item.icon}
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* PASOS DE POSTULACIÓN */}
          <section>
            <h2 className="text-2xl font-black mb-6 text-gray-900 ml-2">El camino a seguir</h2>
            <div className="grid gap-4">
              {["Regístrate y completa tu perfil", "Evaluación de habilidades", "Entrevista con el equipo"].map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#7422c4] text-white rounded-xl font-black">
                    {i + 1}
                  </span>
                  <p className="font-bold text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: TEST INTERACTIVO */}
        <motion.section 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(116,34,196,0.08)] border-2 border-[#7422c4]/10 sticky top-32"
        >
          <h2 className="text-2xl font-black mb-2 text-gray-900">¿Estás listo hoy?</h2>
          <p className="text-gray-400 mb-8 font-light italic">Responde con sinceridad para ver tu resultado</p>

          <div className="w-full bg-gray-100 rounded-full h-3 mb-10 overflow-hidden">
            <motion.div
              className="bg-[#7422c4] h-3 shadow-[0_0_15px_rgba(116,34,196,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${progreso}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="space-y-8">
            {preguntas.map((pregunta, i) => (
              <div key={i} className="group">
                <p className="font-bold text-gray-800 mb-4 text-lg">{pregunta}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleRespuesta(i, true)}
                    className={`flex-1 py-4 rounded-2xl font-black transition-all transform active:scale-95 ${
                      respuestas[i] === true
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200"
                        : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-500"
                    }`}
                  >
                    Sí, claro
                  </button>
                  <button
                    onClick={() => handleRespuesta(i, false)}
                    className={`flex-1 py-4 rounded-2xl font-black transition-all transform active:scale-95 ${
                      respuestas[i] === false
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-200"
                        : "bg-gray-50 text-gray-400 hover:bg-rose-50 hover:text-rose-500"
                    }`}
                  >
                    Aún no
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RESULTADO DINÁMICO */}
          {progreso === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-10 p-6 rounded-3xl text-center ${
                califica ? "bg-emerald-50 border border-emerald-100" : "bg-rose-50 border border-rose-100"
              }`}
            >
              {califica ? (
                <div>
                  <div className="text-emerald-600 font-black text-xl mb-2 flex justify-center items-center gap-2">
                    <CheckCircle /> ¡Todo listo para postular!
                  </div>
                  <Link
                    to="/#areas"
                    className="inline-flex items-center gap-2 mt-4 bg-[#7422c4] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#5d1ba1] transition-all shadow-xl shadow-purple-200"
                  >
                    Ver áreas abiertas <ChevronRight size={20} />
                  </Link>
                </div>
              ) : (
  <div className="text-center">
  <div className="text-rose-600 font-black text-xl flex justify-center gap-2 mb-3">
    <XCircle /> Estás en proceso 💪
  </div>

  <p className="text-gray-600 text-sm mb-4">
    No necesitas cumplir todo hoy. Te ayudamos a avanzar paso a paso.
  </p>

  <div className="bg-white rounded-2xl p-4 text-left border border-rose-100 space-y-2">
    {obtenerRecomendaciones().map((tip, i) => (
      <p key={i} className="text-sm text-gray-700">
        👉 {tip}
      </p>
    ))}
  </div>

  <Link
  to="/#areas"
  className="inline-flex items-center gap-2 mt-6 bg-[#7422c4] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#5d1ba1] transition-all shadow-xl shadow-purple-200"
>
  Explora áreas recomendadas <ChevronRight size={20} />
</Link>
</div>


              )}
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* FINAL CTA */}
      <section className="mt-24 max-w-5xl mx-auto">
        <div className="bg-[#7422c4] p-12 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          {/* Círculo decorativo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Impulsa tu talento digital
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto font-light">
            Únete a un equipo que prioriza el aprendizaje autónomo y el crecimiento constante.
          </p>
          <Link
            to="/registro"
            className="inline-block bg-white text-[#7422c4] px-10 py-5 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all shadow-xl active:scale-95"
          >
            Recibir información laboral ✨
          </Link>

            
        </div>
      </section>
      
      {resultadoQuiz && (
  <div className="mt-10 bg-purple-50 p-6 rounded-3xl text-center border border-purple-100">
    <h3 className="text-xl font-black text-[#7422c4] mb-2">
      Tu posible camino:
    </h3>
    <p className="text-gray-700 font-semibold">{resultadoQuiz}</p>

  </div>
)}

          {/* FORMULARIO VOCACIONAL */}
<section className="mt-20 bg-white p-10 rounded-[2.5rem] shadow-md border border-gray-100 max-w-5xl mx-auto">
  <h2 className="text-2xl font-black mb-6 text-gray-900">
    Descubre tu camino ✨
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="text"
      placeholder="¿Qué te llama la atención?"
      className="p-4 rounded-xl border border-gray-200"
      onChange={(e) => setIntereses({ ...intereses, area: e.target.value })}
    />

    <select
      className="p-4 rounded-xl border border-gray-200"
      onChange={(e) => setIntereses({ ...intereses, nivel: e.target.value })}
    >
      <option value="">Nivel actual</option>
      <option>Principiante</option>
      <option>Intermedio</option>
      <option>Avanzado</option>
    </select>

    <textarea
      placeholder="¿Qué te gustaría lograr?"
      className="p-4 rounded-xl border border-gray-200 md:col-span-2"
      onChange={(e) => setIntereses({ ...intereses, objetivo: e.target.value })}
    />
  </div>

  <div className="text-center mt-8">
    <button
      onClick={() => generarResultado()}
      className="bg-[#7422c4] text-white px-8 py-4 rounded-2xl font-black"
    >
      Ver mi orientación 🚀
    </button>
  </div>
</section>
    </div>
  );
}