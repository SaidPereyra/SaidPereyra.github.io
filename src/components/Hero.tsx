import { profile } from '../data/profile';

export function Hero() {
  return (
    <>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#top" aria-label="Inicio">
          SP
        </a>
        <div className="nav-links">
          <a href="#projects">Proyectos</a>
          <a href="#terminal">Terminal</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Web & Mobile Developer / Local-first tools / AI-assisted workflows</span>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Ver proyectos
              </a>
              <a className="button" href={profile.github} target="_blank" rel="noopener noreferrer">
                Ver GitHub
              </a>
              <a className="button ghost" href="#contact">
                Contactar
              </a>
            </div>
          </div>

          <aside className="system-panel" aria-label="Estado del workspace">
            <div className="panel-header">
              <span />
              <span />
              <span />
            </div>
            <div className="metric-row">
              <span>Mode</span>
              <strong>Local-first</strong>
            </div>
            <div className="metric-row">
              <span>Focus</span>
              <strong>Developer tools</strong>
            </div>
            <div className="metric-row">
              <span>Region</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="status-line">
              <span className="pulse" />
              Available for selected builds
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
