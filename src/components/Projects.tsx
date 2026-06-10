import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Projects & Work Areas</span>
        <h2>Productos, sistemas y herramientas</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card-header">
              <h3>{project.name}</h3>
              {project.links?.length ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
