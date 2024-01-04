//8)Write a JS code to find the largest number in an array
let array=[52,85,78,48,545,45];
let largest=0;
for (let i = 0; i< array.length; i++) {  
    if(array[i]>largest)
    {
        largest=array[i];
    }  
}
console.log(largest);