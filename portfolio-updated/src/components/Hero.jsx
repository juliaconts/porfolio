import { useState, useEffect } from "react";
import { CONFIG } from "../config";

export default function Hero() {
  const fullName = CONFIG.name.split(" ")[0];
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayed.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullName.slice(0, displayed.length + 1));
      }, 120);
      return () => clearTimeout(timeout);
    }
    const blinkTimeout = setTimeout(() => setShowCursor(false), 2000);
    return () => clearTimeout(blinkTimeout);
  }, [displayed, fullName]);

  return (
    <section className="hero" id="home">
      {/* Ambient light orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="hero-left">

        <div className="hero-wave">👋</div>
        <h1>
          Hello,<br />
          I'm <em>{displayed}<span className={`typing-cursor${showCursor ? "" : " hidden"}`}>|</span></em>
        </h1>

        <div className="hero-chips">
          <span className="chip gold">{CONFIG.title}</span>
          <span className="chip green">3rd Year Student</span>
          <span className="chip">Based in {CONFIG.location}</span>
        </div>

        <p className="hero-desc">
          A Computer Science student from the University of the Philippines Visayas with a genuine passion for 
          crafting software that makes people's lives a little easier.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">See my work →</a>
          <a href="#contact" className="btn btn-outline">Say hello 👋</a>
        </div>
      </div>

    </section>
  );
}
