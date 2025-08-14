// 5. Map an array of strings to an array of text display with letter spacing.
// Input:
// ["hello", "world", "javascript"]
// Output:
// ['h e l l o', 'w o r l d', 'j a v a s c r i p t']

const input = ["hello", "world", "javascript"];
const output = input.map(str => str.split('').join(' '));
console.log(output);