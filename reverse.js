 //Write a program in JavaScript to reverse the digits of a number
 // without using built-in reverse functions.
//👉 Example 1

//Input: 4567

//Output: 7654

let a=4567;
let remainder=0;
let reverse=0;
while(a>0) {
    remainder=a%10;
reverse=reverse*10 + remainder;
a=Math.floor(a/10);
} console.log(reverse)