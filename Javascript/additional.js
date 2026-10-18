// rest parameter
function sum(...numbers){
    return numbers.reduce((acc,curr)=>{
        acc+=curr;
        return acc;
    },0)
}
// template literals
const name="Prince";
const age=20;
console.log(`Name is ${name} and age is ${age}`)

// string
console.log("Hi".repeat(3));
let s="            hello             ";
s=s.trim();
console.log(s);

let sentence ="React is good";
let words=sentence.split(" ");
console.log(words);
console.log(words.join("-"));
console.log(sentence.replace("React","Js"));

let text="frontenddeveloper";
console.log(text.slice(0,8));
console.log(text.substring(8));

// array
const arr=new Array(10,20,30);
new Array(3);
const array=Array.of(3);
arr.push(40);
arr.unshift(0);
console.log(arr.length);
arr.pop();
arr.shift();
arr.includes(30);
arr.indexOf(20);
arr.sort();
arr.reverse();
arr.slice(1,4);
arr.splice(2,1,99);

console.log(arr);

// IIFE
(function(){
    console.log("Hello");
})();

// object destructing
const obj={
    n:"Prince",
    a:20
}
const {n,a}=obj;
console.log(n);

// Array destructuring
const arr1=["red","green","blue"]
const [first,second,third]=arr1;
console.log(first);

// spread operator
const fruits=["apple","banana","papaya"]
const moreFruits=[...fruits,"mango","grapes"]
console.log(moreFruits);

// rest operator
const arr2=[1,2,3,4,5]
const [x,y,...others]=arr2;
console.log(x);
console.log(others);

// object shorthand
const name1="abc";
const age1=20;
const object1={name1,age1};
console.log(object1.name1);