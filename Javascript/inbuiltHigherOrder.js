const arr=[5,1,3,2,6];
//map
// const output=arr.map((x)=>{
//     return x*2;
// })
// console.log(output);
// const output=arr.map((x)=> x.toString(2));
// const output=arr.map((x)=>{
//     return x.toString(2);
// })

// console.log(output);

//filter
// const output=arr.filter(isOdd);
// function isOdd(x){
//         return x%2;
// }
// console.log(output);

//reduce
// const output=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0);
// console.log(output);

//real life tasks
const users=[
    {firstName:"a",lastName:"z",age:20},
    {firstName:"b",lastName:"y",age:30},
    {firstName:"c",lastName:"x",age:20},
]
const output1=users.map((x)=>x.firstName+" "+x.lastName);
console.log(output1);
const output2=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output2);
const output3=users.filter((x)=>x.age>30).map((x)=>x.firstName);
console.log(output3);
