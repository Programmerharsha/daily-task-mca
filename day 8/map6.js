// 6. Map an array of numbers to an array of arrays containing incremental values
// Input:
// [2, 4, 3, 5]
// Output:
// [1, 2]
// [1, 2, 3, 4]
// [1, 2, 3]
// [1, 2, 3, 4, 5]

const arr = [2, 4, 3, 5];
const result = arr.map(n => Array.from({ length: n }, (_, i) => i + 1));
result.forEach(subArr => console.log(subArr));