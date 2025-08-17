//Q: Write a JavaScript program to find the first and last digit of a given number.
let a=4567
let b=a%10;
while(a>=10){
 a=Math.floor(a/10);
} 
console.log("first digit=",a);
console.log("last digit=",b)
