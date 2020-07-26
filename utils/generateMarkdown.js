// function to generate markdown for README
function generateMarkdown(responses) {
  console.log("this function works")
  if (responses.license === "Apache License"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {

  };

  //MIT license - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  
    return `# ${responses.projectTitle}


    
  ## Description 
  ${responses.projectDescription}


  ## Table of Contents
  * [Install](#Installation)
  * [Usage](#Usage-Information)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Contact Info](#Contact-Me)
  

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

  
  ## Contact Me
  * GitHub Username: ${responses.gitHub}
  * Email: ${responses.email}`;
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
