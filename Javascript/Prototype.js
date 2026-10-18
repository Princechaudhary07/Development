let arr=["Akshay","Aditya"]
let object={
    name:"Akshay",
    city:"Dehradun",
    getIntro:function(){
        console.log(this.name+" "+this.city)
    }
}
function fun(){
    console.log("Hi")
}

let object2={
    name:"Aditya"
}
object2.__proto__=object;
// console.log(object2.city);
Function.prototype.mybind=function(){
    console.log("Hello")
}
fun.__proto__.mybind();
fun.mybind();