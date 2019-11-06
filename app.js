function setup() {
  createCanvas(400, 400); // Creates Canvas
  // background("#007bff"); // Sets Background Color
}

function draw() {
  let c = color("#333"); // Defines the color
  stroke(c); // Inits the color

  // ** Drawing a Point
  point(30, 30);
  // strokeWeight(20);

  // ** Line
  line(50, 50, 80, 80); // Draws a line

  // ** Rectangle
  rect(30, 20, 40, 25); // x, y, width, height
  fill(color("#fff")); // Another way to color

  // ** Square
  square(30, 20, 55);

  // ** Triangle
  triangle(30, 75, 58, 20, 86, 75);
}
