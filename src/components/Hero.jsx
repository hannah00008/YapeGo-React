import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    /* 1. El contenedor principal NO lleva clipPath */
    <section className="relative w-full min-h-[550px] flex items-center bg-white overflow-visible">
      
      {/* 2. CAPA DE FONDO: Aquí es donde aplicamos el recorte circular */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ clipPath: "ellipse(80% 90% at 50% -5%)" }}
      >
        <img
          src="fondo-hero.png" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Un pequeño overlay para ayudar a la lectura si es necesario */}
        <div className="absolute inset-0 bg-purple-900/10"></div>
      </div>

      {/* 3. CAPA DE CONTENIDO: Al estar fuera del div anterior, no se corta */}
      <div className="relative z-10 px-10 md:px-20 w-full max-w-7xl mx-auto">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Empleabilidad e <br /> Inclusión Yape
          </h1>

          <p className="mb-8 text-lg md:text-xl font-medium drop-shadow-md">
            Empoderando a la Juventud Peruana mediante oportunidades laborales.
          </p>

          {/* botooon flotante*/}
<div className="flex justify-center md:justify-start"> {/* Contenedor para alinear el botón */}
  <Link to="/explora">
    <button className="
      /* Color de fondo y texto */
      bg-[#00FFAB] text-[#330077]
      
      /* Tipografía y espaciado */
      font-bold text-lg px-10 py-4 
      
      /* Bordes muy redondeados (píldora) */
      rounded-full 
      
      /* Sombra y transiciones base */
      shadow-md shadow-[#00ffab]/30
      transition-all duration-300 ease-in-out
      
      /* EFECTOS AL PASAR EL MOUSE (HOVER) */
      hover:bg-white             /* Cambia a blanco */
      hover:text-[#330077]       /* Mantiene el texto morado */
      hover:shadow-xl            /* La sombra crece para dar efecto de elevación */
      hover:shadow-[#330077]/20  /* La sombra cambia de color a morado suave */
      hover:-translate-y-1       /* El botón sube ligeramente */
      
      /* EFECTO AL HACER CLIC (ACTIVE) */
      active:scale-95            /* Se encoge un poco para simular un clic físico */
      active:translate-y-0       /* Vuelve a su altura normal */
      
      /* Enfoque para accesibilidad */
      focus:outline-none focus:ring-4 focus:ring-[#00ffab]/50
    ">
      Explora Yape
    </button>
  </Link>
</div>
        </div>
      </div>
      
    </section>
  );
}