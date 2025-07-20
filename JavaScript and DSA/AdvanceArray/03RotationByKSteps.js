let arr = [1, 2, 3, 4, 5];
let k = 2
// Left rotation by k Steps

// for (let j = 1; j <= k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i+1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);



// Right rotation by k Steps

for(let j = 1; j <= k ; j++){

let copyy = arr[arr.length-1]
for(let i = arr.length-1; i>0; i--){
    arr[i] = arr[i-1]
}
arr[0]= copyy

}
console.log(arr)
