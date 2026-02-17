import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Scene from '../components/Scene';
import type { StoryScene } from '../components/types';

const timelineMock = {
  fromTo: vi.fn().mockReturnThis(),
  to: vi.fn().mockReturnThis()
};

vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    context: vi.fn((cb: () => void) => {
      cb();
      return { revert: vi.fn() };
    }),
    timeline: vi.fn(() => timelineMock),
    set: vi.fn()
  }
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {}
}));

describe('Scene narrative', () => {
  test('renderiza narrativa completa y explicación de animación', () => {
    const scene: StoryScene = {
      id: 'scene-test',
      title: 'Escena de prueba',
      caption: 'Esta escena explica por qué el apoyo visual debe tener objetivo narrativo claro.',
      narrative: [
        'Primer párrafo: contexto biológico con suficiente detalle para guiar lectura sin depender del gráfico aislado.',
        'Segundo párrafo: interpreta el cambio visual y explica qué decisión toma la colonia y por qué importa.'
      ],
      animationSupport: 'El diagrama conecta eventos causales para facilitar comprensión de la secuencia.',
      callouts: ['Contexto', 'Proceso'],
      sources: ['britannica-honeybee']
    };

    render(<Scene scene={scene} index={0} sceneRef={{ current: null }} reducedMotion={true} />);

    expect(screen.getByText('Escena de prueba')).toBeInTheDocument();
    expect(screen.getByText(/Qué explica esta animación/)).toBeInTheDocument();
    expect(screen.getByText(/Lectura guiada: contexto → proceso → resultado/)).toBeInTheDocument();
    expect(screen.getByText(/Primer párrafo/)).toBeInTheDocument();
    expect(screen.getByText(/Segundo párrafo/)).toBeInTheDocument();
  });
});
