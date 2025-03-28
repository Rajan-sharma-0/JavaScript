const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mynum = myArray.map((num)=>{return  num + 10})
// console.log(mynum);

// myArray.forEach( (num)=>{ 
//     let n =num +10 
//     console.log(n);
    
// })


const mynum = myArray
                    .map((num)=> num * 10)
                    .map((num)=> num +1)
                    .filter((num)=> num >40)


 console.log(mynum);
