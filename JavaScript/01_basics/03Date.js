let myDate = new Date();
// console.log(myDate);                            // Output: 2021-07-07T06:00:00.000Z
// console.log(myDate.toLocaleString());           // Output: 7/7/2021, 11:30:00 AM
// console.log(myDate.toDateString());             // Output: Wed Jul 07 2021
// console.log(myDate.toTimeString());             // Output: 11:30:00 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());       // Output: 7/7/2021
// console.log(myDate.toLocaleTimeString());       // Output: 11:30:00 AM
// console.log(myDate.toUTCString());              // Output: Wed, 07 Jul 2021 06:00:00 GMT
// console.log(myDate.toISOString());              // Output: 2021-07-07T06:00:00.000Z
// console.log(myDate.toJSON());                   // Output: 2021-07-07T06:00:00.000Z
// console.log(typeof myDate);                      // Output: object


let myCreatedDate = new Date(2023, 0, 23 )
// console.log(myCreatedDate.toDateString());

let yymmdd = new Date("2023-01-23");
// console.log(yymmdd.toDateString());

let myTimeStemp =  Date.now();
// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate()); 




