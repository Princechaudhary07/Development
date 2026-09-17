if(true) {
    var a=10;
    console.log(a);
}
let b=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(b);
}
console.log(b);

let a=20;
function x(){
    var a=20;

}

const a=20;
{
    const a=100;
    {
        // const a=200;
        console.log(a);
    }

}


