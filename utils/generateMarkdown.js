// function to generate markdown for README
function generateMarkdown(responses) {
  console.log("this function works")
  return `# ${responses.title}`;
  
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
