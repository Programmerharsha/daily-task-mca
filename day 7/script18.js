 /** Q18
	 *  This program takes a string (text) and creates its reverse 
	 version in another string (reverseText). Each character from the 
	 original string is added in reverse order to the new string.
	 
	 Flow Summary
	Read the input string
	Loop from last character to first
	Use comma operator in loop (i--, j++)
	Add each character to reverseText
	Print the reversed output
	
	Sample I/O
	Input:
	Enter the string below:
	hello
	Output:
	Reversed Text: olleh

	 */

let text = prompt("Enter the string below:");
let reverseText = "";
for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
    reverseText += text[i];
}
console.log("Reversed Text: " + reverseText);