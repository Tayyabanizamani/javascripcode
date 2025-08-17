// Q: Write a JavaScript program to find the sum of all elements 
// of a given array without using built-in functions.

// 👉 Example 1

// Input: [1,2,3,4,5,6]

// Output: 21

let naturalnum=[1,2,3,4,5,6];
let sum=0
let i=0
while(i<naturalnum.length) {
   sum=naturalnum[i]+ sum

i++
} 
console.log(sum)