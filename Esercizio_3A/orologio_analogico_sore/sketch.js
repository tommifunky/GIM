function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(180)


	translate(width/2, height/2)

	stroke(0, 50)
	line(-200, 0, 200, 0)
	line(0, -200, 0, 200)

	noStroke()
	fill(0)

	//ORE
	push() // per isolare le operazione
	rotate(TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute()) // cerchio di 360*
	rect(-8, 25, 16, -140)
	pop()  // per finire l'isolazione di operazione


	//MINUTI
	push()
	rotate(TAU / 60 * minute() + TAU / 60 / 60 * second())
	rect(-5, 25, 10, -170)
	pop()

	//SECONDI
	push()
	const m = (new Date()).getMilliseconds() / 1000 * TAU / 60
	fill(255, 0, 0)
	rotate(TAU / 60 * second() + m)
	rect(-2, 25, 4, -200)
	circle(0, -155, 24)
	pop()

	fill(255)
	circle(0, 0, 12)
}	