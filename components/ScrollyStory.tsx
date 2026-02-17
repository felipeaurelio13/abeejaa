'use client';

import { useMemo, useRef, useState } from 'react';
import story from '@/content/story.es.json';
import sources from '@/content/sources.json';
import type { SourceLink, StoryScene } from './types';
import Scene from './Scene';
import { useActiveScene } from '@/hooks/useActiveScene';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const scenes = story.scenes as StoryScene[];
export default function ScrollyStory() {
  const sceneRefs = useMemo(() => scenes.map(() => ({ current: null as HTMLElement | null })), []);
  const active = useActiveScene(sceneRefs);
  const [menuOpen, setMenuOpen] = useState(false);
  const { reducedMotion, toggleReducedMotion, usingSystemPreference } = useReducedMotion();
  const storyRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.max(
    0,
    scenes.findIndex((scene) => scene.id === active)
  );

  const progress = ((activeIndex + 1) / scenes.length) * 100;

  return (
    <main ref={storyRef} className="bg-slate-950 text-white">
      <div className="fixed left-0 top-0 z-40 h-1 w-full bg-white/10">
        <div className="h-full bg-amber-300 transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>

      <button onClick={() => setMenuOpen((prev) => !prev)} className="fixed bottom-4 right-4 z-50 rounded-full border border-white/30 bg-slate-900/90 px-4 py-2 text-sm md:hidden">
        Capítulos
      </button>

      <aside className="fixed left-4 top-16 z-40 hidden w-60 rounded-xl border border-white/20 bg-slate-900/70 p-3 backdrop-blur md:block">
        <ChapterList scenes={scenes} active={active} onClick={() => undefined} />
      </aside>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl border border-white/20 bg-slate-900 p-4" onClick={(e) => e.stopPropagation()}>
            <ChapterList scenes={scenes} active={active} onClick={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <header className="mx-auto flex max-w-6xl items-start justify-between gap-3 px-4 pb-6 pt-10 md:px-10 md:pl-72">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Documental scrollytelling</p>
          <h1 className="text-2xl font-semibold md:text-4xl">Abejas: historia completa de una colonia viva</h1>
        </div>
        <button onClick={toggleReducedMotion} className="rounded-full border border-white/30 px-3 py-2 text-xs md:text-sm">
          {reducedMotion ? 'Activar movimiento' : 'Reducir movimiento'} {usingSystemPreference ? '(sistema)' : '(manual)'}
        </button>
      </header>

      <div className="md:pl-64">
        {scenes.map((scene, index) => (
          <Scene key={scene.id} scene={scene} index={index} sceneRef={sceneRefs[index]} reducedMotion={reducedMotion} />
        ))}
      </div>

      <footer className="mx-auto max-w-6xl space-y-6 px-4 py-14 md:px-10 md:pl-72">
        <section>
          <h3 className="mb-2 text-lg font-medium">Fuentes</h3>
          <ul className="space-y-2 text-sm text-white/85">
            {(sources as SourceLink[]).map((source) => (
              <li key={source.id}>
                <a className="underline decoration-amber-300/70 underline-offset-4" href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-lg font-medium">Glosario corto</h3>
          <ul className="grid gap-2 text-sm text-white/85 md:grid-cols-2">
            <li><strong>Eusocialidad:</strong> organización con cooperación, cuidado común y división reproductiva.</li>
            <li><strong>Haplodiploidía:</strong> sistema donde hembras y machos nacen de rutas genéticas distintas.</li>
            <li><strong>Waggle dance:</strong> patrón de movimiento que codifica dirección y distancia de alimento.</li>
            <li><strong>Bee bread:</strong> reserva fermentada de polen dentro de celdas.</li>
          </ul>
        </section>

        <p className="text-xs text-white/60">abeejaa v1.3.0 · Narrativa completa + animaciones explicativas, mobile-first y sin scrolljacking.</p>
      </footer>
    </main>
  );
}

function ChapterList({ scenes, active, onClick }: { scenes: StoryScene[]; active: string; onClick: () => void }) {
  return (
    <nav aria-label="Índice de capítulos" className="space-y-2">
      {scenes.map((scene, index) => {
        const isActive = scene.id === active;
        return (
          <a key={scene.id} href={`#${scene.id}`} onClick={onClick} className={`block rounded-lg px-3 py-2 text-sm transition ${isActive ? 'bg-amber-200/20 text-amber-100' : 'text-white/80 hover:bg-white/10'}`}>
            <span className="mr-2 text-xs text-white/50">{String(index + 1).padStart(2, '0')}</span>
            {scene.title}
          </a>
        );
      })}
    </nav>
  );
}
