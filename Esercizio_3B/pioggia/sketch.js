function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)

	for (let i = 0; i < 75; i++) { // Creiamo 75 gocce di pioggia
		let spessore = random(1, 5); // Spessore randomico tra 1 e 5
		let lunghezza = random(15, 50); // Lunghezza randomica tra 15 e 50
		let posX = random(width); // Posizione x casuale
		let posY = random(height); // Posizione y casuale
	
		stroke(0, 191, 255); // Colore della linea
		strokeWeight(spessore); // Spessore della linea
		line(posX, posY, posX, posY + lunghezza); // Stampo la linea
		// line(pos_in_x, pos_in_y, pos_fin_x, pos_fin_y)
	}
}