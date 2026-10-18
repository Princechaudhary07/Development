let name={
    firstName:"Prince",
    lastName:"Chaudhary",
    printName:function(hometown,state){
        console.log(this.firstName+" "+this.lastName+" "+"from"+" "+hometown+" "+"and"+" "+state)
    }
}

let name2={
    firstName:"Sachin",
    lastName:"Tendulkar"
}
// call
name.printName.call(name2,"Mumbai","Maharashtra");
// apply
name.printName.apply(name2,["Mumbai","Maharashtra"]);
// bind
let printMyName=name.printName.bind(name2,"Mumbai","Maharashta");
printMyName();
