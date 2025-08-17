//you are given a sorted list 
// find the smallest number that is greater than or equal to a given number
const arr =[1,2,3,4,5,6,7,8,9];
const target=5;
const result=binarysearchcall(arr,target)
console.log("smallest number greater than or equal to target:" + result)
function binarysearchcall(arr,target){
let left=0
let right=arr.length-1;
let result=-1;
while(left<=right) {
    let mid=Math.floor((left+right)/2);
    if (arr[mid]>=target) {
    result=arr[mid];
    right=mid-1;
    } else {
        left=mid+1;
    }
}
return result;
}
