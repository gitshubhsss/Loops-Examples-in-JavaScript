//9)Write a JS code to print the Fibonacci series for a given value of N
let n=parseInt(prompt("Enter  a number "));
let a=0;
let b=1;
let c;
for(let i=0;i<=n;i++)
{
    console.log(a+" ");
    c=a+b;//c=0+1=1 c=1+1=2 c=1+2=3 c=2+3=5 c=3+5=8 c=5+8=13
    a=b;//a=1; a=1 a=2 a=3 a=5 a=8
    b=c;//b=1 b=2 b=3 b=5 b=8 b=18
}