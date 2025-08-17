// Q: A user has multiple busy time slots during the day.
// Several movies are scheduled at fixed start and end times. 
// Write a JavaScript program to check:

// Whether a given target time lies between two times (start–end).

// Whether the target time is greater than start or end time.

// Which movies the user can watch, given that they cannot watch
 //any movie that overlaps with their busy times.

//Display the total number of movies that the user can watch.


let starthours=10, startminutes=30;
let endhours=15 , endminutes=0;

let targethours=12, targetminutes=45;
if(
    (targethours>starthours||(targethours==starthours && targetminuters>=startminutes)) &&
    (targethours<endhours||(targethours==endhours&& targetminutes<=endminutes))
) {
    console.log("target time is in between the start and end time");
} else{
    console.log("target timeis not in between the start and end time");
}

if (
    targethours> starthours || (targethours==starthours && targetminutes > startminutes)
) {
    console.log("target time is greater than the start time");
} else{
    console.log("target time is not greater than the start time ");
}
if (
    targethours>endhours || (targethours==endhours && targetminutes > endminutes)
) {
    console.log("target time is greater than the end time");
} else{
    console.log("target time is not greater than the end time");
}
//movie1
let movie1starth=9,movie1startm=0;
let movie1endh=11,movie1endm=0;
//movie2
let movie2starth=12,movie2stratm=30;
let movie2endh=14,movie2endm=0;
//movie3
let movie3starth=16, movie3startm=0;
let movie3endh=21,movie3endm=0;
//movie4
let movie4starth=19, movie4startm=30;
let movie4endh=21,movie4endm=0;

//define busy time
let busy1starth=10,busy1startm=30;
let busy1endh=13,busy1endm=0;

let busy2starth=17,busy2startm=0;
let busy2endh=19,busy2endm=0;

//check which movies can be watched

let movieswatched=0;

if(
!(movie1starth>=busy1starth && movie1starth<busy1endh) &&
!(movie1endh>busy1starth && movie1endh<=busy1endh) &&
!(movie1starth>=busy2starth && movie1starth<busy2endh) &&
!(movie1endh>busy2starth && movie1endh<=busy2endh)
) {
    console.log("user can watch movie 1");
    movieswatched++;
} else {
    console.log("movie 1 is during busy time")
}
if(
    !(movie2starth>=busy1starth && movie2starth<busy1endh) &&
    !(movie2endh>busy1starth && movie2endh<=busy1endh) &&
    !(movie2starth>=busy2starth && movie2starth<busy2endh) &&
    !(movie2endh>busy2starth && movie2endh<=busy2endh)
    ) {
        console.log("user can watch movie 2");
        movieswatched++;
    } else {
        console.log("movie 2 is during busy time");
    }
    if(
        !(movie3starth>=busy1starth && movie3starth<busy1endh) &&
        !(movie3endh>busy1starth && movie3endh<=busy1endh) &&
        !(movie3starth>=busy2starth && movie3starth<busy2endh) &&
        !(movie3endh>busy2starth && movie3endh<=busy2endh)
        ) {
            console.log("user can watch movie 3");
            movieswatched++;
        } else {
            console.log("movie 3 is during busy time");
        }
        if(
            !(movie4starth>=busy1starth && movie4starth<busy1endh) &&
            !(movie4endh>busy1starth && movie4endh<=busy1endh) &&
            !(movie4starth>=busy2starth && movie4starth<busy2endh) &&
            !(movie4endh>busy2starth && movie4endh<=busy2endh)
            ) {
                console.log("user can watch movie 4");
                movieswatched++;
            } else {
                console.log("movie 4 is during busy time")
            }
// displaying total movies that can be watched
console.log("total movies user can watch:", movieswatched);




