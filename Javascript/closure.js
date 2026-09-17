// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

function z(){
    var b=900;
    function x(){
        var a=7;
         function y(){
            console.log(a);
        }
        a=100;
        return y;
    }
    x();
}
z();