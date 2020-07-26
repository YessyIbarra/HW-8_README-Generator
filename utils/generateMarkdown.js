// function to generate markdown for README
function generateMarkdown(responses) {
  console.log("this function works")
  if (responses.license === "MIT License"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (responses.license === "GPLv2 License"){
    licenseBadge = ``

  }
  else if (responses.license === "Apache License"){
    licenseBadge = ``

  }
  else if (responses.license === "GPLv3 License"){
    licenseBadge = ``

  };


  
    return `# ${responses.projectTitle}


    
  ## Description 
  ${responses.projectDescription}


  ## Table of Contents
  * [Installation](#Installation)
  * [Usage Information](#Usage-Information)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Contact Info](#Contact-Information)
  

  ## Installation 
  ${responses.install}


  ## Usage Information
  ${responses.usage}


  ## License
  ${licenseBadge}
  

  ## Contributing
  ${responses.contributing}

  
  ## Testing
  ${responses.testing}

  
  ## Contact Information
  * GitHub Username: ${responses.gitHub}
  * Email: ${responses.email}`;
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
