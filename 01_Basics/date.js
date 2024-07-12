let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
//========== the type of date is always be an object=========================
// console.log(typeof myDate);
// =====if we have single digit in ,month it will start from 0==============
let createdDate=new Date(2024,7,12,5,3);
// let createdDate=new Date("2024-07-12");
// let createdDate=new Date("07-12-2024");
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

// it will give from 1 jan 1970 
let mytimestamp= Date.now();
console.log(mytimestamp);

// console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));
