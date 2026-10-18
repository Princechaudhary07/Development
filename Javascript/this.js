// 'use strict';
// global space
console.log(this);//window/global object

// inside a function
function x(){
    console.log(this);
}

// how it is called
// in strict mode x()=undefined, window.x()=window

// inside object's method
const obj={
    a:10,
    x:function(){
        console.log(this);
    }
}
//call
const obj2={
    a:20
}
obj.x.call(obj2);
// inside arrow function
const object={
    a:10,
    x:()=>{
        console.log(this);
    }
}
// inside nested arrow function
const obj3={
    a:10,
    x:function(){
        const y=()=>{
            console.log(this);
        }
    }
}
// inside DOM


