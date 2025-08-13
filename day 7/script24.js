   /** Q24
	 * This program reads n numbers into an array, calculates the average 
	 of those numbers using a loop, and displays the result. 
	 It demonstrates how to use arrays and object-oriented concepts 
	 like classes and methods in Java.
	 
	Problem Flow
	Read input size n
	Read n elements into array
	Loop through array to compute sum
	Divide sum by n to get average
	Display result
	
	 Input / Output Example
Input:
Enter how many numbers: 5
Enter the numbers:
10
20
30
40
50

Output:
Average of the numbers: 30.00


	 */

let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];
for (let i = 0; i < n; i++) {
    numbers.push(parseFloat(prompt("Enter a number:")));
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / n;
console.log("Average of the numbers: " + average.toFixed(2));