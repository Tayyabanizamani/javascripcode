// Write a JavaScript program to find the product of all elements in an array.
let array = [1, 2, 3, 4, 5];
let product = 1;

for (let i = 0; i < array.length; i++) {
    product *= array[i];
}

console.log(product);
