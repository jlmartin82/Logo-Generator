# Logo Generator

This is a simple script that generates a logo SVG file. The user is prompted to enter the text, text color, shape, and shape color for the logo. The script then writes the SVG file to a file called `logosvg.svg`.

## Requirements

* Node.js
* Inquirer
* Fs

## Usage

To generate a logo, run the following command:


node logo.js


The script will prompt you to enter the following information:

* The text for the logo (up to three characters)
* The text color (keyword)
* The shape of the logo (circle, square, or triangle)
* The color of the shape (keyword)

Once you have entered all of the information, the script will generate the SVG file and save it to a file called `logosvg.svg`.

## Example

The following is an example of how to use the script:

[SVG.webm](https://github.com/jlmartin82/Logo-Generator/assets/129562637/db064a24-f428-4d91-be95-c3ea8cb4e424)

![Screenshot 2023-06-29 at 9 54 31 PM](https://github.com/jlmartin82/Logo-Generator/assets/129562637/09085c97-edda-454b-81ad-ee1b2902db75)


!(Users/justin/bootcamp/Logo-Generator/Examples/Screenshot 2023-06-29 at 9.54.31 PM.png)

!(/Examples/Screenshot%202023-06-29%20at%209.54.31%20PM.png "SVG example")

node logo.js

Enter up to three characters for the logo text: TXT

Enter the text color (keyword): red

Select a shape for the logo: circle

Enter the shape color (keyword): blue

Generated logo.svg


This will generate a logo SVG file with the text "TXT" in red, a blue circle, and a white background.

## License

This script is released under the MIT License.

