// 4. Increment all elements in an array by 1.
// Input:
// [1, 2, 3]
// Output:
// [2, 3, 4]

const numbersToIncrement = [1, 2, 3];
const incrementedNumbers = [];
numbersToIncrement.forEach(number => {
    incrementedNumbers.push(number + 1);
});
console.log(incrementedNumbers);