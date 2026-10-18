// bind
let multiply=function(x,y){
    return x*y;
}
let multiplyByTwo=function(x){
    return x*2;
}

let multiplyBy=multiply.bind(this);
console.log(multiplyBy(5,2));

// closure
let multi=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiBy=multi(2);
multiBy(3);