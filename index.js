const inquirer = require('inquirer');
//const axios = require('axios');
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
    },//{
    //     type:"checkbox",
    //     choices:"![Alt Text](https://img.shields.io/github/languages/top/nielsenjared/badmath)",
    //     name:"badges"
    // },
     {
        type: "input",
        message: "Tests: ",
        name: "Tests"
    }, {
        type: "input",
        message: "Questions: ",
        name: "Questionss"
    }
]
function init(){
    inquirer.prompt(questions)
    .then(function(response){
        const title = "#" + response.title;
        const description = "## Description" + '\n' + response.description;
        const table = "## Table" + '\n';
        const installation = "## Installation" + '\n' + response.installation;
        const Contributing = "## Contributing" + '\n' + response.Contributing;
        const usage = "## Usage" + '\n' + response.usage;
        const test = "## Tests" + '\n' + response.Tests;
        const license = "## License" + '\n' + response.License;
        const Questionss = "## Questions" + '\n' + response.Questionss;
        fs.writeFile("ReadeMe.md", title+"\n"+license+"\n"+description+"\n"+table+"\n"+Contributing+'\n'+installation+"\n"+usage+"\n"+test+"\n"+Questionss, function(err){
            if (err){
                throw err

            }
        })
    })
}
init()
