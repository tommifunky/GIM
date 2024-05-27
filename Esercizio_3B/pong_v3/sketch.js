let posX, posY;
let velX, velY;
let colore;

function setup() {
  createCanvas(windowWidth, windowHeight);

  posX = width / 2 + random(1, 200);
  posY = height / 2+ random(1, 200);

  velX = random(25, 34);
  velY = random(8, 25);
  
  colore = random(255, 255, 255);

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

  if (posX >= width - 65 || posX < 65) {
    velX = -velX;
  }

  if (posY >= height - 50 || posY < 50) {
    velY = -velY;
  }

  fill(random(255));
  noStroke();
  circle(posX, posY, 100);
}
