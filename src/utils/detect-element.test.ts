import { detectElement } from './detect-element';

describe('detectElement', () => {
  const datas: number[][] = [
    [1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 1, 1, 1],
  ];

  test('should handle detectElement init', () => {
    const result = detectElement(datas, -1, -1);

    expect(result).toEqual([
      [false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false, false],
    ]);
  });

  test('should handle detectElement 1', () => {
    const result = detectElement(datas, 1, 1);

    expect(result).toEqual([
      [true, false, false, false],
      [true, true, false, false, false],
      [true, true, false, false],
      [false, true, true, true],
      [false, true, true, true, true],
    ]);
  });

  test('should handle detectElement 2', () => {
    const result = detectElement(datas, 0, 1);

    expect(result).toEqual([
      [false, true, true, true],
      [false, false, true, false, false],
      [false, false, true, true],
      [false, false, false, false],
      [false, false, false, false, false],
    ]);
  });

  test('should handle detectElement 3', () => {
    const result = detectElement(datas, 3, 0);

    expect(result).toEqual([
      [false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false],
      [true, false, false, false],
      [true, false, false, false, false],
    ]);
  });

  test('should handle detectElement 4', () => {
    const result = detectElement(datas, 1, 3);

    expect(result).toEqual([
      [false, false, false, false],
      [false, false, false, true, true],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false, false],
    ]);
  });

  test('should throw Invalid row', () => {
    expect(() => detectElement(datas, 10, 3)).toThrowError('Invalid row');
  });

  test('should throw Invalid col', () => {
    expect(() => detectElement(datas, 1, 10)).toThrowError('Invalid col');
  });
});
