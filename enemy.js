class enemy {
    constructor(x, y, hp, color, speed, size){
        this.alive = true;
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;
    }
    update(){
        if(!this.alive) return;

        //何か

        if(this.hp <= 0){
            this.alive = false;
            return;
        }
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        drawCircle(this.x, this.y, this.size, ctx);
    }
}