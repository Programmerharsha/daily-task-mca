/** Q15
	 *  This program uses a switch statement to examine the value of 
	 an integer called flag. Based on its value, it prints one of the
	 following messages:
		HOT if the flag has the value 1.
		LUKE WARM if the flag has the value 2.
		COLD if the flag has the value 3.
		OUT OF RANGE if the flag has any other value.
		
	 Problem Flow:
	Prompt the user to input an integer value for the flag.
	Use a switch statement to check the value of the flag and assign the correct heat status.
	Print the flag value and its corresponding heat status.
	
	Sample Input / Output:
	Input:
	Enter Heat code (1-3): 2

	Output:
	Flag 2 is LUKE WARM


	 */

let flag = parseInt(prompt("Enter Heat code (1-3):"));
let heatStatus;

switch (flag) {
    case 1:
        heatStatus = "HOT";
        break;
    case 2:
        heatStatus = "LUKE WARM";
        break;
    case 3:
        heatStatus = "COLD";
        break;
    default:
        heatStatus = "OUT OF RANGE";
}

console.log("Flag " + flag + " is " + heatStatus);
