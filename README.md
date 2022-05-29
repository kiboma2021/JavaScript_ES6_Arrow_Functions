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