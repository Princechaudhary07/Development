// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });

// setTimeout(() => {
//     console.log("Timeout");
    
// }, 2000);

let count=0;
let id=setInterval(()=>{
    console.log("Interval");
    count++;
    if(count==5){
        clearInterval(id);
    }
},1000)