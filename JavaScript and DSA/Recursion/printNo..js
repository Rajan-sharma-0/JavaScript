//////// Print natural number from n to 1

function printNnumbers(n) {
  if (n == 0) return;
  console.log(n);
  printNnumbers(n - 1);
}

// printNnumbers(5)

/////// Print natural number from 1 to n

function printNumbers(n){
    if(n == 0) return
    printNumbers(n-1)
    console.log(n);
}

printNumbers(5)
