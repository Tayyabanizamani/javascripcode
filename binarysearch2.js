//you are given a sorted list that may have repeated numbers 
// find the first position where a given number appears
let arr =[1,2,2,2,3,4,7,8,8];
let target=2;
let left=0
let right=arr.length-1;
let result=-1;
while(left<=right) {
    let mid=Math.floor((left+right)/2);
    if (arr[mid]==target) {
    result=mid;
    right=mid-1;
    } else if (arr[mid]<target) {
        left=mid+1;
    } else {
        right=mid-1;
    }
}
console.log("first occurence index:",result)