// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


function generateLicense (myLicense){
    const licenseChoice = ['Apache License 2.0' , 'CC0-1.0', 'GNU GPLv3', 'MIT License', 'Mozilla Public License'];
    const links = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'];
    const index = licenseChoice.indexOf(myLicense);
    if(index === -1){
    console.log('Use https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to find your license');
    return '';
    }
    return links[index];
}

inquirer.prompt([
    {
        type: 'input',
        message: 'Title: please enter the title of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description: please write a brief description of the project - what it is, why you built it, and what problems it solves.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation: what steps must a user take to install and run this project? (Enter N/A if N/A)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage: please offer any relevant instructions or examples for use, including brief elaboration on any features.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License: please select the appropriate license for your project. (Enter N/A if N/A)',
        name: 'license',
        choices: ['Apache License 2.0' , 'CC0', 'GNU GPL', 'MIT License', 'Mozilla Public License'],
    },
    {
        type: 'input',
        message: 'Credits: list any collaborators and/or third-party assets used in the project. (Enter N/A if N/A)',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Testing: please elaborate on any tests that have been or can be run on the project.',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Contact: please enter an email address at which you may be contacted with any further questions.',
        name: 'questions',
    },
]).then((answers) => {
    console.log(answers);
    generateLicense();
    fs.writeFile('README.md', 
`# ${answers.title}
${generateLicense(answers.license)}
## Description
${answers.description}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Credits](#credits)

[Testing](#testing)

[Contact](#contact)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Credits
${answers.credits}

## Testing
${answers.testing}

## Contact
Email ${answers.questions} with any additional inquiries.`
    , (error) => {
        if (error) {
            console.log(error);
        }
    }
    )
}
)



