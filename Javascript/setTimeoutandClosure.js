// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
// x();

function x(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Prince");
}

x();