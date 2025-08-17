//you are given a list of numbers.Find the number that appears most often 
//(the number that has highest frequency)
function mostfrequent(arr) {
    let map = new Map();
    let maxcount=0;
    let result=null;
    for(let num of arr) {
        let count=map.get(num) || 0;
        map.set(num,count+1);
    if (count+1>maxcount){
        maxcount=count+1;
        result=num;
    }
    }
    return result;
    }
    let arr =[1,2,2,3,3,3,4,4,4,4]
    console.log(mostfrequent(arr));