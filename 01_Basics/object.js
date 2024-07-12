//singleton-object constructor not from object literals
// object literals {}-is used for object defining
const mySymb=Symbol("key1")
const JsUser={
     name:"vanshu",
     "email":"vanshu@gmail.com",
     [mySymb]:"key1",
     age:18,
     isDay:["Monday","Tuesday"]
}
// access of object-using dot operator
// console.log(JsUser.name);
// access of object-sometime we define the key value pair in form of string we cannot access them using dot operator
// console.log(JsUser["email"]);

// define a symbol and access it throgh the object
// console.log(JsUser[mySymb]);
// console.log(typeof mySymb);

// if we have to modify the value of key pair 

// JsUser.email="vanna@google.com"
// console.log(JsUser.email);

// if we want that after defining no change should be done then we will use freedge
// Object.freeze(JsUser)
// JsUser.name="Sachin";
// console.log(JsUser.name);

// we can also define the functions
// JsUser.greeting=function(){
//     console.log("Hii Js User");
// }
// console.log(JsUser.greeting());

// ===with the help of this we can access the same object

JsUser.greeting2=function(){
    console.log(`Hi Js user ${this.name}`);
}
// console.log(JsUser.greeting2());



// Constructor
// const tinderUser=new Object()
// console.log(tinderUser);


// Another way of defining object
const tinderUser={}
tinderUser.id=1
tinderUser.email="google.com"
// console.log(tinderUser.id);
// console.log(tinderUser.email);
// console.log(tinderUser);


// To print object keys
console.log(Object.keys(tinderUser));
// To print values
console.log(Object.values(tinderUser));
// entries will give array inside array
console.log(Object.entries(tinderUser));
// to check whether has property in object 
console.log(tinderUser.hasOwnProperty("email"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// object inside object
// const myObj={
//     name:"Vanshika",
//     fullname:{
//         userfullname:"garima",
//         useremail:"garima@.com",
//         user:{
//             userid:1,
//             useridname:"gargi"
//         }
//     }
// }
// console.log(myObj.fullname.user.userid);


// Combining object
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3);
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

// ===Combine object using spread operator 
// const obj3={...obj1,...obj2}
// console.log(obj3);






// ====Array of Objects
// const arr3=[
//     {
//         id:1,
//         email:"vanshi@gmail.com"
//     },
//     {
//         id:2,
//         email:"gunjan@gmail.com"
//     }
// ]
// console.log(arr3[0].email);
// console.log(arr3[1]);