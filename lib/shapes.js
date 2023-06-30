class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // Implement the render method in the Shape class
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="300" height="100" style="fill:${this.color};stroke-width:3;stroke:black;" />`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };

