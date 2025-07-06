// let num = Number(prompt("Enter the numbaer"))
let num = 3;

if (num === null) {
    console.log("Enter the value");
}else if(num <=0){
    console.log("enter the number grater the 0");
}else if(num >0){
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    console.log(fact);   
}else{
    console.log("enter the valid number");
    
}