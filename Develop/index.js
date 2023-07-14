// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub ?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email ?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
];

// Function for README
async function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize
async function init() {
  try {
    const inquirerResponses = await inquirer.prompt(questions);
    console.log('Generating README...');
    const mardownContent = generateMarkdown(inquirerResponses);
    await writeToFile('README.md', markdownContent);
    console.log('README generated successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// call to start the application
init();
