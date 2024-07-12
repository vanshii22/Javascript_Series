const myArray=[1,3,4,5,6]
// console.log(myArray);
// ====Array in js can contain different type of data and it will do the changes in shallow copy not in deep copy
// =======shallow copy is similiar to heap memory and deep is similar to stack memory
// const myArr2=["Arjun","Vishal"];
// console.log(myArr2);
// create a object of array

// const objArr=new Array(1,2,3,4)
// console.log(objArr);
// console.log(myArray[0]);


// Methods of Array
//======= push will insert the value at end
// myArray.push(10)
// console.log(myArray);
//======== pop will delete the value from the last
// myArray.pop()
// console.log(myArray);
// ========unshift will insert the value at first place and shift all the values 
// myArray.unshift(9)
// console.log(myArray);
//======== shift will delete the value from first place 
// myArray.shift()
// console.log(myArray);
// ========include is used to check the value whether array contain the value or not 
// console.log(myArray.includes(9));
// console.log(myArray.includes(1));
// ======indexof is used to check the index of value
// console.log(myArray.indexOf(3));
// ========join is used to convert array into string 
// let newArray=myArray.join()
// console.log(newArray);
// console.log(typeof newArray);



// slice will slice the value of array it will include first value and exclude last value 

// const m1=myArray.slice(1,3)
// console.log(m1);

// splice will modify the original array and remove the part of array 
// const m2=myArray.splice(0,2)
// console.log("A",myArray);
// console.log(m2);
// console.log("B",myArray);


const arr1=[3,5,6,7]
// console.log(arr1);
const arr2=["1","2"]
// console.log(arr2);
// =========it will push the second array into one but do not spread the values
// arr1.push(arr2)
// console.log(arr1);

// ========Concateneate-it will join two arrays
// const arr3=arr1.concat(arr2)
// console.log(arr3);

// ========spread operator wil spread the values of an array
// const arr4=[...arr1,...arr2]
// console.log(arr4);

const anotherArr=[5,6,7,8,[1,2],3,[4,[5,6]]]
// console.log(anotherArr);
// ==========Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const realArray=anotherArr.flat(Infinity)
// console.log(realArray);


// ========isArray is used to ask 

// console.log(Array.isArray("Vanshu"));
// ===from is used to  convert it into array
// console.log(Array.from("Vanshu"));
// console.log(Array.from({name:"Sachin"})); -it will return empty array because we do not define we want array of key or value

// convert variable to array
let score1=100
let score2=200
let score3=300
// ===of Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3));