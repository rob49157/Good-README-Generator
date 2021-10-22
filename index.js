// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs")

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    // display as title of readme
    {type:'input',
    message:" Enter name of Repository:",
    name: 'repo name'},
    
    // licences
    // github user name
    {type: 'input',
     message: ' Enter github user name:',
      name: 'gitusername' },
    // enter email address
    {type: 'input',
    message:' Enter email:',
    name: "email"}



])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
