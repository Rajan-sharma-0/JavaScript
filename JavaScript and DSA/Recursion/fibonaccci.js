
function fibonacci(n, first, second){
    if(n==0) return;
    let third = first + second;
    process.stdout.write(third + '')
    fibonacci(n-1, second, third)
}

