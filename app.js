
const inquierer = require('inquirer');

//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//fs.writeFile('./index.html', generatePage(name, github), err => {
// if (err) throw new Error(err);

// console.log('Portfolio complete! Check out index.html to see the output!');
//});

console.log(inquirer);

inquirer.prompt([

   {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }

    },
    
  {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
  },

    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }

  ])