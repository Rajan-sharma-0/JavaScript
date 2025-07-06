// var sum = Number(prompt("Enter the number: "))
let sum = 5

if (sum === null) {
    console.log("Enter the value");
}else if(sum <=0){
    console.log("enter the number grater the 0");
}else if(sum >0){
    let n = 0
    for (let i = 0; i <= sum; i++) {
        n += i
    }
    console.log(n);   
}else{
    console.log("enter the valid number");
    
}