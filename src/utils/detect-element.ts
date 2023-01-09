type ValueData = string | number | boolean;
type ArrData = (string | number | boolean)[][];
type highlightResponse = boolean[][];

export function detectElement(
  arr: ArrData,
  row: number,
  col: number,
): highlightResponse {
  if (row > arr.length - 1) {
    throw new Error('Invalid row');
  }

  const highlighted = arr.map((value, index) => {
    if (index === row && col > value.length - 1) {
      throw new Error('Invalid col');
    }
    return Array.from({ length: value.length }, () => false);
  });

  // init highlighted
  if (row <= -1 || col <= -1) {
    return highlighted;
  }

  const value: ValueData = arr[row][col];
  return detectElementUtil(row, col, arr, highlighted, value);
}

function detectElementUtil(
  row: number,
  col: number,
  arr: ArrData,
  highlighted: boolean[][],
  value: ValueData,
): highlightResponse {
  highlighted[row][col] = true;

  // Check if the upper is valid
  if (isSafe(row - 1, col, arr, highlighted, value)) {
    detectElementUtil(row - 1, col, arr, highlighted, value);
  }

  // Check if downward is valid
  if (isSafe(row + 1, col, arr, highlighted, value)) {
    detectElementUtil(row + 1, col, arr, highlighted, value);
  }

  // Check if the left is valid
  if (isSafe(row, col - 1, arr, highlighted, value)) {
    detectElementUtil(row, col - 1, arr, highlighted, value);
  }

  // Check if the right is valid
  if (isSafe(row, col + 1, arr, highlighted, value)) {
    detectElementUtil(row, col + 1, arr, highlighted, value);
  }

  return highlighted;
}

function isSafe(
  row: number,
  col: number,
  arr: ArrData,
  highlighted: boolean[][],
  val: ValueData,
) {
  if (
    row === -1 ||
    row === arr.length ||
    col === -1 ||
    col === arr[row].length ||
    highlighted[row][col] ||
    arr[row][col] !== val
  ) {
    return false;
  }

  return true;
}

export function initDatasRandomNumber(row: number, col: number): number[][] {
  return Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Math.floor(Math.random() * 4)),
  );
}
