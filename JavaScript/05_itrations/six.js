// const coding = ['java', 'c++', 'python', 'javascript']

// const variable =coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })

// console.log(variable);




const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(typeof mynum);


// const newNum =mynum.filter( (num) => { return num > 4 })
// console.log(newNum);

const newNum = []

mynum.forEach( (item) => {
    if(item > 4){ 
        newNum.push(item)
        // console.log(typeof item);
        
    }
}) 
// console.log(typeof newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let newBook = books.filter( (item) => {return item.genre == 'History'})

  newBook = books.filter( (item)=>{ const bk =item.edition > 1995 && item.genre == "History"
    return bk
  })
console.log(newBook);





