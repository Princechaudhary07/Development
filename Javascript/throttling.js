// Throttling discards the function calls in the given time limit/interval
let count=0;
const getData=()=>{
    // API call to fetch data
    console.log("Fetching Data...",++count)
}
// let expensive=()=>{
//     console.log("expensive");
// }
// let betterFunction=throttle(expensive,limit);
// window.addEventListener("resize",expensive);

let throttle=(fn,limit)=>{
    let flag=true;
    return function(...args){
        if(flag){
            fn.apply(this,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}
let betterFunction=throttle(getData,2000);
document.getElementById("btn").addEventListener("click",betterFunction);

