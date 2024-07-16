// const temp=50;
// if(temp<=50){
//     console.log("Temperature is less or 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// Comparison opearator
// <,>,<=,>= etc


// const power=20;
// if(power<=20){
//     const fly=5;
//     console.log(`User power:${power}`);
//     console.log(`User fly:${fly}`);
// }

// we can also write without braces but it is not a good practice 
// const balance=500
// if(balance<=500) console.log("Balance is less than 500"), console.log("Balance is greater than 500")


// Nested if else 
// const bal=500
// if(bal<=500){
//     console.log("Balance is less than 500");
// }else if(bal>500){
//     console.log("Balance is greater than 500");
// }else{
//     console.log("You have zero balance");
// }

// And OR operator 
// if both condition are true and opeartor will print the output
// const userloggedIn=true;
// const admin=true;
// if(userloggedIn && admin){
//     console.log("You can logged in into database ");
// }
// In OR opeartor if one condition are true and opeartor will print the output
// const userloggedIn=false;
// const admin=true;
// if(userloggedIn || admin){
//     console.log("You can logged in into database ");
// }

// Switch Case - In switch case we can check multiple conditions together
// const rate=5;
// switch(rate){
//     case 1:
//         console.log("Rating is One");
//         break;
//     case 2:
//         console.log("Rating is Two");
//         break;
//     case 5:
//         console.log("Rating is five");
//         break;
//     default:
//         console.log("Rating is worst");
// }


// There are some truthy and falsy values 

// Falsy Values are
// false ,0,-0,BigInt,null,undefined,Nan,"",0n
// Truthy values are 
// "0",[],{},function(){}


// Nullish Coalescing Opeartor:(??)- When we work with databse so it will return the values so basically it is used to handle null and undefined values
// let val1=5;
// val1=5 ?? 10
// console.log(val1);
// let val1=15;
// val1=null ?? 15
// console.log(val1);
// let val1=25;
// val1=undefined ??null?? 25
// console.log(val1);


// Ternary Operator 
// Syntax-condition?true:false
const iceTea=500
iceTea>500 ? console.log("Price is greater than 500"):console.log("Price is 500");