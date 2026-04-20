import React from 'react';
import { Link } from 'react-router-dom';


const ExploraYape = () => {
  // Datos simulados para las tarjetas
  const tarjetasInfo = [
    {
      id: 1,
      titulo: 'Inclusión Financiera',
      descripcion: 'Llevamos servicios financieros a más peruanos, de forma fácil y segura.',
      color: 'bg-[#5C00CC]', // Morado más oscuro
    },
    {
      id: 2,
      titulo: 'Empleabilidad Juvenil',
      descripcion: 'Creamos puentes hacia el primer empleo y el desarrollo profesional.',
      color: 'bg-[#00D1FF]', // Cian/Celeste
    },
    {
      id: 3,
      titulo: 'Educación Digital',
      descripcion: 'Capacitamos en herramientas digitales para el día a día.',
      color: 'bg-[#FF5C00]', // Naranja vibrante
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0E6FF] text-[#330077]">
      {/* SECCIÓN 1: HÉROE DEGRADADO (Réplica de la parte superior de Canva)
        Usamos pt-32 para dejar espacio al Navbar.
      */}
      <section className="bg-gradient-to-r from-[#9955FF] to-[#D5A0FF] pt-32 pb-48 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* LADO IZQUIERDO: Texto y Botón de Volver */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <Link to="/" className="text-sm font-semibold hover:underline flex items-center gap-1.5 justify-center md:justify-start">
              ← Volver al Inicio
            </Link>
            <h1 className="text-5xl font-extrabold leading-tight">
              Impacto y Propósito de Yape
            </h1>
            <p className="text-xl opacity-90">
              Transformando el Perú a través de la tecnología, creando oportunidades y simplificando la vida de millones.
            </p>
          </div>

          {/* LADO DERECHO: Imagen o placeholder */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* Usamos un placeholder con borde para que parezca el diseño.
              Sustituye 'placeholder-imagen.png' por una imagen real con fondo transparente.
            */}
            <img 
              src="/conoceyape.png" 
              alt="Ilustración Impacto Yape"
              className="w-full max-w-xl object-contain rounded-2xl shadow-xl border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LAS TARJETAS SUPERPUESTAS
        Usamos un mt negativo (-mt-24) para subirlas sobre la sección anterior.
      */}
      <section className="px-6 md:px-12 -mt-24 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Contenedor de Grid para tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tarjetasInfo.map((tarjeta) => (
              <div 
                key={tarjeta.id}
                className="bg-white p-8 rounded-3xl shadow-2xl space-y-4 text-center transform transition-transform duration-300 hover:-translate-y-3"
              >
                {/* Ícono de color con el título */}
                <div className={`w-16 h-16 ${tarjeta.color} rounded-full mx-auto flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {tarjeta.id === 1 && 'S/'}
                  {tarjeta.id === 2 && '🤝'}
                  {tarjeta.id === 3 && '📱'}
                </div>
                
                <h3 className="text-2xl font-bold text-[#330077]">
                  {tarjeta.titulo}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {tarjeta.descripcion}
                </p>
              </div>
            ))}
          </div>
          

          {/* SECCIÓN EXTRA DE PROPÓSITO GENERAL 
            (Inspirada en el bloque 'Nuestro Propósito' de Canva)
          */}
          <div className="bg-[#330077] p-10 mt-20 rounded-3xl text-white text-center shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <h2 className="text-4xl font-extrabold w-full md:w-1/3">
              Nuestro Propósito
            </h2>
            <p className="text-lg opacity-90 w-full md:w-2/3 leading-relaxed">
              Hacer más simple el día a día de las personas y potenciar las oportunidades de todos los peruanos, impulsando la empleabilidad y la inclusión financiera mediante tecnología fácil y segura.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: LO QUE DICEN NUESTROS YAPERS (ESTILIZADA) --- */}
<section className="py-16 px-6 bg-[#F9F7FF]">
  <div className="max-w-5xl mx-auto"> {/* Contenedor un poco más estrecho para que no se estiren tanto */}
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-[#330077] mb-2">
      Team Yape en acción
      </h2>
      <div className="w-20 h-1.5 bg-[#00FFAB] mx-auto rounded-full"></div> {/* Detalle decorativo */}
    </div>

    {/* Grid: Ajustamos gap para que respiren mejor */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {[
        { id: 1, nombre: "Shen Tay Wo Chong", area: "Tecnología", img: "/1.jpg", color: "#6A1B9A" },
        { id: 2, nombre: "Mauricio Villena", area: "Marketing & Growth", img: "/2.jpg", color: "#FF9800" },
        { id: 3, nombre: "Nicolas del Águila", area: "Pagos", img: "/3.jpg", color: "#1976D2" },
        { id: 4, nombre: "Karla Monier", area: "Retail", img: "/8.jpg", color: "#6A1B9A" },
        { id: 5, nombre: "Natalia Prieto", area: "Estrategia de personas", img: "/6.jpg", color: "#FF9800" },
        { id: 6, nombre: "Jorge Escobedo", area: "Data & Analytics", img: "/7.jpg", color: "#1976D2" },
      ].map((yaper) => (
        <div 
          key={yaper.id} 
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-50 flex flex-col"
        >
          {/* Contenedor de Imagen: Controlamos la altura para que no sea gigante */}
          <div 
            className="h-64 relative overflow-hidden" 
            style={{ backgroundColor: yaper.color }}
          >
            <img 
              src={yaper.img} 
              alt={yaper.nombre}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay suave al pasar el mouse */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Contenido de la Tarjeta */}
          <div className="p-5 flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-[#330077] group-hover:text-[#7422FF] transition-colors">
              {yaper.nombre}
            </h3>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
              {yaper.area}
            </p>
            
            <button className="text-[#00D1FF] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Ver más <span>→</span>
            </button>
          </div>
          

          
        </div>
      ))}

    </div>
  </div>
  {/* --- SECCIÓN: NUESTROS LÍDERES (MOSAICO MODERNO) --- */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-[#330077] tracking-tighter">
          Mentes que <br /> <span className="text-[#00FFAB]">impulsan</span> Yape
        </h2>
      </div>
      <p className="text-gray-500 max-w-xs text-sm font-medium border-l-2 border-purple-100 pl-4">
        Un equipo multidisciplinario enfocado en transformar la inclusión financiera en el Perú.
      </p>
    </div>

    {/* El Mosaico: 11 líderes */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] mb-24">
      
      {[
        { id: 1, nombre: "Raimundo Morales", cargo: "Gerente de División Yape", img: "4.jpg", size: "md:col-span-2 md:row-span-2" },
        { id: 2, nombre: "Lucía Barrantes", cargo: "Experiencia", img: "5.jpg", size: "md:col-span-2 md:row-span-1" },
        { id: 3, nombre: "Matías Liviero", cargo: "Growth & Marketing", img: "10.jpg", size: "md:col-span-2 md:row-span-2" },
    
        { id: 4, nombre: "Sofía Luyo", cargo: "Planeamiento", img: "9.jpg", size: "md:col-span-2 md:row-span-1" },
        { id: 5, nombre: "Michael Mayer", cargo: "Lending", img: "11.jpg", size: "md:col-span-1 md:row-span-1" },
        { id: 6, nombre: "Claudia Silva", cargo: "Pagos", img: "14.jpg", size: "md:col-span-1 md:row-span-1" },
        { id: 7, nombre: "Gonzalo Pozo", cargo: "Retail", img: "12.jpg", size: "md:col-span-2 md:row-span-1" },
        { id: 8, nombre: "Antenor Rizo Patrón", cargo: "Data & Analytics", img: "15.jpg", size: "md:col-span-1 md:row-span-1" },
        { id: 9, nombre: "Alvaro Anton", cargo: "Tecnologia", img: "13.jpg", size: "md:col-span-1 md:row-span-1" },
        { id: 10, nombre: "Mateo Musso", cargo: "Planeamiento y Estrategia", img: "16.jpg", size: "md:col-span-2 md:row-span-1" },
        { id: 11, nombre: "Daniella Olivares", cargo: "Estrategia de Personas", img: "17.jpg", size: "md:col-span-2 md:row-span-1" },
      ].map((lider) => (
        <div 
          key={lider.id} 
          className={`relative overflow-hidden rounded-[2.5rem] group ${lider.size} bg-purple-50`}
        >
          {/* Imagen con zoom */}
          <img 
            src={lider.img} 
            alt={lider.nombre}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          
          {/* Info con estilo Glassmorphism (Vidrio) */}
          <div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 className="text-white font-bold text-sm leading-tight">{lider.nombre}</h4>
            <p className="text-[#00FFAB] text-[10px] font-bold uppercase tracking-widest">{lider.cargo}</p>
          </div>

          {/* Versión fija para móviles (sin hover) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent md:hidden">
            <h4 className="text-white font-bold text-sm">{lider.nombre}</h4>
            <p className="text-[#00FFAB] text-[10px] uppercase">{lider.cargo}</p>
          </div>
        </div>
      ))}
    </div>

    {/* --- SECCIÓN AGREGADA: MISIÓN, VISIÓN Y VALORES CON DISEÑO TOP --- */}
    
    <div className="relative mt-32 py-20 overflow-hidden rounded-[4rem] bg-[#F4EEFF] border border-white shadow-inner">
        {/* Decoración de fondo */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7422c4]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00FFAB]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 px-8">
            {/* Misión y Visión con Estilo de Tarjetas Flotantes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-28">
                {/* Misión */}
                <div className="group bg-white/70 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-white transition-all hover:shadow-2xl hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-tr from-[#00FFAB] to-[#00D1FF] rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-[#00FFAB]/20 transform group-hover:rotate-6 transition-transform">🌟</div>
                    <h2 className="text-4xl font-black text-[#330077] mb-6 tracking-tight">Misión</h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed italic border-l-4 border-[#00FFAB] pl-6">
                        "Impulsar oportunidades laborales para <span className="text-[#7422c4] font-bold">jóvenes peruanos</span>, conectando talento con empresas de manera rápida, sencilla y accesible."
                    </p>
                </div>

                {/* Visión */}
                <div className="group bg-[#330077] p-12 rounded-[3.5rem] shadow-2xl shadow-purple-900/20 transition-all hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl mb-8 border border-white/20">🚀</div>
                    <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Visión</h2>
                    <p className="text-purple-100 text-lg font-medium leading-relaxed italic border-l-4 border-[#00D1FF] pl-6">
                        "Ser la <span className="text-[#00FFAB] font-bold">plataforma líder</span> de empleabilidad juvenil en el Perú, promoviendo inclusión, crecimiento profesional y desarrollo."
                    </p>
                </div>
            </div>

            {/* Valores con Diseño de Burbujas Modernas */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="bg-white px-6 py-2 rounded-full text-[#7422c4] font-bold text-xs uppercase tracking-[0.4em] shadow-sm border border-purple-100">Cultura YapeGo</span>
                    <h2 className="text-6xl font-black text-[#330077] mt-6 tracking-tighter">Nuestros Valores <span className="inline-block animate-pulse">💜</span></h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { e: "🤝", t: "Inclusión", d: "Creemos en oportunidades para todos, sin barreras.", c: "from-purple-500 to-indigo-600" },
                        { e: "⚡", t: "Innovación", d: "La tecnología es nuestra mejor aliada.", c: "from-cyan-400 to-blue-500" },
                        { e: "💜", t: "Cercanía", d: "Hablamos simple, de persona a persona.", c: "from-[#7422c4] to-[#B621FE]" },
                        { e: "🔒", t: "Confianza", d: "Seguridad total en cada paso que das.", c: "from-blue-500 to-indigo-700" },
                        { e: "📈", t: "Crecimiento", d: "Tú creces, nosotros crecemos contigo.", c: "from-[#00FFAB] to-[#00D1FF]" },
                        { e: "🌍", t: "Impacto", d: "Transformamos el futuro de nuestro país.", c: "from-orange-400 to-red-500" }
                    ].map((v, i) => (
                        <div key={i} className="group relative bg-white p-10 rounded-[3rem] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:border-purple-200">
                            <div className={`w-20 h-20 bg-gradient-to-br ${v.c} rounded-[2rem] flex items-center justify-center text-4xl mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                {v.e}
                            </div>
                            <h4 className="text-2xl font-black text-[#330077] mb-3">{v.t}</h4>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm opacity-80">{v.d}</p>
                            
                            {/* Pequeño detalle decorativo inferior */}
                            <div className="absolute bottom-6 w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[#7422c4] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Texto final de cierre */}
            <div className="max-w-4xl mx-auto mt-32 text-center p-12 rounded-[3rem] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-md border border-white shadow-xl">
                <p className="text-2xl font-black text-[#330077] leading-tight">
                    "En YapeGo creemos en el talento peruano. Creamos oportunidades reales mediante tecnología, confianza e inclusión laboral."
                </p>
                <div className="mt-8 flex justify-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#7422c4]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00FFAB]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00D1FF]"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</section>
</section>

    </div>
    
  );
};

export default ExploraYape;