# Logo Generator

This is a simple script that generates a logo SVG file. The user is prompted to enter the text, text color, shape, and shape color for the logo. The script then writes the SVG file to a file called `logosvg.svg`.

## Requirements

* Node.js
* Inquirer
* Fs

## Usage

To generate a logo, run the following command:

![screenshot](<Screenshot 2023-06-29 at 9.54.31 PM-1.png>)

![Walkthrough](../../Desktop/SVG.webm)

![walkthrough](../../Desktop/SVG.webm)


node logo.js


The script will prompt you to enter the following information:

* The text for the logo (up to three characters)
* The text color (keyword)
* The shape of the logo (circle, square, or triangle)
* The color of the shape (keyword)

Once you have entered all of the information, the script will generate the SVG file and save it to a file called `logosvg.svg`.

## Example

The following is an example of how to use the script:



node logo.js

Enter up to three characters for the logo text: TXT

Enter the text color (keyword): red

Select a shape for the logo: circle

Enter the shape color (keyword): blue

Generated logo.svg


This will generate a logo SVG file with the text "TXT" in red, a blue circle, and a white background.

## License

This script is released under the MIT License.

