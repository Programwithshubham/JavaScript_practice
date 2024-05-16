
// --------------------------------------class

class myClass {
    constructor(name ,age ){
        this.name = name ;
        this .age =age ;

    }

    display(){
        return ` My name is a  ${this.name} and my age is  ${this.age}`
    }

}
let myobj = new myClass("abc",12)
// console.log(myobj.display());
// console.log(myobj);


//---------------------------- object  1. object literal 2.  using constructor function


let person ={
    name : "john ",
    age : 23,
    role : "student",
    greet : function (){
        
        return ` My name is a  ${this.name} and my age is  ${this.age} and my role is ${this.role}`
    }
}
//  you can update date also
person.name= "rahul";
person["age"] = 25
person.role = "doctor"

// you can delete data 
delete person.greet

//       two ways of print data 
// console.log(person.name)
// console.log(person.age);
// console.log(person.role);
// console.log(person.greet());

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["role"]);
// console.log(person.greet());



//  object also be created using constructor function 
function person1(name ,age){
    this.name = name ;
    this .age =age ;
    this.greet = function (){
        return ` My name is a  ${this.name} and my age is  ${this.age} `

    }

}
let personobj1= new person1("abc",23);
// console.log(personobj1.name)
// console.log(personobj1.age);
// console.log(personobj1.greet());


// ---------------------------------  Constructor 
function person2(name ,age){
    this.name = name ;
    this .age =age ;
        this .greet = function(){
            return `My name is a  ${this.name} and my age is  ${this.age} `
        } 
}
let personObj3 = new person2("dfghj",23)
// console.log(personObj3.greet());
let personObj4 = new person2("dfghgf",33)

//                          static method 
// static methods do not have access to the this keyword.

class students {
    static add(a,b,){
     return a + b 
    }

}
// console.log(students.add(23,23));




//-------------------------------Encapsulation 
/*
Encapsulation is acceived by two ways either access modifier and closure  .
JavaScript uses closures to implement encapsulation
Access modifiers such as private, public and protected are not natively supported in javascript, but it can be implemented using closures as well.
 Encapsulation is not natively supported in javascript but it can be implemented using closures and other libraries like TypeScript.
*/

function PersonDemo(name, age) {
    let privateAge = age;
    this.name = name;

    this.getAge = function() {
        return privateAge;
    }
}

let personObjDemo = new PersonDemo("John", 30);
// console.log(personObjDemo.getAge());
// console.log(personObjDemo.name); // "John"
// console.log(personObjDemo.privateAge); // undefined
// console.log(personObjDemo.getAge()); // 30



// ----------------------------Inheritance 1 . prototype 2. Object.create()

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let student = new Student("John", 25, "Computer Science");
// console.log(student.greet()); // "Hello, my name is John and I am 25 years old."
// console.log(student.major); // "Computer Science"


//--------------------------Polymorphism 
class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(`Drawing a ${this.name}`);
    }
}
class Circle extends Shape {
    draw() {
        console.log(`Drawing a Circle`);
    }
}
class Square extends Shape {
    draw() {
        console.log(`Drawing a Square`);
    }
}

let shape = new Shape("triangle");
// shape.draw()
let circle = new Circle();
// circle.draw()
let squre = new Square();
// squre.draw()



// ------------------------------------ Abstraction   
/*   
Abstraction is acceived by abstract class and Interface 
JavaScript does not support abstract classes natively, but you can achieve similar functionality by using a combination of function constructors and prototypes.
*/
function Shape1() {
    if (this.constructor === Shape1) {
        throw new Error("Cannot instantiate abstract class Shape");
    }
    this.draw = function() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}

function Circle1() {
    Shape1.call(this);
    this.draw = function() {
        console.log("Drawing a Circle");
    }
}
Circle1.prototype = Object.create(Shape1.prototype);
Circle1.prototype.constructor = Circle;

let circle1 = new Circle();
// circle.draw(); // "Drawing a Circle"
// let shape1 = new Shape1(); // Error: Cannot instantiate abstract class Shape








