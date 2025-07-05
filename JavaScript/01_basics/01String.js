const name = "Rajan"
const num = 50
// console.log(`Hello ${name} and ${num}`)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.substring(0, 3))
// console.log(name[3])
// console.log(name.length)
// console.log(num.length)// undefined because number has no length property



const gamenaem = new String("   ClashofClans     ")  // This is antoher way to create string
// console.log(gamenaem)
// console.log(gamenaem[4]);


const anothergamenaem = "1234567890"
// console.log(anothergamenaem.slice(0, 5));  // It will print the string from 0 to 4 eXCLUDING 5
// console.log(anothergamenaem.slice(-5));  // It will print the string from last 5 characters

const game = "    ClashofClans    "
// console.log(game);
// console.log(game.trim());  // It will remove the extra spaces from the string and end and start

let string = "hello"
//  const reverse = string.split("").reverse().join("")

//  console.log(reverse);

let arr = [1, 2, 3, 4, 5]
const sum =  arr.reduce((acc, sum)=>{       // Using reduce method
     const a =acc+sum
     return a       
},0)
// console.log(sum);

let cont = 0
for(let i=0; i<arr.length; i++){
     cont = cont + arr[i]
}
// console.log(cont);

arr.forEach((val)=>{
     // console.log(val);
     
})

const reverse = arr.reverse()
// console.log(reverse);









