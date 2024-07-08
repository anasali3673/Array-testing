

const { sumArray, filterNumbersGreaterThan, sortArray } = require('./array');

describe('sumArray', () => {
    test('sums up elements in an array of numbers', () => {
        expect(sumArray([1, 2, 3])).toBe(6);
    });

    test('returns 0 for an empty array', () => {
        expect(sumArray([])).toBe(0);
    });

    test('returns 0 for non-array inputs', () => {
        expect(sumArray('abc')).toBe(0);
    });

    test('returns 0 if no argument is provided', () => {
        expect(sumArray()).toBe(0);
    });

    test('returns 0 for array containing non-number elements', () => {
        expect(sumArray([1, '2', true])).toBe(0);
    });
});

describe('filterNumbersGreaterThan', () => {
    test('filters numbers greater than a given threshold', () => {
        expect(filterNumbersGreaterThan([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
    });

    test('returns empty array if no numbers are greater than the threshold', () => {
        expect(filterNumbersGreaterThan([1, 2, 3], 5)).toEqual([]);
    });

    test('returns empty array for non-array inputs or invalid threshold', () => {
        expect(filterNumbersGreaterThan('abc', 3)).toEqual([]);
        expect(filterNumbersGreaterThan([1, 2, 3], 'abc')).toEqual([]);
    });

    test('returns empty array if no arguments are provided', () => {
        expect(filterNumbersGreaterThan()).toEqual([]);
    });

    test('filters numbers correctly even if the array has non-number elements', () => {
        expect(filterNumbersGreaterThan([1, '2', true, 4, 5], 1)).toEqual([4, 5]);
    });
});

describe('sortArray', () => {
    test('sorts an array of numbers in ascending order', () => {
        expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('returns empty array for non-array inputs', () => {
        expect(sortArray('abc')).toEqual([]);
    });

    test('returns empty array for an empty array', () => {
        expect(sortArray([])).toEqual([]);
    });

    test('returns sorted array for array containing non-number elements', () => {
        expect(sortArray([3, '1', true, 2])).toEqual([2, 3]);
    });

    test('returns sorted array for array with negative numbers', () => {
        expect(sortArray([3, -1, 2, -5])).toEqual([-5, -1, 2, 3]);
    });

    test('preserves original array order when sorting', () => {
        const arr = [3, 1, 2];
        expect(sortArray(arr)).not.toBe(arr); // ensure original array is not mutated
    });
});
