const prompt = require('prompt-sync')();
let n = prompt("Enter your number: ")

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + j)+" ";
    }
    console.log(row);
}