//refrencing modules here as constants
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Enter Project Title"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Enter Project Description"
    },
    {
        type: "input",
        name: "install",
        message: "Enter Project Installation Steps"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide Examples of Project Usage"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a License for Project",
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
        message: "Specify Directions for Contributing to Your Project"
    },
    {
        type: "input",
        name: "testing",
        message: "Specify Directions for Testing Your Project"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter GitHub Username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    }

];

// function to write to README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
