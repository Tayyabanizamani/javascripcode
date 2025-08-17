// Q: Write a JavaScript program to extract each digit of a given number and
//  print whether the digit is even or odd.

let n=4567;
while(n>0) {
let digit=n%10;
if(digit %2==0)
    console.log(digit + "is even");
else 
console.log(digit + "is odd");
n=Math.floor(n/10)
}