/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: idk");
    cnv = new Canvas(900, 900);
	world.gravity.y = 10;
	bob = new Sprite(180, 80, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = 2;
    bob.vel.x = 2;
	bob.bounciness = 0.1

	bill = new Sprite(380, 99, 30, 35, 'd');
    bill.color = 'green';
	bill.rotationSpeed = -12;
	bill.vel.x = -6;
    bill.bounciness = 0.3

	ben = new Sprite(200, 70, 30, 35, 'd');
    ben.color = 'yellow';
	ben.rotationSpeed = -61;
	ben.vel.x = -0.02;
	ben.vel.y = -0.32;
    ben.bounciness = 0.9

	platform_1 = new Sprite(2, 450, 5, 900, 'k');
	platform_2 = new Sprite(450, 2, 900, 5, 'k');
	platform_2 = new Sprite(898, 450, 5, 900, 'k');
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