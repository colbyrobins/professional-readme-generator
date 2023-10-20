const inquirer = require('inquirer')
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project:'
    },
    {
        type: 'list', 
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [ 
          'MIT',
          'Apache 2.0',
          'GPL 3.0',
          'BSD 3-Clause',
          'None',
        ],
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('Project Description:', answers.description);
        console.log('Installation Instructions:', answers.installation);
        console.log('Usage Information:', answers.usage);
        console.log('Contribution Guidelines:', answers.contribution);
        console.log('Test Instructions:', answers.test);
        console.log('License:', answers.license);

      });
}

// Function call to initialize app
init();
