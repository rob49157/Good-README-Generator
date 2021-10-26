// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs");
const { error } = require('console');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
  inquirer.prompt([

    // display as title of readme
    {type:'input',
    message:"Enter name of Repository:",
    name: 'reponame'},
    
    // licences

    {
      type:'list',
      message: 'select licenses permitted:',
      name: 'licenses',
      choices: [
        'perl [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        ,'SIL [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
        ,'ZLIB [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)']


    },
    // github user name
    {type: 'input',
     message: 'Enter github user name:',
      name: 'gitusername' },
    
      // enter email address
    {type: 'input',
    message:'Enter email:',
    name: "email"}

  ]) 
 .then((data)=> {
   const filename =`${data.name}.md`;
   
   fs.writeFile(filename,JSON.stringify(data,null, '\t'),(err)=>
   
   err? console.log(err): console.log(`succer`))
  })
   
   








