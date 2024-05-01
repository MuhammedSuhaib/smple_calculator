#!/usr/bin/env node
// Above line is called "shebang": SHE is used for hash (#) and BANG is used for an exclamation mark(!)
import inquirer from "inquirer";
async function main() {
    const answer = await inquirer.prompt([
        { message: "Enter First number", type: "number", name: "firstNumber" },
        { message: "Enter Second number", type: "number", name: "secondNumber" },
        {
            message: "Select One of the operator to perform operation",
            type: "list",
            name: "Operator",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Module",
            ],
        },
    ]);
    // conditional statement
    if (answer.Operator === "Addition") {
        console.log(`Your value is`, answer.firstNumber + answer.secondNumber);
    }
    else if (answer.Operator === "Subtraction") {
        console.log(`Your value is`, answer.firstNumber - answer.secondNumber);
    }
    else if (answer.Operator === "Multiplication") {
        console.log(`Your value is`, answer.firstNumber * answer.secondNumber);
    }
    else if (answer.Operator === "Division") {
        console.log(`Your value is`, answer.firstNumber / answer.secondNumber);
    }
    else if (answer.Operator === "Module") {
        console.log(`Your value is`, answer.firstNumber % answer.secondNumber);
    }
    else {
        console.log("Please choose a valid operator");
    }
    console.log('THANKS FOR USING my CALCULATOR');
}
main();
