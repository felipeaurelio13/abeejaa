'use client';

import React, { RefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { StoryScene } from './types';
import SceneVisual from '@/scenes/SceneVisual';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  scene: StoryScene;
  index: number;
  sceneRef: RefObject<HTMLElement>;
  reducedMotion: boolean;
};

export default function Scene({ scene, index, sceneRef, reducedMotion }: Props) {
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sceneRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky || reducedMotion) return;

    const ctx = gsap.context(() => {
      const items = sticky.querySelectorAll('.anim');
      gsap.fromTo(
        items,
        { opacity: 0.15, y: 18, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power1.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: sticky,
            pinSpacing: false
          }
        }
      );
    }, sticky);

    return () => ctx.revert();
  }, [reducedMotion, sceneRef]);

  return (
    <section id={scene.id} ref={sceneRef} className="relative min-h-[200vh] border-b border-white/10">
      <div ref={stickyRef} className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-4 py-6 md:px-10">
        <div className="mx-auto grid h-full w-full max-w-6xl gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/20 bg-slate-900/55 p-3 shadow-[0_24px_90px_rgba(2,6,23,0.55)] backdrop-blur">
            <SceneVisual index={index} reducedMotion={reducedMotion} />
          </div>
          <article className="flex flex-col justify-end gap-3 pb-8 md:pb-12">
            <h2 className="text-xl font-semibold leading-tight text-white md:text-2xl">{scene.title}</h2>
            <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">{scene.caption}</p>
            <div className="space-y-2 text-sm leading-relaxed text-white/85 md:text-[15px]">
              {scene.narrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="rounded-xl border border-cyan-200/30 bg-cyan-100/10 px-3 py-2 text-xs leading-relaxed text-cyan-50 md:text-sm">
              <strong>Qué explica esta animación:</strong> {scene.animationSupport}
            </p>
            <div className="flex flex-wrap gap-2">
              {scene.callouts.map((callout) => (
                <span key={callout} className="rounded-full border border-amber-200/40 bg-amber-100/10 px-3 py-1 text-xs text-amber-50 md:text-sm">
                  {callout}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
