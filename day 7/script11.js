/** Q11
	 * This program reads a number n from the user and prints the 
	 factorial of numbers from 1 to n in a table format.
	 
	 Problem Flow:
	Read n from user
	Start fact = 1
	Loop from 1 to n
	Multiply fact *= i
	Print each number with its factorial
	
	Sample Output:
	Input:
	Enter the N value: 5

	Output:
	N   |   Factorial
	--------------------
  	1  |            1
  	2  |            2
  	3  |            6
  	4  |           24
  	5  |          120
	 */

let n = parseInt(prompt("Enter the N value:"));
let fact = 1;

   console.log("N   |   Factorial");
   console.log("--------------------");
   for (let i = 1; i <= n; i++) {
       fact *= i;
       console.log("  " + i + "  |          " + fact);
   }