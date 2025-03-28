const myNum = [1, 2, 3]


// const userNum = myNum.reduce(function (accumulater, curentvalue) { return accumulater + curentvalue},0)

// const userNum =myNum.reduce((acc, curval)=> {return acc + curval},0 )
// console.log(userNum);


const shopingCart = [
    {
        courseName: 'java course',
        price: 500
    },
    {
        courseName: 'DSA course',
        price: 599
    },
    {
        courseName: 'javaScript course',
        price: 600
    },
]


const list = shopingCart.reduce((acc, item)=>{ return acc + item.price},0)
console.log(list);


