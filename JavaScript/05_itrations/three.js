// for of  

//[ '', '', '', '',]
// [ {}, {}, {}, {},]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    //  console.log(num);
     
}

const fruits = 'Hello world'
for(const f of fruits){
    // console.log(`The available fruits is ${f}`);
    
}


//################### Map ###########################

// Map are not itratiable

const map = new Map()
map.set('1', 'India')
map.set('2', 'france')
map.set('3', 'germany')

// console.log(map);


for(const [key, value] of map){
    // console.log(`${key} :- ${value}`);
    
}


const myobject ={
    '1': 'Rajan',
    '2': 'Nishant',
}

// for(const [key, value] of myobject){
//     console.log(key, ':-' , value);                     // This is not iterable 
    
// }