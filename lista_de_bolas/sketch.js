var lista_de_bolas = []; // variável global para guardar bolas

function setup() {
  createCanvas(800,600);
  noStroke();
 }

function draw() {
  background(128)
  for (var i = 0; i < lista_de_bolas.length; i++) { // itera pela lista de bolas
    lista_de_bolas[i].desenha();    
     lista_de_bolas[i].move();
  }
}

function mousePressed(){  
    var nova_bola = new Bola(mouseX, mouseY); // instancia uma nova bola
    lista_de_bolas.push(nova_bola);           // acrescenta a nova bola na lista
}
 
// 'Classe' Bola
function Bola(x_,y_){
  this.x = x_;
  this.y = y_;
  this.tamanho = random(10,100);
  this.cor = color(random(255),random(255),random(255),128);
  this.vel_x = random(-5,5)
  this.vel_y = random(-5,5);

  this.desenha = function(){
    fill(this.cor)
    ellipse(this.x, this.y, this.tamanho,this.tamanho)
  }
  this.move = function(){
    this.x = this.x + this.vel_x
    this.y = this.y + this.vel_y
//    this.vel_y = this.vel_y + 0.01; // gravidade
//    this.vel_y = this.vel_y * 0.999; // fricção
//    this.vel_x = this.vel_x * 0.999; // fricção
    if (this.x < 0 || this.x > width) {
      this.vel_x = -this.vel_x
    }
    if (this.y < 0 || this.y > height) {
      this.vel_y = -this.vel_y 
    }
    
  }
}
