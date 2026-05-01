import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to Dark Mode

  useEffect(() => {
    // This updates the <html> tag so our CSS variables switch
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'day');
  }, [isDark]);

  const toggleStyle = {
    background: "none",
    border: "1px solid var(--border2)",
    color: "var(--gold)",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: "4px 8px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  return (
    <button 
      onClick={() => setIsDark(!isDark)} 
      style={toggleStyle}
      title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}