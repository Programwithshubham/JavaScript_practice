console.log(Math.floor(23.2));//23
console.log(Math.ceil(23.2));//24
console.log(34 ** 2); //1156
console.log(Math.pow(2,6));//64
console.log(Math.round(3442.2));//3442
console.log(Math.round(3442.6));//3443
console.log(Math.random());//0.7136114441368251


console.log(Math.floor(Math.random()*20));//16
console.log(7/0);//infinity
console.log(-7/0);//-infinity
console.log(typeof Infinity);//number
console.log(0/0);//NaN

// Input from user 

 let width =prompt("Enter Number  and Rectangle and width:")
 let height =prompt("Enter Number  and Rectangle and Height:")
 
document.write(`Rectangle Height and width  : ${ width * height}`);