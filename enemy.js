class enemy {
    constructor(tileX, tileY, hp, color, speed, size) {
        this.alive = true;

        this.x = tileX + 0.5;
        this.y = tileY + 0.5;

        this.dir = "right";

        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;
    }
    update() {
        if (!this.alive) return;

        if (this.dir === "right") this.x += this.speed;
        if (this.dir === "left") this.x -= this.speed;
        if (this.dir === "down") this.y += this.speed;
        if (this.dir === "up") this.y -= this.speed;

        if (this.hp <= 0) {
            this.alive = false;
            return;
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        drawCircle(this.x * tileSize, this.y * tileSize, this.size * tileSize, ctx);
    }
}