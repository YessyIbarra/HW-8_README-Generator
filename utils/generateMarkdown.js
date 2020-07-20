// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
