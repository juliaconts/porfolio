import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../config";

const skillGroups = [
  { 
    name: "Web Development", 
    pct: 94, 
    tech: "React, Node.js, TypeScript, PHP, Laravel" 
  },
  { 
    name: "Mobile Development", 
    pct: 90, 
    tech: "Flutter, Dart, Kotlin" 
  },
  { 
    name: "Database Management", 
    pct: 88, 
    tech: "Firebase, MySQL, PostgreSQL, MongoDB" 
  },
  { 
    name: "Backend & APIs", 
    pct: 85, 
    tech: "Flask, Express.js, CRUD Integration" 
  },
  { 
    name: "Systems & Logic", 
    pct: 78, 
    tech: "C, Python, Java, Assembly" 
  },
];

const facts = [
  { icon: "📖", text: "Course: Bachelor of Science in Computer Science" },
  { icon: "🏫", text: "School: University of the Philippines Visayas  " },
];

const organizations = [
  { role: "Vice President for External Affairs", name: "UPV Komsai.Org", period: "2025 - Present" },
  { role: "Vice Governor for Internal Affairs", name: "UPV Elektrons", period: "2025 - Present" },
  { role: "President", name: "UPV Badminton Club", period: "2024-2025" },
  { role: "Honored Queen (President)", name: "Job's Daughters International", period: "2022" },

];

function SkillBar({ name, pct, tech, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-head">
        <div className="skill-info">
          <span className="skill-name">{name}</span>
          {/* Subtle sub-text to list the specific tech */}
          <span className="skill-tech-list">{tech}</span>
        </div>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: animate ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [animate, setAnimate] = useState(false);
  const [view, setView] = useState("personal"); // "personal" or "org"
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      {/* View Switcher Tabs */}
      <div className="about-tabs">
        <button 
          className={view === "personal" ? "active" : ""} 
          onClick={() => setView("personal")}
        >
          My Story
        </button>
        <button 
          className={view === "org" ? "active" : ""} 
          onClick={() => setView("org")}
        >
          Affiliations
        </button>
      </div>

      <div className="about-inner">
        <div className="about-left-col">
          {view === "personal" ? (
            <div className="animate-fade">
              <p className="section-eyebrow">A little about me</p>
              <h2>More than just a developer.</h2>
              <p className="about-text">{CONFIG.bio1}</p>

              <a 
                href="/CONTRERAS,Julia Louise_Resume.pdf"
                target="_blank" 
                className="resume-button"
              >
                <span className="button-icon">📄</span>
                Download Resume
              </a>
              <div className="fun-facts">
                {facts.map((f) => (
                  <div className="fact" key={f.icon}>
                    <div className="fact-icon">{f.icon}</div>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-fade">
              <p className="section-eyebrow">Professional Network</p>
              <h2>Organizations I belong to.</h2>
              <div className="org-list">
                {organizations.map((org) => (
                  <div className="org-item" key={org.name}>
                    <span className="org-role">{org.role}</span>
                    <h4 className="org-name">{org.name}</h4>
                    <p className="org-period">{org.period}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="skills-wrap" ref={ref}>
          <p className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Technical Expertise
          </p>
          {skillGroups.map((s) => (
            <SkillBar key={s.name} {...s} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}