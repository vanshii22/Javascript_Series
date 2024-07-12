// stack is used by Primitive data types and heap is used by reference or non-primitive data types

// stack will make copy and the changes are done in the copy and heap do not make copy so the changes will show in original file 
// Primitive Example of stack memory
let userOne="Vanshika Sharma ";
console.log(userOne);

let userTwo=userOne;
userTwo="Vishal"
console.log(userTwo);


// Non primitiv example of heap

const myObj={
    email:"vanshi@gmail.com"
}
console.log(myObj);

const yourObj=myObj;
yourObj.email="vishal@gmail.com"
console.log(yourObj);




