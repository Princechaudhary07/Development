let name = {
    firstName: "Prince",
    lastName: "Chaudhary"
};
let printName = function () {
    console.log(this.firstName + " " + this.lastName);
};
let printMyName = printName.bind(name);
printMyName();

// Polyfill for bind
Function.prototype.mybind = function (thisArgs, ...args) {
    let obj = this;
    let params = args;
    return function (...args2) {
        obj.apply(thisArgs, [...params, ...args2]);
    };
};
let printMyName2 = printName.mybind(name);
printMyName2();