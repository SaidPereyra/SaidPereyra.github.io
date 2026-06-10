import { AmbientScene } from './components/AmbientScene';
import { BootLoader } from './components/BootLoader';
import { Contact } from './components/Contact';
import { CurrentFocus } from './components/CurrentFocus';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { Terminal } from './components/Terminal';

function App() {
  return (
    <>
      <BootLoader />
      <AmbientScene />
      <main className="site-shell">
        <Hero />
        <Projects />
        <Terminal />
        <Stack />
        <CurrentFocus />
        <Contact />
      </main>
    </>
  );
}

export default App;
