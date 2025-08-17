//given an array of integers and a target integer, find two elements
// in the array that add up to the target and return their indices

let arr = [2,7,11,15];
let target=9;
for (let i=0;i<arr.length;i++) {
    for (let j=i+1; j<arr.length;j++) {
        if (arr[i] + arr[j] == target) {
            console.log("index:",i,j);
            break;
        }
    }
}