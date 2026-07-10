class bullet{
  constructor(x, y, target, speed, size, color, damage){
    this.x = x;
    this.y = y;
    this.target = target;
    this.speed = speed;
    this.size = size;
    this.color = color;
    this.damage = damage;
    this.alive = true;
  }
  update() {
    if(!this.target || !this.target.alive){
      this.alive = false;
      return;
    }
    
    const dx = this.target.x - this.x;
    const dy = this.target.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if(dist < this.speed){
      this.target.hp -= this.damage;
      this.alive = false;
      return;
    }
    
    this.x += (dx / dist) * this.speed;
    this.y += (dy / dist) * this.speed;
  }
  draw(){
    drawCircle(this.x, this.y, this.size, this.color);
  }
}
