// 1. Filter out falsy values from an array
// Input:
// [0, "", false, null, undefined, 1, "hello"]
// Output:
// [1, "hello"]

const arr = [0, "", false, null, undefined, 1, "hello"];
const filteredArr = arr.filter(Boolean);
console.log(filteredArr);