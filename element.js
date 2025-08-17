// Write a JavaScript program to search for a target value
// in an array using linear search. The program should 
// print the index being checked at each step, 
// and finally display the index of the target if found, otherwise -1.

let array = [10, 20, 30, 40, 50];
let target=50;
let index = -1
let i=0;
console.log("Array:",array);
console.log("Target:",target);
while(i<array.length) {
    console.log("checking index:",i, "value:" ,array[i]);
    if(array[i]==target){
        index=i;
        console.log("found at index:", i);
        break;
        
    }
    i++;
}

console.log("final index:",index);

