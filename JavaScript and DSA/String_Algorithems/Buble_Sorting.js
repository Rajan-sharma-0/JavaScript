let arr = [10, 5, 8, 3, 2, 12, 16]
let n = arr.length;

for(let i = 0; i<n-1; i++ ){
    for(let j = 0; j< n-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr);
