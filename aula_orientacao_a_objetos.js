// para uso em editor.p5js.org
// clique no canvas para mais objetos

var listaBandeiras = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 10; i++) {
    // var rndX = random(width);
    // var rndY = random(height);
    listaBandeiras.push(new Bandeira(200, 200));
  }

}

function draw() {
  background(0);
  for (var i = 0; i < listaBandeiras.length; i++) {
    listaBandeiras[i].desenha();
    listaBandeiras[i].move();
  }
}

function mouseClicked(){
  var novoElemento = new Bandeira(mouseX, mouseY);
  novoElemento.tipo = Math.floor(random(2));
  listaBandeiras.push(novoElemento)
}


  // Classe Bandeira
function Bandeira(px, py) {
  this.x = px;
  this.y = py;
  this.vx = random(-2, 2);
  this.vy = random(-2, 2);
  this.tam = random(10, 50);
  this.tipo = 1;

  this.desenha = function() {
    // if (transparente) { noFill();} else {fill(255);}
   if (this.tipo == 1){
     bandeirinha(this.x, this.y, this.tam);
   } else {
    estrela(this.x, this.y, this.tam);
   }
  }

  this.move = function() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.vx = -this.vx;
    if (this.x > width) this.vx = -this.vx;
    if (this.y < 0) this.vy = -this.vy;
    if (this.y > height) this.vy = -this.vy;


  }
}

function bandeirinha(x, y, s) {
  push();
  translate(x, y);
  beginShape();
  vertex(-s / 2, -s / 2);
  vertex(s / 2, -s / 2);
  vertex(s / 2, s / 2);
  vertex(0, 0);
  vertex(-s / 2, s / 2);
  endShape(CLOSE);
  pop();
}

function estrela(x, y, s) {
  push();
  translate(x, y);
  beginShape();
  vertex(-s / 2, -s / 2);
  vertex(-s / 4, 0);
  vertex(-s / 2, s / 2);
  vertex(0, s / 4);
  vertex(s / 2, s / 2);
  vertex(s / 4, 0);
  vertex(s / 2, -s / 2);
  vertex(0, -s / 4);
  endShape(CLOSE);
  pop();
}
