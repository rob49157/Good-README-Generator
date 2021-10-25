cdoe// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs");
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
inquirer
.prompt([
    // display as title of readme
    {type:'input',
    message:" Enter name of Repository:",
    name: 'repo name'},
    
    // licences

    {
      type:'list',
      message: 'select licenses permitted:',
      name: 'licenses',
      choices: ['Ansible','Bash', 'GIMP']

    },
    // github user name
    {type: 'input',
     message: ' Enter github user name:',
      name: 'gitusername' },
    // enter email address
    {type: 'input',
    message:' Enter email:',
    name: "email"}



])
].then(data)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md',questions,
  (err) => err ? console.log(err): console.log('success'))

  }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
