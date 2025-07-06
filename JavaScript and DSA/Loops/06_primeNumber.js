// let num = Number(prompt("Enter the numbaer"))
let num = 12;
// 
if (num === null) {
    console.log("Enter the value");
}else if(num <=0){
    console.log("enter the number grater the 0");
}else if(num >0){
    var Prime = true;
    for(var i = 2; i <= Math.floor(num/2); i++){
        if(num%i ===0){
            Prime = false
            break;
        }
        
    }  
    // console.log(Prime);
    if(Prime == true){
        console.log("Is a prime");
        
    }else{
        console.log("Is not a prime number");
        
    }
}else{
    console.log("enter the valid number");
    
}