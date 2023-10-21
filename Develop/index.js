const inquirer = require('inquirer')
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js');


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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input', 
        name: 'username',
        message: "Please provide your Github username:"
    },
    {
        type: 'input', 
        name: 'email',
        message: "Please provide your email:"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}


function init() {
    inquirer.prompt(questions)
        .then(answers => {
            let markdown = utils.generateMarkdown(answers);
            console.log(markdown);
            writeToFile("README-Template.md", markdown)
      });
}

init();