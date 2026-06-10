export type Project = {
  name: string;
  description: string;
  tags: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    name: 'Midnight Project',
    description:
      'Workspace desktop local-first para notas, módulos, productividad y herramientas developer. Diseñado para trabajar rápido sin depender de servicios externos.',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite', 'Local-first'],
  },
  {
    name: 'Archimedes Core',
    description:
      'Motor académico tipo CLI para estudiar, enseñar e investigar con Markdown estructurado e IA opcional como apoyo, no como dependencia.',
    tags: ['CLI', 'Markdown', 'Academic tools', 'AI optional'],
  },
  {
    name: 'DevBuddy',
    description:
      'Módulo developer para quick access, notas, snippets, pomodoro, accesos rápidos y flujos de productividad local.',
    tags: ['Developer tools', 'Snippets', 'Pomodoro', 'Productivity'],
  },
  {
    name: 'SaaS / Mobile / Laravel Systems',
    description:
      'Experiencia construyendo sistemas administrativos, dashboards, roles y permisos, APIs REST, pagos e integraciones, apps móviles y bases de datos para productos listos para operar.',
    tags: ['Laravel', 'React Native', 'REST APIs', 'Payments', 'SQL'],
  },
];
