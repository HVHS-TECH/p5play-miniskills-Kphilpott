/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
const VELARRAY = [-1, 1];

function preload() {

  imgBG = loadImage('../assets/images/space.png');

  imgFace = loadImage('../assets/images/face.png');

}


function setup() {
	preload();
	console.log("Images Preloaded");
	console.log("setup: wekonfgownfg");
    cnv = new Canvas(900, 900);   //why does it not work on the actual site now????
	world.gravity.y = 10;
	playerGroup = new Group();




	ball_1 = new Sprite(250, 250, 50, 'd');
    ball_1.bounciness = 0.7;
    ball_1.friction   = 0.9;
    ball_1.image = (imgFace);
    playerGroup.add(ball_1);





	platform_1 = new Sprite(2, 450, 15, 900, 'k');
	platform_2 = new Sprite(450, 2, 900, 15, 'k');
	platform_3 = new Sprite(898, 450, 15, 900, 'k');
	platform_4 = new Sprite(450, 898, 900, 15, 'k');
	platform_5 = new Sprite(235, 600, 300, 9, 'k');
	platform_5.rotation = 45
	platform_under5 = new Sprite(235, 730, 300, 9, 'k');
	platform_under5.rotation = 45
	platform_6 = new Sprite(560, 400, 250, 9, 'k');
	platform_6.rotation = -19
	platform_7 = new Sprite(735, 600, 225, 9, 'k');
	platform_7.rotation = -30
	spinner_1 = new Sprite(450, 680, 500, 9, 'k');
	spinner_1.rotationSpeed = 1.9
	spinner_2 = new Sprite(-10, 895, 350, 3, 'k');
	spinner_2.rotationSpeed = -3.5
	spinner_3 = new Sprite(890, 895, 230, 9, 'k');
	spinner_3.rotationSpeed = -5
	console.log("setup: walls placed");
	console.log("Code, may you experience eternal pain");


   

// Create a group for the aliens and spawn them
    alienGroup = new Group();
    aliens();
	console.log("Aliens Spawned");

}

function aliens() {

	for (i = 0; i < 239; i++) {


		
  alien = new Sprite(random(425, 475), random(425, 475), 20);

  alien.vel.x = random(4, 7) * random(VELARRAY);

  alien.vel.y = random(4, 7) * random(VELARRAY);

  alien.bounciness = 0.7;

  alien.friction = 0.6;

  alienGroup.add(alien);


  console.log("Error");
	}

	alienGroup.collides(playerGroup, func2Call);
}


function func2Call(_alien, _playerGroup) {

// Delete the alien which was hit

_alien.remove();

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
	imgFace.resize(50, 50);
}

/*******************************************************/
//  END OF APP
/*******************************************************/