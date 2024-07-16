//for of loop
// const myArr=[1,2,3,4,5,6]
// for (const num of myArr) {
//     console.log(num);
// }

// const greetings="Hello World"
// for(const greet of greetings){
//     if(greet==" "){
//         continue;
//     }
//     console.log(greet);
// }



// for of loop is not iterable for object
// const myObj={
//     name:"Vanshi",
//     id:5
// }
// for (const key of myObj) {
//     console.log(myObj[key]);
// }


// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States Of America")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key , value);
// }

// const language={
//     js:"javascript",
//     cpp:"C++",
//     py:"python"
// }
// for (const key in language) {
//     // console.log(key);
//     console.log(`The key is ${key} and value is ${language[key]}`);
// }

// const programming=["js",'cpp','py']
// for (const key in programming) {
//     console.log(programming[key]);
// }



// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States Of America")
// console.log(map);

// for (const key in map) {
//     console.log(key);
// }



// Important- For of is used for array and For in is used for object

// const coding=["js","ruby","python","c"]
// coding.forEach(function (item){
//       console.log(item);
// })
// Arrow function
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//   console.log(item);
// }
// coding.forEach(printMe);
// coding.forEach((item,index,arr)=>{
//       console.log(`The item is ${item} and index is ${index} and arr is ${arr}`);
// })


const myCoding=[
    {
        language:"javascript",
        languagename:'js'
    },
    {

    },
    {

    }
]
myCoding.forEach((item)=>{
    console.log(item.languagename);
})