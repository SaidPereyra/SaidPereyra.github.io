import { useEffect, useState } from 'react';

const bootSteps = [
  "Booting Said's Workspace...",
  'Loading projects...',
  'Initializing developer tools...',
  'Ready.',
];

export function BootLoader() {
  const [step, setStep] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timers = bootSteps.map((_, index) =>
      window.setTimeout(() => setStep(index), index * 420),
    );
    const closeTimer = window.setTimeout(() => setHidden(true), bootSteps.length * 420 + 260);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(closeTimer);
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="boot-loader" aria-live="polite" aria-label="Cargando workspace">
      <div className="boot-panel">
        <span className="boot-dot" />
        <p>{bootSteps[step] ?? bootSteps[0]}</p>
      </div>
    </div>
  );
}
