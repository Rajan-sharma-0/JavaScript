const marval_heroes = ['thor', 'irton man', 'captain america', 'hulk'];
const dc_heroes = ['superman', 'batman', 'flash'];

// marval_heroes.push(dc_heroes);
// console.log(marval_heroes);

// const all_heroes = marval_heroes.concat(dc_heroes);
// console.log(all_heroes);


// Insted of using concat() we can use spread operator.  // Concat() is used to merge two arrays.

const all_New_heroes = [...marval_heroes, ...dc_heroes];          // ... is a spread operator.
// console.log(all_New_heroes);  


const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, [9,10,11, [12,13,14, [15, 16, 17, 18]]]]

const realArray = anotherArray.flat(Infinity)
// console.log(realArray);


// console.log(Array.isArray("Rajan"))
// console.log(Array.from("Rajan"))
// console.log(Array.from({name :"Rajan"}))


let score = 100
let score2 = 200
let score3 = 300

// console.log(  Array.of(score, score2, score3))




const myObject = {  
   per1: {
        name: "Rajan",
        age: 22
    },
   per2: {
        name: "Rahul",
        age: 23
    },
   per3: {
        name: "Rohit",
        age: 24
    },
}

// console.log(myObject);
// console.log(Object.values(myObject).map((e)=> e.name));  // It will return an array of names.
// console.log(Object.keys(myObject))
const myarr = Object.entries(myObject)
// console.log(myarr);

console.log(Object.values(myObject).map((e)=> e.age));


let arr = [1,2,3,4,5,6]
let arr2 = [7,8,9,10]

// How to add two array 
// console.log(arr.concat(arr2))   // 1st method 
// console.log(...arr,...arr2)        // 2nd method

// console.log(arryreduce(arr))


  


