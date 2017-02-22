function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255); // limpa a tela com branco

  for (var contador = 10; contador < 100; contador += 20) {
    fill(255, 0, 0) // vermelho
    rect(5 * contador, 10, 20, 20)
  }

  for (var contador = 10; contador < mouseX; contador += 20) {
    fill(0, 255, 0) // verde
    rect(5 * contador, 50, 1 + mouseY, 1 + mouseY)
  }
}