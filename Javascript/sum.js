// Amazon Interview Question using recursion and function currying
// Problem sum(1)(2)(3)(4)....(0)

// Approach--currying
function sumxy(x){
    return function(y){
        return x+y;
    }
}

// Generalize via Recursion
let sum=function(x){
    return function(y){
        // add recursion base case if there is no second argument ahead
        if(y){
            return sum(x+y);
        }
        // else reuturn the first argument
        return x;
    }
}
console.log(sum(1)(2)(3)(4)(0));

// Optimization-1
let sum1=(a)=>{
    return (b)=>{
        return b?sum1(a+b):a;
    }
}
console.log(sum1(1)(2)(3)(4)(0));

// Optimization-2
let sum2=(a)=>(b)=>b?sum2(a+b):a;
console.log(sum2(1)(2)(3)(4)(0));


