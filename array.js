

function sumArray(arr) {
    if (!Array.isArray(arr)) {
        return 0; // return 0 for non-array inputs
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterNumbersGreaterThan(arr, threshold) {
    if (!Array.isArray(arr) || typeof threshold !== 'number') {
        return []; // return empty array for invalid inputs
    }
    return arr.filter(item => typeof item === 'number' && item > threshold);
}

function sortArray(arr) {
    if (!Array.isArray(arr)) {
        return []; // return empty array for non-array inputs
    }
    return arr.slice().sort((a, b) => a - b);
}

module.exports = {
    sumArray,
    filterNumbersGreaterThan,
    sortArray
};
