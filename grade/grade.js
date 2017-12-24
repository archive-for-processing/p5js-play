function setup() { // executa só no início
   createCanvas(displayWidth, displayHeight); // canvas na janela toda
   frameRate(10); // velocidade do draw
} // fim do setup()
function draw() { // loop principal do p5js
   background(0); // limpa tela com preto
   var tam_grade = 5 + mouseX;
   for (var x = tam_grade; x <= width ; x += tam_grade) {
    for (var y = tam_grade; y <= height ; y += tam_grade) {
      noStroke();
      fill(random(255), random(255),random(255),100);
      ellipse(x, y, mouseY, mouseY);    
    } // fim do loop em y
  } // fim do loop em x
} // fim do draw()
