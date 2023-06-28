// shapes.js

const shapes = {};

shapes.createCircle = (radius, color) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${2 * radius}" height="${2 * radius}">
            <circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />
          </svg>`;
};

shapes.createSquare = (sideLength, color) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${sideLength}" height="${sideLength}">
            <rect width="${sideLength}" height="${sideLength}" fill="${color}" />
          </svg>`;
};

shapes.createTriangle = (sideLength, color) => {
  const height = (Math.sqrt(3) / 2) * sideLength;
  const points = `0,${height} ${sideLength / 2},0 ${sideLength},${height}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${sideLength}" height="${height}">
            <polygon points="${points}" fill="${color}" />
          </svg>`;
};

module.exports = shapes;
