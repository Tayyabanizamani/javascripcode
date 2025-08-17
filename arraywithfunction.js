//you are given a list of numbers and a target number.Find two numbers from the
//list that add up to the target. Return their positions(indexes).
const arr=[1,2,3,4,5,6,7,8,9];
const target=6;
function twosum(arr,target) {
    let map= new Map();
for(let i=0;i<arr.length;i++) {
    let complement=target-arr[i];
    if (map.has(complement)) {
        return [map.get(complement),i]
    }
    map.set(arr[i],i);
}
    return [];
}
const result=twosum(arr,target);
console.log("index:" + result);