let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArr.push(11);
myArr.push(39);
myArr.pop();
myArr.unshift(99999);
myArr.shift();
myArr.shift();

// console.log(myArr);


let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myn1 = myArr2.slice(1, 3)
console.log(myn1);

const myn2 = myArr2.splice(1, 3)
console.log(myn2);




// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// => Array in a non-primitive data types. 
// => It is used to store nultiple items under a single varible. 
// =>  slice() does not manupulate main array.
// => splice() manupulate original array.
