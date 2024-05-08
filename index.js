
const alertMessage = alert("Welcome to js ")
 let confirmMessage = confirm("are you sure ")
  let role =prompt("Enter Your  Role :")



// String methods  -----------------------

const names= "JAvascript Tutorial"
const msg = "    welcome to js    "
const TrimEx = msg.trim()
console.log(TrimEx);
const startTrim = msg.trimStart()
console.log(startTrim);
const EndTrim = msg.trimEnd()
console.log(EndTrim);
let includesEx = msg.includes('welcome')
console.log(includesEx);
let indexofEx = msg.indexOf('come')
console.log(indexofEx);
let replaceEx = msg.replace('js','Programing languages ')
console.log(replaceEx);
let replaceAEx1 = msg.replaceAll('e','E')
console.log(replaceAEx1);
 let concatEx = msg.concat(names)
 console.log(concatEx);
let concatWithQuote = msg+"."+names
console.log(concatWithQuote);


const number1 = '1234'
// trick 1
 const padstartExample = '***********'+ number1
 console.log(padstartExample);
//  trick 2
const padstartExample1 = number1.padStart(12,'*')
console.log(padstartExample1);

 const padendExample = msg.padEnd(12,'*')
 console.log(padendExample);

 const charAtExample = names.charAt(0)
 console.log(charAtExample);
 
 const charCodeAtExample = names.charCodeAt(1)
 console.log(charCodeAtExample);

  let splitString = names.split(' ')
  console.log(splitString);
