/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
*/

let mark1 = parseFloat(prompt("Enter Mark 1:"));
let mark2 = parseFloat(prompt("Enter Mark 2:"));
let mark3 = parseFloat(prompt("Enter Mark 3:"));

let total = mark1 + mark2 + mark3;
let average = total / 3.0;

console.log("Total Marks   = " + total);
console.log("Average Marks = " + average.toFixed(1));