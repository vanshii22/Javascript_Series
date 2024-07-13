//IIFE-Immediately Invoked Function Expression is used to prevent from public pollution i.e. to prevent from global variables 

(function chai(){
// named iife
    console.log("DB is Connected");
})();

// (()=>{
//     console.log("DB2 is connected");
// })()
((name)=>{
    console.log(`Username is ${name}`);
})("Kittu")




