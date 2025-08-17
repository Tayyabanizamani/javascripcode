//Q: Given an array and a target number,
// find two elements whose sum equals the target.

let array = [10, 20, 30,40,50 ];
let target = 60;
let found = false;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            console.log(array[i], array[j]); 
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}

if (!found) {
    console.log("No pair found.");
}
