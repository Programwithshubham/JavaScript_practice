//                                                                               Object 
// const user = {  firstName : 'shubham', lastName: "Dhobe", age : 22 ,    education : 'graduation', city : 'pune'}
// const user1 = {  firstName : 'Rahul', lastName: "Patil", age : 23 ,    education : 'graduation', city : 'Pune'}
const myName = "shubham"

const username1 = ''
const username2 = ''

const user1 = { 
    firstName : "shubham",
    lastName : "Dhobe"
 }
const user2 = { 
    "firstName" : "Rahul",
    "lastName" : "patil ",
    "your-age" : 22,
     shubham : 'Dev'
 }
//  update or add value
   user2.firstName = "Ajay"
   user2.lastName = "patils"
   user2.education = "BCA"

   user2["is-student"] = true


//  console.log(user2.firstName);
//  console.log(user2["firstName"]);
//  console.log(user2["your-age"]);
//  console.log(user2.shubham);
//  console.log(user2["first"+ "Name"]);



const user3 = { 
    firstName : "Rahul",
    lastName : "patil",
    address : {
        city : "pune" ,
        pinCode : 4110128,
        state : 'Maharastra',
        moreDetails : {
            population : 34567898,
            area : 'Hadapsar'

        }
    }
 }



//   delete the value 
// delete user1.lastName

//  change value 
// let username = 'Rahul'
// username = 'akshay '
// console.log(username);

//  console.log(user3.address);
//  console.log(user3.address.city);
//  console.log(user3.address.pinCode);
//  console.log(user3.address.state);
// console.log(user3.address.moreDetails.population);
// console.log(user3.address.moreDetails.area);

//  if you want to value only modify exist in object but  does not delete or new Create    ----------- Object.seal()-----------
// let username3 = 'Rahul'
// Object.seal(username3)
// // you can change values
// username3 = 'Akash'
// console.log(username3); 
// username3


// Object.seal(user3)
// user3.firstName = 'akshay '
// delete user3.lastName


// -------------------------------- Object.freeze() - if you want  user  not change any value , delete and add  then used Object.freeze()
// Object.freeze(user3)
// user3.lastName = "bhosle " 


// ------------------ in()  :- check key is present or not 
// console.log( 'address' in user3);




//  change value 
let username = 'Rahul'
username = 'akshay '
// console.log(username);




