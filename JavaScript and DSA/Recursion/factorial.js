

function fact(n){
    if(n ==1) return n;
    return n * fact(n-1);
}

// console.log(fact(5));

let n = 100;

for(let i =1; i<=Math.floor(Math.sqrt(n)); i++){
    if( n%i == 0){
        // console.log(i);
        if(n/i != i){
        // console.log(n/i);
        }
    }
}


for(let i =1; i<=Math.floor(Math.sqrt(n)); i++){
    if( n%i == 0){
        // console.log(i);
        process.stdout.write(i + ' ')   /// This Line of code is only for to continue in a same line ///
    }
}

for(let i= Math.floor(Math.sqrt(n)); i >= 1; i--){
    if(n%i == 0){
        if(n/i != i){
        // console.log(n/i)
        process.stdout.write(n/i + ' ')
        }
    }
}

