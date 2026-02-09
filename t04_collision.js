/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: idk");
    cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	bob = new Sprite(180, 80, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = 2;
    bob.vel.x = 2;
	bob.bounciness =1

	bill = new Sprite(380, 99, 30, 35, 'd');
    bill.color = 'green';
	bill.rotationSpeed = -12;
	bill.vel.x = -6;
    bill.bounciness = 3

	ben = new Sprite(200, 70, 30, 35, 'd');
    ben.color = 'yellow';
	ben.rotationSpeed = -61;
	ben.vel.x = -0.02;
	ben.vel.y = -0.32;
    ben.bounciness = 19

	platform_1 = new Sprite(100, 100, 5, 900, 'k');
}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white');
}


/*******************************************************/
//  END OF APP
/*******************************************************/