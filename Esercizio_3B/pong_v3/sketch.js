let posizioneX, posizioneY
let velX, velY
// creo una lista di stringhe con dentro gli ASCII degli emoji
let emoji = [
	"\u2764", "\uD83D\uDC7B", "\uD83D\uDC31", "\uD83D\uDE02", "\uD83D\uDE0E", "\uD83D\uDE0A", "\uD83D\uDC4D", "\uD83D\uDE01", "\uD83D\uDC4C", "\uD83D\uDE4F", "\uD83D\uDE00", "\uD83D\uDE04", "\uD83D\uDE22", "\uD83D\uDE10", "\uD83D\uDE15", "\uD83D\uDE34", "\uD83D\uDE3B", "\uD83D\uDE0D", "\uD83D\uDE18", "\uD83D\uDE1A", "\uD83D\uDE3A", "\uD83D\uDE17", "\uD83D\uDE19", "\uD83D\uDE0C", "\uD83D\uDE07", "\uD83D\uDE05", "\uD83D\uDE11", "\uD83D\uDE1C", "\uD83D\uDE1D", "\uD83D\uDE0B", "\uD83D\uDE1B", "\uD83D\uDE13", "\uD83D\uDE31", "\uD83D\uDE20", "\uD83D\uDE21", "\uD83D\uDE08", "\uD83D\uDE12", "\uD83D\uDE24", "\uD83D\uDE14", "\uD83D\uDE23", "\uD83D\uDE16", "\uD83D\uDE2B", "\uD83D\uDE29", "\uD83D\uDE2D", "\uD83D\uDE2A"
];

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(random(0, 255), random(0, 255), random(0, 255)); // Sfondo random

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

	// creo variabile che scegle una stringa random dalla lista "emoji"
	let emojiCasuale = random(emoji);
	
	textSize(random(30, 150));
    text(emojiCasuale, posizioneX + random(1, 20), posizioneY + random(1, 20));
}