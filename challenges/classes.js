// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

let cuboid = new cuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using
//the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class cubeMaker extends cuboidMaker {
  constructor(length, width, height, area) {
    super(cuboidMaker);
    this.area = area;
  }
  volume() {
    return this.area * this.area * this.area;
  }
  surfaceArea() {
    return 6 * (this.area * this.area);
  }
}

let newCube = new cubeMaker(4, 5, 5, 5);

console.log(newCube.volume());
console.log(newCube.surfaceArea());
