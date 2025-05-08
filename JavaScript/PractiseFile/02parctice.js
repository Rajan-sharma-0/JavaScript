function isPrime(num){
    if(num <= 1) return false
    if(num === 2) return true
    for(let i = 2; i <num; i++){
        if(num % i === 0) return false;
    }return true;
}

function primeRange(start, end){
    const prime = [];
    for(let i = start; i <= end; i++){
        if(isPrime(i)) 
            prime.push(i)
    }
    return prime
}




// Example usage:
// console.log(countPrimes(10));  // Will count primes up to 10
// console.log(countPrimes(20));  // Will count primes up to 20
// console.log(countPrimes(100)); // Will count primes up to 100

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//FACTORIAL OF A NUMBER  


function factorialRecursive(n) {
    if (n < 0) return "Not defined for negative numbers";
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}


function factorial(num){
    let result = num;
    for(let i = num - 1; i > 0; i--){
        result = result * i;
    }
    return result;
}




// console.log(factorial(3));
// console.log(factorialRecursive(3));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function sumDigits(num) {
    return Math.abs(num).toString().split('').reduce(((sum, digit)=>sum + Number(digit)),0)

}

function sumDigitMath(num){
    let sum = 0
    num = Math.abs()

    while(num > 0){
        sum += num % 10
        num = Math.floor(num/10)
    }
    return sum;
}
// console.log(sumDigits(222));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function toBinary(num) {
    return num.toString(2);
}

function toBinary2(num){
    if(num === 0) return "0"
    let binary = ''
    let number = Math.abs(num)

    while(number > 0){
        binary = (number % 2) + binary;
        number = Math.floor(number / 2)
    }

    return binary
}

console.log(toBinary2(10)); 


