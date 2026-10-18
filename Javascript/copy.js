// primitive copy
let a=20;
let b=a;
b=10;
console.log(a);

// reference copy
let obj={
    n:1
}
let obj2=obj;
obj2.n=2;
console.log(obj.n);

// shallow copy
const original={
    name:"Prince",
    address:{
        city:"Mathura"
    }
}
const copy={...original}
copy.name="abc";
copy.address.city="Agra";
console.log(original.name);
console.log(original.address.city);

// deep copy
const deepCopy=structuredClone(original);
deepCopy.name="abc";
deepCopy.address.city="Delhi";
console.log(original.name);
console.log(original.address.city);

