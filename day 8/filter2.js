// 2. Filter numbers that are greater than 5 and less than 10
// Input:
// [3, 6, 8, 11, 14]
// Output:
// [6, 8]

function filterNumbersInRange(arr) {
    return arr.filter(num => num > 5 && num < 10);
}