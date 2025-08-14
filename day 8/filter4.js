// 4. Filter out strings that match a specific pattern
// Input:
// ["apple", "banana", "cherry", "grape"]
// Output:
// ["banana"]

function filterStringsByPattern(arr, pattern) {
    return arr.filter(str => str.includes(pattern));
}