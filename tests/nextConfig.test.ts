import { afterEach, describe, expect, test, vi } from 'vitest';

const originalActions = process.env.GITHUB_ACTIONS;
const originalRepository = process.env.GITHUB_REPOSITORY;

afterEach(() => {
  process.env.GITHUB_ACTIONS = originalActions;
  process.env.GITHUB_REPOSITORY = originalRepository;
  vi.resetModules();
});

describe('next.config.mjs', () => {
  test('configura basePath y assetPrefix para GitHub Pages', async () => {
    process.env.GITHUB_ACTIONS = 'true';
    process.env.GITHUB_REPOSITORY = 'owner/abeejaa';

    const { default: config } = await import('../next.config.mjs');

    expect(config.output).toBe('export');
    expect(config.trailingSlash).toBe(true);
    expect(config.images?.unoptimized).toBe(true);
    expect(config.basePath).toBe('/abeejaa');
    expect(config.assetPrefix).toBe('/abeejaa');
  });

  test('mantiene ruta raíz fuera de GitHub Actions', async () => {
    process.env.GITHUB_ACTIONS = 'false';
    process.env.GITHUB_REPOSITORY = 'owner/abeejaa';

    const { default: config } = await import('../next.config.mjs');

    expect(config.basePath).toBe('');
    expect(config.assetPrefix).toBeUndefined();
  });
});
