// 3. Filter out duplicate values from an array.
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]

function filterDuplicates(arr) {
    return [...new Set(arr)];
}