// 2. Map an array of numbers to "even" or "odd" strings.
// Input:
// [1, 2, 3, 4, 5]
// Output:
// ['odd', 'even', 'odd', 'even', 'odd']

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => (num % 2 === 0 ? 'even' : 'odd'));
console.log(result);