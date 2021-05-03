//generate readme markdown

function generateMarkdown(data) {
    return `

# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#queations)
# Installation 
The following necessary dependencies must be installed to run the application
# Usage
In order to use this app, ${data.Usage}
# License 
This project is licensed under the ${data.License} license.
![GitHub license] https://img.shields.io/badge/licence-MIT-blue.svg)
# Questions
If you have any questions about the repo, open an issue or contact ${data.Use}
`}

module.exports = generateMarkdown;
