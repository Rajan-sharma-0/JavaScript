// Make a function of sorting

function sorting(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// console.log(sorting([10, 2, 12, 16, 6]))

/////// Factors of Number   ////////



function factor(a) {
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n%i == 0){
        process.stdout.write(i + " ")
        if(n/i != i){
            process.stdout.write(n/i + " ")
        }
    }
  }
}

let n = 100
// factor(n)


// Prime number between 1 to n


for(let i = 2; i <= Math.floor(num/2); i++ ){
  if( num % i ==0){
    
  }
}
