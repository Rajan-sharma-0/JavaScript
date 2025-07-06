// let num = Number(prompt("Enter the numbaer"))
let num = 12;

if (num === null) {
    console.log("Enter the value");
}else if(num <=0){
    console.log("enter the number grater the 0");
}

else if(num >0){
    for(let i= 1; i <= Math.floor(num/2); i++){
        console.log(i);
        } 
        console.log(num);
        
}

else{
    console.log("enter the valid number");
    
}