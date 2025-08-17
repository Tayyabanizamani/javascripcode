//binary question
//you are given a sorted list of number find the position (index)
//of a given number if the number is not in the list,return -1
let arr =[1,2,3,4,5,6,7,8,9];
let target=10;
let left=0
let right=arr.length-1;
while(left<=right) {
    let mid=Math.floor((left+right)/2);
    if (arr[mid]==target) { 
        console.log("index:",mid);
        break;
    } else if (arr[mid]<target) {
        left=mid+1;
    } else {
        right=mid-1;
    }
}
if (left>right) {
    console.log(-1);
}