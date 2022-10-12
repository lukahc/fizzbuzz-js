const prompt = require("prompt-sync")();

// Here, we create our main function.
function fizzbuzz() {
    console.log("Welcome to FizzBuzz!");
    const maxNum = Number(prompt("Please enter maximum number: ")) + 1;
    const rules = rulesQuery();
    loopValues(maxNum, rules);
}

function rulesQuery() {
    let rules = {
        Fizz: 3,
        Buzz: 5,
        Bang: 7,
        Bong: 11,
        Fezz: 13,
        Reverse: 17,
    };
    while (true) {
        const custom = prompt(
            "Would you like to use custom rules? (Y/N) "
        ).toUpperCase();
        if (custom == "Y") {
            rules = customRules(rules);
            break;
        } else if (custom == "N") {
            break;
        } else {
            console.log("Invalid input");
        }
    }
    return rules;
}

function customRules(rules) {
    for (let j in rules) {
        rules[j] = Number(prompt("Enter number for " + j + ": "));
    }
    return rules;
}

function loopValues(maxNum, rules) {
    for (let i = 1; i < maxNum; i++) {
        let outputArray = [];
        let ruleNum = 0;
        for (let j in rules) {
            if (i % rules[j] == 0) {
                if (ruleNum == 3) {
                    outputArray = ["Bong"];
                } else if (ruleNum == 4) {
                    outputArray.push("Fezz");
                    for (let k in outputArray) {
                        if (outputArray[k].startsWith("B")) {
                            outputArray.pop();
                            outputArray.splice(k, 0, "Fezz");
                            break;
                        }
                    }
                } else if (ruleNum == 5) {
                    outputArray = outputArray.reverse();
                } else {
                    outputArray.push(j);
                }
            }
            ruleNum += 1;
        }
        output(outputArray, i);
    }
}

function output(outputArray, currentNum) {
    if (outputArray.length == 0) {
        console.log(currentNum);
    } else {
        const outputString = outputArray.join("");
        console.log(outputString);
    }
}

// Now we run the main function...
fizzbuzz();
