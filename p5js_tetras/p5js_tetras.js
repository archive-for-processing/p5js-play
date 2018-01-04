var tetrah_list = [];
var rot_x = 0;
var rot_y = 0;
var i = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  //canvas.position(0, 0);
  //canvas.style('z-index', '-1');
  for (var i = 0; i < 100; i++) {
    var x = random(-windowWidth, windowWidth);
    var y = random(-windowHeight, windowHeight);
    var z = random(-500, 0);
    var t = new Tetrahedron(x, y, z, 50, true); // instancia um tetrah
    tetrah_list.push(t);      // acrescenta na lista
  }
}

function draw() {
  background(128);
  //ellipse(100, 100, 100, 100);
  rot_x += 0.005;
  rot_y += 0.01;

  for (var i = 0; i < tetrah_list.length; i++) { // itera pela lista apas
    tetrah_list[i].plot();
  }
}

function Tetrahedron(x, y, z, radius, showFaces) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.vert = [];
  this.radius = radius;
  this.showFaces = showFaces;
  var a = this.radius*2/3;
  this.vert[0] = new p5.Vector( a, a, a );  // vertex 1
  this.vert[1] = new p5.Vector(-a, -a, a );    // vertex 2
  this.vert[2] = new p5.Vector(-a, a, -a );  // vertex 3
  this.vert[3] = new p5.Vector( a, -a, -a );   // vertex 4

  // draws tetrahedron 
  this.plot = function(rx, ry) {
    var c = color(map(this.x, 0, width, 0, 255), 
      map(this.y, 0, height, 0, 255), 
      map(this.z, -500, 0, 0, 255), 100);
    push();
    //console.log(frameCount);
    //console.log(i);
    //i++;
    fill(c); //MADNESS!!!
    translate(this.x, this.y, this.z);
    rotateX(rot_y);
    rotateY(rot_x);
    //box(50);
    //beginShape(TRIANGLE_STRIP);
    triangle(
      this.vert[0].x, this.vert[0].y, this.vert[0].z,  // vertex 1
      this.vert[1].x, this.vert[1].y, this.vert[1].z,    // vertex 2
      this.vert[2].x, this.vert[2].y, this.vert[2].z);  // vertex 3

    //vertex(this.vert[0].x, this.vert[0].y, this.vert[0].z);  // vertex 1
    //vertex(this.vert[1].x, this.vert[1].y, this.vert[1].z);    // vertex 2
    //vertex(this.vert[2].x, this.vert[2].y, this.vert[2].z);  // vertex 3
    //vertex(this.vert[3].x, this.vert[3].y, this.vert[3].z);   // vertex 4
    //vertex(this.vert[0].x, this.vert[0].y, this.vert[0].z);  // vertex 1
    //vertex(this.vert[1].x, this.vert[1].y, this.vert[1].z);    // vertex 2
    //vertex(this.vert[3].x, this.vert[3].y, this.vert[3].z);   // vertex 4
    //vertex(this.vert[2].x, this.vert[2].y, this.vert[2].z);  // vertex 3
    //vertex(this.vert[1].x, this.vert[1].y, this.vert[1].z);    // vertex 2
    //endShape(CLOSE); 
    pop();
  }
}