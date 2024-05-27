function setup() {
	createCanvas(windowWidth, windowHeight);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(180);
	translate(width / 2, height / 2);
	noStroke();

	// creo una variabile chiamata now e gli metto dentro l'ora corrente "Date()""
	// moltiplico per * TWO_PI per convertire in radianti(angoli), PI = mezzo cerchio
	// - HALF_PI, per spostare il punto iniziale alle 12

	let now = new Date();
 	let angolo_secondi = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * TWO_PI - HALF_PI;
	let angolo_minuti = (now.getMinutes() + now.getSeconds() / 60) / 60 * TWO_PI - HALF_PI;
	let angolo_ore = ((now.getHours() % 12) + now.getMinutes() / 60) / 12 * TWO_PI - HALF_PI;

	// Settore delle ore
	//arc(x,y,larghezza,altezza,punto delle 12:00,orario_attuale)
	fill(0);
	arc(0, 0, 750, 750, -HALF_PI, angolo_ore);


	// Settore dei minuti
	fill(127);
	arc(0, 0, 600, 600, -HALF_PI, angolo_minuti);

	// Settore dei secondi
	fill(255);
	arc(0, 0, 450, 450, -HALF_PI, angolo_secondi);
}
