// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number of rows: ");
let n =5

for (let i = 1; i <= n; i++) {
    let row = "";
    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}