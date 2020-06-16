class Fruit{
    
  constructor() {
      this.x = floor(random(0, width) / gap) * gap;
      this.y = floor(random(0, height) / gap) * gap;
  }
  
  update(){
    this.x = floor(random(0, width) / gap) * gap;
    this.y = floor(random(0, height) / gap) * gap;
  }
  
  
  show(){
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, 20, 20);
  }
}