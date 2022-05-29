function message () {
  return "Hello World!";
}

console.log(message());

//Arrow function

let message2 = () => {
  return "Hello world 2!"
}
console.log(message2());

//Arrow function without curl brackets
let message3 = () => "Hello world 3!"
console.log(message3());

//Arrow function with one argument
let message4 = (name) => `Hello ${name}`
console.log(message4("John"));

//Arrow function with one argument remove brackets
let message5 = name => `Hello ${name}`
console.log(message5("John Mwai"));

//Arrow function with two arguments
let message6 = (name1,name2) => `${name1} and ${name2}`
console.log(message6("John Mwai","Brian Kiplimo"));