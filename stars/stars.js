/*
 * Star function
 */
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);
  star(width/4, height/2, 5, 70, 3); 
  star(width/2, height/2, 80, 100, 40); 
  star(3*width/4, height/2, 30, 70, 5);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  push();
  translate(x, y);
  rotate(frameCount / -100.0);
  fill(255);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = cos(a) * radius2;
    var sy = sin(a) * radius2;
    vertex(sx, sy);
    sx = cos(a+halfAngle) * radius1;
    sy = sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
