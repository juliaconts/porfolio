import { CONFIG } from "../config";
import ThemeToggle from "./Themetoggle"; // Import the component we'll create below

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        {CONFIG.name.split("  ")[0]}<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
          <a href={CONFIG.github} target="_blank" rel="noreferrer" className="nav-github">
            GitHub ↗
          </a>
        </li>
        <li>
          <a href="#contact" className="btn btn-primary" style={{ padding: ".5rem 1.2rem", fontSize: ".78rem", color: "var(--white)" }}>
            Get in touch!
          </a>
        </li>
        {/* Added Theme Toggle here */}
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}