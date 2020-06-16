let snake;
let fruit;
let gap = 20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  fruit = new Fruit();
  setFrameRate(14);
}

function draw() {
  background(0);
  
  if(snake.eat(fruit)){
    fruit.update();
  }
  snake.update();
  snake.show();

  if(snake.dead()===true){
    background(255, 0, 0);
    noLoop();
  }
  
  fruit.show();
 
  
  fill(0, 255, 0);
  text("Score: " + int(snake.len-1), 10, height - 25);
}

function keyPressed(){ //AGGIUNGERE FUNZIONE SETDIR 
  if (keyCode === LEFT_ARROW){
    if("right"!==snake.direction){
      snake.xdir = -20;
      snake.ydir = 0;
      snake.direction = "left";
    }
  } else if (keyCode === RIGHT_ARROW){
      if("left"!==snake.direction){
        snake.xdir = 20;
        snake.ydir = 0;
        snake.direction = "right";
      }
  } else if (keyCode === UP_ARROW){
      if("down"!==snake.direction){
        snake.xdir = 0;
        snake.ydir = -20;
        snake.direction = "up";
      }
  } else if (keyCode === DOWN_ARROW){
      if("up"!==snake.direction){
        snake.xdir = 0;
        snake.ydir = 20;
        snake.direction = "down";
      }
  }
}

