// Write a JavaScript program to check whether
//  an array contains any duplicate element.

let array = [10, 20, 30, 40, 50, 20]; 
let foundDuplicate = false;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) { 
        if (array[i] === array[j]) { 
            console.log("Duplicate found:", array[i]);
            foundDuplicate = true;
            break;
        }
    }
    if (foundDuplicate) {
        break;  
    }
}

if (!foundDuplicate) {
    console.log("No duplicates found.");
}
