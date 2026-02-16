'use client';

import { RefObject, useEffect, useState } from 'react';

export function useActiveScene(refs: RefObject<HTMLElement>[]) {
  const [activeSceneId, setActiveSceneId] = useState<string>('');

  useEffect(() => {
    const elements = refs.map((ref) => ref.current).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSceneId(visible.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-15% 0px -35% 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [refs]);

  return activeSceneId;
}
