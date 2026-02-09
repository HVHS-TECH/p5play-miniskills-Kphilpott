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
	bob.bounciness = 0.1;
	bob.drag = 1;

	bill = new Sprite(380, 99, 30, 35, 'd');
    bill.color = 'green';
	bill.rotationSpeed = -12;
	bill.vel.x = -6;
    bill.bounciness = 0.3;
	bill.drag = 1;

	jeremy = new Sprite(500, 99, 30, 35, 'd');
    jeremy.color = 'black';
<<<<<<< HEAD
	jeremy.rotationSpeed = -70;
	jeremy.vel.x = -15;
    jeremy.bounciness = 0.9;
=======
	jeremy.rotationSpeed = -12;
	jeremy.vel.x = -6;
    jeremy.bounciness = 0.3;
>>>>>>> 29d3a29d69428f4ee18aa7c8ac1c01d231ba3eb8
	jeremy.drag = 1;

	ben = new Sprite(200, 70, 30, 35, 'd');
    ben.color = 'yellow';
	ben.rotationSpeed = -61;
	ben.vel.x = -0.02;
	ben.vel.y = -0.32;
    ben.bounciness = 0.9;
    ben.drag = 1;

	jeb = new Sprite(300, 300, 50);
	jeb.color = 'purple';
	jeb.rotationSpeed = 600;
	jeb.vel.x = 12;
	jeb.vel.y = 2;
	jeb.bounciness = 1;
	jeb.friction = 3;
	jeb.drag = 1;


	platform_1 = new Sprite(2, 450, 5, 900, 'k');
	platform_2 = new Sprite(450, 2, 900, 5, 'k');
	platform_3 = new Sprite(898, 450, 5, 900, 'k');
	platform_4 = new Sprite(450, 898, 900, 5, 'k');
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