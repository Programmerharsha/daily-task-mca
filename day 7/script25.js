/** Q25
	 * This program reads n integers into an array and finds the second
	 largest number among them. It uses a class with methods for input, 
	 processing (finding second largest), and output. It showcases 
	 array handling and object-oriented principles in Java.
	 
	Problem Flow 
	Read input size n
	Store values in array
	Use loop to compare and find:
		largest
		secondLargest
	Display result
	
	Input / Output Example
Input:
Enter how many numbers: 6
Enter the numbers:
10
45
22
45
8
19

Output:
Second largest number is: 22


	 */

let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];
for (let i = 0; i < n; i++) {
       numbers.push(parseInt(prompt("Enter a number:")));
   }

   let largest = -Infinity;
   let secondLargest = -Infinity;

   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] > largest) {
           secondLargest = largest;
           largest = numbers[i];
       } else if (numbers[i] > secondLargest && numbers[i] < largest) {
           secondLargest = numbers[i];
       }
   }

   if (secondLargest !== -Infinity) {
       console.log("Second largest number is: " + secondLargest);
   } else {
       console.log("No second largest number found.");
   }
