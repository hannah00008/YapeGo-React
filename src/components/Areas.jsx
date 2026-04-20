import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DetalleArea from "../pages/DetalleArea";

const areas = [
  { id: "tech", title: "Tech", icon: "💻", color: "from-blue-500 to-cyan-400", desc: "Desarrollo de software y arquitectura escalable." },
  { id: "data-and-analytics", title: "Data & Analytics", icon: "📊", color: "from-indigo-500 to-purple-400", desc: "Transformamos datos en decisiones estratégicas." },
  { id: "people", title: "People", icon: "🤝", color: "from-orange-400 to-red-400", desc: "Potenciamos el talento y la cultura yaper." },
  { id: "planeamiento", title: "Planeamiento", icon: "🎯", color: "from-green-500 to-emerald-400", desc: "Definimos la ruta para el crecimiento del negocio." },
  { id: "experiencia", title: "Experiencia", icon: "✨", color: "from-pink-500 to-rose-400", desc: "Diseñamos interacciones memorables para usuarios." },
  { id: "commerce", title: "Commerce", icon: "🛍️", color: "from-yellow-400 to-orange-500", desc: "Expandimos las fronteras del ecosistema digital." },
  { id: "pagos", title: "Pagos", icon: "💳", color: "from-blue-600 to-indigo-600", desc: "Seguridad y fluidez en cada transacción." },
  { id: "marketing", title: "Marketing", icon: "📣", color: "from-purple-600 to-pink-500", desc: "Conectamos con millones de personas de forma creativa." },
];

function Areas() {
  return (
    <section id="areas" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#7422c4] font-black tracking-widest uppercase text-sm block"
          >
            Ecosistema Yape
          </motion.span>
          <h2 className="text-5xl font-black text-gray-900 mt-2 mb-4">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7422c4] to-[#9d4edd]">Áreas</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#7422c4] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <motion.div
              key={area.id}
              whileHover={{ 
                scale: 1.05,
                rotateX: 10,
                rotateY: -5,
              }}
              className="perspective-1000 group"
            >
              <Link to={`/area/${area.id}`} className="block h-full cursor-pointer">
                <div className="relative bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all group-hover:shadow-2xl group-hover:bg-white h-full flex flex-col justify-between overflow-hidden">
                  
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />

                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-full`} />
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg relative z-10 transform group-hover:rotate-6 transition-transform`}>
                      {area.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-[#7422c4] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div className={`h-1.5 bg-gradient-to-r ${area.color} rounded-full w-8 group-hover:w-full transition-all duration-500`} />
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#7422c4]">
                      Explorar área
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;