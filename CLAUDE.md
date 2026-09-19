# CLAUDE.md

Apple-style MacBook landing page: React 19 + Vite, Three.js via React Three Fiber/drei, GSAP ScrollTrigger, Tailwind CSS v4, Zustand. Static site deployed to Cloudflare Workers.

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # the only check CI runs
pnpm type-check   # tsc; has known errors, see below
pnpm lint
pnpm preview      # serve dist/
```

## Deploy

Every push to `main` deploys to production at `macbook.lecaotanloc.dev` through `.github/workflows/deploy.yml`, which runs `pnpm build` and then `wrangler deploy`. Treat a push to `main` as a production release. Put anything that should not ship yet on a branch.

## Layout

- `src/App.tsx`: section order. Registers `ScrollTrigger` once, for the whole app.
- `src/components/*.tsx`: one component per page section (Hero, ProductViewer, Showcase, Performance, Features, Highlights, Footer).
- `src/components/models/`: gltfjsx-generated MacBook models. `Macbook-14`/`Macbook-16` appear in ProductViewer; `Macbook` appears in Features and has the feature video on its screen.
- `src/components/three/`: shared scene pieces (`StudioLight`, `ModelSwitcher` for the 14"/16" swap).
- `src/store/index.ts`: Zustand store holding `color`, `scale` and `texture` (the active feature video path).
- `src/constants/index.ts`: data for nav, performance images and positions, features, and `noChangeParts` (meshes that keep their color when the user picks a new one).
- `src/hooks/`: `useInView` and `useVideoInView` (visibility-driven pause).
- `src/index.css`: all section styles, nested under `@layer components` by section id.
- `public/`: models (`.glb`), videos, fonts and images.

## Conventions

- Read the Zustand store through selectors, e.g. `useMacbookStore((s) => s.color)`, never through the whole store. A whole-store read re-renders on every `texture` change.
- Scope GSAP selectors to their section, e.g. `#showcase .content`. Several sections reuse class names such as `.content` and `.wrapper`.
- Follow the performance rules in the README "Performance" section: canvases and videos pause offscreen, textures upload once, scrub with transforms only, import GSAP plugins by path, images are WebP. The page previously lagged because these rules were broken.

## Known issues

- `pnpm type-check` and `pnpm lint` already fail in the gltfjsx model files (untyped `nodes` and `materials`, `any` props) and on `PresentationControls` props. CI does not run them. Do not treat these failures as regressions. Just avoid adding new ones.
- `public/videos/game.mp4` (about 13MB) is the heaviest asset and has not been re-encoded yet.
