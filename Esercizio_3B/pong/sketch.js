let posX, posY;
let velX, velY;
let colore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  posX = width / 2;
  posY = height / 2;

  velX = random(25, 34);
  velY = random(8, 25);
  
  colore = random(255, 255, 255);

  dimensione_cerchio = 50; // Creo variabile dimensione iniziale del cerchio
  dimensione_incremento = 5; // Creo variabile velocità di cambiamento della dimensione

  background(0);
}

function keyPressed() {
	if (key == 's') {
		save('pattern.png')
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  posX = posX + velX;
  posY = posY + velY;

  if (posX >= width || posX < 0) {
    velX = -velX;
    colore = color(random(256), random(256), random(256)); // Cambia colore quando cambia la velocità
  }

  if (posY >= height || posY < 0) {
    velY = -velY;
    colore = color(random(256), random(256), random(256)); // Cambia colore quando cambia la velocità
  }

  // Aggiorna la dimensione del cerchio
  dimensione_cerchio += dimensione_incremento;

  // Inverto la direzione del cambiamento della dimensione SE raggiungo UNO dei limiti
  if (dimensione_cerchio >= 100 || dimensione_cerchio <= 50) {
    dimensione_incremento = -dimensione_incremento;
  }

  fill(colore); // Utilizza il colore aggiornato
  noStroke();
  circle(posX, posY, dimensione_cerchio);
}
