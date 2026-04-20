import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Curso() {

  const videos = [
    {
      titulo: "💰 Introducción a las finanzas",
      url: "https://www.youtube.com/embed/JQxXT7Okv84",
      nivel: "Básico",
    },
    {
      titulo: "📊 Cómo administrar tu dinero",
      url: "https://www.youtube.com/embed/QtpoN74Ox70",
      nivel: "Básico",
    },
    {
      titulo: "🐷 Aprende a ahorrar",
      url: "https://www.youtube.com/embed/tSffYzRP0HA",
      nivel: "Intermedio",
    },
    {
      titulo: "📈 Ingresos e inversiones básicas",
      url: "https://www.youtube.com/embed/kEl_GRWV5Is",
      nivel: "Intermedio",
    },
    {
      titulo: "💳 Uso inteligente del dinero",
      url: "https://www.youtube.com/embed/ppBEiuo6dSI",
      nivel: "Avanzado",
    },
  ];

  const [vistos, setVistos] = useState(() => {
  const guardado = localStorage.getItem("videosVistos");
  return guardado ? JSON.parse(guardado) : [];
});
const [filtro, setFiltro] = useState("Todos");

useEffect(() => {
  localStorage.setItem("videosVistos", JSON.stringify(vistos));
}, [vistos]);

  const toggleVisto = (index) => {
    if (vistos.includes(index)) {
      setVistos(vistos.filter((i) => i !== index));
    } else {
      setVistos([...vistos, index]);
    }
  };

  const progreso = (vistos.length / videos.length) * 100;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 px-6 md:px-20 pb-20">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black">
          Curso Financiero 
        </h1>
        <p className="text-gray-400 mt-3">
          Aprende a manejar tu dinero paso a paso 🚀
        </p>
      </div>

      {/* PROGRESO */}
      <div className="mb-12">
        <p className="mb-2 font-bold">
          Progreso: {vistos.length}/{videos.length} módulos
        </p>
        <div className="w-full bg-gray-700 h-3 rounded-full">
          <div
            className="bg-[#7422c4] h-3 rounded-full transition-all"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {["Todos", "Básico", "Intermedio", "Avanzado"].map((nivel) => (
          <button
  key={nivel}
  onClick={() => setFiltro(nivel)}
  className={`px-4 py-2 rounded-full text-sm transition-all ${
    filtro === nivel
      ? "bg-[#7422c4]"
      : "bg-white/10 hover:bg-[#7422c4]"
  }`}
>
            {nivel}
          </button>
        ))}
      </div>

      {/* VIDEOS */}
      <div className="grid md:grid-cols-2 gap-10">

        {videos
  .filter((video) => filtro === "Todos" || video.nivel === filtro)
  .map((video, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >

            {/* VIDEO */}
            <iframe
              className="w-full h-64"
              src={video.url}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* INFO */}
            <div className="p-6">
              <p className="font-black text-lg">{video.titulo}</p>

              <p className="text-sm text-purple-400 mt-1">
                Nivel: {video.nivel}
              </p>

              {/* BOTÓN */}
              <button
                onClick={() => toggleVisto(i)}
                className={`mt-4 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  vistos.includes(i)
                    ? "bg-green-500"
                    : "bg-[#7422c4] hover:bg-purple-700"
                }`}
              >
                {vistos.includes(i) ? "✔ Visto" : "Marcar como visto"}
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}
