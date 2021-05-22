// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return '[![License: WTFPL](https://img.shields.io/badge/License-${license}.svg)]'
  }else{
    return '';
  }
}

//This does not need an 'else' statement, because 'return' takes the place of else.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`
  }else{
    return '';
  }
}
// the \n is a line break.

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    This project is licensed under the ${license} license`;
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licensure)}

  ## Table of Contents

  * [Description](#Description)

  * [Media](#Media)

  * [Installation](#Installation)

  * [Contributors](#Contributors)

  * [Contact](#Contact)

  * [Status](Status)


  ## Description
  ${data.description}

  ## Media
  ${data.media}
  [Click this link to watch the mock-up video.](./utils/readme-generator-vid.mov)
  
  ## Installation
  ${data.installation}

  ## Contributors
  This project was created by ${data.contributors}.

  ## Contact
  If you have any questions about this repository, contact ${data.contact} via GitHub or reach out via email:
  ${data.email}.

  ## Project Status
  ${data.projectStatus}

`;
}

module.exports = generateMarkdown;
