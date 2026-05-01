import { CONFIG } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Made with care by {CONFIG.name}</span>
      <div className="footer-links">
        <a href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${CONFIG.email}`}>Email</a>
      </div>
    </footer>
  );
}
