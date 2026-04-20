import React, { useState } from "react";
import { Briefcase, FileText, Clock, UploadCloud } from "lucide-react";

export default function Postulacion() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    area: "",
    motivo: "",
    experiencia: "",
    disponibilidad: "",
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "archivo") {
      setForm({ ...form, archivo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-fuchsia-500 flex items-center justify-center px-4 py-12">

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/90 shadow-2xl rounded-[2rem] p-8 max-w-xl w-full space-y-6 border border-white/40"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Postula a Yape Go 🚀
          </h2>
          <p className="text-gray-500 mt-2">
            Da el siguiente paso en tu carrera
          </p>
        </div>

        {/* Área */}
        <div>
          <label className="font-semibold flex items-center gap-2">
            <Briefcase size={18} /> Área de interés
          </label>
          <input
            type="text"
            name="area"
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Ej: Diseño, Marketing..."
          />
        </div>

        {/* Motivo */}
        <div>
          <label className="font-semibold flex items-center gap-2">
            <FileText size={18} /> ¿Por qué quieres unirte?
          </label>
          <textarea
            name="motivo"
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Cuéntanos tu motivación..."
          />
        </div>

        {/* Experiencia */}
        <div>
          <label className="font-semibold flex items-center gap-2">
            <FileText size={18} /> Experiencia
          </label>
          <textarea
            name="experiencia"
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Describe tu experiencia..."
          />
        </div>

        {/* Disponibilidad */}
        <div>
          <label className="font-semibold flex items-center gap-2">
            <Clock size={18} /> Disponibilidad
          </label>
          <input
            type="text"
            name="disponibilidad"
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Ej: Tiempo completo"
          />
        </div>

        {/* Archivo */}
        <div>
          <label className="font-semibold flex items-center gap-2">
            <UploadCloud size={18} /> Subir CV
          </label>

          <label className="mt-2 flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-purple-300 rounded-xl cursor-pointer hover:bg-purple-50 transition">
            <span className="text-sm text-gray-500">
              {form.archivo ? form.archivo.name : "Haz clic o arrastra tu archivo"}
            </span>
            <input
              type="file"
              name="archivo"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          <p className="text-xs text-gray-400 mt-1">
            PDF, PNG o JPG
          </p>
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
        >
          Enviar Postulación
        </button>
      </form>

      {/* MODAL */}
      {enviado && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-sm text-center shadow-2xl animate-fadeIn">
            <h3 className="text-2xl font-bold mb-3">
              🎉 ¡Listo!
            </h3>
            <p className="text-gray-500 mb-6">
              Tu postulación fue enviada correctamente.
            </p>

            <button
              onClick={() => {
                setEnviado(false);
                window.location.href = "/";
              }}
              className="bg-purple-700 text-white px-6 py-2 rounded-xl hover:bg-purple-800 transition"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}