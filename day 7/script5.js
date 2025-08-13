
/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571
	
*/


const r = parseFloat(prompt('Enter Radius of Sphere: '));
const pi = Math.PI;
const volume = (4 / 3) * pi * Math.pow(r, 3);
const area = 4 * pi * Math.pow(r, 2);
console.log(`Volume of Sphere: ${volume.toFixed(6)}`);
console.log(`Area of Sphere  : ${area.toFixed(6)}`);
