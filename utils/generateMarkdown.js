// function to generate markdown for README
function generateMarkdown(responses) {
  //console.log("this function works")

  if (responses.license === "MIT License") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (responses.license === "Apache License") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  }
  else if (responses.license === "GPLv3 License") {
    licenseBadge = `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`
  };
  
    return `# ${responses.projectTitle}

  ## Description 
  ${responses.projectDescription}


  ## Table of Contents
  * [Installation](#Installation)
  * [Usage Information](#Usage-Information)
  * [License](#License)
  * [Contributing](#Contribution-Guidelines)
  * [Test Instructions](#Test-Instructions)
  * [Questions](#Questions)
  

  ## Installation 
  ${responses.install}


  ## Usage Information
  ${responses.usage}


  ## License
  ${licenseBadge}
  

  ## Contribution Guidelines
  ${responses.contributing}

  
  ## Test Instructions
  ${responses.testing}

  
  ## Questions
  * GitHub Username - ${responses.gitHub}
  * Email - ${responses.email}`;
}

//module.exports is an object we use to store functions or variables
module.exports = generateMarkdown;
