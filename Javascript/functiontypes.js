// function statement or declaration
function a(){
    console.log("hi");
}
a();

// function expression
var b=function(){
    console.log("hello");
}
b();

// anonymous function
var c=function(){
    console.log("hello");
}
c();

// named function expression
var d=function e(){
    console.log("e");
}
d();
//not e();

// parameters vs arguments
var f=function(param1,param2){
    console.log("f called");
}
f(1,2);

// first class functions/citizens
var h=function(param1){
    console.log(param1);
    return function(){
        console.log("first class");
    }
}
h(function b(){
    console.log("b called");
});
console.log(h());
