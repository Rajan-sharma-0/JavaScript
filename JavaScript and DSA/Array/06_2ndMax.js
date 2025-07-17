let arr = [10, 23, 45,21, 67,89, 16]

let max = Math.max(arr[0], arr[1])
let Smax = Math.min(arr[0], arr[1])

for(let i = 2; i< arr.length; i++){
    if(arr[i] > max){
        Smax = max
        max = arr[i]
    }else if( arr[i] > Smax && arr[i] !== max ){
        Smax = arr[i]
    }
}

console.log(`The maximum value in a string is ${max} and second max is ${Smax}`)