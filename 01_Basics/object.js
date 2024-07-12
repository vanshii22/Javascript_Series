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
console.log(JsUser.name);
// access of object-sometime we define the key value pair in form of string we cannot access them using dot operator
console.log(JsUser["email"]);

// define a symbol and access it throgh the object
console.log(JsUser[mySymb]);
console.log(typeof mySymb);

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
console.log(JsUser.greeting2());