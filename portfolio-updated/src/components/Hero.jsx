import { CONFIG } from "../config";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left — text */}
      <div className="hero-left">
        <div className="hero-bg-text">PORTFOLIO</div>

        <div className="hero-wave">👋</div>
        <h1>
          Hello,<br />
          I'm <em>{CONFIG.name.split(" ")[0]}.</em>
        </h1>

        <div className="hero-chips">
          <span className="chip gold">{CONFIG.title}</span>
          <span className="chip green">3rd Year Student</span>
          <span className="chip">Based in {CONFIG.location}</span>
          <span className="chip">Open for internships</span>
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

      {/* Right — full-height photo with floating cards */}
      <div className="hero-right">
        <div className="hero-photo-wrap">
          <img
            src={CONFIG.photo}
            alt={CONFIG.name}
            className="hero-photo"
          />
        </div>

        {/* Floating pill cards like the reference design
        <div className="hero-card card-1">{CONFIG.location}</div>
        <div className="hero-card card-2">{CONFIG.title}</div>
        <div className="hero-card card-3">
          <span style={{ color: "var(--text3)", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase" }}>Available for work</span>
          <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginTop: ".2rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7DC89A", display: "inline-block" }} />
            <span style={{ fontSize: ".8rem" }}>Open to opportunities</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
