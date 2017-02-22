var lista_de_bolas = [];

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(63);
  
  if (isMousePressed) {
    var b = new Bola(mouseX, mouseY);
    lista_de_bolas.push(b);
  }
  for (var i = 0; i < lista_de_bolas.length; i++) {
    lista_de_bolas[i].display();
  }
}

function Bola(x, y) {
  this.x = x;
  this.y = y;
  this.tamanho = 16;
  
  this.display = function() {
    rectMode(CENTER);
    fill(127);
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.tamanho, this.tamanho);
  }
}
