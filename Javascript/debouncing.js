// Traditional way
let count=0;
let getData=()=>{
    // API call here for fetching data
    console.log("Fetching Data...", ++count);
}
getData();

// Using debouncing to lower the number of function/ network calls based on the time basis
let doSomeMagic=function(fn,d){
    let args=arguments;
    let context=this;
    let timer;
    clearTimeout(timer);
    return function(){
        timer=setTimeout(()=>{
            getData.apply(context,arguments);
        },d)
    }
}
let betterFunction=doSomeMagic(getData,2000);