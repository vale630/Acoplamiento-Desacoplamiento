var PLAY = 1;
var END = 0;
var gameState = PLAY;

var yoshi,yoshi1,yoshi2,yoshi3,yoshi_running,yoshi_collided;
var marioBros,marioBrosImage,invisibleGround,groundImage;
var clouds,cloudsGroup,cloudsImage,invisibleGround;

var CoinCollection = 0;
var StarCollection = 0;

var balaImage, estrella, estrellaImage,fantasmaImage,moneda,monedasImage,monedas, moneda1,moneda2,monedasGroup;
var obstacle,obstaclesGroup,obstacle1,obstacle2,obsta3le3,obstacle4,bala,fantasma;
var newImage,start,startImg,gameOver,gameOverImg ,groundImage;
var score; 

//"La historia comienza con un dinosaurio escapando de un policia por destruir la ciudad"

function preload(){
    yoshi_running = loadAnimation ("yoshi1.png","yoshi3.png");
    yoshi_colllided = loadAnimation ("yoshi2.png")

    marioBrosImage = loadImage ("marioBros.png");
    cloudsImage = loadImage ("clouds.png");

    obstacle1 = loadImage ("obstacle1.png")
    obstacle2 = loadImage ("obstacle2.png")
    obstacle3 = loadImage ("obstacle3.png")
    obstacle4 = loadImage ("obstacle4.png")

    balaImage = loadImage ("bala.png");
    estrellaImage = loadImage ("estrella.png");
    fantasmaImage = loadImage ("fantasma.png");
    monedasImage = loadImage ("moneda1.png")
    monedasImage = loadImage ("moneda2.png");

    gameOverImg = loadImage ("gameOver.png");
    startImg = loadImage ("start.png");
}

function setup() {
    createCanvas (windowWidth,windowHeight);

    marioBros = createSprite(width /2);
    marioBros.addImage("marioBros",marioBrosImage); 
    marioBros.velocityX = -8;
 
    yoshi = createSprite(100,300,30,80);
    yoshi.addAnimation("running", yoshi_running);
    yoshi.addAnimation ("collided",yoshi_collided)
    yoshi.scale = 0.1;
    
   gameOver = createSprite (840,180,20,80);
   gameOver.addImage("gameOver",gameOverImg);
   gameOver.scale = 0.3;
   
   start = createSprite (850,310,20,80);
   start.addAnimation("start",startImg);
   start.scale = 0.1

   obstaclesGroup = createGroup();
    cloudsGroup = createGroup();
    monedasGroup = createGroup();
 
    yoshi.setCollider("circle",0,0,200);
    yoshi.debug = true
   score = 0
}


function draw() {
    textSize(20);
    text("Puntuación : "+ score,1300,60)
    
    
    if(gameState === PLAY){
 
      //mover el fondo
      marioBros.velocityX = -6;
      //puntuación
     score = score + Math.round(frameCount/60);
 
       if (marioBros.x < 0){
         marioBros.x = marioBros.width/8;
       }
 
       //hacer que yoshi salte al presionar la barra espaciadora
       if(keyDown("space")&& yoshi.y >= 100) {
         yoshi.velocityY = -13;
       }
       
      yoshi.velocityY = yoshi.velocityY + 0.8
 
      gameOver.visible = false;
      start.visible = false;
 
      edges= createEdgeSprites();
     yoshi.collide(edges);
     
      if(moneda1.isTouching(yoshi)) {
         moneda1.destroyEach();
         CoinCollection=CoinCollection+50;
       }
   
       if(moneda2.isTouching(yoshi)) {
         moneda2.destroyEach();
        coinCollection=coinCollection+50;
       }
     if(estrella.isTouching(yoshi)) {
         estrella.destroyEach();
        coinCollection=coinCollection+100;
   
        if(obstaclesGroup.isTouching(yoshi)){
         gameState = END;
      }
 
    
 }
    }
}