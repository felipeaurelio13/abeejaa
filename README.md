# abeejaa — Landing scrollytelling visual-first sobre abejas

Landing en **Next.js + TypeScript + Tailwind + GSAP ScrollTrigger** orientada a aprendizaje visual con capítulos animados por scroll, sin scrolljacking y con soporte de `prefers-reduced-motion` + toggle manual persistente.

## Setup

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Scripts

- `npm run dev` — entorno local.
- `npm run build` — build estático (compatible con GitHub Pages via `output: "export"`).
- `npm run start` — servir build de Next.
- `npm run test` — tests con Vitest.

## Estructura

- `app/page.tsx`: entrada principal de la landing.
- `components/ScrollyStory.tsx`: orquestación general (progreso, índice, toggle de movimiento, footer).
- `components/Scene.tsx`: wrapper por escena con pinning moderado y scrub.
- `scenes/SceneVisual.tsx`: visuales SVG originales por cada capítulo.
- `hooks/useReducedMotion.ts`: detección de preferencia del sistema + override manual persistente.
- `hooks/useActiveScene.ts`: activación de capítulo con `IntersectionObserver`.
- `content/story.es.json`: narración en español (escenas, callouts y fuentes por escena).
- `content/sources.json`: referencias usadas.
- `styles/globals.css`: estilos globales y fallback `prefers-reduced-motion`.
- `tests/*`: pruebas automáticas.

## Cómo cambiar escenas y contenido

1. Edita `content/story.es.json`:
   - `title`
   - `caption` (máx recomendado: 120 chars)
   - `callouts` (2–5 chips)
   - `sources` (ids existentes en `content/sources.json`)
2. Ajusta visuales en `scenes/SceneVisual.tsx` por índice.
3. Si agregas nueva funcionalidad, agrega/actualiza tests en `tests/`.

## Accesibilidad y motion

- Respeta `prefers-reduced-motion` automáticamente.
- Toggle manual `Reducir movimiento` persistido en `localStorage` (`abeejaa-reduced-motion`).
- Con movimiento reducido se eliminan animaciones continuas y se mantiene lectura visual estática.

## Performance

- Animaciones basadas principalmente en `transform` + `opacity`.
- Activación de capítulo con `IntersectionObserver` (sin polling).
- Pinning por escena, sin bloquear scroll nativo.

## Versión

- Footer de la app: `abeejaa v1.0.0`.
