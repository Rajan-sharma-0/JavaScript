let arr = [2,4,6,8,32, 78, 34]

let max = arr[0]
for(let i = 1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max);
