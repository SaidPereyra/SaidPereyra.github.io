import { stack } from '../data/stack';

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="section-heading">
        <span className="eyebrow">Stack</span>
        <h2>Tecnologías y flujos</h2>
      </div>

      <div className="stack-grid">
        {stack.map((item) => (
          <span className="stack-chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
