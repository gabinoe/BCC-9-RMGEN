function renderLicenseBadge(license) {
  return license !== 'None' ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` : '';
}

function renderLicenseLink(license) {
  return license !== 'None' ? `\n* [License](#license)\n` : '';
}

function renderLicenseSection(license) {
  return license !== 'None' ? `## License\n\nThis project is licensed under the ${license} license.` : '';
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
