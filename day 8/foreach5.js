// 5. Find the maximum number in an array.
// Input:
// [1, 2, 3]
// Output:
// 3

const numbersToFindMax = [1, 2, 3];
let maxNumber = numbersToFindMax[0];
numbersToFindMax.forEach(number => {
    if (number > maxNumber) {
        maxNumber = number;
    }
});
console.log(maxNumber);