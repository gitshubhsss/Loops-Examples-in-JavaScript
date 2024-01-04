//7)Write a JS code to calculate the sum of digits in a number 
	/*console.log(digitSum(4367)); =20 */

let number=4367;
let sum=0;
while (number!=0) {
    sum = sum + number % 10;
    number = Math.floor(number/10);  
}
console.log(sum);