// empty file run -> js engine creates a global execution context and a window object and a this variable.
// this===window;
var a=10;
function b(){
    var x=10;
}
// console.log(a);
// console.log(window.a);
// console.log(x);
console.log(this.a);