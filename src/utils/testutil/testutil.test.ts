import { testutil } from '.';

describe('Testutil utility', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(testutil(1, 2)).toBe(3);
  });
});
