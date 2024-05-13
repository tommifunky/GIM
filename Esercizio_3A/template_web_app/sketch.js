function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	background(220)

	let txt = "11:22:33"

	textAlign(CENTER, CENTER)
	textSize(70)

	noFill()
	stroke(0, 0, 255)

	text(txt, width/2, height/2)
}