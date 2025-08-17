//Q: Write a JavaScript program to search for a target element in an array 
//using linear search (without using built-in functions).
let num=[1,2,3,4,5,6,7,8,9,10];
let target=2;
let i=0
while(i<num.length) {
    if (num[i]==target) {
        console.log("target found")
    }
 i=i+1
}