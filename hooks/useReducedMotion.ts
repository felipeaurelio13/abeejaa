'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'abeejaa-reduced-motion';

export function useReducedMotion() {
  const [systemReduced, setSystemReduced] = useState(false);
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setManualOverride(stored === 'true');
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReduced(media.matches);

    const onChange = (event: MediaQueryListEvent) => setSystemReduced(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const reducedMotion = useMemo(() => manualOverride ?? systemReduced, [manualOverride, systemReduced]);

  const toggleReducedMotion = () => {
    setManualOverride((prev) => {
      const next = !(prev ?? systemReduced);
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return {
    reducedMotion,
    usingSystemPreference: manualOverride === null,
    toggleReducedMotion
  };
}
