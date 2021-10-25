// TODO: Include packages needed for this application
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
.then((data, filename)=> {
  const filename= `${data.name.join(' ')}.json`;
  
   fs.writeFile('README.md',JSON.stringify(data,null, '/t'),(err) => err ? console.log(err): console.log('success'))
  
}) 

function init(){}

init()




