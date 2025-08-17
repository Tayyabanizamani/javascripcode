//Q: Write a program in JavaScript to reverse a given integer without using built-in functions.

//👉 Example 1:

//Input: 123

//Output: 321

let a=123
 let remainder=0;
let reverse=0; 
while (a>0) {
     remainder=a%10; 
     reverse=reverse*10 + remainder; 
console.log(remainder) 
a= Math.floor(a/10);
 } 
 console.log(reverse)