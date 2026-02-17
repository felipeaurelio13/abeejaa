import story from '../content/story.es.json';
import { describe, expect, test } from 'vitest';

describe('story.es.json', () => {
  test('incluye 10 escenas con narrativa completa y soporte de animación', () => {
    expect(story.scenes).toHaveLength(10);

    story.scenes.forEach((scene) => {
      expect(scene.caption.length).toBeGreaterThanOrEqual(60);
      expect(scene.narrative.length).toBeGreaterThanOrEqual(2);
      scene.narrative.forEach((paragraph) => {
        expect(paragraph.length).toBeGreaterThanOrEqual(120);
      });
      expect(scene.animationSupport.length).toBeGreaterThanOrEqual(60);
      expect(scene.callouts.length).toBeGreaterThan(0);
    });
  });
});
