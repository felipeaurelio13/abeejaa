import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SceneVisual from '../scenes/SceneVisual';

describe('SceneVisual animation phases', () => {
  test('incluye capas narrativas para contexto, flujo, foco y resultado', () => {
    const { container } = render(<SceneVisual index={6} reducedMotion={false} />);

    expect(container.querySelector('.anim-context')).toBeTruthy();
    expect(container.querySelector('.anim-flow')).toBeTruthy();
    expect(container.querySelector('.anim-focus')).toBeTruthy();
    expect(container.querySelector('.anim-outcome')).toBeTruthy();
    expect(container.querySelector('.anim-path')).toBeTruthy();
  });
});
