// function myName(){
//     console.log("Vanshi Sharma");
// }
// myName()

// function of add two numbers
function addTwoNumbers(number1,number2){
//    let result=number1+number2;
//    return result;
//    it will not print anything after return
//    console.log("Vansha");
// OR
return number1+number2
}
const result=addTwoNumbers(1,2);
// console.log(addTwoNumbers(1,"2"));
// console.log(addTwoNumbers(1,null));
// console.log(addTwoNumbers(1,undefined));
// console.log("Result is",result);


// Login User
function userLoggedIn(username){
    if(!username){
        console.log("Please enter user name ");
    }
    else{
        return (`${username} has logged In`);
    }
    
}

// console.log(userLoggedIn("Vanshika"));
// console.log(userLoggedIn());








// ====Calculate cart price 
// Here ... it is a rest operator-it will return the array
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(5,7,8,9,10));


// function calculateCartPrice(value1,value2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(8,9,10));

// ====Passing object to the function
// const user={
//     userId:1,
//     userName:"Vanshi"
// }
// function takingObject(anyObject){
//     console.log(`Username is ${anyObject.userName} and userid is ${anyObject.userId}`);
// }
// we will pass the object name as argument
// takingObject(user);

// =====We can directly pass object to the function==========
// takingObject({
//     userName:"Sam",
//     userId:5
// })

// ============Passing Array to the function
const arr=[5,6,7,8,9]
function takingArray(getArray){
          return getArray[0]
}
// we will pass array name as a argument
// console.log(takingArray(arr));
console.log(takingArray([200,400,600,800]));
