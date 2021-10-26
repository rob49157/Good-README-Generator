// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require("fs");
const { error } = require('console');
const util = require('util');
let $template= ' '
let path ='./readme.md'
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
    
    $template += `### Description \n\n This app will allow you to create a dynamic Readme file using Node.js terminal`
    $template +=`### reponame \n\n reponame:${response.reponame}\n\n `
    $template +=`### licenses \n\n License usage: ${response.licenses}\n\n `
    $template +=`### gitusername \n\n Gitusername${response.gitusername}\n\n `
    $template +=`### email \n\n Email: ${response.email}\n\n`
    $template +=`### questions \n\n if you have any questions please reach to me at \n\n ${response.email} or ${response.reponame}\n\n`
    $template += `### Permission \n\n If you think your improvements will make the app better please merge`


    fs.writeFile(path,$template,function(err){
      if (err){
        console.log(err)
      }
    })
  })
  




  
//  .then((data)=> {
//    const filename =`${data.name.toLowercase().split('').join(' ')}.md`;
   
//    fs.writeFile(filename,JSON.stringify(data,null, '\t'),(err)=>
   
//    err? console.log(err): console.log(`success`))
//   })
   
   








