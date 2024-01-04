//6)Write a JS code to find the no of digits in a number 
	/*onsole.log(digitCount(8367)); =4 */
let number=8367;
let count =0;
while(number!=0)
{
    number=Math.floor(number/10); 
    count++;
}
console.log(count);
