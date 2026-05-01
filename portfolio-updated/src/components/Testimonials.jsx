import { CONFIG } from "../config";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-inner">
        <p className="section-eyebrow">Kind words</p>
        <h2 style={{ marginBottom: 0 }}>What people say.</h2>
        <div className="testi-grid">
          {CONFIG.testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={t.avatarStyle}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
