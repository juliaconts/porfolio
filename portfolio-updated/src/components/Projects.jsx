import { CONFIG } from "../config";

const GitHubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-top">
        <div>
          <p className="section-eyebrow">Selected projects</p>
          <h2 style={{ marginBottom: 0 }}>Things I've built.</h2>
        </div>
        <a href={CONFIG.github} target="_blank" rel="noreferrer"
          className="btn btn-outline"
          style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
          <GitHubIcon /> More on GitHub
        </a>
      </div>

      <div className="project-list">
        {CONFIG.projects.map((p, i) => {
          const isExternal = p.href && p.href !== "#";
          return (
            <a
              className="project-card"
              href={p.href || "#"}
              key={p.title}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              style={!isExternal ? { pointerEvents: "none" } : {}}
            >
              {/* Grouping info for the 1fr column */}
              <div className="project-info-wrapper">
                <span className={`proj-badge ${p.badgeClass}`}>{p.badge}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span className="stack-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* The "auto" column for the arrow[cite: 8] */}
              {isExternal && <div className="proj-arrow">↗</div>}
            </a>
          );
        })}
      </div>

      <div className="projects-footer">

        <p>Want to see everything I've worked on?</p>

        <a href={CONFIG.github} target="_blank" rel="noreferrer"

          className="btn btn-primary"

          style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>

          <GitHubIcon /> Visit my GitHub

        </a>

      </div>
    </section>
  );
}