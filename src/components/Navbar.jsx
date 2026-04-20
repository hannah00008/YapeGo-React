import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { HiMenu, HiX } from "react-icons/hi"; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => { window.removeEventListener("scroll", handleScroll); unsubscribe(); };
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Inspiración", path: "/inspiracion" },
    { name: "Aprendizaje", path: "/aprendizaje" },
    { name: "Orientación", path: "/orientacion" },
    { name: "Confianza laboral", path: "/confianzalaboral" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-3 transition-all duration-300">
      {/* Contenedor de la barra: h-14 la mantiene delgada */}
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 h-14 transition-all duration-500 rounded-full relative ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md border border-white/20" 
          : "bg-[#7422c4] text-white shadow-xl"
      }`}>
        
        {/* SECCIÓN DEL LOGO */}
        <div className="flex items-center relative">
          <Link to="/" className="flex items-center">
               <img 
                 src="/logo.png" 
                 alt="Yape Go Logo" 
                 // h-20 hace el logo grande, absolute y -top hace que flote sin ensanchar la barra
                 className="h-16 md:h-20 w-auto object-contain drop-shadow-lg absolute -top-8 md:-top-10 left-0 transition-transform hover:scale-105" 
               />
               {/* Este div vacío reserva el espacio para que el menú no se encime al logo flotante */}
               <div className="w-24 md:w-32 h-1"></div>
          </Link>
        </div>

        {/* MENÚ CENTRAL */}
        <ul className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all ${
                    isActive 
                      ? (scrolled ? "text-[#7422c4] bg-purple-50" : "text-white bg-white/20") 
                      : (scrolled ? "text-gray-600 hover:text-[#7422c4]" : "text-white/80 hover:text-white")
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTONES FINALES */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link to="/perfil" className={`px-6 py-2 rounded-full font-bold text-xs transition-all hover:scale-105 ${scrolled ? "bg-[#7422c4] text-white" : "bg-white text-[#7422c4]"}`}>
                  Mi perfil
                </Link>
                <button onClick={() => signOut(auth)} className={`text-[9px] uppercase font-bold opacity-60 hover:opacity-100 ${scrolled ? "text-gray-900" : "text-white"}`}>
                  Salir
                </button>
              </>
            ) : (
              <Link to="/login" className={`px-6 py-2 rounded-full font-bold text-xs transition-all hover:scale-105 ${scrolled ? "bg-[#7422c4] text-white" : "bg-white text-[#7422c4]"}`}>
                Iniciar sesión
              </Link>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MENÚ RESPONSIVE */}
        {isOpen && (
          <div className="absolute top-[115%] left-0 w-full bg-[#7422c4] rounded-[2rem] p-6 flex flex-col gap-2 shadow-2xl lg:hidden border border-white/10">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-white font-bold text-sm py-3 px-4 hover:bg-white/10 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;