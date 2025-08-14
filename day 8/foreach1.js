// 1. Find the length of each string in an array:
// Input:
// ["apple", "banana", "grape"];   
// Output:
// [5, 6, 5]


const fruits = ["apple", "banana", "grape"];
const lengths = [];
fruits.forEach(fruit => {
    lengths.push(fruit.length);
});
console.log(lengths);