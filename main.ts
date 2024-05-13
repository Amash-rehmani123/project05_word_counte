#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourful welcome message
console.log(chalk.bold.rgb(204,204,204)(`\n \t\t <<< ================================================= >>>\n`));
console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold(`\t\t\t Welcome to \` Amashta Rehmani \` Word Counter\n`)));
console.log(chalk.bold.rgb(204,204,204)(`\t\t <<< ================================================= >>>`));

let userInput = await inquirer.prompt({
    message: "Enter your message to count the words!",
    type: "input",
    name: "Paragraph"
});
let para : string = userInput.Paragraph;
let cleanPara : string = para.trim();
let wordsArray : string[] = cleanPara.split(' ');
let filteredWords = wordsArray.filter(word => word !== '');
console.log(chalk.yellowBright.bold(`\n \t\t You typed ${filteredWords.length} words.`));
console.log(chalk.yellowBright.bold(`\n \t\t You typed ${cleanPara.length} characters.`));
