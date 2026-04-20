import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Perfil() {

  const [user, setUser] = useState(null);
  const [editando, setEditando] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
    profesion: "",
    estudios: "",
    habilidades: "",
    sobreMi: "",
    foto: ""
  });

  /* ========================
      AUTH + FIRESTORE
  ======================== */

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      if (currentUser) {
        setUser(currentUser);

        const ref = doc(db, "perfiles", currentUser.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setPerfil(snap.data());
        }
      }
    });

    return () => unsubscribe();

  }, []);

  /* ========================
        PROGRESO PERFIL
  ======================== */

  useEffect(() => {
    const filled = Object.values(perfil).filter(v => v !== "").length;
    setProgreso(Math.round((filled / 8) * 100));
  }, [perfil]);

  const handleChange = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });
  };

  /* ========================
        GUARDAR
  ======================== */

  const guardarCambios = async () => {

    if (!user) return;

    try {
      const ref = doc(db, "perfiles", user.uid);
      await setDoc(ref, perfil);

      setEditando(false);
      alert("Perfil guardado correctamente 🚀");

    } catch (error) {
      console.error(error);
      alert("Error al guardar perfil");
    }
  };

  /* ========================
        LOGOUT
  ======================== */

  const cerrarSesion = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (!user) {
    return <p className="pt-32 text-center">Cargando perfil...</p>;
  }

  return (
    <div className="min-h-screen bg-purple-50">

      {/* ========================
            BANNER FIJO
      ======================== */}

      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 h-56 w-full" />

      {/* ========================
            AVATAR FLOTANTE
      ======================== */}

      <div className="flex flex-col items-center -mt-16">
        <img
          src={perfil.foto || "https://i.pravatar.cc/150"}
          className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
        />

        <h2 className="text-2xl font-bold mt-4 text-purple-700">
          {perfil.nombre || "Usuario"}
        </h2>


        <p className="text-gray-500 text-sm">
          Tu perfil tiene más visibilidad para empresas 🚀
        </p>
      </div>

      {/* ========================
            CARD PRINCIPAL
      ======================== */}

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mt-8 mb-16">

        {/* PROGRESO */}
        <div className="mb-10">
          <p className="font-semibold mb-2 text-center">
            Perfil completado {progreso}%
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-500 h-4 rounded-full transition-all"
              style={{ width: `${progreso}%` }}
            />
          </div>
        </div>

        {/* ========================
              INFORMACIÓN
        ======================== */}

        <h3 className="text-lg font-bold text-purple-600 mb-4">
          Información Personal
        </h3>

        <div className="grid md:grid-cols-2 gap-4">


          <input name="nombre"
            value={perfil.nombre}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Nombre"
            className="input" />

          <input
            value={user?.email || ""}
            disabled
            className="input bg-gray-100" />

          <input name="ubicacion"
            value={perfil.ubicacion}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Ubicación"
            className="input" />

          <input name="telefono"
            value={perfil.telefono}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Teléfono"
            className="input" />

          <input name="profesion"
            value={perfil.profesion}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Profesión"
            className="input" />

          <input name="estudios"
            value={perfil.estudios}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Estudios"
            className="input" />
          <input
            name="foto"
            value={perfil.foto}
            onChange={handleChange}
            disabled={!editando}
            placeholder="Link de foto de perfil"
            className="input"
          />

        </div>


        {/* SOBRE MI */}

        <h3 className="text-lg font-bold text-purple-600 mt-8 mb-2">
          Sobre mí
        </h3>

        <textarea
          name="sobreMi"
          value={perfil.sobreMi}
          onChange={handleChange}
          disabled={!editando}
          placeholder="Cuéntanos sobre ti..."
          className="input h-28"
        />

        {/* HABILIDADES */}

        <h3 className="text-lg font-bold text-purple-600 mt-8 mb-2">
          Habilidades
        </h3>

        <input
          name="habilidades"
          value={perfil.habilidades}
          onChange={handleChange}
          disabled={!editando}
          placeholder="React, Comunicación, Diseño..."
          className="input"
        />

        <div className="flex flex-wrap gap-2 mt-3">
          {perfil.habilidades.split(",").map((h, i) => (
            h && (
              <span key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm shadow">
                {h.trim()}
              </span>
            )
          ))}
        </div>

        {/* BOTONES */}

        <div className="flex gap-4 justify-center mt-10">

          {!editando ? (
            <button
              onClick={() => setEditando(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
              Editar Perfil
            </button>
          ) : (
            <button
              onClick={guardarCambios}
              className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
              Guardar
            </button>
          )}

          <button
            onClick={cerrarSesion}
            className="bg-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Cerrar sesión
          </button>

        </div>

      </div>
    </div>
  );
}