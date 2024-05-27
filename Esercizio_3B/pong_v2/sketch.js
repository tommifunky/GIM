let posizioneX, posizioneY
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0); // Per sfondo nero

	posizioneX = width/2
	posizioneY = height/2

	velX = random(15, 20)
	velY = random(5, 20)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function keyPressed() {
	if (key == 's') {
		save('pattern.png')
	}
}

function draw() {
    posizioneX = posizioneX + velX;
    posizioneY = posizioneY + velY;

    if (posizioneX >= width || posizioneX < 0) {
        velX = -velX;
    }

    if (posizioneY >= height || posizioneY < 0) {
        velY = -velY;
    }

    fill(random(256), random(256), random(256));
    noStroke();

    // Scegli un carattere casuale dalla tastiera
	// let = creo una variabile carattere
	// String.fromCharCode = Converto un numero nel suo corrispettivo ASCII
	// 65, 123 = i numeri dei codici asci dalla A alla z
    let carattere = String.fromCharCode(int(random(65, 123)));

	// textSize() = imposto la dimensione del testo, uguale a quella dell'esempio
    textSize(random(50, 200));
	// text() stampa testo in una posizione. cosa_stampo, coord x, coord y
    text(carattere, posizioneX, posizioneY);
}