import React, { useEffect, useRef } from "react";

const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e) => {
      // Generamos 3 partículas por movimiento para un rastro más poblado
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          prevX: e.clientX,
          prevY: e.clientY,
          size: 3, // ✅ Punto medio: ni muy delgado (1.5) ni muy grueso (>5)
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color: "#7422ed",
          alpha: 0.8, // Inicia un poco más suave
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.prevX = p.x;
        p.prevY = p.y;
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.012; // ✅ Desvanecimiento más lento para dar sensación de "largo"

        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size; // ✅ Grosor constante y equilibrado
        ctx.lineCap = "round";
        ctx.globalAlpha = p.alpha;
        
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ background: "transparent" }}
    />
  );
};

export default SplashCursor;