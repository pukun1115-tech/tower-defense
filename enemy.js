class enemy {
    constructor(tileX, tileY, hp, color, speed, size) {
        this.alive = true;

        this.tileX = tileX;
        this.tileY = tileY;

        this.dir = "right";

        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;
    }
    update() {
        if (!this.alive) return;

        if (this.dir === "right") this.tileX += this.speed;
        if (this.dir === "left") this.tileX -= this.speed;
        if (this.dir === "down") this.tileY += this.speed;
        if (this.dir === "up") this.tileY -= this.speed;

        if (this.hp <= 0) {
            this.alive = false;
            return;
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        drawCircle((this.tileX + 0.5) * tileSize, (this.tileY + 0.5) * tileSize, this.size * tileSize, ctx);
    }
}