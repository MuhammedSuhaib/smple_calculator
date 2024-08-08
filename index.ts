#!/usr/bin/env node
// Above line is called "shebang": SHE is used for hash (#) and BANG is used for an exclamation mark(!)

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner" ;

(async ( ) =>{ 
  await showBanner ( 'C L I Calculator ','','blue');
  const answer=await inquirer.prompt([
    { message: "Enter First number",
      type: "number" ,
      name :"firstNumber"},
      { message: "Enter Second number",
      type: "number" ,
      name :"secondNumber"},
      { message: "Select one operator to perform operation",
      type: "list" ,
      name :"operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division","Module"]},
  ]);
  // conditional statement

  if (answer.operator === "Addition"){
    console.log('Your value is' , answer.firstNumber + answer.secondNumber);
    } else if (answer.operator === "Subtraction"){
    console.log('Your value is', answer.firstNumber - answer.secondNumber);
    } else if (answer.operator === "Multiplication"){
    console.log('Your value is', answer.firstNumber * answer.secondNumber);
    } else if (answer.operator === "Division"){
    console.log('Your value is', answer.firstNumber / answer.secondNumber);
    } else if (answer.operator === "Module"){
    console.log('Your value is', answer.firstNumber % answer.secondNumber);
    } else {
    console.log("Invalid input");
    }

    console.log("Thanks for using my Calculator");
  })();