import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { describe, expect, test, vi } from 'vitest';

function TestHarness() {
  const { reducedMotion, toggleReducedMotion } = useReducedMotion();
  return (
    <div>
      <output data-testid="state">{String(reducedMotion)}</output>
      <button onClick={toggleReducedMotion}>toggle</button>
    </div>
  );
}

describe('useReducedMotion', () => {
  test('persiste el toggle manual', async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
      }))
    );

    const user = userEvent.setup();
    render(<TestHarness />);

    expect(screen.getByTestId('state')).toHaveTextContent('false');
    await user.click(screen.getByRole('button', { name: 'toggle' }));

    expect(screen.getByTestId('state')).toHaveTextContent('true');
    expect(window.localStorage.getItem('abeejaa-reduced-motion')).toBe('true');
  });
});
