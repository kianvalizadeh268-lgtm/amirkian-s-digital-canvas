import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient orb */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      
      {/* Secondary orb */}
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-radial from-copper/15 via-copper/5 to-transparent blur-3xl animate-float-delayed"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
      />

      {/* Geometric shapes */}
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/20 rounded-lg rotate-45 animate-float-slow"
        style={{
          transform: `rotate(45deg) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-primary/10 rounded-full animate-pulse-glow"
        style={{
          transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)`,
        }}
      />

      {/* Small floating dots */}
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-copper/40 rounded-full animate-float-delayed" />
      <div className="absolute top-1/4 right-1/2 w-4 h-4 bg-primary/20 rounded-full animate-float-slow" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default FloatingShapes;
