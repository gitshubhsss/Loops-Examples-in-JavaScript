//Write a JS code to delete all occurrence of element in given array 
	/*var arr = [23,56,4,78,5,63,45,210,56];
		output-[23, 4, 78, 5, 63, 45, 210] */

let arr=[23,56,4,78,5,63,45,210,56];
let element=56;
for (let i = 0; i < arr.length; i++) {
	if(arr[i]===element)
	{
		arr.splice(i,1)
	}
}
console.log(arr);