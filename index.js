const inquirer = require('inquirer');
const fs = require('fs');


const generatorMarkdown = require (`./generate`)
//questions for user
const questions = [{

   type: "input",
    message:"What is the title of your project?",
    name: "title",
},{
    type: "input",
    message:"How many contributors are there in this project? Who are they ?",
    name: "contributors",
},{
    type: "input",
    message:"What was your motivation behind this project?",
    name: "motivation",
},{
    type: "input",
    message:"Why did you build this project?",
    name: "why",
},{
    type: "input",
    message:"What problem does this project solve?",
    name: "solve",
},{
    type: "input",
    message:"What did you learn?",
    name: "learn",
},{
    type: "input",
    message:"What makes your project stand out?",
    name: "stand out",
},{
   
},
{
    type: 'input',
    name: 'version',
    message: 'What is the project version (if applicable, otherwise write v1.0)?',
},
{
    type: 'input',
    name: 'license',
    message: 'What licence/s does the project have?',
},

{type: 'input',
name: 'deployed-link',
message: 'URLlink:',
},
{
type: 'input',
name: 'website-screenshot',
message: 'screenshot of website landing page',
},
{
type: 'input',
name: 'github-link',
message: 'Enter your GitHub Username',
},
{
    type: 'input',
    name: 'What is your email adress?',
    message: 'Email',
},
]

//function to write README
function writeTofile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {

            return console.log(err)
        } else {
            console.log("success")
        }


      
    
    })
}

//funtion to initialise program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeTofile("README.md", generatorMarkdown(data));
        console.log(data)
 })
}

//function call to init program
init();
 