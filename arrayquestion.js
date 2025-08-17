//you are given a list of numbers and a target number.Find two numbers from the
//list that add up to the target. Return their positions(indexes).
let arr=[1,2,3,4,5,6,7,8,9]
let target=6;
for(let i=0;i<arr.length;i++) {
for(let j=i+1;j<arr.length;j++) {
    if (arr[i] + arr[j] == target) {
    console.log("index:",i,j)
    break;
    }
  }

}
