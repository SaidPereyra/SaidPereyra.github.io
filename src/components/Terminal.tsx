import { FormEvent, useMemo, useState } from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { stack } from '../data/stack';

type Command = 'help' | 'about' | 'projects' | 'stack' | 'contact' | 'github' | 'repo';
type HistoryEntry = {
  command: string;
  output: string;
};

const quickCommands: Command[] = ['help', 'about', 'projects', 'stack', 'contact'];
const historyLimit = 6;
const commandList = ['help', 'clear', 'about', 'projects', 'stack', 'skills', 'contact', 'github', 'repo'];

export function Terminal() {
  const responses = useMemo(
    () => ({
      help: `Comandos disponibles:
${commandList.map((command) => `- ${command}`).join('\n')}`,
      about: `${profile.name}
${profile.role} de ${profile.location}.

${profile.summary}

Trabajo con productos local-first, apps móviles, sistemas web, herramientas internas y flujos developer con IA opcional.`,
      projects: projects
        .map((project) => `- ${project.name}: ${project.description}`)
        .join('\n\n'),
      stack: stack.map((item) => `- ${item}`).join('\n'),
      contact: [
        `GitHub: ${profile.github}`,
        profile.email ? `Email: ${profile.email}` : null,
        profile.linkedin ? `LinkedIn: ${profile.linkedin}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
      github: profile.github,
      repo: 'https://github.com/SaidPereyra/SaidPereyra.github.io',
    }),
    [],
  );
  const [input, setInput] = useState('');
  const [activeCommand, setActiveCommand] = useState<Command>('help');
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: 'help', output: responses.help },
  ]);

  const addHistory = (entry: HistoryEntry) => {
    setHistory((items) => [...items, entry].slice(-historyLimit));
  };

  const resolveCommand = (commandValue: string): Command | 'clear' | null => {
    const normalized = commandValue.trim().toLowerCase();

    if (normalized === 'skills') {
      return 'stack';
    }

    if (normalized === 'clear') {
      return 'clear';
    }

    if (commandList.includes(normalized)) {
      return normalized as Command;
    }

    return null;
  };

  const runCommand = (commandValue: string) => {
    const requestedCommand = commandValue.trim() || 'help';
    const resolvedCommand = resolveCommand(requestedCommand);

    if (resolvedCommand === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (resolvedCommand) {
      setActiveCommand(resolvedCommand);
      addHistory({
        command: requestedCommand,
        output: responses[resolvedCommand],
      });
      setInput('');
      return;
    }

    addHistory({
      command: requestedCommand,
      output: 'Comando no reconocido. Escribe help para ver las opciones disponibles.',
    });
    setInput('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
  };

  return (
    <section className="section terminal-section" id="terminal">
      <div className="section-heading">
        <span className="eyebrow">Interactive Terminal</span>
        <h2>Explora el workspace</h2>
      </div>

      <div className="terminal">
        <div className="terminal-top">
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span>said@workspace:~</span>
        </div>

        <div className="quick-command-row" aria-label="Comandos rápidos">
          {quickCommands.map((command) => (
            <button
              className={activeCommand === command ? 'active' : ''}
              key={command}
              type="button"
              aria-label={`Ejecutar comando ${command}`}
              onClick={() => runCommand(command)}
            >
              {command}
            </button>
          ))}
        </div>

        <div className="terminal-output" aria-live="polite">
          {history.slice(-4).map((entry, index) => (
            <div className="terminal-entry" key={`${entry.command}-${index}`}>
              <p>
                <span>$</span> {entry.command}
              </p>
              <pre>{entry.output}</pre>
            </div>
          ))}
        </div>

        <form className="terminal-input" onSubmit={handleSubmit}>
          <label htmlFor="terminal-command">$</label>
          <input
            id="terminal-command"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Escribe help, projects, stack, github o clear"
            autoComplete="off"
          />
        </form>
      </div>
    </section>
  );
}
