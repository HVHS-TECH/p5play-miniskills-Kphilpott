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
	bob = new Sprite(80, 99, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = 2;
    bob.vel.x = 2;
	
	bill = new Sprite(280, 99, 30, 35, 'd');
    bill.color = 'green';
	bill.rotationSpeed = 2;
	bill.vel.x = -3;

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