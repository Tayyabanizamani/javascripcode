// Write a program to check whether a given number is prime or not.
let n=7;
let i=2;
let isprime=true
while(i<n) {
    if(n%i==0){
  isprime=false
} 
 i++;
    
} 
if(isprime){
console.log("this is prime")
} else{
    console.log("this is not prime")
}