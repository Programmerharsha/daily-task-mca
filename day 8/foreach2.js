// 2. Skip negative numbers in an array:
// Input:
// [1, -2, 3, -4, 5]
// Output:
// [1, 3, 5]

const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = [];
numbers.forEach(number => {
    if (number > 0) {
        positiveNumbers.push(number);
    }
});
console.log(positiveNumbers);