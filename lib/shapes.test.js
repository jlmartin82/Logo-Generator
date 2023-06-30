const { Triangle, Circle, Square } = require('./shape');

describe('Triangle', () => {
  test('render() should return the correct SVG string', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe('Circle', () => {
  test('render() should return the correct SVG string', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="red" />'
    );
  });
});

describe('Square', () => {
  test('render() should return the correct SVG string', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual(
      '<rect width="300" height="100" style="fill:green;stroke-width:3;stroke:black;" />'
    );
  });
});
