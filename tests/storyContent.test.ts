import story from '../content/story.es.json';
import { describe, expect, test } from 'vitest';

describe('story.es.json', () => {
  test('incluye 10 escenas con caption breve', () => {
    expect(story.scenes).toHaveLength(10);
    story.scenes.forEach((scene) => {
      expect(scene.caption.length).toBeLessThanOrEqual(120);
      expect(scene.callouts.length).toBeGreaterThan(0);
    });
  });
});
