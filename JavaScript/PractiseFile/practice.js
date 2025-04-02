

// print a prime number between 1 to 100

for (let i = 1; i <= 100; i++){
    let isPrime = true;
    for (let j = 2; j < i; j++){
        if (i % j === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime && i > 1){
        console.log(i);
    }
}

// another method of print prime number between 1 to 100
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// add a two arryas
const array1 = [1, 2, 3, 4, 5]; 
const array2 = [6, 7, 8, 9, 10];
const array3 = [];

for (let i = 0 ; i < array1.length; i++){
    array3.push(array1[i] + array2[i]);
}