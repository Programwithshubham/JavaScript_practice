/* -------------------------------------------- Function , Scope ,Hoisting, strict Mode */
// function declaration
// function myFunction(){
// }



//  function expression  this function is anonymous function
// const demoFun = function (a,b){
//     return a*b
// }
// console.log(demoFun(243,4));




// using function constructor
// const multi =new  Function("a","b" , "return a*b")
// let myFunction1 = new Function("a", "b", "return a * b");



// hoisting
// console.log(demoFun1(243,4));
// const demoFun1 = function (a,b){
//     return a*b

// }



// self invoked function 
// (function(a,b){
//     return a + b;
// })
// ();


// js function can used as expression 
// const demoFun2 = function (a,b){
//     return a*b

// }
// console.log(demoFun2(243,4)*2);



// return number of arguments 
// const demoFun3 = function (a,b ,c){
//     return arguments.length

// }
// console.log(demoFun3(12,44,23));


// function myDemoFunction(a,b){
//     return a * b;
// }
// let abc = myDemoFunction().toString()


// --------------------arrow function :- arrow function they do not have own 'this' 

// const arrowFun=(a,b)=>{return a *b }
  

// const obj = {
//     username : "shubham",
//     price : 999,
//     welcomeMessage : function (){
//        console.log(`${this.username }, welcome to arrow Function `);
//     //    console.log(this);
//     }
// }
// obj.welcomeMessage()
// obj.username = "rahul"
// obj.welcomeMessage()
// console.log(this);



// function one(){
//     let username = "shubham"
//     console.log(this.username);
//     console.log(this);
// }
// let obj1 =one()



// const chai = ()=>{
//     let username = "shubham"
//     // console.log(this.username);
//     console.log(this);//{}
// }
// chai()




//                    arrow function
//    const addTwo=(num1,num2)=>{
//         return num1 + num2
//    }
//    console.log(addTwo(22,12));



//                       implicit return 
//    const addTwo=(num1,num2)=>  num1 + num2
//    console.log(addTwo(22,12));



//             if you want not use return then add () in expression
// const addTwo=(num1,num2)=>  (num1 + num2)



//  if you return Object 
// const obj2 = (n1,n2)=> ({username :"rahul"})



// const myArr1 = [23,221,3,1,21]
// myArr1.forEach((e)=>{
    //  console.log(e);
// })


// --------------------------------
//   IIFE - imedietly invloked funtion Expression  : Used :- for Database Connection if start website database connection will start , in sometime global scope variable are polluted . then remove pollution of global variable   
// (function chai(){
//     // named IIFE
//     console.log("Database Connection");  
// })();
// semicolon is mandatory

// ((name)=>{
    // unnamed IIFE
//     console.log(`Database Connection 2  and  Name Is ${name}`); 
// })("ajay");




// ------------------------ 

// function addTwoNumbers(){
//     // console.log("hello")
// }
// let demo = addTwoNumbers()
// console.log(demo);//undefined


// function addTwoNumbers1(a,b){
//     return  a * b
// }
// let demo1 = addTwoNumbers1(1,31)
// console.log(demo1);


//  check user Enter username or not 

// function loginUser(username){
//     if(username == undefined){
//         console.log("please enter username ");
//         return 
//     }
//     return `${username} just logged in `
// }
//  const varRef = loginUser()
//  console.log(varRef);s


 
// function loginUser1(username="mno"){
//     if(username == undefined){
//         console.log("please enter username ");
//         return 
//     }
//     return `${username} just logged in `
// }
//  const varRef1 = loginUser("abc")
//  console.log(varRef1);



// --------------------------------Rest Operator

//  const calculateCartPrice=(var1,var2,...num1)=>{
//           return num1
//  }
//  console.log(calculateCartPrice(200,300,200,100));



//--------------------------- pass value into function

//  const user= {
//    username: " abc",
//    price : 39,
//  }

//  function handleObj(anyObj){
//      console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`);


//      for (const key in anyObj) {
//         console.log(key+ ": "+ anyObj[key]);
        
//      }
//  }
//  handleObj(user)// pass object inside method call 
// handleObj({
//     username: " john d",
//     price : 33,
// })


// ----------------------------------------- array pass to function  
// const myArr = [233,432,543,234,653,231]
// function returnArrayValue(getarr){
//     return getarr
// }
// console.log(returnArrayValue(myArr));
// console.log(returnArrayValue([543,234,653,231,233,432]));






// -----------------------------Scope -------------------------------
/*
1.function scope 
2.local scope 
3.global scope 
4.lexical scope

*/
// ----------------------------------local scope  and  global scope 

// var c=23;// global scope
// let a = 45;
// function scope(){
//     let a =20;//block scope 
//     const b = 23;//block scope
//     // var c= 543;
//     // console.log(a); //20
//     // console.log(b); //23
//     // console.log(c); //543
//     // console.log("---------------");
// }
// scope()

// console.log(a);// error a is not defined 
// console.log(b);// error b is not defined 
// console.log(c);//23

//------------------nested Scope
// child function access the properties of own and parent but parent function not access properties of child 
// function one(){
//     const username = "hitesh"
//     const password = "js123"
//     function two(){
//         const websites = "linkdin"
//         console.log(username);
//         console.log(password);
//     }
//     console.log(websites);
//     two()
// }
// one()




// if(true){
//     const user = "abc "
//     if(user == "abc "){
//         const website = " linkdin"
//         console.log(user + website);
//     }
//     console.log(website);//error
// }
// console.log(user);//error
// -----------------------------Hoisting 

// console.log(x);error
// let x=10;

// console.log(y);
// const  y=10;

// console.log(z);
// var z=10;


// Oneval()
// console.log(Oneval(21));//executed
// function Oneval(num){
//     return num + 1
// }


// twoVal()//error
// console.log(Oneval());
// const twoVal = (num)=>{
//     return num + 2
// }


// threeVal(21)//error
// console.log(threeVal(21));//error
// const threeVal = (num)=>{
//     return num + 2
// }
// --------------------Strict mode

// "use strict";
// x=10;
// console.log(x);

// 

















