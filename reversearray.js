//Write a JavaScript program to reverse an array without using built-in functions.

let array = [10, 20, 30, 40, 50];
let start=0;
let end = array.length-1;
while(start<end) {
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
    start++;
    end--;
}
console.log(array);
