let arr = [10, 23, 45,21, 67,89, 16]

// For Largest Number
let max = arr[0]
for(let i = 1; i< arr.length; i++){
     if(max < arr[i]){
        max = arr[i]
     }
}
console.log(max);


// For Smallest Number
let min = arr[0]
for(let i = 1; i< arr.length; i++){
     if(min > arr[i]){
        min = arr[i]
     }
}
console.log(min);
