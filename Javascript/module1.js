// common js
//1. default export
// function add(a,b){
//     return a+b;
// }

// module.exports=add;
//2. named export
// function subtract(a,b){
//     return a-b;
// }
// module.exports={subtract};
// //3. multiple named export
// const add=(a,b)=> a+b;
// const sub=(a,b)=> a-b;

// module.exports={
//     add,
//     sub
// }

//ES6 Modules
//1.export default
// export default function sum(a,b){
//     return a+b;
// }

//2. Named+Default export
export const multiply=(a,b)=>a*b;
export default function division(a,b){
    return a/b;
}
