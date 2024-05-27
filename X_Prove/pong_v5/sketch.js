let posX, posY;
let velX, velY;
let colore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  posX = width / 2 + random(1, 200);
  posY = height / 2 + random(1, 200);

  let angle = random(TWO_PI);
  let speed = random(8, 34);
  velX = cos(angle) * speed;
  velY = sin(angle) * speed;
  
  colore = random(255);

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

  // Cambia leggermente la direzione in modo casuale
  velX += random(-0.5, 0.5);
  velY += random(-0.5, 0.5);

  // Limita la velocità massima e minima
  let maxSpeed = 34;
  let minSpeed = 8;
  let speed = sqrt(velX * velX + velY * velY);
  if (speed > maxSpeed) {
    velX *= maxSpeed / speed;
    velY *= maxSpeed / speed;
  }
  if (speed < minSpeed) {
    velX *= minSpeed / speed;
    velY *= minSpeed / speed;
  }

  // Controlla i bordi per il rimbalzo
  if (posX >= width - 65 || posX < 65) {
    velX = -velX;
  }

  if (posY >= height - 50 || posY < 50) {
    velY = -velY;
  }

  fill(colore);
  noStroke();
  circle(posX, posY, 100);
}
