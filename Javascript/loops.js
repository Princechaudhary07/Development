// do while
let i=1;
do{
    console.log(i);
    i++;
}while(i<5);

// for of 
const fruits=["mango","apple","grapes"]
for(let fruit of fruits){
    console.log(fruit);
}

// for in
const obj={
    name:"a",
    age:"22"
}
for(let key in obj){
    console.log(key+" "+obj[key]);
}