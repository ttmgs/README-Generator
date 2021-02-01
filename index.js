const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "Github Username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "Title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "Description",
    message: "Please write a short description of your project"
  },
  {
    type: "list",
    name: "License",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "Installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "Test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "Usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
