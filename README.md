# qloha.dev

A responsive, statically generated developer portfolio built with SvelteKit, TypeScript, and plain CSS.

## Development

Use Node.js 22 or newer and npm.

- `npm ci` installs the locked dependencies.
- `npm run dev` starts the local development server.
- `npm run check` checks Svelte and TypeScript.
- `npm run build` prerenders the home, projects, and about pages into `build/`.
- `npm run preview` serves the production build locally.

Project content and links live in `src/lib/data/projects.ts`. Contact details live in `src/lib/site.ts`; shared styles live in `src/app.css`.

All pages contain readable HTML before JavaScript loads. The project filters enhance the collection in the browser. The Day and Night buttons switch between light and dark themes. The site follows the system preference until a visitor chooses a mode, then saves that choice locally. The theme is applied before the page renders to avoid a flash of the wrong background. There are no external fonts, images, or animation libraries. Keyboard navigation and mobile zoom are supported.

## Deployment

The GitHub Actions workflow checks and builds the site on pushes to `main`, then publishes `build/` to GitHub Pages. `static/CNAME` preserves the `qloha.dev` custom domain, and `static/.nojekyll` preserves generated assets. Routes use trailing slashes for direct static hosting. The custom 404 page, robots.txt, and sitemap.xml are copied into the build.

Dependency maintenance: `gh-pages` is pinned to 6.1.1 to avoid the vulnerable glob dependency chain in later 6.x releases. The `cookie` override keeps SvelteKit’s transitive cookie parser on the patched 0.7.x release. Revisit both choices when updating the framework or deployment tooling.
