// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs");
const { error } = require('console');
const util = require('util');
let $template= ' '
let readme ='./readme.md'
let perl ='[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
let sil ='[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
let ZLIB ='[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
// const generateMarkdown = require('./generateMarkdown');



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
  
  .then(function(response){
    
    $template += `### Description \n\n This app will allow you to create a dynamic Readme file using Node.js terminal \n\n `
    $template +=`### Reponame \n\n reponame: ${response.reponame}\n\n `
    $template +=`### Licenses \n\n License usage: ${response.licenses}\n\n `
    $template +=`### Gitusername \n\n Gitusername :${response.gitusername}\n\n `
    $template +=`### Email \n\n Email: ${response.email}\n\n`
    $template +=`### Questions \n\n if you have any questions please reach  me at: \n\n ${response.email} or find me on Github ${response.reponame}\n\n`
    $template += `### Permission \n\n If you think your improvements will make the app better please free to doa branch merge`


    fs.writeFile(readme,$template,function(err){
      if (err){
        console.log(err)
      }
    })
  })
  





   








