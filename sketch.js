var  iss, astronaut;


 var gyms,gym, gym1, gym2,brush, brushing, bath, bath1, bath2, bathing;
 var eat, eat1,eat2, eating, move, move1, moving,drink, drink1, drink2, sleep,sleeping;

 function preload(){
  bg = loadImage ("iss.png");
  sleep = loadAnimation ("sleep.png");
  bath = loadAnimation ("bath1.png", "bath2.png")
  brush = loadAnimation("brush.png");
  gym = loadAnimation ("gym1.png", "gym2.png");
  eat = loadAnimation ("eat1.png","eat2.png");
  drink = loadAnimation ("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  }

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;  
}

function draw() {
  background(bg);  
  drawSprites();

  
  textSize(25);
  text("Instrucciones:",20,30);
  textSize (18);
  text("Flecha hacia Arriba = Cepillarse", 20,60);
  text("Flecha hacia Abajo = Ejercitarse",20,75);
  text("Flecha hacia la Izquierda =Bañarse",20,90);
  text("Flecha hacia la Derecha = Comer",20,106);   
  text("Tecla m = Moverse",20,120);

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 260;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyms", gym);
    astronaut.changeAnimation("gyms");
    astronaut.y = 260;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 260;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 260;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("Botón m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 260;
    astronaut.velocityX = 0; 
    astronaut.velocityY = 0;
  }
}