const user={
    username:"Vanshika",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome`);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


// ++++++++++++++++if we are in node so this will refer to the empty object in browser it will refer to the window object+++=
// console.log(this)


// Simple function -if we are using this inside any function it will return global object
// function one(){
//     console.log(this);
// }
// one()









// ++++++++++so we can use this inside object only not in  function 
// function one(){
//     let username="aksha"
//     console.log(this.username);
// }
// one()





// Arrow function
// Inside arrow function it will return empty object or inside simple function it will return global object
// const users=()=>{
//     let user="akshi"
//     console.log(this);
// }
// users()


// Arrow Function examples Or Explicit function is a function which use curly braces and use return keyword
// const sum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(sum(2,3));



// Implicit Functions
const sum=(num1,num2)=>(num1+num2)
console.log(sum(1,1));



