/** Q14
	 *  This program will read a line of text from the user, analyze 
	 each character, and count how many are letters, digits, whitespace, 
	 or other types of characters (like punctuation).
	 
	 Problem Flow:
	Prompt the user to input a line of text.
	Initialize counters for letters, digits, spaces, and other characters.
	Loop through each character and classify it into one of the categories.
	Display the count for each category: letters, digits, spaces, and others.

	Sample Input / Output:
	Input:
	Enter the text below:
	Hello World! 123

	Output:
	Letters : 10
	Digits : 3
	Space Chars : 2
	Others : 2

	 */

let text = prompt("Enter the text below:");
let letters = 0;
let digits = 0;
let spaces = 0;
let others = 0;

for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-zA-Z]/)) {
        letters++;
    } else if (char.match(/[0-9]/)) {
        digits++;
    } else if (char.match(/\s/)) {
        spaces++;
    } else {
        others++;
    }
}

console.log("Letters : " + letters);
console.log("Digits : " + digits);
console.log("Space Chars : " + spaces);
console.log("Others : " + others);
