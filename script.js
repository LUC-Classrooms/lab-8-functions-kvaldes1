function setup() {
  createCanvas(600, 400);
  shapeColor = color( 25, 255, 255);
}

function draw() {
  background(200);

  // Call to myShape() with different arguments
  myShape(width / 2, height / 2, 1);
  myShape(width / 4, height / 4, 0.5); // Smaller and in a different location
  myShape(width * 3 / 4, height * 3 / 4, 1.5); // Larger and in a different location
}

function myShape(x, y, s) {
  push(); // make a separate layer
  translate(x, y); // move the origin point
  rotate(radians(frameCount * 2)); // Rotate the shape based on frame count multiplied by 2
  scale(s);
  
  fill(25, 255, 255); // Use the consistent color for the entire shape

  // Drawing a more interesting shape
  beginShape();
  vertex(0, -50);
  bezierVertex(25, -50, 50, 0, 0, 50);
  bezierVertex(-50, 0, -25, -50, 0, -50);
  endShape(CLOSE);
  
  pop(); // dispose of the layer
}
