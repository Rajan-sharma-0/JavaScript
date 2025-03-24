var c = 12

let a = 300

if (true){
    let a = 23
    const b = 34
    // var c = 12
    // console.log('Inner: ', a );
    
}

// console.log(a);
// console.log(b);  // This will give you error
// console.log(c);  // This will give you error



function one(){
    const username = "rajan"

    function two(){
        const gamename = "clash of clan"
        console.log(username);
        
    }
    two()
}
// one()



if(true){
    const username = "Rajan"

    if(username === "Rajan"){
        const website = " google.com"
        // console.log(username + website);
        
    }

}



//////////////////////////////////////// Interestiog /////////////////////////////////////////////


function addone (num){
    return num + 1 
}

console.log(addone(3));

addone(5)


const addtwo = function(num){
    return num + 2
}

addtwo(5)



