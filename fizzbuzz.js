// Here, we create our main function.
function fizzbuzz() {
  console.log("Welcome to FizzBuzz!");
  const prompt = require('prompt-sync')();
  const maxNum = Number(prompt("Please enter maximum number: ")) + 1;
  for (let i = 1; i < maxNum; i++) {
    let outputArray = [];
    if (i % 3 == 0) {
      outputArray.push("Fizz");
    }
    if (i % 5 == 0) {
      outputArray.push("Buzz");
    }
    if (i % 7 == 0) {
      outputArray.push("Bang");
    }
    if (i % 11 == 0) {
      outputArray = ["Bong"];
    }
    if (i % 13 == 0) {
      for (let j in outputArray) {
        if (outputArray[j].startsWith("B")) {
          outputArray.splice(j, 0, "Fezz");
          break;
        }
      }
      if (!outputArray.includes("Fezz")) {
        outputArray.push("Fezz");
      }
    }
    if (i % 17 == 0) {
      outputArray = outputArray.reverse();
    }
    if (outputArray.length == 0) {
      console.log(i);
    } else {
      const outputString = outputArray.join("");
      console.log(outputString);
    }
  }
}

// Now we run the main function...
fizzbuzz();
