// Write a program to count how many times the digit 5 appears in a given number.

let a=124551;
let count =0;
let str= a+ '';
let i=0;
while(i<str.length) {
    if (str[i] == 5) {
        count++;
    } 
    i++;
} 
console.log(count); 