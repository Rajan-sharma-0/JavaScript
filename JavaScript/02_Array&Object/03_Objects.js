// Singleton  // Singleton is a design pattern where you have only one instance of a class in your application.

// Object.create()     // Object.create() is a method that creates a new object, using an existing object as the prototype of the newly created object. it create singletons objects.


// object literal

const mysym = Symbol('key1')

 const jsuser ={
        name: 'Rajan',
        "full_name": "Rajan kumar sharma",
        age: 22,
        [mysym]: 'symbol1',
        email: 'nk800109@gmail.com',
        isActive: false
 }

 //  console.log( jsuser)
//  console.log((jsuser.email));
//  console.log(jsuser["email"])
//  console.log(jsuser.full_name )

//  console.log(typeof jsuser[mysym])


 jsuser.email = "rajankumar@gmail.com"  // This is how we can change the value of an object
//  console.log(jsuser)


// syntex = "object.freeze(object_name)"   // freeze = After this no changes will perform
Object.freeze(jsuser)
jsuser.email = "Nishant@micro.com"



