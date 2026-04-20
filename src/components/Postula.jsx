import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestModal from "./TestModal";

export default function Postula() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-10 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto relative group">
        
        {/* Efectos */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-400 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

        <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
          
          <div className="relative z-10 text-center md:text-left md:max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-6">
              Impulsa tu Perfil
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Descubre tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">TalentView 3D</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Mucho más que un CV: mide tus competencias y destaca ante reclutadores.
            </p>
          </div>

          {/* BOTONES (LOS DOS 👇) */}
          <div className="flex flex-col gap-4 mt-10 md:mt-0">

            {/* Modal */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Comenzar evaluación
            </button>

            {/* Navegación */}
            <button
              onClick={() => navigate("/postulacion")}
              className="bg-white border border-gray-300 px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Subir CV
            </button>

          </div>

        </div>
      </div>

      {isModalOpen && (
        <TestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}