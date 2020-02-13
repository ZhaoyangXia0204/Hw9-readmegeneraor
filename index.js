const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');


const questions = [
    {
        type: "input",
        message: "what is the title of your project?",
        name: "title"
    }, {
        type: "input",
        message: "description: ",
        name: "description"
    }, {
        type: "input",
        message: "table of Contents: ",
        name: "table of Contents"
    }, {
        type: "input",
        message: "installation: ",
        name: "installation"
    }, {
        type: "input",
        message: "usage: ",
        name: "usage"
    }, {
        type: "list",
        message: "which license?",
        name: "License",
        choices: ["Apache 2.0 License",
            "BSD 3-Clause License",
            "BSD 2-Clause License"]
    }, {
        type: "input",
        message: "Contributing: ",
        name: "Contributing"
    }, {
        type: "input",
        message: "Tests: ",
        name: "Tests"
    }, {
        type: "input",
        message: "Questions: ",
        name: "Quesionss"
    }
]
function init(){
    inquirer.prompt(questions)
    .then(function(response){
        const title = "#" +response.title;
        const description = "## Description" + '\n' + response.description;
        const table = "## Table" + '\n';
        const installation = "## Installation" + '\n' + response.installation;
        const usage = "## Usage" + '\n' + response.usage;
        const test = "## Tests" + '\n' + response.test;
        const Questionss = "## Tests" + '\n' + response.Questionss;
        fs.writeFile("ReadeMe.md", title+"\n"+description+"\n"+table+"\n"+installation+"\n"+usage+"\n"+test+"\n"+Questionss, function(err){
            if (err){
                throw err

            }
        })
    })
}
init()
