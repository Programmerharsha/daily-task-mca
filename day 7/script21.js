   /** Q21
	 * This program reads a number n and prints the first n prime numbers.
	 A prime number is a number that is divisible only by 1 and itself.
	 
	 Problem Flow
	Get input n (how many primes).
	Start checking from 2.
	Use isPrime() to validate.
	If prime, print it and increment count.
	Stop when count reaches n.
	 
	Input / Output Example
	Input:
	How many Prime numbers? 10
	Output:
	2 3 5 7 11 13 17 19 23 29

	 */

let n = parseInt(prompt("How many Prime numbers?"));
let count = 0;
let num = 2;

while (count < n) {
    if (isPrime(num)) {
        console.log(num);
        count++;
    }
    num++;
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
