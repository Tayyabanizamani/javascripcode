//you are given a list of numbers.Find the number that appears most often 
//(the number that has highest frequency)
let numbers=[1,2,2,3,4,6,7]
let maxcount=0;
let mode=numbers[0]
for(let i=0;i<numbers.length;i++) {
    let count=0;
for(let j=0;j<numbers.length;j++) {
    if (numbers[j]== numbers[i]) {
        count++;
    }
}
if (count>maxcount){
maxcount=count
mode=numbers[i]
}
}
console.log("the number that appears most often is:"+mode)