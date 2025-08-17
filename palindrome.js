//  Q: Write a JavaScript program to check whether a given integer is a palindrome or not, without using built-in reverse functions.

// 👉 Example 1

// Input: 1221

// Output: "palindrome" ✅
 
 
 let a=1221
 let reverse=0;
 let original= a;
  while (a>0) {
let remainder=a%10;
 reverse=(reverse*10) + remainder;
a=Math.floor(a/10);
} 
if (original==reverse) {
 console.log("palindrome")
 } else {
    console.log("not a palindrome")
}
