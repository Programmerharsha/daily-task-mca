 /** Q12
	 * This program reads 5 numbers (each between 1 and 30) from the user.
	 For each number, it prints a line with that many asterisks *, 
	 forming a simple bar chart or histogram.
	 
	 Problem Flow:
	Read 5 numbers from the user
	Loop through each number
	For each number:
	Print the number
	Print that many * using inner loop
	
	Sample Output:
	Input:
	Enter 5 Numbers in a same line: 
	3 7 2 6 1
	Output:
	3 ***
 	7 *******
 	2 **
 	6 ******
 	1 *
 	
	 */

let numbers = prompt("Enter 5 Numbers in a same line:").split(" ").map(Number);

for (let i = 0; i < numbers.length; i++) {
    let count = numbers[i];
    let stars = "";
    for (let j = 0; j < count; j++) {
        stars += "*";
    }
    console.log(count + " " + stars);
} 