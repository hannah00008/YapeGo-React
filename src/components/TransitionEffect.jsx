import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TransitionWaohEffect = () => {
  const particlesInit = useCallback(async (engine) => {
    // Esto carga el paquete completo de formas y enlaces
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full h-40 bg-white overflow-hidden">
      
      {/* Fondo de Partículas Interactivas */}
      <Particles
        id="tsparticles-transition"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#7422ed" }, // Color Púrpura Yape
            links: {
              enable: true,
              distance: 150,
              color: "#7422ed",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" }
            },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.4 }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.6 } }
            }
          },
          detectRetina: true
        }}
      />

      {/* Indicador visual elegante */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-[11px] font-black text-purple-400 uppercase tracking-[0.5em] opacity-70">
            Descubre el ecosistema
          </span>
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-purple-400 to-transparent rounded-full shadow-lg shadow-purple-200"></div>
        </div>
      </div>
    </div>
  );
};

export default TransitionWaohEffect;