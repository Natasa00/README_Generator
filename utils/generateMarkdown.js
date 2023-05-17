// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  return `![License](https://img.shields.io/badge/license-${license}-orange.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is under the ${data.license} license.

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
