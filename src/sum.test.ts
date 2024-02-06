import { sum } from './sum';
import { describe, expect, it } from 'vitest';

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sum', () => {
    it('should add two should not numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  