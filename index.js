const fs = require('fs');
const inquirer = require('inquirer');
const { create } = require('svg-crowbar');

inquirer 

  .promt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:'
      validate: function (input) {
        return input.length <= 3 || 'Please enter three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):'
    }
  ])











  