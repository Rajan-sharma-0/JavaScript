// Print each character on new line

/*

let string = "Bharat"

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

*/


// ==> Print in reverse order

/*
let string = "Computer"
let rev = ''
for(let i = string.length -1; i>=0; i--){
        rev = rev + string[i]
}
console.log(rev);

*/

// ==> Check If given string is plandrom


/*
let s = "madam"
let rev = ''
for (let i = s.length - 1; i >= 0; i--) {
    rev =rev + s[i]
}
if(rev == s) console.log(`${s} is palendrom`);
else console.log(`This is not a palendrom`);

*/
// Optimized version
/*   
let s = "madam"
let isPalendrom = true;
let i = 0, j = s.length -1

while (i < j) {
    if(s[i] != s[j]){
        isPalendrom = false
        break
    }
    i++
    j--
}

if(isPalendrom) console.log("palendrom");
else console.log("not palendrom");

*/

