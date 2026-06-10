# Said Pereyra | Software Developer

Portafolio personal estático para `saidpereyra.github.io`, construido como un Developer OS / Personal Workspace con foco en proyectos local-first, apps móviles, sistemas web, herramientas developer y productos con IA opcional.

## Stack

- Vite
- React
- TypeScript
- Three.js para `AmbientScene`
- CSS simple
- GitHub Pages

La dirección visual toma como referencia `DESIGN_SYSTEM.md`, inspirado en la identidad Midnight: dark premium, técnico, sobrio y con acentos cyan/emerald/violet controlados.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

- `src/data/profile.ts`: información pública del perfil y foco actual.
- `src/data/projects.ts`: proyectos destacados.
- `src/data/stack.ts`: tecnologías y flujos.
- `src/components`: secciones visuales del portafolio.

## Deploy

Este es un repositorio de usuario de GitHub Pages, por eso `vite.config.ts` usa `base: "/"`.

El workflow `.github/workflows/deploy.yml` compila el sitio con `npm run build` y publica `dist/` en GitHub Pages. Para activarlo en GitHub:

1. Ir a `Settings > Pages`.
2. En `Build and deployment`, seleccionar `GitHub Actions`.
3. Hacer push a `main`.
