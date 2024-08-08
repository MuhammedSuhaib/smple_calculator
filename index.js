#!/usr/bin/env node
// Above line is called "shebang": SHE is used for hash (#) and BANG is used for an exclamation mark(!)
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import chalkAnimation from 'chalk-animation';
(async () => {
    await showBanner('C L I Calculator ', '', 'blue');
    const answer = await inquirer.prompt([
        { message: chalk.greenBright("Enter First number"),
            type: "number",
            name: "firstNumber" },
        { message: chalk.magentaBright("Enter Second number"),
            type: "number",
            name: "secondNumber" },
        { message: chalk.yellowBright("Select one operator to perform operation"),
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Module"] },
    ]);
    // conditional statement
    if (answer.operator === "Addition") {
        console.log('Your value is', answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log('Your value is', answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log('Your value is', answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log('Your value is', answer.firstNumber / answer.secondNumber);
    }
    else if (answer.operator === "Module") {
        console.log('Your value is', answer.firstNumber % answer.secondNumber);
    }
    else {
        console.log("Invalid input");
    }
    console.log();
    let animation = chalkAnimation.rainbow("Thanks for using my Calculator");
    setTimeout(() => {
        animation.stop(); // Stop the animation
    }, 2000);
})();
