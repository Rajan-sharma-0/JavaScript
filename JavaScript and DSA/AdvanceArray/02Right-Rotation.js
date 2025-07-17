let arr = [1,2,3,4,5]

// Right Rotation by 1


let copyy = arr[arr.length-1]
for(let i = arr.length-1; i>0; i--){
    arr[i] = arr[i-1]
}
arr[0]= copyy
console.log(arr);
