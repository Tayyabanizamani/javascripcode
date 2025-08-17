//binary question
//you are given a sorted list of number find the position (index)
//of a given number if the number is not in the list,return -1
const arr=[1,2,3,4,5,6,7,8,9,10];
const target=7;
const result=binarysearch(arr,target);
console.log("the target" + target + "is at index:" +result);
function binarysearch(arr,target) {
    let left=0;
let right=arr.length-1;
while(left<=right) {
    let mid=Math.floor((left+right)/2);
    if (arr[mid]==target) { 
        return mid;
    } else if (arr[mid]<target) {
        left=mid+1;
    } else {
        right=mid-1;
    }
}
 return -1;
}