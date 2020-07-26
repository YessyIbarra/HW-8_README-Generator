// function to generate markdown for README
function generateMarkdown(responses) {
  console.log("this function works")
  
    return `# ${responses.projectTitle}
    
  ## Description 
  ${responses.projectDescription}


  ## Table of Contents
  * [Install](#Getting-Started)
  * [Usage](#Usage-Information)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Contact Info](#Contact-Me)
  

  ## Getting Started 
  ${responses.install}


  ## Usage Information
  ${responses.usage}


  ## License
  ${responses.license}

  
  ## Contributing
  ${responses.contributing}

  
  ## Testing
  ${responses.testing}

  
  ## Contact Me
  GitHub Username: ${responses.gitHub}
  Email: ${responses.email}`;
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
