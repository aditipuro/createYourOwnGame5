var fish1img, fish2img, dolphinImg, sharkImg, turtleImg, oceanImg;
var dock, dockImg;
var trasher, trasherImg;
var bottleImg, glassImg, canImg, bagImg;
var diverImg, diver;
var score = 0;
var creatureGroup, trashGroup, trashGroup2, trashGroup3, trashGroup4, diverGroup;
var frequency = 0;

function preload()  {
  fish1img = loadImage("images/fishOrange.png"); 
  fish2img = loadImage("images/fishBlue.png");
  dolphinImg = loadImage("images/dolphin.png");
  sharkImg = loadImage("images/shark.png");
  turtleImg = loadImage("images/turtle.png");
  oceanImg = loadImage("images/oceanBgFinal.png");
  dockImg  = loadImage("images/dock-removebg-preview.png");
  trasherImg = loadImage("images/trasher.png");
  bottleImg = loadImage("images/plasticBottle.png");
  glassImg = loadImage("images/glassBottle.png");
  canImg = loadImage("images/sodaCan.png");
  bagImg = loadImage("images/chipBag.png");
  diverImg = loadImage("images/diver.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  dock = createSprite(400, 350, 20, 20);
  dock.addImage(dockImg);
  dock.scale = 2;

  trasher = createSprite(500, 290, 20, 20);
  trasher.addImage(trasherImg);
  trasher.scale = 0.1;

  diver = createSprite(1200, 500, 20, 20);
  diver.addImage(diverImg);
  diver.scale = 0.7;
  
  
  creatureGroup = new Group();
  trashGroup = new Group();
  trashGroup2 = new Group();
  trashGroup3 = new Group();
  trashGroup4 = new Group();
  diverGroup = new Group();
  diverGroup.add(diver);
}

function draw() {
  background(oceanImg); 
  diver.y = mouseY;
  
  if (score >= 0 && score < 100){
    frequency = 100;
  }

  if (score >= 100 && score < 200){
    frequency = 80;
  }

  if (score >= 200 && score < 300){
    frequency = 60;
  }

  spawnCreature();
  spawnTrash();
  spawnTrash2();
  spawnTrash3();
  spawnTrash4();

  if(diverGroup.isTouching(trashGroup)) {
    trashGroup.destroyEach();
    score = score + 10;
  }
  
  if(diverGroup.isTouching(trashGroup2)) {
    trashGroup2.destroyEach();
    score = score + 10;
  }

  if(diverGroup.isTouching(trashGroup3)) {
    trashGroup3.destroyEach();
    score = score + 10;
  }

  if(diverGroup.isTouching(trashGroup4)) {
    trashGroup4.destroyEach();
    score = score + 10;
  }
  
  if(creatureGroup.isTouching(trashGroup) || creatureGroup.isTouching(trashGroup2) ||creatureGroup.isTouching(trashGroup3) ||creatureGroup.isTouching(trashGroup4)) {
    score = score - 1;
  }

  drawSprites();
  textSize(40);
  fill("red");
  text("score: "+ score, 30, 50);
}

function spawnCreature()  {
  if (frameCount%120 === 0) {
    creature = createSprite(0, random(400, 800), 20, 20);
    var x = Math.round(random(1, 5));
    creature.velocityX = 7;
    creatureGroup.add(creature);

    switch(x) {
      case 1: creature.addImage(fish1img);
      break;

      case 2: creature.addImage(fish2img);
      break;

      case 3: creature.addImage(dolphinImg);
      break;

      case 4: creature.addImage(sharkImg);
      break;

      case 5: creature.addImage(turtleImg);
      break;

      default: break;
     }
     creature.scale = 0.2;
     creature.lifetime = 1920/7;
  }
}

function spawnTrash() {
  if (frameCount%frequency === 0) {
    trash = createSprite(455, 250, 20, 20);
    var x = Math.round(random(1, 4));
    trash.velocityY = random(2, 6);
    trash.velocityX = random(5, 7);
    trashGroup.add(trash);
    
    trash.addImage(bottleImg);
    
    
     trash.scale = 0.3;

     

  }
}

function spawnTrash2() {
  if (frameCount%frequency === 0) {
    trash = createSprite(455, 250, 20, 20);
    var x = Math.round(random(1, 4));
    trash.velocityY = random(2, 6);
    trash.velocityX = random(5, 7);
    trashGroup2.add(trash);
    
    trash.addImage(canImg);
    
     trash.scale = 0.3;

  }
}

function spawnTrash3() {
  if (frameCount%frequency === 0) {
    trash = createSprite(455, 250, 20, 20);
    var x = Math.round(random(1, 4));
    trash.velocityY = random(2, 6);
    trash.velocityX = random(5, 7);
    trashGroup3.add(trash);
    
    trash.addImage(bagImg);
        
     trash.scale = 0.3;

  }
}

function spawnTrash4() {
  if (frameCount%frequency === 0) {
    trash = createSprite(455, 250, 20, 20);
    var x = Math.round(random(1, 4));
    trash.velocityY = random(2, 6);
    trash.velocityX = random(5, 7);
    trashGroup4.add(trash);
    
    trash.addImage(glassImg);
    
     trash.scale = 0.3;
     
  }
}