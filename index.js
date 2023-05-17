// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["ISC", "MIT"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const content = generateMarkdown(answers);
    console.log(content);
  });
}

// Function call to initialize app
init();
