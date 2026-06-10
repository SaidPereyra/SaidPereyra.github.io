import { profile } from '../data/profile';

export function Contact() {
  const links = [
    { label: 'GitHub', href: profile.github },
    profile.email ? { label: 'Email', href: `mailto:${profile.email}` } : null,
    profile.linkedin ? { label: 'LinkedIn', href: profile.linkedin } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section className="section contact-block" id="contact">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Construyamos algo concreto</h2>
      </div>

      <div className="contact-panel">
        <p>
          Disponible para productos local-first, MVPs SaaS, herramientas internas,
          apps móviles y flujos developer con IA opcional.
        </p>

        <div className="contact-links">
          {links.map((link) => (
            <a className="button primary" href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
