const promiseone = new Promise(function(resolve, reject) {
    // Do an async task
    // DB Calls, cryptography, network calls, etc.
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    }, 1000)
})

promiseone.then(function(){
    console.log('Promise resolved');
})


new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task 2 ');
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolve");
})

const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'gopal', email: 'example@.com'})
    }, 1000)
    
})
promisThree.then(function(user){
    console.log(user);
})


const promisfour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'gopal', email: 'example@.com'})
        }else{
            reject('ERROR: Somethin went wrong')
        }
    }, 1000)
})


 promisfour.then((user)=>{
    console.log(user);
    return user.username
    
 }).then((usernamne)=>{
console.log(usernamne);

 }).catch(function(Error){
    console.log(Error);
    
 }).finally((Error)=>{
console.log('the promise is either resolved or rejected')
 })


 const promisFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javaScript', password: 'example@.com'})
        }else{
            reject('ERROR: Somethin is wrong')
        }
    }, 1000)
 })
 
 async function consumePromiseFive(){
    try{
        const response = await promisFive
    console.log(response);
    }catch(Error){
        console.log(Error);
        
    }
 }
 consumePromiseFive()


//  async function getAllUsers(){
//     try {
//         const response = await fetch( )
//     const data = await  response.json()
//     console.log(data);
//     } catch (Error) {
//         console.log(Error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/Rajan-sharma-0')
.then((response) => {    
    return response.json()
})
.then((data) =>{
    console.log(data.url);
    
})
.catch((error) =>{
    return console.log(error);
    
})



