/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: idk");
    cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	bob = new Sprite(80, 80, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = 2;
    bob.vel.x = 2;
	
	bill = new Sprite(280, 99, 30, 35, 'd');
    bill.color = 'green';
	bill.rotationSpeed = -12;
	bill.vel.x = -6;

	ben = new Sprite(100, 70, 30, 35, 'd');
    ben.color = 'yellow';
	ben.rotationSpeed = -61;
	ben.vel.x = -0.02;

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