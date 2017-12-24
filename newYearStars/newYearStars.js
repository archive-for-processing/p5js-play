/*
 * Many Stars
 * (c)2017 Alexandre B A Villares
 * https://abav.lugaralgum.com
 */
var starList = [];
var params;
function setup() {
  createCanvas(windowWidth, windowHeight);
  params = getURLParams(); 
  noStroke();
  for (var i = 0; i < 200; i++) {
    newStar = new Star(random(width), 
      random(height), 
      random(20, 60), random(50, 120), 
      int(random(3, 30)));
    starList.push(newStar);
  }
}

function draw() {
  background(0);
  textFont("sans-serif");
  fill(255,200);
  if (params && params.frase) {
    var frase = params.frase.replace(/_/g,' ');
    frase = frase.replace(/;/g,'\n');
    textSize(32);
    text(frase, 50, 50);
  }    
  textSize(8);
  text("Alexandre B A Villares", 50, windowHeight - 50);
  for (var i = 0; i < starList.length; i++) { 
    starList[i].plot();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
 if ( dist(mouseX, mouseY,  50, windowHeight - 50) < 200){
   var win = window.open('https://abav.lugaralgum.com/');
   
 }
}

function Star(x, y, radius1, radius2, npoints) {
  this.x = x;
  this.y = y;
  this.radius1 = radius1;
  this.radius2 = radius2;
  this.angle = TWO_PI / npoints;
  this.halfAngle = this.angle/2.0;
  this.color = color(random(256), random(256), random(256), 50);

  this.plot = function() {
    push();
    translate(this.x, this.y);
    rotate(frameCount / 100.0);
    fill(this.color);
    beginShape();
    this.radius3 = this.radius2 * sin(frameCount/100);
    for (var a = 0; a < TWO_PI; a += this.angle) {
      var sx = cos(a) * this.radius3;
      var sy = sin(a) * this.radius3;
      vertex(sx, sy);
      sx = cos(a+this.halfAngle) * this.radius1;
      sy = sin(a+this.halfAngle) * this.radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }
}
