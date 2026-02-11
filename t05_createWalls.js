/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	console.log("setup: wekonfgownfg");
    cnv = new Canvas(900, 900);   //why does it not work on the actual site now????
	world.gravity.y = 10;
	bob = new Sprite(180, 80, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = 20;
    bob.vel.x = 3;
	bob.bounciness = 0.8;
	bob.drag = 0.6;
    console.log("setup: bob armed");

	bill = new Sprite(380, 99, 24, 39, 'd');
    bill.color = 'green';
	bill.rotationSpeed = -12;
	bill.vel.x = -7;
    bill.bounciness = 0.9;
	bill.drag = 1;
	console.log("setup: bill armed");

	jeremy = new Sprite(500, 99, 33, 33, 'd');
    jeremy.color = 'black';
	jeremy.rotationSpeed = -1170;
	jeremy.vel.x = -15;
    jeremy.bounciness = 0.9;
	jeremy.rotationSpeed = -12;
	jeremy.vel.x = -6;
    jeremy.bounciness = 0.7;
	jeremy.drag = 1;
	console.log("setup: jeremy armed");

	ben = new Sprite(200, 70, 35, 25, 'd');
    ben.color = 'yellow';
	ben.rotationSpeed = -61;
	ben.vel.x = -0.02;
	ben.vel.y = -0.32;
    ben.bounciness = 1.3;
    ben.drag = 1;
	console.log("setup: ben armed");

	jeb = new Sprite(300, 300, 50);
	jeb.color = 'purple';
	jeb.rotationSpeed = 600;
	jeb.vel.x = 12;
	jeb.vel.y = 2;
	jeb.bounciness = 1;
	jeb.friction = 3;
	jeb.drag = 1;
	console.log("setup: tactical jeb armed");

	john = new Sprite(475, 250, 35);
	john.color = 'brown';
	john.rotationSpeed = 600;
	john.vel.x = -12;
	john.vel.y = -12;
	john.bounciness = 1.2;
	john.friction = 1.1;
	john.drag = 1;
	console.log("setup: john armed");


	platform_1 = new Sprite(2, 450, 7, 900, 'k');
	platform_2 = new Sprite(450, 2, 900, 7, 'k');
	platform_3 = new Sprite(898, 450, 7, 900, 'k');
	platform_4 = new Sprite(450, 898, 900, 7, 'k');
	platform_5 = new Sprite(235, 600, 400, 9, 'k');
	platform_5.rotation = 30
	platform_6 = new Sprite(560, 400, 250, 9, 'k');
	platform_6.rotation = -19
	platform_7 = new Sprite(735, 600, 225, 9, 'k');
	platform_7.rotation = -30
	spinner_1 = new Sprite(450, 680, 450, 9, 'k');
	spinner_1.rotationSpeed = 0.9
	spinner_2 = new Sprite(-10, 895, 350, 9, 'k');
	spinner_2.rotationSpeed = -5
	spinner_3 = new Sprite(870, 895, 230, 9, 'k');
	spinner_3.rotationSpeed = 7
	console.log("setup: walls placed");
	console.log("Code, may you experience eternal pain");



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








//                       pain