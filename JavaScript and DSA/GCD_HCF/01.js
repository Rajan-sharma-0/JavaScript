function GCD(a, b){
    if(a == b ) return a;
    if(a > b) return GCD( a-b, b)
    else return GCD(a , b-a)
}

 a = 32, b = 20
console.log(GCD(a, b));
