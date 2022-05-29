# JavaScript_ES6_Arrow_Functions
    function message () {
      return "Hello World!";
    }

    console.log(message());

To turn this to an arrow function we have to assign it a variable

    let message2 = () => {
      return "Hello World2!";
    }

    console.log(message2());

We can get lid of curl brackets

    let message3 = () => "Hello World3!";

    console.log(message3());

We can have a message inside the curl brackets
    let message4 = (name) => `Hello ${name}!`;

    console.log(message4("John"));

Since it is one value, we dont have to enclose the value within the brackets
    let message5 = name => `Hello ${name}!`;

    console.log(message5("John"));

We have to have brackets when passing two arguments
    let message6 = (name1,name2) => `${name1} and ${name2}`;

    console.log(message6("John","Ben"));    