function name() {
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("A");
  console.log("N");
}

// name()

// function addTwoNumber( number1, number2){
//         console.log(number1 + number2);

// }

function addTwoNumber(number1, number2) {
  // let result = (number1 + number2);
  // return result
  return number1 + number2;
}

const num = addTwoNumber(4, 1);
// console.log("Rasult: ",num);

function userislogedin(name) {
  // if(name === undefined){
  if (!name) {
    console.log("user name is not defined");
    return;
  }
  return `Hello ${name}, How can I help you`;
}

// userislogedin("rajan")               // In this case the function is execute but it will not return any value on console
// console.log(userislogedin());   // Now function will show on screen

function calculation(num1, num2, ...num) {
  return num;
}

// console.log(calculation(20, 30, 40, 50));

const user = {
  username: "Rajan",
  fruit: "mango",
  price: 200,
};

function handleObject(anyobject) {
  console.log(
    `Hello my name is ${anyobject.username} and the ${anyobject.fruit} price is ${anyobject.price} `
  );
}

// handleObject(user)
// handleObject({
//     username: "nishant",
//     fruit: 'apple',
//     price: 120
// })

const mynewArray = [100, 200, 300, 400];

function returnArray(getArray) {
  return getArray[2];
}

console.log(returnArray(mynewArray));
