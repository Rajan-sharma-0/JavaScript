let num = 4145

var sum = 0
var temp = num

while(temp > 0){
    let rem = temp%10
    let fact = 1
    for(let i = 1; i <= rem; i++){
        fact = fact *i
    }
    sum = sum + fact
    temp= Math.floor(temp/10)
}
if(num === sum){
    console.log("string");
}else{
    console.log("not strong");
    
}