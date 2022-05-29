function message () {
  return "Hello World!";
}

console.log(message());


//Using the allow function
let message2 = () => {
  return "Hello World2!";
}

console.log(message2());

//We dont need curl brackets
let message3 = () => "Hello World3!";

console.log(message3());

//Having a message inside the curl brackets
let message4 = (name) => `Hello ${name}!`;

console.log(message4("John"));