
function renderLicenseBadge(license) {

  switch (license) {
    case "MIT": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)"
    case "Apache 2.0": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GPL 3.0": return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3-Clause": return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case "None": return ""
  }
}

function renderLicenseSection(license) {
  return `This project is covered under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${badge}

## Description
${data.description}

## Table of Contents

* [Description](#Description)
* [Table of Contents](#table-of-contents)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)


## Installation 
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contribution Guidelines
${data.contribution}

## Test Instructions 
${data.test}

## Questions?

Github Profile: https://github.com/${data.username}

Email me at ${data.email} if you have any questions.
`;
}

  module.exports = {generateMarkdown};
