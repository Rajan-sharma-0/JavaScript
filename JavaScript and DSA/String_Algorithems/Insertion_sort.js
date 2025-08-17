let arr = [10, 2, 12, 16, 6]
let n = arr.length

for(let i=1; i<n; i++){
    let key = arr[i]
    let j = i
    while(j>=0 && arr[j]> key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key
}
console.log(arr);
