import { useState } from "react";
import { CONFIG } from "../config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setStatus("sending");

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnLabel = {
    idle:    "Send message ✉",
    sending: "Sending…",
    sent:    "Message sent!",
    error:   "Something went wrong — try again",
  }[status];

  const btnStyle = {
    sent:  { background: "#5A9E72" },
    error: { background: "#C0524A" },
  }[status] ?? {};

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-eyebrow" style={{ color: "rgba(255,255,255,.4)", marginBottom: ".8rem" }}>
            Let's connect
          </p>
          <h2>
            Got a project<br />in mind? <em>Let's chat.</em>
          </h2>
          <p className="contact-desc">
            I'm always happy to talk — whether you have a clear brief or just a rough
            idea. No pressure, just a friendly conversation.
          </p>
          <div className="contact-links">
            <a href={`mailto:${CONFIG.email}`} className="contact-link">
              <span className="contact-link-icon">✉</span>
              {CONFIG.email}
            </a>
            <a href={CONFIG.github} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </span>
              github.com/{CONFIG.githubHandle}
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon" style={{ fontSize: ".75rem", fontWeight: 700 }}>in</span>
              {CONFIG.linkedin.replace("https://", "")}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
          <textarea
            name="message"
            placeholder="Tell me what you're working on..."
            value={form.message}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <button
            type="submit"
            className="btn-send"
            disabled={status === "sending" || status === "sent"}
            style={btnStyle}
          >
            {btnLabel}
          </button>

          {/* Helper note while Formspree isn't set up yet */}
          {status === "error" && (
            <p style={{ color: "#C0524A", fontSize: "0.8rem", marginTop: "0.5rem" }}>
              Tip: make sure you've replaced <code>YOUR_FORM_ID</code> in Contact.jsx with your Formspree ID.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
