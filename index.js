const fs = require('fs');
const inquirer = require('inquirer');
// shapes.js

const shapes = {};

module.exports = shapes;


inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: function (input) {
        return input.length <= 3 || 'Please enter three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):'
    },
  ])
  .then(generateLogo)
  .catch(console.error);

  function shapeSelected(svgShape, svgColor) {
    if (svgShape === "circle") {
      return `<circle cx="150" cy="100" r="100" fill="${svgColor}"/>`;
    }
    if (svgShape === "square") {
      return `<rect width="300" height="100" style="fill:${svgColor};stroke-width:3;stroke:black;" />`;
    }
    if (svgShape === "triangle") {
      return `<polygon points="150,30 270,170 30,170" style="fill:${svgColor};" />`;
    }
  }
  
  
  


function generateLogo(answers) {
  const { text, textColor, shape, shapeColor } = answers;

  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="white" />
      ${shapeSelected(shape,shapeColor)}
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="60">${text}</text>
    </svg>
  `;

  fs.writeFile('logosvg.svg', svgMarkup, (err) => {
    if (err) {
      console.error('Failed to save the SVG:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}











