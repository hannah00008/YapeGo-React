import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Tu componente

import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Testimonios from "./components/Testimonios";
import Postula from "./components/Postula";
import Estadisticas from "./components/Estadisticas";
import ChatBotYape from "./components/ChatBotYape";
import ConfianzaLaboral from "./components/ConfianzaLaboral";
import TransitionEffect from './components/TransitionEffect';
import SplashCursor from './components/SplashCursor';

import ExploraYape from "./pages/ExploraYape";
import DetalleArea from "./pages/DetalleArea";
import Inspiracion from "./pages/Inspiracion";
import Aprendizaje from "./pages/Aprendizaje";
import Orientacion from "./pages/Orientacion";
import FormularioPostulacion from "./pages/FormularioPostulacion";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Curso from "./pages/Curso";
import Postulacion from "./pages/Postulacion"; // ✅ Ruta nueva de tu compañera

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      {/* 1. EL EFECTO SIEMPRE AL PRINCIPIO PARA QUE ESTÉ POR ENCIMA DE TODO */}
      <SplashCursor 
        COLOR="#7422ed" 
        DENSITY_DISSIPATION={3.0} 
        CURL={5} 
      />

      <ScrollToTop />
      <ScrollToHash />

      <Navbar />

      <Routes>
        <Route path="/curso" element={<Curso />} />
        <Route path="/postulacion" element={<Postulacion />} />

        {/* 🏠 HOME (Ahora limpio del SplashCursor) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TransitionEffect />
              <Areas />
              <Testimonios />
              <Estadisticas />
              <Postula />
            </>
          }
        />

        {/* ... Resto de tus rutas se mantienen igual */}
        <Route path="/explora" element={<ExploraYape />} />
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/aprendizaje" element={<Aprendizaje />} />
        <Route path="/orientacion" element={<Orientacion />} />
        <Route path="/confianzalaboral" element={<ConfianzaLaboral />} />
        <Route path="/postular/:area" element={<FormularioPostulacion />} />
        <Route path="/area/:id" element={<DetalleArea />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
      <ChatBotYape />
    </>
  );
}
export default App;