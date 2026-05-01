import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const [theme, setTheme] = useState('dark');

  // Track mouse movement for the "Interactive Shadow"
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* 🌸 FLORAL BACKGROUND LAYER */}
      <div className="floral-container">
        <div className="flower-deco flower-1"></div>
        <div className="flower-deco flower-2"></div>
        <div className="flower-deco flower-3"></div>
      </div>

      {/* Interactive Shadow Glow that follows mouse[cite: 6] */}
      <div 
        className="hero-interactive-shadow"
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }}
      />

      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}