cdoe// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs");
const { error } = require('console');
const { inherits } = require('util');


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
<<<<<<< HEAD
.then((data, filename)=> {
  const filename= `${data.name.join(' ')}.json`;
  
   fs.writeFile('README.md',JSON.stringify(data,null, '/t'),(err) => err ? console.log(err): console.log('success'))
  
}) 

function init(){}
=======
].then(data)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md',questions,
  (err) => err ? console.log(err): console.log('success'))
>>>>>>> aa98afc3daa68c6e1a0c8d88d6e33b5f0461305e

init()




