var globalVar = "I am Global";

function outerFunction() {
  var outerVar = "I am Outer";

  function innerFunction() {
    console.log(globalVar);  // Guess the O/P
    console.log(outerVar);   // Guess the O/P
  }

  innerFunction();
}

outerFunction();
