import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ⭐ Estrellas
function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-1 mt-1 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonios() {
  const users = [
    {
      nombre: "Luis, 22 años",
      foto: "https://st2.depositphotos.com/1465849/11786/i/450/depositphotos_117866634-stock-photo-brown-young-caucasian-boy.jpg",
      comentario:
        "Soy de provincia y siempre sentí que las oportunidades estaban en Lima. En Yape fue diferente. Desde el proceso me sentí incluido. Hoy formo parte del equipo de operaciones y sé que mi historia también cuenta.",
      rating: 5,
    },
    {
      nombre: "Valeria, 20 años",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrH5bEGu2hEguqhK7dGQOP2bekqkrnlKxhbw&s",
      comentario:
        "Nunca me imaginé trabajando en tecnología dentro de una fintech. En Yape me formaron desde cero y ahora apoyo en el área digital.",
      rating: 5,
    },
    {
      nombre: "Diego, 21 años",
      foto: "https://c.superprof.com/i/a/26543552/11916980/600/20230525030500/estudiante-ingenieria-con-anos-edad-con-mucha-experiencia-las-materias-trignometria-aritmetica-general.jpg",
      comentario:
        "Entré con miedo, pero encontré mentores que confiaron en mí. Hoy tengo claridad sobre mi futuro profesional.",
      rating: 4,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white via-purple-50 to-white">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Historias reales que inspiran
        </h2>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Jóvenes que transformaron su futuro gracias a oportunidades reales.
        </p>

        {/* MÉTRICAS */}
        <div className="flex justify-center gap-12 mt-10">
          <div>
            <p className="text-3xl font-bold text-purple-700">+5,000</p>
            <p className="text-sm text-gray-500">Usuarios capacitados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-700">85%</p>
            <p className="text-sm text-gray-500">Mejora laboral</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIO DESTACADO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-3xl p-10 mb-20 shadow-2xl max-w-5xl mx-auto overflow-hidden"
      >
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          “Antes pensaba que trabajar en el sector financiero era algo lejano.
          En Yape encontré una oportunidad real. No tenía experiencia, pero sí
          ganas de aprender.”
        </p>

        <div className="flex items-center gap-4 mt-8">
          <img
            src="https://img.freepik.com/foto-gratis/sonriente-joven-bastante-caucasica-aislada-pared-purpura-espacio-copia_141793-112372.jpg"
            className="w-14 h-14 rounded-full border-2 border-white"
          />
          <div>
            <p className="font-semibold">Camila, 19 años</p>
            <p className="text-sm opacity-80">Usuario del programa</p>
            <Stars rating={5} />
          </div>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {users.map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={user.foto}
                alt={user.nombre}
                className="w-12 h-12 rounded-full border-2 border-purple-500"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {user.nombre}
                </h3>
                <Stars rating={user.rating} />
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{user.comentario}”
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <Link
          to="/inspiracion"
          className="inline-block bg-purple-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:bg-purple-800 hover:scale-105 transition-all duration-300"
        >
          Ver más historias →
        </Link>
      </div>
    </section>
  );
}