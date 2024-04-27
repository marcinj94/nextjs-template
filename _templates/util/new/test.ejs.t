---
to: src/utils/<%= name %>/<%= name %>.test.ts
---
import { <%= name %> } from '.';

describe('<%= h.capitalize(name) %> utility', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(<%= name %>(1, 2)).toBe(3);
  });
});