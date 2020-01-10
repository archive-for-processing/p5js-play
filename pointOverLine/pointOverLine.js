function setup() {
  createCanvas(500, 500);
}

function draw() {

  if (linePoint(100, 100, 300, 300, mouseX, mouseY)) {
    stroke(255, 0, 0);
  } else {
    stroke(0);
  }
  
  line(100, 100, 300, 300);
}



function linePoint( x1, y1, x2, y2, px, py) {

  // get distance from the point to the two ends of the line
  var d1 = dist(px, py, x1, y1);
  var d2 = dist(px, py, x2, y2);

  // get the length of the line
  var lineLen = dist(x1, y1, x2, y2);

  // since vars are so minutely accurate, add
  // a little buffer zone that will give collision
  //var buffer = 0.2;    // higher # = less accurate
  var buffer = 5;
  // if the two distances are equal to the line's
  // length, the point is on the line!
  // note we use the buffer here to give a range,
  // rather than one #
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
}
