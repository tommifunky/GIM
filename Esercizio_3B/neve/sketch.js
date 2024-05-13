let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Aggiungiamo un nuovo fiocco di neve ad intervalli regolari
  if (frameCount % 10 === 0) {
    let dimensione = random(5, 15); // Dimensione randomica tra 5 e 15
    let velocitaCaduta = random(1, 3); // Velocità di caduta randomica tra 1 e 3
    let posX = random(width); // Posizione x casuale
    let posY = -dimensione; // Iniziamo i fiocchi di neve sopra il canvas

    snowflakes.push({ posX, posY, dimensione, velocitaCaduta });
  }

  // Disegnamo e aggiorniamo ogni fiocco di neve
  for (let flake of snowflakes) {
    fill(255); // Colore del fiocco di neve (bianco)
    noStroke(); // Nessun contorno per il fiocco di neve

    ellipse(flake.posX, flake.posY, flake.dimensione, flake.dimensione); // Disegna un fiocco di neve come un'ellisse

    // Muovi il fiocco di neve verso il basso con la velocità di caduta
    flake.posY += flake.velocitaCaduta;

    // Se il fiocco di neve raggiunge il fondo del canvas, rimuovilo dall'array
    if (flake.posY > height) {
      let index = snowflakes.indexOf(flake);
      snowflakes.splice(index, 1);
    }
  }
}
