let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArr.push(11);
myArr.push(12);
myArr.pop();
myArr.unshift(99999);
myArr.shift();
myArr.shift();

// console.log(myArr);


let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myn1 = myArr2.slice(1, 3)
// console.log(myn1);

const myn2 = myArr2.splice(1, 3)
// console.log(myn2);




// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// => Array in a non-primitive data types. 
// => It is used to store multiple items under a single varible. 
// =>  slice() does not manupulate main array.
// => splice() manupulate original array.





////////////////////////////////QUESTIONS SECTION ///////////////////////////////////////////////////////////

const arry1 = [10, 25, 5, 8, 30]
// const max = Math.max(...arry1)

// console.log(max);


                // Find the smallest element in an array.
                // Example: [10, 25, 5, 8, 30] → Output: 5

const arry2 = [10, 25, 5, 8, 30]
// const minaryy = Math.min(...arry2)

// console.log(minaryy);


            // Find the sum of all elements in an array.
            // Example: [1, 2, 3, 4, 5] → Output: 15

const arry3 = [1, 2, 3, 4, 5]
const sum = arry3.reduce((acc, num) => (acc + num) , 0)

// console.log(sum);

                // Find the average of elements in an array.
                // Example: [10, 20, 30, 40] → Output: 25

const arry4 = [10, 20, 30, 40]
const avg = arry4.reduce((fir, num) => (fir + num) , 0)/ arry4.length

// console.log(avg);
// console.log(...arry4);



                // Reverse an array without using the reverse() method.
                // Example: [1, 2, 3, 4] → Output: [4, 3, 2, 1]


const arry = [10, 20, 30, 40]

let rev = []
for(let i = arry.length-1; i >= 0 ; i--){
    rev.push(i)
}
console.log(rev);


      
