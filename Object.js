// creating Object using literal
let obj = {
    name :"shubham",
    age :22,
    education : "BCA",
    NO : 234567,
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.education)
console.log(obj.No)
console.log("-------------------")
console.log(obj['name'])
console.log(obj['age'])
console.log(obj['education'])
console.log(obj['No'])
console.log("-------------------")


// by using {}
const person = {};
person.name= "shubham",
person.age = 22,
person.education = 'BCA'
person.No =3456678

console.log(person)



// by using new keyword
const person = new Object();
person.name= "shubham",
person.age = 22,
person.education = 'BCA'
person.No =3456678
console.log(person)



//Object Constructor
function person(name,age,education,No) {
  this.name = name;
  this.age=age;
  this.education=education;
  this.No = No;
}
let personObj =new person('shubham',22,'BCA',345678)
console.log(personObj)




// adding default value
function person(name,age,education,No) {
  this.name = name;
  this.age=age;
  this.education=education;
  // default value
  this.No = 45678;
  
}
let result =new person('shubham',22,'BCA')
console.log(result)


//Object Properties
const person = new Object();
person.name= "shubham",
person.age = 22,
person.education = 'BCA'
person.No =3456678
// console.log(person)
// Returns an array of the keys
console.log(Object.keys(person))
// Returns an array of the property values 
console.log(Object.values(person))
// Returns an array of the key/value pairs of an object
console.log(Object.entries(person))

// object Prototype Inheritance :- ou canot add new property but in case you want to add new properties to object constructor
function person(name,age,education,No) {
  this.name = name;
  this.age=age;
  this.education=education;
  this.No = No;
  ///you canot add new property
  person.height = 6.2
}
person.Prototype.nationality = 'indian'
let personObj1 =new person('shubham',22,'BCA',345678)
console.log(result1.nationality)
let personObj2 =new person('shubham',22,'BCA',345678)
let personObj3=new person('akash',23,'BCs',145678)
console.log(personObj1)
console.log(personObj2)


// Object Methods
const obj1 = {
    name :"shubham",
    age :22,
    education : "BCA",
    NO : 234567,
}
const obj2 = {
    name :"ajay",
    age :23,
  
}
//Object,assign is used to copy properties from one or more objects to target object
let result1 = Object.assign(obj1,obj2)
console.log(result1)
//object.entries is used to Returns array in key value paire
let result2 = Object.entries(obj1)
console.log(result2)

// convert object to map 
const myMap = new Map(Object.entries(obj1));
console.log(myMap)

//Obect.entries in loops
let texts = ''
for(let [key,value] of Object.entries(obj1)){
  texts = texts +  ": "+ key +":"+value
  console.log(texts)
}



// Object in for in loop 
let text = ''
for (let [item] in obj1) {
  text = text + obj1[item]
   
}
console.log(text )


// add or change properties
Object.defineProperty(obj1, "year", {value:"2008"});
console.log(obj1)



// Object Getter and Setter

// Getter
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "Ma",

    get lang() {
      return this.language
    }
}
console.log(person.language)


// setter
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "Ma",
    set lang(lang) {
      // this.language = lang
        this.language = lang.toUpperCase()
    }
}
// //Set an object property using a setter:
person.lang = 'en'
console.log(person.language)



// Seal() and Freeze()
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "Ma",
}
Object.seal(person)
delete person.language
console.log(person)
console.log( Object.isSealed(person))

Object.freeze(person)
person.language = 'san'

console.log(person)



const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);
person.push("Kiwi");
console.log(fruits)
console.log(Object.isFrozen())






























