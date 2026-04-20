import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Briefcase, Send } from "lucide-react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function Registro() {

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        interes: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("✨ Te avisaremos cuando haya oportunidades disponibles");

        console.log(form);
    };
    const loginGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            const user = result.user;

            alert(`Bienvenida ${user.displayName} ✨`);

            console.log(user);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] pt-32 flex justify-center px-6">

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-lg w-full space-y-6"
            >
                <h1 className="text-3xl font-black text-center text-[#7422c4]">
                    Únete a YapeGo ✨
                </h1>

                <p className="text-center text-gray-500">
                    Regístrate y recibe oportunidades laborales,
                    capacitaciones y convocatorias exclusivas.
                </p>
                {/* LOGIN GOOGLE */}
                <button
                    type="button"
                    onClick={loginGoogle}
                    className="w-full border py-4 rounded-2xl font-black flex justify-center items-center gap-3 hover:bg-gray-50 transition"
                >
                    <FcGoogle size={22} />
                    Continuar con Google
                </button>

                <div className="flex items-center gap-4">
                    <hr className="flex-1" />
                    <span className="text-gray-400 text-sm">o</span>
                    <hr className="flex-1" />
                </div>

                {/* Nombre */}
                <div>
                    <label className="font-bold">Nombre</label>
                    <div className="flex gap-2 border rounded-xl p-3 mt-2">
                        <User />
                        <input
                            name="nombre"
                            required
                            placeholder="Tu nombre"
                            onChange={handleChange}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="font-bold">Correo</label>
                    <div className="flex gap-2 border rounded-xl p-3 mt-2">
                        <Mail />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="correo@email.com"
                            onChange={handleChange}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Interés */}
                <div>
                    <label className="font-bold">Área de interés</label>
                    <div className="flex gap-2 border rounded-xl p-3 mt-2">
                        <Briefcase />
                        <select
                            name="interes"
                            required
                            onChange={handleChange}
                            className="w-full outline-none"
                        >
                            <option value="">Selecciona</option>
                            <option>Programación</option>
                            <option>Marketing Digital</option>
                            <option>Diseño</option>
                            <option>Data & IA</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#7422c4] text-white py-4 rounded-2xl font-black flex justify-center gap-2 hover:bg-[#5d1ba1]"
                >
                    Registrarme <Send />
                </button>

            </motion.form>
        </div>
    );
}