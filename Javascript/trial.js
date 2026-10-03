// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b=10;
// a();

var b=function c(){
    var a=10;
    var d=20;
    return a;
}
console.log(b());