// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like the title of your README file to be?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please include a description of your site/app',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please include any steps needed for installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Define the usage of the app/site',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Include contributors here',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'Include any tests done here',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select the license you used',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
        name: 'license',
    } 
];
// inquirer
//     .prompt(questions)
//     .then((response) => {
//       const markdownContent = markdown.generateMarkdown(response);
//       fs.appendFile('createdREADME.md', `${JSON.stringify(markdownContent)}\n`, (err) =>
//       err ? console.error(err) : console.log('README generated successfully!')
//        )})
//     ;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) =>
 err ? console.error(err) : console.log('README generated successfully!'))
}

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then((response) => {
      const markdownContent = markdown(response);
      writeToFile('README.md', markdownContent)
    })
}

// Function call to initialize app
init();