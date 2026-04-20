import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { BookOpen, Wallet, PiggyBank, Smartphone, PlayCircle, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Aprendizaje() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white px-6 md:px-20 pt-32 pb-24 font-sans">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-purple-100 text-[#7422c4] px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm"
        >
          <BookOpen size={16} /> Educación Financiera
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
        >
          Aprende a usar tu dinero{" "}
          <span className="bg-gradient-to-r from-[#7422c4] to-purple-400 bg-clip-text text-transparent">
            como un pro
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
        >
          No es solo ganar dinero. Es saber usarlo, hacerlo crecer y construir tu independencia financiera desde hoy.
        </motion.p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">
        {[{
          icon: <Wallet size={30} />,
          title: "Gestión de dinero",
          desc: "Controla ingresos, gastos y crea tu primer presupuesto sin complicarte."
        },{
          icon: <PiggyBank size={30} />,
          title: "Ahorro inteligente",
          desc: "Aprende a ahorrar sin dejar de disfrutar tu día a día."
        },{
          icon: <Smartphone size={30} />,
          title: "Herramientas digitales",
          desc: "Usa Yape para simplificar tu vida financiera con seguridad."
        }].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-[#7422c4] mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24 rounded-[3rem] p-12 md:p-16 bg-gradient-to-r from-[#7422c4] to-purple-500 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -right-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Tu libertad financiera empieza aquí 🚀
            </h2>
            <p className="text-purple-100 max-w-xl">
              Conseguir ingresos es solo el inicio. Aprender a administrarlos es lo que cambia tu vida.
            </p>
          </div>

          <button
            onClick={() => navigate("/curso")}
            className="bg-white text-[#7422c4] px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all"
          >
            Empezar gratis
          </button>
        </div>
      </motion.div>

      {/* VIDEOS */}
      <div className="mt-28">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center gap-3">
          <PlayCircle className="text-[#7422c4]" /> Aprende viendo
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Cómo hacer tu presupuesto",
              desc: "Organiza tu dinero desde cero.",
              url: "https://www.youtube.com/embed/f2O4Q-T12FI"
            },
            {
              title: "Tips para ahorrar",
              desc: "Mejora tus hábitos financieros.",
              url: "https://www.youtube.com/embed/QThz1B8SHmc"
            }
          ].map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all"
            >
              <iframe
                className="w-full h-64"
                src={video.url}
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-gray-500">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     {/* TIPS CON IMPORTANCIA */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-28 max-w-5xl"
>
  {/* HEADER */}
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      💡 Mejora tus hábitos financieros
    </h2>
    <p className="text-gray-500 mt-2">
      Sigue este orden para construir una base financiera sólida.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Controla tus gastos",
        desc: "Registra todo lo que gastas para entender tu flujo de dinero.",
        color: "emerald",
        nivel: "Básico"
      },
      {
        title: "Ahorra automáticamente",
        desc: "Separa al menos el 10% apenas recibas tus ingresos.",
        color: "yellow",
        nivel: "Importante"
      },
      {
        title: "Invierte en tu futuro",
        desc: "Haz que tu dinero crezca con decisiones inteligentes.",
        color: "blue",
        nivel: "Pro"
      }
    ].map((tip, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -10 }}
        className={`group p-6 rounded-3xl shadow-md hover:shadow-xl transition-all border backdrop-blur-xl
        ${
          tip.color === "emerald" &&
          "bg-emerald-50/70 border-emerald-100"
        }
        ${
          tip.color === "yellow" &&
          "bg-yellow-50/70 border-yellow-100"
        }
        ${
          tip.color === "blue" &&
          "bg-blue-50/70 border-blue-100"
        }
        `}
      >
        {/* NIVEL */}
        <div className={`text-xs font-bold mb-3 px-3 py-1 rounded-full inline-block
          ${
            tip.color === "emerald" && "bg-emerald-100 text-emerald-700"
          }
          ${
            tip.color === "yellow" && "bg-yellow-100 text-yellow-700"
          }
          ${
            tip.color === "blue" && "bg-blue-100 text-blue-700"
          }
        `}>
          {tip.nivel}
        </div>

        {/* ICONO */}
        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-4 transition group-hover:scale-110
          ${
            tip.color === "emerald" && "bg-emerald-100 text-emerald-600"
          }
          ${
            tip.color === "yellow" && "bg-yellow-100 text-yellow-600"
          }
          ${
            tip.color === "blue" && "bg-blue-100 text-blue-600"
          }
        `}>
          <CheckCircle2 size={22} />
        </div>

        {/* TEXTO */}
        <h3 className="font-bold text-gray-900 text-lg mb-1">
          {tip.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {tip.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

          {/* LIBROS RECOMENDADOS */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="mt-28"
>
  <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
    📚 Libros que te cambian la mentalidad
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        titulo: "Padre Rico, Padre Pobre",
        autor: "Robert Kiyosaki",
        link: "https://www.amazon.com/"
      },
      {
        titulo: "El Hombre Más Rico de Babilonia",
        autor: "George S. Clason",
        link: "https://www.amazon.com/"
      },
      {
        titulo: "Economía para andar por casa",
        autor: "Varios autores",
        link: "https://www.casadellibro.com/libro-economia-para-andar-por-casa/9788483566954"
      },
      {
        titulo: "Educación financiera avanzada partiendo de cero",
        autor: "Gregorio Hernández Jiménez",
        link: "https://www.amazon.com/"
      },
      {
        titulo: "Economía básica",
        autor: "Thomas Sowell",
        link: "https://www.amazon.com/"
      },
      {
        titulo: "La bolsa o la vida",
        autor: "Vicki Robin",
        link: "https://www.amazon.com/"
      }
    ].map((libro, i) => (
      <motion.a
        key={i}
        href={libro.link}
        target="_blank"
        whileHover={{ y: -6 }}
        className="group bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-md hover:shadow-xl transition-all"
      >
        <div className="mb-4 text-[#7422c4] text-sm font-semibold">
          Recomendado
        </div>

        <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#7422c4] transition">
          {libro.titulo}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {libro.autor}
        </p>

        <div className="mt-4 text-[#7422c4] font-semibold text-sm">
          Ver libro →
        </div>
      </motion.a>
    ))}
  </div>
</motion.div>

    </div>
  );
}