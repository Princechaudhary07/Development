// class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

// class inheritence
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log("speaks");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Barks");
    }
}
const d=new Dog("buddy");
d.speak();

// encapsulation
class Bank{
    #balance=0;
}

// getters and setters
class Rectangle{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
    get area(){
        return this.l*this.b;
    }
    set breadth(w){
        this.b=w;
    }
}

// polymorphism
// method overloading
const add=function(a,b){
    return a+b;

}
const add2=function(a,b,c){
    return a+b+c;
}
console.log(add(2,3));
console.log(add2(2,2,3));

// mathod overriding
class LivingAnimal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log("speaks");
    }
}

class Cat extends LivingAnimal{
    speak(){
        console.log("Meows");
    }
}
const c=new Cat("mini");
c.speak();

// Abstraction
class Car{
    start(){
        this.#startEngine();
        console.log("car started");
    }
    #startEngine(){
        console.log("engine started");
    }
}
const car=new Car("BMW");
car.start();

// static
class Util{
    static sum(a,b){
        return a+b;
    }
}
console.log(Util.sum(2,3));

// super
class Parent{
    constructor(name){
        this.name=name;
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}