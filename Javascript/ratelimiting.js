// Rate Limiting restricts requests upto a time period until capacity is decreased to fit in.
let start=Date.now();
let req=0;
function rateLimit(){
    let now=Date.now();
    if(now-start>=60000){
        req=0;
        start=now;
    }
    if(req<5){
        req++;
        console.log("Requests are allowed");
    }
    else{
        console.log("Requests are blocked");
    }
}
rateLimit();