class Snake{
  constructor(){
    this.len = 1;
    this.direction = "pause";
    this.xdir = 0;
    this.ydir = 0;
    this.body = [];
    this.body[0] = createVector(0, 0);
  }
  
  show(){
    for(var i=0; i<this.body.length-1; i++){
      noStroke();
      fill(0, 255, 0);
      rect(this.body[i].x, this.body[i].y, 20, 20);
    }
    noStroke();
    fill(0, 200, 0);
    rect(this.body[this.body.length-1].x, this.body[this.body.length-1].y, 20, 20);
  }

  grow(){
    let tail = this.body[this.len-1].copy();
    this.len++;
    this.body.push(tail);
  }
  
  update(){
      let head = this.body[this.len-1].copy();
      this.body.shift();
      if(head.x === width-20 && this.direction === "right"){
        head.x = 0;
        head.y += this.ydir;
      }else if(head.x === 0 && this.direction === "left"){
        head.x = width-20;
        head.y += this.ydir;
      }else if(head.y === height-20 && this.direction === "down"){
        head.x += this.xdir;
        head.y = 0;
      }else if(head.y === 0 && this.direction === "up"){
        head.x += this.xdir;
        head.y = height-20;
      }else{
        head.x += this.xdir;
        head.y += this.ydir;
      }
      this.body.push(head);
   }
  
  eat(fruit){
    if(this.body[this.len-1].x == fruit.x &&  this.body[this.len-1].y == fruit.y){
      this.grow();
      return true;
    }
  }

  dead(){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    for(let i=0; i<this.len-1; i++){
      let part = this.body[i];
      if(part.x == x && part.y == y){
        return true;
      }
    }
    return false;
  }
}