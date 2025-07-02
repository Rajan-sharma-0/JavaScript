// const instauser = new Object()      ///   This is a singleton Object

const instauser = {}     // Non singleton Object

instauser.name = "Rajan"
instauser.age = 22
instauser.email = "rajan@inaga.com"
instauser.islogin = true

// console.log(instauser);

const Userinfo = {
    email: "nk800109@micro.com",
    FullName:{
        UserFullname:{
            First_Name: "Rajan",
            second_naem: "kumar",
            last_naem: "sharma"
        }
    }

}
// console.log(Userinfo.FullName.UserFullname.second_naem)



const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj4 = {5:'e', 6:'f'}


// const obj3 = {obj1, obj2 , obj4}  // This is wrong syntex
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // This is correct syntex But this is not a good way to merge objects.

const obj3 = {...obj1, ...obj2, ...obj4}      // This is a good way to merge objects.

//  console.log(obj3);


// console.log(instauser);

// console.log(Object.keys(instauser));     // It will return an array of keys.
// console.log(Object.values(instauser));   // It will return an array of values. 
// console.log(Object.entries(instauser));  // It will return an array of arrays.
// console.log(instauser.hasOwnProperty('age'));



const course = {
    name: "Javascript",
    duration: "3 months",
    mentor: "Rajan",
    price: 2000
}

// console.log(course.price);
// const price = course.price
// console.log(price);

//// Object destructuring with property renaming
//// const {mentor: w} = course
//// This syntax means:
//// 1. Take the 'mentor' property from the 'course' object
// //2. Create a new variable 'w' and assign it the value of 'mentor'
//// 3. Now 'w' contains "Rajan" (the value of course.mentor)
//// This is useful when you want to extract a property with a different variable name

const {mentor: w} = course
// console.log(mentor);
// console.log(w);




