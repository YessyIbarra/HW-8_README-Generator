//refrencing modules here as constants
const fs = require("fs");
const inquirer = require("inquirer");
//Requiring in main module to export function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    "Enter Project Title",
    "Enter Project Description",
    "Enter Project Installation Steps",
    "Provide Examples of Project Usage",
    "Choose a License for Project",
    "Specify Directions for Contributing to Your Project",
    "Specify Directions for Testing Your Project",
    "Enter GitHub Username",
    "Enter email address"
];

//Function for prompting user in command line
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: questions[0]
        },
        {
            type: "input",
            name: "projectDescription",
            message: questions[1]
        },
        {
            type: "input",
            name: "install",
            message: questions[2]
        },
        {
            type: "input",
            name: "usage",
            message: questions[3]
        },
        {
            type: "list",
            name: "license",
            message: questions[4],
            choices: [{
                name: "MIT License",
            },
            {
                name: "GPLv2 License",
            },
            {
                name: "Apache License",
            },
            {
                name: "GPLv3 License"
            }]
        },
        {
            type: "input",
            name: "contributing",
            message: questions[5]
        },
        {
            type: "input",
            name: "testing",
            message: questions[6]
        },
        {
            type: "input",
            name: "gitHub",
            message: questions[7]
        },
        {
            type: "input",
            name: "email",
            message: questions[8]
        }
    ]).then(function (responses) {
        //console.log(responses);
    
        let generateREADME = generateMarkdown(responses);
        console.log(generateREADME);

        fs.writeFile('newREADME.md', generateREADME , function (err) {
           
        if (err) {
            return console.log(err);
        }
            console.log("Success!");
        });
    });
}


// function to initialize program
function init() {
    promptUser();
}

// function call to initialize program
init();
