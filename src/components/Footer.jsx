import React from "react";
import { Globe, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#7422c4] text-white pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Columna Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-white text-[#7422c4] px-2 py-1 rounded-lg text-sm font-black">S/</span> 
            Yape Go
          </h2>
          <p className="text-purple-200 text-sm">Conectamos talento con propósito en todo el Perú.</p>
          <div className="flex items-center gap-1 text-xs opacity-60">
            Hecho con <Heart size={12} className="text-red-400 fill-red-400" /> para ti
          </div>
        </div>

        {/* Columna Enlaces */}
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-purple-300 text-xs">Explora</h4>
          <ul className="space-y-3 text-sm text-purple-100">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Globe size={16}/> Comunidad
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">Oportunidades</li>
            <li className="hover:text-white cursor-pointer transition-colors text-xs opacity-70">Libro de Reclamaciones</li>
          </ul>
        </div>

        {/* Columna Contacto y Redes */}
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-purple-300 text-xs">Contacto</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-purple-100">
              <Mail size={18} className="text-purple-300" /> 
              <span>soporte@yapego.pe</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-purple-100">
              <MapPin size={18} className="text-purple-300" /> 
              <span>Lima, Perú</span>
            </div>
          </div>

          {/* Redes Sociales - Aquí corregimos el error de LinkedIn */}
          <div className="pt-4 flex items-center gap-4 border-t border-white/10">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-lg"
            >
            </a>
            <span className="text-sm font-medium">Yape Go Oficial</span>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
        © 2026 Yape Go - Plataforma de Empleabilidad
      </div>
    </footer>
  );
}