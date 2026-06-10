import { currentFocus } from '../data/profile';

export function CurrentFocus() {
  return (
    <section className="section focus-section">
      <div className="section-heading">
        <span className="eyebrow">Current Focus</span>
        <h2>Lo que estoy construyendo</h2>
      </div>

      <div className="focus-list">
        {currentFocus.map((item, index) => (
          <div className="focus-item" key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
