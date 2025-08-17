// Write a program to insert a new element
//  at the end of an array (without using push()).

let array = [10, 20, 30];
let valuetopush=40;
let newArray= new Array(array.length +1);
let i=0;
while (i < array.length) {
    newArray[i]=array[i];
    i++;
}
newArray[i]=valuetopush;
console.log(newArray);
