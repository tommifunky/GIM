function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)
	noStroke()

	translate(width/2, height/2)

	const num = 30

	randomSeed(0)

	for(let j=0; j<num; j++) {

		push()
		for (let i=0; i<10; i++) {
			const l = random(30, 60)
			rotate(noise(j  + frameCount * 0.004) * 2 - 1)
			fill(random(255), random(255), random(255))
			rect(0, -10, l, 20)
			fill(random(255, random(255), random(255)))
			circle(0, 0, 20)
			fill(random(255), random(255), random(255))
			rect(0, 0, 20)
			translate(l, 0)
			scale(0.9)
		}
		pop()

		rotate(TAU/num)
	}

}