import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SceneVisual from '../scenes/SceneVisual';

describe('SceneVisual', () => {
  test('aplica pulso sutil solo cuando el movimiento está habilitado', () => {
    const { container, rerender } = render(<SceneVisual index={0} reducedMotion={false} />);
    expect(container.querySelector('[class*="animate-[pulse_4s_ease-in-out_infinite]"]')).toBeTruthy();

    rerender(<SceneVisual index={0} reducedMotion={true} />);
    expect(container.querySelector('[class*="animate-[pulse_4s_ease-in-out_infinite]"]')).toBeNull();
  });
});
