// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  return `![License](https://img.shields.io/badge/license-${license}-orange.svg)`;
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  return `https://opensource.org/license/${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is under the [${data.license} license](${renderLicenseLink(data.license)}).

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Contact my [GitHub profile](https://github.com/${
    data.githubUsername
  }) for any questions.
For any additional questions, please email me ${data.email}.
`;
}

module.exports = generateMarkdown;
