//if hala is 20 years old 8 years ago and eva was16,after 8 years
//hala will be how much year older than eva?

let hala =20;
let eva=16;
let halacurrentage=hala+8;
let evacurrentage=eva+8;
let agediff=halacurrentage-evacurrentage;
if(agediff>0) {
    console.log("hala will be" + agediff + "years older than eva ");
} else if (agediff<0) {
    console.log("eva will be" + (-agediff) + "years older than hala");
} else {
    console.log("hala and eva will be the same age");
}