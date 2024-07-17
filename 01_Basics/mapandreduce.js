const coding=["js","ruby","python"]
// const code=coding.forEach((item)=>{
//     return console.log(item);
// })
// console.log(code); 
//For each do not support return



// Map
// const code=coding.map((item)=>item)
// const code=coding.map((item)=>{
//        return item
// })
// console.log(code);





// filter-Returns the elements of an array that meet the condition specified in a callback function.


// const arr=[2,3,4,5,6,7,8]
// const values=arr.filter((item)=>item>4)
// console.log(values);

// Do it with the help of for each loop
// const myArr=[]
// arr.forEach((item)=>{
//      if(item>4){
//         return myArr.push(item)
//      }
// })
// console.log(myArr);


// Example
// const books=[
//     {
//         language:"js",
//         price:500
//     },
//     {
//         language:"python",
//         price:550
//     },
//     {
//         language:"ruby",
//         price:650  
//     }
// ]

// const userbooks=books.filter((item)=>item.price>=550 && item.language=="ruby")
// console.log(userbooks);


// Map Example
// const myNumbers=[1,2,3,4,5,6,7,8]
// const newNums=myNumbers.map((num)=>num+2)
// console.log(newNums);


// Chain Example
// const numbers=[1,2,3,4,5,6,7,8,9]
// const nums=numbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>10)
// console.log(nums);


// Reduce Function-Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const nums=[1,2,3]
const total=nums.reduce((acc,num)=>acc+num,0)
console.log(total);