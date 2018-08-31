// editor.p5js.org

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  galho(width / 2, height / 3 + height / 2, 100);
  noLoop();
}

function galho(x, y, tamanho) {
  if (tamanho > 1) {
    push();
    translate(x, y);
    strokeWeight(tamanho/10);
    push();
    rotate(radians(-45));
    line(0, 0, 0, -tamanho);
    galho(0, -tamanho, tamanho * random(0.5, 0.8));
    pop();
    push();
    rotate(radians(45));
    line(0, 0, 0, -tamanho);
    galho(0, -tamanho, tamanho * .6);
    pop();
    pop();
  }
}
function keyPressed() {
	loop();
}
