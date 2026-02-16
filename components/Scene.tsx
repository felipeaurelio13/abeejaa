'use client';

import { RefObject, useEffect, useRef } from 'react';
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
        { opacity: 0.15, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          stagger: 0.08,
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
    <section id={scene.id} ref={sceneRef} className="relative min-h-[190vh] border-b border-white/10">
      <div ref={stickyRef} className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-4 py-8 md:px-10">
        <div className="mx-auto grid h-full w-full max-w-6xl gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-3 shadow-2xl backdrop-blur">
            <SceneVisual index={index} reducedMotion={reducedMotion} />
          </div>
          <div className="flex flex-col justify-end gap-3 pb-10 md:pb-16">
            <h2 className="text-xl font-semibold text-white md:text-2xl">{scene.title}</h2>
            <p className="max-w-md text-sm text-white/90 md:text-base">{scene.caption}</p>
            <div className="flex flex-wrap gap-2">
              {scene.callouts.map((callout) => (
                <span key={callout} className="rounded-full border border-amber-200/40 bg-amber-100/10 px-3 py-1 text-xs text-amber-50 md:text-sm">
                  {callout}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
