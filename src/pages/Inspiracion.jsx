import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle } from "lucide-react";

function VideoCard({ video, nombre }) {
  return (
    <div className="bg-white p-4 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all">
      <div className="w-full h-48 rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={video}
          title={nombre}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-3 font-semibold text-gray-800">{nombre}</p>
    </div>
  );
}

// 🌟 Card historias
function StoryCard({ image, titulo, descripcion, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative min-w-[300px] md:min-w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-xl group hover:scale-[1.03] transition-all duration-500"
    >
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <p className="text-sm opacity-80">{descripcion}</p>
      </div>
    </div>
  );


}

    function TestimonioCard({ image, nombre, area, descripcion }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div layout className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={image} className="w-full h-56 object-cover" />

      <div className="p-4">
        <h3 className="font-bold text-gray-900">{nombre}</h3>
        <p className="text-sm text-gray-500">{area}</p>

        {open && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-gray-600 text-sm"
          >
            {descripcion}
          </motion.p>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="text-purple-600 font-semibold mt-3"
        >
          {open ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Inspiracion() {
const [selectedStory, setSelectedStory] = useState(null);
const [current, setCurrent] = useState(0);
const mensajes = [
  {
    mensaje:
      "No importa de dónde vienes, sino hasta dónde quieres llegar. Atrévete a dar el primer paso.",
    nombre: "Equipo Yape",
  },
  {
    mensaje:
      "Las oportunidades existen, pero hay que ir por ellas. Cree en ti incluso cuando sea difícil.",
    nombre: "Área de Tecnología",
  },
  {
    mensaje:
      "Tu historia no termina en tus dificultades. Empieza cuando decides avanzar.",
    nombre: "Equipo de Inclusión",
  },
];


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % mensajes.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  

  const historias = [
    {
      image: "https://www.shutterstock.com/image-photo/cryptocurrency-exchange-growth-charts-bullish-260nw-2740790805.jpg",
      titulo: "De provincia a fintech",
      descripcion: "Cómo Luis encontró su oportunidad en Yape",
    },
    {
      image: "https://cdn1.eldia.com/032025/1742874795275.jpg?&cw=630",
      titulo: "Rompiendo barreras",
      descripcion: "Valeria y su camino en tecnología",
    },
    {
      image: "https://media.licdn.com/dms/image/v2/C4E12AQGIrlIFnpE8qg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1537985933155?e=2147483647&v=beta&t=8FMFS-OsxA2t15lFVVe_Mn6tUNQfGE10VDArkKYk3eY",
      titulo: "Confianza y crecimiento",
      descripcion: "Diego y su evolución profesional",
    },
  ];

  const videos = [
  {
    video: "https://www.youtube.com/embed/o5-6UZmRkTE",
    nombre: "Historia de Camila",
  },
  {
    video: "https://www.youtube.com/embed/6qFu0TiPVWs",
    nombre: "Historia de Joaquin",
  },
];
  

  const testimonios = [
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175588-img.jpg&w=750&q=100",
    nombre: "Shen Tay Wo Chong",
    area: "Tecnología",
    descripcion: "Me encanta trabajar en Yape! Saber que tu trabajo está presente en el día a día de las personas es un orgullo, y hacerlo junto a un equipo fantástico de personas, es realmente motivador.",
  },
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175857-img-7-1.jpg&w=384&q=100",
    nombre: "Jorge Escobedo",
    area: "Data",
    descripcion: "Nuestro equipo innova constantemente y persigue la excelencia para transformar el futuro financiero del Perú.",
  },
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175782-img-1.jpg&w=384&q=100",
    nombre: "Valeria Soto",
    area: "Retail",
    descripcion: "Trabajar en Yape para mí es tener un un mundo lleno de oportunidades para hacer las cosas posibles, de forma diferente, con muchísimo aprendizaje y sobre todo con impacto social. Además de crecer aceleradamente como persona y profesional.",
  },
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175644-img-3-1.jpg&w=384&q=100",
    nombre: "Mauricio Villena",
    area: "Tecnología",
    descripcion: "Me encanta trabajar en Yape! Saber que tu trabajo está presente en el día a día de las personas es un orgullo, y hacerlo junto a un equipo fantástico de personas, es realmente motivador.",
  },
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175735-img-6.jpg&w=384&q=100",
    nombre: "Nicolas del Águila",
    area: "Data",
    descripcion: "Nuestro equipo innova constantemente y persigue la excelencia para transformar el futuro financiero del Perú.",
  },
  {
    image: "https://www.yape.com.pe/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56886%2F1743175828-img-4.jpg&w=750&q=100",
    nombre: "Natalia Prieto",
    area: "Retail",
    descripcion: "Trabajar en Yape para mí es tener un un mundo lleno de oportunidades para hacer las cosas posibles, de forma diferente, con muchísimo aprendizaje y sobre todo con impacto social. Además de crecer aceleradamente como persona y profesional.",
  },
];

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 md:px-20 pt-32 pb-20 font-sans">

      {/* HERO */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-4 py-2 rounded-full text-sm font-bold mb-6"
        >
          <Sparkles size={16} /> <span>Casos de éxito</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900"
        >
          Inspírate con <span className="text-[#7422c4]">Yape Go</span> 💜
        </motion.h1>

        <motion.p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
          Descubre cómo jóvenes como tú transformaron su futuro con oportunidades reales.
        </motion.p>
      </section>

      {/* VIDEOS */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-10 ml-4">
          <PlayCircle size={24} />
          <h2 className="text-3xl font-black text-gray-900">
            Historias reales
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </section>

      {/* HISTORIAS */}
      <section>
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900">
          Historias destacadas
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {historias.map((h, i) => (
  <StoryCard
    key={i}
    {...h}
    onClick={() => setSelectedStory(h)}
  />
))}
        </div>
      </section>
{/* MENSAJES INSPIRADORES */}
<section className="mt-24 py-16 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-3xl">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
      Mensajes que inspiran 💜
    </h2>

    <motion.div
      key={current}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
    >
      <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
        “{mensajes[current].mensaje}”
      </p>

      <span className="text-purple-600 font-bold">
        {mensajes[current].nombre}
      </span>
    </motion.div>

    <div className="flex justify-center gap-2 mt-6">
      {mensajes.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition-all ${
            current === i ? "bg-purple-600 w-6" : "bg-gray-300"
          }`}
        />
      ))}
    </div>

  </div>
</section>
    {selectedStory && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedStory(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-xl w-full p-6 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedStory.image}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">
        {selectedStory.titulo}
      </h2>
      <p className="text-gray-600">
        {selectedStory.descripcion}
      </p>

      <button
        onClick={() => setSelectedStory(null)}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        Cerrar
      </button>
    </div>
  </div>
)}

    <section className="max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl font-black mb-10 text-gray-900">
    Nuestros Yapers
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {testimonios.map((t, i) => (
      <TestimonioCard key={i} {...t} />
    ))}
  </div>
</section>

    </div>

  );
}