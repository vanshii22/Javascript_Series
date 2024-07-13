// function one(){
//     const username="Akhil"
//     function two(){
//         const website="youtube.com"
//         console.log(username);
//     }
    // console.log(website);
//     two()
// }
// one()


// if(true){
//     const username="Vansh"
//     if(username==="Vansh"){
//         const website=" youtube"
//         console.log(username + website);
//     }
    // console.log(website);
// }
// console.log(username);

// +++++++++++++++Interesting+++++++++++++++++
// we can call function before defining it 
// console.log(one(5));
// function one(num){
//    return num+1;
// }


// Here we are defining the function and hold it in a variable so we cannot access it before initialization

const user=function two(num){
 return num+2
}
console.log(user(5));

